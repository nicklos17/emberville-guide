# 设计与组件规范

> 视觉定案以**官方美术实测取样**为准，模板派生色仅作参考。
> 冲突记录与裁决见 `docs/CONFLICTS.md`；本文与 `src/app/globals.css` 的 `@theme` 必须一致。

## 色彩（暗色地牢系 · 源自官方首张截图实测 · C-12 降刺激）

取样方法：对官方首张截图（`public/images/program/hero-forest-camp.webp`）1920×1080
做分区域色频统计，锁定暗部基调、湖水蓝、灯火琥珀三族。

**C-12（2026-10-09 上线后视觉复核）调整**：暗色地牢基调不变，但整体系**降刺激**——
上线后实测反馈「看着眼睛很痛」，定位到三个叠加因素：高饱和琥珀当标题色铺满全屏、
亮蓝链接与橙色同屏对抗、近白正文压深底产生光晕。处置为：正文 ink 降明度、
主色/强调色降饱和、H2 改白字加左边界线、表头改ink-muted、像素体全站下线。

| 用途 | Token | 色值 | 来源 / 对比度（on canvas） |
| --- | --- | --- | --- |
| 页面最深底 / 页脚 | `--color-canvas-deep` | `#101C23` | 暗部压暗 |
| 页面主底 | `--color-canvas` | `#18262F` | 主频色延伸 |
| 卡片表面 | `--color-surface` | `#1F3039` | 表面提亮一档 |
| 表头 / hover | `--color-surface-2` | `#263B46` | 表面再提亮 |
| 分隔线 / 边框 | `--color-line` | `#2C414E` | 表面边界 |
| 更弱分隔线 | `--color-line-soft` | `#253641` | 表格行分隔 |
| 正文 | `--color-ink` | `#DBE4EA` | 12.01:1（AAA）；C-12 由 `#E9EFF3` 降明度以消光晕 |
| 次要文字 | `--color-ink-muted` | `#A6B8C2` | 7.56:1（AA 以上） |
| 更弱注释 | `--color-ink-dim` | `#8A9BA5` | 5.39:1（AA） |
| 主色（湖蓝） | `--color-primary` | `#74B3D6` | 6.75:1；C-12 饱和度 80%→54% |
| 主色深 | `--color-primary-deep` | `#3F7FA8` | 装饰位|
| 链接 | `--color-link` | `#8CBEDE` | 7.76:1，**带下划线**（下划线用半透明 link 色，见 globals.css） |
| 强调（灯火琥珀） | `--color-accent` | `#D3A06A` | 6.64:1；C-12 饱和度 79%→54% |
| 强调深 | `--color-accent-deep` | `#B98D5A` | 截图原色系 |
| 成功 / 已核验 | `--color-success` | `#86C98A` | 7.91:1 |
| 警示 / 未核验 | `--color-danger` | `#DD8B96` | 6.05:1 |

**全站文字对比度 ≥ 4.5:1（AA），正文达 AAA**（实测数据见 `docs/CONFLICTS.md` C-06/C-12）。
全部 token 集中在 `globals.css` 的 `@theme`，**不得页面内散落硬编码**。

### 降刺激规则（C-12，写页时必须遵守）

1. **橙色是点缀色，不是标题色**。`--color-accent` 只用于：H2 左侧 3px 边界线、
   焦点环、少量装饰标签。**禁止**整行/整块大面积使用。
2. **正文不用近白**。`--color-ink` 上限即当前值，不再往`#F0F5F8` 方向提。
3. **高饱和色不同屏对抗**。橙(accent)与蓝(primary/link)已同步降饱和至 ~54%，
   不要单独把其中一个调回高饱和。
4. **正文色块面积控制**。深底上不要出现成片高对比色块（如整表表头铺橙）。
5. 标题层级靠**字重 + 字距 + 左侧细线**建立，不靠颜色。

### 像素美术的渲染约定
官方截图为像素画（Steam 标签 `Pixel Graphics`），图片容器一律
`image-rendering: pixelated`，禁止平滑插值导致糊边。

>图片仍是像素美术，但**站内文字不再用像素字体**（C-12，见下）。

## 字体

| 用途 | 字体 | 来源 | 说明 |
| --- | --- | --- | --- |
| 全站（标题 / 正文 / 标签） | 系统 UI 无衬线（`--font-sans`） | 系统 | C-12 起统一，零字体文件请求、零 FOUT |

- **C-12：Silkscreen 像素体已全站下线**。原因：深底上「像素字 + 全大写 + 宽字距」
  三者叠加产生明显光晕与边缘颤动，长文阅读累眼（上线后实测反馈）；
  且像素体在 17px 正文与移动端小字号下可读性差。原 DESIGN.md「像素体不用于正文」
  的限制升级为「像素体全站不用」。
- 禁外链 Google Fonts CDN（AGENT.md §2）；**不得用 `next/font/google`**（联网拉取）
- `public/fonts/silkscreen-*.woff2` 已不再被任何代码引用，可择机删除
- 页面 `themeColor` 用 `#101C23`（与 `--color-canvas-deep` 一致）

## 断点与排版
- 断点：`sm 640` / `md 768` / `lg 1024` / `xl 1280`（**1280 是广告分界**，与 ADS.md 同步）
- 正文 `max-w-3xl`，行高 1.75，字号 17px；首页宽版区用 `max-w-6xl`
- H1 仅一个/页；H2 用于分节，不得跳级
- **H2 样式（C-12）**：1.45rem / weight 650 / `-0.01em` 字距 / `--color-ink` 近白 /
  左侧 3px `--color-accent` 边界线 / 上下留白 `2.5rem 0 0.75rem`。
  **不再使用整行琥珀大字**（原 1.4rem 像素体 accent 色）
- H1：2.1rem / weight 700 / `-0.015em`；H3：1.12rem / weight 650
- 表头（C-12）：`--color-ink-muted`，0.82rem，weight 650，**取消** uppercase +
  宽字距 + 像素体（原为 accent 色 0.8rem uppercase tracking .08em）

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
| `UpdatedStamp` | **已停用**（2026-10-09 人工决策，14 页全部移除调用；组件文件保留待恢复）。日期戳统一由 `sitemap.xml` `<lastmod>` 与 `routes.json.lastModified` 承载，不在页面正文展示 —— 见 `docs/CONFLICTS.md` C-12 |
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