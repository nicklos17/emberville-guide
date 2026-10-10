import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Countdown 2026: Date vs Unlock Time";
const route = getRoute("/countdown");

const FAQS: Faq[] = [
  {
    q: "Does the Emberville countdown know the launch hour?",
    a: "No. Steam and GOG list 27 October 2026 as a calendar date. Neither publishes an unlock hour or a timezone, so any hour shown elsewhere is an assumption rather than an announcement.",
  },
  {
    q: "What does the timer on this site count to?",
    a: "It counts to the start of 27 October 2026 in UTC. That is a display convention for the beginning of the announced calendar day, not a confirmed store unlock instant.",
  },
  {
    q: "Where is the price, platform and scope detail?",
    a: "On the release information page, which tracks the announced date, disclosed platforms, price status and Early Access scope in one table.",
  },
  {
    q: "Will the date change?",
    a: "The date recorded here is the one shown on the Steam and GOG listings checked on 2026-10-10. If a listing changes, this page should be rechecked against that source.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CountdownPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Countdown", href: "/countdown" }]} />
      <h1>What the Emberville Countdown Actually Counts</h1>
      <p className="answer">
        The Emberville countdown can only count to a calendar day. Steam and GOG list 27 October 2026, but neither
        publishes an unlock hour, so a timer built on that date marks the start of the day rather than the moment
        the game becomes purchasable.
      </p>

      <div className="my-6 rounded-lg border border-line bg-surface p-6">
        <p className="mb-2 text-xs font-medium tracking-wide text-ink-dim">Announced Early Access calendar date</p>
        <p className="text-3xl font-bold text-white">27 October 2026</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Date only. The listing gives a calendar day, with the launch hour and timezone unannounced. Treat this
          panel as a calendar reference, not as a store availability signal.
        </p>
      </div>

      <h2>What an Emberville countdown can and cannot measure</h2>
      <p>
        A calendar date answers one question: the day the developer plans to open Early Access. It leaves the
        operational details open — when the store button becomes active, when a download starts, and whether
        availability is simultaneous across regions. Publishing a specific hour would turn an unsupported guess
        into false precision, so this page keeps the announced day as a plain date value.
      </p>
      <p>
        The same limit applies to timezone conversion. Converting a date into local times only works when there is
        a source time to convert; with a date alone, a converted “launch hour” implies knowledge the listing does
        not have. For the full status table covering date, platform, price and scope, use the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville release information page</Link>.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Question</th><th scope="col">Confirmed answer</th><th scope="col">Boundary</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>27 October 2026</td><td>A calendar day; the unlock hour is unannounced</td></tr>
              <tr><td>Store context</td><td>Steam and GOG product listings</td><td>Both list Windows; no console platform is confirmed</td></tr>
              <tr><td>Full release date</td><td>Not announced</td><td>The developer’s development estimate is separate from a 1.0 date</td></tr>
              <tr><td>Countdown meaning</td><td>Date milestone only</td><td>Marks the calendar day, not the time the game becomes available</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>How the Emberville date was announced</h2>
      <p>
        IGN’s January 27 announcement report described Emberville as targeting PC Early Access in Summer 2026.
        IGN’s July 15 trailer coverage then reported the specific October 27 date, and the developer’s July 16
        press release repeated that target. Steam and GOG now both display October 27, 2026 on their product
        pages. Each later dated announcement supersedes the earlier seasonal window.
      </p>
      <DataBlock source="IGN announcement report" url="https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley" verified="2026-10-10">
        <p>IGN’s January 27 announcement report described Emberville as targeting PC Early Access in Summer 2026.</p>
      </DataBlock>
      <DataBlock source="IGN release-date trailer coverage" url="https://www.ign.com/videos/emberville-official-early-access-release-date-trailer" verified="2026-10-10">
        <p>IGN’s July 15 trailer coverage reported the specific October 27 Early Access date, superseding the earlier seasonal window.</p>
      </DataBlock>
      <DataBlock source="GOG product page" url="https://www.gog.com/en/game/emberville" verified="2026-10-10">
        <p>GOG’s current product listing also displays October 27, 2026, and does not display an unlock hour in the product details checked here.</p>
      </DataBlock>

      <h2>Why the Emberville countdown points to a date</h2>
      <p>
        The announced date gives readers a stable reference for planning and for checking later updates, even while
        the hour stays open. Keeping the date separate from a launch instant preserves the distinction between the
        public target day and a store’s operational availability: when the displayed date arrives, the date alone
        does not prove the store is ready. Anyone who needs to know whether access is live should check the store
        listing itself rather than a calendar panel.
      </p>
      <p>
        Early Access is also a milestone distinct from version 1.0. Cygnus Cross describes the planned starting
        point as a fully playable experience with substantial content and meaningful updates, and estimates roughly
        eighteen months toward what it calls the complete experience, noting that feedback may extend the period.
        That estimate is not a scheduled full-release date. The{" "}
        <Link href="/news" title={routeTitle("/news")}>Emberville news page</Link> tracks dated announcements as
        they are published.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki: setting and gameplay systems</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville pre-launch systems guide</Link></li>
      </ul>

      <h2>Emberville countdown FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Sources were checked on <b>2026-10-10</b>. The accurate headline for this page is therefore a date:
        <b> 27 October 2026</b>, with the release hour still unannounced.
      </p>
    </AdArticle>
  );
}
