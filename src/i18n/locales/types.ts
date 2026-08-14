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
  body: string;
  stats: ProofStat[];
  cta: string;
  href: string;
}

export interface RoadLayerData {
  key: string;
  title: string;
  body: string;
  status: string;
  statusType: 'shipped' | 'researching';
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
    /** Hero 右侧面板的图注 */
    stackCaption: string;
    /** Hero 底部 mono 脚注（许可/开源声明） */
    footnote: string;
  };
  /** Hero 右侧状态面板（所知/所行/所信，无产品名） */
  stack: {
    headLabel: string;
    legend: { shipped: string; researching: string };
    rows: { idx: string; name: string; status: string; shipped: boolean }[];
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
    code: string[];
  };
  road: {
    eyebrow: string;
    heading: string;
    sub: string;
    layers: RoadLayerData[];
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
    note: string;
  };
  footer: {
    tagline: string;
    connectLabel: string;
    langsLabel: string;
    github: string;
    studio: string;
    /** 项目链接带（diflowy / d2l-note 在此，不占主叙事） */
    projects: { label: string; items: { name: string; href: string }[] };
    rights: string;
    builtOpen: string;
  };
}
