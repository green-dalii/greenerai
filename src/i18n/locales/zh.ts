import type { Dict } from './types';

export const zh: Dict = {
  meta: {
    title: '格润达理 — AI 原生基础设施',
    description:
      '格润达理为 AI 原生时代搭建基础设施：当智力不再稀缺，真正稀缺的是人性的部分——你知道什么、怎么判断、能否被信任。全部开源，公开构建，我们自己就运行其上。',
    ogTitle: '格润达理——智力不再稀缺，杠杆才是新的公司。',
    ogDescription: '一个小团队，公司级的触达——靠杠杆与构造式信任。一切公开，数字件件有源，没有幕布。',
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
    eyebrow: 'AI 原生基础设施',
    h1a: '智力不再稀缺。',
    h1b: '杠杆才是新的公司。',
    sub: '模型越来越便宜，也越来越聪明。真正稀缺的，是工作中人性的部分——你知道什么、怎么判断、能否被信任。我们为这些人性的资产造杠杆——并且自己就运行其上。',
    ctaPrimary: '看看实践',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '去 GitHub 点个星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '一个人，被放大。',
    footnote: '公开 · 有源 · 可查——信任靠构造',
  },

  stack: {
    headLabel: '如今稀缺的',
    legend: { shipped: '已交付', researching: '研究中' },
    rows: [
      { idx: '01', name: '所知', status: '已交付', shipped: true },
      { idx: '02', name: '所行', status: '已交付', shipped: true },
      { idx: '03', name: '所信', status: '研究中', shipped: false },
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
        body: '模型每个月都更聪明、更便宜。能力在降价、在普及——生意的护城河已经换了地方。',
      },
      {
        index: '02',
        title: '所知，是护城河。',
        body: '你懂而模型不懂的——积累的判断、决策、历史——买不到，也抄不走。它是唯一真正属于你的资产，所以它应该留在你的机器上，默认私有。',
      },
      {
        index: '03',
        title: '所行，是杠杆。',
        body: '一个小团队用对工具，能交付过去一个大团队的量。规模的单位不再是人数，而是你的活计在你休息时还往前不往前走。',
      },
      {
        index: '04',
        title: '品味，是分野。',
        body: '当人人都能生成，分野在于你选择做出什么。我们并行经营一家设计工作室——不是来处，是每天练习判断的地方。',
      },
      {
        index: '05',
        title: '信任，是通货。',
        body: '当人人都能生成一切，承诺就不再值钱。信任只能被制造，不能被承诺：声称人人可查，作品自带出处，诚实比撒谎更便宜。',
      },
    ],
  },

  practice: {
    eyebrow: '实践',
    heading: '信念，落到实践。',
    sub: '这些不是终局，是开胃菜——是在运行上面那些信念时顺手造出来的。我们还在早期，下面的每个数字都公开。',
    cards: [
      {
        tag: '所知',
        title: 'obsidian-llm-wiki',
        body: 'Karpathy 的 LLM Wiki，做成本地优先的 Obsidian 插件：你的文件变成会回答的知识库——每个答案都标注出处。',
        stats: [
          { value: '34,055', label: '下载', countTo: 34055 },
          { value: '451', label: '星标', countTo: 451 },
          { value: '11', label: '语言', countTo: 11 },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/obsidian-llm-wiki',
      },
      {
        tag: '所行',
        title: 'pi-shift-router',
        body: '给编码 Agent 的自动路由：日常任务用便宜的快模型，难题用聪明模型，服务商掉链子就自动切换。零运行时依赖。',
        stats: [
          { value: '1,235', label: '月下载', countTo: 1235 },
          { value: '0', label: '运行时依赖', countTo: 0 },
          { value: '196 kB', label: '安装体积', countTo: 196, suffix: ' kB' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/pi-shift-router',
      },
    ],
  },

  organism: {
    eyebrow: '活的例证',
    heading: '最小可行的组织，是种子，不是天花板。',
    body: [
      '一个小团队，公司级的触达——用户说着十一种语言，一切公开，没有幕布。',
      '我们并行运行两条纪律：格润达理搭建 AI 原生时代的基础设施，greenerdalii.top 的工作室做设计。不是传承，不是副业——是同一信念的两副面孔：能力贬值，判断升值。',
      '我们不是关于组织未来的预言。我们就是其中之一——运行在自己构建的栈上。',
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
    heading: '下一层，是信任。',
    sub: '不是承诺的，是制造的。在人人能生成一切的时代，组织如何让诚实成为结构？这是我们的方向：出处人人可查，作品指向源头，数字件件有源。还没有承诺，只有一条看得见的路。在那之前，我们先自己练习。',
    layers: [
      {
        key: '01 · 所知',
        title: '所知，可查询。',
        body: '你积累的判断，变得可查询——本地优先，答案件件有出处。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '02 · 所行',
        title: '所行，永不停摆。',
        body: '每个任务用对工具——你休息时，活计还在走。',
        status: '已交付',
        statusType: 'shipped',
      },
      {
        key: '03 · 所信',
        title: '所信，可验证。',
        body: '诚实靠构造：出处人人可查。正在研究的那一层。',
        status: '研究中',
        statusType: 'researching',
      },
    ],
    coda: '智力不再稀缺。杠杆才是新的公司。信任是新的通货。',
  },

  open: {
    eyebrow: '开放',
    heading: '这个时代是开放的。',
    body: '读源码。查数字。自己跑起来——或者给我们写信，必回。',
    cta1: 'obsidian-llm-wiki · GitHub',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'npm 安装 pi-shift-router',
    cta2Href: 'https://www.npmjs.com/package/pi-shift-router',
    cta3: '浏览 GitHub 组织',
    cta3Href: 'https://github.com/green-dalii',
    note: 'Apache-2.0 · MIT · 这里的一切都经得起查',
  },

  footer: {
    tagline: '一个 AI 原生组织，在开放中构建。',
    connectLabel: '连接',
    langsLabel: '语言',
    github: 'GitHub',
    studio: '设计工作室',
    projects: {
      label: '项目',
      items: [
        { name: 'obsidian-llm-wiki', href: 'https://github.com/green-dalii/obsidian-llm-wiki' },
        { name: 'pi-shift-router', href: 'https://github.com/green-dalii/pi-shift-router' },
        { name: 'diflowy', href: 'https://github.com/green-dalii/diflowy' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 格润达理。保留所有权利。',
    builtOpen: '在开放中构建',
  },
};
