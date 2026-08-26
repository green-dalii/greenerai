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

  // Hero 背景：『光织』（Light Weave）——亚阈值细点点阵（~0.5px、间距 5px），
  // 单点低于视觉分辨率，整场融为织物/纸纹；流场是透过织物的光斑，缓慢漂移。
  // 密度：桌面 3px 网格 + 0.8-1.6px 点 + 明亮基线（密度与面积同步提，视觉可见差异）
  // 设计原理：点大 + 网格可见 = 像素屏（拒绝）；点小 + 密网 + 边缘渐隐 = 织物质感（追求）。
  // 性能：DPR 封顶 2、按视口自适应步长、typed-array 桶索引（零 GC）、边缘渐隐预计算、
  // 离屏/后台暂停、帧时自适应降档（低端机自动降密）。
  const canvas = document.querySelector<HTMLCanvasElement>('#hero-ascii');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const DAMP = 0.09;
      const RADIUS = 240;
      const R2 = RADIUS * RADIUS;
      const INV_R = 1 / RADIUS;
      const FADE = 150; // 边缘渐隐带宽
      const BUCKETS = 14;
      let quality = 0; // 降档计数：0 全质，1/2 各 +2 步长
      let STEP = 5;
      let cw = 0;
      let ch = 0;
      let dots: { x: number; y: number; u: number; v: number; e: number; tw: number }[] = [];
      let pX = -9999;
      let pY = -9999;
      let lX = -9999;
      let lY = -9999;
      let active = false;
      let running = false;

      const smooth = (v: number) => {
        const c = Math.max(0, Math.min(1, v));
        return c * c * (3 - 2 * c);
      };

      const build = () => {
        const r = canvas.getBoundingClientRect();
        cw = r.width;
        ch = r.height;
        canvas.width = Math.floor(cw * dpr);
        canvas.height = Math.floor(ch * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        // 细网基准步长 + 质量降档 + 数量安全阀（≤55k 点）
        STEP = (cw < 600 ? 6 : cw < 900 ? 5 : 3.5) + quality * 2; // 密档覆盖 900+ 视口；900 以下退一档（性能）
        while ((cw / STEP) * (ch / STEP) > 150000) STEP += 1;
        dots = [];
        for (let y = STEP / 2; y < ch; y += STEP) {
          for (let x = STEP / 2; x < cw; x += STEP) {
            // 边缘渐隐：距边 FADE 内平滑衰减 —— 织物有边界，不生硬切边
            const e = smooth(Math.min(x, cw - x, ch - y, y * 1.4) / FADE);
            if (e <= 0.01) continue;
            dots.push({
              x,
              y,
              u: x * 0.0075,
              v: y * 0.0075,
              e,
              tw: 0,
            });
          }
        }
      };

      // 双色调：暗处深绿（退后），亮处薄荷（浮现）。幂混合让中间调保持绿的主导。
      const COLOR_LOW = [10, 108, 75];
      const COLOR_HIGH = [167, 243, 208];
      const lerpBucket = (bi: number, alpha: number) => {
        const t = (bi + 0.5) / BUCKETS;
        const mix = t * t;
        const r = Math.round(COLOR_LOW[0] * (1 - mix) + COLOR_HIGH[0] * mix);
        const g = Math.round(COLOR_LOW[1] * (1 - mix) + COLOR_HIGH[1] * mix);
        const b = Math.round(COLOR_LOW[2] * (1 - mix) + COLOR_HIGH[2] * mix);
        return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
      };

      // 预分配桶索引表（每帧复用，零 GC）
      const maxDots = 150000;
      const bIdx: Int32Array[] = Array.from({ length: BUCKETS }, () => new Int32Array(maxDots));
      const bCnt = new Int32Array(BUCKETS);

      // 帧时自适应：滚动平均 > 30ms 持续 240 帧（~4s）才降一档——防加载抖动/低级环境误降吞掉视觉密度
      let ftAcc = 0;
      let ftN = 0;
      let lastT = 0;

      const draw = (t: number) => {
        if (lastT) {
          ftAcc += t - lastT;
          if (++ftN >= 240) {
            if (ftAcc / ftN > 30 && quality < 2) {
              quality += 1;
              build();
            }
            ftAcc = 0;
            ftN = 0;
          }
        }
        lastT = t;
        ctx.clearRect(0, 0, cw, ch);
        lX += (pX - lX) * DAMP;
        lY += (pY - lY) * DAMP;
        // twinkle：稀疏微光（克制）
        if (Math.random() < 0.07 && dots.length) {
          const d = dots[Math.floor(Math.random() * dots.length)];
          d.tw = t + 420 + Math.random() * 320;
        }
        bCnt.fill(0);
        const tt1 = t * 0.0002;
        const tt2 = t * 0.00027;
        const tt3 = t * 0.00036;
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          // 三项连续流场：空间频率决定光斑尺度（~800px 大池 + ~500px 波动）
          const n =
            Math.sin(d.u + tt1) * Math.cos(d.v + tt2) * 0.65 +
            Math.sin(d.u * 1.7 - tt3) * 0.35 +
            Math.sin((d.u + d.v) * 0.9 + tt2) * 0.25;
          const flow = Math.max(0, n * 0.5 + 0.5); // 0..1
          let a = d.e * (0.08 + flow * 0.34); // 边缘渐隐 ×（明亮基线 + 光斑提亮）—— 密度提升必须配合亮度，否则看不见
          // twinkle 微光
          if (d.tw > t) {
            const k = ((d.tw - t) / 740) ** 2;
            a = Math.min(1, a + k * 0.45);
          }
          // 指针光晕：平方衰减；包围盒外跳过（省 sqrt）
          if (active) {
            const dx = d.x - lX;
            const dy = d.y - lY;
            const d2 = dx * dx + dy * dy;
            if (d2 < R2) {
              const k = 1 - Math.sqrt(d2) * INV_R;
              a = Math.min(1, a + k * k * 0.32);
            }
          }
          const bi = Math.min(BUCKETS - 1, (a * BUCKETS) | 0);
          bIdx[bi][bCnt[bi]++] = i;
        }
        // 半径由桶号确定性导出（亚像素下与逐点半径无视觉差异）
        for (let bi = 0; bi < BUCKETS; bi++) {
          const cnt = bCnt[bi];
          if (!cnt) continue;
          const rr = 0.8 + (bi / BUCKETS) * 0.8; // 点随密度放大（0.8-1.6px），密而不糊
          const list = bIdx[bi];
          ctx.fillStyle = lerpBucket(bi, ((bi + 0.5) / BUCKETS) * 0.85);
          ctx.beginPath();
          for (let j = 0; j < cnt; j++) {
            const d = dots[list[j]];
            ctx.moveTo(d.x + rr, d.y);
            ctx.arc(d.x, d.y, rr, 0, Math.PI * 2);
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
