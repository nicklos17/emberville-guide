# 设计与组件规范

## 色彩（token 表结构；色值按新站视觉重定，示例为源站天空系主题）
| 用途 | Token | 色值（示例） |
| --- | --- | --- |
| 主色（强调/焦点环/边框高亮） | `--color-primary` | `#0EA5E9` |
| 深主色（header 渐变起点/表头/footer） | `--color-night` | `#0A4D8F` |
| 深主色（header 渐变终点/hover） | `--color-night-2` | `#1479D2` |
| 正文 | `--color-ink` | `#122B44` |
| 次要文字 | `--color-ink-muted` | `#4D6A85` |
| 分隔线 | `--color-line` | `#D4E2F0` |
| 页面底色（主题雾色，非白） | `--color-canvas` | `#E6F1FA` |
| 区块/斑马纹 | `--color-canvas-muted` | `#F1F8FD` |
| 卡片表面 | `--color-surface` | `#FFFFFF` |
| 链接（白底对比 ≥ 4.5:1，带可见下划线） | `--color-link` | `#0B6BB8` |
| 链接 hover | `--color-link-hover` | `#085291` |

备选主题方向各留一个候选色。全部 token 集中在 `globals.css` 的 `@theme`，
不得页面内散落硬编码。

## 断点与排版
- 断点：`sm 640` / `md 768` / `lg 1024` / `xl 1280`（**1280 是广告分界**，与 ADS.md 同步）
- 正文 `max-w-3xl`，行高 1.75，字号 16–17px
- H1 仅一个/页；H2 用于分节，不得跳级

## 组件命名
- 目录：`components/`（UI）、`components/ads/`（广告）、`components/content/`（内容块）
- 命名（按主题改名实体）：`ItemCard.tsx`、`TierTable.tsx`、`DataBlock.tsx`、
  `UpdatedStamp.tsx`、`Breadcrumbs.tsx`、`FaqList.tsx`
- 内容数据放 `content/`（JSON/MDX），展示层只负责渲染

## 必备组件
| 组件 | 说明 |
| --- | --- |
| `UpdatedStamp` | 渲染 `Updated: YYYY-MM-DD`，取 `dateModified`（routes.json 派生），全站统一 |
| `DataBlock` | 数据块 + 来源 + 核验日期 |
| `ItemCard` | 条目卡片（首页网格、栏目页复用；支持背景图 + ink 渐变压暗 + 白字层） |
| `TierTable` | 分档表，支持按角色 / 模式切换 |
| `Breadcrumbs` | 与 `BreadcrumbList` JSON-LD 同源；首页不出面包屑 |
| `CountdownTimer`（可选） | 客户端叶子组件：SSR/首帧渲染占位防 hydration mismatch，到点翻终止态（无负数无 00:00:00）；配合构建时判定常量，rebuild 后 SSR 直接烘焙终止态 |

## 可访问性
- 语义标签：`header / nav / main / article / aside / footer`
- 所有可见文字对比度 ≥ 4.5:1（深色图上放白字时用 ink 渐变压暗保证）
- 图片必须写 `alt`（**图片流量占比高的站，alt 直接影响图片搜索收录**；装饰图 `alt=""`，
  语义由可见标题承担）
- 键盘可达，焦点样式不得移除

## 性能预算
- 首屏 JS ≤ 150KB（gzip）
- 图片：`next/image`，明确 width/height，优先 AVIF/WebP
- 字体：`next/font` 自托管，`display: swap`，最多 2 个字重

## 分享图 og:image 视觉规范（全站每页必带）
- 尺寸 **1200×630**（Reddit/Discord 缩略图友好、不被裁切），JPEG 质量 ~88，
  命名 `og-*.jpg` 放 `public/images/`
- 版式（与卡片组件同一视觉语言）：
  1. 主题底图 `resize(1200, 630, { fit: "cover" })` 铺满
  2. ink 色自下而上渐变压暗（0.96 → 0.62@45% → 0.18，即 `from-ink/95 via-ink/60 to-ink/15`）
  3. 顶部 8px `--color-primary` 色条
  4. 左上站名（白 34px semibold）+ 右上域名（白 75% 26px）
  5. 左下文字栈：eyebrow（浅主色 27px / letter-spacing 7）→ 主标题（白 82px bold）→
     副题（白 88% 31px）→ 斜体注（白 66% 25px，如 "Community-tested · not officially confirmed"）
- 工艺：`sharp` 合成——底图 cover 裁切后 composite 一张含渐变与文字的 SVG，
  文本保持真实文本便于日后改字
- 合规（AGENT.md §0.1）：不用官方 Logo；官方美术做底时页面上须有 © 署名
