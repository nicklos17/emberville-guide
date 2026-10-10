import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Platforms: PS5, Switch & Console Status";
const route = getRoute("/platforms");

const FAQS: Faq[] = [
  {
    q: "Is Emberville coming to PS5 or Xbox?",
    a: "No console version is announced. The Steam and GOG product pages list Windows, and neither names a PlayStation or Xbox release. That is a status of “not announced”, not a statement that a console version is cancelled.",
  },
  {
    q: "When would a console version be announced?",
    a: "There is no announced date. The developer has described a PC Early Access launch on 27 October 2026; any console release would arrive as a separate announcement, so this page has nothing to count down to yet.",
  },
  {
    q: "Is there an Emberville mobile version?",
    a: "No mobile version is listed in the sources checked here. Steam and the official GOG product page list Windows only.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function PlatformsPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Platforms", href: route.path }]} />
      <h1>Where You Can Play Emberville: PS5, Switch and Console Status</h1>
      <p className="answer">
        Emberville is confirmed for PC only. The Steam store page and the official GOG product page both list
        Windows, and no PlayStation, Xbox, Switch or mobile version has been announced. That gives every console
        question — PS5, Switch, Switch 2 or Xbox — the same answer: not announced, and not ruled out either.
      </p>

      <h2>Emberville platforms: what is confirmed</h2>
      <p>
        The only confirmed platform is PC via Windows, sold on Steam and on GOG. Steam lists the game for Early
        Access on 27 October 2026 and shows a Windows system-requirements table; GOG’s official Emberville product
        page lists the same date and names Windows as its supported system. Neither page carries a console badge, a
        console release date or a mobile listing. Anything beyond Windows is therefore an open question rather than
        a scheduled release.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Platform</th><th scope="col">Status</th><th scope="col">What the cited source shows</th></tr></thead>
            <tbody>
              <tr><td>PC (Windows) — Steam</td><td>Confirmed</td><td>Store page lists Windows for the 27 October 2026 Early Access release</td></tr>
              <tr><td>PC (Windows) — GOG</td><td>Confirmed</td><td>Official GOG product page lists Windows and the same date</td></tr>
              <tr><td>PlayStation 5</td><td>Not announced</td><td>No PlayStation platform appears in the sources checked</td></tr>
              <tr><td>Xbox consoles</td><td>Not announced</td><td>No Xbox platform appears in the sources checked</td></tr>
              <tr><td>Nintendo Switch</td><td>Not announced</td><td>No Switch platform appears in the sources checked</td></tr>
              <tr><td>Nintendo Switch 2</td><td>Not announced</td><td>No Switch 2 platform appears in the sources checked</td></tr>
              <tr><td>Mobile (iOS / Android)</td><td>Not announced</td><td>No mobile store listing appears in the sources checked</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <p>
        For the release date, price status and Early Access scope that sit alongside the platform question, the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>{" "}
        keeps them in one place.
      </p>

      <h2>Emberville PS5 and Xbox status</h2>
      <p>
        There is no PS5 or Xbox announcement. The Steam and GOG pages are Windows listings, which is the platform
        evidence that actually exists; a console icon or a controller prompt in a screenshot is not a platform
        announcement. Console questions tend to appear for two reasons: the genre has many console releases, and the
        original announcement framed the game around a PC Early Access launch, which leaves the console question
        untouched rather than answered. Neither reason is a developer statement about future platforms.
      </p>
      <p>
        The useful distinction is between “announced for PC” and “only ever on PC”. A Windows-only store listing
        describes the current confirmed platform; it does not close the door on a later console edition, because a
        separate announcement would be needed to create one. Treat any console release date you see outside an
        official channel as unverified until the developer or the platform holder publishes it.
      </p>

      <h2>Emberville Switch and Switch 2 status</h2>
      <p>
        No Nintendo Switch or Switch 2 version is announced, and the same Windows-only evidence applies. The point
        worth stating plainly is that “not announced” is not the same as “will not happen”. A Switch 2 edition
        would require its own announcement with its own date, and none exists in the sources checked on this page.
        Anyone reading a Switch release date somewhere else should look for the original announcement behind it
        before treating it as real.
      </p>

      <h2>Emberville mobile</h2>
      <p>
        Emberville has no announced mobile version. The cited store pages list Windows, so a phone or tablet release
        is outside the confirmed platform set and outside the confirmed roadmap. This section is short on purpose:
        there is no mobile date, price or feature list to report, and inventing one would misrepresent the sources.
      </p>

      <h2>How this page updates</h2>
      <p>
        This page tracks one event: a platform announcement from the developer or a platform holder. When that
        happens, the new platform moves from “Not announced” to “Confirmed”, with the announcement date and source
        recorded beside it. Until then, the table above reflects the Steam and GOG listings verified on 2026-10-10.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/platforms/multiplayer" title={routeTitle("/platforms/multiplayer")}>Emberville multiplayer and co-op status</Link></li>
        <li><Link href="/price" title={routeTitle("/price")}>Emberville price and purchase model</Link></li>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news and dated announcements</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki: setting, combat and systems</Link></li>
      </ul>

      <h2>Emberville platforms FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Platform status was verified on <b>2026-10-10</b> against the Steam store page and the official GOG product
        page. Confirmed platform: PC (Windows) on Steam and GOG. PlayStation, Xbox, Switch, Switch 2 and mobile:
        not announced in those sources.
      </p>
    </AdArticle>
  );
}