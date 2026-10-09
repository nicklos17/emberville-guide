import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";
import { FaqList, type Faq } from "@/components/FaqList";
import { CountdownTimer } from "@/components/CountdownTimer";

const SEO_TITLE = "Emberville Early Access Countdown 2026";
const route = getRoute("/countdown");

const FAQS: Faq[] = [
  {
    "q": "What timezone does the Emberville countdown use?",
    "a": "It counts to 27 October 2026, 15:00 UTC. The displayed time is converted to your device's timezone."
  },
  {
    "q": "When will the full release date be announced?",
    "a": "The Steam store page currently lists Early Access only, with no 1.0 date. This countdown tracks the Early Access timestamp and is corrected the same day any date changes, with the source on the release date page."
  },
  {
    "q": "What happens when the countdown reaches zero?",
    "a": "It switches to a launch-day state; the release date page carries the live launch status from then on."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CountdownPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Countdown", href: route.path }]} />
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>Emberville Early Access Countdown</h1>
      <p className="answer">This countdown tracks the time until Emberville enters Early Access on 27 October 2026 at 15:00 UTC, the timestamp listed on the Steam store page. A full-release date has not been announced.</p>
      <CountdownTimer target="2026-10-27T15:00:00Z" launched={false} />
      <h2>Emberville early access countdown</h2>
      <p>The timer counts to 27 October 2026, 15:00 UTC and renders in your device's timezone, flipping to a launch-day state at zero — it never counts into negatives or shows a fake live state. If the developer moves the Early Access date, the countdown is corrected the same day with the source recorded on the release date page.</p>
      <h2>What happens at Early Access</h2>
      <p>On launch day, the <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">Emberville release date page</Link> switches to live launch status, and the item database, guides and builds begin filling. If a platform's unlock differs by region, the difference is listed there with sources.</p>
      <p>More on Emberville Guide: <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">Emberville guides</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>.</p>

      <h2>Emberville early access countdown FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
