import type { Dict } from './types';

export const en: Dict = {
  meta: {
    title: 'Greener-Dalii — AI-Native Infrastructure',
    description:
      'Open-source, local-first infrastructure for organizations of one: knowledge that answers, agents that never stall. We build it — and we run on it ourselves.',
    ogTitle: 'Greener-Dalii — Intelligence is no longer scarce. Leverage is the new company.',
    ogDescription:
      'The stack for organizations of one: Context (obsidian-llm-wiki), Execution (pi-shift-router), Trust (researching). Open source, in the open.',
  },

  brand: {
    homeHref: '/',
  },

  langSwitch: {
    label: 'Language',
  },

  nav: {
    thesis: 'Why',
    proof: 'Shipped',
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
    sub: 'Every week, models get cheaper and smarter. What stays scarce is what you know — and what you do with it. We build the infrastructure of the AI-native era: knowledge that answers, agents that never stall — open source, and we run on it ourselves.',
    ctaPrimary: 'Explore the stack',
    ctaPrimaryHref: '#proof',
    ctaSecondary: 'Star on GitHub',
    ctaSecondaryHref: 'https://github.com/green-dalii',
    stackCaption: 'One person. The right stack. Company-scale output.',
    footnote: 'Apache-2.0 · MIT · everything in the open',
  },

  thesis: {
    eyebrow: 'The belief',
    heading: 'Why we build.',
    items: [
      {
        index: '01',
        title: 'Intelligence is no longer scarce.',
        body: 'Every month models get smarter and cheaper. The bottleneck of a business is no longer capability — it is what you do with it.',
      },
      {
        index: '02',
        title: 'Context is the moat.',
        body: 'Notes, decisions, history — the things only you have. They cannot be bought or copied, so we keep them on your machine, private by default.',
      },
      {
        index: '03',
        title: 'Execution is leverage.',
        body: 'One person with the right tools does what a team did a few years ago. The unit of scale is not headcount — it is whether your work keeps moving while you rest.',
      },
      {
        index: '04',
        title: 'Openness is the default.',
        body: 'When anyone can generate anything, the only signal that means trust is transparency. So the code is open, the licenses permissive, the numbers public.',
      },
    ],
  },

  proof: {
    eyebrow: 'Shipped',
    heading: 'Shipped, in the open.',
    sub: 'We did not wait for permission. Two layers of the stack are live, and every number below is public.',
    cards: [
      {
        tag: 'Context · Knowledge',
        title: 'obsidian-llm-wiki',
        body: "Karpathy's LLM Wiki, as an Obsidian plugin. Notes and PDFs become a knowledge base that answers — and every answer cites its source.",
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
        body: 'A public commons for Dify workflows — explore, share, and host the recipes that run your automation.',
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
        body: "Study notes on Li Mu's Dive into Deep Learning — learning in public, one lecture at a time.",
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
    eyebrow: 'The living proof',
    heading: 'The smallest viable organization is a seed, not a ceiling.',
    body: [
      'Greener-Dalii began as a design studio — that discipline still shows in everything we ship — and rebuilt itself as an AI-native organization: a small team, a global open-source reach, four product lines, users across eleven languages.',
      'We are not a prediction about the future of organizations. We are one, running on the stack we build.',
    ],
    code: ['$ org --chart', 'nodes: 1', 'reach: 11 languages', 'licenses: all open'],
  },

  road: {
    eyebrow: "What's next",
    heading: 'The next layer is trust.',
    sub: 'When anyone can generate anything, provenance becomes the scarce good: who made this, what is it grounded in, can it be verified. We are building the layer that answers those questions — no promises yet, just a line of sight.',
    layers: [
      {
        key: '01 · Context',
        title: 'Knowledge, queryable.',
        body: 'obsidian-llm-wiki — local-first, source-cited, yours.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '02 · Execution',
        title: 'Agents that keep working.',
        body: 'pi-shift-router — the right model for every task, automatic failover.',
        status: 'Shipped',
        statusType: 'shipped',
      },
      {
        key: '03 · Trust',
        title: 'Provenance, verifiable.',
        body: 'Who made this, and can we check it — the layer we are researching.',
        status: 'Researching',
        statusType: 'researching',
      },
    ],
    coda: 'Intelligence is no longer scarce. Leverage is the new company. Trust is the new currency.',
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
