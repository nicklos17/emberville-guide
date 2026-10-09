import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

// 面包屑与 BreadcrumbList JSON-LD 同源（DESIGN.md）；首页不出面包屑（栏目.md §6）
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(items)) }} />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm">
        <ol className="flex flex-wrap items-center gap-1">
          {items.map((item, i) => (
            <li key={item.href} className="flex items-center gap-1">
              {i > 0 && (
                <span aria-hidden="true" className="text-ink-muted">/</span>
              )}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-ink-muted">{item.name}</span>
              ) : (
                <Link href={item.href} title={item.name}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
