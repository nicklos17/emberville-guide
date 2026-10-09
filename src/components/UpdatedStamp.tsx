// 全站统一的 Updated: 戳（DESIGN.md）；日期来自 routes.json（SITEMAP.md 单一来源）
export function UpdatedStamp({ lastModified }: { lastModified: string }) {
  return <p className="text-xs tracking-wide text-ink-muted">Updated: {lastModified}</p>;
}
