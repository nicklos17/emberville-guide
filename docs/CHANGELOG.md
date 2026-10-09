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
