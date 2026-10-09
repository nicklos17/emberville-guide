# SITE.md — 站点唯一真源

> **权威等级：最高。** 本文件定义站点身份、栏目结构与 URL。
> 任何其他文档（`AGENT.md`、`docs/*.md`、代码注释）与本文件冲突，一律以本文件为准，
> 并回头修正那份文档。裁决顺序见 `docs/README.md`。
> 维护：新增/调整栏目先改本文件，再改代码，最后同步 `routes.json` / `navigation.json` / `KEYWORDS.md`。

# 网站域名
https://emberville-guide.wiki

# 核心关键词
Emberville Wiki & Guides

# 核心骨架
一、首页
Title：Emberville Wiki & Guides – Maps, Builds, Release Date
H1：Emberville Wiki & Guides for the whole dungeon

段落大意：1.一句话说清这站是什么、给谁用——"Emberville 的完整资料库与攻略站，覆盖抢先体验版的地图、装备数据库、角色与 Boss"。
2.release date设计，配上countdown
3.紧接着一排入口卡片指向 7 个栏目（让首页把权重分下去）。第三段放"最新更新"列表（3~5 条时效内容）。全站之力围绕 emberville wiki（KD 11.9，极易）+ emberville guide（KD 24.9，容易） 这两个词面。

二、7 个栏目的 TDH 与段落大意
1. Wiki（/wiki/） — 主承接 emberville wiki

Title：Emberville Wiki: Weapons, Items, Characters & Bosses
H1：Emberville Wiki
段落：开篇一句说"这是本站全部条目的总入口"，下面按 装备 / 道具 / 角色 / Boss 四类分组，每组先给 3~5 条已写好的条目链接。别把空分类挂上去——没有内容的分组先不显示。
2. Guides（/guides/） — 主承接 emberville guide、walkthrough

Title：Emberville Guides: Basics, Systems & Tips | Emberville Guide
H1：Emberville Guides
段落：按"新玩家先看这几篇"排，打头的三篇固定是：上手指南 / 开局选择 / 进度路线。每篇配一句结果导向的描述（"读完这篇你能…"）。
3. Release & Platforms（/release-date/） — 主承接 emberville release date

Title：Emberville Early Access Date 2026 | Emberville Guide
H1：Emberville Early Access Date and Launch Status
段落：这是上线前唯一有官方搜索量撑着的栏目（release date 880/月，另叠加 switch 110、steam 110、ps5 90、multiplayer 70、price 10）。第一段直接给日期和平台，用表格列 平台/日期/价格/抢先体验状态；后面接"会不会上 Switch""能不能联机"这类问答段落。
4. Map & Areas（/map/） — 主承接 emberville map

Title：Emberville Map & Areas: Regions, Dungeons & Loot
H1：Emberville Map
段落：首段说明地图会随版本更新；正文给区域列表，每个区域一个小段（入口在哪、有什么、掉什么）。开服后这块需求最猛。
5. Builds & Items（/builds/） — 主承接 builds / best build / weapons / items

Title：Emberville Builds: Tested by Patch & Mode | Emberville Guide
H1：Emberville Build Hub — Tested Setups
段落：一句话说明这是"能直接照着抄"的配装库；按职业/流派分条目，每条给技能、装备词缀、适用场景。
6. Characters（/characters/） — 主承接 characters、romance

Title：Emberville Characters: Survivors & Companions
H1：Emberville Characters
段落：人物列表 + 每个人物一小段（身份、在哪遇到、好感度怎么加）。romance 这类问题谷歌常出 PAA，段落写成能直接命中问答的短句。
7. News（/news/） — 主承接 update、cohhcarnage、review

Title：Emberville News & Updates: Patch Notes & Roadmap
H1：Emberville News
段落：倒序时间线，每条一句话摘要 + 日期。蹭宣发节点和主播话题（cohhcarnage 70/月）做时效页。

---

# 栏目层级与 URL 映射（实现口径）

上面 7 个是**核心栏目**。实际站点另有 2 个从属页，均为内容页（带广告、进 sitemap、
出现在顶部导航与页脚），它们**不是第 8、第 9 个栏目**：

| 层级 | 页面 | URL | 定位 |
| --- | --- | --- | --- |
| L0 | 首页 | `/` | 栏目入口分发 |
| L1 | 7 个核心栏目 | 见上表 | 承接栏目词 |
| L1 | Release 附属：Countdown | `/countdown` | `/release-date` 的倒计时组件页；主词仍是 release date 的变体，**不与 `/release-date` 抢词**（`KEYWORDS.md` 已划界） |
| L1 | Wiki 附属：Item Database | `/item-database` | `/wiki` 四大分组的明细落地页；**管单条目数值，`/wiki` 管结构**（`KEYWORDS.md` 已划界） |
| — | 法务/功能页 | `/about` `/contact` `/privacy` `/terms` | 不参与关键词竞争，不加广告与 GA4 |

**URL 约定**：实际路径以 `routes.json` 为准，`/release-date` 为准（SITEMAP.md §换页禁改：
`栏目.md` §3「已上线 URL 一个都不改」——`/release` 从未上线，故保留脚本生成的 `/release-date`）。

**栏目总数口径**：对外说「7 个核心栏目」；`/countdown`、`/item-database` 表述为
「Release 的倒计时页」「Wiki 的条目明细页」，不得称其为独立栏目。

# 不在本结构内的东西（明确不做）

- ❌ 任何 `/{lang}/` 多语言目录（`AGENT.md` §2：本项目只做 en）
- ❌ 游戏未上线前的具体条目页（单boss / 单装备）——名称与数值不可核验，属编造（`AGENT.md` §1.1）
- ❌ 工具页（timer / ping-test 一类）、排行页（tier list）、玩法专题页（crafting / dungeons / pvp一类）——
  SITE.md 未定义，故**不存在**。若日后要建，先改本文件再动手（见 `docs/README.md` 维护约定）