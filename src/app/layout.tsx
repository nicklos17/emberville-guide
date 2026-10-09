import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { DISCLAIMER, SITE } from "@/config/site";
import { routeTitle } from "@/lib/routes";
import { webSiteSchema } from "@/lib/schema";
import navJson from "@/content/navigation.json";
import localFont from "next/font/local";
import "./globals.css";

// 自托管字体，最多 2 个字重（DESIGN.md 性能预算）；禁外链 Google Fonts CDN。
// Silkscreen = 像素体，呼应官方截图内的像素字体（docs/CONFLICTS.md C-07）。
// 仅用于标题/标签；正文长段落用 body 的系统无衬线体，保证可读性。
const silkscreen = localFont({
  src: [
    { path: "../../public/fonts/silkscreen-400.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/silkscreen-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-silkscreen",
});

export const metadata: Metadata = { metadataBase: new URL(SITE.url) };

export const viewport: Viewport = { themeColor: "#0E181E" };

type NavLink = { label: string; href: string };
type NavGroup = { label: string; links: NavLink[] };
const NAV_GROUPS = navJson.navGroups as NavGroup[];
const FOOTER_LINKS = navJson.footerLinks as NavLink[];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={silkscreen.variable}>
      <body>
        {/* 全站 WebSite + SearchAction（SEO.md；JSON-LD 必须在初始 HTML） */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }} />
        <header className="border-b border-line bg-canvas-deep">
          <div className="mx-auto flex max-w-6xl flex-wrap items-baseline gap-x-6 gap-y-2 px-4 py-3">
            <Link href="/" title={SITE.name} className="font-display text-lg font-bold text-ink no-underline hover:text-accent">
              {SITE.name}
            </Link>
            {/* 导航按用户任务分组，与页脚全集分工（栏目.md §9） */}
            <nav aria-label="Primary" className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="flex items-baseline gap-3">
                  <span className="font-display text-xs tracking-widest text-ink-dim uppercase">{group.label}</span>
                  {group.links.map((link) => (
                    <Link key={link.href} href={link.href} title={routeTitle(link.href)}
                      className="text-ink-muted no-underline hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </header>
        {children}
        <footer className="mt-16 border-t border-line bg-canvas-deep">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm">
            <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link key={link.href} href={link.href} title={routeTitle(link.href)}>
                  {link.label}
                </Link>
              ))}
            </nav>
            {/* 页脚常驻免责声明（AGENT.md §0.1，不可省略） */}
            <p className="mt-5 text-ink-muted">{DISCLAIMER}</p>
            {/* 官方美术作底时的 © 署名（AGENT.md §0.1） */}
            <p className="mt-1 text-ink-dim">
              Background and section imagery: official Emberville screenshots, © Cygnus Cross.
            </p>
            <p className="mt-1 text-ink-muted">
              Contact: <a href={"mailto:" + SITE.contactEmail}>{SITE.contactEmail}</a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
