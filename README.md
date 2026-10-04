# site-template — 内容站建站模板（公共库）

从 Aion2 Codex 站（aion2codex.wiki）的开发约束与 docs 规范中提炼的**通用建站模板**，适用于
「SEO 驱动的内容站 / 攻略站 / 工具站 / wiki」型项目。方法论源头：哥飞《从 TDK 到 TDH》
等系列文章 + 该站两轮实测整改沉淀。

## 目录结构

```
site-template/
├── README.md          本文件（用后删除或改写为新站 README）
├── AGENT.md           开发约束（最高优先级，改它需人工批准）
└── docs/
    ├── ONPAGE.md      页面级写作细则：TDH 写法、AI 写作约束、内链三向、发布自检
    ├── SEO.md         技术 SEO：Metadata、og:image、结构化数据、sitemap 摘要、内链
    ├── 栏目.md        栏目页（枢纽页）方法论：建页判据、URL 禁改、栏目 TDK
    ├── KEYWORDS.md    关键词地图（唯一真源，建页前必登记）
    ├── CONTENT.md     内容规范：DataBlock、来源三档、时间敏感内容
    ├── ADS.md         广告位规范：白名单制、三个固定位、CLS=0
    ├── DESIGN.md      设计规范：色彩 token、断点、必备组件、a11y、性能预算
    ├── SITEMAP.md     sitemap / lastmod 规范：routes.json 单一来源、bump 规则
    ├── SEO-AUDIT.md   SEO 审核存档（空骨架）
    └── CHANGELOG.md   站点更新日志（所有页面日期戳的源头）
```

## 新站开站流程

1. **复制整个目录到新站仓库根**，重命名 README。
2. 全局替换占位符：
   - `{{站名}}` — 品牌唯一写法（注意与竞品域名区分，写全称）
   - `{{域名}}` / `{{站点URL}}`
   - `{{主题}}` — 站点主题实体（游戏名 / 工具品类 / 领域）
   - `{{官方域名}}` — 主题官方站，数据白名单第 1 条
   - `{{免责声明}}` — 按主题改写页脚合规句
3. AGENT.md §0 填项目身份与站点常量 `SITE`；§1.2 按主题重写数据源白名单/灰名单/黑名单。
4. DESIGN.md 色彩 token 换成新站视觉；KEYWORDS.md 建立新站关键词地图。
5. 每条带「占位」「示例」标记的内容，替换或删除后再投入使用。

## 提炼时有意排除的内容（Aion2 站专属，不进模板）

- `docs/FirstPlay.md` / `FirstPlay-Summary.md` — 视频转写内容研究，属项目数据
- KEYWORDS.md 里的具体词条与备注 — 仅保留表格骨架与登记规则
- DESIGN.md 的天空系色值 — 仅保留 token 表结构，色值示例标注为示例
- AGENT.md §7 中的 build 页联动规则 — 泛化为「详情页上线回改父页」通用条款
