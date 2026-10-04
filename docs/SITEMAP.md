# sitemap / lastmod 规范

> 核心原则：**只要改到的文件，lastmod 都要有所改动**——新增页面要登记，页面更改要更新记录。
> 本文件是该规则的唯一完整版本；`src/app/sitemap.ts` 头注与 `SEO.md` sitemap 节是其摘要，
> 冲突时以本文件为准。

## 单一来源

- `src/content/routes.json` 是每条路由 `lastModified` / `priority` / `changeFrequency` 的
  **唯一登记处**。`app/sitemap.ts` 消费它产出 sitemap.xml，同一字段还喂页脚 `Updated:`、
  JSON-LD `dateModified`、RSS pubDate 与搜索索引——**bump 一处，全链路联动**，
  不要去改页面文件里的日期。
- 不在 routes.json 的详情页（数据文件驱动、模板批量生成的页面）：sitemap lastmod 取
  各自的常量核验日（语义 = 名册/数据核验日），是否进 sitemap 由 `pageLive` 开关控制。

## 新增页面（必须登记）

1. `docs/KEYWORDS.md` 登记主词（AGENT.md 要求，先于写页）。
2. 写页面文件。
3. `routes.json` 插入条目，字段要求：
   - `title` / `description` 与页面 TDK **逐字一致**（TDK 四处同步面见 `SEO.md`）；
   - `lastModified` = 上线当日；
   - `changeFrequency` / `priority` 按下文分档表。
4. 需要入口时更新 `navigation.json`（导航组或 footer）。
5. `docs/CHANGELOG.md` 当日记一行——**该文件是所有日期戳的源头**。
6. 数据文件驱动的详情页走例外流程：不进 routes.json，翻对应数据文件的 `pageLive`，
   并核对核验日常量是否需要前移。

## 页面更改（必须更新记录）

- **任何读者可见内容改动**——正文、内链（哪怕一句入站链）、链接 `title` 属性、DataBlock、
  TDK——必须**同一次提交** bump 该路由的 routes.json `lastModified`。
- 仅构建口径改动（`revalidate`、import、注释、纯格式化）**不** bump。
- routes.json 条目自身的 `title` / `description` / `priority` / `changeFrequency` 改动
  也算内容改动，同样 bump。
- bump 值 = **内容实际改动当日**；同日多次改动沿用当日（CHANGELOG 里记
  「同日改动，日期戳不变」即指此情形）。
- 每次改动在 `docs/CHANGELOG.md` 记一行；同日同页已有条目的并入原条目补记。

## 补录（发现滞后时）

- 补 bump 的值 = 内容**实际改动日**（查 CHANGELOG / git log 确定），**不是**补录当天——
  lastmod 的语义是"该页内容何时变过"，向今天补录会伪造新鲜度。
- 自查方法：对每条路由比较 routes.json `lastModified` 与页面文件最后提交日，再逐个看
  diff 区分内容提交与机械提交：

  ```bash
  node -e '
  const routes = require("./src/content/routes.json");
  const { execSync } = require("child_process");
  for (const r of routes) {
    const file = r.path === "/" ? "src/app/(content)/page.tsx" : `src/app/(content)${r.path}/page.tsx`;
    const last = execSync(`git log -1 --format=%as -- "${file}"`).toString().trim();
    if (last && r.lastModified < last) console.log(`STALE: ${r.path} sitemap=${r.lastModified} page=${last}`);
  }'
  ```
  （脚本只报可疑项；STALE 不等于错——机械提交造成的落后是合规的，须人工看 diff 定夺。）

## 分档表（priority / changeFrequency）

| 页型 | priority | changeFrequency |
| --- | --- | --- |
| `/` | 1.0 | daily |
| 核心内容页（一级导航 lead 页） | 0.9 | daily |
| 次级内容页 | 0.8 | daily |
| 深度详情页（build 类） | 0.7 | daily |
| 数据驱动详情页（sitemap.ts 内写死） | 0.7 | weekly |
| 政策页 /about /contact /disclaimer | 0.3 | monthly |
| /privacy /terms | 0.2 | yearly |

- 新页默认向同层级现页看齐。
- URL 超 5000 条 sitemap 自动分片（实现见 `app/sitemap.ts`，背景见 `SEO.md`）。

## 禁止

- 改页面内容不 bump lastmod。
- 把 lastmod 写成构建时间或补录当天。
- 页面 TDK 与 routes.json 条目不一致（四处同步面，见 `SEO.md`）。
- 绕过 routes.json 直接在 sitemap.ts 里加静态路由。
