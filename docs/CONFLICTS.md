# 模板冲突记录（init_site.py 派生模板 vs 本项目实际）

> 用途：初始化时逐条记录「模板/通用文档」与「本站实际」冲突项及裁决结果，
> 为后续把本站做法回灌进 `scripts/init_site.py` 提供依据。
> 裁决优先级：**SITE.md > 实测取样（官方截图/官方页面） > AGENT.md > docs 通用模板**。
> 权威顺序全文见 `docs/README.md`。
> 记录格式：新增条目追加在末尾，不改写历史行。

---

## C-10 文档层栏目污染：docs 里跑出了模板站的栏目结构

- **冲突点**
  - `docs/SITE.md` 定义本站**7 个核心栏目**：`/wiki` `/guides` `/release-date` `/map`
    `/builds` `/characters` `/news`（`AGENT.md` §0 亦同口径，并规定「以 docs/SITE.md 为准」）。
  - 但 `INTERNAL-LINKS.md`、`ONPAGE.md`、`栏目.md` 等方法论文档里，整套层级模型写的是
    **模板站（其他游戏）的结构**：`/classes`（8 个子页）、`/pets`（5 个）、`/tools`（3 个）、
    `/tier-list`、`/crafting`、`/dungeons`、`/pvp`、`/categories`、`/rift-timer` 等，
    锚文本示例是 `AION 2 event timer`、`Related AION 2 coverage`，"实测状态"快照记的也是
    `/pets` 5 个子页、`/tools/rift-timer` 等**本站根本不存在的页面**。
  - 危险点：这些是**方法论文档**，Agent 写页时按AGENT.md §7 要求「必读并遵守
    `INTERNAL-LINKS.md`」——照着执行会去建一批不该存在的页面，且导航分组示例
    （Launch / Classes / Systems）已经影响了 `navigation.json` 的实际结构。
- **裁决**
  - 以 `SITE.md` 为准，把 docs 的例子与层级模型全部换成 Emberville 实际结构：
    - `INTERNAL-LINKS.md` 重写为 v1.2：层级模型 = L0 首页 + 7 栏目 + 2 从属页 + L2（当前不存在）；
    - `ONPAGE.md`：`/categories`→`/wiki`、`/dungeons/{name}`→`/map/{region}`、
      Classes/Tier List 类 H2 示范→Emberville 实例；
    - `栏目.md`：三层实例、§8 栏目词示例（`/crafting`→`/map`）、执行清单的「导航分组」条目
      改为「不加无信息量分组标签」（与上一轮导航扁平化一致）；
    - `CONTENT.md`：tier list / server-status 页型标注「本站当前不需要，建前先改 SITE.md」。
  - **新增 `docs/README.md` 作为 docs 唯一入口**，写明权威顺序与"例子即口径"的维护约定。
- **回灌建议**：`init_site.py` 应把方法论文档里的示例路由参数化，或在建站时按 `SITE.md`
  自动替换；模板站例子在派生文档里应标注「示例，非本站结构」，避免被当成口径执行。

## C-11 SITE.md 与实际路由的三处偏差（已回填 SITE.md）

- **冲突点**
  - SITE.md 写 `Release & Platforms` 的 URL 是 `/release/`，实际实现是 `/release-date/`。
  - SITE.md 的 7 栏目清单里**没有** `/countdown` 与 `/item-database`，但两页真实存在、
    已进 `routes.json` / sitemap / 顶部导航 / 页脚。
  - SITE.md 未声明「什么不属于本结构」，导致 docs 各文档自行补充栏目（见 C-09）。
- **裁决**：以实际实现为准回填 `SITE.md`，并明确从属关系：
  - URL 保持 `/release-date`（`栏目.md` §3「已上线 URL 一个都不改」；`/release` 从未上线过，
    故不构成"搬迁"，直接改路径反而制造 404 风险）；
  - `/countdown` 定义为「Release 的倒计时组件页」、`/item-database` 定义为「Wiki 的条目明细页」，
    层级等同 L1 但**不是第 8、第 9 个栏目**，对外统一表述为「7 个核心栏目」；
  - 新增「不在本结构内的东西」段：工具页/ 排行页 / 玩法专题页一律不存在，要建先改 SITE.md。
- **连带修正**：`KEYWORDS.md` 删掉 `/disclaimer` 占位行（非官方声明由页脚常驻句承载，
  见 `AGENT.md` §0.1 与 `layout.tsx`），并在禁建清单补「SITE.md 未定义的栏目页」。

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

## C-08 部署配置：AGENT.md §3 的 `staticAssetsIncrementalCache` 写法与实际不符

- **冲突点**
  - `AGENT.md §3` 写「OpenNext 侧对应 `staticAssetsIncrementalCache`（见 `open-next.config.ts`）」，
    措辞暗示可写 `incrementalCache: "staticAssetsIncrementalCache"`。
  - 实测（`@opennextjs/cloudflare@1.20.10`）三重不符：
    1. 该键**不能写在 `wrangler.jsonc` 的 `assets` 字段**——wrangler schema 不认，
       报 `Unexpected fields found in assets field: "incrementalCache"`；
    2. 正确位置是 `open-next.config.ts` 的 `defineCloudflareConfig({...})`；
    3. 即使位置对了，**值只能是 `"dummy"` 或函数**。`ensure-cf-config.js` 的校验器
       只接受这两种（`resolveIncrementalCache` 虽接受任意字符串，但校验在先，直接 throw）。
    4. 附带：选项名是 `enableCacheInterception`，不是 `cacheInterception`。
- **裁决**
  - `wrangler.jsonc` 保持干净的 `assets`（只留 `directory` / `binding`）；
    缓存配置全部放`open-next.config.ts`，值用 `"dummy"`。
  - **本站 `incrementalCache: "dummy"` 即为正解**：全站 `revalidate = false` 全静态预渲染，
    预渲染 HTML 落在 `.open-next/cache/**/*.cache`（实测 21 个，每个含完整 `</html>`），
    Worker 读缓存直接返回 → SSR 完整，满足 AGENT.md §3。
  - 部署后已实测线上页面 H1/正文/表格/JSON-LD 全部正常，无需改配置。
- **回灌建议**
  - 改 AGENT.md §3 表述为：`incrementalCache` 配在 `open-next.config.ts`，
    全静态站用 `"dummy"`；值域收敛为 `"dummy" | function`，删除 `staticAssetsIncrementalCache` 字样。
  - `init_site.py` 生成的 `open-next.config.ts` 目前是空参 `defineCloudflareConfig()`（等价 dummy），
    本身可用；**真正要改的是 `wrangler.jsonc` 模板别再加 assets 内的该键**。

---

## C-09 全站停用 `Updated:` 可见戳（人工决策，与 AGENT.md §3/§8 冲突）

- **冲突点**
  - `AGENT.md §3`：「页面上必须显示 `Updated: YYYY-MM-DD` 且与 `dateModified` 一致」。
  - `AGENT.md §8` 验收清单：「页面显示 `Updated: YYYY-MM-DD`，与 `dateModified` 一致」为必过项。
  - 2026-10-09 人工决策：**所有页面去掉 Updated 的显示**（视觉上不要这个戳）。
- **执行**14 个页面（10 内容页 + 4 政策页）全部移除 `<UpdatedStamp />` 调用与 import；
  `src/components/UpdatedStamp.tsx` **保留文件**（加注释说明停用与恢复方式），未删除。
- **影响面盘点（停用后日期仍有的出口）**
  | 出口 | 状态 |
  | --- | --- |
  | 页面可见文本 | 已移除（按决策） |
  | `sitemap.xml` `<lastmod>` | **仍在**（取自 `routes.json.lastModified`，14 页齐全） |
  | `routes.json` `lastModified` | **仍在**（SITEMAP.md 单一来源未动） |
  | `docs/CHANGELOG.md` | **仍在**（日期戳源头） |
  | JSON-LD `Article.dateModified` | 本就未实现（`lib/schema.ts` 无 Article）——停用不新增缺口 |
- **裁决与后续**
  - 认定：**AGENT.md §3 / §8 需同步修订**，否则每次跑验收清单都会记为缺陷。
  - 停用**不破坏任何机器可读出口**：sitemap lastmod 与 routes.json 均完好，
    搜索引擎收录/时效判断不受影响；失去的只是给读者的可见新鲜度提示。
  - `routes.json.lastModified` **维持 2026-10-09 不 bump**：按 SITEMAP.md，
    bump 值 = 内容实际改动当日，同日改动日期戳不变。
  - **改AGENT.md §3/§8 需人工批准**，暂只在本文件记录。
- **回灌建议**：若确认长期停用，把 AGENT.md §3/§8 的「必须显示 Updated」改为
  「日期戳统一由 sitemap.xml `<lastmod>` 与 `routes.json` 承载，不在页面正文重复展示」——
  避免同一日期在页面上重复三处（戳/表/正文）。

---

## C-12 视觉降刺激：像素体下线 + 琥珀降饱和（推翻 C-07 的部分裁决）

- **冲突点**
  - `C-07` 曾裁决：Silkscreen 像素体作标题/标签字体（依据是「用户要求字体贴近官方截图内的像素字」）。
  - `DESIGN.md` 原「像素体不用于正文」只把限制放在正文，标题/表头/导航仍用像素体。
  - 2026-10-09 第一版上线后实测反馈：**「看着眼睛很痛」**。
- **定位（三个因素叠加，非单一色值问题）**
  1. **高饱和琥珀当标题色铺满全屏**：`--color-accent` HSL 饱和度 79%，
     H2 全行琥珀 + 表头再叠一层琥珀，一屏出现两大块高饱和色。
  2. **橙蓝同屏对抗**：`--color-link` 饱和度 81% 亮蓝 + 全屏下划线，与琥珀互补撞色。
  3. **近白正文压深底**：`--color-ink` L=93% 配`#16232B` 深底，长读产生光晕。
  4. 附加：像素体 + 全大写 + 宽字距三者叠加，边缘颤动明显（低分辨率字形在深底上更甚）。
- **裁决**
  - **像素体全站下线**（覆盖 C-07 的「标题用像素体」部分；C-07 的其余结论
    「禁外链 Google Fonts CDN」「正文用系统无衬线」保持有效）。
    `layout.tsx` 移除 `next/font/local` 加载，全站统一系统 UI 无衬线。
    `public/fonts/silkscreen-*.woff2` 不再被任何代码引用（文件保留未删，可择机清理）。
  - **色值降刺激**（HSL 饱和度是本次主要调整维度）：
    | Token | 原值 | 新值 | 饱和度 | 对比度 on canvas |
    | --- | --- | --- | --- | --- |
    | `--color-ink` | `#E9EFF3` | `#DBE4EA` | 29%→26% | 13.83→ **12.01**（仍 AAA） |
    | `--color-ink-muted` | `#9DB2BD` | `#A6B8C2` | 20%→19% | 7.28→ **7.56** |
    | `--color-ink-dim` | `#7C929D` | `#8A9BA5` | 14%→13% | 4.93→ **5.39** |
    | `--color-primary` | `#5AAEED` | `#74B3D6` | **80%→54%** | 6.65→ **6.75** |
    | `--color-link` | `#6FBBF0` | `#8CBEDE` | **81%→55%** | 7.67→ **7.76** |
    | `--color-accent` | `#E9A63F` | `#D3A06A` | **79%→54%** | 7.63→ **6.64** |
    | `--color-canvas` | `#16232B` | `#18262F` | — | 表面阶梯保持 |
    > 关键点：**降饱和的同时把明度略提**，所以对比度不降反升——
    > 观感柔和了，可读性反而更严。这是本次能同时满足「看着舒服」与AA/AAA 的原因。
  - **橙色降级为点缀色**（写页硬规则，已进 DESIGN.md）：H2 改近白字 + 左侧 3px 琥珀线；
    表头改 `--color-ink-muted`、取消 uppercase 与宽字距；标题层级靠字重/字距建立，不靠颜色。
  - 全站对比度重算后仍全部 ≥ 4.5:1，正文达 AAA，无障碍红线未被牺牲。
- **附带修复**：`body` 加 `-webkit-font-smoothing: antialiased` 与
  `font-variant-ligatures: none`（深底上连字会糊）；链接下划线改半透明
  `color-mix`（满色下划线在深底上形成高频横纹，是疲劳来源之一）；
  `:focus-visible` 由 3px 改 2px 实心（3px 在深底上过于扎眼但仍清晰）。
- **未改动**：`themeColor` 同步为 `#101C23`；图片仍为像素美术
  （`image-rendering: pixelated` 不变）——**去的是文字像素风，不是图片像素风**。
- **回灌建议**
  - `init_site.py` 生成的模板应默认**不加载 display 像素字体**；
    `--font-display` 参数改为可选、默认系统无衬线。
  - 像素风站点若确需呼应截图风格，建议走「图片像素化 + 文字无衬线」组合，
    而不是「文字也用像素体」——后者在深底+长文案场景的可读性代价过高。
  - 派生暗色 token 时，除明度阶梯外**必须同时约束饱和度上限**（建议 ≤ 55%），
    否则高饱和色在深底上会持续制造疲劳。

---

## C-13 新增 Platforms 栏目（核心栏目 7→8）与撤 `/countdown`（不设 301），触到两条既有硬规则

- **冲突点 1：`栏目.md` §2 判据「子页 ≥5 → 建栏目页；子页 2~3 → 不建」**
  - `/platforms` 目前只有 1 个子页（`/platforms/multiplayer`），按子页判据**不该建栏目页**。
  - **裁决**：以 `SITE.md`（最高权威）+ 用户明确决策为准，建 `/platforms`。理由——
    ① 栏目词有官方量：`emberville platforms` 20/月，另有 `emberville ps5`(90) `emberville switch`(110)
    `emberville switch 2`(30) `emberville console`(30) `emberville xbox`(30) `emberville mobile`(10)，
    美国口径合计约 320/月（2026-10 实测），即 `栏目.md` §2 第三条「栏目词查不到体量 → 挂起」的反面成立；
    ② 该栏目页不是靠子页撑枝干，而是**本身一页承接六个同义平台词面**（六词答案是同一个：
    官方目前只有 PC，主机未公布），子页数判据在本例不适用；
    ③ 导航新增一项 Platforms（放 Release 右侧），为用户明确要求。
  - **回灌建议**：`栏目.md` §2 判据补一条例外——「栏目页本身承接多个同义高量词面时，不受子页数约束」。

- **冲突点 2：`栏目.md` §3 / `INTERNAL-LINKS.md` §9 禁则 5「已上线 URL 一个都不改」**
  - 撤 `/countdown` 等于删除一个已上线 URL，直接违反该禁则。
  - **裁决**：用户明确要求撤页（与 `/release-date` 高度重叠）。执行口径——
    删页面文件、清全站内链（首页 / `/guides` / `/release-date` / `/about`）、
    从 `routes.json` 移除条目（sitemap 随之不再输出 `/countdown`）。
    **按人工决策不设 301**：旧 URL 直接返回 404，不做边缘跳转（与 `docs/REDIRECT.md`
    「跳转统一在边缘层」不冲突——这里是不做跳转，不是把跳转写进代码）。
  - **回灌建议**：模板新增「撤页」条目，规定撤页必须产出 CHANGELOG 待办，
    并明确记录「设 301 还是直接 404」这一人工决策；撤页的前提是
    「目标页已完整承接其关键词与独有内容」。

- **冲突点 3（顺带）：`栏目.md` §8「栏目页不为它堆内容冲流量」**
  - `/platforms` 实际承载 6 个词面、正文较长。
  - **裁决**：不构成冲突——该页内容是「逐平台的最新官方口径」，属结论与分发，不是为冲流量堆砌；
    且它是这六个词面的唯一承接页（无姊妹页可分担）。

---

## 待人工确认

1. ~~`/release` 路径~~ —— **已裁决（C-11）**：保留 `/release-date`，不改路径。
2. ~~`/wiki` 与 `/item-database` 的边界~~ —— **已裁决（C-11）**：两页都保留，
   `/wiki` 管结构、`/item-database` 管单条目数值（`KEYWORDS.md` 已划界）。
3. `workers.dev` 是否常开：绑定 `emberville-guide.wiki` custom domain 后 wrangler 自动禁用了
   workers.dev 通道。要保留预览域需在 `wrangler.jsonc` 显式加 `workers_dev = true`
   （当前不建议开——两域同内容会造成重复收录，REDIRECT.md §3 已明确禁止）。
4. **AGENT.md §3 / §8 是否按 C-09 修订**：去掉「必须显示 Updated」这一条。
   不改的话，每轮验收都会把它记成缺陷。
5. **AGENT.md §7 / §8 的「INTERNAL-LINKS.md 第 9 节」引用是否修订**：
   自检清单已随 v1.2 重写移到第 11 节。改 AGENT.md 需人工批准，暂只在本文件记录。
6. **导航是否需要重新分组**：现行方案是扁平单行 9 项（无分组标签）。
   `栏目.md` / `INTERNAL-LINKS.md` 原口径是「导航按用户任务分组」。
   现已按 C-10 改为「不加无信息量分组标签」，但这与哥飞原方法论有张力——
   若后续栏目扩到 12+ 项，可重新评估分组或加移动端菜单。