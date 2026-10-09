# docs/ 索引与权威顺序

> **先读这一页，再读别的。** `docs/` 下多数文件是通用方法论（哥飞系列沉淀），
> 天然带着模板站的例子。**方法论可以借鉴，例子一律以 `SITE.md` 为准。**

## 权威顺序（冲突时从上往下裁决）

| 优先级 | 文件 | 管什么 |
| --- | --- | --- |
| 1 | **`SITE.md`** | **站点身份**：域名、站名、栏目结构、URL、每个栏目的 TDH 与段落大意 |
| 2 | `AGENT.md` | 开发约束（技术栈、渲染、广告、合规、变更协议） |
| 3 | 实测取样 | 官方截图取色、Steam 商店页事实——**唯一的事实源** |
| 4 | 其余 `docs/*.md` | 通用方法论与执行细则 |

**铁律：任何文档里出现的栏目名、路由、页面数量，若与 `SITE.md` 不一致，一律以 `SITE.md` 为准，
并回头把那份文档改掉**——不允许文档之间各说各话。

## 文档清单

### 站点层（读这几个就够开工）
| 文件 | 作用 | 什么时候读 |
| --- | --- | --- |
| **`SITE.md`** | 站点唯一真源：栏目、URL、TDH | **任何建页/改结构之前** |
| `AGENT.md` | 开发约束与验收清单 | 写代码前 |
| `CONFLICTS.md` | 冲突裁决记录 | 遇到「文档说的和实际不一样」时 |

### 执行层（写页面时按需查）
| 文件 | 作用 |
| --- | --- |
| `ONPAGE.md` | 页面写法：TDH、正文下限、H2 选词、AI 写作约束 |
| `栏目.md` | 栏目页（枢纽页）方法论：建页判据、URL 禁改、树形结构 |
| `INTERNAL-LINKS.md` | 内链：层级模型、各页型链接义务、锚文本、面包屑、页脚 |
| `CONTENT.md` | 内容规范：数据块、来源三档、页面模板骨架 |
| `KEYWORDS.md` | 关键词登记（一词一页），新页开工前先登记 |
| `SEO.md` | 技术 SEO：metadata、结构化数据、sitemap/robots 摘要 |
| `SITEMAP.md` | routes.json 登记与 lastmod bump 规则 |
| `ADS.md` | 广告位：白名单、四个位、设备规则 |
| `DESIGN.md` | 设计 token、字体、图片、可访问性 |
| `REDIRECT.md` | 域跳转配置（Cloudflare 面板层） |

### 记录层
| 文件 | 作用 |
| --- | --- |
| `CHANGELOG.md` | **页面日期戳的源头**，每次改动记一行 |
| `SEO-AUDIT.md` | SEO 审核存档 |

## 数据真源（代码侧）

改这几处，不要在页面里硬编码：

| 文件 | 管什么 |
| --- | --- |
| `src/content/routes.json` | 每条路由的 title / description / lastModified / priority |
| `src/content/navigation.json` | 顶部导航 `navLinks` 与页脚 `footerLinks` |
| `src/config/site.ts` | 站名、域名、EA 日期、平台等站点常量 |

## 维护约定

1. **新增栏目**：先改 `SITE.md`，再改代码，最后同步 `routes.json` / `navigation.json` /
   `KEYWORDS.md`，并在 `CHANGELOG.md` 记一行。
2. **发现文档矛盾**：以 `SITE.md` 为准改掉另一方，并在 `CONFLICTS.md` 追加一条裁决
   （不rewrite历史行）。
3. **方法论文档里的例子**：如果例子来自别的站（其他游戏名、其他路由），
   必须换成 Emberville 的实际结构——**例子即口径，错的例子会直接误导建页**。