# 内链规范（内链.md v1.0）

## 0. 怎么用这份文件
写新页面、改旧页面、做完部署后，跑第 9 节的自检清单。任何一条不过就是内链缺陷，不需要再问。

## 1. 层级模型（本站固定 4 层）
- L0 首页 `/`
- L1 枢纽页：`/classes`、`/builds`、`/pets`、`/guides`、`/tools`
- L1 一级内容页：Launch 组（early-access / countdown / founders-pack / download / servers / player-count / twitch-drops）、Start Here 组（beginner-guide / leveling-guide / free-to-play）、tier-list、factions、progression、flight、crafting、dungeons、pvp
- L2 子页：`/classes/*`（8 个）、`/builds/*`（8 个）、`/pets/*`（5 个）、`/tools/*`（3 个）
- 规则：**L2 可以链接到 L0/L1/L2；L1 不得放进导航组里当子项**（导航只放 L0 + L1）

## 2. 每种页面的链接义务（硬性）
| 页面类型 | 必须向下链 | 必须向上链 | 正文内链下限 |
|---|---|---|---|
| L0 首页 | 每个 L1 枢纽各 1 条（8 个板块 H2 里至少 3 处带链接） | — | 6 |
| L1 枢纽页 | **其下所有 L2 子页，一个不漏** | 首页 1 条 | 子页数 + 2 |
| L1 内容页 | 相关 L1/L2 各 1–2 条 | 首页或所属枢纽 1 条 | 3 |
| L2 子页 | 同层兄弟页 1–2 条 | **所属枢纽页 1 条 + 首页 1 条** | 4 |

## 3. 锚文本规则
1. 锚文本必须是**描述性的**，含目标页的主题词（例：`AION 2 event timer`、`the Spacetime Rift schedule`）。
2. 禁用：`click here`、`read more`、`this page`、`here`——一律不算内链。
3. **同一页内、指向同一目标，只链一次**（首次出现处）；后文提及时用纯文本，不再加链接。
4. 正文锚文本避开与导航完全相同的短词（导航已用 `Tier List`，正文用 `our AION 2 tier list`）。
5. 英文页面锚文本用目标页的**主关键词原形**，不要用中文或缩写。

## 4. 每页的固定三件套（写完必查）
1. 一条指回**所属枢纽页**
2. 一条指回**首页**（或在页脚统一兜住）
3. 一至两条指**同层兄弟页**（比"相关文章"更有用的形式是：句子里的自然引用，如 `…is covered on our AION 2 PvP page`）

## 5. 页面尾部 Related 区规范
- 每页正文下方保留 `Related AION 2 coverage` 区，3–5 条，**每条必须是 `<a>`，不是纯文本**
- 该区链接目标**不得与本节上方正文重复**
- 该区**计入**第 2 节的"正文内链下限"

## 6. 页脚规范（当前不合规，待改）
现状：18 条 = About / Contact / Privacy / Terms / Disclaimer / Search / RSS / Sitemap（全为法务与功能页）
改成：在上述基础上**增补一栏内容页**——`All Classes`、`Tier List`、`Builds`、`Servers`、`Beginner Guide`、`All Tools`（6 条）
理由：哥飞 3 群原话——「不要让网页成为孤岛页面，任意页面都有回到首页和其他主要页面的链接」
预期收益：改一处，全站每一页多出 6 条指向核心内容的链接

## 7. 禁则（不要做）
1. **不为凑数堆链接**：一页正文内链超过 15 条即视为过度，删到 15 以内
2. **不删导出链接（Source 行）**：指向 SteamDB / Questlog / Game8 的链接是"可信赖性"证据，保留且**不加 nofollow**
3. **不给同一目标在同一页出现两次链接**（除导航与页脚）
4. **不在导航里塞 L2 子页**：子页只走枢纽页正文（本站当前就是这个设计，保持）
5. **不改已上线 URL 路径**：内链调整只改 href，不动 slug

## 8. 本轮实测状态（2026-10-05 快照）
- ✅ `/builds` → 8 个 build 子页，正文全链
- ✅ `/pets` → 5 个宠物子页，正文全链
- ✅ 导航 `Tools` 标签已指向 `/tools`；`/tools/rift-timer`、`/tools/event-timer`、`/tools/ping-test` 均在导航 Tools 组
- ❌ 页脚无内容页链接（第 6 节待改）
- ❌ 导航/页脚均不含 `/classes/*`、`/builds/*`、`/pets/*` 子页（设计如此，见第 7.4）
- ⏳ 未核：`/classes`、`/tier-list`、`/`、`/tools` 的正文链接清单；三个工具页之间是否已互链

## 9. 自检清单（每页发布前跑一遍）
- [ ] 该页有没有指回所属枢纽页？（L2 必查）
- [ ] 该页有没有指回首页，或确定页脚已兜住？
- [ ] 正文里出现的 `our X page` 句式，**是不是链接**？（提到≠链到）
- [ ] Related 区每条都是 `<a>` 吗？
- [ ] 同页有没有出现两次指向同一目标的链接？
- [ ] 锚文本是否描述性、无 `click here`？
- [ ] 若是枢纽页：它下面**所有**子页都链到了吗？
- [ ] 正文内链数是否 ≤ 15？

## 10. 待办
1. 页脚增补内容页一栏（6 条）——改一处全站生效，最高投产比
2. 核并修 `/classes`、`/guides`、`/tier-list`、`/` 的正文链接（尤其 `/guides` 里三处 `Read the … guide →` 的 CTA，必须确认是 `<a>`）
3. 三个工具页互链一圈 + 各补一条上行链接
4. 全站扫一遍 `our … page` 句式，全部包成 `<a>`