/**
 * Motion system — GSAP + ScrollTrigger 实现（细腻、有心的动效层）。
 * 全部尊重 prefers-reduced-motion。
 *
 * API（data 属性，与组件已写入的属性兼容）：
 *  - data-reveal            滚动进入视口时淡入上移（GSAP power3.out）
 *  - data-reveal-delay="120" 单元素延迟（ms），实现 stagger
 *  - data-count             数字计数动画（data-count-to / data-count-suffix）
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduce) {
  // 无动效：确保内容全部可见
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-in'));
} else {
  // 滚动入场
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    el.classList.add('is-in'); // 供组件内部依赖 .is-in 的 CSS 动画（如 HeroGraph）触发
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 22 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        ease: 'power3.out',
        delay: Number(el.dataset.revealDelay ?? 0) / 1000,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  // 数字计数
  gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.countTo ?? 0);
    const suffix = el.dataset.countSuffix ?? '';
    const decimals = (el.dataset.countTo ?? '').split('.')[1]?.length ?? 0;
    const state = { v: 0 };
    gsap.to(state, {
      v: target,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent =
          state.v.toLocaleString('en-US', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          }) + suffix;
      },
    });
  });

  // Hero 大标题：遮罩内上滑入场（data-hero-line / data-hero-line-delay）
  gsap.utils.toArray<HTMLElement>('[data-hero-line]').forEach((el) => {
    gsap.fromTo(
      el,
      { yPercent: 110 },
      {
        yPercent: 0,
        duration: 1.05,
        ease: 'power4.out',
        delay: (Number(el.dataset.heroLineDelay ?? 0) / 1000) + 0.1,
        scrollTrigger: { trigger: el.closest('section'), start: 'top 80%', once: true },
      },
    );
  });

  // Hero 技术栈面板（data-hero-stack）：行交错入场 + 胶囊弹出 + 杠杆线绘制/脉冲
  const stack = document.querySelector<HTMLElement>('[data-hero-stack]');
  if (stack) {
    const rows = stack.querySelectorAll<HTMLElement>('[data-hs-row]');
    const pills = stack.querySelectorAll<HTMLElement>('[data-hs-pill]');
    const line = stack.querySelector<HTMLElement>('[data-hs-line]');
    const pulse = stack.querySelector<HTMLElement>('[data-hs-pulse]');

    const tls = gsap.timeline({
      defaults: { ease: 'power3.out' },
      scrollTrigger: { trigger: stack, start: 'top 90%', once: true },
    });
    tls.fromTo(
      rows,
      { autoAlpha: 0, y: 18 },
      { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.09 },
      0.15,
    )
      .fromTo(
        pills,
        { autoAlpha: 0, scale: 0.7 },
        { autoAlpha: 1, scale: 1, duration: 0.4, stagger: 0.09, transformOrigin: 'center center' },
        '-=0.35',
      )
      .fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: 'power2.inOut', transformOrigin: 'left center' },
        '-=0.2',
      );

    // 杠杆脉冲：持续从左扫过（一个人 → 公司级产出）
    gsap.to(pulse, {
      scaleX: 1,
      duration: 1.9,
      ease: 'sine.in',
      repeat: -1,
      repeatDelay: 1.2,
      transformOrigin: 'left center',
      delay: 1.7,
    });

    // 3D 物理按压（仅 hover 细指针设备）——克制的悬浮手感，无畸变、无抖动：
    // · 单一 rAF 循环 + 阻尼插值（lerp）：每帧只写一次 transform，单一数据源，
    //   避免多个 quickTo 补间争抢同一元素的 transform 造成的逐帧抖动
    // · transformPerspective 1800（拉远 → 近大远小极轻）
    // · 轻微向观者抬升（translateZ）+ 阴影抬升（--card-lift）→ 悬浮感
    // · 移开时阻尼回正。不改光标。
    const tiltCard = stack.querySelector<HTMLElement>('[data-hs-tilt]');
    const tiltable = tiltCard && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (tiltable) {
      const card = tiltCard!;
      const MAX_Y = 9;
      const MAX_X = 7;
      const PERSPECTIVE = 1100;
      const DAMP = 0.14; // 每帧跟随比例（越小越粘、越顺滑）
      let tx = 0;
      let ty = 0; // 目标（指针位置）
      let cx = 0;
      let cy = 0; // 当前（阻尼插值）
      let lz = 0; // 抬升当前值
      let lsc = 1; // 缩放当前值
      let lsh = 12; // 阴影抬升当前值（px）
      let active = false;
      let ticking = false;

      const startTick = () => {
        if (ticking) return;
        ticking = true;
        gsap.ticker.add(tick);
      };

      const tick = () => {
        // 移开后目标归零：旋转/抬升/缩放/阴影全部统一缓动，无瞬跳
        cx += ((active ? tx : 0) - cx) * DAMP;
        cy += ((active ? ty : 0) - cy) * DAMP;
        lz += ((active ? 8 : 0) - lz) * DAMP;
        lsc += ((active ? 1.02 : 1) - lsc) * DAMP;
        lsh += ((active ? 22 : 12) - lsh) * DAMP;
        const done =
          !active &&
          Math.abs(cx) < 0.001 &&
          Math.abs(cy) < 0.001 &&
          Math.abs(lz) < 0.001 &&
          Math.abs(lsc - 1) < 0.001 &&
          Math.abs(lsh - 12) < 0.001;
        if (done) {
          gsap.set(card, {
            rotationX: 0,
            rotationY: 0,
            z: 0,
            scale: 1,
            transformPerspective: PERSPECTIVE,
            '--card-lift': '12px',
          });
          gsap.ticker.remove(tick);
          ticking = false;
          return;
        }
        gsap.set(card, {
          rotationY: cx * 2 * MAX_Y,
          rotationX: -cy * 2 * MAX_X,
          z: lz,
          scale: lsc,
          transformPerspective: PERSPECTIVE,
          '--card-lift': `${lsh}px`,
        });
      };

      stack.addEventListener('pointermove', (e) => {
        const r = stack.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        active = true;
        startTick();
      });
      stack.addEventListener('pointerleave', () => {
        active = false;
        startTick();
      });
    }
  }

  // Hero 光晕流场背景：canvas 圆点点阵，亮度由全局连续 flow field 驱动（第一性原理）。
  // 性能：DPR 封顶 2、小屏降密、预计算 u/v 空间系数、alpha 桶批填充（fill 从 ~万次 → 12 次）、
  // 离屏/后台暂停（IntersectionObserver + visibilitychange）、resize 防抖。
  // 美学：双色调（深绿远 + 薄荷近）、加大的点（1.4-2.6px）、快速呼吸的 flow、twinkle 闪光、指针 halo 加强。
  const canvas = document.querySelector<HTMLCanvasElement>('#hero-ascii');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const DAMP = 0.1;
      const RADIUS = 280; // 指针光晕半径（+40%）
      const BUCKETS = 12;
      let STEP = 11; // 点间间距（+22%，点少 22%，大点占据空间感更强）
      let cw = 0;
      let ch = 0;
      // 点：坐标 + 预计算 u/v 空间系数 + 每点独立的 twinkle 计时
      let dots: { x: number; y: number; u: number; v: number; phase: number; twinkleUntil: number }[] = [];
      let pX = -9999;
      let pY = -9999;
      let lX = -9999;
      let lY = -9999;
      let active = false;
      let running = false;
      const startTime = performance.now();

      const build = () => {
        const r = canvas.getBoundingClientRect();
        cw = r.width;
        ch = r.height;
        canvas.width = Math.floor(cw * dpr);
        canvas.height = Math.floor(ch * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        // 小屏/高 DPR 降密（保持视觉密度一致）
        STEP = cw < 640 ? 16 : cw < 1024 && dpr > 1.5 ? 13 : 11;
        dots = [];
        for (let y = STEP / 2; y < ch; y += STEP) {
          for (let x = STEP / 2; x < cw; x += STEP) {
            dots.push({
              x,
              y,
              u: x * 0.0058,
              v: y * 0.0058,
              phase: Math.random() * Math.PI * 2,
              twinkleUntil: 0,
            });
          }
        }
      };

      // 双色调：低 alpha 深绿（远静），高 alpha 薄荷（近亮）
      const COLOR_LOW = [10, 108, 75]; // #0a6c4b
      const COLOR_HIGH = [167, 243, 208]; // #a7f3d0 mint-bright
      const lerpBucket = (bi: number, alpha: number) => {
        const t = (bi + 0.5) / BUCKETS; // 0..1
        // 用幂函数让中间色调偏深绿（远点的视觉权重），高亮处拉到薄荷
        const mix = t * t;
        const r = Math.round(COLOR_LOW[0] * (1 - mix) + COLOR_HIGH[0] * mix);
        const g = Math.round(COLOR_LOW[1] * (1 - mix) + COLOR_HIGH[1] * mix);
        const b = Math.round(COLOR_LOW[2] * (1 - mix) + COLOR_HIGH[2] * mix);
        return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
      };

      const draw = (t: number) => {
        ctx.clearRect(0, 0, cw, ch);
        // 指针拖尾
        lX += (pX - lX) * DAMP;
        lY += (pY - lY) * DAMP;
        // twinkle：每帧随机挑选一些点启动闪光（点缀·诗意在场感）
        if (Math.random() < 0.12) {
          const n = Math.floor(Math.random() * 3) + 1;
          for (let i = 0; i < n; i++) {
            const d = dots[Math.floor(Math.random() * dots.length)];
            if (d) d.twinkleUntil = t + 380 + Math.random() * 280; // 闪光持续 380-660ms
          }
        }
        // alpha 桶：先收集每桶的点（x, y, rad），再逐桶一次 fill
        const buckets: number[][] = Array.from({ length: BUCKETS }, () => []);
        for (const d of dots) {
          // 连续 flow field（u/v 已预计算），加快节奏（+75% 时间常数）
          const n =
            Math.sin(d.u + t * 0.00028) * Math.cos(d.v + t * 0.00036) * 0.7 +
            Math.sin(d.u * 1.7 - t * 0.00048) * 0.55 +
            Math.sin((d.u + d.v) * 1.3 + t * 0.00062) * 0.45;
          const flow = Math.max(0, n + 0.42); // flow 范围 0.42-1.6
          let a = 0.075 + flow * 0.20; // baseline 0.075；flow 缩放 0.20 —— 纹理在场但不竞争
          let rad = 1.0 + flow * 0.8; // 基础点 1.0px；flow 放大到 ~2.3px
          // twinkle 闪光：发光期内加亮
          if (d.twinkleUntil > t) {
            const remain = (d.twinkleUntil - t) / 600; // 0..1
            const k = remain * remain; // ease-out 衰减
            a = Math.min(1, a + k * 0.5);
            rad += k * 1.2;
          }
          if (active) {
            const dx = d.x - lX;
            const dy = d.y - lY;
            const dist = Math.hypot(dx, dy);
            if (dist < RADIUS) {
              const k = 1 - dist / RADIUS;
              a = Math.min(1, a + k * k * 0.42); // halo 强度 +75%
              rad += k * 2.0; // halo 内点 +43%
            }
          }
          const bi = Math.min(BUCKETS - 1, Math.floor(a * BUCKETS));
          buckets[bi].push(d.x, d.y, rad);
        }
        for (let bi = 0; bi < BUCKETS; bi++) {
          const vals = buckets[bi];
          if (!vals.length) continue;
          // alpha 桶的 alpha 取该桶中位数对应的实际 alpha
          const alpha = ((bi + 0.5) / BUCKETS) * 0.95;
          ctx.fillStyle = lerpBucket(bi, alpha);
          ctx.beginPath();
          for (let i = 0; i < vals.length; i += 3) {
            const rx = vals[i];
            const ry = vals[i + 1];
            const rr = vals[i + 2];
            ctx.moveTo(rx + rr, ry); // 避免相邻 arc 之间连线
            ctx.arc(rx, ry, rr, 0, Math.PI * 2);
          }
          ctx.fill();
        }
        if (running) requestAnimationFrame(draw);
      };

      const start = () => {
        if (running) return;
        running = true;
        requestAnimationFrame(draw);
      };
      const stop = () => {
        running = false;
      };

      // 后台标签页暂停；回到前台且 hero 在视口内则恢复
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) stop();
        else if (canvas.getBoundingClientRect().top < window.innerHeight) start();
      });
      // 滚动离屏暂停
      if ('IntersectionObserver' in window) {
        new IntersectionObserver((entries) => entries.forEach((e) => (e.isIntersecting ? start() : stop())), {
          threshold: 0,
        }).observe(canvas);
      }

      build();
      start();

      const heroEl = canvas.closest('.mesh-hero');
      if (heroEl) {
        heroEl.addEventListener('pointermove', (e: Event) => {
          const r = (heroEl as HTMLElement).getBoundingClientRect();
          const pe = e as PointerEvent;
          pX = pe.clientX - r.left;
          pY = pe.clientY - r.top;
          active = true;
        });
        heroEl.addEventListener('pointerleave', () => {
          active = false;
        });
      }

      window.addEventListener(
        'resize',
        () => {
          build();
        },
        { passive: true },
      );
    }
  }
}

export {};
