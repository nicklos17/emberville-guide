# REDIRECT.md — 跳转规则（HTTP→HTTPS 与 www→裸域）

> 适用范围：本模板部署的**所有站点**（部署形态一致，见 `AGENT.md` §2），执行层位统一在
> **Cloudflare 面板**，不在代码层。新站开站后照本文档逐项配置即可。
> 何时需要：SEO 审计发现 `http://` 变体或 `www.` 变体被收录、实测返回 200 无跳转时；
> 无发现也建议开站时主动配好（成本低，避免日后收录污染）。
> 触发背景：2026-10-06 源站 aion2codex.wiki 的 SEO 审计 S1 项（GSC 已收录 `http://` 变体）
> 沉淀为本文档，域名与示例已通用化。

## 0. 为什么不在代码层做（决策记录）

代码层方案（Next 16 `src/proxy.ts`，按 `x-forwarded-proto` 301）已试建并**撤销**，原因对本模板所有站点成立：

- 本模板的部署形态是 `@opennextjs/cloudflare`：预渲染 HTML 页（全部内容页，`revalidate = false`）在**浏览器导航请求**（`Accept: text/html`）下由 Cloudflare **assets bucket 直接服务，不经过 Worker**——middleware 对最需要 301 的页面根本拦不到。
- 本地验证的假象：`wrangler dev` + `curl -I`（HEAD、无 `Accept: text/html`）时资产未命中、请求落到 Worker，能测出 301——这只证明 middleware 本身工作，不证明它覆盖了线上流量。
- 静态资产（`_next/static`、图片）同样绕过 Worker。
- 结论：**边缘层（CF 面板）是唯一能全量覆盖的层位**，且零代码、零 Worker CPU（Workers 免费版的请求数与 CPU 预算都不受影响）。

> 若未来某站改为运行时渲染（真 ISR / 动态路由），可对该站重新评估代码层方案；
> 在此之前任何站都不要再往代码里塞跳转 middleware。

## 1. HTTP → HTTPS（301）

1. Cloudflare Dashboard → 选域 `{{域名}}`
2. **SSL/TLS → Edge Certificates**
3. 打开 **Always Use HTTPS**

效果：所有 `http://{{域名}}/*` 边缘 301 到 `https://`，含静态资产，路径与查询参数原样保留。

可选（同一页）：开启 **HSTS**（`max-age` 建议 6–12 个月起步，`includeSubDomains`；没有需要排除的 http 子域时再加 `preload`）。注意 HSTS 一旦下发较难撤回，站点稳定全 https 后再开不迟。

## 2. www → 裸域（301）

前提：Worker 自定义域挂的是裸域（`wrangler.jsonc` routes: `{{域名}}`, `custom_domain: true`），www 无记录。

### 第一步：给 www 一条可代理的 DNS 记录

**DNS → Records → Add record**

| 字段 | 值 |
| --- | --- |
| Type | `CNAME` |
| Name | `www` |
| Target | `{{域名}}` |
| Proxy status | **Proxied（橙云）** |

证书不用操心：Universal SSL 默认覆盖 zone apex + 一级子域（`*.{{域名}}`），www 记录激活后自动有证书。

### 第二步：建跳转规则

**Rules → Redirect Rules → Create rule**（可直接选模板 "Redirect WWW to APEX"）

- **If**：Hostname equals `www.{{域名}}`
- **Then**：Dynamic redirect
  - 表达式：`concat("https://{{域名}}", http.request.uri.path)`
  - Status code：**301**
  - 勾选 **Preserve query string**

## 3. ⚠️ 不要做的事

- **不要**把 `www.{{域名}}` 加成 Worker Custom Domain——那会让 www 直接吐内容（双域同内容，制造重复收录），跳转必须靠 Redirect Rule。
- **不要**在代码里再放一个 http→https 的 middleware/proxy 当"双保险"——它对预渲染页无效（见 §0），只会留下"已修"的假象。
- 不要用 Page Rules（官方已标记 legacy），统一用 Redirect Rules。

## 4. 生效后的行为矩阵

| 请求 | 结果 |
| --- | --- |
| `http://{{域名}}/<任意路径>` | 301 → `https://{{域名}}/<同路径>` |
| `http://{{域名}}/_next/static/...` | 301 → `https://...`（Always Use HTTPS 覆盖） |
| `https://www.{{域名}}/<路径>?x=1` | 301 → `https://{{域名}}/<路径>?x=1` |
| `http://www.{{域名}}/<路径>` | 301 → `https://{{域名}}/<路径>`（规则先于 Always Use HTTPS 时一步到位，最多两跳） |
| `https://{{域名}}/<路径>` | 200，直达 Worker/资产 |

## 5. 验证（部署后执行）

`<路径>` 换成该站一个真实内容页路径（任选首页之外的一级栏目页即可）：

```bash
DOMAIN={{域名}} PATH=<路径>
curl -sI "http://$DOMAIN$PATH"              | grep -i "^HTTP\|^location"   # 期望 301 + https location
curl -sI "https://www.$DOMAIN$PATH"         | grep -i "^HTTP\|^location"   # 期望 301 + 裸域 location
curl -sI "https://www.$DOMAIN$PATH?x=1"     | grep -i "^HTTP\|^location"   # 期望 301，location 含路径+query
curl -sI "https://$DOMAIN$PATH"             | grep -i "^HTTP"              # 期望 200
```

GSC 侧：地址检查工具抽查 http / www 变体确认 301；之后无需额外操作，旧记录会随重抓自然收敛。

执行后在**该站**的 `docs/CHANGELOG.md` 记一行（含当日），审计发现项同步回填 `docs/SEO-AUDIT.md` 整改结果。
