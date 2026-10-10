import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville News & Updates: Announcements & Launches";
const route = getRoute("/news");

const NEWS_ITEMS: {
  date: string;
  title: string;
  summary: string;
  href?: string;
  linkTitle?: string;
  source: string;
  sourceUrl: string;
  internal: boolean;
}[] = [
  {
    date: "October 8, 2026",
    title: "Emberville demo dates for Steam Next Fest",
    summary: "The public demo is listed for October 19–26, ahead of PC Early Access on October 27.",
    href: "/news/emberville-demo",
    linkTitle: "Emberville Demo Dates, Content & Early Access Explained | Emberville Guide",
    source: "IGN demo-announcement trailer listing",
    sourceUrl: "https://www.ign.com/videos/emberville-official-demo-announcement-trailer-convergence-games-showcase-october-2026",
    internal: true,
  },
  {
    date: "July 16, 2026",
    title: "Gameplay feature reveal and development plans",
    summary: "Cygnus Cross outlined gameplay systems, cast additions, and its Early Access development approach.",
    source: "Cygnus Cross press release (hosted by GamesPress)",
    sourceUrl: "https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo",
    internal: false,
  },
  {
    date: "July 15, 2026",
    title: "PC Early Access date announced",
    summary: "IGN’s release-date trailer coverage reported October 27, 2026 for Early Access.",
    source: "IGN release-date trailer coverage",
    sourceUrl: "https://www.ign.com/videos/emberville-official-early-access-release-date-trailer",
    internal: false,
  },
  {
    date: "January 27, 2026",
    title: "Emberville announced for PC",
    summary: "IGN reported the initial PC announcement and the then-current Early Access window.",
    source: "IGN announcement report",
    sourceUrl: "https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley",
    internal: false,
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function NewsPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "News", href: route.path }]} />
      <h1>Emberville News and Updates</h1>
      <p className="answer">
        Find dated Emberville news and updates in one place, from release announcements and gameplay reveals to
        demo coverage. Each entry links to its source or to a focused Emberville Guide article when one is available.
      </p>

      <p>
        For system explainers rather than announcements, start with the <Link href="/guides" title={routeTitle("/guides")}>Emberville guides hub</Link>.
      </p>

      <h2>Latest Emberville news</h2>
      <ol className="m-0 list-none space-y-4 p-0">
        {NEWS_ITEMS.map((item) => (
          <li key={item.title} className="rounded-lg border border-line bg-surface p-4">
            <p className="mb-1 text-sm text-ink-muted">{item.date}</p>
            <h3 className="mt-0">
              {item.internal ? (
                <Link href={item.href!} title={item.linkTitle}>{item.title}</Link>
              ) : (
                item.title
              )}
            </h3>
            <p>{item.summary}</p>
            <p className="mb-0 text-sm text-ink-muted">
              Source: <a href={item.sourceUrl} rel="noopener noreferrer">{item.source}</a>
            </p>
          </li>
        ))}
      </ol>

      <p className="mt-6">
        For the broader planned launch timeline, see the <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>.
      </p>
    </AdArticle>
  );
}
