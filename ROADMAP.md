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
