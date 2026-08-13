import type { Dict } from './types';

export const zh: Dict = {
  meta: {
    title: '格润达理 — AI 原生基础设施',
    description:
      '格润达理为 AI 原生时代构建开源、本地优先的 AI 基础设施——知识有问必答，Agent 永不停摆，让一个人也有公司的体量。我们自己就运行在这套栈上。',
    ogTitle: '格润达理——智力不再稀缺，杠杆才是新的公司。',
    ogDescription:
      '为一人公司打造的 AI 原生基础设施：上下文（obsidian-llm-wiki）、执行（pi-shift-router）、信任（研究中的方向）。全部开源，一切公开。',
  },

  brand: {
    homeHref: '/zh/',
  },

  langSwitch: {
    label: '语言',
  },

  nav: {
    thesis: '信念',
    proof: '已交付',
    organism: '我们',
    road: '下一步',
    github: 'GitHub',
    githubHref: 'https://github.com/green-dalii',
    menuLabel: '菜单',
  },

  hero: {
    eyebrow: 'AI 原生基础设施',
    h1a: '智力不再稀缺。',
    h1b: '杠杆才是新的公司。',
    sub: '模型越来越便宜，也越来越聪明。真正稀缺的，是你知道什么、又拿它做了什么。格润达理为 AI 原生时代搭建基础设施——知识有问必答，Agent 永不停摆；全部开源，我们自己就运行其上。',
    ctaPrimary: '探索技术栈',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '去 GitHub 点个星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '一个人。一套栈。公司级的产出。',
    footnote: 'Apache-2.0 · MIT · 一切都在公开处',
  },

  thesis: {
    eyebrow: '信念',
    heading: '我们为何而建。',
    items: [
      {
        index: '01',
        title: '智力不再稀缺。',
        body: '模型每个月都更聪明、更便宜。生意的瓶颈不再是能力，而是你拿它做了什么。',
      },
      {
        index: '02',
        title: '上下文才是护城河。',
        body: '笔记、判断、积累——只有你有的东西，买不到也抄不走。所以我们让它们留在你的机器上，默认私有。',
      },
      {
        index: '03',
        title: '执行才是杠杆。',
        body: '一个人用对工具，能顶过去一个团队。规模的单位不是人头，而是你的活计在你休息时还往前不往前走。',
      },
      {
        index: '04',
        title: '开放是默认选项。',
        body: '当任何人都能生成任何东西，唯一能证明可信的就是透明。所以代码开源、许可宽松、数字公开。',
      },
    ],
  },

  proof: {
    eyebrow: '已交付',
    heading: '已经交付，全部公开。',
    sub: '我们没有等谁批准。栈的前两层已经上线，下面的每个数字都公开可查。',
    cards: [
      {
        tag: '上下文 · 知识',
        title: 'obsidian-llm-wiki',
        body: 'Karpathy 的 LLM Wiki，做成 Obsidian 插件。笔记与 PDF 变成会回答的知识库——每个答案都标注来源。',
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
        body: 'pi-coding-agent 的自动路由：日常任务交给便宜的快模型，难题交给聪明模型，服务商掉链子就自动切换。零运行时依赖。',
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
        body: 'Dify 工作流的公共广场——探索、分享、托管那些替你把活干完的配方。',
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
        body: '李沐《动手学深度学习》公开课笔记——把学养放在阳光下，从第一讲开始。',
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
    eyebrow: '活的例证',
    heading: '最小可行的组织，是种子，不是天花板。',
    body: [
      '格润达理脱胎于一家设计工作室——那份较真至今还在我们交付的每样东西里——如今是一个 AI 原生组织：小团队、全球触达、四条产品线、用户说着十一种语言。',
      '我们不是预言。我们就是例证——一个运行在自己构建的栈上的组织。',
    ],
    code: ['$ org --chart', '节点：1', '触达：11 种语言', '许可证：全部开源'],
  },

  road: {
    eyebrow: '下一步',
    heading: '下一层，是信任。',
    sub: '当人人都能生成一切，"谁做的、依据什么、能不能验证"就成了稀缺品。我们在做回答这些问题的层——还没有承诺，只有一条看得见的路。',
    layers: [
      {
        key: '01 · 上下文',
        title: '知识，可查询。',
        body: 'obsidian-llm-wiki——本地优先，来源可溯。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '02 · 执行',
        title: 'Agent，不停摆。',
        body: 'pi-shift-router——每个任务用对模型，故障自动切换。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '03 · 信任',
        title: '出处，可验证。',
        body: '"谁做的、能不能查"——正在研究的那一层。',
        status: '研究中',
        statusType: 'researching',
      },
    ],
    coda: '智力不再稀缺。杠杆才是新的公司。信任是新的通货。',
  },

  open: {
    eyebrow: '开放',
    heading: '这个时代是开放的。',
    body: '安装插件。运行路由。阅读源码。或者写信给我们——必回。',
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
