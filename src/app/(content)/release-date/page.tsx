import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Release Date & Early Access: Oct 27, 2026"
const route = getRoute("/release-date");

const FAQS: Faq[] = [
  {
    q: "When is Emberville's Early Access release date?",
    a: "The Steam store page lists 27 October 2026. It does not give a precise unlock time.",
  },
  {
    q: "What time does Emberville unlock?",
    a: "No unlock hour has been announced. The convention table above projects the usual Steam release hour, 10:00 AM Pacific (about 17:00 UTC, early on 28 October in Beijing), onto the announced date. That figure is a projection from platform convention, not an official time; on launch day the Steam page counter is the authority.",
  },
  {
    q: "Is Emberville co-op or multiplayer?",
    a: "No. Steam lists Emberville as Single-player, and neither the Steam store page nor the GOG listing names any co-op or online mode. Rescuing villagers and rebuilding the town are things you do alone in Early Access; a rescue theme is not a multiplayer feature.",
  },
  {
    q: "Is Emberville on PS5 or Switch?",
    a: "Console versions are not announced. Steam and GOG list Windows PC only, and the developer has named no PS5, Xbox, Switch or mobile edition. The platforms page on this site tracks each console's status in detail.",
  },
  {
    q: "When will the full release arrive?",
    a: "A specific 1.0 date is not announced. The developer estimates approximately eighteen months to reach its intended complete experience, and says community feedback may extend that period.",
  },
  {
    q: "How much does Emberville cost?",
    a: "A specific price is not announced on the Steam store page as of 2026-10-10.",
  },
  {
    q: "Does Emberville have a GOG listing as well as Steam?",
    a: "Yes. Steam and the official GOG product page both list Emberville for October 27, 2026; GOG identifies its supported system as Windows.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ReleaseDatePage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Release Date", href: route.path }]} />
      <h1>Emberville Release Date and Early Access Details</h1>
      <p className="answer">
        Emberville is planned to enter Early Access on 27 October 2026. The Steam and GOG product pages give a
        calendar date; the exact unlock time, full-release date and specific price all remain unannounced. The table
        below separates confirmed information from those open items, then summarizes the Early Access scope,
        developer roadmap notes and minimum PC requirements, with developer estimates clearly marked.
      </p>

      <h2>Release information at a glance</h2>
      <p>
        The date shown by Steam and GOG is the only specific launch date recorded here. “Early Access” and “full release”
        are different milestones: the former is the planned public release stage, while a 1.0 date remains
        unannounced. Likewise, the Steam and GOG product listings confirm the Windows store context, distinct from
        availability on an unlisted storefront or a console. Where the source omits a value, this page uses “Not
        announced” rather than calculating or inferring one.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Item</th><th scope="col">Confirmed status</th><th scope="col">What that means</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>27 October 2026</td><td>Calendar date published by Steam; the exact unlock time stays unannounced</td></tr>
              <tr><td>Full release / 1.0 date</td><td>Unannounced</td><td>The complete version's date stays unpublished</td></tr>
              <tr><td>Platform</td><td>Windows (Steam and GOG)</td><td>Steam and the official GOG product page both list Windows; a console platform stays unconfirmed</td></tr>
              <tr><td>Price</td><td>Unannounced</td><td>The developer describes its pricing approach while leaving the specific amount unlisted</td></tr>
              <tr><td>Mode</td><td>Single-player</td><td>Listed game mode; this source lists single-player only</td></tr>
              <tr><td>Early Access experience</td><td>Fully playable experience with substantial content; meaningful updates planned</td><td>Developer's description of the intended starting scope and update approach</td></tr>
              <tr><td>Purchase and monetization</td><td>Developer says one-time purchase and no microtransactions</td><td>Price may be discounted during Early Access; a specific amount remains unannounced</td></tr>
              <tr><td>Estimated development period</td><td>Approximately 18 months</td><td>Estimate toward the developer's complete experience; feedback may extend it</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Steam and GOG listings cross-check the release date</h2>
      <p>
        The Steam product page and GOG’s official Emberville product page both list 27 October 2026. GOG’s page
        separately identifies Windows as its supported system and provides a GOG offline-installer option; those
        are storefront details, distinct from proof that the game is currently playable before its listed date.
        IGN’s July 15 trailer coverage independently reported the same Early Access date after the initial January
        announcement had described a Summer 2026 window. The dated announcement history is more informative than
        repeating one store capsule: the target became a specific October day in the July release-date announcement.
      </p>
      <DataBlock source="GOG product page" url="https://www.gog.com/en/game/emberville" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">GOG listing detail</th><th scope="col">Displayed information</th></tr></thead>
            <tbody>
              <tr><td>Release date</td><td>October 27, 2026</td></tr>
              <tr><td>Platform</td><td>Windows</td></tr>
              <tr><td>GOG distribution</td><td>GOG describes DRM-free play and an optional offline installer</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <DataBlock source="IGN release-date trailer coverage" url="https://www.ign.com/videos/emberville-official-early-access-release-date-trailer" verified="2026-10-10">
        <p>IGN’s July 15 item reports the October 27 Early Access date and names Doug Cockle, Alex Jordan, and Jane Perry among the featured voice actors.</p>
      </DataBlock>

      <h2>What to expect from Early Access</h2>
      <p>
        Cygnus Cross describes the planned Early Access build as a fully playable experience containing substantial
        content, with meaningful updates during development. That wording describes the developer's intended
        scope, distinct from a promise that every planned 1.0 feature will already be present on the first day.
        Players should distinguish the current Early Access release from the developer's longer-term plan,
        particularly when reading lists of future features.
      </p>
      <p>
        The game's announced premise and systems include single-player exploration of the Vitromotus, action
        combat, rescuing survivors, rebuilding Emberville and a range of crafting and home-building activities.
        The player character wakes without memories in a magical underground prison. Kymia, described as coming
        from emotion, is connected to prisoners returning to life. Exploration includes tunnels, ruins, settlements,
        unusual biomes and monsters. The listing describes these broad pillars while leaving the complete location
        catalogue and the numbered list of available quests and items unpublished.
      </p>
      <p>
        Controls for keyboard, mouse and controller are listed. Single-player is the confirmed play mode in the
        cited store information, so this page treats co-op availability as unsupported by the rescue or rebuilding
        themes. A story about survivors stands apart from a multiplayer feature; the stated mode is the relevant
        fact.
      </p>

      <h2>Roadmap estimate and planned 1.0 work</h2>
      <p>
        The developer currently estimates roughly eighteen months to reach what it calls the complete experience.
        It also says that community feedback may make Early Access longer. That estimate stands apart from a
        calendar date for version 1.0; converting it into one by counting forward from the Early Access date would
        overreach. The roadmap is explicitly subject to change, and the store description gives no dated schedule
        for individual milestones.
      </p>
      <p>
        The planned 1.0 scope names Workshop modding, optimization, additional difficulty options, balancing,
        implementation of creative areas, bosses, biomes and monsters. These are roadmap intentions rather than a
        set of dates or a guarantee that a particular feature arrives in a specific update. The store listing
        leaves open how many bosses or biomes are planned, what each difficulty changes, and how the creative
        areas will work. We preserve those limits because turning a broad roadmap bullet into a detailed feature
        claim would misstate what has actually been announced.
      </p>

      <h2>Price and purchase model</h2>
      <p>
        The store information checked for this page publishes no exact price: the developer describes a one-time
        purchase with no microtransactions and a price that stays stable, with discounts possible during Early
        Access, but gives no currency amount, regional price or discount date. The summary table above therefore
        reports price as <b>Not announced</b> rather than a guessed retail figure.
      </p>

      <h2>Minimum PC requirements</h2>
      <p>
        The Steam page lists minimum PC requirements. They are useful for a basic compatibility check, while a
        performance guarantee for every configuration stays outside their scope. The graphics row distinguishes a
        DirectX 10 compatible graphics card from the DirectX 11 requirement, so both pieces of information are
        retained as listed. “Intel Core i5 3.2 GHz or equivalent” stays a range, since the source names no exact
        processor model.
      </p>
      <div className="overflow-x-auto my-4">
        <table>
          <thead><tr><th scope="col">Minimum component</th><th scope="col">Steam-listed requirement</th></tr></thead>
          <tbody>
            <tr><td>Architecture</td><td>64-bit</td></tr>
            <tr><td>Operating system</td><td>Windows 10 or higher</td></tr>
            <tr><td>Processor</td><td>Intel Core i5 3.2 GHz or equivalent</td></tr>
            <tr><td>Memory</td><td>4 GB RAM</td></tr>
            <tr><td>Graphics</td><td>DirectX 10-compatible graphics card</td></tr>
            <tr><td>DirectX</td><td>Version 11</td></tr>
            <tr><td>Storage</td><td>4 GB available space</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        These are minimum specifications, separate from recommended settings or a frame-rate estimate. The listing
        offers no recommended specification table here, and the minimum table leaves open which resolution or
        quality settings a particular computer will handle. Keep the component names and values together when
        checking a system, and revisit the listing if the developer changes requirements during development.
      </p>

      <h2>Emberville release time: the listing gives a day, not an hour</h2>
      <p>
        The official listings state 27 October 2026 and stop at a calendar day. Steam and GOG publish no unlock hour
        and no timezone for that day, so an exact “release time” would be an unsupported claim. A clock time only
        exists once a source names one; a bare date supplies none, which is why time-zone conversions of the date
        produce derived hours rather than announced ones. The homepage timer follows the same limit: it counts to the
        start of 27 October 2026 in UTC as a display boundary for the calendar day, not as a store unlock instant.
      </p>

      <h2>Emberville unlock time and regional availability</h2>
      <p>
        When the day arrives is a separate question from when the store button becomes active. Because no unlock hour
        is published, we cannot say whether Emberville goes live at a single moment worldwide or rolls out region by
        region. Anyone who needs to know whether access is live should check the Steam or GOG listing directly rather
        than a calendar panel, since the storefront shows the real availability for your account and region. A
        countdown timer can only mark the calendar day; the announcement history on this page explains how that day
        was set in the first place.
      </p>
      <p>
        Neither Cygnus Cross nor the Steam or GOG store pages has announced an unlock hour. The table below projects
        the Steam convention for major releases, 10:00 AM Pacific Time, onto the announced date; it is not an official
        announcement.
      </p>
      <div className="overflow-x-auto my-4">
        <table>
          <thead>
            <tr>
              <th scope="col">PT</th>
              <th scope="col">ET</th>
              <th scope="col">UTC</th>
              <th scope="col">CET</th>
              <th scope="col">Beijing (UTC+8)</th>
              <th scope="col">JST (UTC+9)</th>
              <th scope="col">AEDT (UTC+11)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10:00 AM · Oct 27</td>
              <td>1:00 PM · Oct 27</td>
              <td>17:00 · Oct 27</td>
              <td>18:00 · Oct 27</td>
              <td>01:00 · Oct 28</td>
              <td>02:00 · Oct 28</td>
              <td>04:00 · Oct 28</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Times assume the usual late-October clock state: Pacific and Eastern are on daylight saving, Europe is back on
        standard time, and Australian east-coast clocks run on AEDT in Sydney and Melbourne, hence 04:00; Brisbane,
        which stays on AEST (UTC+10) year-round, would see 03:00. On launch day the Steam page itself begins showing an
        “unlocks in approximately X hours” counter; treat that storefront display as authoritative. Once Cygnus Cross
        or Steam names an exact hour, that official figure replaces this table.
      </p>
      <p>
        Dated announcements, including the demo window that runs ahead of launch, are collected on the{" "}
        <Link href="/news" title={routeTitle("/news")}>Emberville news page</Link>, with the free Next Fest demo
        covered in detail on the{" "}
        <Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>Emberville demo dates and content page</Link>.
      </p>
      <p>
        For the confirmed platform set behind the date, see the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms and console status</Link>; for
        the pricing policy while the amount stays unannounced, see the{" "}
        <Link href="/price" title={routeTitle("/price")}>Emberville price and purchase model</Link>. For a
        plain-language introduction to the features and their limits, see the{" "}
        <Link href="/guides" title={routeTitle("/guides")}>pre-launch systems guide</Link>.
      </p>
      <p>
        The <Link href="/wiki" title={routeTitle("/wiki")}>wiki overview</Link> groups the setting, combat and
        progression categories. These references draw on the same dated first-party and media sources and avoid
        assigning roadmap items or launch details that the store pages leave unconfirmed.
      </p>

      <h2>Emberville release-date FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Status on this page was verified on <b>2026-10-11</b> against the Steam store page, the GOG product page
        and dated IGN reporting. Early Access date: 27 October 2026. Exact unlock time, specific price and
        full-release date: unannounced in those sources. The unlock-time table above is a platform-convention
        projection and is labeled as such.
      </p>
    </AdArticle>
  );
}
