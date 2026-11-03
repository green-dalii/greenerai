// 全站文案字典类型 —— 唯一的文案契约。任何组件/页面不得绕过此接口。

/** 回执：把一条「声称」变成可核验的物件。source/endpoint/verify 必须真实可访问。 */
export interface Receipt {
  /** 人类可读的来源名（如 'npm downloads API'） */
  source: string;
  /** 可直接打开的源地址 */
  endpoint: string;
  /** 取自源里的哪个字段（存在才显示） */
  key?: string;
  /** 构建/核对时间（ISO 日期即可，如 '2026-08-28'） */
  fetched: string;
  /** 可复制执行的核验命令 */
  verify: string;
}

export interface ProofStat {
  value: string;
  label: string;
  /** 若设置，滚动进入视口时数字从 0 计数到此值（value 会被带千分位格式化重写） */
  countTo?: number;
  /** 计数后缀，如 ' kB'（仅与 countTo 同用时生效） */
  suffix?: string;
  /** 该数字的来源回执 */
  receipt?: Receipt;
}

/** 硬声称（依赖数 / 体积 / 许可）：每条都能自证 */
export interface Claim {
  text: string;
  receipt: Receipt;
}

export interface ProofCardData {
  tag: string;
  title: string;
  /** 副标（产品口径，如 'for Pi & DeepSeek Harness'） */
  subtag?: string;
  /** 条目内嵌一行文字微流程（纯文字，无自绘图形） */
  flow?: string;
  body: string;
  /** 受众有感的权威数字（stat 大字位；工程琐数放 claims 脚注） */
  stats: ProofStat[];
  /** 硬声称清单（每条带回执） */
  claims?: Claim[];
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
  /** Hero 右侧面板：知/品/行 三行（无徽章、无图例、无杠杆仪表、无产品名） */
  stack: {
    rows: { idx: string; name: string; gloss: string }[];
  };
  thesis: {
    eyebrow: string;
    heading: string;
    items: {
      /** 罗马数字 I–IV；收束项为空串（它不参与编号） */
      index: string;
      title: string;
      body: string;
      /** 收束项（不是第五个并列支柱，是前四条的合成） */
      synthesis?: boolean;
    }[];
  };
  practice: {
    eyebrow: string;
    heading: string;
    sub: string;
    /** 右栏凭据区标题 */
    evidenceLabel: string;
    /** 回执界面标签 */
    receiptUi: {
      open: string;
      close: string;
      source: string;
      endpoint: string;
      key: string;
      fetched: string;
      verify: string;
    };
    cards: ProofCardData[];
  };
  organism: {
    eyebrow: string;
    heading: string;
    body: string[];
    /** 双轨结构：一个品牌一轨（用本名，不用域名），桥线点明同源 */
    tracks: { name: string; role: string }[];
    bridge: string;
  };
  road: {
    eyebrow: string;
    heading: string;
    sub: string;
    /** 当下练习三条 */
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
