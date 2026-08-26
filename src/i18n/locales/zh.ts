import type { Dict } from './types';

export const zh: Dict = {
  meta: {
    title: '格润达理 — 我们把所知，变成杠杆。',
    description:
      '智力不再稀缺。格润达理把依然稀缺的东西——你的积累、你的取舍、你做完的事——变成杠杆。一切公开，数字件件有源。',
    ogTitle: '智力不再稀缺。杠杆才是新的公司。',
    ogDescription: '几个人，公司级的分量——一切公开，数字件件有源，跑在自己造的栈上。',
  },

  brand: {
    homeHref: '/zh/',
  },

  langSwitch: {
    label: '语言',
  },

  nav: {
    thesis: '信念',
    proof: '实践',
    organism: '我们',
    road: '下一步',
    github: 'GitHub',
    githubHref: 'https://github.com/green-dalii',
    menuLabel: '菜单',
  },

  hero: {
    eyebrow: 'AI 时代的杠杆',
    h1a: '智力不再稀缺。',
    h1b: '杠杆才是新的公司。',
    sub: '模型一周比一周便宜；真正稀缺的，是人的部分——你知道什么、怎么选、能不能做完。我们把这三样变成杠杆，而且自己就跑在上面。',
    ctaPrimary: '看看实践',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '在 GitHub 上加星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '人头不涨，复利在涨。',
    footnote: '全部开源 · 数字公开 · 经得起核',
  },

  stack: {
    headLabel: '如今稀缺的',
    rows: [
      { idx: '01', name: '知', gloss: '经年积累，只属于你' },
      { idx: '02', name: '品', gloss: '作品背后的取舍' },
      { idx: '03', name: '行', gloss: '做完的才算数' },
    ],
    lever: { you: '你', companyScale: '公司级' },
  },

  thesis: {
    eyebrow: '信念',
    heading: '我们为何而建。',
    items: [
      {
        index: '01',
        title: '智力不再稀缺。',
        body: '能力每个月都更便宜、更普及。护城河，已经换了地方。',
      },
      {
        index: '02',
        title: '知，是护城河。',
        body: '做过的决定、付过学费的教训、练了多年的直觉——买不到，也抄不走。它真正属于你，所以它应该留在本地，默认私有。',
      },
      {
        index: '03',
        title: '品，是分野。',
        body: '当人人都能生成一切，品味就是分野——知道什么值得被做出来。我们并行经营一家设计工作室，作为这项选择的每日练习。',
      },
      {
        index: '04',
        title: '行，是证明。',
        body: '点子不值钱，交付才值钱。几个人的团队用对杠杆，休息时活计也在往前走——规模的单位不是人头，是这个。',
      },
      {
        index: '05',
        title: '杠杆，把三者变成公司。',
        body: '知、品、行——每一样都能被对的工具放大。这个乘法，就是今天的公司。',
      },
    ],
  },

  practice: {
    eyebrow: '实践',
    heading: '信念，落到实践。',
    sub: '日常练习，顺手做成了工具。我们还在早期——所以下面每个数字都公开。',
    cards: [
      {
        tag: '知',
        title: 'obsidian-llm-wiki',
        body: 'Karpathy 的 LLM Wiki，做成本地优先的 Obsidian 插件：你的笔记变成会回答的知识库——每个答案都标注出处。',
        stats: [
          { value: '34,055', label: '下载', countTo: 34055 },
          { value: '451', label: '星标', countTo: 451 },
          { value: '11', label: '语言', countTo: 11 },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/obsidian-llm-wiki',
      },
      {
        tag: '行',
        title: 'Shift-Router',
        subtag: 'for Pi',
        body: '为 Pi 编码 Agent 设计的两层路由——日常轮次走便宜模型，关键时刻自动上强度，失败转移开箱即用。',
        stats: [{ value: '1,235', label: '月下载', countTo: 1235 }],
        note: '运行时 0 依赖 · ~196 kB',
        cta: 'npm 上的 pi-shift-router',
        href: 'https://www.npmjs.com/package/pi-shift-router',
      },
      {
        tag: '行',
        title: 'DSH Shift-Router',
        subtag: 'for DeepSeek Harness',
        body: '同一套两层设计，为 DeepSeek Harness 量身改写——任务级编排、一键升级、缓存感知路由。',
        stats: [],
        note: '62 项测试通过 · 运行时 0 依赖',
        cta: 'GitHub 上的 dsh-shift-router',
        href: 'https://github.com/green-dalii/dsh-shift-router',
      },
    ],
  },

  organism: {
    eyebrow: '我们是谁',
    heading: '几个人，公司级的分量。',
    body: [
      '不背部门和层级的包袱——只有杠杆：对的工具，干部门的活。',
      '两条轨道在这里并行：这一站造 AI 时代的杠杆，greenerdalii.top 的工作室练设计。同一批人，同一个信念——工具越来越便宜，品味从来不。',
      '我们不预言组织会变成什么样——我们就是其中之一，正跑在自己造的栈上。',
    ],
    code: [
      '$ org --chart',
      '人员：几个',
      '品牌：2',
      '触达：11 种语言',
      '许可：全部开源',
    ],
  },

  road: {
    eyebrow: '下一步',
    heading: '让作品自己开口。',
    sub: '当人人都能生成一切，话就变得便宜。我们在做的下一层，让声称自带凭证——出处人人可查，作品指向源头，数字件件有源。在它成型之前，先在自己身上练习：一切公开，一切有源。',
    practices: ['一切公开', '一切有源', '跑在自己造的栈上'],
    coda: '落地的方式也只有一种——公开。',
  },

  open: {
    eyebrow: '开放',
    heading: '自己来看。',
    body: '读源码。查数字。自己跑起来。想聊聊——写信必回。',
    cta1: 'obsidian-llm-wiki · GitHub',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'Shift-Router — shiftrouter.greenerai.top',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'GitHub 组织主页',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: '写信给我们', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT · 这里的一切都经得起查',
  },

  footer: {
    tagline: '我们把所知，变成杠杆。',
    connectLabel: '连接',
    langsLabel: '语言',
    github: 'GitHub',
    studio: '设计工作室',
    email: 'hi@greenerai.top',
    projects: {
      label: '项目',
      items: [
        { name: 'obsidian-llm-wiki', href: 'https://github.com/green-dalii/obsidian-llm-wiki' },
        { name: 'Shift-Router', href: 'https://shiftrouter.greenerai.top' },
        { name: 'Diflowy', href: 'https://diflowy.greenerai.top' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 格润达理',
    builtOpen: '在开放中构建',
  },
};
