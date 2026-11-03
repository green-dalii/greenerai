import type { Dict } from './types';

/** 所有回执的核对日期 —— 每次改数字必须同步改这里 */
const VERIFIED = '2026-11-03';
const STATS_STREAM =
  'https://cdn.jsdelivr.net/gh/obsidianmd/obsidian-releases@master/community-plugin-stats.json';
const GH_WIKI = 'https://api.github.com/repos/GD4AI/obsidian-llm-wiki';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii — We turn what you know into leverage.',
    description:
      'We build tools for the three things AI made more valuable by making everything else cheap: what you have lived through, what you refuse to ship, and what you actually finish. Everything open, every number carrying a receipt.',
    ogTitle: 'Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'A small team with company-scale reach. Every number open, every one checkable.',
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
    eyebrow: "Tools for what AI can't generate",
    h1a: 'Intelligence is no longer scarce.',
    h1b: 'Leverage is the new company.',
    sub: "AI didn't make us smarter. It made thinking cheap — which makes everything else worth more: what you've actually lived through, what you refuse to ship, what you finish. We build tools for those three, then run this company on them.",
    ctaPrimary: 'See the practice',
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Star on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: "What compounds when headcount doesn't.",
    footnote: 'All open source. Every number carries a receipt.',
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
    heading: 'Why we build.',
    items: [
      {
        index: 'I',
        title: 'Intelligence is no longer scarce.',
        body:
          'AI is doing to thinking what engines did to muscle. Supply went up, price went down, and every advantage built on top of it had to be rebuilt somewhere else.',
      },
      {
        index: 'II',
        title: 'What you know is the moat.',
        body:
          "The decisions you got wrong and paid for. The instincts that took years. None of it can be bought, scraped, or copied — which is why it is worth more now than it was two years ago.",
      },
      {
        index: 'III',
        title: 'What you choose is the edge.',
        body:
          'When anyone can generate anything, the only question left is what deserves to exist. That one is never answered in the abstract — it gets answered by hand, at small scale, over and over. Ours gets answered in a design studio: one page, one rejected draft, one millimetre at a time.',
      },
      {
        index: 'IV',
        title: 'What you finish is the proof.',
        body:
          'Anyone can start; almost nobody finishes. The tools do the grinding, the people make the calls. Finishing is the only part other people can see.',
      },
      {
        index: '',
        title: 'Leverage turns all three into a company.',
        body:
          "Know, taste, do — each one gets bigger when a tool carries it. That is the whole trick: a few people can now carry what used to take a department.",
        synthesis: true,
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub:
      'Two tools so far. Both open. Every number below carries a receipt — open one and you get the endpoint, the field, and the command to check it yourself.',
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
          'Built for Obsidian. Your notes become a knowledge base you can ask questions — every answer links back to the note it came from, and nothing leaves your machine.',
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
            label: 'languages',
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
        cta: 'GitHub',
        href: 'https://github.com/GD4AI/obsidian-llm-wiki',
      },
      {
        tag: 'Do',
        title: 'Shift-Router',
        subtag: 'for Pi & DeepSeek Harness',
        flow: 'Cheap model by default → strong model when it counts',
        body:
          "You are paying for the expensive model and the cheap one, and each message can only use one of them. This decides per message, so the expensive one only sees work that needs it — and if a provider cuts you off mid-task, it switches and keeps going.", 
        stats: [
          {
            value: '2,293',
            label: 'downloads / mo',
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
    heading: 'A handful of people. Company-scale reach.',
    body: [
      'No layers, no ceremony. A few people, each carrying more than their job title — and tools that pick up the rest.',
      "We are not predicting how companies get organised in five years. We are one version of the answer, and it is already running — that is the only version of this claim we can make honestly.",
    ],
    tracks: [
      { name: 'Greener-Dalii', role: 'Products, tools, and the company that runs on them' },
      { name: 'Greener-Dalii Studio', role: 'Client work — the daily practice of choosing' },
    ],
    bridge: 'Same people. Two brands. Two parallel lines.',
  },

  road: {
    eyebrow: "What's next",
    heading: 'Proof over promises.',
    sub:
      "You have opened the receipts on this page. They cost us nothing to publish, and they tell you more than any testimonial could. The next thing we are building applies the same move to the work itself — a piece that shows where it came from: the source, the version, the hand that changed it, It is not finished. When it is, you will check it the way you checked these.",
    practices: ['Open by default', "Sourced or it doesn't ship", 'We go first'],
    coda: 'Nothing here is finished. Everything here is checkable.',
  },

  open: {
    eyebrow: 'Open',
    heading: 'See for yourself.',
    body:
      'The code is open. The numbers have receipts. You can run either one. If you would rather talk to a person, write — one of us reads it.',
    cta1: 'Karpathy LLM Wiki',
    cta1Href: 'https://github.com/GD4AI/obsidian-llm-wiki',
    cta2: 'Shift-Router',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'GitHub org',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: 'Write to us', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT · check anything on this page',
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
    builtOpen: 'Built in the open',
  },
};
