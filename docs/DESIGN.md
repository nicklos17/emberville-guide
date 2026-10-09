# 设计与组件规范

> 视觉定案以**官方美术实测取样**为准，模板派生色仅作参考。
> 冲突记录与裁决见 `docs/CONFLICTS.md`；本文与 `src/app/globals.css` 的 `@theme` 必须一致。

## 色彩（暗色地牢系 · 源自官方首张截图实测）

取样方法：对官方首张截图（`public/images/program/hero-forest-camp.webp`）1920×1080
做分区域色频统计，锁定暗部基调、湖水蓝、灯火琥珀三族。

| 用途 | Token | 色值 | 来源 / 对比度 |
| --- | --- | --- | --- |
| 页面最深底 / 页脚 | `--color-canvas-deep` | `#0E181E` | 暗部压暗 |
| 页面主底 | `--color-canvas` | `#16232B` | 主频色延伸（9.3%） |
| 卡片表面 | `--color-surface` | `#1D2E38` | 表面提亮一档 |
| 表头 / hover | `--color-surface-2` | `#243947` | 表面再提亮 |
| 分隔线 / 边框 | `--color-line` | `#2A3F4C` | 表面边界 |
| 更弱分隔线 | `--color-line-soft` | `#22333E` | 表格行分隔 |
| 正文 | `--color-ink` | `#E9EFF3` | 12.07:1 on surface（AAA） |
| 次要文字 | `--color-ink-muted` | `#9DB2BD` | 6.36:1 on surface（AA） |
| 更弱注释 | `--color-ink-dim` | `#7C929D` | 非正文，仅辅助信息 |
| 主色（湖蓝） | `--color-primary` | `#5AAEED` | 由 `#317DC9` 提亮；5.81:1 on surface（AA） |
| 主色深 | `--color-primary-deep` | `#317DC9` | 截图原值 |
| 强调（灯火琥珀） | `--color-accent` | `#E9A63F` | 由 `#CA9454` 提亮；6.66:1 on surface（AA） |
| 强调深 | `--color-accent-deep` | `#CA9454` | 截图原值 |
| 链接 | `--color-link` | `#6FBBF0` | 7.67:1 on canvas（AAA），**带下划线** |
| 成功 / 已核验 | `--color-success` | `#6FBF73` | 7.16:1 on canvas |
| 警示 / 未核验 | `--color-danger` | `#E4707F` | 5.29:1 on canvas |

**全站对比度均达 WCAG AA，多数达 AAA**（实测数据见 `docs/CONFLICTS.md` C-06）。
全部 token 集中在 `globals.css` 的 `@theme`，**不得页面内散落硬编码**。

### 像素美术的渲染约定
官方截图为像素画（Steam 标签 `Pixel Graphics`），图片容器一律
`image-rendering: pixelated`，禁止平滑插值导致糊边。

## 字体

| 用途 | 字体 | 来源 | 说明 |
| --- | --- | --- | --- |
| 标题 / 标签 / 导航 / 徽章 | **Silkscreen** 400/700 | `public/fonts/silkscreen-{400,700}.woff2` | 圆润像素体，与官方截图内文字（场景提示等）造型一致；OFL 许可，`next/font/local` 自托管 |
| 正文长文 | 系统 UI 无衬线（`--font-sans`） | 系统 | **像素体不用于正文**：长段落阅读性差、移动端小字号不可读 |

- 禁外链 Google Fonts CDN（AGENT.md §2）；**不得用 `next/font/google`**（联网拉取，违反自托管约束）
- 最多 2 个字重（DESIGN.md 性能预算）
- 页面 `themeColor` 用 `#0E181E`（与 `--color-canvas-deep` 一致）

## 断点与排版
- 断点：`sm 640` / `md 768` / `lg 1024` / `xl 1280`（**1280 是广告分界**，与 ADS.md 同步）
- 正文 `max-w-3xl`，行高 1.75，字号 17px；首页宽版区用 `max-w-6xl`
- H1 仅一个/页；H2 用于分节（H2 统一 `--color-accent` 琥珀色），不得跳级
- 像素体标题视觉重量更大，H1 用 1.9rem、H2 用 1.4rem 以取得与正文的平衡

## 图片规范

| 类别 | 位置 | 命名 | 说明 |
| --- | --- | --- | --- |
| 首页背景 | `public/images/program/` | `hero-{场景}.webp` | 官方首图，2000px 宽 WebP |
| 栏目配图 | `public/images/program/` | `section-{栏目}-{场景}.webp` | 每栏目一张，1200px 宽 WebP |
| 官方原图留档 | `public/images/program/` | `source-{栏目}-{场景}.jpg` | 供 og:image 与二次加工用 |
| 分享图 | `public/images/og/` | `og-{页名}.jpg` | 1200×630 |
| 字体 | `public/fonts/` | `{family}-{weight}.woff2` | 自托管 |

- 格式：页面用 WebP（q86），og:image 用 JPEG（q≈88）
- **禁止把开发过程中的图片散落在仓库根或 `public/` 根目录**，一律归入 `public/images/` 下分类目录
- 合规（AGENT.md §0.1）：不用官方 Logo；官方美术作底时页面须有 © 署名（见页脚）

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
| `ItemCard` | 条目卡片（首页网格、栏目页复用；支持背景图 + 渐变压暗 + 文字层） |
| `TierTable` | 分档表，支持按角色 / 模式切换 |
| `Breadcrumbs` | 与 `BreadcrumbList` JSON-LD 同源；首页不出面包屑 |
| `CountdownTimer`（可选） | 客户端叶子组件：SSR/首帧渲染占位防 hydration mismatch，到点翻终止态（无负数无 00:00:00）；配合构建时判定常量，rebuild 后 SSR 直接烘焙终止态 |

## 可访问性
- 语义标签：`header / nav / main / article / aside / footer`
- 所有可见文字对比度 ≥ 4.5:1（深色图上放白字时用 canvas 渐变压暗保证）
- 图片必须写 `alt`（**图片流量占比高的站，alt 直接影响图片搜索收录**；装饰图 `alt=""`，
  语义由可见标题承担）。栏目图alt 写清「画面里是什么」，不写「Emberville image」
- 键盘可达，焦点样式不得移除（`:focus-visible` 3px 琥珀色）
- 所有动效包在 `prefers-reduced-motion: reduce` 降级内

## 性能预算
- 首屏 JS ≤ 150KB（gzip）—— 实测 103KB
- 图片：`next/image`，明确 width/height，优先 AVIF/WebP
- 字体：`next/font/local` 自托管，`display: swap`，最多 2 个字重

## 分享图 og:image 视觉规范（全站每页必带）
- 尺寸 **1200×630**（Reddit/Discord 缩略图友好、不被裁切），JPEG 质量 ~88，
  命名 `og-*.jpg` 放 `public/images/og/`
- 版式（与卡片组件同一视觉语言）：
  1. 主题底图 `resize(1200, 630, { fit: "cover" })` 铺满
  2. canvas 色自左向右渐变压暗（`from-canvas via-canvas/92 to-canvas/55`，与首页 hero 一致）
  3. 琥珀色 `--color-accent` 色条
  4. 左上站名（白）+ 右上域名（`--color-ink-muted`）
  5. 左下文字栈：eyebrow（琥珀色大写 / letter-spacing）→ 主标题（白）→ 副题（`--color-ink`）
- 工艺：`sharp` 合成——底图 cover 裁切后 composite 一张含渐变与文字的 SVG，
  文本保持真实文本便于日后改字
- 合规（AGENT.md §0.1）：不用官方 Logo；官方美术做底时页面上须有 © 署名