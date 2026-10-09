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
[src/app/layout.tsx] 字体由 next/font/google Inter 改为 next/font/local 自托管 Silkscreen 像素体
       （WOFF2 两字重置于 public/fonts/），正文保留系统无衬线。见 CONFLICTS.md C-07。
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
