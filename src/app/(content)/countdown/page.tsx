import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Early Access Countdown 2026: Calendar"
const route = getRoute("/countdown");

const FAQS: Faq[] = [
  {
    q: "When does Emberville Early Access begin?",
    a: "Steam lists 27 October 2026. It has not published an exact unlock time.",
  },
  {
    q: "Does this page know the launch hour or timezone?",
    a: "No. The date-boundary explanation is a calendar reference only; it does not represent a confirmed store unlock instant or timezone.",
  },
  {
    q: "When is the full release?",
    a: "A specific 1.0 date is not announced. The developer gives an approximate development-period estimate, not a calendar date for full release.",
  },
  {
    q: "Will the date change?",
    a: "The date recorded here is the one shown on the Steam listing checked on 2026-10-10. If the listing changes, this page should be rechecked against that source.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CountdownPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Countdown", href: route.path }]} />
      <h1>Emberville Early Access Countdown</h1>
      <p className="answer">
        Emberville's announced Early Access date is 27 October 2026. Steam publishes a calendar date rather
        than an exact unlock time, so an honest countdown can only mark that date. This page treats the
        announcement as a date-only milestone: any calendar-boundary display references the start of that date
        and stays a calendar reference, distinct from a live availability signal.
      </p>

      <div className="my-6 rounded-lg border border-line bg-surface p-6">
        <p className="mb-2 text-xs font-medium tracking-wide text-ink-dim">Announced Early Access calendar date</p>
        <p className="text-3xl font-bold text-white">27 October 2026</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Date only. The Steam listing gives a calendar day, with the launch hour and timezone still unannounced.
          Treat this panel as a calendar reference, distinct from a store unlock moment.
        </p>
      </div>

      <h2>How the announced date was refined</h2>
      <p>
        IGN’s January 27 announcement report described Emberville as targeting PC Early Access in Summer 2026.
        In its July 15 release-date trailer item, IGN reported the specific October 27 date; Cygnus Cross’s dated
        July 16 press release then repeated that target. Steam and GOG now both show October 27, 2026 on their
        product pages. The later dated announcement supersedes the earlier seasonal window.
      </p>
      <DataBlock source="IGN announcement report" url="https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley" verified="2026-10-10">
        <p>IGN’s January 27 announcement report described Emberville as targeting PC Early Access in Summer 2026.</p>
      </DataBlock>
      <DataBlock source="IGN release-date trailer coverage" url="https://www.ign.com/videos/emberville-official-early-access-release-date-trailer" verified="2026-10-10">
        <p>IGN’s July 15 trailer coverage reported the specific October 27 Early Access date, superseding the earlier seasonal window.</p>
      </DataBlock>
      <DataBlock source="GOG product page" url="https://www.gog.com/en/game/emberville" verified="2026-10-10">
        <p>GOG’s current product listing also displays October 27, 2026; it does not display an unlock hour in the product details checked here.</p>
      </DataBlock>

      <h2>What the date does—and does not—tell us</h2>
      <p>
        A calendar date answers one question: the day on which the developer plans to put Emberville into Early
        Access on Steam. The exact moment when a button changes from unavailable to purchasable, when a download
        becomes accessible, and whether store availability will be simultaneous in every region are operational
        details the source leaves unstated. Assigning an exact hour would turn an unsupported guess into false
        precision.
      </p>
      <p>
        A timezone conversion only works when there is a source time to convert. Since Steam gives a date alone,
        converting “27 October” into different local times would imply knowledge the listing lacks. For the same
        reason, this page skips a changing number of hours, minutes or seconds tied to a supposed launch instant,
        preserving the distinction between an announced date and a verified unlock notice.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Question</th><th scope="col">Confirmed answer</th><th scope="col">Boundary</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>27 October 2026</td><td>A calendar day; the exact unlock time stays unannounced</td></tr>
              <tr><td>Store context</td><td>Steam and GOG product listings</td><td>Both list Windows; a console platform stays unconfirmed</td></tr>
              <tr><td>Full release date</td><td>Still unannounced</td><td>The approximate development estimate remains separate from a 1.0 date</td></tr>
              <tr><td>Countdown interpretation</td><td>Date milestone only</td><td>A date boundary marks the calendar day, distinct from the time the game becomes available</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>How to read a calendar-date countdown</h2>
      <p>
        Some sites display a timer by choosing midnight at the beginning of an announced date. That is a
        mathematical convention for representing a calendar boundary, distinct from evidence that the game unlocks
        at midnight. This page keeps the announced date as a plain calendar value rather than a ticking clock. Where
        the site does show a date-boundary counter—on the home overview—it is labeled “calendar-date start,” names
        its 00:00 UTC reference convention and states plainly that the actual release time is unannounced.
      </p>
      <p>
        When the displayed date arrives, the date alone leaves store readiness unproven. Check the official
        listing, and describe any observed status as an observation at a particular time rather than a time
        promised in advance. This matters for users in different regions and for anyone planning around a
        download, work schedule or shared event. A date page reports what was announced; store status comes from
        the store itself.
      </p>

      <h2>Why a date-only tracker is still useful</h2>
      <p>
        A date can still help readers orient their plans even when it leaves some scheduling questions open.
        It identifies the day attached to the developer's Early Access announcement and gives a stable reference
        for checking later updates. Keeping the date separate from an hour prevents two different kinds of
        information from being confused: the public target day and a store's operational availability. A reader
        who needs to know whether access is actually open should consult the current store status rather than the
        calendar panel on this page.
      </p>
      <p>
        This distinction also helps when comparing time zones. A calendar date may begin at different local times
        around the world, yet the listing used here names no universal moment, so this guide records the announced
        date alone. A date-boundary convention can serve a neutral calendar display when described as the beginning
        of a reference day; treating it as an official launch schedule would overstate it. The date alone says
        nothing about a regional release sequence.
      </p>
      <p>
        The verification date matters as well. The status above reflects what was visible on the Steam and GOG
        listings on 2026-10-10, and later revisions stay possible. If the listed date changes, pair the corrected
        date with a fresh verification date. If it holds steady while a store later publishes a precise unlock
        detail, add that detail only with the updated first-party source. Until then, the most accurate answer
        about the hour remains “time unannounced.”
      </p>

      <h2>Early Access is not the same as the full release</h2>
      <p>
        The announced date marks Early Access, a milestone distinct from version 1.0. Cygnus Cross describes the
        planned starting point as a fully playable experience with substantial content and meaningful updates. The
        developer estimates approximately eighteen months to reach what it calls the complete experience, while
        stating that community feedback may extend that period. This is a development estimate with an explicit
        caveat, separate from a scheduled full-release date or a countdown target.
      </p>
      <p>
        Planned 1.0 work includes Workshop modding, optimization, additional difficulty options, balancing,
        creative-area implementation, bosses, biomes and monsters. The roadmap may change, and the store page
        leaves those items undated and the quantity of future bosses or biomes unspecified. A page that invents
        milestone dates or promised feature counts would make the roadmap sound more fixed than the developer says
        it is.
      </p>

      <h2>What players can expect from the announced game</h2>
      <p>
        Emberville is described as a single-player experience. The player character wakes without memories in the
        Vitromotus, a magical underground prison; the goal includes rescuing survivors and rebuilding Emberville.
        Kymia, a force born from emotion, is associated with prisoners returning to life. The listed activities
        include exploring tunnels, ruins, settlements and unusual biomes; fighting monsters; gathering and
        crafting; farming and cooking; and customizing a personal estate. These facts explain the significance of
        the date, while the exact hour remains the store's to publish.
      </p>
      <p>
        Combat is described as relying on positioning, timing and knowledge, with weapon-specific combos,
        combination attacks, and melee, magic and ranged options. Classes can be changed at any time, and skills
        can be inherited as active or passive abilities. Combat, exploration, rebuilding and choices all
        contribute to growth. These are system-level descriptions, not a tested guide to the best build, a list of
        exact weapons or a prediction of the opening route.
      </p>

      <h2>Release details and ways to follow the information</h2>
      <p>
        The Steam listing identifies Cygnus Cross as developer and publisher, and lists support for keyboard,
        mouse and controller. Its minimum PC requirements are 64-bit Windows 10 or newer, Intel Core i5 3.2 GHz
        or equivalent, 4 GB RAM, a DirectX 10-compatible graphics card, DirectX 11 and 4 GB storage. A specific
        price and exact unlock time remain unannounced in the cited sources. For the itemized status and Early Access
        scope, see the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>release-date page</Link>.
      </p>
      <p>
        Anyone wanting to understand the game systems before launch can use the{" "}
        <Link href="/guides" title={routeTitle("/guides")}>pre-launch guides</Link>, which distinguish announced
        features from tactics that will require playtesting. The{" "}
        <Link href="/wiki" title={routeTitle("/wiki")}>wiki overview</Link> organizes the setting and system
        categories. Each page keeps the date and source visible so readers can tell what was checked and avoid
        mistaking the 1.0 development estimate for another announced date.
      </p>

      <h2>Emberville countdown FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Source status was checked on <b>2026-10-10</b>. The accurate countdown headline is therefore a date:
        <b> 27 October 2026</b>. The exact release hour remains unannounced by Steam; this page reports only what
        has been published.
      </p>
    </AdArticle>
  );
}
