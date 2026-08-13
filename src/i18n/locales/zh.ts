import type { Dict } from './types';

export const zh: Dict = {
  meta: {
    title: '格润达理 — AI 原生基础设施',
    description:
      '格润达理为 AI 原生时代构建开源、本地优先的 AI 基础设施。知识层 obsidian-llm-wiki、执行层 pi-shift-router，让一个人也能以公司级的体量运转。',
    ogTitle: '格润达理——智力正在成为商品，杠杆才是新的公司。',
    ogDescription:
      '为一人公司打造的 AI 原生基础设施：上下文（obsidian-llm-wiki）、执行（pi-shift-router）、信任（研究中的方向）。',
  },

  brand: {
    homeHref: '/zh/',
  },

  langSwitch: {
    label: '语言',
  },

  nav: {
    thesis: '命题',
    proof: '证据',
    organism: '活例',
    road: '前路',
    github: 'GitHub',
    githubHref: 'https://github.com/green-dalii',
    menuLabel: '菜单',
  },

  hero: {
    eyebrow: 'AI 原生公司',
    h1a: '智力正在成为商品。',
    h1b: '杠杆才是新的公司。',
    sub: '格润达理为 AI 原生时代构建基础设施——从知识与执行两层开始，让一个人也能撬动公司级的产出。我们所做的一切都开源，我们自己就运行在它之上。',
    ctaPrimary: '探索技术栈',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '去 GitHub 点个星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    graphCaption: '你的知识，从此可查询。',
  },

  thesis: {
    eyebrow: '我们的命题',
    heading: '我们为何而建。',
    items: [
      {
        index: '01',
        title: '智力正在成为商品。',
        body: '模型的能力在降价、在普及。它不再是壁垒。',
      },
      {
        index: '02',
        title: '上下文才是护城河。',
        body: '模型学不到、唯独你有的东西——你的笔记、你的判断、你的积累——是无法复制的资产。所以我们坚持本地优先，隐私默认。',
      },
      {
        index: '03',
        title: '执行是乘数，不是人头。',
        body: '当一个人能交付过去一个团队的成果，规模的度量就不再是人头，而是杠杆。所以我们的 Agent 永不掉线。',
      },
      {
        index: '04',
        title: '开源是默认选项。',
        body: '当人人都能生成一切，透明就是最强的信号。Apache、MIT——没有藏在幕后的东西。',
      },
    ],
  },

  proof: {
    eyebrow: '证据',
    heading: '已经交付，全部公开。',
    sub: '技术栈的前两层已经上线。数字公开、源码公开、许可宽松。',
    cards: [
      {
        tag: '上下文 · 知识',
        title: 'obsidian-llm-wiki',
        body: 'Karpathy LLM Wiki 概念在 Obsidian 上的生产级实现。把笔记和 PDF 变成会回答的知识库——每个答案都标注来源。',
        stats: [
          { value: '34,055', label: '下载', countTo: 34055 },
          { value: '451', label: '星标', countTo: 451 },
          { value: '11', label: '语言', countTo: 11 },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/obsidian-llm-wiki',
      },
      {
        tag: '执行 · Agent',
        title: 'pi-shift-router',
        body: 'pi-coding-agent 的自动路由：日常任务跑廉价快模型，难题交给智能模型，服务商一掉链子就自动切换。零运行时依赖。',
        stats: [
          { value: '1,235', label: '月下载', countTo: 1235 },
          { value: '0', label: '运行时依赖', countTo: 0 },
          { value: '196 kB', label: '安装体积', countTo: 196, suffix: ' kB' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/pi-shift-router',
      },
      {
        tag: '生态 · 工作流',
        title: 'diflowy',
        body: '探索、分享、托管 Dify 工作流——自动化配方的公共广场。',
        stats: [
          { value: '32', label: '星标', countTo: 32 },
          { value: 'MIT', label: '许可证' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/diflowy',
      },
      {
        tag: '学养 · 学习',
        title: 'd2l-note',
        body: '李沐《动手学深度学习》公开课的学习笔记——把学养放在阳光下。',
        stats: [
          { value: '33', label: '星标', countTo: 33 },
          { value: 'MIT', label: '许可证' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/d2l-note',
      },
    ],
  },

  organism: {
    eyebrow: '活例',
    heading: '最小可行的组织，是种子，不是天花板。',
    body: [
      '格润达理始于一家设计工作室——那份较真至今还在我们交付的每样东西里——后来把自己重建成一个 AI 原生组织：小团队、全球的开源触达、四条产品线、十一种语言的用户。',
      '我们不是对组织未来的预言。我们就是其中一个，跑在自己搭的技术栈上。',
    ],
    code: ['$ org --chart', '节点：1', '触达：11 种语言', '许可证：全部开源'],
  },

  road: {
    eyebrow: '前路',
    heading: '技术栈，一层一层。',
    sub: '两层已经交付。第三层，是我们正在前往的方向——没有承诺，只有一条看得见的路。',
    layers: [
      {
        key: '01 · 上下文',
        title: '上下文即护城河。',
        body: 'obsidian-llm-wiki 让你的上下文可查询——本地优先，来源可溯。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '02 · 执行',
        title: '执行即乘数。',
        body: 'pi-shift-router 让 Agent 永不掉线——每个任务用对模型，故障自动切换。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '03 · 信任',
        title: '信任是新的通货。',
        body: '当人人都能生成一切，溯源、验证与问责就成了稀缺品。这是我们正在前往的方向。',
        status: '研究中',
        statusType: 'researching',
      },
    ],
    coda: '智力正在成为商品。杠杆是新的公司。信任是新的通货。',
  },

  open: {
    eyebrow: '开放',
    heading: '这个时代是开放的。',
    body: '安装插件。运行路由。阅读源码。或者写封信来——我们都会回。',
    cta1: '安装 obsidian-llm-wiki',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'npm 安装 pi-shift-router',
    cta2Href: 'https://www.npmjs.com/package/pi-shift-router',
    cta3: '浏览 GitHub 组织',
    cta3Href: 'https://github.com/green-dalii',
    note: '所有项目均开源——Apache-2.0 与 MIT。可以 fork，可以运行，可以改进。',
  },

  footer: {
    tagline: 'AI 原生基础设施，公开构建。',
    connectLabel: '连接',
    langsLabel: '语言',
    github: 'GitHub',
    studio: '设计工作室',
    rights: '© 2026 格润达理。保留所有权利。',
    builtOpen: '在开放中构建',
  },
};
