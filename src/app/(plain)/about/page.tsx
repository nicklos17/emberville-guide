import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";

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
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>About Emberville Guide</h1>
      <p className="answer">Emberville Guide is an independent fan project covering Emberville — what is confirmed, what is not, and where every claim comes from.</p>
      <h2>What Emberville Guide covers</h2>
      <p>The site tracks Emberville across <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">release date</Link>, <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">countdown</Link>, <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">item database</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">guides</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">builds</Link>. There are no user accounts, comments or newsletters — the site is informational only.</p>
      <h2>Editorial standards</h2>
      <p>Every number, date and code carries a source and the day it was verified. Rumors are not published. Community reports are labeled Community-reported until an official source confirms them, and rankings appear only after hands-on testing with the test conditions listed.</p>
      <h2>Independence</h2>
      <p>Emberville Guide is not affiliated with Cygnus Cross. No official logo is used, and official artwork appears only as officially released press material with attribution. Trademark ownership stays with the rights holders.</p>
      <h2>Contact</h2>
      <p>Corrections, tips and business questions go to support@emberville-guide.wiki — see the <Link href="/contact" title="Contact: Support &amp; Corrections | Emberville Guide">contact page</Link>.</p>
    </article>
  );
}
