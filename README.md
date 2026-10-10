# Emberville Guide — Emberville 非官方资料站

由 site-template 的 `scripts/init_site.py` 生成（2026-10-09）。开发约束见 `AGENT.md`
（最高优先级），页面细则见 `docs/ONPAGE.md`。

## 快速开始

```bash
npm install          # Node >= 22（.nvmrc）
npm run dev          # http://localhost:3000
npm run build && npm run start
npm run deploy       # Cloudflare Workers（需 wrangler 登录）
```

## 已生成内容

- 内容页（栏目）：`/wiki` `/guides` `/release-date` `/platforms` `/map` `/builds` `/characters` `/news`
- 内容页（从属/专题/子页）：`/item-database` `/price` `/platforms/multiplayer` `/voice-cast` `/studio` `/stardew-valley-diablo` `/games-like-emberville` `/news/emberville-demo`
- 政策页：`/about` `/contact` `/privacy` `/terms`（联系邮箱 support@emberville-guide.wiki）
- 基础设施：`/sitemap.xml`、`/robots.txt`、`/rss.xml`、`/llms.txt`、og 占位图、favicon
- 数据登记：`src/content/routes.json`（sitemap/日期戳单一来源）、`src/content/navigation.json`
- 规范文档：`AGENT.md` + `docs/*`（占位符已按本站填充）

## 开站待办（人工）

1. `docs/KEYWORDS.md`：补月搜量/KD，确认一词一页无冲突
2. `public/images/og-default.png`：当前是纯色占位图，换成正式 1200×630 分享图
   （视觉规范与 sharp 工艺见 `docs/DESIGN.md`）
3. `AGENT.md` §1.2 数据源白名单按主题重写；§0.2 SITE 常量核对（开发商/品类等留空项）
4. GA4：`src/config/site.ts` 填 `ga4MeasurementId`（仅内容页统计，政策页不统计）
5. 广告：默认关闭；开启改 `.env.production` + 在 `src/lib/ads.ts` 配 invoke key（`docs/ADS.md`）
6. Cloudflare 面板：部署后按 `docs/REDIRECT.md` 配置 HTTP→HTTPS 与 www→裸域 301，
   并用其 §5 命令验证
7. `docs/CHANGELOG.md` 逐日记录——它是所有页面日期戳的源头

## 内容红线（AGENT.md §1，最高优先级）

不编造名称/数值/日期/兑换码；未确认就写 Not yet available；数据必须带来源与核验日。
生成的页面已按此执行：无日期显示 TBA、`/item-database` 为诚实空态、倒计时只在有真实
发布日时存在（原 `/countdown` 独立页已撤，倒计时组件留在首页，解锁时刻口径并入 `/release-date`）。
