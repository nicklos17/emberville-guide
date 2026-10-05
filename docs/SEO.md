# 技术 SEO 细则

## Metadata
- 每页 `generateMetadata()` 返回唯一 title / description / canonical / openGraph
- canonical 用绝对路径 `{{站点URL}}/...`，结尾规则与 `trailingSlash` 保持一致（本模板：无尾斜杠）
- 品牌后缀 `| {{站名}}` **只加内页**；首页 Title 已接近 60 字符，加了会被截
- Title 45–60 字符，Description ≤ 155 字符，H1 与 Title 措辞必须区分
- **TDK 改动的同步面（改一处 = 改四处）**：①`pageMetadata({title, description})`
  ②页面内 `articleSchema(...)` 里重复的 description ③`src/content/routes.json` 同页条目
  ④其他页面指向本页的 `<Link title="…">`（站内约定镜像目标页完整 SEO title）。
  grep 旧串时别只扫 ts/tsx——json 里也有副本
- **一词一页的让位机制**：详情页上线即占用某词形后，父页不得再用该词形 Title——父页数据加可选
  `seoTitle` 覆盖，`[slug]` 模板按 `item.seoTitle ?? 默认模板` 渲染；首页等处的内链 title 经
  映射同步镜像。主词登记与冲突检查见 `KEYWORDS.md`
- **Title 词形取舍**：保留规划师里有量的词形；规划师未收录的连写变体果断弃用，
  拆写保主词（如 `X Build (PvE)` 而非 `X PvE Build`），买来的尾部词不因改模板丢失

## 分享图 og:image
- `lib/seo.ts pageMetadata` 单点产出：每页必带 og:image / twitter:image，twitter card 统一
  `summary_large_image`；页面有自有美术时用 `image` 参数显式传入，缺省回退
  `DEFAULT_OG_IMAGE`（1200×630）
- 专属分享图规格：**1200×630**（Reddit/Discord 缩略图友好、不被裁切），命名 `og-*.jpg` 放
  `public/images/`；视觉规范与制作工艺见 `DESIGN.md`。合规（AGENT.md §0.1）：不用官方 Logo，
  官方美术做底时页面须有 © 署名
- 开站首日即建 `DEFAULT_OG_IMAGE`，避免后续逐页补齐（源站教训：28 页曾无 og:image，靠
  pageMetadata 单点回退一次性修复）

## 结构化数据（`lib/schema.ts` 统一产出）
| 类型 | 加在哪 |
| --- | --- |
| `WebSite` + `SearchAction` | 全站 |
| `BreadcrumbList` | 所有非首页 |
| `FAQPage` | 含 FAQ 的页面 |
| `Article` | 攻略 / 更新文（`datePublished` 与 `dateModified` 分开） |
| `Event` | 有明确时点的活动/发布事件（可选） |

- 不得标注 `aggregateRating` 或自评分，除非有真实评分来源
- JSON-LD 必须出现在初始 HTML（SSR），不得由客户端注入

## sitemap / robots
- **完整规范见 `docs/SITEMAP.md`**（新增页面登记清单 / 页面更改 bump 规则 / 补录与自查脚本 /
  分档表），本节只留摘要
- `app/sitemap.ts` 动态生成，>5000 条自动分片
- `lastModified` 取该页真实 `dateModified`，不是构建时间；**语义按页型分源**——
  routes.json 页 = routes.json `lastModified`（源头是 `docs/CHANGELOG.md` 逐日记录）；
  非路由页（写死在代码里的详情页）= 各自的常量核验日
- **改动即 bump**：页面文件任何读者可见内容改动——正文、内链（含一句入站链）、链接 title 属性、
  DataBlock——都必须同一次提交里 bump routes.json 的 `lastModified`；仅构建口径改动
  （`revalidate`、import、注释）不算。bump 值 = 内容实际改动当日（查 CHANGELOG），
  补录滞后时也填实际改动日，不填补录当天
- `app/robots.ts` 只屏蔽后台与预览路径，**不屏蔽任何内容页**

## 内链
> 层级模型、各页型链接义务、锚文本、Related 区、页脚与禁则以 `INTERNAL-LINKS.md` 为准。

- 面包屑：首页 → 栏目 → 详情
- 每页正文内 3–5 条兄弟或下行链接
- 锚文本用目标页主词，禁止「点击这里」
- 栏目页的每个条目 H2 必须链到对应详情页，但不写完整详情内容

## 收录推动
- 上线即提交 sitemap，不要等站"做完"
- 新页面上线后在 `docs/CHANGELOG.md` 记一行，便于追踪收录时点

## 禁止
- 不建空标签页、归档页、tag 页等薄内容
- 不用 `noindex` 兜底 —— 内容不全就不发布
- 不做自动翻译的多语言页
