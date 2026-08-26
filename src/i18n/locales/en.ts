import type { Dict } from './types';

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
        index: '01',
        title: 'Intelligence is no longer scarce.',
        body: "AI is doing to intelligence what engines did to muscle: overnight, supply spiked and value collapsed. The moat has moved.",
      },
      {
        index: '02',
        title: 'What you know is the moat.',
        body: "Decisions made, tuition paid, instincts honed over years — none of it can be bought, scraped, or copied. It's yours alone.",
      },
      {
        index: '03',
        title: 'What you choose is the edge.',
        body: "When anyone can generate anything, the difference comes down to taste — knowing what deserves to exist. So we keep a design studio at hand; day in, day out, that's where the eye gets trained.",
      },
      {
        index: '04',
        title: 'What you finish is the proof.',
        body: "Ideas are a dime a dozen — shipping is the proof. Tools do the grinding; people make the calls.",
      },
      {
        index: '05',
        title: 'Leverage turns all three into a company.',
        body: "Know, taste, do — each one compounds through the right tool. A handful of people now carries the weight a company used to.",
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub: "The daily practice, shipped as tools. We're early and small — and that's exactly why every number is public.",
    cards: [
      {
        tag: 'Know',
        title: 'Karpathy LLM Wiki',
        flow: 'Your notes → graph retrieval → answers with sources attached',
        body: "Built for Obsidian: your notes become a knowledge base that answers — every answer brings its source along, and nothing leaves your machine.",
        stats: [
          { value: '34,055', label: 'downloads', countTo: 34055 },
          { value: '451', label: 'stars', countTo: 451 },
          { value: '11', label: 'languages', countTo: 11 },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/obsidian-llm-wiki',
      },
      {
        tag: 'Do',
        title: 'Shift-Router',
        subtag: 'for Pi & DeepSeek Harness',
        flow: 'Triage each turn → cheap lane by default → strong model when it counts',
        body: "Every turn gets a cheap once-over first — routine work stays with the affordable model, the calls that matter jump straight to the best. Provider throttling? It swaps models mid-task without missing a beat. On complex jobs it takes charge: plans, hands implementation off to fast workers, and checks their work. One architecture, fits both Pi and DeepSeek Harness.",
        stats: [
          { value: '1,235', label: 'downloads / mo', countTo: 1235 },
        ],
        note: 'zero runtime deps · ~409 kB · fits Pi & DeepSeek Harness',
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
    coda: "Shipped the only way we know how: in the open.",
  },

  open: {
    eyebrow: 'Open',
    heading: 'See for yourself.',
    body: 'Read the source. Check the numbers. Run it yourself. Want to talk? We answer.',
    cta1: 'Karpathy LLM Wiki on GitHub',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
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
    rights: '© 2026 Greener-Dalii. All rights reserved.',
    builtOpen: 'Built in the open',
  },
};
