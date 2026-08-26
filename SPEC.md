# SPEC — Greener-Dalii 官网（greenerai）

> 状态：v3 · 2026-08-26 · 概念体系收敛定稿（知·品·行三连词 × 两行口号 × 展示词汇法 × 重复定律）；文案轮以本版为唯一依据
> 依据：`DESIGN-mistral.ai.md`（视觉结构）、Studio 绿色系、obsidian-llm-wiki-website（i18n 参考）

---

## 0. 展示词汇法（全站强制，文案轮第一检查项）

- **口号（两行，锁定）**：
  > Intelligence is no longer scarce. Leverage is the new company.
  > 智力不再稀缺。杠杆才是新的公司。
  原第三句 `Trust is the new currency.` 正式退役，不出现于任何展示面。口号全站仅出现两处：**Hero H1 与 ogTitle**。

- **三连词（锁定）**：**Know · Taste · Do / 知 · 品 · 行**
  递进逻辑 = **输入 → 选择 → 输出** 的完成管线：
  | 词 | 回答的问题 | 为什么稀缺 |
  |---|---|---|
  | Know · 知 | 你积累了什么 | 历史、判断、经验——买不到抄不走 |
  | Taste · 品 | 你怎么选 | 人人都能生成，选什么做才是分野；生成越廉价，取舍越值钱 |
  | Do · 行 | 你交付了什么 | 点子廉价，做完才是证明 |
  展示位（Hero 面板行、卡片 tag、Road key）用短形态 `Know/Taste/Do · 知/品/行`；正文行文可自然展开为「所知、品味、所行」。

- **品类句（全站唯一自我描述，锁定）**：
  - EN: `We turn what you know into leverage.`
  - ZH: `我们把所知，变成杠杆。`
  meta.title / meta.description / OG / footer tagline 一律用它或其短变体，不得再造第二种说法。

- **禁用展示词**：Trust（作关键词/标题/徽章/状态字）、Judge / Judgement、"One person, amplified" 及一切一人公司暗示。理念只呈现机制（出处可查、件件有源、经得起核），不命名、不喊词。

- **重复定律**：每个论点只在 Thesis 完整讲一次；其余章节最多一句回指，禁止整段复述。同一比喻全站最多出现一次。

## 1. 定位

**一句话**：把个人的积累变成公司的杠杆——我们造这些杠杆，也运行在这些杠杆上。

**组织形态命题**：**小团队 + 高杠杆**。当智力不再稀缺，公司的边界不再是人数，而是杠杆——几个人用对工具，能拥有公司级的产出、触达与信誉。（不主张 OPC/一人公司叙事——那与真实的几人团队脱节；主张的是**杠杆替代人头**。）

**命题（全站之魂）**：两行口号（见 §0）。

**第一性原理（稀缺性翻转）**：当生成能力人人可得，稀缺的不再是能力，而是**人性的部分**——知、品、行（表见 §0 三连词）。

**可信的来源（内部哲学注脚：构造式信任）**：当人人都能生成一切，承诺就不再值钱。可信不靠表态，靠**机制**：人人可查的声称、自带出处的作品、诚实比违约更便宜的组织（比特币式：机制让诚实成为均衡）。品牌 = 可查验的积累。展示层禁用 Trust/Judge 词——用动词和事实呈现（见 §3 Road）。

**双轨结构（同一批人，两个牌子）**：AI 原生轨道（本站）与设计（greenerdalii.top）是两条**平行**轨道，共享同一信念：能力贬值，判断升值。**不是"脱胎于"、不是副业**；设计工作室 = 品味（Taste）的日常训练场。双向链接。

**产品定位**：现有工具是**开胃菜**——信念的练习场，不是主体、不是未来核心。承认"我们还在早期"。**读者 = 未来的协作者 / 加入者**（用世界观与工作方式吸引同道，不是招聘）。

**叙事禁区**：
- 不夸大（不承诺"改变人类"）、不自限（不写成"几个小工具"）、不八股（客户 logo 墙 / 规模炫耀 / VC 背书）
- **不表现招人**；**不说"脱胎于设计工作室"**；**不用 OPC 叙事**
- **不锁死产品词**：笔记 / 路由 / Obsidian / Dify 只作注脚
- **无产品测试**：主叙事删掉全部产品名后依然完整成立；产品只出现在 Practice 卡与 Open 入口
- **遵守 §0 展示词汇法**：禁用词、口号两处上限、重复定律

## 2. 信息架构（单页，六幕 + 页脚）

叙事主线：世界变了（智力不再稀缺）→ 我们信什么（知·品·行）→ 我们是谁（小团队高杠杆）→ 我们怎么运行信念（实践）→ 我们往哪走（让作品自己开口）→ 邀请（开放）。

1. **Hero** — 口号两行 + 时代副句（≤2 句，无产品名）+ 双 CTA + 右侧轻量面板（**知/品/行 三行 + 一句话注解**，无状态徽章；底部 you→company-scale 杠杆线）
2. **信念（Thesis）** — 五条：翻转 → 知是护城河 → 品是分野 → 行是证明 → 杠杆综合条（闭环论证口号第二行）
3. **我们（Organism）** — 小团队高杠杆 + 双轨；org-chart 一行代码说清组织形态
4. **实践（Practice）** — 三卡（与实现同步）：obsidian-llm-wiki（tag: Know · 知）/ Shift-Router for Pi（tag: Do · 行）/ DSH Shift-Router（tag: Do · 行）
5. **下一步（Road）** — 新主题「让作品自己开口 / Proof over promises」：方向 + 当下练习，零产品承诺，**无状态卡**
6. **开放（Open）** — CTA 收尾 + 真实邮箱 `hi@greenerai.top`（mailto）
+ **Footer** — 品牌 + 项目链接带 + 语言切换 + 版权

导航词：**Why / Practice / About / Next** · **信念 / 实践 / 我们 / 下一步**
（锚点 id 保持 `#thesis #proof #organism #road` 稳定）

## 3. 叙事蓝图（文案轮的逐段依据；标题方向已锁定，正文由文案轮产出）

### Hero
- **H1**：两行口号（锁定）
- **eyebrow**：`Leverage for the AI-native era` / `AI 时代的杠杆`（锁定）
- **副句要求**：≤2 句；讲清「智力变便宜 → 稀缺的是知/品/行」；不用禁用词；不提产品；中英各自母语级，禁止互译腔
- **面板（HeroStack）**：headLabel `what stays scarce` / `如今稀缺的`；三行 = `知 / 品 / 行` 各配一句话注解（如 知——留在你手里的积累）；底部 you→company-scale 杠杆线；**删除 shipped/researching 徽章与 legend**；caption 废除 "One person, amplified"
- **footnote**：一句可查证短句（不含 Trust 词），如「Open · sourced · checkable」

### Thesis（五条，标题锁定）
| # | EN 方向 | ZH 方向 | 内核 |
|---|---|---|---|
| 01 | Intelligence is no longer scarce. | 智力不再稀缺。 | 世界的翻转：能力降价、普及，壁垒转移 |
| 02 | What you know is the moat. | 知，是护城河。 | 积累买不到抄不走；本地优先、默认私有 |
| 03 | What you choose is the edge. | 品，是分野。 | 生成廉价化后取舍值钱；设计工作室=每日练习（双轨一笔带过） |
| 04 | What you finish is the proof. | 行，是证明。 | 点子廉价，做完才算数；小团队的活计休息时也在走 |
| 05 | Leverage turns all three into a company. | 杠杆，把三者变成公司。 | 综合条：02–04 相乘，直接论证口号第二行 |

正文写作规则：每条 body ≤2 句；五条之间不得复述彼此；05 不引入任何新概念。

### Organism（我们）
- **标题弃用**"种子/天花板"类无锚点比喻；直接陈述小团队高杠杆（示例方向：`A handful of people. Company-scale reach.` / `几个人，公司级的分量。`）
- 双轨段保留要义，修掉「并行运行纪律 / disciplines run in parallel」类生硬表述（文案轮）
- org-chart 代码卡保留：`$ org --chart / people: a handful / brands: 2 / reach: 11 languages / licenses: all open`
- 收尾保留：「我们不是预言，我们是其中之一——运行在自己构建的东西上。」
- 「11 种语言」语义固定为**产品支持的语言数**，且此数字只在 Practice 数字卡出现一次，Organism 行文不再重复计数

### Practice（实践）
- 开场保留「开胃菜/练习场」语义，但去掉自贬语气（文案轮措辞）
- 三卡与实现同步（§2.4）；卡片 body 是给协作者看的产品一句话定位，不是 changelog
- **stats 分级规则**：受众有感的权威数字进 stat-display 大字位（下载 34,055 / 星标 451 / 月下载 1,235）；工程琐数（runtime deps、tests passing、harness 名）降为 body-sm 脚注行，不占大数字位

### Road（下一步）— 新主题「让作品自己开口 / Proof over promises」
- 标题方向：`Proof over promises.` / `让作品自己开口。`
- sub 讲清方向：作品自带出处、数字件件可溯源、声称人人能查——**全程不出现 Trust/Judge 词**
- 当下练习三条：一切公开 / 一切有源 / 运行在自己造的栈上
- **删除三层状态卡**（与 HeroStack 重复，随 §2.5 徽章移除一并瓦解）
- coda 不再复读口号，换一句前进向收束句（文案轮）

### Open / Footer
- Open body 三个动作（读源码 / 查数字 / 自己跑）+ 写信必回 → **mailto:hi@greenerai.top 真实链接**；修掉 "Browse the org" 类行话（文案轮）
- Footer tagline = 品类句；项目链接带保留（wiki / Shift-Router 官网 / Diflowy / d2l-note）

## 4. 设计系统（Mistral 结构 × Studio 绿）

### 色彩 tokens
```css
--color-primary:        #0a6c4b;   /* 深绿 CTA */
--color-primary-deep:   #065f40;   /* pressed */
--color-mint:           #34d399;   /* emerald-400 强调/链接 */
--color-mint-bright:    #68fcbf;   /* Studio 薄荷 点缀 */
--color-mint-soft:      #d1fae5;   /* emerald-100 徽章面 */
--color-surface-mint:   #f0faf5;   /* 薄荷面：表单/特性卡/页脚 */
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
/* 签名渐变带 */
--gradient-signature: linear-gradient(90deg, #0a6c4b, #059669, #34d399, #68fcbf, #f0faf5);
```

### 字体
- Display：**Instrument Serif**（fallback Georgia/serif）
- UI：**Inter**（-0.5 字距；正文 1.55 行高）
- Code：**JetBrains Mono**

### 排版刻度
| token | size | weight | lh | use |
|---|---|---|---|---|
| hero-display | 58→36px 响应式 | 400 | 1.14 | Hero |
| display-lg | 64px | 500 | 1.10 | 屏标题 |
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
- 间距：4px 基模；section 96px（营销页）、64px（内容页）；卡片内 24/32px。
- 容器：1280px max-w / 32px gutter。
- 层级：平为主，卡片 `rgba(0,0,0,0.04) 0 4px 12px`，代码面深底 12px 圆角 + 轻微投影。

### 签名组件
- gradient-stripe（页脚上方全宽渐变带）
- stat-display（衬线大字数字，Practice 统计；分级规则见 §3 Practice）
- code-mockup（`$ org --chart` 场景，克制使用）
- pill-badge（薄荷面标签；v3 起 HeroStack 不再使用状态徽章）

## 5. 技术架构

- Astro static + Tailwind v4（@tailwindcss/vite）+ sitemap（i18n）
- 动效：GSAP + ScrollTrigger（`src/scripts/motion.ts`）：data-reveal / data-count / data-hero-line / data-hero-stack 等；尊重 prefers-reduced-motion；Hero 背景 canvas 触屏设备禁用
- Hero 右侧：轻量状态面板（HeroStack.astro）：**知/品/行 三行 + 注解 + 杠杆线**，无状态徽章；全浅色
- i18n：`defaultLocale:'en'` 无前缀；`zh` → `/zh/`；字典 `src/i18n/locales/{en,zh}.ts`（typed）
- 路由：`/`（EN）、`/zh/`（ZH）
- 组件：Nav、Brand、Hero、HeroStack、Thesis、Proof(Practice)、ProofCard、Organism、Road、Open、Footer、LanguageSwitch
- LOGO：沿用官方 logomark（`public/logomark.svg` 同源，fill="currentColor"；Header/Footer 黑色）——禁止自行生成品牌标
- Open 区新增 mailto CTA（`hi@greenerai.top`）

## 6. 数据来源（构建时常量）

见 AGENTS.md「数据源」。数字改动必须核对官方源。
- obsidian-llm-wiki：34,055 下载 / 451★ / 11 语言（stat-display 位）
- Shift-Router（Pi）：1,235 月下载（stat-display 位）；0 依赖 / ~196kB 为脚注行
- DSH Shift-Router：62 tests passing 为脚注行（不占大数字位）

## 7. 验收清单（文案轮完成后逐项打勾）

- [ ] `pnpm build` 通过
- [ ] **展示词汇法全检（§0）**：无 Trust/Judge 展示词；口号作为独立口号仅 H1 + ogTitle 两处（Thesis 01 标题即口号第一行，为论点主场，不计入；og:image:alt 描述图片内文字）；品类句在 meta/footer 一致；无一人公司暗示
- [ ] **重复定律抽查**：任一论点全文完整展开仅一次；无比喻复用
- [ ] 中英双字典术语一致（知/品/行 ↔ Know/Taste/Do 映射统一）；zh 逐句朗读无翻译腔
- [ ] Thesis 五条结构 = 锁定表；05 无新概念
- [ ] HeroStack：三行 + 注解 + 杠杆线，无徽章无 legend；产品名不进 Hero
- [ ] Road 无状态卡；正文无 Trust/Judge；coda 非口号复读
- [ ] Open 含 mailto:hi@greenerai.top 且可达；无行话 CTA
- [ ] stats 分级落地：工程琐数为脚注非大数字位
- [ ] meta.title/description/OG 已按品类句更新（旧 "AI-Native Infrastructure" 清除）
- [ ] 签名渐变带、stat-display、绿色系 tokens 落地；响应式；无写死色值、无胶囊按钮
