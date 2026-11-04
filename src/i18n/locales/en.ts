import type { Dict } from './types';

/** 所有回执的核对日期 —— 每次改数字必须同步改这里 */
const VERIFIED = '2026-11-03';
const STATS_STREAM =
  'https://cdn.jsdelivr.net/gh/obsidianmd/obsidian-releases@master/community-plugin-stats.json';
const GH_WIKI = 'https://api.github.com/repos/GD4AI/obsidian-llm-wiki';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii: We turn what you know into leverage',
    description:
      'An AI-native company that builds the instruments a few people need to carry a department\'s work — and runs on them. Two are open source, and every figure on the site traces to its source.',
    ogTitle: 'Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'A few people, instruments they built themselves, and every figure on this site traced to its source.',
  },

  brand: {
    homeHref: '/',
  },

  langSwitch: {
    label: 'Language',
  },

  nav: {
    thesis: 'Why',
    proof: 'Practice',
    organism: 'About',
    road: 'Next',
    github: 'GitHub',
    githubHref: 'https://github.com/green-dalii',
    menuLabel: 'Menu',
  },

  hero: {
    eyebrow: 'An AI-native company',
    h1a: 'Intelligence is no longer scarce.',
    h1b: 'Leverage is the new company.',
    sub: 'We build the instruments that let a few people carry a company\'s work, then run this company on them. The first two are open source — one for your notes, one for your models.',
    ctaPrimary: "See what we've built",
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Our code on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: 'Three things a model cannot have.',
    footnote: 'Made by the same people who use them.',
  },

  evidence: {
    translation: {
      beforeLabel: 'A flat note',
      beforePath: 'notes/machine-learning.md',
      beforeNote: 'One file, no structure.',
      afterLabel: 'What you get back',
      afterPath: 'wiki/concepts/supervised-learning.md',
      rows: [
        { k: 'aliases', v: 'supervised learning · SL' },
        { k: 'links', v: '[[unsupervised-learning]] [[training-data]]' },
        { k: 'sources', v: 'quoted where they land' },
        { k: 'index', v: 'wiki/index.md → Concepts' },
      ],
      caption: 'The before-and-after the project README documents.',
    },
    session: {
      label: 'One session',
      lines: [
        { text: 'deepseek-v4.1-flash → fix the failing test', tag: 'routine' },
        { text: 'claude-fable-5 ← \"design the auth flow\"', tag: 'upgraded' },
        { text: 'deepseek-v4.1-flash 429 → glm-5.3-flash', tag: 'failed over' },
      ],
      caption: 'Excerpt from the project README, icons removed.',
    },
    ledger: {
      claim: 'Three numbers you can check without taking our word for it.',
      items: [
        { value: '67,153', label: 'installs' },
        { value: '2,293', label: 'npm downloads a month' },
        { value: '0', label: 'runtime dependencies' },
      ],
      note: 'each one opens into a receipt',
      href: '#proof',
    },
  },

  stack: {
    rows: [
      { idx: '01', name: 'Know', gloss: "what you've lived through" },
      { idx: '02', name: 'Taste', gloss: 'what you refuse to ship' },
      { idx: '03', name: 'Do', gloss: 'what you actually finish' },
    ],
  },

  thesis: {
    eyebrow: 'The belief',
    heading: 'What changed, and what did not.',
    items: [
      {
        index: 'I',
        title: 'Intelligence is no longer scarce.',
        body:
          'AI is doing to thinking what steam did to muscle power: supply went up, the price fell, and any advantage that rested on thinking stopped being an advantage.',
      },
      {
        index: 'II',
        title: 'What you know is the moat.',
        body:
          'The decisions you got wrong and paid for. The instincts that took years. Nobody can buy it, scrape it or copy it, and it does not get cheaper as the models get better.',
      },
      {
        index: 'III',
        title: 'What you choose is the edge.',
        body:
          'When anyone can generate anything, the question that decides the work becomes what deserves to exist. Nobody answers that in the abstract — you answer it by hand. We answer it in a design studio: one page, one rejected draft, one millimetre at a time.',
      },
      {
        index: 'IV',
        title: 'What you finish is the proof.',
        body:
          'Anyone can start; almost nobody finishes. Tools do the repetition, people decide. Finishing is the only part a stranger can verify.',
      },
      {
        index: '',
        title: 'Leverage turns all three into a company.',
        body:
          'Know, taste and do all scale with the same thing: a tool that takes the repetition. That is what leverage means here — not a bigger team, just a shorter path from what you know to what you ship.',
        synthesis: true,
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub:
      'This is where the thesis gets tested: the first two things we shipped, both open source. Each figure traces to an endpoint, a field, and a command you can run.',
    evidenceLabel: 'Evidence',
    receiptUi: {
      open: 'Show receipt',
      close: 'Hide receipt',
      source: 'Source',
      endpoint: 'Endpoint',
      key: 'Field',
      fetched: 'Verified',
      verify: 'Verify',
    },
    cards: [
      {
        tag: 'Know',
        title: 'Karpathy LLM Wiki',
        flow: 'Your notes → connected pages → answers with sources attached',
        body:
          'A plugin for Obsidian. Once it is installed, you can question your own notes directly — every answer links back to the note it came from, and the whole thing runs inside your vault.',
        stats: [
          {
            value: '67,153',
            label: 'downloads',
            countTo: 67153,
            receipt: {
              source: 'Obsidian community plugin stats',
              endpoint: STATS_STREAM,
              key: 'karpathywiki.downloads',
              fetched: VERIFIED,
              verify: `curl -s ${STATS_STREAM} | jq -r .karpathywiki.downloads`,
            },
          },
          {
            value: '768',
            label: 'stars',
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
            label: 'languages supported',
            countTo: 11,
            receipt: {
              source: 'Repository i18n directory',
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
              source: 'GitHub license detection',
              endpoint: 'https://github.com/GD4AI/obsidian-llm-wiki',
              key: 'license.spdx_id',
              fetched: VERIFIED,
              verify: `curl -s ${GH_WIKI} | jq -r .license.spdx_id`,
            },
          },
        ],
        cta: 'Source on GitHub',
        href: 'https://github.com/GD4AI/obsidian-llm-wiki',
      },
      {
        tag: 'Do',
        title: 'Shift-Router',
        subtag: 'Runs on Pi and DeepSeek Harness',
        flow: 'Cheap model by default → strong model when it counts',
        body:
          'One message, one model — and the default is usually the wrong one. Shift-Router reads each turn before it is sent: routine work stays on the cheap model, and the strong one only sees the turns that need it. If a provider stops answering mid-task, the next attempt goes to another model and the task keeps running.',
        stats: [
          {
            value: '2,293',
            label: 'npm downloads / month',
            countTo: 2293,
            receipt: {
              source: 'npm downloads API — both implementations',
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
            text: 'zero runtime dependencies',
            receipt: {
              source: 'npm registry manifest',
              endpoint: 'https://www.npmjs.com/package/pi-shift-router',
              key: 'dependencies',
              fetched: VERIFIED,
              verify: 'npm view pi-shift-router dependencies',
            },
          },
          {
            text: '636 kB unpacked',
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
              source: 'npm registry manifest',
              endpoint: 'https://www.npmjs.com/package/pi-shift-router',
              key: 'license',
              fetched: VERIFIED,
              verify: 'npm view pi-shift-router license',
            },
          },
        ],
        cta: 'Project site',
        href: 'https://shiftrouter.greenerai.top',
      },
    ],
  },

  organism: {
    eyebrow: 'Who we are',
    heading: 'A few people. One stack we built ourselves.',
    body: [
      'No layers, no ceremony. A few people doing jobs bigger than their titles, and tools picking up the rest.',
      'We are not forecasting how companies will be organised in five years. We are running one version of the answer now.',
    ],
    tracks: [
      { name: 'Greener-Dalii', role: 'The AI-native track' },
      { name: 'Greener-Dalii Studio', role: 'The design track' },
    ],
    bridge: 'Same people. Two brands. One way of working.',
  },

  road: {
    eyebrow: "What's next",
    heading: 'What we have to prove next.',
    sub:
      'You send someone a proposal. They click a sentence and see which document it came from, and who changed it since. That is what we are building next — the same thing this page does for its own numbers, applied to the work itself. It does not exist yet. When it does, you will be able to test it in exactly the same way.',
    practices: ['Open by default', "Sourced, or it doesn't ship", 'We use it on our own work first'],
    coda: 'We are early. You can see exactly how early.',
  },

  open: {
    eyebrow: 'Open',
    heading: 'Take it apart.',
    body:
      'The code is open source, so run it. Every figure has a receipt, so check it. And if you are building something adjacent — or you want to build in the same direction — write to us. One of us answers.',
    cta1: 'Karpathy LLM Wiki',
    cta1Href: 'https://github.com/GD4AI/obsidian-llm-wiki',
    cta2: 'Shift-Router',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'Our GitHub',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: 'Write to us', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT',
  },

  footer: {
    tagline: 'We turn what you know into leverage.',
    connectLabel: 'Connect',
    langsLabel: 'Language',
    github: 'GitHub',
    studio: 'Design Studio',
    email: 'hi@greenerai.top',
    projects: {
      label: 'Projects',
      items: [
        { name: 'Karpathy LLM Wiki', href: 'https://llmwiki.greenerai.top' },
        { name: 'Shift-Router', href: 'https://shiftrouter.greenerai.top' },
        { name: 'Diflowy', href: 'https://diflowy.greenerai.top' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 Greener-Dalii',
    verifiedOn: `Figures checked ${VERIFIED}`,
  },
};
