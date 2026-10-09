// 全站统一的 Updated: 戳（DESIGN.md）；日期来自 routes.json（SITEMAP.md 单一来源）
//
// 2026-10-09 起全站停用：14 个页面均已移除 <UpdatedStamp /> 调用。
// 组件保留以便恢复——恢复时注意 AGENT.md §3 与 §8 验收清单要求
// 「页面必须显示 Updated: YYYY-MM-DD 且与 dateModified 一致」，
// 重新启用需同时处理该冲突（见 docs/CONFLICTS.md C-09）。
//
// 未接线的部分（停用不影响）：JSON-LD 目前没有 Article.dateModified，
// 日期的唯一出口是 sitemap.xml 的 <lastmod>（取自 routes.json，仍在）。
export function UpdatedStamp({ lastModified }: { lastModified: string }) {
  return <p className="text-xs tracking-wide text-ink-muted">Updated: {lastModified}</p>;
}