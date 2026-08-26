import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii — We turn what you know into leverage.',
    description:
      'Intelligence is no longer scarce. Greener-Dalii turns what stays scarce — what you know, how you choose, what you finish — into leverage. Everything open, every number public.',
    ogTitle: 'Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'A handful of people with company-scale reach — everything open, every number public, running on our own stack.',
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
    sub: "Models get cheaper every week; what stays scarce is the human part — what you know, how you choose, what you finish. We turn those into leverage, and run on it ourselves.",
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
        body: 'Capability deflates in price and multiplies in access every month. The moat has moved.',
      },
      {
        index: '02',
        title: 'What you know is the moat.',
        body: "Decisions made, lessons paid for, instincts trained over years — none of it can be bought, scraped, or copied. It is truly yours, so it should stay local, private by default.",
      },
      {
        index: '03',
        title: 'What you choose is the edge.',
        body: 'When anyone can generate anything, taste is the difference — knowing what deserves to exist. Our design studio runs in parallel as the daily practice of that choice.',
      },
      {
        index: '04',
        title: 'What you finish is the proof.',
        body: 'Ideas are free; shipped work is not. A small team with the right leverage keeps moving while it rests — that, not headcount, is the unit of scale.',
      },
      {
        index: '05',
        title: 'Leverage turns all three into a company.',
        body: 'Knowing, choosing, finishing — each compounds through the right tools. That multiplication is what a company is now.',
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub: "The daily practice, shipped as tools. We're early — which is why every number below is public.",
    cards: [
      {
        tag: 'Know',
        title: 'obsidian-llm-wiki',
        body: "Karpathy's LLM Wiki, rebuilt as a local-first Obsidian plugin: your notes become a knowledge base that answers — and every answer cites its source.",
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
        subtag: 'for Pi',
        body: 'A two-tier router for the Pi coding agent — everyday turns run on affordable models, high-stakes ones step up automatically, failover included.',
        stats: [{ value: '1,235', label: 'downloads / mo', countTo: 1235 }],
        note: '0 runtime deps · ~196 kB',
        cta: 'pi-shift-router on npm',
        href: 'https://www.npmjs.com/package/pi-shift-router',
      },
      {
        tag: 'Do',
        title: 'DSH Shift-Router',
        subtag: 'for DeepSeek Harness',
        body: 'The same two-tier design adapted for DeepSeek Harness — task-level orchestration with instant step-up and cache-aware routing.',
        stats: [],
        note: '62 tests passing · 0 runtime deps',
        cta: 'dsh-shift-router on GitHub',
        href: 'https://github.com/green-dalii/dsh-shift-router',
      },
    ],
  },

  organism: {
    eyebrow: 'Who we are',
    heading: 'A handful of people. Company-scale reach.',
    body: [
      'No bloat, no curtain — just leverage: the right tools doing the work of whole departments.',
      "Two tracks run side by side here: this site builds AI-native leverage, and our studio at greenerdalii.top practices design. Same people, same conviction — tools get cheaper, taste doesn't.",
      'We are not predicting how organizations will look. We are one of them — running on the stack we build.',
    ],
    code: [
      '$ org --chart',
      'people: a handful',
      'brands: 2',
      'reach: 11 languages',
      'licenses: all open',
    ],
  },

  road: {
    eyebrow: "What's next",
    heading: 'Proof over promises.',
    sub: 'When anyone can generate anything, words get cheap. What we work on next makes claims carry their own receipts — provenance anyone can check, work that points to its origin, numbers that trace back to sources. Until then, we practice on ourselves: everything open, everything sourced.',
    practices: ['Everything open', 'Everything sourced', 'Running on our own stack'],
    coda: "Shipped the only way we know how: in the open.",
  },

  open: {
    eyebrow: 'Open',
    heading: 'See for yourself.',
    body: 'Read the source. Check the numbers. Run it yourself. And if you want to talk — we answer.',
    cta1: 'obsidian-llm-wiki on GitHub',
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
        { name: 'obsidian-llm-wiki', href: 'https://github.com/green-dalii/obsidian-llm-wiki' },
        { name: 'Shift-Router', href: 'https://shiftrouter.greenerai.top' },
        { name: 'Diflowy', href: 'https://diflowy.greenerai.top' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 Greener-Dalii. All rights reserved.',
    builtOpen: 'Built in the open',
  },
};
