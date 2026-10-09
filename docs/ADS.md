# 广告位规范

供应商（源站用 Adsterra，banner 格式，iframe 输出；可替换）。invoke key 属公开页面值，
配置在 `src/lib/ads.ts`（`ADSTERRA_FORMATS`），不走构建环境变量。

## 开关
- 总开关：仓库内 `.env.production` 的 `NEXT_PUBLIC_ADS_ENABLED`（加 `.gitignore` 白名单，
  随仓库走）。改成 `true` 重新构建即开启；`false` 即关闭
- 默认 `false`（关闭）；开发环境 `next dev` 强制关闭，无论此值如何

## 渲染规则（白名单）
广告只在内容页渲染，默认不加：
- ✅ `/`、核心栏目页及其详情页
- ❌ `/about`、`/privacy`、`/terms`、`/contact`、`/rss*`、`/sitemap*`、`/404`、`/500`、
  错误页、导航页

**实现**：内容页 layout 显式渲染广告组件；非内容页不引入组件。禁止用路径黑名单判断。
路由分组：`app/(content)/**` 带广告（含 9 个内容页：首页 + 7 栏目 + 2 从属页），
`app/(plain)/**` 不带（`/about` `/contact` `/privacy` `/terms`）。

## 四个位（内容页固定）
| position | 格式 | 位置 | 显示条件 |
| --- | --- | --- | --- |
| `in-article` | Banner 728×90 | 正文第一段后、第一个 H2 前 | 所有尺寸；<728px 按 728:90 等比缩放 |
| `bottom-banner` | Banner 728×90 | 正文末尾（content layout 渲染，页面无需单独引入） | 仅 <1280px（补足对联位缺席的移动/平板端横幅曝光） |
| `left-skyscraper` | 对联 160×600 | 左侧栏 | 仅 ≥1280px（PC） |
| `right-skyscraper` | 对联 160×600 | 右侧栏 | 仅 ≥1280px（PC） |

设备规则（AGENT.md §0：PC 与手机端均需支持）：
- PC（≥1280px）：左/右对联 + in-article；`bottom-banner` 不注入脚本
- 手机/平板（<1280px）：对联位整体不渲染、不请求，由 in-article + bottom-banner
  两个横幅位补足

## 组件 API
```tsx
// components/ads/AdSlot.tsx — 叶子节点，允许 'use client'
type AdSlotPosition = 'in-article' | 'bottom-banner' | 'left-skyscraper' | 'right-skyscraper';
type AdSlotProps = {
  position: AdSlotPosition;
  className?: string;
};
```

约束：
1. 必须预渲固定尺寸容器（banner: `aspect-[728/90]` 等比容器，宽度决定高度；
   skyscraper: 固定 160×600）——尺寸在首帧即确定，CLS 仍为 0
2. 脚本在 `requestIdleCallback` 后注入
3. 视口判定用 matchMedia，与 CSS 隐藏断点同步（对联 ≥1280px、bottom-banner <1280px）；
   被隐藏的位不注入脚本、不计曝光
4. invoke.js 读取全局 `window.atOptions`，多 slot 共存时由组件内串行队列依次注入
   （设 atOptions → 追加脚本 → 等到 iframe → 下一个），避免尺寸配置互相覆盖
5. 加载失败或超时（10s）无创意时自动收起容器（不保留空白块）
6. 不得使用会改变容器尺寸的广告格式

## 布局
- 内容页三栏：`left-skyscraper（160px）| 正文（max-w-3xl）| right-skyscraper（160px）`
- `<1280px`：左右位容器整体 `display: none`，正文末尾出现 `bottom-banner`
- Banner 通过 aspect-ratio 容器 + iframe 强制 100%×100% 等比缩放，小屏不裁切
- Banner 不得出现在 H1 与首段之间，不得遮挡正文

## 性能红线
- LCP < 2.5s · CLS < 0.1 · INP < 200ms
- 广告相关 CLS 必须为 0（固定/等比尺寸容器是硬性要求）
- 广告脚本不得阻塞首屏渲染

## 验收清单
- [ ] `NEXT_PUBLIC_ADS_ENABLED=false` 时全站无广告容器残留
- [ ] `/about`、`/privacy`、`/terms`、`/rss` 页面 HTML 中无广告脚本
- [ ] `≥1280px`：左/右对联 + in-article；`<1280px`：只有 in-article + bottom-banner，
      无对联、无对联脚本请求
- [ ] 任一位关闭或加载失败时页面高度无跳动
- [ ] Lighthouse 移动端 CLS < 0.1
