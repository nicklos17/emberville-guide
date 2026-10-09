import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// 部署到 Cloudflare Workers（AGENT.md §2，必须用 @opennextjs/cloudflare）
//
// incrementalCache 说明（AGENT.md §3）：
// 全站内容页 `revalidate = false`，全部静态预渲染，产物 HTML 落在 `.open-next/assets`，
// 由 assets binding 直接服务——预渲染页不经 Worker，省 Worker CPU，
// 避免 Workers 免费版触发 1102「Worker exceeded resource limits」。
//
// 这里保持默认的 "dummy"：本仓无运行时再验证需求（无 ISR / revalidate 秒数），
// 预渲染内容在 build 时就已固化，缓存层无需再写入。
//
// 若将来新增运行时取数页面（真 ISR），改成 R2 缓存：
//   incrementalCache: { type: "r2", bucketName: "<BUCKET>" }
// 并在 Dashboard 先开通 R2、设 NEXT_INC_CACHE_R2_BUCKET；高频页再考虑 revalidate = 300。
export default defineCloudflareConfig({
  incrementalCache: "dummy",
});