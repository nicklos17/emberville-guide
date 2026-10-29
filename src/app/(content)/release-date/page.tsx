import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Release Date & Early Access: Jan 7, 2027"
const route = getRoute("/release-date");

const FAQS: Faq[] = [
  {
    q: "When is Emberville's Early Access release date?",
    a: "7 January 2027. Cygnus Cross moved the date from 27 October 2026 on 26 October, one day before the original launch. The listings give the calendar day only, with no unlock hour.",
  },
  {
    q: "What time does Emberville unlock?",
    a: "No unlock hour has been announced for 7 January 2027 either. The convention table below projects the usual Steam release hour, 10:00 AM Pacific (18:00 UTC, early on 8 January in Beijing), onto the announced date. That figure is a projection from platform convention, not an official time; on launch day the Steam page counter is the authority.",
  },
  {
    q: "Is Emberville co-op or multiplayer?",
    a: "Not at launch. The Early Access build is single-player, and the studio says co-op multiplayer is planned for the 1.0 release, with no date, no player count and no word on whether it is online or local.",
  },
  {
    q: "Is Emberville on PS5 or Switch?",
    a: "Console versions are planned for the 1.0 release, but no console is named. Steam and GOG list Windows only, and no PS5, Xbox, Switch or mobile edition has a version, a date or a storefront listing. The platforms page tracks each console's status in detail.",
  },
  {
    q: "When will the full release arrive?",
    a: "A specific 1.0 date is not announced. The developer estimates approximately eighteen months to reach its intended complete experience, and says community feedback may extend that period.",
  },
  {
    q: "Will the Emberville price rise after Early Access?",
    a: "Unstated. The January 2026 video described a base price that stays stable, but the October 19 briefing prices launch at $29.99 without repeating that commitment, and no future increase has been announced.",
  },
  {
    q: "Does Emberville have a GOG listing as well as Steam?",
    a: "Yes. The official GOG product page carries Emberville for the same Early Access release as Steam and identifies its supported system as Windows. The studio's 26 October announcement, rather than either store page, is what moved the date.",
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
        Emberville is scheduled to enter Early Access on 7 January 2027, after Cygnus Cross moved the date from
        27 October 2026 on 26 October — one day before the original launch. The studio prices Early Access at
        $29.99 with a 10% launch discount; the unlock hour and full-release date remain unannounced. The table below
        separates confirmed information from those open items, then summarizes the Early Access scope, developer
        roadmap notes and minimum PC requirements.
      </p>

      <h2>Release information at a glance</h2>
      <p>
        The studio&rsquo;s announcement is what set the current date; the store listings supply the storefront and
        system facts. “Early Access” and “full release” are different milestones: the former is the planned public
        release stage, while a 1.0 date remains unannounced. Where the source omits a value, this page uses
        “Not announced” rather than calculating or inferring one.
      </p>
      <DataBlock source="Steam — Emberville store page, Cygnus Cross Early Access briefing (October 19, 2026) and delay announcement (October 26, 2026)" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-28">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Item</th><th scope="col">Confirmed status</th><th scope="col">What that means</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>7 January 2027</td><td>Set by the studio&rsquo;s October 26 announcement; the exact unlock time stays unannounced</td></tr>
              <tr><td>Previously announced date</td><td>27 October 2026</td><td>Withdrawn one day before it would have taken effect</td></tr>
              <tr><td>Full release / 1.0 date</td><td>Unannounced</td><td>The complete version's date stays unpublished</td></tr>
              <tr><td>Platform</td><td>Windows (Steam and GOG) at launch</td><td>Both product pages list Windows; console releases are planned for 1.0 without a named platform</td></tr>
              <tr><td>Price</td><td>$29.99, or $26.99 with the 10% launch discount</td><td>Stated in the studio&rsquo;s October 19 briefing; regional pricing may vary, and the discount window has not been restated for January</td></tr>
              <tr><td>Mode</td><td>Single-player at launch</td><td>Listed game mode for Early Access; co-op multiplayer is planned for 1.0</td></tr>
              <tr><td>Early Access experience</td><td>Fully playable experience with substantial content; meaningful updates planned</td><td>Developer's description of the intended starting scope and update approach</td></tr>
              <tr><td>Purchase and monetization</td><td>One-time purchase; no microtransactions, battle passes or paid DLC</td><td>Stated in the October 19 briefing; the January video&rsquo;s price-stability remark is not repeated there</td></tr>
              <tr><td>Estimated development period</td><td>Approximately 18 months</td><td>Estimate toward the developer's complete experience; feedback may extend it</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville release date history: from summer to January</h2>
      <p>
        The date has moved twice on the record, and the sequence matters more than any single store capsule. In
        January 2026 the announcement aimed at a summer window; the July release-date trailer narrowed that to a
        specific October day; and on 26 October 2026 the studio withdrew the October date one day before it was due
        to take effect. The store pages carried the October date until then, which is why older coverage still
        reports it.
      </p>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead><tr><th scope="col">Date</th><th scope="col">What the record shows</th></tr></thead>
          <tbody>
            <tr><td>January 2026</td><td>Early Access described as arriving in a summer window, with no day fixed</td></tr>
            <tr><td>July 15, 2026</td><td>Release-date trailer coverage names October 27, 2026</td></tr>
            <tr><td>October 19, 2026</td><td>The Early Access briefing reaffirms October 27 and sets the $29.99 price</td></tr>
            <tr><td>October 26, 2026</td><td>Studio postpones the launch; January 7, 2027 becomes the date</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The reasoning behind the October 26 move — demo feedback, and the bow-combat rework the letter names as an
        example — is set out in full on the{" "}
        <Link href="/news/emberville-delay" title={routeTitle("/news/emberville-delay")}>Emberville delay record</Link>.
        This page tracks the standing date and what it does and does not settle.
      </p>
      <DataBlock source="GOG product page (storefront and system details; the date itself comes from the studio&rsquo;s October 26 announcement)" url="https://www.gog.com/en/game/emberville" verified="2026-10-28">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">GOG listing detail</th><th scope="col">Displayed information</th></tr></thead>
            <tbody>
              <tr><td>Platform</td><td>Windows</td></tr>
              <tr><td>Release date</td><td>Carried October 27, 2026 before the postponement; the studio now gives January 7, 2027</td></tr>
              <tr><td>GOG distribution</td><td>GOG describes DRM-free play and an optional offline installer</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <DataBlock source="IGN release-date trailer coverage" url="https://www.ign.com/videos/emberville-official-early-access-release-date-trailer" verified="2026-10-10">
        <p>IGN’s July 15 item reports the October 27 Early Access date and names Doug Cockle, Alex Jordan, and Jane Perry among the featured voice actors. That date was superseded on October 26, 2026.</p>
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
        Controls for keyboard, mouse and controller are listed. Single-player is the confirmed play mode for the
        Early Access build, and co-op multiplayer is a 1.0 plan rather than a launch feature, so the two statements
        do not conflict: the store listing describes what ships at launch, and the announcement describes what
        comes after it.
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
        The planned 1.0 scope names co-op multiplayer, console releases and modding support, alongside optimization,
        additional difficulty options, balancing, implementation of creative areas, bosses, biomes and monsters.
        These are roadmap intentions rather than a
        set of dates or a guarantee that a particular feature arrives in a specific update. The store listing
        leaves open how many bosses or biomes are planned, what each difficulty changes, and how the creative
        areas will work. We preserve those limits because turning a broad roadmap bullet into a detailed feature
        claim would misstate what has actually been announced.
      </p>

      <h2>Price and purchase model</h2>
      <p>
        The studio prices Early Access at $29.99 USD with a 10% launch discount, taking the introductory price to
        $26.99, and flags that regional pricing may vary. The model around it is a one-time purchase with no
        microtransactions, battle passes or subscription fees, and no paid DLC is planned. That supersedes the $25
        ceiling quoted in the January 2026 announcement video, which the studio has not addressed since.
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
        The announcement states 7 January 2027 and stops at a calendar day. Neither the studio nor the store pages
        publish an unlock hour or a timezone for that day, so an exact “release time” would be an unsupported claim.
        A clock time only exists once a source names one; a bare date supplies none, which is why time-zone
        conversions of the date produce derived hours rather than announced ones. The homepage timer follows the
        same limit: it counts to the start of 7 January 2027 in UTC as a display boundary for the calendar day, not
        as a store unlock instant.
      </p>

      <h2>Emberville unlock time and regional availability</h2>
      <p>
        When the day arrives is a separate question from when the store button becomes active. Because no unlock hour
        is published, we cannot say whether Emberville goes live at a single moment worldwide or rolls out region by
        region. Anyone who needs to know whether access is live should check the Steam or GOG listing directly rather
        than a calendar panel, since the storefront shows the real availability for your account and region. A
        countdown timer can only mark the calendar day; the date history above explains how that day was set.
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
              <td>10:00 AM · Jan 7</td>
              <td>1:00 PM · Jan 7</td>
              <td>18:00 · Jan 7</td>
              <td>19:00 · Jan 7</td>
              <td>02:00 · Jan 8</td>
              <td>03:00 · Jan 8</td>
              <td>05:00 · Jan 8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Times assume the usual January clock state: Pacific is on PST (UTC−8) rather than daylight time, Eastern is on
        EST (UTC−5), central Europe is on CET, and Australian east-coast clocks run on AEDT in Sydney and Melbourne,
        hence 05:00. Brisbane, which stays on AEST (UTC+10) year-round, would see 04:00. On launch day the Steam page
        itself begins showing an “unlocks in approximately X hours” counter; treat that storefront display as
        authoritative. Once Cygnus Cross or Steam names an exact hour, that official figure replaces this table.
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
        the launch price and discount terms, see the{" "}
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
        Status on this page was verified on <b>2026-10-28</b> against the Steam store page, the GOG product page,
        the studio&rsquo;s October 19 Early Access briefing, its October 26 delay announcement and dated IGN
        reporting. Early Access date: 7 January 2027; launch price: $29.99, discounted 10% to $26.99; launch mode:
        single-player, with co-op and console releases planned for 1.0. Exact unlock time and full-release date:
        unannounced in those sources. The unlock-time table above is a platform-convention projection and is labeled
        as such.
      </p>
    </AdArticle>
  );
}
