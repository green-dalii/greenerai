# Greener-Dalii 公司官网（greenerai）

为 AI 原生时代构建基础设施的格润达理（Greener-Dalii）公司官网。

> **Intelligence is a commodity. Leverage is the new company. Trust is the new currency.**

## 开发

```bash
pnpm install
pnpm dev        # 本地预览 http://localhost:4321
pnpm build      # 构建到 ./dist
pnpm preview    # 预览构建产物
pnpm typecheck  # astro check（0 errors）
```

## 技术栈

- [Astro](https://astro.build)（static output） + [TailwindCSS v4](https://tailwindcss.com)（`@tailwindcss/vite`）
- 内置 i18n：`defaultLocale: 'en'`（无前缀 `/`）+ `zh`（`/zh/`）
- 字典：`src/i18n/locales/{en,zh}.ts`（类型契约见 `types.ts`）
- 字体：Instrument Serif（display）/ Inter（UI）/ JetBrains Mono（code）

## 内容与设计契约

完整的内容叙事、配色 tokens、组件规格见 [SPEC.md](./SPEC.md)；项目协作约定见 [AGENTS.md](./AGENTS.md)；Mistral 视觉结构参考见 [DESIGN-mistral.ai.md](./DESIGN-mistral.ai.md)。

## 数据来源（Proof 区）

- obsidian-llm-wiki 下载量：`obsidianmd/obsidian-releases` 的 `community-plugin-stats.json`（`karpathywiki.downloads`）
- pi-shift-router 下载量：npm `api.npmjs.org/downloads`
- 星标：GitHub API

数据为构建时常量；改动需核对权威源。

## 目录

```
src/
  i18n/locales/{en,zh,types}.ts    文案字典 + 类型契约
  i18n/index.ts                    getDict 辅助
  layouts/Base.astro               根布局（head / Nav / Footer / slot）
  components/                       Hero / Thesis / Proof(ProofCard) / Organism / Road / Open / Nav / Footer / Brand / LanguageSwitch
  pages/index.astro                EN 首页（/）
  pages/zh/index.astro             ZH 首页（/zh/）
  styles/global.css                Tailwind 4 @theme tokens
public/
  favicon.svg                      品牌徽标
```

## 部署域名（占位）

`astro.config.mjs` 的 `site` 设为 `https://greenerai.top`（产品子域根）。部署域名确定后更新。