import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// 内容页 RSS；政策页不入 feed。pubDate 取 routes.json lastModified（SITEMAP.md 单一来源）
export const dynamic = "force-static";

const POLICY_PATHS = ["/about", "/contact", "/privacy", "/terms"];

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function GET(): Response {
  const items = ROUTES.filter((r) => r.pageLive !== false && !POLICY_PATHS.includes(r.path) && r.path !== "/");
  const lastBuild = ROUTES.reduce(
    (max, r) => (r.lastModified > max ? r.lastModified : max),
    ROUTES[0]?.lastModified ?? "1970-01-01",
  );
  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0">',
    "<channel>",
    `<title>${esc(SITE.name)}</title>`,
    `<link>${SITE.url}</link>`,
    `<description>${esc(SITE.tagline)}</description>`,
    `<lastBuildDate>${new Date(lastBuild).toUTCString()}</lastBuildDate>`,
    ...items.flatMap((r) => [
      "<item>",
      `<title>${esc(r.title)}</title>`,
      `<link>${SITE.url}${r.path === "/" ? "" : r.path}</link>`,
      `<description>${esc(r.description)}</description>`,
      `<pubDate>${new Date(r.lastModified).toUTCString()}</pubDate>`,
      "</item>",
    ]),
    "</channel>",
    "</rss>",
  ].join("\n");
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
