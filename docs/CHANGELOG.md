# 站点更新日志

用途：**这是页面日期戳的源头**。每次内容更新在此写一行，页面 `Updated:` 与 `dateModified`
必须与之一致（routes.json bump 后全链路联动，见 `SITEMAP.md`）。

格式：

```
YYYY-MM-DD
[页面路径] 更新内容摘要（数据来源）
```

约定：
- 同日同页多次改动并入当日同一条目补记
- 同日改动日期戳不变（当日已是 lastModified）
- 补录滞后时，条目日期写内容实际改动日对应的 lastModified 值口径（不伪造新鲜度）
- 规则成文时注明触发背景（源站惯例：同类毛病第三次出现后立规），如
  「（2026-10-02，同类毛病第三次出现后立的规则）」

---

## 站点日志

```
2026-10-10
[/countdown] 撤页决策反转（补记）：由「直接 404」改为 **301 → /release-date**。动机：保留旧 URL 可能已有的收录与外链权重。实现为 next.config.ts redirects()（statusCode 301；撤页路径无对应资产、请求必达 Next 路由），已部署并线上验证 301 与落点 200；`/countdown/` 尾斜杠 308 归一后 301，query 透传；www 两跳与既有 www 规则一致。同步回填 docs/REDIRECT.md §6（撤页 301 的层位选择与验证命令）、docs/CONFLICTS.md C-13 补记、docs/KEYWORDS.md、docs/INTERNAL-LINKS.md §9/§10。页面内容不变（独有内容此前已并入 /release-date）。
2026-10-10
[全站·结构] 新增 Platforms 栏目与三个新页，撤 /countdown：① 新建栏目 `/platforms`（导航 Release 右侧新增一项 Platforms；一页承接 `emberville platforms` 及 ps5/switch/switch 2/console/xbox/mobile 六个同义词面，首段一句给结论「官方仅 PC（Steam 与 GOG），主机与移动端未公布」，分节写 PS5+Xbox / Switch+Switch 2 / mobile，口径一律「未公布」而非「不会出」；H2 覆盖 `Emberville platforms: what is confirmed`、`Emberville PS5 and Xbox status`、`Emberville Switch and Switch 2 status`、`Emberville mobile`、`How this page updates`，配 7 行平台状态表）；② 新建 `/platforms/multiplayer`（承接 multiplayer / is emberville multiplayer / will emberville be multiplayer，结论为 Steam 标 Single-player、EA 无联机，明说 1.0 路线图的 Workshop 模组≠联机）；③ 新建 `/price`（挂 Release 栏目下，只写官方口径——未公布具体售价、一次性买断、无微交易、EA 期可能折扣，全文不引任何第三方估算金额，含标为 estimate 的）；④ 新建 `/games-like-emberville`（按机制而非品类匹配，逐款配自家 Steam 页来源：Core Keeper / Moonlighter / DREDGE / Graveyard Keeper 2 / Dimraeth，Dimraeth 只作条目不单独开页）；⑤ 撤 `/countdown` 页（与 `/release-date` 高度重叠），把「日历日≠解锁时刻」与其独有内容并入 `/release-date`，该页新增 `Emberville release time: the listing gives a day, not an hour` 与 `Emberville unlock time and regional availability` 两节，并清理首页 / `/guides` / `/release-date` / `/about` 的全部 `/countdown` 内链，同时从 `routes.json` 移除条目（sitemap 随之不再输出该 URL）；**按决策不设 301，旧 URL 直接 404**；⑥ `/news/emberville-demo` priority 0.7→0.9，补 `What the Emberville demo includes` / `Does demo progress carry over?` / `Is the demo worth playing?` 三个 H2，并从首页与 `/release-date` 增挂内链；⑦ 首页补 `/platforms`、`/price` 内链，`/guides` 与 `/stardew-valley-diablo` 补 `/games-like-emberville` 内链；⑧ `/release-date` 的 `Price and purchase model` 节压缩为一段摘要，价格论证交 `/price`，避免与价格落地页复写；⑨ 四个新页正文与 Related 区的重复链接去重（同一页同一目标只链一次）。同步更新 `docs/SITE.md`（核心栏目 7→8、新增 Platforms 与子页/专题页登记）、`docs/KEYWORDS.md`（四页主词与边界、单平台页列入禁建清单、`/countdown` 退役说明）、`docs/INTERNAL-LINKS.md`（层级模型与链接义务）、`docs/SITEMAP.md`（分档表）、`README.md` 与 `src/content/routes.json`、`src/content/navigation.json`。无需额外人工步骤：`/countdown` 按决策直接撤页（不设 301）。来源：Steam 商店页、GOG 官方产品页、各相似游戏 Steam 商店页（Verified: 2026-10-10）。
2026-10-10
[全站·结构] 首页短语级覆盖整改与内容拆分（回应体检报告 P1/P2/P3）：① 首页 13 个 H2 全部挂上 "Emberville" 词面（如 `Emberville setting: imprisonment and renewal`、`Emberville combat: decisions over attack speed`、`Emberville crafting and the estate`），主词由周边词（Early Access / Cygnus Cross / store page）转回 `Emberville wiki`、`Emberville guides`；② 首页正文 2839 词 → 约 1700 词，把「配音阵容 / Stardew×Diablo 对比 / 工作室背景」三节拆为独立页 `/voice-cast`、`/stardew-valley-diablo`、`/studio`，首页只留摘要 + 内链；③ `/characters` 与 `/wiki` 的 22 人配音全表与重复段改为一句话摘要 + 内链，避免与专题页复写；④ `/countdown` 从顶部导航与页脚撤下、sitemap priority 0.8→0.5，Title/H1 改为 Date vs Unlock Time 口径，正文重写为「日历日 ≠ 解锁时刻」的差异化补充页，删除与 `/release-date` 重复的段落；⑤ 首页 hero 与 7 张栏目图补齐 `width`/`height`（1600×900 / 1200×675），消除 CLS 隐患；⑥ 首页 Description 改为 `Emberville wiki and guides:` 开头，避开 `Emberville's` 所有格分词误判。同步更新 `docs/SITE.md`（新增 L1 专题页定义与拆页判据）、`docs/KEYWORDS.md`（登记三个专题页主词与边界）、`docs/INTERNAL-LINKS.md`（L1 专题页层级）、`src/content/routes.json`、`src/content/navigation.json`。同日补记：⑨ H1 与 Title 去重（/wiki 由 `Emberville Wiki Database: Setting and Systems` 改为 `Inside the Emberville Wiki Database`；/countdown 由 `Emberville Countdown: Calendar Day vs Unlock Time` 改为 `What the Emberville Countdown Actually Counts`）；⑩ 首页 hero 的 `Browse the Wiki` 按钮改为 `View on Steam`，外链游戏 Steam 商店页（`store.steampowered.com/app/2295170/Emberville/`，`rel="noopener noreferrer"`），顺带消除该按钮与正文、卡片同指 /wiki 的重复链接。未改动任何事实与来源，数据块核验日期不变。
2026-10-10
[/news /news/emberville-demo] 将 /news 改为 Emberville news / updates 列表门户，新增 Steam Next Fest demo 详情页；登记 `Emberville demo` 主词与 routes.json 元信息，并同步 SITE.md、KEYWORDS.md、INTERNAL-LINKS.md 的栏目定位与 L2 规则。详情明确区分 IGN Oct 8 公告预告、Steam Next Fest 通用活动时段、全游戏商店描述及 IGN Sep 11 先期试玩；未推断 demo 内容/时长/存档延续/活动后访问/EA 价格。新增 NewsArticle、FAQPage 与 BreadcrumbList SSR 结构化数据。来源：IGN、Steamworks、Steam、TalkEsport（Verified: 2026-10-10）。
2026-10-10
[全站·广告] 修复 App Router 站内路由切换时左右对联沿用旧广告创意：按 pathname 重挂载展示容器，清理旧 iframe 后重新注入广告脚本；同步更新 docs/ADS.md 的路由切换验收规则。未修改页面正文及内容日期戳。
2026-10-10
[/ /wiki /characters] 补入三项此前遗漏的独家内容（回应「配音阵容/主播背景/对比段没用上」）：① 官方 22 人配音阵容全表（Cygnus Cross 官网，Alex Jordan 任 Voice Acting Director），并标出 IGN 试玩已点名的两个角色（Alex Jordan 配 Adeos、Matthew Mercer 配 Gumu）；② Cygnus Cross 工作室与 CohhCarnage 背景段（独立工作室、爱尔兰 Cork、首发作品、Brynjar Gigja 任 founder/lead game director、Ben「CohhCarnage」Cassell 任 co-founder/co-game director；并显式纠正社区帖流传的「creative lead」说法）；③ Stardew Valley / Diablo 对比段（IGN 1/27「Diablo Lite meets Stardew Valley」、GameSpot 1/28、IGN 9/11 试玩对双键连招与采集循环的具体对照）。首页新增 3 个 H2 与 3 条 FAQ，/wiki 新增 2 节，/characters 扩写配音阵容并补工作室段；新增来源 GameSpot、GamingTrend、Gamer Social Club（均为署名媒体）。来源：Cygnus Cross 官网、Cygnus Cross 新闻稿（GamesPress 托管）、IGN 试玩/公告、GameSpot、GamingTrend、Gamer Social Club（Verified: 2026-10-10）。
2026-10-10
[全部内容页] 多信源改造（回应「10 页脚注同源」问题）：按各页主题从不同一手/署名来源取材并各自标注，取代原先「全站唯一来源=Steam 商店页」的写法。来源分配——首页/维基/指南取 Cygnus Cross 官网（Memento、配音表）、7/16 开发者新闻稿（双键连招、动态 HUD、技能继承、动态世界、材料/蓝图/配方）与 IGN 9/11 试玩（精通树、掉落、属性点）；定档页/倒计时页取 IGN 1/27 公告与 7/15 定档报道、GOG 官方产品页（10/27/2026、Windows、DRM-free 离线安装）；新闻页取四条带日期时间线（1/27 IGN、7/15 IGN、7/16 新闻稿、10/8 demo）。术语与原文对齐（craftable outputs：equipment/potions/food/tools/**trinkets**，全站原 accessories 已改回 trinkets）；平台口径由「仅 Steam」修正为「Steam 与 GOG 均列 Windows」；各页结尾「已按 Steam 商店页核验」改为多源核验表述。同日可读性收尾：压缩 /countdown、/release-date、/wiki 与首页的重复否定句（如「does not / is not / rather than」），改为一次陈述的正向表述，保留全部事实边界（无精确解锁时刻、无定价、无 1.0 日期、无主机平台、无具名配方/数值、无区域上线次序）。来源：Cygnus Cross 官网、Steam/Steam News、GOG 官方产品页、Cygnus Cross 新闻稿（GamesPress 托管）、IGN 公告/定档/试玩报道（Verified: 2026-10-10）。
2026-10-10
[全站·性能] CDN 与加载速度优化（页面内容与日期戳不变）：wrangler 开启 Workers Caching——HTML 在边缘按 s-maxage 缓存（cf-cache-status HIT，命中不进 Worker），缓存键含 Worker 版本、部署即自动失效；验证 zone 级 Cache Rules 对 Worker 响应无效，已回退；首页 hero 直出静态图，跳过 /_next/image 302 一跳；WebP 重压（hero 352→160KB，section 图 108-184→63-115KB）与 PNG 图标量化（android-512 448→58KB、apple-touch 128→12KB）；7 张源 JPG、og 源图、遗留 favicon.png 共约 4.9MB 移出 public（收至 assets-source/，不再随部署上传）；zone 开启 0-RTT 与 Early Hints（HTTP/3、Brotli 已开启，Rocket Loader 保持关闭）。
2026-10-10
[全站内容页] 接入 160×600 对联及 728×90 横幅广告：正文首段后横幅、≥1280px 左右对联、<1280px 正文末尾横幅；生产开关启用，开发环境仍关闭。广告配置按位串行注入并在无创意/加载失败时收起。
2026-10-10
[/about/methodology] 新增来源与核验说明页，集中解释 Steam/Steam News 等来源、社区信息与实测口径；页脚新增入口。
2026-10-10
[/characters /map /builds /item-database] 重写栏目正文，改为介绍 Steam 已确认的救援与村民机制、Vitromotus 世界空间、武器连招与职业继承、道具分类与制作循环；删除字段清单和大段未知项说明，加入精简的开服后更新承诺及相关页面链接。新增纯说明页 [/about/methodology] 集中说明来源、核验和测试规则，并更新页脚、路由、TDK 与站点结构。
2026-10-09
[全部内容页] 重写首页及 9 个内容路由为 1,200–1,800 词的英文资料页：以 Steam 官方商店页为唯一游戏事实来源，扩展世界设定、战斗与职业、采集制作、村庄重建、EA 范围及 PC 配置等内容；将地图/物品/角色/配装页改为有实用内容的系统指南与来源边界说明，不再以空态占位。移除未经 Steam 页面核验的 GOG、精确解锁时刻、愿望单、主播/配音/试玩、特定生物群落数量、角色好感等说法；同步修正 10 个路由的标题和摘要，避免旧元数据继续宣称测试 builds、物品数据、掉落位置或 15:00 UTC。来源：Steam 商店页（Verified: 2026-10-09）。
2026-10-09
[/] P0+审计整改：H1 收成 Emberville Wiki & Guides；正文按 8 段骨架重写为 1305 词已知事实综述
       （Vitromotus/kymia 设定、核心循环、Cygnus Cross 与 CohhCarnage、配音名单表、
       平台/配置/语言三表、Stardew×Diablo 对比、4 条真实 PAA FAQ、Last verified 行）；
       栏目卡片退为文末辅助。来源：Steam 商店页 + CGMagazine/WayTooManyGames/ComicBook
       （媒体源已入 AGENT.md §1.2 白名单）。
2026-10-09
[/wiki] P1 审计整改：删「为什么是空的」，改为「目前确认了什么」——世界设定、确认事实表、
       四分组各写已确认机制与 press-reported 条目预告。来源：Steam + 媒体 preview。
2026-10-09
[/news] P1 审计整改：时间线换为 Emberville 官方消息 5 条（01-30 EA 窗口 / 07-16 日期公布 /
       09-11 demo / 10-05 细节 / 10-27 计划上线），站务日志迁至 /about Site log 节。
2026-10-09
[全站] 建站初始化：scripts/init_site.py 生成 Next.js 15 + TS + Tailwind v4 + OpenNext/Cloudflare 工程骨架；
       22 个路由全部静态预渲染，首屏 JS 103KB（预算 150KB）。来源：AGENT.md + docs/ 规范。
2026-10-09
[docs/CONFLICTS.md] 新建：记录模板与本站实状的7 项冲突及裁决（SITE.md 优先），供后续回灌 init_site.py。
2026-10-09
[src/config/site.ts] 修正站点常量：earlyAccessDate=2026-10-27（Steam 官方 15:00 UTC）、
       launchDate=""（正式版未公布，不编造）、platform="PC (Steam)"。与 AGENT.md §0.2 对齐。
2026-10-09
[src/app/globals.css] 设计 token 由浅色天空系改为暗色地牢系，色值取自官方首张截图实测取样
       （#213A41 / #317DC9 / #CA9454 三族）。裁决见 docs/CONFLICTS.md C-01/C-06。
2026-10-09
[src/app/globals.css] 字体由 next/font/google Inter 改为 next/font/local 自托管 Silkscreen 像素体
       （WOFF2 两字重置于 public/fonts/），正文保留系统无衬线。见 CONFLICTS.md C-07。
2026-10-09
[全站 · 视觉] 第一版上线后视觉复核降刺激（来源：用户实测反馈「看着眼睛很痛」）：
       ① 像素体 Silkscreen 全站下线，layout.tsx 移除 next/font/local 加载，全站统一系统 UI 无衬线；
       ② 主色/强调色 HSL 饱和度 80%/79% → 54%（primary #5AAEED→#74B3D6、accent #E9A63F→#D3A06A、
          link #6FBBF0→#8CBEDE），降饱和同时提明度，对比度不降反升；
       ③ 正文 ink #E9EFF3→#DBE4EA（12.01:1，AAA），消深底光晕；
       ④ H2 由整行琥珀大字改为近白字 + 左侧 3px 琥珀线，表头改 ink-muted 并取消 uppercase/宽字距；
       ⑤ 链接下划线改半透明 color-mix，body 加 font-smoothing/ligatures，
          :focus-visible 由 3px 改 2px 实心。全站对比度重算后仍全部 ≥4.5:1。
       裁决见 docs/CONFLICTS.md C-12（推翻 C-07 的「标题用像素体」部分）。
2026-10-09
[/] 首页重写：接入官方截图作 hero 背景 + 7 栏目入口卡片（哥飞「分门别类罗列」），
       H1 改为「Emberville Wiki & Guides for the whole dungeon」含主词，与 Title 措辞区分。
2026-10-09
[/release-date] 语义修正：2026-10-27 为抢先体验日而非正式发售，时间修正为官方 15:00 UTC，
       表格补「Full release: Not yet announced」列。来源：Steam 商店页（Verified 2026-10-09）。
2026-10-09
[/countdown] 目标时间由 00:00Z 修正为 15:00Z，与官方时间戳一致；FAQ 改为「正式版日期何时公布」。
2026-10-09
[/wiki] 新建（SITE.md 七栏目之一）：四大分组结构页，含分组表与核验状态 DataBlock。
2026-10-09
[/map] 新建（SITE.md 七栏目之一）：区域 / 入口 / 掉落三层结构，含DataBlock 核验状态表。
2026-10-09
[/characters] 新建（SITE.md 七栏目之一）：人物与好感度口径说明，数值不预写。
2026-10-09
[/news] 新建（SITE.md 七栏目之一）：倒序时间线，每条带日期与来源，仅转述官方渠道。
2026-10-09
[/contact] Description 由 162 字符截到 122（原超ONPAGE.md §2 的 155 上限）。
2026-10-09
[public/images] 官方美术规范化：统一置于 public/images/program/，重命名为语义化名称
       （hero-forest-camp.webp、section-{栏目}-{场景}.webp），原图以 source-*.jpg 留档；
       og 图归public/images/og/。
```
2026-10-09
[全站] 人工决策：去掉所有页面的 Updated: 可见戳（14 页：10 内容页 + 4 政策页移除
       <UpdatedStamp /> 调用与 import；组件文件保留并加注释说明恢复方式）。
       与 AGENT.md §3/§8 的「必须显示 Updated」冲突已记入 CONFLICTS.md C-09，待人工批准修订。
       影响面：sitemap.xml <lastmod> 与 routes.json.lastModified 均保留，机器可读出口未破坏。
       routes.json 未 bump——改动当日与现lastModified 同为 2026-10-09（SITEMAP.md：同日改动日期戳不变）。
2026-10-09
[部署] 首次部署至 Cloudflare Workers（@opennextjs/cloudflare），自定义域 emberville-guide.wiki
       绑定成功；VersionID 87ea680a-7a24-4f33-8edc-194ca3f85887。线上已核验：标题/H1/正文/
       表格/JSON-LD/sitemap(14 条)/robots.txt/背景图均正常。
2026-10-09
[wrangler.jsonc] 加 routes绑定裸域 custom_domain；www 不挂 Worker，跳转按 REDIRECT.md §2 在
       Cloudflare 面板配 Redirect Rules。绑定后 workers.dev 通道自动禁用。
2026-10-09
[open-next.config.ts] 显式设 incrementalCache: "dummy" 并加注释说明全静态站为何用它。
       AGENT.md §3 的 `staticAssetsIncrementalCache` 写法经实测不成立，见 CONFLICTS.md C-08。
2026-10-09
[src/content/navigation.json + src/app/layout.tsx] 顶部导航去掉分组标签（Start here / Explore /
       Launch / Builds），压成扁平单行 9 项并靠右对齐（站名在左）；navLinks 取代 navGroups。
       页脚 13 项全集不变。窄屏改横向滚动（不用 justify-end，避免溢出时靠左项滚不到）。
       同步 scripts/init_site.py 的 TPL_LAYOUT 与 make_navigation_json()。无读者可见内容改动，
       按 SITEMAP.md 不 bump 路由 lastModified。
2026-10-09
[docs/] 沉淀：新建 README.md 作docs 唯一入口（权威顺序 SITE.md > 实测 > AGENT.md > 其余 docs）；
       SITE.md 补全 9 条内容路由的层级与 URL（明确 /release-date、/countdown 与 /item-database
       的从属定位，新增「不在本结构内的东西」段）；重写 INTERNAL-LINKS.md 为 v1.2 并清除
       AION 2 模板站栏目（/classes /pets /tools /tier-list /crafting /dungeons /pvp 等）；
       ONPAGE.md / 栏目.md / CONTENT.md / SEO.md / KEYWORDS.md / SITEMAP.md / ADS.md 的
       例子与口径同步换成本站实际结构。裁决见 CONFLICTS.md C-10 / C-11。

### 本轮自检结果（2026-10-09）

| 项 | 结果 |
| --- | --- |
| TDK 长度（Title 45–60/ Desc ≤155） | 14 页全合规 |
| H1 唯一性 | 10 个内容页均恰好 1 个 |
| SSR 初始 HTML（Title/H1/正文/JSON-LD） | 全部存在，正文字符数 1639–4038，均 ≥1200 |
| 死链 | 0 |
| 广告白名单 | 内容页与政策页均无广告脚本（默认关闭） |
| `tsc --noEmit` | 通过 |
| `npm run build` | 通过，22 路由全静态 |
