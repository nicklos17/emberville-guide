import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Early Access Date 2026";
const route = getRoute("/release-date");

const FAQS: Faq[] = [
  {
    "q": "When exactly does Emberville unlock?",
    "a": "The Steam store page lists 27 October 2026 at 15:00 UTC. The countdown page runs to that timestamp and is corrected the moment an exact change is confirmed."
  },
  {
    "q": "Will Emberville be on last-generation consoles?",
    "a": "Nothing beyond the platforms listed above has been announced. This page updates if a last-generation version is confirmed."
  },
  {
    "q": "Can the Emberville release date change?",
    "a": "Yes. If the date moves, this page is corrected the same day with the new source; the old date is not silently left behind."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ReleaseDatePage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Release Date", href: route.path }]} />
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>Emberville Early Access Date and Launch Status</h1>
      <p className="answer">Emberville enters Early Access on October 27, 2026 at 15:00 UTC, per the Steam store page. A full release date has not been announced. This page tracks the confirmed platforms and every official announcement — sourced and dated.</p>
      <h2>Emberville early access date status</h2>
      <p>Emberville enters Early Access on October 27, 2026 at 15:00 UTC. The Steam store page lists a full-release date as not yet announced, so no 1.0 date is recorded here. The date and platform list were recorded at site setup and carry the verification date below; if anything moves, this page and the launch countdown are corrected the same day.</p>
      <h2>Emberville platforms and early access status</h2>
      <DataBlock source="Official — https://store.steampowered.com/app/2295170/Emberville" url="https://store.steampowered.com/app/2295170/Emberville" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead>
              <tr><th>Platform</th><th>Early Access</th><th>Full release</th></tr>
            </thead>
            <tbody>
              <tr><td>PC (Steam)</td><td>27 Oct 2026, 15:00 UTC</td><td>Not yet announced</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <p>Re-check the list against <a href="https://store.steampowered.com/app/2295170/Emberville" rel="noopener noreferrer">the official site</a> before launch — platform exclusivity and regional differences are corrected here with a source.</p>
      <h2>Emberville countdown</h2>
      <p>The <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">Emberville Early Access countdown</Link> runs to 27 October 2026, 15:00 UTC and flips to a launch-day state at zero — it never counts into negatives.</p>
      <p>More on Emberville Guide: <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">Emberville guides</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>.</p>

      <h2>Emberville early access date FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
