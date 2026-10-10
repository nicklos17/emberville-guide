import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SEO_TITLE = "About the Unofficial Emberville Fan Hub";
const route = getRoute("/about");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function AboutPage() {
  return (
    <article className="article">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "About", href: route.path }]} />
      <h1>About Emberville Guide</h1>
      <p className="answer">Emberville Guide is an independent fan project covering Emberville — what is confirmed, what is not, and where every claim comes from.</p>
      <h2>What Emberville Guide covers</h2>
      <p>The site tracks Emberville across <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">release date</Link>, <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">countdown</Link>, <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">item database</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">guides</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">builds</Link>. There are no user accounts, comments or newsletters — the site is informational only.</p>
      <h2>Sources and methodology</h2>
      <p>For source choices, verification practices and how in-game findings are presented, see the <Link href="/about/methodology" title={`${routeTitle("/about/methodology")} | Emberville Guide`}>sources and methodology page</Link>.</p>
      <h2>Independence</h2>
      <p>Emberville Guide is not affiliated with Cygnus Cross. No official logo is used, and official artwork appears only as officially released press material with attribution. Trademark ownership stays with the rights holders.</p>
      <h2>Site log</h2>
      <p>Build notes for the site itself — the news page only carries announcements about Emberville.</p>
      <p>
        <b>2026-10-09</b> — Recorded the confirmed Early Access date and time from the Steam store
        page, and published the wiki index structure (weapons, items, characters, bosses).<br />
        <b>2026-10-08</b> — Set the site structure and sourcing policy: every page carries its source
        and verification date, and anything traced to community testing is labelled as such rather
        than presented as fact.
      </p>
      <h2>Contact</h2>
      <p>Corrections, tips and business questions go to support@emberville-guide.wiki — see the <Link href="/contact" title="Contact: Support &amp; Corrections | Emberville Guide">contact page</Link>.</p>
    </article>
  );
}
