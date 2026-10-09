import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

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
    a: "The date recorded here is the one shown on the Steam listing checked on 2026-10-09. If the listing changes, this page should be rechecked against that source.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CountdownPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Countdown", href: route.path }]} />
      <h1>Emberville Early Access Countdown</h1>
      <p className="answer">
        Emberville's announced Early Access date is 27 October 2026. Steam publishes a calendar date, not an
        exact unlock time, so no honest countdown can claim to reach the moment the store product becomes
        playable. This page treats the announcement as a date-only milestone. Any calendar-boundary display is
        a reference to the start of that date, not an unlock-time estimate, and should not be read as a live
        availability signal.
      </p>

      <div className="my-6 rounded-lg border border-line bg-surface p-6">
        <p className="mb-2 text-xs font-medium tracking-wide text-ink-dim">Announced Early Access calendar date</p>
        <p className="text-3xl font-bold text-white">27 October 2026</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          Date only. The Steam listing does not state a launch hour or timezone. This panel is not a countdown to
          a confirmed store unlock moment.
        </p>
      </div>

      <h2>What the date does—and does not—tell us</h2>
      <p>
        A calendar date answers one question: the day on which the developer plans to put Emberville into Early
        Access on Steam. It does not identify the moment when a button changes from unavailable to purchasable,
        when a download becomes accessible, or whether store availability will be simultaneous in every region.
        Those operational details are not stated in the source used here. Assigning an exact hour
        would turn an unsupported guess into false precision.
      </p>
      <p>
        A timezone conversion only works when there is a source time to convert. Since Steam gives a date without
        an hour, converting “27 October” into different local times would imply knowledge that the listing does
        not contain. For the same reason, the page does not display a changing number of hours, minutes or seconds
        tied to a supposed launch instant. It preserves the distinction between an announced date and a verified
        unlock notice.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Question</th><th scope="col">Confirmed answer</th><th scope="col">Boundary</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>27 October 2026</td><td>A calendar day, no exact unlock time</td></tr>
              <tr><td>Store context</td><td>Steam product listing</td><td>No other storefront or platform is confirmed by this source</td></tr>
              <tr><td>Full release date</td><td>Not announced</td><td>The approximate development estimate is not a 1.0 date</td></tr>
              <tr><td>Countdown interpretation</td><td>Date milestone only</td><td>A date boundary is not the time the game becomes available</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>How to read a calendar-date countdown</h2>
      <p>
        Some sites display a timer by choosing midnight at the beginning of an announced date. That is a
        mathematical convention for representing a calendar boundary; it is not evidence that the game unlocks at
        midnight. This page deliberately avoids a ticking clock because its output could look like a promise about
        availability. If a date-boundary counter is added elsewhere, it should be labeled “calendar-date start,”
        identify its reference convention and state plainly that the actual release time is unannounced.
      </p>
      <p>
        When the displayed date arrives, the date alone still cannot prove that the product is live. Store
        readiness should be checked on the official listing, and any observed status should be described as an
        observation at a particular time—not as a time promised in advance. This matters for users in different
        regions and for anyone planning around a download, work schedule or shared event. A date page can report
        what was announced; it cannot infer a changing store status from the calendar.
      </p>

      <h2>Why a date-only tracker is still useful</h2>
      <p>
        A date can still help readers orient their plans even when it cannot answer every scheduling question.
        It identifies the day attached to the developer's Early Access announcement and gives a stable reference
        for checking later updates. Keeping the date separate from an hour prevents two different kinds of
        information from being confused: the public target day and a store's operational availability. If a
        reader needs to know whether access is actually open, the answer must come from a current store status,
        not from the calendar panel on this page.
      </p>
      <p>
        This distinction is also useful when comparing time zones. A calendar date may begin at different local
        times around the world, but the listing used here does not identify a universal moment. Rather than imply
        that one region gets access earlier or later, this guide records only the announced date. A date-boundary
        convention can be used for a neutral calendar display, provided it is described as the beginning of a
        reference day and not as an official launch schedule. No regional release sequence can be inferred from
        the date alone.
      </p>
      <p>
        The verification date matters as well. The status above reflects what was visible on the Steam store page
        on 2026-10-09; it is not a promise that an announcement will never change. If the listed date is revised,
        the corrected date should be accompanied by a fresh verification date. If it stays the same but the store
        later publishes a precise unlock detail, that detail should be added only with the updated first-party
        source. Until then, “time not announced” is the most accurate answer to a question about the hour.
      </p>

      <h2>Early Access is not the same as the full release</h2>
      <p>
        The announced date is for Early Access, not a date for version 1.0. Cygnus Cross describes the planned
        starting point as a fully playable experience with substantial content and meaningful updates. The
        developer estimates approximately eighteen months to reach what it calls the complete experience, while
        stating that community feedback may extend that period. This is a development estimate with an explicit
        caveat, not a scheduled full-release date and not a countdown target.
      </p>
      <p>
        Planned 1.0 work includes Workshop modding, optimization, additional difficulty options, balancing,
        creative-area implementation, bosses, biomes and monsters. The roadmap may change, and the store page
        does not assign dates to those items. It also does not state an exact quantity of future bosses or biomes.
        A page that adds milestone dates or promised feature counts without a source would make the roadmap sound
        more fixed than the developer says it is.
      </p>

      <h2>What players can expect from the announced game</h2>
      <p>
        Emberville is described as a single-player experience. The player character wakes without memories in the
        Vitromotus, a magical underground prison; the goal includes rescuing survivors and rebuilding Emberville.
        Kymia, a force born from emotion, is associated with prisoners returning to life. The listed activities
        include exploring tunnels, ruins, settlements and unusual biomes; fighting monsters; gathering and
        crafting; farming and cooking; and customizing a personal estate. These facts explain the significance of
        the date without pretending that the store has published an hour-by-hour launch plan.
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
        price and exact unlock time are not announced in the same source. For the itemized status and Early Access
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
        Source status was checked on <b>2026-10-09</b>. The accurate countdown headline is therefore a date:
        <b> 27 October 2026</b>. An exact release hour has not been announced by Steam, and this page does not
        manufacture one.
      </p>
    </article>
  );
}
