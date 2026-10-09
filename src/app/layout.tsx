import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { DISCLAIMER, SITE } from "@/config/site";
import { routeTitle } from "@/lib/routes";
import { webSiteSchema } from "@/lib/schema";
import navJson from "@/content/navigation.json";
import "./globals.css";

// 字体：全站统一系统 UI 无衬线，零字体文件请求。
// C-12：原 Silkscreen 像素体已下线——深底上「像素字 + 全大写 + 宽字距」三者叠加
// 产生明显光晕与边缘颤动，长文阅读累眼；像素体在 17px 正文与移动端小字号下
// 可读性也差。DESIGN.md 原「像素体不用于正文」的限制升级为「像素体全站下线」。
// 见 docs/CONFLICTS.md C-12。

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export const viewport: Viewport = { themeColor: "#101C23" };

type NavLink = { label: string; href: string };

// 顶部导航是扁平单行链接：分组标签（Start here / Explore / Launch / Builds）在视觉上
// 只增加噪音、不增加信息，且与页脚全集高度重复。完整站点地图由页脚承担
// （INTERNAL-LINKS.md §7「导航做分组，页脚做全集」的分工在扁平化后依然成立）。
const NAV_LINKS = navJson.navLinks as NavLink[];
const FOOTER_LINKS = navJson.footerLinks as NavLink[];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* 全站 WebSite + SearchAction（SEO.md；JSON-LD 必须在初始 HTML） */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema()) }} />
        <header className="border-b border-line bg-canvas-deep">
          <div className="mx-auto flex max-w-6xl items-center gap-x-6 px-4 py-3">
            <Link href="/" title={SITE.name} className="shrink-0 text-lg font-bold tracking-tight text-ink no-underline hover:text-accent">
              {SITE.name}
            </Link>
            {/* 单行扁平导航，整体靠右（ml-auto 把导航推到行尾）。
                窄屏横向滚动而非换行；不用 justify-end 是因为溢出时靠左的项会滚不到。 */}
            <nav
              aria-label="Primary"
              className="ml-auto flex min-w-0 shrink items-center gap-x-5 overflow-x-auto text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  title={routeTitle(link.href)}
                  className="text-ink-muted shrink-0 whitespace-nowrap no-underline hover:text-primary"
                >
                  {link.label}
                </Link>
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
