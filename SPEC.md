# SPEC — Greener-Dalii 官网（greenerai）

> 状态：v1 · 2026-08-13 · 与用户逐点收敛后定稿
> 依据：`DESIGN-mistral.ai.md`（视觉结构）、Studio 绿色系、obsidian-llm-wiki-website（i18n 参考）

---

## 1. 定位

**一句话**：为 AI 原生时代的新组织形态（从一个人开始）构建基础设施的公司；自身即运行在该基础设施上的证明。

**命题（全站之魂）**：
> Intelligence is no longer scarce. Leverage is the new company. Trust is the new currency.

**技术栈分层**：
| 层 | 含义 | 产品 | 状态 |
|---|---|---|---|
| Context | 知识杠杆：上下文是护城河 | obsidian-llm-wiki | ✅ 已交付 |
| Execution | 执行杠杆：Agent 永不掉线 | pi-shift-router | ✅ 已交付 |
| Trust | 信任通货：AI 产物的溯源/验证/问责 | （研究中的方向） | 🔬 研究中 |

## 2. 信息架构（单页，六幕叙事 + 页脚）

叙事主线：世界变了（智力不再稀缺）→ 我们相信什么（信念）→ 我们交付了什么（实证）→ 我们自己就是例证（我们）→ 下一步去哪（信任层）→ 邀请（开放）。

1. **Hero** — 命题（前两句）+ 副句 + 双 CTA + 右侧**轻量技术栈面板**（Context/Execution/Trust 三层状态 + 底部 you→company-scale 杠杆线）
2. **信念（Thesis）** — 四条信念，叙事化展开（不是产品预告，是世界观）
3. **已交付（Proof）** — 已交付的四项目，数字为证
4. **我们（Organism）** — 自己是活例（始于设计工作室一句带过）
5. **下一步（Road）** — 只讲第三层信任（不做已交付层复述；紧凑状态卡收拢三层）
6. **开放（Open）** — CTA 收尾（安装 / Star / 联系）
+ **Footer** — 品牌 + 链接 + 语言切换 + 版权

导航词（人话，非名词堆叠）：**Why / Shipped / About / Next** · **信念 / 已交付 / 我们 / 下一步**

## 3. 文案定稿

### Hero
- **EN H1**：Intelligence is no longer scarce. Leverage is the new company.
- **EN sub**：Every week, models get cheaper and smarter. What stays scarce is what you know — and what you do with it. We build the infrastructure of the AI-native era: knowledge that answers, agents that never stall — open source, and we run on it ourselves.
- **ZH H1**：智力不再稀缺。杠杆才是新的公司。
- **ZH sub**：模型越来越便宜，也越来越聪明。真正稀缺的，是你知道什么、又拿它做了什么。格润达理为 AI 原生时代搭建基础设施——知识有问必答，Agent 永不停摆；全部开源，我们自己就运行其上。
- CTA1（EN/ZH）：Explore the stack / 探索技术栈 → #proof；CTA2：GitHub / 在 GitHub 上点亮 → https://github.com/green-dalii

### Thesis（四条命题，编号 + 一句展开）
1. **Intelligence is no longer scarce.** 模型能力在降价、在普及，它不再是壁垒。/ Model capability is deflating in price and multiplying in access. It is no longer a moat.
2. **Context is the moat.** 你拥有而模型没有的——笔记、决策、历史——是无法复制的资产。所以我们本地优先、隐私默认。/ What you know that no model does is the only asset that can't be copied. So we build local-first, private by default.
3. **Execution is a multiplier, not a headcount.** 当一个人能交付一个团队的量，规模的单位是杠杆而非人头。所以我们让 Agent 永不掉线。/ When one person ships what a team used to, the unit of scale is leverage — so your agents never stall.
4. **Open source is the default.** 当任何人都能生成任何东西，透明就是最强信号。Apache、MIT，没有藏在幕后的东西。/ When anyone can generate anything, transparency is the strongest signal. Nothing behind a curtain.

### Proof（四张卡：命题 + 说明 + 数字）
| 项目 | 命题 EN/ZH | 数字 | 链接 |
|---|---|---|---|
| obsidian-llm-wiki | Your knowledge, made queryable. / 你的知识，变得可查询。 | 34,055 downloads · 451★ · 11 languages · 12+ providers · Apache-2.0 | github.com/green-dalii/obsidian-llm-wiki |
| pi-shift-router | Every task, the right model. / 每个任务，正确的模型。 | 1,235 downloads/mo · 0 runtime deps · ~196 kB · MIT | github.com/green-dalii/pi-shift-router |
| diflowy | Workflows, shared. / 工作流，共享。 | 32★ · MIT | github.com/green-dalii/diflowy |
| d2l-note | Scholarship, in public. / 学养，在公开处。 | 33★ · MIT | github.com/green-dalii/d2l-note |

说明行：
- wiki：Karpathy's LLM Wiki 在 Obsidian 上的生产级实现。笔记与 PDF → 会回答的知识库，每个答案标注来源。
- router：pi-coding-agent 自动路由——日常任务跑廉价快模型，难题上智能模型，服务商故障自动切换。
- diflowy：探索、分享、托管 Dify 工作流的平台。
- d2l-note：李沐《动手学深度学习》公开课学习笔记。

### Organism
- **EN**：The smallest viable organization is a seed, not a ceiling.
- **EN body**：Greener-Dalii began as a design studio — that discipline still shows in everything we ship — and rebuilt itself as an AI-native organization: a small team, a global open-source reach, four product lines, users in eleven languages. We are not a prediction about the future of organizations. We are one, running on the stack we build.
- **ZH**：最小可行的组织是种子，不是天花板。/ 格润达理始于一家设计工作室——那份严谨至今仍在我们交付的每一处——然后把自己重建成一个 AI 原生组织：小团队、全球开源触达、四条产品线、十一种语言的用户。我们不是关于组织未来的预言，我们就是其中之一，运行在自己构建的技术栈上。

### Road（三列）
- **Context** — 已交付 / Shipped：知识层已建成，obsidian-llm-wiki 证明"上下文即护城河"。
- **Execution** — 已交付 / Shipped：执行层已建成，pi-shift-router 证明"Agent 永不掉线"。
- **Trust** — 研究中 / Researching：当生成人人可得，信任成为新通货。AI 产物的溯源、验证与问责——我们在往这个方向走。
  - EN 收尾命题：Trust is the new currency.

### Open
- **EN**：The era is open. / Install the plugin. Run the router. Read the source. Or write to us — we answer.
- **ZH**：这个时代是开放的。/ 安装插件、运行路由、阅读源码，或者给我们写信——我们会回。
- CTA：Install obsidian-llm-wiki（→ wiki repo）、pi-shift-router on npm（→ npm）、Contact（mailto）

### Footer
- 品牌名 + 版权 © 2026 Greener-Dalii · GitHub · Design Studio（greenerdalii.top）· 语言切换 EN/ZH

## 4. 设计系统（Mistral 结构 × Studio 绿）

### 色彩 tokens
```css
--color-primary:        #0a6c4b;   /* 深绿 CTA */
--color-primary-deep:   #065f40;   /* pressed */
--color-mint:           #34d399;   /* emerald-400 强调/链接 */
--color-mint-bright:    #68fcbf;   /* Studio 薄荷 点缀 */
--color-mint-soft:      #d1fae5;   /* emerald-100 徽章面 */
--color-surface-mint:   #f0faf5;   /* 薄荷面（替代 cream）：表单/特性卡/页脚 */
--color-surface-mint-soft: #f6fcf9;/* 更浅薄荷面 */
--color-canvas:         #ffffff;
--color-surface:        #fafafa;
--color-ink:            #18181b;   /* zinc-900 */
--color-ink-tint:       #3f3f46;   /* zinc-700 */
--color-slate:          #52525b;   /* zinc-600 次要文本 */
--color-steel:          #71717a;   /* zinc-500 */
--color-muted:          #a1a1aa;   /* zinc-400 */
--color-hairline:       #e5e7eb;   /* zinc-200 */
--color-hairline-soft:  #eef1ef;
--color-hairline-strong:#c7c9cc;
--color-code-bg:        #1c1c1e;   /* 深色代码面 */
/* 签名渐变带（替代 sunset stripe）*/
--gradient-signature: linear-gradient(90deg, #0a6c4b, #059669, #34d399, #68fcbf, #f0faf5);
```

### 字体
- Display：**Instrument Serif**（近衬线编辑感；fallback Georgia/serif）
- UI：**Inter**（-0.5 字距；正文 1.55 行高）
- Code：**JetBrains Mono**

### 排版刻度（近似 Mistral）
| token | size | weight | lh | use |
|---|---|---|---|---|
| hero-display | 84→40px 响应式 | 400 | 1.05 | Hero |
| display-lg | 64px | 400 | 1.10 | 屏标题 |
| heading-2 | 36px | 500 | 1.20 | 子标题 |
| heading-3 | 28px | 500 | 1.25 | 卡片标题 |
| heading-4 | 22px | 500 | 1.30 | 特性标题 |
| subtitle | 18px | 400 | 1.50 | 副句 |
| body-md | 16px | 400 | 1.55 | 正文 |
| body-sm | 14px | 400 | 1.50 | 次要 |
| micro-uppercase | 11px | 600 | 1.40 | 眉题（1px 字距） |
| button-md | 14px | 500 | 1.30 | 按钮 |
| stat-display | 56px | 400 | 1.10 | 数字 |
| code-md | 14px | 400 | 1.50 | 代码 |

### 圆角 / 间距 / 层级
- 圆角：按钮 8px（md）、卡片 12px（lg）、徽章 full。**禁胶囊按钮**。
- 间距：4px 基模；节律 section 96px（营销页）、64px（内容页）；卡片内 24/32px。
- 容器：1280px max-w / 32px gutter。
- 层级：平为主，卡片 `rgba(0,0,0,0.04) 0 4px 12px`，代码面深底 12px 圆角 + 轻微投影。

### 签名组件
- **gradient-stripe**：全宽渐变带（上方 token），页脚上方，替代 Mistral sunset stripe 的位置与职能。
- **stat-display**：衬线大字数字（56px）用于 Proof 统计。
- **code-mockup**：深底代码卡（`pi-shift-router` 场景：`🧭 judging… / 429 → switching` 的终端感细节，克制使用）。
- **pill-badge**：薄荷面标签（`SHIPPED` / `RESEARCHING`）。

## 5. 技术架构

- Astro static + Tailwind v4（@tailwindcss/vite）+ sitemap（i18n）
- 动效：**GSAP + ScrollTrigger**（`src/scripts/motion.ts`，已入依赖）：`data-reveal` 滚动入场、`data-count` 数字计数、`data-hero-line` 大标题遮罩上滑入场、`data-hero-stack` 技术栈面板时间线（行交错/胶囊弹出/杠杆线绘制+脉冲/指针视差）；全部尊重 prefers-reduced-motion
- Hero 右侧：**轻量技术栈状态面板**（HeroStack.astro）：三层栈（Context/Execution/Trust）行式呈现，底部 you→company-scale 杠杆线。全浅色（白卡 + mint 细线），一眼可读，非产品终端/截图
- i18n：`defaultLocale:'en'` 无前缀；`zh` → `/zh/`；字典 `src/i18n/locales/{en,zh}.ts`（typed）
- 路由：`/`（EN）、`/zh/`（ZH）
- 组件：Nav（吸顶 + 语言切换 + 滚动态）、Hero、HeroGraph、Thesis、Proof、ProofCard、Organism、Road、Open、Footer
- LOGO：**沿用 Greener-Dalii Studio 官方 logomark + wordmark**（`public/logomark.svg` / `public/wordmark.svg` = studio 同源文件；Brand.astro 内联 logomark + wordmark 图，Header/Footer 黑色）——禁止自行生成品牌标

## 6. 数据来源（构建时常量）

见 AGENTS.md「数据源」。数字改动必须核对官方源。

## 7. 验收清单

- [ ] `pnpm build` 通过
- [ ] EN/ZH 双首页文案完整、术语一致
- [ ] 签名渐变带、stat-display、绿色系 tokens 落地
- [ ] 响应式（84→40px hero、卡片 3→2→1 列）
- [ ] meta/OG/sitemap 就位
- [ ] 全站无写死色值、无胶囊按钮
