# ROADMAP — 美学改造（Awwwards / FWA / CSSDA / Webby 标准）

> 立项日期：2026-08-28
> 基线得分（自评，Awwwards 权重）：**≈6.0 / 10** — Honorable Mention 边缘，SOTD 无望
> 目标得分：**8.0+ / 10** — Site of the Day 候选

---

## 0. 立项依据（第一性分析）

站点的任务不是卖产品，而是让陌生人相信「这几个人能在公司级规模上运转」。
品牌的唯一机制是**可验证性**。

由此推出三条强制约束：

| 推论 | 对设计的强制要求 |
|---|---|
| ① 卖的是机制而非承诺 | 设计必须**演示机制**，而非叙述机制 |
| ② 主张小团队高杠杆 | 设计必须**有密度与精确度**，不是排场 |
| ③ 中文是母语重铸 | 设计必须**有 CJK 排版意志**，不是英文版式套中文 |

基线站点违反了全部三条。**核心问题是存在偏差，而非审美偏好。**

---

## 1. 评分基线（自评）

| 维度 | 权重 | 基线 | 目标 | 关键缺口 |
|---|---|---|---|---|
| Design | 40% | 6.0 | 8.5 | 全站只有两种正文字号、一级标题只有一种尺寸；无编辑排版要素 |
| Usability | 30% | 6.3 | 8.5 | 浮动白胶囊遮挡正文；页脚版权不可见；对比度违规 |
| Creativity | 20% | 4.5 | 8.0 | 点阵 canvas 是陈词；无不可复制的想法 |
| Content | 10% | 8.0 | 8.5 | 文案本身强，仅需结构对位 |
| **加权** | | **6.0** | **8.0+** | |

---

## 2. 核心创意：**「回执」（The Receipt）**

**品牌唯一的真实声称是「一切可查」。那就让人查。**

全站每个数字、每条硬声称，都暗藏一张可撕开的回执：发丝线剖开的窄条、mono 排版，内容为
`SOURCE / ENDPOINT / KEY / FETCHED / VERIFY`，其中 VERIFY 是可复制的 curl 命令。

**克制前提**：只在 **4 个数字 + 4 条硬声称**上开放，共 8 处。

**它为什么拿分**
- Creativity：这不是装饰，是把品牌机制变成交互。模板抄不走 —— 背后需要真实数据管道
- 提供评委「他们怎么做到的」瞬间 —— 滚动淡入永远给不了
- 顺手修掉真实工程隐患：当前数字是硬编码常量，会漂移且无法自证

**配套第二层：把脚手架露出来**
删掉点阵 canvas，Hero 露出可见的版式骨架 —— 12 栏发丝线、裁切标记、悬挂标点。
它宣告「结构，可见」，与「声称，可查」是同一句话的两种说法。
比粒子场更编辑、更独有、更便宜（纯 CSS，无 canvas，无 rAF）。

---

## 3. 阶段计划

### P0 · 工艺修复（8 项）

| # | 缺陷 | 实测证据 | 修法 |
|---|---|---|---|
| 1 | 页脚版权行永不可见 | 滚动全页后仍 `opacity:0; visibility:hidden` | 移除该行 reveal 依赖 + 全局 failsafe |
| 2 | 快速滚动内容丢失 | 快滚后 **31/41** 元素不可见 | 3s failsafe + `ScrollTrigger.batch` |
| 3 | 全页截图 / 打印 90% 空白 | 5766px 高只有首屏有内容 | `beforeprint` 强制全可见 + failsafe |
| 4 | 导航白胶囊遮挡标题 | 680px 不透明胶囊覆盖 `01 Intelligence…` | 改全宽发丝线栏 + 滚动进度线 |
| 5 | 两卡底边参差 / 统计基线错位 | 左卡 y≈160，右卡 y≈127 | 改纵向全宽条目 + 内部 12 栏栅格 |
| 6 | 对比度违规 | `--color-muted: #a1a1aa` = **2.56:1** | → `#6b7280`（4.83:1 ✓） |
| 7 | OG 图 451 KB | 拖累 LCP 与分享卡 | 压缩至 ~100 KB |
| 8 | Thesis 编号语义错配 | 01–05 暗示五个并列，实为四支柱+收束 | I–IV + 收束符号 `∴` |

### P1 · 系统重构

- **排版阶梯**：`96 / 64 / 44 / 28 / 19 / 16 / 13 / 11`（比值 ≈1.5，每级一种职能）
  - Thesis 五条论断升到 44px —— 全站最有力量的文字，不该和「See for yourself」同字号
  - 悬挂标点、光学边距、8px 基线网格
- **色彩 16 → 7 token**
  `ink #14161a` / `paper #fff` / `paper-tint #f7faf8` / `rule #e6e8e6` / `primary #0a6c4b` / `accent #34d399`（全站 ≤3 次）/ `muted #6b7280`
- **删除 `.gradient-signature` 五段绿彩虹**（移植自 Mistral 的 sunset stripe —— 借用别家签名在创意维度是负分）
  → 换成自有签名：一条 primary 实心发丝线 + 12% 长 mint 短划
- **节间距非均匀**：`192 / 128 / 96 / 160`，制造呼吸而非均质填充
- **2 次全出血破格**：Thesis 首条论断、Open 结句
- **Practice 改纵向全宽规格条目**（内部 12 栏：标签列 / 内容列 / 证据列）

### P2 · 签名时刻

- **Receipt 组件**：`<button aria-expanded>` + `grid-template-rows 0fr→1fr` 过渡，键盘可达，无 JS 依赖降级
  - 8 处：4 数字（34,055 / 451 / 1,235 / 11 languages）+ 4 声称（0 deps / ~409 kB / Apache-2.0 / MIT）
- **Hero 骨架**：删点阵 canvas（-200 行 JS），改 12 栏发丝线 + 裁切标记 + 单一纸面底色
- **双轨收束动效**：Thesis 四支柱下滑时收束为 Organism 双轨锁合 —— 用动效表达「四条信念合成一个组织形态」

### P3 · 中文排版专项

- **Noto Serif SC 子集**（全站中文字符有限，子集后约 60–120 KB）→ 中文终于有确定的字体意志，跨平台一致
- 中文正文行高 1.8、标题 1.35，字距 `0.01em`
- 标点挤压：行首全角标点负缩进
- 中西文混排自动间隙
- **竖排瞬间**：ZH 版 Hero 把 知 · 品 · 行 做成竖列（与英文版横排形成对位而非复制）

### P4 · 打磨

- 构建期真实取数（fetch npm / GitHub / obsidian stats，替换硬编码常量）+ 回执 FETCHED 时间戳
- 动效曲线统一、滚动锁、微交互收敛
- 复评 + 截图对比归档

---

## 4. 约束（不可违背）

- 口号锁定：`Intelligence is no longer scarce. Leverage is the new company.` / `智力不再稀缺。拼的不再是人头，是杠杆。`（全站仅 Hero H1 与 ogTitle 两处）
- 展示词法：**知 · 品 · 行**；禁用 Trust / Judge / Judgement / OPC
- 公司 ≤2 次（ZH 页）
- 工作室用本名 **格润达理工作室 / Greener-Dalii Studio**，域名只作 href
- 展示层禁术语法：宿主 / 档位 / 限流 / 子代理 / 判定
- Hero 右侧保持 HeroStack（知/品/行 三行 + 注解 + 杠杆线，无徽章、无 legend、无产品名、无密集重色图形）
- 产品名不进主叙事，只在 Practice / Open
- 通约束：按钮 8px、卡片 12px、无胶囊；token 走 `@theme`；字典为唯一文案来源，中英同步

---

## 5. 验收标准

每个阶段完成即跑：

1. `shazam_verify` — PASS
2. `pnpm build` — Complete
3. `pnpm astro check` — 0 errors / 0 warnings / 0 hints
4. 禁词 grep（`trust|judge|judgement`）over `dist/`
5. 口号出现次数 = 2；ZH `公司` 计数 ≤2
6. Playwright 截图对比：1440 / 1024 / 768 / 390 四档
7. reveal 完整性探针：滚动全页后不可见元素 = 0
8. 对比度探针：所有正文色 ≥4.5:1

---

## 6. 进度

- [x] **P0 · 工艺修复（8 项）** — 全部完成，探针验证：reveal 隐藏 0/37、对比度 0 失败、横向溢出 0
- [x] **P1 · 系统重构** — 排版阶梯（层级倒置：论点陈述 > 节标题）、8 token 色彩、删五段彩虹带、非均匀节距、2 次出血破格
- [x] **P2 · 签名时刻** — 回执组件（8 处，键盘可达）、Hero 骨架替代点阵 canvas（-215 行 JS）、Practice 改凭据条目
- [x] **P3 · 中文排版专项** — CJK 显示改「逐字形对位」（拉丁 Instrument Serif × 中文 PingFang/雅黑，零字体下载，理由见 SPEC §4）；行高 1.85 / 标点挤压 / eyebrow 与 mono-label 回落；`html[lang^="zh"]` 前缀修正
- [x] **P4 · 打磨 + 复评** — og:image 重做（旧图仍带已退役 "Trust is the new currency."）→ 由设计系统渲染 `/og-card`、按语言分流；robots/sitemap 排除；SPEC 全面重写

### 执行中发现的事实性错误（已修）

站点在发布**过期数字**，这正是「回执」要防的事：

| 项 | 站点旧值 | 核实值（2026-11-03） | 源 |
|---|---|---|---|
| Karpathy LLM Wiki 下载 | 34,055 | **67,153** | obsidian community-plugin-stats.json |
| Karpathy LLM Wiki ★ | 451 | **768** | GitHub API |
| 仓库地址 | `green-dalii/obsidian-llm-wiki` | **`GD4AI/obsidian-llm-wiki`**（已迁移，旧链 301） | GitHub API |
| Shift-Router 月下载 | 1,235 | **2,293**（pi 685 + dsh 1,608） | npm downloads API |
| 安装体积 | ~409 kB（packagephobia 口径，无法核验） | **636 kB unpacked** | npm registry `dist.unpackedSize` |

另修：
- `<html lang>` 实为 `zh-CN`，所有 `html[lang='zh']` 的 CJK 规则此前**全部失效**（已改前缀匹配 `[lang^="zh"]`）。
- **og:image 仍写着已退役的 "Trust is the new currency."** —— 分享卡是全站被看到次数最多的图片。现由 `/og-card`、`/zh/og-card` 用同一套 token/字体/口号渲染，按语言分流，且都有出处。

---

# 第二轮：P5「让证据可见」（分量审计）

## 7. 为什么要有第二轮

P0–P4 全部完成，探针全绿。但那是**工艺**验收。按 Awwwards 四维 + Apple / Anthropic / Linear 官网标准重审，页面仍是 **6.4 / 10**。

差的地方不在技巧，在**分量**。四条根因：

1. **没有证据的视觉** —— `grep -rn "<img\|<canvas" src/components/` 只命中 logo。一个说「我们造工具」的站，全站 6159px 没出现过任何一件工具。而整站主张就是可查验——视觉的空，直接拆掉了文案的主张。
2. **文案在自我解释** —— 每段都在解释自己为什么对，而不是让事实自己站住。
3. **用留白替代设计** —— Thesis 1556px 装 ~950px 内容；Practice 左栏 218px 空转；Organism 底部 150px 纯空。
4. **最好的想法被藏起来** —— 回执没有发现路径，12×12px 无标签小方块，等于没做。

**最严重的单条**：`road.sub` 承诺「下一层要做回执」，而同一页上方 400px，8 张回执正开着。

## 8. 复评基线（P4 结束时）

| 维度 | 分 | 判据 |
|---|---|---|
| Design | 6.5 | 字体真功夫；全站 1 个视觉元素 |
| Usability | 6.5 | 回执无发现路径 |
| Creativity | 7.5 | 回执原创但被藏起 |
| Content | 5.5 | 英文文案：反问、成语、自相矛盾、零温度 |

## 9. 阶段计划（正交拆分，Issue #1 总纲）

| Issue | 阶段 | 拥有的符号 | 目标 |
|---|---|---|---|
| [#2](https://github.com/green-dalii/greenerai/issues/2) | **A · 视觉证据层** | 新增 `Translation/OgCard/SessionLog/Ledger`；`evidence.*` 新命名空间 | 全站唯一实物 + 数字带 + 回执可发现 |
| [#3](https://github.com/green-dalii/greenerai/issues/3) | **B · 版式节奏** | `Thesis/Organism/Open/HeroStack` markup+CSS、`.t-figure` | Thesis 1556→≤1000px、收束项句点、数字字体规则 |
| [#4](https://github.com/green-dalii/greenerai/issues/4) | **C · 文案重写** | `en.ts`/`zh.ts` 既有 key 的值 | 除四类病，中英同步 |
| [#5](https://github.com/green-dalii/greenerai/issues/5) | **D · 交互动效** | `Nav/LanguageSwitch/motion.ts` | 节高亮、语言降权、签名曲线、两拍进场 |

依赖顺序 **B → C → A → D**：C 依赖 B 定下的信息量，A 依赖 C 定下的语气。

## 10. 正交性原则

同一文件可出现于多个 issue，但**触碰的符号不相交**：key 名、类名、组件边界三者维度上互不重叠。
唯一例外（须显式声明）：`global.css` 由 B（排版类）与 D（动画类）共同修改，按类名前缀分区——B 只写 `.t-*` / 版式，D 只写动画与曲线。

## 11. 不可违反的执行原则

- **零编造。** 所有产品实物必须溯源到项目自己的 README / 仓库，并在 PR 里给原文链接。在一个主张「可查验」的站上编造一个看起来像产品的 UI，是最重的自伤。
- **不加第二个装饰。** 超一流 = 克制 + 一件真东西，不是动效堆叠。
- 沿用全部既有硬约束（口号两处、禁 Trust/Judge、公司 ≤2、产品不进 Hero、无胶囊按钮、`html[lang^="zh"]`）。

## 12. 进度

- [x] 审计与方案（Issue #1）
- [x] 正交拆分落 Issue #2–#5
- [x] **B** 版式节奏（`196407a`）
- [x] **C** 文案重写（`b29bde7`）
- [x] **A** 视觉证据层
- [x] **D** 交互动效
- [ ] 复评 + PR

## 13. 执行记录与偏差

| 计划 | 实际 |
|---|---|
| Thesis 1556 → ≤1000px | 1556 → 1397px（**支柱部分 ~1015px**，收束带另计 300px）。收束项离开 `<ol>` 后体积抵消了一部分行距压缩，但语义正确更重要 |
| A1 「Karpathy LLM Wiki 真实问答界面」 | **改为「笔记 → wiki 页」的前后对照**。原因：README 里没有可引用的问答转录，画一个像 Obsidian 的窗口壳就是编造。改为渲染 README 明文文档化的转化（aliases / `[[links]]` / 出处 / index 登记），每一项都能对上原文 |
| A2 「真实路由日志」 | 照做，用 README `How it works` 代码块原文，去 emoji，文字一字未改 |
| A3 回执可发现性 | stat 写整句（`· SHOW RECEIPT`），内联声称只留 `＋`/`−`。**因为一张卡有 3–4 处内联声称，各写一遍整句会变成噪音** |
| D4 「两拍进场：线先画」 | **未做**。发丝线是 `::before` 伪元素，GSAP 无法直接驱动；为它加真实元素属于 B 的标记改动，收益不抵风险。改为：签名缓动 + reveal 时长 0.8→0.9s 收尾拉长 |
| 额外 | 删掉 HeroStack 的 3D 指针按压（~90 行）——悬停倾斜是 2021 年的把戏，与编辑克制相抵 |
| 额外 | 把 claims 从卡片左栏移到右栏「凭据」列 —— 所有凭据归一处，同时消掉左栏底部的空转 |

**声明的所有权例外**（`global.css` 之外）：
- `src/scripts/motion.ts` —— B5 删除杠杆线编排（6 行），其余归 D
- `src/components/Road.astro` —— 标记改动归 C（对勾 → 序号是文案判断带出来的）

## 14. 待产品方补齐的事实

文案 Rule 5 要求「每个论断后面接一个具体的东西」。有三处做不到，因为事实本身没给：

1. **团队人数** —— `organism.heading` 仍是 `A handful of people.` /「人不多，事不小。」
   整站核心论点是「人少 × 杠杆」，却把最关键的数字藏了。**这是本轮唯一没修掉的自伤。**
   事实到位后可直接替换：
   - EN：`N people. Company-scale reach.`
   - ZH：`N 个人。<一句同样具体的下句>`
2. **成立年份** —— 目前页面无年份，缺一个时间锚。
3. Shift-Router 口径已取合计 2,293（pi 685 + dsh 1,608），拆分写在回执里。
