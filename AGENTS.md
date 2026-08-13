# AGENTS.md — Greener-Dalii 官网（greenerai）

格润达理（Greener-Dalii）公司官网。**内容主轴 = AI**，不是设计业务站（设计/工作室在 greenerdalii.top）。

## 定位与叙事（不可偏离）

- **命题**：`Intelligence is a commodity. Leverage is the new company. Trust is the new currency.`
- **公司是什么**：为 AI 原生时代的新组织形态（OPC = One-Person Company）构建基础设施的公司；自己就是运行在这套基础设施上的证明。
- **技术栈分层**：
  - Context（知识层）→ obsidian-llm-wiki（已交付）
  - Execution（执行层）→ pi-shift-router（已交付）
  - Trust（信任层）→ 研究中（Road 上只写方向，不写承诺）
- **叙事禁区**：不夸大（不承诺"改变人类"）、不自限（不写成"三个小工具"）；不采用大公司八股（客户 logo 墙、公司规模炫耀、VC 背书）。

## 技术栈与命令

- pnpm + Astro（static output）+ TailwindCSS v4（`@tailwindcss/vite`，CSS-first tokens）
- 字体：Instrument Serif（display）/ Inter（UI）/ JetBrains Mono（code），Google Fonts
- 动效：GSAP + ScrollTrigger，契约在 `src/scripts/motion.ts`（data-reveal / data-reveal-delay / data-count / data-count-to / data-count-suffix / data-hero-line / data-hero-stack；尊重 prefers-reduced-motion）
- i18n：Astro 内置 i18n，`defaultLocale: 'en'`（无前缀 `/`）+ `zh`（`/zh/`）；字典在 `src/i18n/locales/{en,zh}.ts`
- 命令：`pnpm dev` / `pnpm build` / `pnpm preview` / `pnpm astro`

## 品牌与文案红线

- **LOGO**：必须沿用 greenerdalii.studio 官方 `logomark.svg`（本仓库 `public/logomark.svg` 同源；Brand.astro 内联渲染）。禁止自行生成品牌标。
- **zh.ts 文案**：必须是母语级中文，禁止翻译腔（词序生硬、'的'堆叠、英式绕弯）。写完后逐句朗读自查。
- **导航词**：用自然人话（Why/Shipped/About/Next · 信念/已交付/我们/下一步），禁止生僻名词堆叠。
- Hero 右侧视觉为轻量技术栈状态面板（HeroStack.astro），不得替换为单个产品的终端/截图，也不得用重色/密集图形。

## 设计系统（详见 SPEC.md）

- 视觉结构参考 `DESIGN-mistral.ai.md`（编辑感衬线大标题 + 亮色底 + 8px 按钮/12px 卡片 + 底部签名渐变带），**主色改为 Studio 绿色系**（#0a6c4b 深绿 CTA / #34d399 mint / #f0faf5 薄荷面）
- 圆形度：按钮 8px、卡片 12px，**不用胶囊按钮**；衬线/sans 对比即品牌声线

## 数据源（Proof 区数字必须来自权威源）

| 数字 | 权威源 |
|---|---|
| obsidian-llm-wiki 下载 34,055 | `obsidianmd/obsidian-releases` community-plugin-stats.json（`karpathywiki.downloads`） |
| obsidian-llm-wiki 451★ | GitHub API |
| pi-shift-router 月下载 1,235 | npm `api.npmjs.org/downloads/point/last-month/pi-shift-router` |
| pi-shift-router 0 依赖 / ~196kB | README 徽章墙 |

数字为构建时常量（写入字典），改动需核对上表源。

## 目录约定

```
src/
  i18n/locales/{en,zh}.ts   全站文案字典（唯一文案来源，组件内不写死文案）
  layouts/Base.astro        根布局（font、meta、nav/footer）
  components/               Hero / Thesis / Proof / Organism / Road / Open / Nav / Footer / LanguageSwitch
  pages/index.astro         EN 首页（无前缀）
  pages/zh/index.astro      ZH 首页（/zh/）
  styles/global.css         Tailwind 4 @theme tokens
```

## 开发服务器管理（重要）

- **启动前先探测**：`lsof -iTCP:4322 -sTCP:LISTEN` 或 `curl -s -o /dev/null -w "%{http_code}" http://localhost:4322/`；已有实例则直接复用，**禁止重复启动**多个 dev server。
- 统一端口：**4322**（4321 通常被 greenerdalii.studio 占用）。
- **沙箱无 kill 权限**：bash 工具运行在 pi-landstrip OS 沙箱（macOS Seatbelt）内，policy 只有 filesystem/network/windows 三段，没有 process/signal 权限，`kill`/`pkill` 会报 Operation not permitted。因此：
  - 需要清理进程时，请用户在宿主终端执行 `pkill -f "astro dev"`；
  - 或用一次性短生命周期验证：`timeout 30 pnpm dev --port 4322`（结束后台进程请宿主清理）；
  - 不要用 nohup/& 堆叠常驻服务器，避免产生孤儿进程。

## 协作约定

- 新增文案先改字典，再改组件；中英两本同步
- 样式 token 一律走 `@theme` 变量，不写死色值
- 改动后跑 `pnpm build` 验证；多文件改动前先 `shazam_impact`
