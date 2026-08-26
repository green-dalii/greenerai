// 全站文案字典类型 —— 唯一的文案契约。任何组件/页面不得绕过此接口。

export interface ProofStat {
  value: string;
  label: string;
  /** 若设置，滚动进入视口时数字从 0 计数到此值（value 会被带千分位格式化重写） */
  countTo?: number;
  /** 计数后缀，如 ' kB'（仅与 countTo 同用时生效） */
  suffix?: string;
}

export interface ProofCardData {
  tag: string;
  title: string;
  /** 副标（产品口径，如 'for Pi'） */
  subtag?: string;
  /** 卡片内嵌一行文字微流程（如「你的笔记 → 图检索 → 回答，每句附出处」），无自绘图形 */
  flow?: string;
  body: string;
  /** 受众有感的权威数字（stat-display 大字位；工程琐数放 note 脚注） */
  stats: ProofStat[];
  /** 工程琐数脚注（依赖数/测试数等），小字显示 */
  note?: string;
  cta: string;
  href: string;
}

export interface Dict {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  brand: { homeHref: string };
  langSwitch: { label: string };
  nav: {
    thesis: string;
    proof: string;
    organism: string;
    road: string;
    github: string;
    githubHref: string;
    menuLabel: string;
  };
  hero: {
    eyebrow: string;
    h1a: string;
    h1b: string;
    sub: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    /** 面板下方的一行图注（杠杆语义收束） */
    stackCaption: string;
    /** Hero 底部 mono 脚注 */
    footnote: string;
  };
  /** Hero 右侧面板：知/品/行 三行 + 一句话注解（无状态徽章，无产品名） */
  stack: {
    headLabel: string;
    rows: { idx: string; name: string; gloss: string }[];
    lever: { you: string; companyScale: string };
  };
  thesis: {
    eyebrow: string;
    heading: string;
    items: { index: string; title: string; body: string }[];
  };
  practice: {
    eyebrow: string;
    heading: string;
    sub: string;
    cards: ProofCardData[];
  };
  organism: {
    eyebrow: string;
    heading: string;
    body: string[];
    /** 双轨结构卡：一个品牌一张卡（用本名，不用域名），桥线点明同源 */
    tracks: { name: string; role: string }[];
    bridge: string;
  };
  road: {
    eyebrow: string;
    heading: string;
    sub: string;
    /** 当下练习三条（chips 展示） */
    practices: string[];
    coda: string;
  };
  open: {
    eyebrow: string;
    heading: string;
    body: string;
    cta1: string;
    cta1Href: string;
    cta2: string;
    cta2Href: string;
    cta3: string;
    cta3Href: string;
    /** 写信入口（mailto，真实可达） */
    email: { label: string; href: string };
    note: string;
  };
  footer: {
    tagline: string;
    connectLabel: string;
    langsLabel: string;
    github: string;
    studio: string;
    /** 邮箱（mailto 直显地址） */
    email: string;
    /** 项目链接带（diflowy / d2l-note 在此，不占主叙事） */
    projects: { label: string; items: { name: string; href: string }[] };
    rights: string;
    builtOpen: string;
  };
}
