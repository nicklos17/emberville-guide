import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Early Access Date 2026: Price & Scope"
const route = getRoute("/release-date");

const FAQS: Faq[] = [
  {
    q: "When is Emberville's Early Access release date?",
    a: "The Steam store page lists 27 October 2026. It does not give a precise unlock time.",
  },
  {
    q: "When will the full release arrive?",
    a: "A specific 1.0 date is not announced. The developer estimates approximately eighteen months to reach its intended complete experience, and says community feedback may extend that period.",
  },
  {
    q: "How much does Emberville cost?",
    a: "A specific price is not announced on the Steam store page as of 2026-10-09.",
  },
  {
    q: "What platform is confirmed?",
    a: "The cited product listing is on Steam. No other platform is confirmed by that listing.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ReleaseDatePage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Release Date", href: route.path }]} />
      <h1>Emberville Release Date and Early Access Details</h1>
      <p className="answer">
        Emberville is planned to enter Early Access on Steam on 27 October 2026. The store page gives a calendar
        date but no exact unlock time. It does not announce a full-release date or specific price. The table below
        separates confirmed information from items that remain unannounced, then summarizes the Early Access
        scope, developer roadmap notes and minimum PC requirements without treating estimates as promises.
      </p>

      <h2>Release information at a glance</h2>
      <p>
        The date shown by Steam is the only specific launch date recorded here. “Early Access” and “full release”
        are different milestones: the former is the planned public release stage, while a 1.0 date has not been
        provided. Likewise, a product listing on Steam confirms the store context, not availability on an
        unlisted storefront or a console. Where the source does not give a value, this page uses “Not announced”
        instead of calculating or inferring one.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Item</th><th scope="col">Confirmed status</th><th scope="col">What that means</th></tr></thead>
            <tbody>
              <tr><td>Early Access date</td><td>27 October 2026</td><td>Calendar date published by Steam; exact unlock time not announced</td></tr>
              <tr><td>Full release / 1.0 date</td><td>Not announced</td><td>No specific date is given for the complete version</td></tr>
              <tr><td>Platform</td><td>Steam listing</td><td>This source confirms the Steam product page; it does not establish other platforms</td></tr>
              <tr><td>Price</td><td>Not announced</td><td>The developer describes its pricing approach, but no specific amount is listed</td></tr>
              <tr><td>Mode</td><td>Single-player</td><td>Listed game mode; no other mode is confirmed in this source</td></tr>
              <tr><td>Early Access experience</td><td>Fully playable experience with substantial content; meaningful updates planned</td><td>Developer's description of the intended starting scope and update approach</td></tr>
              <tr><td>Purchase and monetization</td><td>Developer says one-time purchase and no microtransactions</td><td>Price may be discounted during Early Access; a specific amount remains unannounced</td></tr>
              <tr><td>Estimated development period</td><td>Approximately 18 months</td><td>Estimate toward the developer's complete experience; feedback may extend it</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>What to expect from Early Access</h2>
      <p>
        Cygnus Cross describes the planned Early Access build as a fully playable experience containing substantial
        content, with meaningful updates during development. That wording describes the developer's intended
        scope; it is not a promise that every planned 1.0 feature will already be present on the first day. Players
        should distinguish the current Early Access release from the developer's longer-term plan, particularly
        when reading lists of future features.
      </p>
      <p>
        The game's announced premise and systems include single-player exploration of the Vitromotus, action
        combat, rescuing survivors, rebuilding Emberville and a range of crafting and home-building activities.
        The player character wakes without memories in a magical underground prison. Kymia, described as coming
        from emotion, is connected to prisoners returning to life. Exploration includes tunnels, ruins, settlements,
        unusual biomes and monsters. The listing describes these broad pillars, but it does not publish a complete
        location catalogue or a numbered list of all available quests and items.
      </p>
      <p>
        Controls for keyboard, mouse and controller are listed. Single-player is the confirmed play mode in the
        cited store information. This page therefore does not infer co-op availability from the rescue or
        rebuilding themes. A story about survivors does not by itself establish a multiplayer feature; the stated
        mode is the relevant fact.
      </p>

      <h2>Roadmap estimate and planned 1.0 work</h2>
      <p>
        The developer currently estimates roughly eighteen months to reach what it calls the complete experience.
        It also says that community feedback may make Early Access longer. That estimate is not a calendar date
        for version 1.0, and it should not be converted into one by counting forward from the Early Access date.
        The roadmap is explicitly subject to change, and no dated schedule for individual milestones is given in
        the store description.
      </p>
      <p>
        The planned 1.0 scope names Workshop modding, optimization, additional difficulty options, balancing,
        implementation of creative areas, bosses, biomes and monsters. These are roadmap intentions, not a set of
        dates or a guarantee that a particular feature arrives in a specific update. The store listing does not
        say how many bosses or biomes are planned, what each difficulty changes, or how the creative areas will
        work. We preserve those limits because turning a broad roadmap bullet into a detailed feature claim would
        misstate what has actually been announced.
      </p>

      <h2>Price and purchase model</h2>
      <p>
        No exact price is published in the store information checked for this page. The developer says the game
        will be a one-time purchase with no microtransactions, and that the price will remain stable, while
        discounts may be offered during Early Access. “Price will remain stable” is the developer's stated plan;
        it does not give a currency amount, regional price, discount date or discount percentage. For that reason,
        the table reports the price as <b>Not announced</b> rather than using a guessed retail figure.
      </p>
      <p>
        A discount is not the same as a permanent price change, and neither point identifies the base amount.
        Readers deciding whether to buy should check the current store listing when purchase becomes available.
        This guide records only the stated policy and date of verification; it does not predict a launch offer or
        compare prices across storefronts.
      </p>

      <h2>Minimum PC requirements</h2>
      <p>
        The Steam page lists minimum PC requirements. They are useful for a basic compatibility check, but they
        are not a performance guarantee for every configuration. The graphics row distinguishes a DirectX 10
        compatible graphics card from the DirectX 11 requirement, so both pieces of information are retained as
        listed. “Intel Core i5 3.2 GHz or equivalent” should not be reduced to an exact processor model that the
        source does not name.
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
        These are minimum specifications, not recommended settings or an estimate of frame rate. The listing does
        not provide a recommended specification table here, nor does the minimum table tell us which resolution
        or quality settings a particular computer will handle. Keep the component names and values together when
        checking a system, and revisit the listing if the developer changes requirements during development.
      </p>

      <h2>Why the release date has no clock time</h2>
      <p>
        The official listing states 27 October 2026 and does not publish a precise unlock time. An exact hour such
        would therefore be an unsupported claim. Time-zone conversions cannot solve this gap: they
        can convert a known instant, but there is no instant to convert when the source gives only a date. The
        companion{" "}
        <Link href="/countdown" title={routeTitle("/countdown")}>countdown page</Link> explains how its
        date-boundary timer is presented without implying a store unlock schedule.
      </p>
      <p>
        For a plain-language introduction to the features and their limits, see the{" "}
        <Link href="/guides" title={routeTitle("/guides")}>pre-launch systems guide</Link>. The{" "}
        <Link href="/wiki" title={routeTitle("/wiki")}>wiki overview</Link> groups the setting, combat and
        progression categories. These references use the same first-party source and avoid assigning roadmap
        items or launch details that the store page has not confirmed.
      </p>

      <h2>Emberville release-date FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Status on this page was verified against the Steam store page on <b>2026-10-09</b>. Early Access date:
        27 October 2026. Exact unlock time, specific price and full-release date: not announced in that source.
      </p>
    </article>
  );
}
