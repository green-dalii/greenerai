# Greener-Dalii · greenerai.top

> Intelligence is no longer scarce. Leverage is the new company.
> 智力不再稀缺。拼的不再是人头，是杠杆。

Greener-Dalii (格润达理) company site. We turn what you know into leverage — a small team with company-scale reach, every tool open source, every number public.

- **Live site**: https://greenerai.top/
- **中文站**: https://greenerai.top/zh/
- **Design studio (parallel track)**: https://greenerdalii.top

## Development

```bash
pnpm install
pnpm dev        # local dev at http://localhost:4322
pnpm build      # static build → ./dist
pnpm preview    # preview the built site
pnpm astro check  # type-check + a11y/lint, target 0/0/0
```

> The dev server runs on **4322** (4321 is usually taken by greenerdalii.studio). Before starting, check whether a server is already listening: `lsof -iTCP:4322 -sTCP:LISTEN` and reuse it.

## Stack

- [Astro 5](https://astro.build) — static output
- [TailwindCSS v4](https://tailwindcss.com) — `@tailwindcss/vite`, CSS-first `@theme` tokens
- Built-in i18n — `defaultLocale: 'en'` (no prefix) + `zh` (`/zh/`)
- Dictionaries: `src/i18n/locales/{en,zh}.ts` (types in `types.ts`, helper in `i18n/index.ts`)
- Fonts (self-hosted via `@fontsource`): Instrument Serif (display) / Inter (UI) / JetBrains Mono (code)
- Motion: GSAP + ScrollTrigger, contract in `src/scripts/motion.ts` (respects `prefers-reduced-motion`)

## Contracts

- [`SPEC.md`](./SPEC.md) — full content narrative, color tokens, component specs, copy rules.
- [`AGENTS.md`](./AGENTS.md) — collaboration conventions, banned-word list, brand and copy red lines.
- [`DESIGN-mistral.ai.md`](./DESIGN-mistral.ai.md) — visual structure reference (Mistral editorial layout adapted to the Greener-Dalii green system).

## Source of truth for numbers (Proof section)

| Number | Authoritative source |
|---|---|
| Karpathy LLM Wiki — 34,055 downloads | `obsidianmd/obsidian-releases` `community-plugin-stats.json` (`karpathywiki.downloads`) |
| Karpathy LLM Wiki — 451 ★ | GitHub API |
| Shift-Router (pi-shift-router) — 1,235 downloads/month | `api.npmjs.org/downloads/point/last-month/pi-shift-router` |
| Shift-Router — 0 deps / ~409 kB install | packagephobia (README badges) |

Numbers are build-time constants in the dictionaries. Change them only after re-checking the source above.

## Layout

```
src/
  i18n/locales/{en,zh,types}.ts    Copy dictionaries + type contract
  i18n/index.ts                    getDict helper
  layouts/Base.astro               Root layout (head / Nav / Footer / slot)
  components/                      
    Hero / HeroStack / HeroGraph
    Thesis / Proof / ProofCard
    Organism / Road / Open
    Nav / Footer / Brand / LanguageSwitch
  pages/index.astro                EN homepage (/)
  pages/zh/index.astro             ZH homepage (/zh/)
  scripts/motion.ts                GSAP entrance + canvas + 3D tilt
  styles/global.css                Tailwind 4 @theme tokens
public/
  llms.txt                         LLMs summary (llmstxt.org spec)
  llms-full.txt                    LLMs long-form reference
  favicon.svg, logomark.svg, wordmark.svg
  og-image.png, apple-touch-icon.png
  robots.txt                       Crawler policy (GPTBot/ClaudeBot/... allowed)
```

## SEO / GEO

- `@astrojs/sitemap` produces `sitemap-index.xml` with `hreflang` alternates.
- JSON-LD: `Organization` + `WebSite` + two `SoftwareApplication` (Karpathy LLM Wiki, Shift-Router).
- `<link rel="canonical">` + `hreflang="en" / "zh-CN" / "x-default"`.
- `robots.txt` explicitly allow-lists the major AI crawlers.
- `llms.txt` and `llms-full.txt` follow [llmstxt.org](https://llmstxt.org) format.

## Deployment

`astro.config.mjs` sets `site: 'https://greenerai.top'` (canonical origin). Update the site URL before deploying to a different domain.