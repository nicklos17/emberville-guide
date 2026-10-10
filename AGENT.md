# AGENT.md — Emberville Guide 开发约束

> 本文件的优先级高于任何一次性指令。与它冲突的实现，改实现，不改本文件。
> 修改本文件需人工批准。

## 0. 项目身份
- 项目自定：每个站点都会有所差异，因此以docs/SITE.md为准。在项目初始化之前，都应该配置SITE.md，使其符合每个站点的特殊需求
- 项目类型：非官方粉丝站
- 站名（唯一写法）：Emberville Guide
- 域名：https://emberville-guide.wiki
- 定位：Emberville 的攻略与资料库，非官方粉丝站
- 语言：仅 en（单语言站，不做多语言版本，不加 hreflang）
- 内容方向：wiki / guides / release / map / builds & items / characters / news
  （7 个核心栏目，详见 docs/SITE.md）
- 浏览器兼容性：需要支持 PC 和手机移动端

### 0.1 合规（不可省略）
- 页脚常驻免责声明：`Emberville Guide is an unofficial fan site. Emberville is a trademark of Cygnus Cross. We are not affiliated with or endorsed by Cygnus Cross.`
- 禁止使用官方 / 发行商 Logo；除官方公开截图外不得使用官方美术资源；官方美术做底时页面须有 © 署名
- 禁止把站点包装成官方网站：Title、H1、og:site_name 一律不得出现 "Official"
- 品牌名一律用全称，**不要缩写**（若全称与竞品域名仅差几字母，必须靠全称区分）

### 0.2 站点常量（写进 src/config/site.ts，全站引用，禁止散落硬编码）
```ts
export const SITE = {
  name: "Emberville Guide",
  domain: "emberville-guide.wiki",
  url: "https://emberville-guide.wiki",
  tagline: "The complete Emberville wiki & guides — maps, gear, characters and bosses.",
  locale: "en",
  earlyAccessDate: "2026-10-27",   // 计划 EA 发售日，Steam 官方（Verified: 2026-10-09）；正式版日期官方未定，不设 launchDate
  developer: "Cygnus Cross",
  platform: "PC (Steam)",
  genre: "Action RPG",
} as const;
```

## 1. 内容真实性（最高优先级）

### 1.1 禁止编造
严禁凭空生成：**名称、数值、排名、日期、兑换码、统计数据**。无法确认的数据一律不写。
宁可页面短，不可页面假。

### 1.2 数据源白名单（按主题选用，不把一个页面当全站唯一信源）
1. **Cygnus Cross 官方站** `https://www.cygnuscross.com/` — 开发者公布的故事设定、工作室信息、配音演员与官方渠道；引用具体信息时链接到对应官方页面。
2. **Steam 商店页及 Steam News** — 开发者游戏介绍、系统说明、Early Access 范围、路线图和开发者公告；公告逐条链接原始页面。
3. **GOG 官方产品页** `https://www.gog.com/en/game/emberville` — 仅用于核实 GOG 商品页上实际展示的发售日期、平台、系统需求、商品说明及 GOG 商店政策；不要仅凭商店有页面推断其它未列明的合作或权益。
4. **开发者原始新闻稿**（如 Cygnus Cross 署名、发布在 GamesPress 的新闻稿）— 可用于该新闻稿明确写出的发布消息、开发者表述和游戏系统；标成「Cygnus Cross press release (hosted by GamesPress)」，不要将它误标成 GamesPress 的独立新闻报道。
5. **有署名的专业媒体报道/预览**（如 IGN）— 可用于其明确报道的公告，以及记者亲自体验文章中实际记载的观察；标明媒体、作者/报道类型与发布日期。编辑评论、试玩观察不得改写成开发者承诺或所有版本都成立的系统事实。
6. 官方 YouTube / 官方社媒 — 账号身份须能由 Cygnus Cross 官方站或 Steam 页面链接核实；每条内容单独核对并引用原始地址。
7. SteamDB / Steam Charts — **限定数据类型**（仅玩家并发在线读数），引用必须带取数日期（as-of 口径）及范围限制；禁嵌图表资源，只引数字。

**灰名单**（只能作社区讨论/线索，不得作唯一事实依据）：Reddit、官方 Discord、社群实测帖。Reddit 帖仅当发帖帐号和帖子内容可直接核实时引用；开发者帐号的帖子注明帐号身份及平台，其余一律标记 `Community-reported, not officially confirmed.`。未能找到或核验的帖子不引用。
**黑名单**（不得作为事实来源）：无署名聚合页、搜索优化内容农场、营销/联盟导购页，以及无法追溯至原始开发者材料的转述。不得把新闻稿转载数量当作多个独立信源。

### 1.3 数据必须带出处
`Source: <来源名> (<url>) · Verified: YYYY-MM-DD`

### 1.4 不确定就显式声明
- 未上线数据 → `Not yet available — ...`（写明何时可得）
- 客户端/官方未公开的字段 → 不得猜测命名，写 `Names are still withheld by the client.`
- 社区来源 → `Community-reported, not officially confirmed.`

### 1.5 禁止的逻辑错误
- 禁止拿 A 服/旧版数据冒充 B 版结论；引用时必须标明数据口径（如 `Based on KR/TW builds`）
- 禁止在没有实测样本时写排名，一律标 `Pending launch`
- 禁止把第三方站点正文复制粘贴过来

## 2. 技术栈

- Node.js **≥ 22**（Wrangler 4 硬性要求）；仓库带 `.nvmrc`；package.json `engines` 钉住
- Next.js（App Router）+ TypeScript（strict）+ Tailwind CSS
- 部署：Cloudflare Workers，**必须用 `@opennextjs/cloudflare`**
- **禁止 `output: 'export'`**（会丧失 SSR，直接违反第 3 节）
- **禁止 `'use client'` 包住 layout 或 page 顶层**；客户端组件只允许出现在叶子节点
  （广告位、交互筛选器、返回顶部、倒计时）
- 图片：`next/image` + Cloudflare 兼容 loader
- 字体：`next/font` 自托管；禁止外链 Google Fonts CDN
- 目录约定：
  ```
  app/                   页面与路由
  app/(content)/         带广告的内容页分组
  app/(plain)/           about / privacy / terms / contact / rss
  components/            UI 组件
  components/ads/        AdSlot 及广告相关
  content/               结构化数据（JSON/MDX），与展示层分离
  lib/                   seo.ts / schema.ts / dates.ts
  config/site.ts         站点常量
  docs/                  本约束文档
  ```

## 3. 渲染与 SEO（服务端渲染强制）

- 所有内容页必须 **SSR 出完整 HTML**：Title、H1、正文、内链、JSON-LD 全部出现在初始 HTML 里
- 动态路由禁止纯客户端取数
- 缓存：内容页一律 `export const revalidate = false`（全静态）。页面数据来自 `src/content/*`，
  构建时已打包——ISR 定时重渲染只会产出相同 HTML、白白消耗 Worker CPU，在 Workers 免费版上
  触发 Cloudflare 1102（"Worker exceeded resource limits"）。OpenNext 侧对应
  `staticAssetsIncrementalCache`（见 `open-next.config.ts`）
  > **[待人工批准 · 2026-10-09 实测修正]** 本行的 `staticAssetsIncrementalCache` 写法经实测不成立
  > （`@opennextjs/cloudflare@1.20.10`）：①该键不能写在 `wrangler.jsonc` 的 `assets` 字段；
  > ②正确位置是 `open-next.config.ts` 的 `defineCloudflareConfig({...})`；
  > ③值域仅 `"dummy" | function`，传该字符串会直接 throw。全静态站应用 `"dummy"`
  > ——预渲染 HTML 落在 `.open-next/cache/**/*.cache`，Worker 读缓存返回，SSR 完整。
  > 详见 `docs/CONFLICTS.md` C-08。**改本行需人工批准**，暂保留原文。
- 未来若新增运行时取数页面（真 ISR），须切换 `r2IncrementalCache` + `NEXT_INC_CACHE_R2_BUCKET`
  （R2 需在 Dashboard 先开通），并考虑 Workers Paid；高频刷新页 → `revalidate = 300`
- 每页必须 `generateMetadata()`，产出唯一 title / description / canonical / openGraph
- `app/sitemap.ts`、`app/robots.ts` 动态生成，sitemap 分片（>5000 条）
- 结构化数据：全站 `WebSite` + `SearchAction`；非首页加 `BreadcrumbList`；含 FAQ 加 `FAQPage`；
  攻略文加 `Article`（时点事件可加 `Event`）
- `datePublished` 与 `dateModified` 分开，不得混用；页面上必须显示 `Updated: YYYY-MM-DD`
  且与 `dateModified` 一致
  > **[待人工批准 · 2026-10-09 人工决策]** 本行「页面必须显示 Updated」已不执行：
  > 全站 14 页已移除可见的 Updated 戳（组件保留待恢复）。日期戳改由
  > `sitemap.xml` `<lastmod>` 与 `routes.json.lastModified` 承载，两者均未改动，
  > 机器可读出口完整。**§8 第 196 行的对应验收项同样已失效。**
  > 详见 `docs/CONFLICTS.md` C-09。**修订本行需人工批准**，暂保留原文。
- 详见 `docs/SEO.md`

## 4. 广告位

### 4.1 开关
环境变量 `NEXT_PUBLIC_ADS_ENABLED`，默认 `false`；开发环境强制关闭。

### 4.2 白名单制（重要）
广告**只在 `pageType === 'content'` 时渲染**，默认不加。
- ✅ 加：`/`、核心栏目页及其详情页
- ❌ 不加：`/about`、`/privacy`、`/terms`、`/contact`、`/rss*`、`/sitemap*`、`/404`、`/500`、
  任何错误页、任何纯导航页

实现方式：内容页 layout 显式渲染 `<AdSlot />`，非内容页不引入组件。
**禁止用路径黑名单判断**（新增 about/terms 类页面会漏）。

### 4.3 内容页固定三个位
| 位置 | 类型 | 规则 |
| --- | --- | --- |
| 正文内 | Banner | 第一段之后、第一个 H2 之前 |
| 左侧栏 | 对联 Skyscraper | 仅 ≥1280px 显示 |
| 右侧栏 | 对联 Skyscraper | 仅 ≥1280px 显示 |

- `<1280px` 只保留 Banner（可加正文末尾 bottom-banner 补移动端曝光），左右位不渲染不请求
- 三个位必须预留固定尺寸容器，**CLS 必须为 0**
- 广告脚本懒加载（`requestIdleCallback` 后注入）
- 广告不得出现在 H1 与首段之间，不得遮挡正文

### 4.4 性能红线
LCP < 2.5s · CLS < 0.1 · INP < 200ms
广告加载失败时容器自动收起，不得留白块。详见 `docs/ADS.md`。

### 4.5 统计（GA4）
GA4 **只在内容页统计**，声明/静态页（about / privacy / terms 等）不统计。
- 实现与广告同规则：`(content)` 布局显式渲染 `<Ga4Script />`，`(plain)` 布局不引入组件；
  **禁止用路径黑名单判断**
- 引导脚本只对生产域名生效：本地 dev、preview、`*.workers.dev` 预览域名不下载 gtag.js、不上报
- 测量 ID 写在 `src/config/site.ts`（§0.2）

## 5. 页面骨架规则

1. **一词一页**：每个目标词有且只有一个落地页；父子页不覆盖同一主词
2. **正文下限**：每页 ≥ 1200 字符可读正文（不含导航、广告、页脚）
3. **必备模块顺序**：H1 → 一句话答案块 → 对照表/数据块 → 分节 H2 → FAQ → 更新时间
4. **一句话答案块**：开头 1–2 句直接回答主词对应的问题（吃 PAA 与 AI 引用）
5. **H2 用用户会搜的短语**，不用 "Introduction" / "Overview" 这类空话
6. **内链三向**：父→子、子→父（面包屑）、兄弟互链（每页 3–5 条）
7. **TDK 规范**：Title 45–60 字符、Description ≤ 155 字符；H1 与 Title 措辞必须区分
8. **时效页带年份/月份**：tier list、patch notes、codes 类页面的 Title 带年份
9. 详情页正文不重复父页内容；父页只给总览与对照表

## 6. 禁止事项清单

- ❌ 编造任何数值、名称、排名、日期、兑换码
- ❌ `output: 'export'`、客户端渲染正文、`'use client'` 包 layout
- ❌ 在非内容页加广告；用路径黑名单判断是否加广告
- ❌ 广告导致布局位移
- ❌ 使用 "Emberville Official" 一类表述
- ❌ 未实测就给排名
- ❌ 用 `noindex` 处理内容不完整的页面 —— 不完整就不发布
- ❌ 复制粘贴第三方站点正文
- ❌ 自动翻译生成多语言页
- ❌ 建空标签页 / 归档页 / 薄内容页

## 7. 变更协议

- 新增页面 → 先在 `docs/KEYWORDS.md` 登记主词，确认无冲突再开发
- **详情页上线回改父页**：详情页交付的内容项，父页 Pending / 占位行不得再列为"未交付"；
  父页模板按已上线详情页清单自动过滤渲染（同类毛病第三次出现后立的固定规则）
- **一词一页让位**：详情页上线即占用其词形后，父页 SEO title 不得再占该词形——
  父页数据加可选 `seoTitle` 覆盖（见 `docs/SEO.md`）
- 新增栏目页 / 站点结构调整 → 先读 `docs/栏目.md`（建页判据、URL 禁改、导航分组、栏目页 TDK）
- **新增/修改内容页 → 必读并遵守 `docs/INTERNAL-LINKS.md`**（层级模型、各页型链接义务、锚文本、
  Related 区、页脚、禁则）；发布前逐条跑其第 9 节自检清单，任何一条不过即内链缺陷，不需再问
- 新增数据源 → 先写进 1.2 白名单
- 任何与本文件冲突的「优化」→ 拒绝执行并回报

## 8. 交付前验收清单（每个 PR 自查）

- [ ] 页面有且只有一个主词，已在 `docs/KEYWORDS.md` 登记
- [ ] 初始 HTML 里能看到 Title / H1 / 正文 / JSON-LD（禁用 JS 检查）
- [ ] `generateMetadata` 产出唯一 canonical，绝对路径、与 trailingSlash 一致
- [ ] 正文 ≥ 1200 字符，含至少一张对照表或数据块
- [ ] 每个数据块带来源与核验日期
- [ ] 页面显示 `Updated: YYYY-MM-DD`，与 `dateModified` 一致
  > **[已失效 · 2026-10-09]** 本项已停用：全站不再显示可见的 Updated 戳。
  > 改为核对 `routes.json` 的 `lastModified` 与 `sitemap.xml` 的 `<lastmod>` 一致即可
  > （两者同源于 routes.json）。见 `docs/CONFLICTS.md` C-09。**正式修订需人工批准。**
- [ ] 已在 `docs/CHANGELOG.md` 记一行
- [ ] 广告只在内容页出现，三个位固定尺寸，移动端只留 Banner
- [ ] 内链三向齐备，锚文本用目标页主词；已逐条通过 `docs/INTERNAL-LINKS.md` 第 9 节自检清单
- [ ] 无 `'use client'` 污染 layout / page 顶层

## 9. 页面级细则

TDH 写法、AI 写作约束、内链三向、发布前自检见 `docs/ONPAGE.md`；
栏目页（枢纽页）的建页判据与结构规则见 `docs/栏目.md`；
内链的层级模型、每页链接义务、锚文本与禁则以 `docs/INTERNAL-LINKS.md` 为准（写页/改页必读）。
