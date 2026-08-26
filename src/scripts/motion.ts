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

  // Hero 背景：『光织』（Light Weave）——均匀密网细点阵 + 缓慢流动的光斑。
  // 取向：默认淡（基线 0.05，文字可读）—— 动面强（flow×1.8速度 + smoothstep 对比增强，亮处 0.42+）
  // 动效速度：flow 时间常数 ~0.0002-0.0004（均值周期约 20-30 帧），移动可感知但从容。
  // 性能：DPR 封顶 2、flow 网格共享（三角函数 ~74k 次/帧 → ~2 万次）、typed-array 桶索引（零 GC）、
  // 离屏/后台暂停、触屏/移动端直接禁用（用户明确要求）。低端桌面靠帧时自适应降档兜底。
  const canvas = document.querySelector<HTMLCanvasElement>('#hero-ascii');
  // 触屏/移动端：无 hover/fine 指针 → 不渲染动态背景（CSS 渐变氛围已足够，省电省 GPU）
  const coarsePointer =
    window.matchMedia('(hover: none)').matches || window.matchMedia('(pointer: coarse)').matches;
  if (canvas && !coarsePointer) {
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const DAMP = 0.09;
      const RADIUS = 320;
      const R2 = RADIUS * RADIUS;
      const INV_R = 1 / RADIUS;
      const FADE = 140; // 边缘渐隐带宽
      const BUCKETS = 14;
      let quality = 0; // 降档计数：0 全质，1/2 各 +2 步长
      let STEP = 5;
      let cw = 0;
      let ch = 0;
      let dots: { x: number; y: number; u: number; v: number; e: number; tw: number }[] = [];
      // flow 网格：cellSize=8px 邻域共享同一 flow 值，三角函数开销降 ~30 倍
      const CELL = 8;
      let fgW = 0;
      let fgH = 0;
      let fg: Float32Array = new Float32Array(1024 * 16);
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
        // 桌面密网：>=900px 用 4px；600-900 用 5px；600px 以下（桌面小窗）6px。触屏已在上面排除。
        STEP = (cw < 600 ? 6 : cw < 900 ? 5 : 4) + quality * 2; // 桌面 4px：过密回调，中间平衡值
        while ((cw / STEP) * (ch / STEP) > 130000) STEP += 1;
        dots = [];
        for (let y = STEP / 2; y < ch; y += STEP) {
          for (let x = STEP / 2; x < cw; x += STEP) {
            const e = smooth(Math.min(x, cw - x, ch - y, y * 1.4) / FADE);
            if (e <= 0.01) continue;
            dots.push({ x, y, u: x * 0.0075, v: y * 0.0075, e, tw: 0 });
          }
        }
        // 重建 flow 网格尺寸（CELL=8，采样稀疏但光斑是低频的，视觉无损）
        fgW = Math.ceil(cw / CELL);
        fgH = Math.ceil(ch / CELL);
        if (fg.length < fgW * fgH) fg = new Float32Array(fgW * fgH);
      };

      const computeFlow = (t: number) => {
        const w = fgW;
        const h = fgH;
        if (w * h > fg.length) fg = new Float32Array(w * h);
        const tt1 = t * 0.00036;
        const tt2 = t * 0.00049;
        const tt3 = t * 0.00065; // 速度 ×1.8：流动更明显
        for (let gy = 0; gy < h; gy++) {
          const gyv = (gy * CELL + CELL / 2) * 0.0075;
          const row = gy * w;
          for (let gx = 0; gx < w; gx++) {
            const gxu = (gx * CELL + CELL / 2) * 0.0075;
            const n =
              Math.sin(gxu + tt1) * Math.cos(gyv + tt2) * 0.65 +
              Math.sin(gxu * 1.7 - tt3) * 0.35 +
              Math.sin((gxu + gyv) * 0.9 + tt2) * 0.25;
            fg[row + gx] = Math.max(0, n * 0.5 + 0.5);
          }
        }
      };

      // 双色调：暗处深绿（退后），亮处薄荷（浮现）。幂混合让中间调保持绿的主导。
      const COLOR_LOW = [10, 108, 75];
      const COLOR_HIGH = [167, 243, 208];
      const lerpBucket = (bi: number, alpha: number) => {
        const t = (bi + 0.5) / BUCKETS;
        // mix = t^1.4：中间调过渡均匀（t² 在低桶处斜率过陡 → 桶间色差跳变 = 色阶断层）
        const mix = Math.pow(t, 1.4);
        const r = Math.round(COLOR_LOW[0] * (1 - mix) + COLOR_HIGH[0] * mix);
        const g = Math.round(COLOR_LOW[1] * (1 - mix) + COLOR_HIGH[1] * mix);
        const b = Math.round(COLOR_LOW[2] * (1 - mix) + COLOR_HIGH[2] * mix);
        return `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
      };

      // 预分配桶索引表（每帧复用，零 GC）
      const maxDots = 120000;
      const bIdx: Int32Array[] = Array.from({ length: BUCKETS }, () => new Int32Array(maxDots));
      const bCnt = new Int32Array(BUCKETS);

      // 帧时自适应：滚动平均 > 30ms 持续 240 帧才降一档（低端机保护，正常硬件不触发）
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
        computeFlow(t);
        // twinkle：稀疏微光（克制）
        if (Math.random() < 0.05 && dots.length) {
          const d = dots[Math.floor(Math.random() * dots.length)];
          d.tw = t + 500 + Math.random() * 300;
        }
        bCnt.fill(0);
        for (let i = 0; i < dots.length; i++) {
          const d = dots[i];
          // 从 flow 网格采样（邻域共享，几乎零三角函数）
          const gx = (d.x / CELL) | 0;
          const gy = (d.y / CELL) | 0;
          const flow = fg[gy * fgW + gx] ?? 0;
          // 对比增强：smoothstep 把中间值推向两端（暗更暗、亮更亮）→ 光斑对比强烈但整体更淡
          const fc = flow * flow * (3 - 2 * flow);
          let a = d.e * (0.05 + fc * 0.42); // 基线下调至 0.05（文字更清晰）；亮处 0.42+（动效仍有存在感）
          if (d.tw > t) {
            const k = ((d.tw - t) / 800) ** 2;
            a = Math.min(1, a + k * 0.45);
          }
          if (active) {
            const dx = d.x - lX;
            const dy = d.y - lY;
            const d2 = dx * dx + dy * dy;
            if (d2 < R2) {
              const k = 1 - Math.sqrt(d2) * INV_R;
              // 光晕：k² 衰减 ×0.45 —— 柔和提亮，不抢主体；中心与边缘连续（无断层）
              a = Math.min(1, a + k * k * 0.45);
            }
          }
          const bi = Math.min(BUCKETS - 1, (a * BUCKETS) | 0);
          bIdx[bi][bCnt[bi]++] = i;
        }
        for (let bi = 0; bi < BUCKETS; bi++) {
          const cnt = bCnt[bi];
          if (!cnt) continue;
          // 点径实打实可见：1.4px 基线 → 2.4px 亮处（肉眼可辨的密网，不再是亚阈值）
          const rr = 1.0 + (bi / BUCKETS) * 0.8; // 1.0-1.8px：再加大一档，点更饱满可见
          const list = bIdx[bi];
          ctx.fillStyle = lerpBucket(bi, ((bi + 0.4) / BUCKETS) * 0.94); // 桶内偏下采样 → 相邻桶亮度差缩减（防 banding）
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
      computeFlow(0);
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

      window.addEventListener('resize', build, { passive: true });
    }
  }
}

export {};
