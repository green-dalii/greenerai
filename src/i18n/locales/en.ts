import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii — AI-Native Infrastructure',
    description:
      'Open-source, local-first AI infrastructure for the AI-native era — knowledge and execution, the layers that let one person operate at company scale.',
    ogTitle: 'Greener-Dalii — Intelligence is a commodity. Leverage is the new company.',
    ogDescription:
      'The stack for organizations of one: Context (obsidian-llm-wiki), Execution (pi-shift-router), Trust (researching).',
  },

  brand: {
    homeHref: '/',
  },

  langSwitch: {
    label: 'Language',
  },

  nav: {
    thesis: 'Thesis',
    proof: 'Proof',
    organism: 'Organism',
    road: 'Road',
    github: 'GitHub',
    githubHref: 'https://github.com/green-dalii',
    menuLabel: 'Menu',
  },

  hero: {
    eyebrow: 'An AI-native company',
    h1a: 'Intelligence is a commodity.',
    h1b: 'Leverage is the new company.',
    sub: 'Greener-Dalii builds the infrastructure of the AI-native era — knowledge and execution, the layers that let one person operate at company scale. Everything we ship is open source, and we run on it ourselves.',
    ctaPrimary: 'Explore the stack',
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Star on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    graphCaption: 'Your knowledge, made queryable.',
  },

  thesis: {
    eyebrow: 'The thesis',
    heading: 'Why we build.',
    items: [
      {
        index: '01',
        title: 'Intelligence is a commodity.',
        body: 'Model capability is deflating in price and multiplying in access. It is no longer a moat.',
      },
      {
        index: '02',
        title: 'Context is the moat.',
        body: 'What you know that no model does — your notes, your decisions, your history — is the only asset that cannot be copied. So we build local-first, private by default.',
      },
      {
        index: '03',
        title: 'Execution is a multiplier, not a headcount.',
        body: 'When one person ships what a team used to, the unit of scale is leverage. We build so your agents never stall.',
      },
      {
        index: '04',
        title: 'Open source is the default.',
        body: 'When anyone can generate anything, transparency is the strongest signal. Apache and MIT — nothing behind a curtain.',
      },
    ],
  },

  proof: {
    eyebrow: 'The proof',
    heading: 'Shipped, in the open.',
    sub: 'The first two layers of the stack are live: numbers public, source public, licenses permissive.',
    cards: [
      {
        tag: 'Context · Knowledge',
        title: 'obsidian-llm-wiki',
        body: "The production-grade implementation of Karpathy's LLM Wiki for Obsidian. Notes and PDFs become a knowledge base that answers — every answer cites its source.",
        stats: [
          { value: '34,055', label: 'downloads', countTo: 34055 },
          { value: '451', label: 'stars', countTo: 451 },
          { value: '11', label: 'languages', countTo: 11 },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/obsidian-llm-wiki',
      },
      {
        tag: 'Execution · Agents',
        title: 'pi-shift-router',
        body: 'Auto-routing for pi-coding-agent: cheap models for everyday work, frontier models for hard problems, and automatic failover when a provider stumbles. Zero runtime dependencies.',
        stats: [
          { value: '1,235', label: 'downloads / mo', countTo: 1235 },
          { value: '0', label: 'runtime deps', countTo: 0 },
          { value: '196 kB', label: 'install size', countTo: 196, suffix: ' kB' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/pi-shift-router',
      },
      {
        tag: 'Ecosystem · Workflows',
        title: 'diflowy',
        body: 'Explore, share, and host Dify workflows — a public commons for automation recipes.',
        stats: [
          { value: '32', label: 'stars', countTo: 32 },
          { value: 'MIT', label: 'license' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/diflowy',
      },
      {
        tag: 'Scholarship · Learning',
        title: 'd2l-note',
        body: "Study notes on Li Mu's Dive into Deep Learning — learning in public.",
        stats: [
          { value: '33', label: 'stars', countTo: 33 },
          { value: 'MIT', label: 'license' },
        ],
        cta: 'GitHub',
        href: 'https://github.com/green-dalii/d2l-note',
      },
    ],
  },

  organism: {
    eyebrow: 'The organism',
    heading: 'The smallest viable organization is a seed, not a ceiling.',
    body: [
      'Greener-Dalii began as a design studio — that discipline still shows in everything we ship — and rebuilt itself as an AI-native organization: a small team, a global open-source reach, four product lines, users across eleven languages.',
      'We are not a prediction about the future of organizations. We are one, running on the stack we build.',
    ],
    code: ['$ org --chart', 'nodes: 1', 'reach: 11 languages', 'licenses: all open'],
  },

  road: {
    eyebrow: 'The road',
    heading: 'The stack, layer by layer.',
    sub: 'Two layers are live. The third is where we are heading — no promises, just a line of sight.',
    layers: [
      {
        key: '01 · Context',
        title: 'Knowledge is the moat.',
        body: 'obsidian-llm-wiki makes your context queryable — local-first, source-cited, yours.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '02 · Execution',
        title: 'Execution is the multiplier.',
        body: 'pi-shift-router keeps your agents running — the right model, every task, automatic failover.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '03 · Trust',
        title: 'Trust is the new currency.',
        body: 'When anyone can generate anything, provenance, verification, and accountability become the scarce goods. That is where we are heading.',
        status: 'Researching',
        statusType: 'researching',
      },
    ],
    coda: 'Intelligence is a commodity. Leverage is the new company. Trust is the new currency.',
  },

  open: {
    eyebrow: 'Open',
    heading: 'The era is open.',
    body: 'Install the plugin. Run the router. Read the source. Or write to us — we answer.',
    cta1: 'Install obsidian-llm-wiki',
    cta1Href: 'https://github.com/green-dalii/obsidian-llm-wiki',
    cta2: 'pi-shift-router on npm',
    cta2Href: 'https://www.npmjs.com/package/pi-shift-router',
    cta3: 'Browse the org',
    cta3Href: 'https://github.com/green-dalii',
    note: 'Everything is open source — Apache-2.0 and MIT. Fork it, run it, improve it.',
  },

  footer: {
    tagline: 'AI-native infrastructure, built in the open.',
    connectLabel: 'Connect',
    langsLabel: 'Language',
    github: 'GitHub',
    studio: 'Design Studio',
    rights: '© 2026 Greener-Dalii. All rights reserved.',
    builtOpen: 'Built in the open',
  },
};
