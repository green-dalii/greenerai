/**
 * Motion system —— GSAP 驱动的动效层。全部尊重 prefers-reduced-motion。
 *
 * 契约（data 属性，与组件写入的属性兼容）：
 *  - data-reveal              进入视口时淡入上移
 *  - data-reveal-delay="120"  单元素延迟（ms），实现 stagger
 *  - data-count               数字计数（data-count-to / data-count-suffix）
 *  - data-hero-line           遮罩内上滑（data-hero-line-delay）
 *  - data-hero-stack          Hero 稀缺面板编排
 *
 * 可靠性（这是修复过的真实缺陷）：
 *  1. 隐藏态由 `html.motion-ready` 门控，**不由 `.js` 门控** —— 脚本自身失败时内容保持可见，
 *     不会出现「整页空白」。
 *  2. 入场用 IntersectionObserver 而非逐元素 ScrollTrigger：快速滚动/键盘翻页不会漏触发，
 *     且不注册滚动监听。
 *  3. 3s 兜底扫描：任何已进入视口却仍未显现的元素强制显现。
 *  4. beforeprint 强制全可见（打印/导出 PDF 不再输出空白页）。
 */
import gsap from 'gsap';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

const all = <T extends Element>(sel: string) => Array.from(document.querySelectorAll<T>(sel));

/** 无动效地让一个元素显现（也用作兜底） */
const showNow = (el: HTMLElement) => {
  if (el.dataset.revealed === '1') return;
  el.dataset.revealed = '1';
  el.classList.add('is-in');
  gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'transform' });
};

const revealAll = () => {
  all<HTMLElement>('[data-reveal]').forEach(showNow);
  all<HTMLElement>('[data-hero-line]').forEach((el) => {
    if (el.dataset.revealed === '1') return;
    el.dataset.revealed = '1';
    gsap.set(el, { yPercent: 0 });
  });
  all<HTMLElement>('[data-count]').forEach((el) => {
    if (el.dataset.counted === '1') return;
    el.dataset.counted = '1';
    const target = Number(el.dataset.countTo ?? 0);
    el.textContent = formatCount(target, el.dataset.countSuffix ?? '');
  });
};

const formatCount = (v: number, suffix: string, decimals = 0) =>
  v.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }) + suffix;

/**
 * 签名缓动（D3）。
 * GSAP 不接受 cubic-bezier 字符串，所以这里用 `expo.out` —— 它与 CSS 侧的
 * `cubic-bezier(.16,.84,.24,1)` 是同一条手感：起步快、收尾长、没有回弹。
 * 全站只允许这两处定义（这里是 GSAP，global.css 里是 --ease-signature），改一起改。
 */
const EASE = 'expo.out';

/** 计数动画 */
const countUp = (el: HTMLElement) => {
  if (el.dataset.counted === '1') return;
  el.dataset.counted = '1';
  const target = Number(el.dataset.countTo ?? 0);
  const suffix = el.dataset.countSuffix ?? '';
  const decimals = (el.dataset.countTo ?? '').split('.')[1]?.length ?? 0;
  const state = { v: 0 };
  gsap.to(state, {
    v: target,
    duration: 1.4,
    ease: EASE,
    onUpdate: () => {
      el.textContent = formatCount(state.v, suffix, decimals);
    },
  });
};

/** 淡入上移 */
const fadeUp = (el: HTMLElement) => {
  if (el.dataset.revealed === '1') return;
  el.dataset.revealed = '1';
  el.classList.add('is-in');
  gsap.to(el, {
    autoAlpha: 1,
    y: 0,
    // 收尾拉长到 0.9s：字落定之后还要再「沉」一下，读起来才不像弹窗
    duration: 0.9,
    ease: EASE,
    delay: Number(el.dataset.revealDelay ?? 0) / 1000,
  });
};

if (reduce) {
  // 无动效：内容直接全部可见
  root.classList.remove('motion-ready');
  revealAll();
} else {
  /* ---- 初始态：先设好隐藏，再开 motion-ready，避免闪现 ---- */
  const revealEls = all<HTMLElement>('[data-reveal]');
  gsap.set(revealEls, { autoAlpha: 0, y: 22 });

  const heroLines = all<HTMLElement>('[data-hero-line]');
  gsap.set(heroLines, { yPercent: 110 });

  root.classList.add('motion-ready');

  /* ---- 统一观察器：一个 IO 覆盖淡入 / 计数 / hero 标题 ---- */
  const observed = new Map<Element, () => void>();
  revealEls.forEach((el) => observed.set(el, () => fadeUp(el)));
  all<HTMLElement>('[data-count]').forEach((el) => {
    const prev = observed.get(el);
    observed.set(el, () => {
      prev?.();
      countUp(el);
    });
  });

  const heroSection = heroLines[0]?.closest('section');
  if (heroSection) {
    observed.set(heroSection, () => {
      heroLines.forEach((el) => {
        if (el.dataset.revealed === '1') return;
        el.dataset.revealed = '1';
        gsap.to(el, {
          yPercent: 0,
          duration: 1.05,
          ease: EASE,
          delay: (Number(el.dataset.heroLineDelay ?? 0) / 1000) + 0.1,
        });
      });
    });
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const run = observed.get(entry.target);
          io.unobserve(entry.target);
          run?.();
        }
      },
      // 底部内缩 6%：元素真正进入视线才触发，不提前抢戏
      { rootMargin: '0px 0px -6% 0px', threshold: 0 },
    );
    observed.forEach((_, el) => io.observe(el));

    // 兜底扫描：IO 之外的保险。每 800ms 扫一遍还没显现的元素，
    // 只要它在视口内就立刻显现；全部显现后扫描自我取消（零常驻成本）。
    const pending = new Set<Element>(observed.keys());
    const sweep = () => {
      pending.forEach((el) => {
        if ((el as HTMLElement).dataset.revealed === '1') {
          pending.delete(el);
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) {
          observed.get(el)?.();
          pending.delete(el);
        }
      });
      if (pending.size === 0) window.clearInterval(timer);
    };
    const timer = window.setInterval(sweep, 800);
    window.setTimeout(sweep, 1200);
  } else {
    revealAll();
  }

  // 打印/导出 PDF：全部可见，不留空白页
  window.addEventListener('beforeprint', revealAll);
  window.matchMedia('print').addEventListener?.('change', (e) => {
    if (e.matches) revealAll();
  });

  // Hero 稀缺面板（data-hero-stack）：行交错入场
  const stack = document.querySelector<HTMLElement>('[data-hero-stack]');
  if (stack) {
    const rows = stack.querySelectorAll<HTMLElement>('[data-hs-row]');

    const playStack = () => {
      const tls = gsap.timeline({ defaults: { ease: EASE } });
      tls.fromTo(
        rows,
        { autoAlpha: 0, y: 18 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.1 },
        0.12,
      );
    };

    if ('IntersectionObserver' in window) {
      const stackIo = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            stackIo.disconnect();
            playStack();
          }
        },
        { threshold: 0.2 },
      );
      stackIo.observe(stack);
    } else {
      playStack();
    }

  }
  /* ---- 导航当前节高亮（D1）----
     复用 IntersectionObserver，不挂滚动监听。
     rootMargin 把「判定带」压到视口中段：谁占据了屏幕中间，谁就是当前位置。 */
  const navLinks = all<HTMLAnchorElement>('[data-nav-link]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    const byId = new Map<string, HTMLAnchorElement>();
    navLinks.forEach((a) => byId.set(a.dataset.navLink ?? '', a));
    const targets = [...byId.keys()]
      .map((id) => document.querySelector<HTMLElement>(id))
      .filter((el): el is HTMLElement => !!el);

    const setActive = (id: string) => {
      navLinks.forEach((a) => {
        const on = a.dataset.navLink === id;
        a.toggleAttribute('data-active', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };

    const navIo = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          setActive('#' + e.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    targets.forEach((el) => navIo.observe(el));
  }

  // Hero 背景的点阵 canvas 已移除：
  // 粒子场是 AI 站点的陈词，且在窄屏压在正文背后损害可读性。
  // 现在 Hero 的「氛围」由 CSS 版式骨架（12 栏发丝线 + 裁切标记）承担 —— 零 canvas、零 rAF、零 GPU 常驻。
}

export {};
