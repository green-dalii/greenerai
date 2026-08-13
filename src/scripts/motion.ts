/**
 * Motion system — GSAP + ScrollTrigger 实现（细腻、有心的动效层）。
 * 全部尊重 prefers-reduced-motion。
 *
 * API（data 属性，与组件已写入的属性兼容）：
 *  - data-reveal            滚动进入视口时淡入上移（GSAP power3.out）
 *  - data-reveal-delay="120" 单元素延迟（ms），实现 stagger
 *  - data-count             数字计数动画（data-count-to / data-count-suffix）
 *  - data-float             轻柔漂浮（Hero 图形节点等装饰元素）
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

  // 轻柔漂浮（装饰节点）
  gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el) => {
    const cssDelay = el.style.getPropertyValue('--float-delay');
    const delay = Number(cssDelay ? cssDelay.replace('ms', '') : el.dataset.floatDelay ?? 0) / 1000;
    gsap.to(el, {
      y: -8,
      duration: 2.6,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay,
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
}

export {};
