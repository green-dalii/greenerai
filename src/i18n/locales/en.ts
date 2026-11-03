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
      'Intelligence is no longer scarce. Greener-Dalii turns what stays scarce — what you know, how you choose, what you finish — into leverage. Everything open, every number public.',
    ogTitle: 'Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'A handful of people, company-scale reach. Every number open, every one checkable.',
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
    eyebrow: 'Leverage for the AI-native era',
    h1a: 'Intelligence is no longer scarce.',
    h1b: 'Leverage is the new company.',
    sub: "Every week AI makes raw intelligence worth a little less. What's scarce now lives in the human part — what you know, how you choose, what you finish. We turn those three into leverage — and we're running on it.",
    ctaPrimary: 'See the practice',
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Star on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: "What compounds when headcount doesn't.",
    footnote: 'Open source · public numbers · easy to check',
  },

  stack: {
    headLabel: 'what stays scarce',
    rows: [
      { idx: '01', name: 'Know', gloss: 'years in the making' },
      { idx: '02', name: 'Taste', gloss: 'the choice behind the work' },
      { idx: '03', name: 'Do', gloss: 'done counts' },
    ],
    lever: { you: 'you', companyScale: 'company-scale' },
  },

  thesis: {
    eyebrow: 'The belief',
    heading: 'Why we build.',
    items: [
      {
        index: 'I',
        title: 'Intelligence is no longer scarce.',
        body: "AI is doing to intelligence what engines did to muscle: overnight, supply spiked and value collapsed. The moat has moved.",
      },
      {
        index: 'II',
        title: 'What you know is the moat.',
        body: "Decisions made, tuition paid, instincts honed over years — none of it can be bought, scraped, or copied. It's yours alone.",
      },
      {
        index: 'III',
        title: 'What you choose is the edge.',
        body: "When anyone can generate anything, the difference comes down to taste — knowing what deserves to exist. So we keep a design studio at hand; day in, day out, that's where the eye gets trained.",
      },
      {
        index: 'IV',
        title: 'What you finish is the proof.',
        body: "Ideas are a dime a dozen — shipping is the proof. Tools do the grinding; people make the calls.",
      },
      {
        index: '',
        title: 'Leverage turns all three into a company.',
        body: 'Know, taste, do — each one compounds through the right tool. A handful of people now carries the weight a company used to.',
        synthesis: true,
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub: "The daily practice, shipped as tools. We're early and small — and that's exactly why every number is public.",
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
        flow: 'Your notes → graph retrieval → answers with sources attached',
        body: 'Built for Obsidian: your notes become a knowledge base that answers — every answer brings its source along, and nothing leaves your machine.',
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
        flow: 'Triage each turn → cheap lane by default → strong model when it counts',
        body: 'Every turn gets a cheap once-over first — routine work stays with the affordable model, the calls that matter jump straight to the best. Provider throttling? It swaps models mid-task without missing a beat. On complex jobs it takes charge: plans, hands implementation off to fast workers, and checks their work. One architecture, fits both Pi and DeepSeek Harness.',
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
        cta: 'shiftrouter.greenerai.top',
        href: 'https://shiftrouter.greenerai.top',
      },
    ],
  },

  organism: {
    eyebrow: 'Who we are',
    heading: 'A handful of people. Company-scale reach.',
    body: [
      "No hierarchies, no ceremony — a few right people with the right tools doing a whole department's work.",
      "We're not predicting how organizations will change — we're one of the answers: few people, tools of our own, already running.",
    ],
    tracks: [
      { name: 'Greener-Dalii', role: 'builds leverage for the AI-native era' },
      { name: 'Greener-Dalii Studio', role: 'daily practice of taste' },
    ],
    bridge: 'Same people · the same eye.',
  },

  road: {
    eyebrow: "What's next",
    heading: 'Proof over promises.',
    sub: "When anyone can generate anything, words get cheap. The next layer we're building gives every claim its own receipt — provenance you can check, work that points back to its origin, numbers that trace to a source. It's not finished, so we're practicing on ourselves: everything open, everything sourced.",
    practices: ['Everything open', 'Everything sourced', 'Tested on ourselves'],
    coda: 'Shipped the only way we know how: in the open.',
  },

  open: {
    eyebrow: 'Open',
    heading: 'See for yourself.',
    body: 'Read the source. Check the numbers. Run it yourself. Want to talk? We answer.',
    cta1: 'Karpathy LLM Wiki on GitHub',
    cta1Href: 'https://github.com/GD4AI/obsidian-llm-wiki',
    cta2: 'Shift-Router — shiftrouter.greenerai.top',
    cta2Href: 'https://shiftrouter.greenerai.top',
    cta3: 'Our GitHub org',
    cta3Href: 'https://github.com/green-dalii',
    email: { label: 'Write to us', href: 'mailto:hi@greenerai.top' },
    note: 'Apache-2.0 · MIT · nothing here is hard to check',
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
