# AGENTS.md — Greener-Dalii 官网（greenerai）

格润达理（Greener-Dalii）公司官网。**内容主轴 = AI**，不是设计业务站（设计/工作室在 greenerdalii.top）。

## 定位与叙事（不可偏离）

- **命题（两行口号，锁定）**：`Intelligence is no longer scarce. Leverage is the new company.` ｜ `智力不再稀缺。拼的不再是人头，是杠杆。`（ZH 为母语重铸，非直译；「公司」全站 ≤2 次）（原第三句 "Trust is the new currency." 已退役；口号全站仅 Hero H1 与 ogTitle 两处）
- **品类句（全站唯一自我描述）**：EN `We turn what you know into leverage.` ｜ ZH `我们把所知，变成杠杆。`——meta/OG/footer 一律用它或其短变体。
- **公司是什么**：把个人的积累变成公司的杠杆——造这些杠杆，也运行在这些杠杆上。组织形态主张 = **小团队 + 高杠杆**（杠杆替代人头；**不用 OPC/一人公司作为主张**，那与真实的几人团队脱节）。
- **稀缺性翻转（全站主线）**：智力不再稀缺 → 稀缺的是**人性的部分**，即三连词 **Know · Taste · Do / 知 · 品 · 行**（输入→选择→输出的完成管线）：知=你积累了什么（买不到抄不走）；品=你怎么选（生成越廉价取舍越值钱，核心信念）；行=你交付了什么（做完才是证明）。展示位用短形态 `知/品/行`，正文可展开「所知、品味、所行」。
- **可信的来源（内部哲学注脚：构造式信任）**：当人人都能生成一切，承诺不再值钱，可信只能靠**机制**制造：人人可查的声称、自带出处的作品、诚实比违约更便宜的组织（比特币式：机制让诚实成为均衡）。**品牌 = 可查验的积累**。展示层**禁用 Trust / Judge / Judgement 词**——只呈现机制（出处可查、件件有源、经得起核），不命名、不喊词。开放不是口号，是铸币方式。
- **双轨结构**：同一批人、两个牌子、两条平行轨道——AI 原生基础设施（本站）与设计（greenerdalii.top）。**不是"脱胎于"、不是副业**；设计工作室 = 品味的日常训练场。双向链接。
- **产品定位**：现有工具是**开胃菜**——信念的练习场，不是主体、不是未来核心。读者 = 未来的协作者/加入者（用世界观与工作方式吸引同道，**不是招聘**）。
- **技术栈分层（内部模型）**：
  - Context（知识层 → Know·知）→ obsidian-llm-wiki（已交付）
  - Execution（执行层 → Do·行）→ Shift-Router 系列（已交付）
  - Proof（可查证层 → 品行合一的外显）→ 研究中（Road 上只写方向，不写承诺；主题 = 让作品自己开口）
- **叙事禁区**：不夸大（不承诺"改变人类"）、不自限（不写成"几个小工具"）；不采用大公司八股（客户 logo 墙、公司规模炫耀、VC 背书）；**不表现招人**；**不锁死产品词**（笔记/路由/Obsidian/Dify 只作注脚）；**不说"脱胎于设计工作室"**；**无产品测试**——主叙事删掉全部产品名后依然完整成立，产品只出现在 Practice 卡 / Open 入口，主叙事不得用产品充当论据（官网不是产品介绍页）。
- **重复定律**：每个论点只在 Thesis 完整讲一次，其余章节最多一句回指；同一比喻全站最多出现一次。
- **联系方式**：hi@greenerai.top（Open 区 mailto + Footer Connect）。

## 技术栈与命令

- pnpm + Astro（static output）+ TailwindCSS v4（`@tailwindcss/vite`，CSS-first tokens）
- 字体：Instrument Serif（display）/ Inter（UI）/ JetBrains Mono（code），Google Fonts
- 动效：GSAP + ScrollTrigger，契约在 `src/scripts/motion.ts`（data-reveal / data-reveal-delay / data-count / data-count-to / data-count-suffix / data-hero-line / data-hero-stack；尊重 prefers-reduced-motion）
- i18n：Astro 内置 i18n，`defaultLocale: 'en'`（无前缀 `/`）+ `zh`（`/zh/`）；字典在 `src/i18n/locales/{en,zh}.ts`
- 命令：`pnpm dev` / `pnpm build` / `pnpm preview` / `pnpm astro`

## 品牌与文案红线

- **LOGO**：必须沿用 greenerdalii.studio 官方 `logomark.svg`（本仓库 `public/logomark.svg` 同源；Brand.astro 内联渲染）。禁止自行生成品牌标。
- **zh.ts 文案**：必须是母语级中文，禁止翻译腔（词序生硬、'的'堆叠、英式绕弯）。写完后逐句朗读自查。
- **导航词**：用自然人话（Why/Practice/About/Next · 信念/实践/我们/下一步），禁止生僻名词堆叠。锚点 id 保持 `#thesis #proof #organism #road` 稳定。
- Hero 右侧视觉为轻量状态面板（HeroStack.astro，**知/品/行**三行 + 一句话注解 + 杠杆线，**无状态徽章、无 legend**，**产品名不进 Hero**），不得替换为单个产品的终端/截图，也不得用重色/密集图形。

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
