import type { Dict } from './types';

/** 所有回执的核对日期 —— 每次改数字必须同步改这里 */
const VERIFIED = '2026-11-03';
const STATS_STREAM =
  'https://cdn.jsdelivr.net/gh/obsidianmd/obsidian-releases@master/community-plugin-stats.json';
const GH_WIKI = 'https://api.github.com/repos/GD4AI/obsidian-llm-wiki';

export const zh: Dict = {
  meta: {
    title: '格润达理 — 我们把所知，变成杠杆',
    description:
      '我们把所知，变成杠杆：造让几个人干得动一个部门的活的工具，自己先用。已有两个开源产品，每个数字都写着出处。',
    ogTitle: '智力不再稀缺。拼的不再是人头，是杠杆。',
    ogDescription: '几个人，自己的工具，网站上每个数字都写着出处。',
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
    eyebrow: '一家 AI 原生的公司',
    h1a: '智力不再稀缺。',
    h1b: '拼的不再是人头，是杠杆。',
    sub: '我们造杠杆：让几个人干得动一个部门的活，造完自己先用。头两个已经开源——一个读你的笔记，一个管你的模型。',
    ctaPrimary: '看看我们造了什么',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '去 GitHub 看源码',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '模型拿不走的三样东西',
    footnote: '做的人和使用的人是同一批。',
  },

  evidence: {
    translation: {
      beforeLabel: '你原来有的',
      beforePath: 'notes/machine-learning.md',
      beforeNote: '一个文件，没有结构。',
      afterLabel: '它长出来的样子',
      afterPath: 'wiki/concepts/supervised-learning.md',
      rows: [
        { k: '别名', v: 'supervised learning · SL' },
        { k: '链接', v: '[[unsupervised-learning]] [[training-data]]' },
        { k: '出处', v: '跟着正文走' },
        { k: '索引', v: 'wiki/index.md → Concepts' },
      ],
      caption: '照项目 README 原样抄的对比。',
    },
    session: {
      label: '一次会话',
      lines: [
        { text: 'deepseek-v4.1-flash → fix the failing test', tag: '常规' },
        { text: 'claude-fable-5 ←「design the auth flow」', tag: '升级' },
        { text: 'deepseek-v4.1-flash 429 → glm-5.3-flash', tag: '换道' },
      ],
      caption: '摘自项目 README，一字未改。',
    },
    ledger: {
      claim: '三个数字，点开就是出处。',
      items: [
        { value: '67,153', label: '安装量' },
        { value: '2,293', label: 'npm 月下载' },
        { value: '0', label: '运行时依赖' },
      ],
      note: '每个数字都开着自己的回执',
      href: '#proof',
    },
  },

  stack: {
    rows: [
      { idx: '01', name: '知', gloss: '真正经历过的' },
      { idx: '02', name: '品', gloss: '不肯将就的' },
      { idx: '03', name: '行', gloss: '最后做完的' },
    ],
  },

  thesis: {
    eyebrow: '信念',
    heading: '什么变了，什么没变。',
    items: [
      {
        index: 'I',
        title: '智力不再稀缺。',
        body: 'AI 之于思考，就像蒸汽机之于体力：供给一多，价格就塌。靠思考撑起来的优势，不再是优势。',
      },
      {
        index: 'II',
        title: '知，是护城河。',
        body: '做错的判断，交过学费的教训，磨了很多年的手感。买不来，抄不走，模型再强也不会让它贬值。',
      },
      {
        index: 'III',
        title: '品，是取舍。',
        body: '人人都会生成的时候，决定作品的就变成了另一个问题：什么值得留下。这个问题空谈不出来，只能一版一版地推翻。我们在一家设计工作室里天天练——一张纸，一版废稿，一毫米的偏差。',
      },
      {
        index: 'IV',
        title: '行，是证明。',
        body: '谁都能开始，收尾很难。粗活给工具，拍板给人。陌生人能验证的，只有收尾那一下。',
      },
      {
        index: '',
        title: '杠杆一上，小就是强。',
        body: '知、品、行，各有一件工具托着。所谓杠杆就是这个意思：不是人多，而是从「你知道」到「你做出来」的路更短。',
        synthesis: true,
      },
    ],
  },

  practice: {
    eyebrow: '实践',
    heading: '想法，变成能装的东西。',
    sub: '这一节是检验：我们先造出来的两个东西，都开源。每个数字都连着接口、字段，和一条你自己能跑的命令。',
    evidenceLabel: '凭据',
    receiptUi: {
      open: '查看回执',
      close: '收起回执',
      source: '来源',
      endpoint: '地址',
      key: '字段',
      fetched: '核对',
      verify: '核验',
    },
    cards: [
      {
        tag: '知',
        title: 'Karpathy LLM Wiki',
        flow: '你的笔记 → 串成一张网 → 有问必答，句句带出处',
        body: '一个 Obsidian 插件。装好之后，直接问自己的笔记——每个答案都标着它出自哪一段，而且整个过程都在你自己的库里跑。',
        stats: [
          {
            value: '67,153',
            label: '下载',
            countTo: 67153,
            receipt: {
              source: 'Obsidian 社区插件统计',
              endpoint: STATS_STREAM,
              key: 'karpathywiki.downloads',
              fetched: VERIFIED,
              verify: `curl -s ${STATS_STREAM} | jq -r .karpathywiki.downloads`,
            },
          },
          {
            value: '768',
            label: '星标',
            countTo: 768,
            receipt: {
              source: 'GitHub REST API',
              endpoint: 'https://github.com/GD4AI/obsidian-llm-wiki',
              key: 'stargazers_count',
              fetched: VERIFIED,
              verify: `curl -s ${GH_WIKI} | jq -r .stargazers_count`,
            },
          },
          {
            value: '11',
            label: '界面语言',
            countTo: 11,
            receipt: {
              source: '仓库多语言目录',
              endpoint: 'https://github.com/GD4AI/obsidian-llm-wiki/tree/main/src/texts',
              key: 'src/texts/*.ts',
              fetched: VERIFIED,
              verify: `curl -s ${GH_WIKI}/contents/src/texts | jq length`,
            },
          },
        ],
        claims: [
          {
            text: 'Apache-2.0',
            receipt: {
              source: 'GitHub 许可识别',
              endpoint: 'https://github.com/GD4AI/obsidian-llm-wiki',
              key: 'license.spdx_id',
              fetched: VERIFIED,
              verify: `curl -s ${GH_WIKI} | jq -r .license.spdx_id`,
            },
          },
        ],
        cta: '源码在 GitHub',
        href: 'https://github.com/GD4AI/obsidian-llm-wiki',
      },
      {
        tag: '行',
        title: 'Shift-Router',
        subtag: '适配 Pi 与 DeepSeek Harness',
        flow: '默认走便宜的 → 要紧处才叫贵的',
        body: '一条消息只能挑一个模型，而默认挑的那个往往挑错了。Shift-Router 在发出去之前先读一遍：常规的留在便宜模型上，真要紧的才交给强的。半路服务商不答了，它换一个模型，活接着干。',
        stats: [
          {
            value: '2,293',
            label: 'npm 月下载',
            countTo: 2293,
            receipt: {
              source: 'npm 下载 API — 两个实现合计',
              endpoint: 'https://api.npmjs.org/downloads/point/last-month/pi-shift-router',
              key: 'downloads (pi) + downloads (dsh)',
              fetched: VERIFIED,
              verify:
                'for p in pi-shift-router dsh-shift-router; do curl -s https://api.npmjs.org/downloads/point/last-month/$p; done',
            },
          },
        ],
        claims: [
          {
            text: '零运行时依赖',
            receipt: {
              source: 'npm registry 清单',
              endpoint: 'https://www.npmjs.com/package/pi-shift-router',
              key: 'dependencies',
              fetched: VERIFIED,
              verify: 'npm view pi-shift-router dependencies',
            },
          },
          {
            text: '636 kB（解包）',
            receipt: {
              source: 'npm registry dist',
              endpoint: 'https://www.npmjs.com/package/pi-shift-router',
              key: 'dist.unpackedSize',
              fetched: VERIFIED,
              verify: 'npm view pi-shift-router dist.unpackedSize',
            },
          },
          {
            text: 'MIT',
            receipt: {
              source: 'npm registry 清单',
              endpoint: 'https://www.npmjs.com/package/pi-shift-router',
              key: 'license',
              fetched: VERIFIED,
              verify: 'npm view pi-shift-router license',
            },
          },
        ],
        cta: '项目主页',
        href: 'https://shiftrouter.greenerai.top',
      },
    ],
  },

  organism: {
    eyebrow: '谁在做',
    heading: '人不多，工具是自己造的。',
    body: [
      '没有层级，也不摆排场。几个人，各人管的事都比头衔大一块——剩下的交给工具。',
      '五年后公司长什么样，我们不下判断。我们只是先把我们这版跑起来。',
    ],
    tracks: [
      { name: '格润达理', role: 'AI 原生这条线' },
      { name: '格润达理工作室', role: '设计这条线' },
    ],
    bridge: '同一批人，两个牌子，一套做法。',
  },

  road: {
    eyebrow: '下一步',
    heading: '接下来要证明什么。',
    sub: '你发一份东西给别人。他点开任何一句，就能看见这句出自哪份材料、后来谁改过。这就是我们接下来要做的——把这一页对数字做的事，用到作品本身。它还不存在。做出来之后，你会发现它和这些数字一样，查得动。',
    practices: ['默认就公开', '没有出处就不发', '先拿自己的活试'],
    coda: '我们起步不久。有多不久，你看得出来。',
  },

  open: {
    eyebrow: '开放',
    heading: '拆开看。',
    body: '代码开源，拿去跑。数字都带回执，拿去核。如果你在做相邻的事，或者想朝同一个方向做点东西——写信给我们，会有人回。',
    cta1: 'Karpathy LLM Wiki',
    cta1Href: 'https://github.com/GD4AI/obsidian-llm-wiki',
    cta2: 'Shift-Router',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: '我们的 GitHub',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: '写信给我们', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT',
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
        { name: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        { name: 'Shift-Router', href: 'https://shiftrouter.greenerai.top' },
        { name: 'Diflowy', href: 'https://diflowy.greenerai.top' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 格润达理',
    verifiedOn: `数字核对于 ${VERIFIED}`,
  },
};
