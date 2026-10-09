# 模板冲突记录（init_site.py 派生模板 vs 本项目实际）

> 用途：初始化时逐条记录「模板/通用文档」与「本站实际」冲突项及裁决结果，
> 为后续把本站做法回灌进 `scripts/init_site.py` 提供依据。
> 裁决优先级：**SITE.md > 实测取样（官方截图/官方页面） > docs 通用模板**。
> 记录格式：新增条目追加在末尾，不改写历史行。

---

## C-01视觉基调：浅色天空系 vs 暗色地牢系

- **冲突点**
  - `scripts/init_site.py` 按 `--color #5AAEED` 派生出**浅色** token：
    `--color-canvas #EAF2F8`、`--color-surface #ffffff`、`--color-ink #11293C`。
    该派生逻辑假设主题色来自「明亮天空/科技风」。
  - `docs/DESIGN.md` 原token 表亦标注为「示例为源站天空系主题」，属**模板示例**而非本站定案。
  - 本站实际：游戏为地下监狱世界（Vitromotus），官方首图实测主色为
    `#213A41`(9.3%) / `#22292F`(7.9%) 深青灰暗部 + `#317DC9` 湖水蓝 + `#CA9454` 灯火琥珀。
    主体界面必须是**暗色**，浅色 token 与游戏气质、与背景图（暗底截图）均冲突。
- **裁决**：以实测取样为准，`globals.css` 改为暗色 token（见 C-06）。
- **回灌建议**：`init_site.py` 增加 `--theme dark|light` 参数，
  暗色分支按主色明度自动派生 canvas/surface/ink 三档，而非固定派浅色。

## C-02 站点常量：EA 日期字段错位

- **冲突点**
  - `AGENT.md §0.2`（模板常量）把日期写成 `earlyAccessDate: "2026-10-27"`，并注明
    「正式版日期官方未定，不设 launchDate」。
  - `init_site.py` 生成的 `site.ts` 写成 `launchDate: "2026-10-27"`、`earlyAccessDate: ""`，
    且注释写「空 = 未公布」。字段语义与 AGENT.md 相反。
- **裁决**：以 AGENT.md/SITE.md 为准 —— `earlyAccessDate: "2026-10-27"`、
  `launchDate: ""`（正式版未公布，不编造）。已修正 `src/config/site.ts`。
- **附带修正**：`platform` 由脚本的 `"PC"` 改为 `"PC (Steam)"`（AGENT.md §0.2 原文）。
- **回灌建议**：脚本对抢先体验制游戏应新增 `--access-date` 参数，
  并允许「只有 EA 日期、无正式版日期」这一合法状态。

## C-03 栏目结构：脚本 6 栏目 vs SITE.md 7 栏目

- **冲突点**
  - `init_site.py` 支持的 `--sections` 固定为
    `release-date / countdown / codes / item-database / guides / builds`（6 个）。
  - `docs/SITE.md` 定义本站 7 个核心栏目：
    **wiki / guides / release / map / builds / characters / news**，URL 分别为
    `/wiki/`、`/guides/`、`/release/`、`/map/`、`/builds/`、`/characters/`、`/news/`。
  - 两者在路径与栏目数上均不一致：脚本无 `/wiki/`、`/map/`、`/characters/`、`/news/`，
    且脚本用 `/release-date/`，SITE.md 要求 `/release/`。
- **裁决**：以 SITE.md 为主。初始化阶段**先用脚本能覆盖的部分跑通工程骨架**
  （`/release-date` `/countdown` `/item-database` `/guides` `/builds`），
  再按 SITE.md 补齐缺失栏目并做 URL 映射：
  | SITE.md 栏目 | 目标 URL | 初始化落地方式 |
  | --- | --- | --- |
  | Wiki | `/wiki` | **待补**（脚本无此栏目，需手写） |
  | Guides | `/guides` | 脚本 `guides` 已覆盖 |
  | Release & Platforms | `/release` | 用脚本 `release-date` 作过渡，**需301 到 `/release`** 或改路径 |
  | Map & Areas | `/map` | **待补**（手写） |
  | Builds & Items | `/builds` | 脚本 `builds` + `item-database` 合并承接 |
  | Characters | `/characters` | **待补**（手写） |
  | News | `/news` | **待补**（手写） |
- **回灌建议**：脚本 `SECTION_ORDER` 增补 `wiki / map / characters / news` 四个可配置栏目，
  并把 `release-date` 拆为 `release`（栏目名可配）。`栏目.md §3` 要求已上线 URL 禁改，
  故 `/release` 一旦上线不得再搬。

## C-04 缺失的 Disclaimer 页

- **冲突点**
  - `KEYWORDS.md` 政策页表列出 `/disclaimer`（占位防冲突页，核心职责是显式声明非官方）。
  - `init_site.py` 只生成 `/about` `/contact` `/privacy` `/terms`，无 `/disclaimer`。
- **裁决**：以 KEYWORDS.md 为准，`/disclaimer` 列入待补清单
  （页脚 `DISCLAIMER` 常驻句已由脚本落在 `(plain)` 与 `(content)` layout，满足 AGENT.md §0.1底线）。
- **回灌建议**：脚本政策页模板增补 `disclaimer`。

## C-05 `/contact` Description 超长

- **冲突点**：脚本生成 162 字符，超过 ONPAGE.md §2 的 155 上限（脚本自身也打了告警）。
- **裁决**：按 ONPAGE.md 截到 ≤155，同步改 `pageMetadata` 与 `routes.json` 两处（SEO.md「四处同步面」）。
- **回灌建议**：脚本加Description 长度硬校验，超限即截断而非仅告警。

## C-06 设计 token 落地：模板天空系 → 本站暗色系

- **冲突点**：见 C-01。`globals.css @theme` 已按裁决改为暗色体系。
- **裁决后的 token 表（已写入 `globals.css` 与 `docs/DESIGN.md`）**
  | 用途 | Token | 色值 | 来源 |
  | --- | --- | --- | --- |
  | 页面最深底/页脚 | `--color-canvas-deep` | `#0E181E` | 暗部压暗 |
  | 页面主底 | `--color-canvas` | `#16232B` | 主频色延伸 |
  | 卡片表面 | `--color-surface` | `#1D2E38` | 表面提亮一档 |
  | 表头/ hover | `--color-surface-2` | `#243947` | 表面再提亮 |
  | 分隔线 | `--color-line` | `#2A3F4C` | 表面边界 |
  | 正文 | `--color-ink` | `#E9EFF3` | 亮色文字 |
  | 次要文字 | `--color-ink-muted` | `#9DB2BD` | — |
  | 主色（湖蓝） | `--color-primary` | `#5AAEED` | `#317DC9` 提亮 |
  | 强调（灯火琥珀） | `--color-accent` | `#E9A63F` | `#CA9454` 提亮 |
  | 成功/已核验 | `--color-success` | `#6FBF73` | — |
  | 警示/未核验 | `--color-danger` | `#E4707F` | 蘑菇红提亮 |
  | 链接 | `--color-link` | `#6FBBF0` | 白底对比 ≥4.5:1，带下划线 |
- **回灌建议**：脚本支持 `--theme dark` 时按上表结构派生；`--color` 仅决定 primary/accent 的色相来源。

## C-07 字体：模板 Inter vs 本站 Silkscreen（像素体）

- **冲突点**
  - `init_site.py` 固定 `next/font` 自托管 **Inter** 作唯一字体。
  - 本站实际：游戏为像素美术（Steam 标签 `Pixel Graphics`），官方截图内文字
    （如场景提示「Work Bench」）为**圆润像素体**。用户明确要求「字体尽量与图片中包含的字体相近」。
- **裁决**：采用 **Silkscreen**（OFL 许可，Google Fonts）作标题/标签像素字体，
  已转为 WOFF2 放入 `public/fonts/silkscreen-400.woff2` / `silkscreen-700.woff2`（自托管，
  符合 AGENT.md §2「禁止外链Google Fonts CDN」）；**正文长文仍用系统 UI 无衬线体**
  （像素字体长段落阅读性差、且移动端小字号不可读）。
- **回灌建议**：脚本增加 `--font-display` / `--font-body` 参数；
  像素风站点默认 display=像素字体、body=系统无衬线。

---

## 待人工确认

1. `/release` 路径：是把脚本生成的 `/release-date` 改名为 `/release`（新站未上线，可直接改），
   还是保留 `/release-date` 并在 SITE.md 记录例外？——建议直接用 `/release`，未上线不存在收录损失。
2. SITE.md 提到的 `/wiki/` 与脚本 `item-database` 的边界：建议 `/wiki` 作总入口、
   `/item-database` 作装备/道具明细，需确认是否保留两个页面。