import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Platforms: PC Now, Consoles Planned for 1.0";
const route = getRoute("/platforms");

const FAQS: Faq[] = [
  {
    q: "Which consoles does the 1.0 plan cover?",
    a: "The studio writes “console releases” without naming a platform. PlayStation 5, Xbox and Nintendo Switch all fall inside that general statement, but none is named, so no individual console can be reported as a confirmed version.",
  },
  {
    q: "When would a console version arrive?",
    a: "No date is announced. Console versions are tied to the 1.0 release, and 1.0 has no date either: the studio’s earlier estimate was roughly eighteen months from the Early Access launch, a period it said community feedback could extend.",
  },
  {
    q: "Is there an Emberville mobile version?",
    a: "No mobile version is announced. The 1.0 plan names console releases only, so a phone or tablet edition is not part of it, and the Steam and GOG listings remain Windows only.",
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
      <h1>Emberville ships on PC first, with console versions planned for 1.0</h1>
      <p className="answer">
        Emberville launches on PC through Steam and GOG on 7 January 2027, and console versions are planned for the
        1.0 release. The studio’s wording is “Console versions are planned for our 1.0 release” — no platform is
        named and no date is attached, so PS5, Xbox and Switch are each covered by a general plan rather than a
        confirmed port.
      </p>

      <h2>Emberville platforms: what is confirmed</h2>
      <p>
        PC is the only platform with a dated release. Steam lists Emberville for Early Access with a Windows
        system-requirements table, and the official GOG product page names Windows as its supported system with the
        same release. The date itself has moved once: the studio postponed the October 27, 2026 launch to
        January 7, 2027 on October 26, and that postponement touches no platform. Beyond the PC listing, the picture
        changed with the 19 October 2026 Early Access announcement: console versions moved from “not mentioned” to
        “planned for 1.0”. That is a statement of intent from the developer, not a storefront listing — no console
        page, wishlist or pre-order exists for the game.
      </p>
      <DataBlock
        source="Steam store page, Early Access announcement and delay announcement"
        url="https://store.steampowered.com/app/2295170/Emberville/"
        verified="2026-10-28"
      >
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Platform</th><th scope="col">Status</th><th scope="col">What the cited source shows</th></tr></thead>
            <tbody>
              <tr><td>PC (Windows) — Steam</td><td>Confirmed</td><td>Store page lists Windows for the Early Access release, now dated January 7, 2027</td></tr>
              <tr><td>PC (Windows) — GOG</td><td>Confirmed</td><td>Official GOG product page lists Windows and the same release</td></tr>
              <tr><td>Consoles — overall</td><td>Planned for 1.0</td><td>“Console releases, bringing Emberville beyond PC”, listed among the 1.0 additions</td></tr>
              <tr><td>PlayStation 5</td><td>Covered by the 1.0 plan, not named</td><td>No PlayStation version, date or storefront listing is named</td></tr>
              <tr><td>Xbox consoles</td><td>Covered by the 1.0 plan, not named</td><td>No Xbox version, date or storefront listing is named</td></tr>
              <tr><td>Nintendo Switch / Switch 2</td><td>Covered by the 1.0 plan, not named</td><td>No Nintendo version, date or storefront listing is named</td></tr>
              <tr><td>Mobile (iOS / Android)</td><td>Not announced</td><td>The 1.0 plan names console releases only</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <p>
        For the release date, price and Early Access scope that sit alongside the platform question, the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>{" "}
        keeps them in one place.
      </p>

      <h2>The 1.0 console plan, in the studio’s words</h2>
      <p>
        Two passages in the 19 October 2026 announcement carry the console statement. The roadmap section lists three
        major additions for 1.0: “Co-op multiplayer, allowing players to experience Emberville together”, “Modding
        support, opening new possibilities for the community”, and “Console releases, bringing Emberville beyond PC”.
        The FAQ then answers the platform question directly: “Early Access launches on PC. Console versions are
        planned for our 1.0 release.”
      </p>
      <p>
        The same section attaches a caveat that matters when reading either line: “These are part of our development
        plans, and we’ll communicate progress and any changes as development moves forward.” A planned 1.0 addition is
        therefore a stated intention with an explicit change clause, which is a weaker commitment than the dated PC
        release but a stronger one than the silence that preceded it.
      </p>

      <h2>Emberville PS5 and Xbox status</h2>
      <p>
        No PS5 or Xbox version is named. The console plan is written at the level of “console releases”, which covers
        PlayStation and Xbox without committing to either, and no PlayStation Store or Microsoft Store page exists for
        the game. A reader searching for a PS5 release date should treat the plan as the answer to “is a console
        version coming” and as no answer at all to “which console, and when”.
      </p>
      <p>
        Two things commonly get read as console evidence and are not: a controller prompt in a screenshot, and the
        confirmed controller support at launch. Controller support describes the input device on PC, which the studio
        lists for both combat and menu navigation, including a note that an on-screen keyboard will not be available
        initially. It says nothing about which console a port would target.
      </p>

      <h2>Emberville Switch and Switch 2 status</h2>
      <p>
        No Nintendo Switch or Switch 2 version is named, and the same general plan applies. Switch 2 is the platform
        most often assumed for a late port because it is the newest hardware, but the announcement does not mention
        Nintendo at all, and assuming it would go beyond the source. If a Switch version is confirmed, it will arrive
        as its own announcement with its own date.
      </p>

      <h2>Emberville mobile</h2>
      <p>
        Emberville has no announced mobile version, and the 1.0 plan does not change that. The plan is specific about
        consoles and silent about phones and tablets, so “planned for 1.0” should not be stretched to cover mobile.
        The cited store pages list Windows only.
      </p>

      <h2>How this page updates</h2>
      <p>
        This page tracks two events: a console platform being named, and a console release date being set. The first
        would move a row from “Covered by the 1.0 plan, not named” to a named platform; the second would add the date
        beside it. Until then, the table reflects the Steam and GOG listings plus the 19 October 2026 announcement,
        verified on 2026-10-22.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/platforms/multiplayer" title={routeTitle("/platforms/multiplayer")}>Emberville co-op and multiplayer status</Link></li>
        <li><Link href="/price" title={routeTitle("/price")}>Emberville price and purchase model</Link></li>
        <li><Link href="/news/emberville-demo-launch" title={routeTitle("/news/emberville-demo-launch")}>Emberville Next Fest demo and Early Access announcement</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki: setting, combat and systems</Link></li>
      </ul>

      <h2>Emberville platforms FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Platform status was verified on <b>2026-10-28</b> against the Steam store page, the official GOG product page,
        the 19 October 2026 Early Access announcement and the 26 October 2026 delay announcement. Confirmed: PC
        (Windows) on Steam and GOG, dated January 7, 2027. Planned for 1.0: console releases, platform unnamed. Not
        announced: mobile.
      </p>
    </AdArticle>
  );
}
