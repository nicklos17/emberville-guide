# 站点更新日志

用途：**这是页面日期戳的源头**。每次内容更新在此写一行，页面 `Updated:` 与 `dateModified`
必须与之一致（routes.json bump 后全链路联动，见 `SITEMAP.md`）。

格式：

```
YYYY-MM-DD
[页面路径] 更新内容摘要（数据来源）
```

约定：
- 同日同页多次改动并入当日同一条目补记
- 同日改动日期戳不变（当日已是 lastModified）
- 补录滞后时，条目日期写内容实际改动日对应的 lastModified 值口径（不伪造新鲜度）
- 规则成文时注明触发背景（源站惯例：同类毛病第三次出现后立规），如
  「（2026-10-02，同类毛病第三次出现后立的规则）」

---

## 站点日志

```
2026-10-28
[/news/emberville-delay] 新页上线（L2 详情页，事件记录）：Emberville EA 由 2026-10-27 延至 2027-01-07。TDK → `Emberville Delay: Early Access Now Launches January 7, 2027`（59 字符）/ description 153 字符；H1 → "Emberville's Early Access launch is delayed to January 7, 2027"（与 Title 措辞区分）；结构与口径：新旧日期对照表（含「公告距原定日 1 天」「72 天」「解锁时刻仍未公布」「demo 仍可下载」「1.0 仍无日期」）→ 官方理由逐句引用（"systems changes that can't be done quickly" + 弓箭战斗重做）→ 加时十周改什么（区分「demo 快速反馈：手柄手感」与「系统级改动：弓箭」，明写公告未承诺弓箭重做必定赶上 1/7 首发）→ GTA 6 关联只作媒体读法（官方公告未提）→ 首发构建与首个更新计划（10/19 口径未重发）→ demo 是否仍在 → 价格/平台/联机/语言/1.0 未变清单表 → FAQ 5 条（取消与否 / 存档继承 / 预售 / 1.0 是否顺延 / 公告在哪）。来源：Steam 2026-10-26 公告（news hub）+ Bleeding Cool 全文转载 + CohhCarnage 视频 + GameSpot + The Outer Haven，verified 2026-10-28。内链：/release-date、/news/emberville-demo、/news/emberville-demo-launch、/price、/platforms + Related 区 4 条。
[/news] 新增延期条目（2026-10-26）置顶；两条旧摘要去掉「October 27」硬日期（10/20 条改「now set for January 7, 2027」，10/8 条补「since slipped from October 27 to January 7, 2027」），避免与延期页自相矛盾。routes.json title/description/lastModified 同步。
文档：KEYWORDS 登记 `/news/emberville-delay`（词形 `Emberville delay`，明写不得占用 `Emberville release date`）。
全站日期口径同步（同日，人工批准一次性改完）：新日期 2027-01-07 为真，2026-10-27 只作历史/撤回记录出现。
[/release-date] TDK → `Emberville Release Date & Early Access: Jan 7, 2027`（51 字符）+ description 重写（144 字符）；answer、总表（新增「Previously announced date」行、Price 行补「折扣窗口未按 1 月重述」）、FAQ 3 条（日期 / 解锁时刻 / GOG 表述）改写；原「Steam and GOG listings cross-check」节改为 H2「Emberville release date history: from summer to January」，加 4 行日期沿革表并链 /news/emberville-delay；GOG 表 Release date 行改为「延期前为 10/27，现为 2027-01-07」；解锁时刻段与 7 城市投影表整表重算（1 月为 PST/CET/AEDT：18:00 UTC / 19:00 CET / 次日 02:00 北京 / 03:00 JST / 05:00 AEDT，Brisbane 补 04:00）；页尾核验日 2026-10-28。
[/] 首屏徽标、日期卡、CountdownTimer target（→ 2027-01-07T00:00:00Z，原表已过期）、answer、FAQ、事实表 Release 行全部改新日期；「Early Access scope」节新增一段说明延期并链 /news/emberville-delay；事实块 verified 与页尾核验日 → 2026-10-28。
[/wiki] at-a-glance 与 at-a-glance 表 Release context 行改「2027-01-07，moved from 2026-10-27」。
[/guides] FAQ「What is the confirmed release date?」与正文日期句同步，补「延期自 10/27」。
[/studio] 首段发售句同步并注明 10/26 延期。
[/price] FAQ GOG 条去掉硬日期；「later statement is the operative one」段改「价格为 10/19 口径、日期已延、价格未变」；折扣表行补「未按 1 月重述」；「Until the listing goes live」改「in January 2027」；商店页 DataBlock 改新日期 + verified 2026-10-28。
[/platforms] answer 与 at-a-glance 段改新日期并写明「延期不动平台」；总表 PC 两行与 DataBlock source/verified 同步；页尾核验句 → 2026-10-28。
[/platforms/multiplayer] FAQ 问句去掉「27 October」→「at launch」；answer 补「延期两半都不变」；H2「What is confirmed for the 27 October launch」→「…for the Early Access launch」；1.0 段改「neither the 19 Oct announcement nor the 26 Oct postponement revised it」。
[/news/emberville-demo] answer、时间表 PC Early Access 行、商店页 DataBlock、「worth playing」段（原「launch a week away」改为「demo still playable, EA ten weeks out」并补手柄反馈口径）、存档句改「once Early Access opens」。
[/news/emberville-demo-launch] FAQ「demo 是否继续可玩」由「官方未说、自行核对」改为「仍在、且可能继续更新」（依 10/26 视频 + 媒体确认）；answer、时间表「Early Access opens」行改「postponed」双列、商店页 DataBlock、存档句、H2「content on October 27」→「content at launch」、页尾段重写并链 /news/emberville-delay。
[/news/emberville-announcement-video] 时间线段改为「moved twice（7 月定 10/27、10/26 延至 1/7）」；DataBlock 补「10/26 延期」。
[/stardew-valley-diablo] 「party play on 27 October」→「at launch」。
[/games-like-emberville] 「arrives in Early Access on 27 October 2026」→「still unreleased — EA now dated January 7, 2027」。
routes.json：/release-date title+description 换新，/platforms 与 /news/emberville-demo description 去硬日期，14 条受影响路由 lastModified → 2026-10-28。src/config/site.ts earlyAccessDate → 2027-01-07。
部署：2026-10-28 上线（Worker `emberville-guide-wiki`，Version ID `7672d0c2-c2fd-477f-9fc7-ff4ece783d71`），上传 5 个新增/变更静态资源 + 108 个 assets 全量索引，Total Upload 5510 KiB / gzip 1098 KiB，Worker Startup 16 ms。线上校验：`/` `/release-date` `/news` `/news/emberville-delay` 及 11 个受影响页全部 200；`/release-date` Title 已为 `…Jan 7, 2027`；首页 CountdownTimer 目标为 `2027-01-07T00:00:00Z`；sitemap.xml 25 条含 `/news/emberville-delay`；首页残留的 `27 October 2026` 全部出现在「Moved from …」历史句内。
部署注意（环境侧，非代码问题）：1) `@opennextjs/cloudflare` 1.20.10 以「Next 15.5.27 超出 2 年支持期」拒绝构建，需加 `--dangerouslyUseUnsupportedNextVersion`（`deploy` 子命令不认该参数，只对 `build` 加即可）；2) 构建前的 `.open-next` 清理会被 WorkBuddy safe-delete 拦截（1498 个文件 > 50 阈值），需先 `mv` 出工作区再构建；3) 本机需 `NODE_OPTIONS=""` 绕开语言 shim；4) `npm run deploy` 原样执行会因缺该 flag 失败，故实际按「build（带 flag）→ deploy」两步执行。
2026-10-22
[/platforms] 主机口径按 2026-10-19 官方 EA 公告改写（原文 "Console versions are planned for our 1.0 release" + Road to 1.0 的 "Console releases, bringing Emberville beyond PC"）：TDK → `Emberville Platforms: PC Now, Consoles Planned for 1.0`（54 字符）；H1 → "Emberville ships on PC first, with console versions planned for 1.0"；总表新增「Consoles — overall = Planned for 1.0」，PS5 / Xbox / Switch·Switch 2 三行由「Not announced」改为「Covered by the 1.0 plan, not named」，移动端单列「Not announced」（1.0 计划只写 console，不外推）；新增 H2「The 1.0 console plan, in the studio's words」（两处原文 + 变更条款 "These are part of our development plans…"），PS5/Xbox 与 Switch 段改为「计划覆盖但未点名」，并说明手柄支持是 PC 输入而非主机证据；FAQ 换成「计划覆盖哪些主机 / 何时到 / 是否有移动版」。来源：Steam 商店页 + 官方 2026-10-19 公告，verified 2026-10-22。routes.json title/description/lastModified 同步。
[/platforms/multiplayer] 联机口径反转：原写「无联机计划」已被官方 FAQ "Yes! Co-op multiplayer is planned for the 1.0 release. Early Access launches as a single-player experience." 推翻。TDK → `Emberville Co-op: Planned for 1.0, Not at Launch`；H1 → "Emberville is single-player at launch, with co-op planned for 1.0"；总表改为「EA 首发 / 1.0 计划」双列（模式、合作、玩家数、线上或本地、PvP）；新增「公告未说什么」一节，明写玩家数、线上/本地、分屏、专用服务器、跨平台、存档兼容均未公布；新增「何时到、依赖什么」（绑定 1.0，1.0 无日期，仍只有约 18 个月旧估算）；删去「Workshop 模组 ≠ 联机」的旧论证（已不适用）。FAQ 换成「10/27 能否联机 / 支持几人 / 线上还是分屏」。
[/release-date] 同步联机与主机口径：FAQ 两条改写（co-op = 1.0 计划；主机 = 1.0 计划未点名）；总表 Platform 行改「Windows at launch + 主机 1.0 计划」、Mode 行改「Single-player at launch」；正文 mode 段改为「商店页描述 10/27 出货、公告描述之后」，不再用「救援主题不支持联机」的旧推理；1.0 清单加入 co-op / console / modding；页尾核验句补 launch mode 与 1.0 计划。
[/] 首页 FAQ「Can I play Emberville with other people?」改为「首发不行，co-op 为 1.0 计划」；answer 与 1.0 清单加入 co-op multiplayer / console releases；正文平台链接句由「unannounced console versions」改为「console versions planned for 1.0」。
[/stardew-valley-diablo] FAQ、answer、H2（→ "Emberville is single-player until 1.0"）与 DataBlock 改为「EA 单机、1.0 加 co-op」，不再写「不确认联机」。
[/games-like-emberville] FAQ 与 Necesse / Core Keeper 两处对比改为「首发单机、1.0 才有 co-op，机制现在接近、模式以后可能趋同」。
[/news/emberville-announcement-video] 「further down the road」句由「平台页仍视主机为未公布」改为「已被 10/19 公告取代为 1.0 计划，但仍无点名平台与日期」。
[/wiki] at-a-glance 段补「co-op planned for the 1.0 release」。
文档：KEYWORDS（/platforms 合页理由、/platforms/multiplayer 口径与边界段）、CONFLICTS 新增 C-15（含口径边界：co-op/console 无日期、无点名平台、无玩家数；modding 只写「1.0 计划内」）。
[/price] 价格按官方新口径改写，并按要求加「变更说明」而非静默替换：TDK → `Emberville Price: $29.99, 10% Off, No Microtransactions`（55 字符）；H1 → "Emberville's price at launch: $29.99, or $26.99 with the discount"；新增 H2 `Emberville price change: from the $25 cap to $29.99`（2026-01 视频 vs 2026-10-19 官方公告两行日期表，明写「官方未解释差异，本页不替它解释」）；新增价格表（$29.99 / 10% / $26.99 / 区域定价有差异 / 商店页发售前不显示价格）；购买模式段改为「无微交易·无 battle pass·无订阅·无付费 DLC」，并把「价格长期稳定」降级为「视频表述，10 月公告未重申」；FAQ 换为 3 条不重复问题（折扣持续多久 / 是否含后续内容 / GOG 是否同价）。来源：Steam 官方公告《What to Expect from Emberville Early Access on October 27th》+ 2026-01 公告视频 + Steam 商店页，verified 2026-10-22。routes.json title/description/lastModified 同步。
2026-10-22
[/] 首页价格口径同步：FAQ「How much will Emberville cost?」改为 $29.99 / 首周 10% 折后 $26.99 + 区域差异；正文价格段改为官方新口径并注明「取代 2026-01 视频的 $25 上限」；同段原 /price 重复链接按「同页同目标只链一次」保持单链（改后文既有链接的措辞）。routes.json lastModified → 2026-10-22。
2026-10-22
[/release-date] 价格口径同步：answer、总表 Price 行（Unannounced → $29.99 / $26.99）、Purchase and monetization 行、`Price and purchase model` 节全部改为官方新口径并注明取代关系；FAQ「How much does Emberville cost?」换为「Will the Emberville price rise after Early Access?」（避免与正文重复，答「未表态」）；总表 DataBlock 来源标签改为「Steam store page + Cygnus Cross Early Access briefing」、verified 2026-10-22；页尾核验日期 2026-10-11 → 2026-10-22。routes.json lastModified → 2026-10-22。
2026-10-22
[/news/emberville-announcement-video] 历史口径加变更注记（不改写视频本身说了什么）：FAQ 价格条补「10/19 公告已改为 $29.99 / 折后 $26.99，$25 属历史表述」；「business terms」段价格句改为「当时设 $25 上限，后被 10 月公告修订」，其余条款不变；视频 DataBlock 的 $25 标注「since superseded」。routes.json lastModified → 2026-10-22（TDK 未改，本页仍是该视频的记录页）。
2026-10-22
[/news/emberville-demo-launch] 新增新闻内页（10/20 试玩开闸事件记录）：Steam Next Fest 窗口 10/19 10:00 PDT 开闸（=10/20 01:00 北京，中文稿「10 月 20 日」即同一时刻的 UTC+8 表述）；Cygnus Cross 于开闸后 54 分钟发布官方公告《What to Expect from Emberville Early Access on October 27th》，确认试玩=序章（"the opening chapter"，平均 90 分钟）、试玩存档可继承至 10/27 EA（"There's no need to start again"）、Creator & Press Preview 存档不继承；同日 22:46 UTC 发布首个试玩补丁 Alpha Demo 0.20.17.x（部分 Windows 黑屏、过场语言 bug、简繁中日韩文本、Palm Strike 100% 眩晕、精通名称与描述、手柄换装色、死亡经验惩罚计算等，已知 L/R 手柄键在部分页签异常）；EA 首日范围（首个生态区、180 分钟配音、7–10 / 15–20 / 20–30+ 小时估算、手柄支持、9 语言）、首月更新（Biome 1 尾王、手柄改进、追加语言、bug 修复、路线图）、1.0 计划（合作 / 模组 / 主机）。来源：Steam 商店页 + 两条 Steam 官方公告 + 3DM 2026-10-20 编译稿，verified 均 2026-10-22。routes.json 新增路由（priority 0.9 / daily）；/news 索引置顶条目；KEYWORDS 登记 `Emberville Next Fest demo` 并与 /news/emberville-demo 划界；CONFLICTS 记 C-14（价格口径冲突，未在本页落价格）。
2026-10-22
[/news/emberville-demo] 旧结论同日必修（原文「试玩内容 / 时长 / 存档延续 / 活动后访问未公布」已过期）：answer、日期表（新增 Demo status 行）、「what includes」、「does progress carry over」、「worth playing」各段全部改为已确认口径（序章、平均 90 分钟、存档继承、GOG 无 demo）；FAQ 换为 3 条不与正文重复的问题（是否完整游戏 / 是否有 GOG demo / 是否需在 EA 前通关）；删除 TalkEsport「内容未公布」旧数据块（已被官方公告取代）；新增指向 launch 页的区分链。TDK 未改，routes.json lastModified → 2026-10-22。
2026-10-22
[/news] 索引新增 10/20 条目并置顶（internal，指向 launch 页）；routes.json lastModified → 2026-10-22。
2026-10-13
[/price] 价格页按揭示视频改口径：从「价格未公布」更新为「官方上限 $25 + EA 入场折扣 + 零微交易」（视频原话 "this game is not going to be more than $25"，co-founder CohhCarnage，2026 年 1 月公告视频）；最终金额今日经 Steam appdetails API 复核仍未列出（price_overview 缺失、非 is_free）。SEO_TITLE/H1 改为 $25 cap 口径；表格更新（Specific price → Capped at $25, amount not listed；Discounts → Confirmed for Early Access entry）；新增公告视频 DataBlock（verified 2026-10-13，Steam DataBlock 同步复验日期）；FAQ 增至三条（新增 "Will Emberville be cheaper in Early Access?"）；正文链 /news/emberville-announcement-video。同口径补丁：首页 FAQ、/release-date FAQ、/news/emberville-demo FAQ 的 "no price" 表述同步更新（商店页仍无金额 + 视频上限 $25）。routes.json /price title/description/lastModified → 2026-10-13。
2026-10-12
[/news/emberville-announcement-video] 新增新闻文章（CohhCarnage 揭示视频话稿落点）：视频 "CohhCarnage Announces EMBERVILLE And The New Game Update Playlist! (Update #1)"（用户提供话稿与链接，oembed 核实标题/频道 @CohhCarnage）。内容：加入经过（第三次做游戏、粉丝团队相邀、视频中的 producer 式日常——每周 Sprint 会/规划/全量反馈；官方头衔仍按命名媒体口径 co-founder & co-game director，链 /studio）；揭示内容（Stardew 偏战斗+更暗+巨型程序生成地牢、多武器/技能树、Memento、城镇中心水晶开启地牢（PoE delve 式）、创造性建造区+渐进城镇重建、钓鱼、程序化 QoL）；商业条款（≤$25、零微交易、EA 折扣、不众筹不融资、无区块链/NFT、手柄支持、主机"进一步之后"）；时间线（视频中 "early next year" → 现确认 2026-10-27 EA）与更新视频计划。来源：视频 + IGN 2026-01-27 + Kakuchopurei 2026-01-29 + Steam 页，verified 均 2026-10-12；视频精确上传日期未能核实（oembed 无日期、watch 页抓取被拒），条目日期用 January 2026 并在文中注明 1 月下旬揭示窗口。/news 索引新增 internal 条目（置 January 27 之后）；routes.json 新增路由（priority 0.8/weekly）；/studio 视频提及处加内链；Article+FAQ JSON-LD 同步。
2026-10-12
[/games-like-emberville] 扩容两节 + 一次提及，承接 emberville vs necesse / vs witchbrook 长尾（不为新游戏开独立页）：新增 Necesse 节（列首位，机制对位最紧：定居点+招募专家+地牢 Boss 战+采矿制作，Fair Games ApS，2025-10-16 已发行，像素+在线合作）与 Witchbrook 节（像素女巫生活模拟，Chucklefish + Robotality，最多 4 人，商店页 2026 窗口未定档——全列表唯一未发售条目，收尾句相应调整）；导购段一两句提及 Enshrouded（Keen Games，至多 16 人合作，3D voxel 大体量同类）；FAQ 两条同步更新（closest game 首推 Necesse；co-op 答案补 Necesse/Witchbrook）。事实均取自当日 Steam 商店页抓取（新增两节 DataBlock verified=2026-10-12，原五节保持 2026-10-10）。routes.json lastModified → 2026-10-12，description 补全七款游戏名。
2026-10-12
[/characters] 与 /voice-cast 去重（纯减法）：配音节正文压缩为两句（Memento 一句保留 + 「工作室公布 22 人名单与两个已确认角色映射，完整名单与来源见配音名单页」），原句中的名单详情、Alex Jordan/Matthew Mercer→Adeos/Gumu 映射细节不再重复（/voice-cast 为唯一落点）；删除该节下 IGN 预览与 Cygnus Cross 官网两个重复来源脚注块（两来源在 /voice-cast 各有一块）；FAQ "Who voices the characters in Emberville?" 改为一句指路。其余节不动（幸存者救援循环、村民职业与重建、角色创建、「官方未公布具名角色表」说明、工作室段落与 /studio 内链均保留）。routes.json lastModified → 2026-10-12，description 尾部同步收敛（不再提 voice-acting director）。
2026-10-11
[/release-date·TDK] 标题改为 "Emberville Release Date & Early Access: Oct 27, 2026"（SEO_TITLE 与 routes.json 同步，页面输出追加品牌后缀），description 重写为直接给出 release date：「Emberville's release date is October 27, 2026 in Early Access, confirmed on Steam and GOG...」；首页倒计时链接复核：全站 src 与线上首页均无 /countdown 引用，倒计时区已直链 /release-date，无需改动。
2026-10-11
[/release-date] 解锁惯例表与 FAQ 按用户指令修订（同日补记）：① 表前句压缩为「官方未公布解锁时刻 + 下表按 Steam 大型发售惯例（10:00 PT）推算，非官方公布」两句式；② 澳洲栏改标 AEDT (UTC+11)、值 04:00 · Oct 28（10 月末悉尼/墨尔本已入夏令时，按东岸实际钟面取 04:00；严格 AEST 的布里斯班 03:00，注脚说明）；③ 表后补「当天 Steam 页会出现 unlocks in approximately X hours 倒计时，以它为准；官方一旦公布时刻即替换本表」；④ FAQ 补三条：What time does Emberville unlock?（指向惯例表，替换原 What time will Emberville unlock on Steam? 措辞避免近重复）、Is Emberville co-op or multiplayer?（No，Steam 仅列 Single-player，救村民≠多人）、Is Emberville on PS5 or Switch?（未公布，正文已链 /platforms）。FAQPage JSON-LD 随之更新；事实口径未变，lastModified 维持 2026-10-11。
2026-10-11
[/release-date] 新增 Steam 解锁时刻惯例表（承接 emberville release time / unlock hour 词面与 PAA "What time do new games unlock on Steam?" 答案位）：写法两段——先一句官方口径（Cygnus Cross 与 Steam/GOG 列表均未公布解锁时刻），再给平台惯例推算：大型 Steam 发售传统上 10:00 AM PT（≈17:00 UTC，北京为次日凌晨），落成 PT/ET/UTC/CET/Beijing/JST/AEST 七栏表，表头明确标注 community estimate, not an official announcement，表后注明十月令时换算前提（PDT/EDT、欧洲已回冬令时、AEST 固定 UTC+10）与「官方一旦公布时刻即替换本表」。FAQ 增补 "What time will Emberville unlock on Steam?"（FAQPage JSON-LD 随之更新）。事实与来源未变（各 DataBlock 核验日期保持 2026-10-10），页面收尾核验日期更新为 2026-10-11，routes.json lastModified 同步（sitemap lastmod 随之更新）。
2026-10-10
[/countdown] 撤页决策反转（补记）：由「直接 404」改为 **301 → /release-date**。动机：保留旧 URL 可能已有的收录与外链权重。实现为 next.config.ts redirects()（statusCode 301；撤页路径无对应资产、请求必达 Next 路由），已部署并线上验证 301 与落点 200；`/countdown/` 尾斜杠 308 归一后 301，query 透传；www 两跳与既有 www 规则一致。同步回填 docs/REDIRECT.md §6（撤页 301 的层位选择与验证命令）、docs/CONFLICTS.md C-13 补记、docs/KEYWORDS.md、docs/INTERNAL-LINKS.md §9/§10。页面内容不变（独有内容此前已并入 /release-date）。
2026-10-10
[全站·结构] 新增 Platforms 栏目与三个新页，撤 /countdown：① 新建栏目 `/platforms`（导航 Release 右侧新增一项 Platforms；一页承接 `emberville platforms` 及 ps5/switch/switch 2/console/xbox/mobile 六个同义词面，首段一句给结论「官方仅 PC（Steam 与 GOG），主机与移动端未公布」，分节写 PS5+Xbox / Switch+Switch 2 / mobile，口径一律「未公布」而非「不会出」；H2 覆盖 `Emberville platforms: what is confirmed`、`Emberville PS5 and Xbox status`、`Emberville Switch and Switch 2 status`、`Emberville mobile`、`How this page updates`，配 7 行平台状态表）；② 新建 `/platforms/multiplayer`（承接 multiplayer / is emberville multiplayer / will emberville be multiplayer，结论为 Steam 标 Single-player、EA 无联机，明说 1.0 路线图的 Workshop 模组≠联机）；③ 新建 `/price`（挂 Release 栏目下，只写官方口径——未公布具体售价、一次性买断、无微交易、EA 期可能折扣，全文不引任何第三方估算金额，含标为 estimate 的）；④ 新建 `/games-like-emberville`（按机制而非品类匹配，逐款配自家 Steam 页来源：Core Keeper / Moonlighter / DREDGE / Graveyard Keeper 2 / Dimraeth，Dimraeth 只作条目不单独开页）；⑤ 撤 `/countdown` 页（与 `/release-date` 高度重叠），把「日历日≠解锁时刻」与其独有内容并入 `/release-date`，该页新增 `Emberville release time: the listing gives a day, not an hour` 与 `Emberville unlock time and regional availability` 两节，并清理首页 / `/guides` / `/release-date` / `/about` 的全部 `/countdown` 内链，同时从 `routes.json` 移除条目（sitemap 随之不再输出该 URL）；**按决策不设 301，旧 URL 直接 404**；⑥ `/news/emberville-demo` priority 0.7→0.9，补 `What the Emberville demo includes` / `Does demo progress carry over?` / `Is the demo worth playing?` 三个 H2，并从首页与 `/release-date` 增挂内链；⑦ 首页补 `/platforms`、`/price` 内链，`/guides` 与 `/stardew-valley-diablo` 补 `/games-like-emberville` 内链；⑧ `/release-date` 的 `Price and purchase model` 节压缩为一段摘要，价格论证交 `/price`，避免与价格落地页复写；⑨ 四个新页正文与 Related 区的重复链接去重（同一页同一目标只链一次）。同步更新 `docs/SITE.md`（核心栏目 7→8、新增 Platforms 与子页/专题页登记）、`docs/KEYWORDS.md`（四页主词与边界、单平台页列入禁建清单、`/countdown` 退役说明）、`docs/INTERNAL-LINKS.md`（层级模型与链接义务）、`docs/SITEMAP.md`（分档表）、`README.md` 与 `src/content/routes.json`、`src/content/navigation.json`。无需额外人工步骤：`/countdown` 按决策直接撤页（不设 301）。来源：Steam 商店页、GOG 官方产品页、各相似游戏 Steam 商店页（Verified: 2026-10-10）。
2026-10-10
[全站·结构] 首页短语级覆盖整改与内容拆分（回应体检报告 P1/P2/P3）：① 首页 13 个 H2 全部挂上 "Emberville" 词面（如 `Emberville setting: imprisonment and renewal`、`Emberville combat: decisions over attack speed`、`Emberville crafting and the estate`），主词由周边词（Early Access / Cygnus Cross / store page）转回 `Emberville wiki`、`Emberville guides`；② 首页正文 2839 词 → 约 1700 词，把「配音阵容 / Stardew×Diablo 对比 / 工作室背景」三节拆为独立页 `/voice-cast`、`/stardew-valley-diablo`、`/studio`，首页只留摘要 + 内链；③ `/characters` 与 `/wiki` 的 22 人配音全表与重复段改为一句话摘要 + 内链，避免与专题页复写；④ `/countdown` 从顶部导航与页脚撤下、sitemap priority 0.8→0.5，Title/H1 改为 Date vs Unlock Time 口径，正文重写为「日历日 ≠ 解锁时刻」的差异化补充页，删除与 `/release-date` 重复的段落；⑤ 首页 hero 与 7 张栏目图补齐 `width`/`height`（1600×900 / 1200×675），消除 CLS 隐患；⑥ 首页 Description 改为 `Emberville wiki and guides:` 开头，避开 `Emberville's` 所有格分词误判。同步更新 `docs/SITE.md`（新增 L1 专题页定义与拆页判据）、`docs/KEYWORDS.md`（登记三个专题页主词与边界）、`docs/INTERNAL-LINKS.md`（L1 专题页层级）、`src/content/routes.json`、`src/content/navigation.json`。同日补记：⑨ H1 与 Title 去重（/wiki 由 `Emberville Wiki Database: Setting and Systems` 改为 `Inside the Emberville Wiki Database`；/countdown 由 `Emberville Countdown: Calendar Day vs Unlock Time` 改为 `What the Emberville Countdown Actually Counts`）；⑩ 首页 hero 的 `Browse the Wiki` 按钮改为 `View on Steam`，外链游戏 Steam 商店页（`store.steampowered.com/app/2295170/Emberville/`，`rel="noopener noreferrer"`），顺带消除该按钮与正文、卡片同指 /wiki 的重复链接。未改动任何事实与来源，数据块核验日期不变。
2026-10-10
[/news /news/emberville-demo] 将 /news 改为 Emberville news / updates 列表门户，新增 Steam Next Fest demo 详情页；登记 `Emberville demo` 主词与 routes.json 元信息，并同步 SITE.md、KEYWORDS.md、INTERNAL-LINKS.md 的栏目定位与 L2 规则。详情明确区分 IGN Oct 8 公告预告、Steam Next Fest 通用活动时段、全游戏商店描述及 IGN Sep 11 先期试玩；未推断 demo 内容/时长/存档延续/活动后访问/EA 价格。新增 NewsArticle、FAQPage 与 BreadcrumbList SSR 结构化数据。来源：IGN、Steamworks、Steam、TalkEsport（Verified: 2026-10-10）。
2026-10-10
[全站·广告] 修复 App Router 站内路由切换时左右对联沿用旧广告创意：按 pathname 重挂载展示容器，清理旧 iframe 后重新注入广告脚本；同步更新 docs/ADS.md 的路由切换验收规则。未修改页面正文及内容日期戳。
2026-10-10
[/ /wiki /characters] 补入三项此前遗漏的独家内容（回应「配音阵容/主播背景/对比段没用上」）：① 官方 22 人配音阵容全表（Cygnus Cross 官网，Alex Jordan 任 Voice Acting Director），并标出 IGN 试玩已点名的两个角色（Alex Jordan 配 Adeos、Matthew Mercer 配 Gumu）；② Cygnus Cross 工作室与 CohhCarnage 背景段（独立工作室、爱尔兰 Cork、首发作品、Brynjar Gigja 任 founder/lead game director、Ben「CohhCarnage」Cassell 任 co-founder/co-game director；并显式纠正社区帖流传的「creative lead」说法）；③ Stardew Valley / Diablo 对比段（IGN 1/27「Diablo Lite meets Stardew Valley」、GameSpot 1/28、IGN 9/11 试玩对双键连招与采集循环的具体对照）。首页新增 3 个 H2 与 3 条 FAQ，/wiki 新增 2 节，/characters 扩写配音阵容并补工作室段；新增来源 GameSpot、GamingTrend、Gamer Social Club（均为署名媒体）。来源：Cygnus Cross 官网、Cygnus Cross 新闻稿（GamesPress 托管）、IGN 试玩/公告、GameSpot、GamingTrend、Gamer Social Club（Verified: 2026-10-10）。
2026-10-10
[全部内容页] 多信源改造（回应「10 页脚注同源」问题）：按各页主题从不同一手/署名来源取材并各自标注，取代原先「全站唯一来源=Steam 商店页」的写法。来源分配——首页/维基/指南取 Cygnus Cross 官网（Memento、配音表）、7/16 开发者新闻稿（双键连招、动态 HUD、技能继承、动态世界、材料/蓝图/配方）与 IGN 9/11 试玩（精通树、掉落、属性点）；定档页/倒计时页取 IGN 1/27 公告与 7/15 定档报道、GOG 官方产品页（10/27/2026、Windows、DRM-free 离线安装）；新闻页取四条带日期时间线（1/27 IGN、7/15 IGN、7/16 新闻稿、10/8 demo）。术语与原文对齐（craftable outputs：equipment/potions/food/tools/**trinkets**，全站原 accessories 已改回 trinkets）；平台口径由「仅 Steam」修正为「Steam 与 GOG 均列 Windows」；各页结尾「已按 Steam 商店页核验」改为多源核验表述。同日可读性收尾：压缩 /countdown、/release-date、/wiki 与首页的重复否定句（如「does not / is not / rather than」），改为一次陈述的正向表述，保留全部事实边界（无精确解锁时刻、无定价、无 1.0 日期、无主机平台、无具名配方/数值、无区域上线次序）。来源：Cygnus Cross 官网、Steam/Steam News、GOG 官方产品页、Cygnus Cross 新闻稿（GamesPress 托管）、IGN 公告/定档/试玩报道（Verified: 2026-10-10）。
2026-10-10
[全站·性能] CDN 与加载速度优化（页面内容与日期戳不变）：wrangler 开启 Workers Caching——HTML 在边缘按 s-maxage 缓存（cf-cache-status HIT，命中不进 Worker），缓存键含 Worker 版本、部署即自动失效；验证 zone 级 Cache Rules 对 Worker 响应无效，已回退；首页 hero 直出静态图，跳过 /_next/image 302 一跳；WebP 重压（hero 352→160KB，section 图 108-184→63-115KB）与 PNG 图标量化（android-512 448→58KB、apple-touch 128→12KB）；7 张源 JPG、og 源图、遗留 favicon.png 共约 4.9MB 移出 public（收至 assets-source/，不再随部署上传）；zone 开启 0-RTT 与 Early Hints（HTTP/3、Brotli 已开启，Rocket Loader 保持关闭）。
2026-10-10
[全站内容页] 接入 160×600 对联及 728×90 横幅广告：正文首段后横幅、≥1280px 左右对联、<1280px 正文末尾横幅；生产开关启用，开发环境仍关闭。广告配置按位串行注入并在无创意/加载失败时收起。
2026-10-10
[/about/methodology] 新增来源与核验说明页，集中解释 Steam/Steam News 等来源、社区信息与实测口径；页脚新增入口。
2026-10-10
[/characters /map /builds /item-database] 重写栏目正文，改为介绍 Steam 已确认的救援与村民机制、Vitromotus 世界空间、武器连招与职业继承、道具分类与制作循环；删除字段清单和大段未知项说明，加入精简的开服后更新承诺及相关页面链接。新增纯说明页 [/about/methodology] 集中说明来源、核验和测试规则，并更新页脚、路由、TDK 与站点结构。
2026-10-09
[全部内容页] 重写首页及 9 个内容路由为 1,200–1,800 词的英文资料页：以 Steam 官方商店页为唯一游戏事实来源，扩展世界设定、战斗与职业、采集制作、村庄重建、EA 范围及 PC 配置等内容；将地图/物品/角色/配装页改为有实用内容的系统指南与来源边界说明，不再以空态占位。移除未经 Steam 页面核验的 GOG、精确解锁时刻、愿望单、主播/配音/试玩、特定生物群落数量、角色好感等说法；同步修正 10 个路由的标题和摘要，避免旧元数据继续宣称测试 builds、物品数据、掉落位置或 15:00 UTC。来源：Steam 商店页（Verified: 2026-10-09）。
2026-10-09
[/] P0+审计整改：H1 收成 Emberville Wiki & Guides；正文按 8 段骨架重写为 1305 词已知事实综述
       （Vitromotus/kymia 设定、核心循环、Cygnus Cross 与 CohhCarnage、配音名单表、
       平台/配置/语言三表、Stardew×Diablo 对比、4 条真实 PAA FAQ、Last verified 行）；
       栏目卡片退为文末辅助。来源：Steam 商店页 + CGMagazine/WayTooManyGames/ComicBook
       （媒体源已入 AGENT.md §1.2 白名单）。
2026-10-09
[/wiki] P1 审计整改：删「为什么是空的」，改为「目前确认了什么」——世界设定、确认事实表、
       四分组各写已确认机制与 press-reported 条目预告。来源：Steam + 媒体 preview。
2026-10-09
[/news] P1 审计整改：时间线换为 Emberville 官方消息 5 条（01-30 EA 窗口 / 07-16 日期公布 /
       09-11 demo / 10-05 细节 / 10-27 计划上线），站务日志迁至 /about Site log 节。
2026-10-09
[全站] 建站初始化：scripts/init_site.py 生成 Next.js 15 + TS + Tailwind v4 + OpenNext/Cloudflare 工程骨架；
       22 个路由全部静态预渲染，首屏 JS 103KB（预算 150KB）。来源：AGENT.md + docs/ 规范。
2026-10-09
[docs/CONFLICTS.md] 新建：记录模板与本站实状的7 项冲突及裁决（SITE.md 优先），供后续回灌 init_site.py。
2026-10-09
[src/config/site.ts] 修正站点常量：earlyAccessDate=2026-10-27（Steam 官方 15:00 UTC）、
       launchDate=""（正式版未公布，不编造）、platform="PC (Steam)"。与 AGENT.md §0.2 对齐。
2026-10-09
[src/app/globals.css] 设计 token 由浅色天空系改为暗色地牢系，色值取自官方首张截图实测取样
       （#213A41 / #317DC9 / #CA9454 三族）。裁决见 docs/CONFLICTS.md C-01/C-06。
2026-10-09
[src/app/globals.css] 字体由 next/font/google Inter 改为 next/font/local 自托管 Silkscreen 像素体
       （WOFF2 两字重置于 public/fonts/），正文保留系统无衬线。见 CONFLICTS.md C-07。
2026-10-09
[全站 · 视觉] 第一版上线后视觉复核降刺激（来源：用户实测反馈「看着眼睛很痛」）：
       ① 像素体 Silkscreen 全站下线，layout.tsx 移除 next/font/local 加载，全站统一系统 UI 无衬线；
       ② 主色/强调色 HSL 饱和度 80%/79% → 54%（primary #5AAEED→#74B3D6、accent #E9A63F→#D3A06A、
          link #6FBBF0→#8CBEDE），降饱和同时提明度，对比度不降反升；
       ③ 正文 ink #E9EFF3→#DBE4EA（12.01:1，AAA），消深底光晕；
       ④ H2 由整行琥珀大字改为近白字 + 左侧 3px 琥珀线，表头改 ink-muted 并取消 uppercase/宽字距；
       ⑤ 链接下划线改半透明 color-mix，body 加 font-smoothing/ligatures，
          :focus-visible 由 3px 改 2px 实心。全站对比度重算后仍全部 ≥4.5:1。
       裁决见 docs/CONFLICTS.md C-12（推翻 C-07 的「标题用像素体」部分）。
2026-10-09
[/] 首页重写：接入官方截图作 hero 背景 + 7 栏目入口卡片（哥飞「分门别类罗列」），
       H1 改为「Emberville Wiki & Guides for the whole dungeon」含主词，与 Title 措辞区分。
2026-10-09
[/release-date] 语义修正：2026-10-27 为抢先体验日而非正式发售，时间修正为官方 15:00 UTC，
       表格补「Full release: Not yet announced」列。来源：Steam 商店页（Verified 2026-10-09）。
2026-10-09
[/countdown] 目标时间由 00:00Z 修正为 15:00Z，与官方时间戳一致；FAQ 改为「正式版日期何时公布」。
2026-10-09
[/wiki] 新建（SITE.md 七栏目之一）：四大分组结构页，含分组表与核验状态 DataBlock。
2026-10-09
[/map] 新建（SITE.md 七栏目之一）：区域 / 入口 / 掉落三层结构，含DataBlock 核验状态表。
2026-10-09
[/characters] 新建（SITE.md 七栏目之一）：人物与好感度口径说明，数值不预写。
2026-10-09
[/news] 新建（SITE.md 七栏目之一）：倒序时间线，每条带日期与来源，仅转述官方渠道。
2026-10-09
[/contact] Description 由 162 字符截到 122（原超ONPAGE.md §2 的 155 上限）。
2026-10-09
[public/images] 官方美术规范化：统一置于 public/images/program/，重命名为语义化名称
       （hero-forest-camp.webp、section-{栏目}-{场景}.webp），原图以 source-*.jpg 留档；
       og 图归public/images/og/。
```
2026-10-09
[全站] 人工决策：去掉所有页面的 Updated: 可见戳（14 页：10 内容页 + 4 政策页移除
       <UpdatedStamp /> 调用与 import；组件文件保留并加注释说明恢复方式）。
       与 AGENT.md §3/§8 的「必须显示 Updated」冲突已记入 CONFLICTS.md C-09，待人工批准修订。
       影响面：sitemap.xml <lastmod> 与 routes.json.lastModified 均保留，机器可读出口未破坏。
       routes.json 未 bump——改动当日与现lastModified 同为 2026-10-09（SITEMAP.md：同日改动日期戳不变）。
2026-10-09
[部署] 首次部署至 Cloudflare Workers（@opennextjs/cloudflare），自定义域 emberville-guide.wiki
       绑定成功；VersionID 87ea680a-7a24-4f33-8edc-194ca3f85887。线上已核验：标题/H1/正文/
       表格/JSON-LD/sitemap(14 条)/robots.txt/背景图均正常。
2026-10-09
[wrangler.jsonc] 加 routes绑定裸域 custom_domain；www 不挂 Worker，跳转按 REDIRECT.md §2 在
       Cloudflare 面板配 Redirect Rules。绑定后 workers.dev 通道自动禁用。
2026-10-09
[open-next.config.ts] 显式设 incrementalCache: "dummy" 并加注释说明全静态站为何用它。
       AGENT.md §3 的 `staticAssetsIncrementalCache` 写法经实测不成立，见 CONFLICTS.md C-08。
2026-10-09
[src/content/navigation.json + src/app/layout.tsx] 顶部导航去掉分组标签（Start here / Explore /
       Launch / Builds），压成扁平单行 9 项并靠右对齐（站名在左）；navLinks 取代 navGroups。
       页脚 13 项全集不变。窄屏改横向滚动（不用 justify-end，避免溢出时靠左项滚不到）。
       同步 scripts/init_site.py 的 TPL_LAYOUT 与 make_navigation_json()。无读者可见内容改动，
       按 SITEMAP.md 不 bump 路由 lastModified。
2026-10-09
[docs/] 沉淀：新建 README.md 作docs 唯一入口（权威顺序 SITE.md > 实测 > AGENT.md > 其余 docs）；
       SITE.md 补全 9 条内容路由的层级与 URL（明确 /release-date、/countdown 与 /item-database
       的从属定位，新增「不在本结构内的东西」段）；重写 INTERNAL-LINKS.md 为 v1.2 并清除
       AION 2 模板站栏目（/classes /pets /tools /tier-list /crafting /dungeons /pvp 等）；
       ONPAGE.md / 栏目.md / CONTENT.md / SEO.md / KEYWORDS.md / SITEMAP.md / ADS.md 的
       例子与口径同步换成本站实际结构。裁决见 CONFLICTS.md C-10 / C-11。

### 本轮自检结果（2026-10-09）

| 项 | 结果 |
| --- | --- |
| TDK 长度（Title 45–60/ Desc ≤155） | 14 页全合规 |
| H1 唯一性 | 10 个内容页均恰好 1 个 |
| SSR 初始 HTML（Title/H1/正文/JSON-LD） | 全部存在，正文字符数 1639–4038，均 ≥1200 |
| 死链 | 0 |
| 广告白名单 | 内容页与政策页均无广告脚本（默认关闭） |
| `tsc --noEmit` | 通过 |
| `npm run build` | 通过，22 路由全静态 |
