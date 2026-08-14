import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii — AI-Native Infrastructure',
    description:
      'We build the infrastructure of the AI-native era: where intelligence is cheap, what stays scarce is what you know, how you judge, and whether you can be trusted. Open source, built in the open — we run on it ourselves.',
    ogTitle: 'Greener-Dalii — Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'A small team with company-scale reach, running on leverage and trust by construction. Everything open, every number public, nothing behind a curtain.',
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
    eyebrow: 'AI-native infrastructure',
    h1a: 'Intelligence is no longer scarce.',
    h1b: 'Leverage is the new company.',
    sub: 'Every week, models get cheaper and smarter. What stays scarce is the human part of the work — what you know, how you judge, whether you can be trusted. We build the infrastructure that turns those human assets into leverage — and we run on it ourselves.',
    ctaPrimary: 'See the practice',
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Star on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: 'One person, amplified.',
    footnote: 'Open · sourced · checkable — trust by construction',
  },

  stack: {
    headLabel: 'what stays scarce',
    legend: { shipped: 'shipped', researching: 'researching' },
    rows: [
      { idx: '01', name: 'Know', status: 'shipped', shipped: true },
      { idx: '02', name: 'Do', status: 'shipped', shipped: true },
      { idx: '03', name: 'Trust', status: 'researching', shipped: false },
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
        body: 'Every month models get smarter and cheaper. Capability is deflating in price and multiplying in access — the moat of a business has moved.',
      },
      {
        index: '02',
        title: 'What you know is the moat.',
        body: 'What you know that no model does — accumulated judgment, decisions, history — cannot be bought, scraped, or copied. It is the only asset that is truly yours, so it should stay on your machine, private by default.',
      },
      {
        index: '03',
        title: 'What you do is the leverage.',
        body: 'A small team with the right tools ships what a large one did five years ago. The unit of scale is no longer headcount — it is whether your work keeps moving while you rest.',
      },
      {
        index: '04',
        title: 'Taste is the new edge.',
        body: 'When anyone can generate anything, the difference is in what you choose to make. We run a design studio in parallel — not as our origin, but as daily practice of judgment.',
      },
      {
        index: '05',
        title: 'Trust is the new currency.',
        body: 'When anyone can generate anything, promises stop costing anything. Trust can no longer be promised — only produced: claims anyone can check, work that carries its origin, honesty that is cheaper to keep than to break.',
      },
    ],
  },

  practice: {
    eyebrow: 'Practice',
    heading: 'The beliefs, in practice.',
    sub: 'These are not the endgame — they are the appetizers, built while living the beliefs above. We are early, and every number below is public.',
    cards: [
      {
        tag: 'Know',
        title: 'obsidian-llm-wiki',
        body: "Karpathy's LLM Wiki, as a local-first Obsidian plugin: your files become a knowledge base that answers — and every answer cites its source.",
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
        title: 'pi-shift-router',
        body: 'Auto-routing for coding agents: cheap models for everyday work, frontier models for hard problems, automatic failover when a provider stumbles. Zero runtime dependencies.',
        stats: [
          { value: '1,235', label: 'downloads / mo', countTo: 1235 },
          { value: '0', label: 'runtime deps', countTo: 0 },
          { value: '196 kB', label: 'install size', countTo: 196, suffix: ' kB' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/pi-shift-router',
      },
    ],
  },

  organism: {
    eyebrow: 'The living proof',
    heading: 'The smallest viable organization is a seed, not a ceiling.',
    body: [
      'A small team with company-scale reach — users in eleven languages, everything in the open, no curtain.',
      'Two disciplines run in parallel here: Greener-Dalii builds the infrastructure of the AI-native era, and the studio at greenerdalii.top does design. Not a lineage, not a side project — one conviction with two faces: capability devalues, judgment appreciates.',
      'We are not a prediction about the future of organizations. We are one — running on the stack we build.',
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
    heading: 'The next layer is trust.',
    sub: 'Not promised — produced. When anyone can generate anything, how does an organization make its honesty structural? That is our direction: provenance anyone can check, work that points to its origin, numbers that trace to public sources. No promises yet — a line of sight. Until then, we practice it ourselves.',
    layers: [
      {
        key: '01 · Know',
        title: 'What you know, queryable.',
        body: 'Your accumulated judgment, made queryable — local-first, every answer sourced.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '02 · Do',
        title: 'What you do, without stalling.',
        body: 'The right tool for every task — and the work keeps moving while you rest.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '03 · Trust',
        title: 'What can be trusted, verifiably.',
        body: 'Honesty by construction: provenance anyone can check. The layer we are researching.',
        status: 'Researching',
        statusType: 'researching',
      },
    ],
    coda: 'Intelligence is no longer scarce. Leverage is the new company. Trust is the new currency.',
  },

  open: {
    eyebrow: 'Open',
    heading: 'The era is open.',
    body: 'Read the source. Check the numbers. Run it yourself — or write to us, we answer.',
    cta1: 'obsidian-llm-wiki on GitHub',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'pi-shift-router on npm',
    cta2Href: 'https://www.npmjs.com/package/pi-shift-router',
    cta3: 'Browse the org',
    cta3Href: 'https://github.com/green-dalii',
    note: 'Apache-2.0 · MIT · nothing here is hard to check',
  },

  footer: {
    tagline: 'An AI-native organization, built in the open.',
    connectLabel: 'Connect',
    langsLabel: 'Language',
    github: 'GitHub',
    studio: 'Design Studio',
    projects: {
      label: 'Projects',
      items: [
        { name: 'obsidian-llm-wiki', href: 'https://github.com/green-dalii/obsidian-llm-wiki' },
        { name: 'pi-shift-router', href: 'https://github.com/green-dalii/pi-shift-router' },
        { name: 'diflowy', href: 'https://github.com/green-dalii/diflowy' },
        { name: 'd2l-note', href: 'https://github.com/green-dalii/d2l-note' },
      ],
    },
    rights: '© 2026 Greener-Dalii. All rights reserved.',
    builtOpen: 'Built in the open',
  },
};
