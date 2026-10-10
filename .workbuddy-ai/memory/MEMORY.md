# Emberville Guide — 项目长期记忆

## 技术栈与部署
- Next.js 15 App Router + TypeScript strict + Tailwind v4；路由分组 `(content)`（带广告/GA4）与 `(plain)`（不带）。
- Cloudflare Workers 部署（`@opennextjs/cloudflare`）；内容页 `export const revalidate = false` 全静态。
- routes.json 是 `lastModified` / title / description 的唯一登记处，bump 一处全链路联动。

## 生产构建（重要）
- 本机构建若报 `uncaughtException Error: write EPIPE`（来自 `cli/vendor/shim/broker-ipc-client.cjs`），是 WorkBuddy 文件代理 shim 的问题，**非代码缺陷**。
- 绕过方法：`NODE_OPTIONS="" /Users/nicklos/.workbuddy-ai/binaries/node/versions/22.22.2-6/bin/node node_modules/next/dist/bin/next build`
  （清空 NODE_OPTIONS 即不加载 `node-language-shim.cjs`；配合 `dangerouslyDisableSandbox`）。2026-10-10 验证通过：22 静态页，首屏 JS 103 kB。

## 内容与来源规范
- 来源分档：官方 / 开发者新闻稿（标 `Cygnus Cross press release (hosted by GamesPress)`）/ 署名媒体报道 / 社区来源；灰名单 Reddit 须可核实帐号，否则标 `Community-reported, not officially confirmed.`。
- **禁止同源衍生**：每个内容页须按主题检索并引用相关一手来源；相同原始声明的转载不算多源。DataBlock 输出 `Source: … · Verified: YYYY-MM-DD`。
- 术语对齐原文：Steam craftable outputs 用 `equipment / potions / food / tools / trinkets`（不要写成 accessories/gear）。
- 平台口径：Steam 与 GOG 官方产品页均列 Windows / 2026-10-27；不写「仅 Steam」。
- 可用信源：Cygnus Cross 官网 cygnuscross.com、Steam 商店页、GOG 产品页、GamesPress 托管的 7/16 新闻稿、IGN 1/27 公告 / 7/15 定档 / 9/11 试玩 / 10/8 demo，以及署名媒体 GameSpot（1/28 对比）、GamingTrend（工作室角色）、Gamer Social Club（9/11 工作室背景）。

## 已核实的关键事实（可直接引用，均带来源）
- **配音阵容（Cygnus Cross 官网，22 人）**：Alex Jordan 任 Voice Acting Director；演员 21 人 —— Doug Cockle、Abubakar Salim、Lucy Elliott、Amelia Tyler、Jennifer English、Ben Starr、Matthew Mercer、Alex Ponton、Jane Perry、Elias Toufexis、Kirsty Rider、Nick Apostolides、Anjali Bhimani、Cahla Thorman、Briana White、Rich Keeble、Michael Bryan、David Menkin、Harry McEntire、LilyPichu、Dillon Francis。Jane Perry 为电影化旁白。**已点名角色**（IGN 9/11 试玩）：Alex Jordan→Adeos、Matthew Mercer→Gumu。其余未映射，勿推断。
- **工作室**：Cygnus Cross，独立工作室，爱尔兰 Cork（新闻稿 dateline），Emberville 为首发作品；创始人兼 lead game director = Brynjar Gigja；联合创始人兼 co-game director = Ben「CohhCarnage」Cassell（Twitch 主播）。社区帖流传的「creative lead」非官方头衔，用 co-founder / co-game director。
- **对比口径**：媒体shorthand「Diablo Lite meets Stardew Valley」源自 IGN 1/27，非官方分类；GameSpot 1/28 复述。IGN 9/11 试玩给出具体差异：Emberville 双键连招 vs Diablo 单主攻击；采集（矿脉/树/植物）类比 Stardew；且为 single-player only（Steam 口径），无 co-op。
- 域名 emberville-guide.wiki（带连字符）；竞品/近似域名 embervillewiki.com、embervilleguide.wiki 已占位这些词，故需在自有页面上覆盖。

## 内链规范
- 层级模型 + 面包屑 + Related 区；锚文本用目标页主词；同页同目标不重复链接。
