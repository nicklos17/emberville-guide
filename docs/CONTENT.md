# 内容规范

## 数据块（强制）
所有数值型内容必须走统一组件，渲染后带来源与核验日期：

```tsx
<DataBlock
  source="Official — Steam store page"
  url="https://store.steampowered.com/app/2295170/Emberville/"
  verified="YYYY-MM-DD"
>
  ...数据...
</DataBlock>
```

## 来源标注与多源核验
1. `Official — Cygnus Cross` / `Official — Steam` / `Official — GOG` — 按所引页面所属方准确标记；不能把一个发行商或商店的页面泛称为另一方官方声明。
2. `Developer press release — hosted by GamesPress` — 仅用于开发者署名的原始新闻稿；它不是一份独立的 GamesPress 编辑报道。同一新闻稿在多个站点转载只算一个来源。
3. `IGN report` / `IGN hands-on preview` — 明确区分媒体报道与记者试玩观察；试玩文章只支持文章记载的观察，不代表开发者承诺或最终版本数据。
4. `Community-reported` — Reddit、Discord、社群实测；必须链接原帖并明确标记未经官方确认，不能用作唯一事实依据。未能核验的帖子不引用。
5. `Not yet available` — 未公开，写明目前可得范围与尚缺的事实，不许留空留白。

内容页须按各自主题检索并引用相关一手来源；适用时增加独立媒体报道/试玩作为不同性质的证据。相同原始声明的新闻稿转载不是多源。不要为了凑来源而放无关引用；来源不得取代对游戏机制的实质说明。

## 时间敏感内容
- 时效页（release date / countdown / patch notes 类）Title 带月份或版本号
- 每次更新：改 `dateModified` + 页顶 `Updated:` + 在 `docs/CHANGELOG.md` 写一行，
  三处必须一致（实际由 routes.json 单点联动，见 `SITEMAP.md`）
- 开服/事件期间的状态、公告只转述官方渠道，未经二次确认不得发布
- **常青文案不写数量/顺序词**：无维护入口的句子（首页、枢纽页答案块）不写
  "First up" / "X of them so far" 这类会随详情页上线过期的表述——用指向卡片区/列表的
  无数量写法（源站 1-build 时代文案两次返工的教训）
- **过期的否定句当日必修**：新内容上线后 grep 全站 "还没发布 / 谁发谁在猜 / still withheld"
  类旧结论句，与自家新页面自相矛盾立即改

## 页面模板要点（按页型套骨架）

### 栏目页（枢纽）
1. 一句话答案块："Emberville launches with N survivors: …"
2. N 项对照表：名称 / 角色 / 关键属性 / 难度 / 模式
3. N 个 H2 简述：定位 / 核心机制 / 优缺点 / 适合谁 + 内链到详情页
4. "该选哪个"段
5. 特殊项说明段（未收录但常被搜到的项：写一段说明吃词，不建页）
6. FAQ 5 问
（不在本页写完整详情内容，避免与详情页自相竞争）

### 详情页
定位与机制 → 核心要素 → 优缺点 → 适合谁 → 内链到对应深度页 → FAQ
（深度页上线后模板自动联动，AGENT.md §7：Pending 行滤除已交付项、Skills/占位节追加实链句、
页尾标签与日期戳按真实改动日）

### 深度页（build 类）
版本与日期戳 → 要素表 → 装备与属性优先级 → 操作循环 → 模式分支 → FAQ
（Title 统一模板 `Emberville {X} Build ({mode}): …`，一词一页让位见 SEO.md / AGENT.md §7）

### 排名页（tier list 类）
> **本站当前不需要**：无实测样本时一律标`Pending launch`，不写排名（AGENT.md §1.5）。
> 游戏上线后若要建，先在 `SITE.md` 登记再动手。
- 按**角色/用途**分档：不止按字母 S/A/B
- 按模式分表（PvE / PvP / 大型玩法）
- **每条评级必须写理由**（这是对竞品排名页的核心差异点）
- 顶部日期戳 + 版本号：`Updated YYYY-MM-DD · <patch>`
- "数据从哪来"段：写明实测场次/样本量/分段，并说明不是照搬旧服排行榜
- 更新日志表 + FAQ

### 状态页（server-status / maintenance 类）
> **本站当前不需要**：游戏未上线，无官方状态源。若上线后要建，先在 `SITE.md` 登记。
只展示官方状态与公告转述，`revalidate = 300`；历史记录按日期倒序，带时间戳；
无官方数据源时如实写"无"，并给读者自查渠道清单（这是差异化，不是缺陷）。

## 内链建设（页面开发时执行，固定清单）

> 执行细则与自检清单见 `INTERNAL-LINKS.md`（写内容页必读，发布前逐条跑其第 11 节），
> 哥飞方法论见 `ONPAGE.md` §5，层级判据见 `栏目.md`；本节是开发落地版。
> 栏目清单以 `SITE.md` 为准；`scripts/init_site.py` 生成的初始站已内置该结构，后续加页照此维护。

- **三向齐备**（缺一不可）：首页 → 每个栏目页（真实 `<a>`）；栏目页 → 子页（面包屑）；全站 → 首页（Logo + 面包屑首节）。
- **锚文本 = 目标页主词**（按 `KEYWORDS.md` 登记），禁用 click here / read more / learn more。
- **首页双锚**：每个内页在首页挂 2 个链接、传 2 个不同词形（哥飞手法）；`<a>` 一律带 `title` 属性，
  title 镜像目标页完整 SEO title（与 routes.json 条目逐字一致）。
- **兄弟互链**：每页正文内 3–5 条兄弟/下行链接，用自然句承载，不为凑数给无关页加链。
- **防孤岛**：新页上线前自检——从首页 4 次点击内可达（栏目.md §4）；没链就补，补不了就删那句话。
- **新页登记联动**：KEYWORDS.md 登记 → 建页 → routes.json 条目 → navigation.json 入口 →
  姊妹页补互链，五步一次做完（SITEMAP.md「新增页面」）。
- **URL 禁改**：已上线 URL 一律不搬；聚合用栏目页，不做重排（栏目.md §3）。
- **复用生成器组件**：`Breadcrumbs`（与 BreadcrumbList JSON-LD 同源）、`routeTitle()`
  （title 属性镜像）、routes.json 单一日期/标题来源。

## 钩子：事件后第一手内容（最高价值）
官方未公开的字段（技能名/数值类）**谁都做不深**时，先把框架、占位与可确认内容建好；
事件/开服后优先抢：完整名称与效果、数值表、深度攻略、交互工具。
