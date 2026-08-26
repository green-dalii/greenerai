import type { Dict } from './types';

export const zh: Dict = {
  meta: {
    title: '格润达理 — 把积累，变成杠杆。',
    description:
      '智力不再稀缺，稀缺的换了模样：你的积累、你的眼光、你做完的事。格润达理把它们变成杠杆——一切公开，件件有源。',
    ogTitle: '智力不再稀缺。拼的不再是人头，是杠杆。',
    ogDescription: '人不多，事不小。数字全公开，件件查得到。',
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
    h1b: '拼的不再是人头，是杠杆。',
    sub: 'AI 越来越能干，智能本身却越来越不值钱。真正稀缺的，只剩人身上的这几样：你懂什么、怎么选、能不能做完。我们把这三种变成杠杆，自己先用着。',
    ctaPrimary: '看看实践',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '在 GitHub 上加星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '稀缺的归你，重复的归工具。',
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
        body: 'AI 对付智力，就像发动机当年对付体力：一夜之间，供给爆发，价值崩塌。护城河，换了地方。',
      },
      {
        index: '02',
        title: '知，是护城河。',
        body: '做过的决定、付过学费的教训、练了多年的直觉——买不到，抄不走。它们只属于你自己。',
      },
      {
        index: '03',
        title: '品，是分野。',
        body: '人人都会生成的年代，差别就剩品味：知道什么值得做出来。所以我们手边还开着家设计工作室，天天练这个眼力。',
      },
      {
        index: '04',
        title: '行，是证明。',
        body: '点子不值钱，做出来才算数。工具在干活，人在做决定。',
      },
      {
        index: '05',
        title: '乘上杠杆，小即是强。',
        body: '知、品、行，样样都有对得上的工具去放大。几个人乘上杠杆，顶得过从前一整个公司。',
      },
    ],
  },

  practice: {
    eyebrow: '实践',
    heading: '信念，落到实践。',
    sub: '平时练手，顺手做成了工具。刚起步不久，数字不大，但都敢公开。',
    cards: [
      {
        tag: '知',
        title: 'Karpathy LLM Wiki',
        flow: '你的笔记 ─→ 图检索 ─→ 回答，每句附出处',
        body: '做进 Obsidian 的插件：你的笔记变成会回答问题的知识库，每个答案都写着出处，数据只留在你自己的电脑里。',
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
        subtag: 'for Pi & DeepSeek Harness',
        flow: '每轮先分流 ─→ 便宜轨日常跑 ─→ 关键处上强档',
        body: '每轮对话，先让省钱的模型快速瞄一眼：日常小事就交给它，要紧的事直接上最强的。服务商抽风了？当场换别的模型，手上的活不打断。复杂任务，它自己当指挥——拆解、派活、验收。一套架构，Pi 和 DeepSeek Harness 都能装。',
        stats: [
          { value: '1,235', label: '月下载', countTo: 1235 },
        ],
        note: '零依赖 · 约 409 kB · Pi、DeepSeek Harness 都能装',
        cta: 'shiftrouter.greenerai.top',
        href: 'https://shiftrouter.greenerai.top',
      },
    ],
  },

  organism: {
    eyebrow: '我们是谁',
    heading: '人不多，事不小。',
    body: [
      '没有层级，不讲排场。几个对的人，配上对的工具，干出整个部门的活。',
      '我们不预测组织会变成什么样。我们只是其中的一种：人不多，工具自己造，已经在跑。',
    ],
    tracks: [
      { name: '格润达理', role: '造 AI 时代的杠杆' },
      { name: '格润达理工作室', role: '品味的练兵场' },
    ],
    bridge: '同一批人 · 同一副眼光。',
  },

  road: {
    eyebrow: '下一步',
    heading: '让作品自己开口。',
    sub: '当人人都能生成一切，话就不值钱了。我们做的下一层，让每句话自带凭证：出处可查，源头可追，数字对得上。还没成型，就先拿自己练——一切公开，一切有源。',
    practices: ['一切公开', '一切有源', '自己先跑起来'],
    coda: '把它做出来，只有一种做法——公开。',
  },

  open: {
    eyebrow: '开放',
    heading: '自己来看。',
    body: '读源码。查数字。自己跑起来。想聊聊，写信必回。',
    cta1: 'Karpathy LLM Wiki · GitHub',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'Shift-Router — shiftrouter.greenerai.top',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'GitHub 组织主页',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: '写信给我们', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT · 这里的一切都经得起查',
  },

  footer: {
    tagline: '把积累，变成杠杆。',
    connectLabel: '连接',
    langsLabel: '语言',
    github: 'GitHub',
    studio: '设计工作室',
    email: 'hi@greenerai.top',
    projects: {
      label: '项目',
      items: [
        { name: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        { name: 'Shift-Router', href: 'https://shiftrouter.greenerai.top' },
        { name: 'Diflowy', href: 'https://diflowy.greenerai.top' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 格润达理',
    builtOpen: '在开放中构建',
  },
};
