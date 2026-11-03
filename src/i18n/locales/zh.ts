import type { Dict } from './types';

/** 所有回执的核对日期 —— 每次改数字必须同步改这里 */
const VERIFIED = '2026-11-03';
const STATS_STREAM =
  'https://cdn.jsdelivr.net/gh/obsidianmd/obsidian-releases@master/community-plugin-stats.json';
const GH_WIKI = 'https://api.github.com/repos/GD4AI/obsidian-llm-wiki';

export const zh: Dict = {
  meta: {
    title: '格润达理 — 智力不再稀缺，拼的是杠杆。',
    description:
      'AI 让思考变便宜了，其余的东西反而更值钱：你真正经历过的、你不肯将就的、你最后做完的。我们为这三样造工具。全部开源，每个数字都挂着回执。',
    ogTitle: '智力不再稀缺。拼的不再是人头，是杠杆。',
    ogDescription: '人不多，事不小。旗下 Karpathy LLM Wiki 与 Shift-Router，数字全公开，件件查得到。',
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
    eyebrow: 'AI 生成不了的那些',
    h1a: '智力不再稀缺。',
    h1b: '拼的不再是人头，是杠杆。',
    sub: 'AI 没有让我们变聪明，只是让思考变便宜了——便宜下来之后，其余的东西反而更值钱：你真正经历过的、你不肯将就的、你最后做完的。我们为这三样造工具，然后用它们跑这家公司。',
    ctaPrimary: '看看实践',
    ctaPrimaryHref: '#proof',
    ctaSecondary: '在 GitHub 上加星',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: '稀缺的归你，重复的归工具。',
    footnote: '全部开源。每个数字都附回执。',
  },

  evidence: {
    translation: {
      label: '它实际做的事',
      beforeLabel: '一条扁平的笔记',
      beforePath: 'notes/machine-learning.md',
      beforeNote: '一个文件，没有结构。',
      afterLabel: '你拿回来的',
      afterPath: 'wiki/concepts/supervised-learning.md',
      rows: [
        { k: '别名', v: 'supervised learning · SL' },
        { k: '链接', v: '[[unsupervised-learning]] [[training-data]]' },
        { k: '出处', v: '引用就挂在正文里' },
        { k: '索引', v: 'wiki/index.md → Concepts' },
      ],
      caption: '项目 README 里记着的原样对比。',
    },
    session: {
      label: '一次会话',
      lines: [
        { text: 'deepseek-v4.1-flash → fix the failing test', tag: '日常' },
        { text: 'claude-fable-5 ←「design the auth flow」', tag: '升级' },
        { text: 'deepseek-v4.1-flash 429 → glm-5.3-flash', tag: '换道' },
      ],
      caption: '摘自项目 README，去掉了图标。',
    },
    ledger: {
      claim: '三个数字，不靠我们一张嘴。',
      items: [
        { value: '67,153', label: '下载' },
        { value: '2,293', label: '月安装' },
        { value: '0', label: '运行时依赖' },
      ],
      note: '每个都能点开成一张回执',
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
    heading: '我们为何而建。',
    items: [
      {
        index: 'I',
        title: '智力不再稀缺。',
        body: 'AI 对付思考，就像发动机当年对付体力。供给上去了，价格下来了，所有建立在它之上的优势，都得换个地方重建。',
      },
      {
        index: 'II',
        title: '知，是护城河。',
        body: '做错过的决定，交过学费的教训，磨了多年的直觉——买不到，也抄不走。所以它比两年前更值钱。',
      },
      {
        index: 'III',
        title: '品，是分野。',
        body: '人人都会生成的时候，剩下的唯一问题是：什么值得存在。这个问题没法在抽象层面回答，只能用手、在很小的尺度上、一遍一遍回答。我们在设计工作室里回答它——一页纸，一版被推翻的稿，一毫米的差别。',
      },
      {
        index: 'IV',
        title: '行，是证明。',
        body: '谁都能开始，几乎没人做完。工具在磨，人在拍板。做完，才是别人看得见的那部分。',
      },
      {
        index: '',
        title: '乘上杠杆，小即是强。',
        body: '知、品、行，各有对得上的工具去放大。诀窍就这么简单：以前要一个部门才干得动的事，现在几个人扛得起来。',
        synthesis: true,
      },
    ],
  },

  practice: {
    eyebrow: '实践',
    heading: '信念，落到实践。',
    sub: '目前两个工具，都开源。下面每个数字都挂着回执——点开就能看到地址、字段，和一条自己核验的命令。',
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
        flow: '你的笔记 ─→ 连成一片的页面 ─→ 回答，每句附出处',
        body: '做进 Obsidian 的插件。你的笔记变成能提问的知识库——每个答案都链回它出自哪一条笔记，数据一步都不离开你的电脑。',
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
            label: '语言',
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
        cta: 'GitHub',
        href: 'https://github.com/GD4AI/obsidian-llm-wiki',
      },
      {
        tag: '行',
        title: 'Shift-Router',
        subtag: 'for Pi & DeepSeek Harness',
        flow: '默认走便宜模型 ─→ 关键处才上贵的',
        body: '你同时付着贵模型和便宜模型的钱，可每条消息只能用其中一个。它替你一条一条地决定，贵的那个只碰真正需要的活；中途被服务商切断，换个模型接着做。',
        stats: [
          {
            value: '2,293',
            label: '月下载',
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
    eyebrow: '我们是谁',
    heading: '人不多，事不小。',
    body: [
      '没有层级，不讲排场。几个人，各自扛的都比头衔多——剩下的活，工具接。',
      '我们不预测五年后组织会变成什么样。我们给出其中一种答案，而且它已经在跑——这是我们唯一敢笃定的一句。',
    ],
    tracks: [
      { name: '格润达理', role: '产品、工具，和跑在它们上面的这家公司' },
      { name: '格润达理工作室', role: '客户的活——每天练一次取舍' },
    ],
    bridge: '同一批人，两个牌子，两条平行的线。',
  },

  road: {
    eyebrow: '下一步',
    heading: '让作品自己开口。',
    sub: '这一页上的回执，你已经点开过几张了。公开它们不花我们一分钱，却比任何客户证言都说明问题。下一步，我们把这招用在作品本身上：一件东西能自己交代它从哪来——出处、版本、谁改过哪一笔，你不用信任何人的话。它还没做完。做完之后，你可以用刚才同样的方式查它。',
    practices: ['默认公开', '没有出处就不发', '自己先用'],
    coda: '这里没有一样东西是做完的。但每一样都查得到。',
  },

  open: {
    eyebrow: '开放',
    heading: '自己来看。',
    body: '代码是开源的，数字都带回执，两样都能自己跑。想找人聊，就写信——我们有人看。',
    cta1: 'Karpathy LLM Wiki',
    cta1Href: 'https://github.com/GD4AI/obsidian-llm-wiki',
    cta2: 'Shift-Router',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'GitHub 组织',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: '写信给我们', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT · 这一页什么都能查',
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
