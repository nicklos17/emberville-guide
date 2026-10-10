import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville News: Early Access Scope & Roadmap"
const route = getRoute("/news");

const FAQS: Faq[] = [
  {
    q: "Does community input guarantee that every requested feature will be added?",
    a: "No such guarantee is stated. The developer says feedback will help shape development and that plans may evolve, but does not promise to implement every individual request."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function NewsPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "News", href: route.path }]} />
      <h1>Emberville Official News and Early Access Summary</h1>
      <p className="answer">
        This page summarizes Emberville's dated announcement history from the Steam and GOG store pages, IGN reporting and the developer's own press release, not a speculative patch timeline. The page identifies Cygnus Cross as developer and publisher, lists 27 October 2026 as the planned Early Access date, and describes a fully playable single-player release with substantial content and meaningful updates. The developer says its plans can evolve; this summary distinguishes confirmed statements from dates and details not supplied.
      </p>

      <h2>Emberville announcement timeline</h2>
      <p>
        The target date and public demo information have changed from an early seasonal window into specific
        October dates. This timeline separates IGN’s dated reporting and official-trailer pages from the July
        developer press release; the release announcement, the release date, and the demo schedule are distinct
        events rather than one repeated Steam-store statement.
      </p>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead><tr><th scope="col">Date</th><th scope="col">Announcement or coverage</th><th scope="col">What it records</th></tr></thead>
          <tbody>
            <tr><td>January 27, 2026</td><td>IGN announcement report</td><td>PC action-adventure RPG announcement; Early Access then targeted for Summer 2026</td></tr>
            <tr><td>July 15, 2026</td><td>IGN release-date trailer coverage</td><td>October 27 Early Access date and additional named voice actors</td></tr>
            <tr><td>July 16, 2026</td><td>Cygnus Cross press release</td><td>Gameplay feature reveal, cast additions, and studio statements on systems and roadmap</td></tr>
            <tr><td>October 8, 2026</td><td>IGN demo-announcement trailer listing</td><td>Steam Next Fest demo scheduled for October 19–26; PC Early Access on October 27</td></tr>
          </tbody>
        </table>
      </div>
      <DataBlock source="IGN announcement report" url="https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley" verified="2026-10-10">
        <p>IGN’s January 27 announcement report records the original Summer 2026 Early Access target for PC.</p>
      </DataBlock>
      <DataBlock source="IGN demo-announcement trailer listing" url="https://www.ign.com/videos/emberville-official-demo-announcement-trailer-convergence-games-showcase-october-2026" verified="2026-10-10">
        <p>IGN’s October 8 listing states that the Steam Next Fest demo is scheduled for October 19–26 and Early Access for October 27 on PC.</p>
      </DataBlock>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The July 16 developer release announces the October 27 Steam Early Access date and describes its gameplay feature reveal.</p>
      </DataBlock>

      <h2>Official store information at a glance</h2>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Topic</th><th scope="col">What the official page says</th><th scope="col">Important limit</th></tr></thead>
            <tbody>
              <tr><td><b>Studio</b></td><td>Cygnus Cross is both developer and publisher</td><td>No separate studio or publisher is listed here</td></tr>
              <tr><td><b>Release</b></td><td>Planned Early Access date: 27 October 2026</td><td>No exact unlock time or confirmed full-release date</td></tr>
              <tr><td><b>Early Access state</b></td><td>Described as fully playable with substantial content and meaningful updates</td><td>No complete feature-by-feature launch inventory</td></tr>
              <tr><td><b>Play and input</b></td><td>Single-player support; keyboard and mouse plus controller support</td><td>No multiplayer mode or detailed control mapping is described</td></tr>
              <tr><td><b>Development estimate</b></td><td>About 18 months to the developer's intended complete experience, based on the current roadmap</td><td>The developer says community input may extend that estimate</td></tr>
              <tr><td><b>Monetization statement</b></td><td>Developer says no microtransactions and one-time payment; Early Access discounts may occur</td><td>No exact price amount is given in this summary</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>What the Early Access release is intended to contain</h2>
      <p>
        The developer describes Early Access as a fully playable experience with a substantial amount of content and meaningful content updates during the period. The store page lists single-player support, base building, gathering, crafting, farming, cooking, equipment and skills systems, melee, magic and ranged combat, and a combat class system. Keyboard and mouse as well as controller support are also named. These are the published scope statements; they should not be expanded into an unpublished list of quests, bosses, items, areas, or launch-day content counts.
      </p>
      <p>
        The broader game description frames the experience around waking in the Vitromotus, exploring its tunnels and ruins, rescuing survivors, and rebuilding Emberville. Kymia is described as a power born from emotions that brings people trapped within the prison back to life. The store page also describes weapon-bound combos, class skills that can be inherited, quests, stories, diaries, professions, and a customizable estate. These details explain the advertised systems, but do not establish how much of each feature will be available on the first day of Early Access.
      </p>
      <p>
        That distinction matters when reading a store-page summary. A feature being described for the game does not automatically mean the page provides its complete launch implementation, its exact quantity, or its final balance. The developer characterizes the Early Access version as substantial and fully playable, but the source does not give a checklist of every region, story chapter, item, character, or encounter included at launch. No entry on this page should be read as a separate promise beyond the wording shown by the developer.
      </p>

      <h2>How to read the development estimate</h2>
      <p>
        The developer says that, based on its current roadmap, it estimates roughly 18 months to reach what it calls a complete experience in content, features, and polish. It also says the development path is flexible and that community input may lead to unforeseen features that extend the timeline. This is an estimate, not a guaranteed Early Access duration or a dated 1.0 announcement. The Steam page does not publish a specific full-release date.
      </p>
      <p>
        The developer's stated 1.0 plans include Workshop modding support, improved optimization, expanded difficulty options, better balance, more advanced implementation of creative areas, bosses, diverse biomes, and a variety of monsters. The page explicitly says the planned feature set remains flexible and may change with community feedback. These items should therefore be described as intentions, not completed work, fixed commitments, or scheduled patches. No per-feature milestone dates are listed.
      </p>

      <h2>Price and payment statements</h2>
      <p>
        The developer says it opposes microtransactions and intends to offer the game as a one-time purchase. It also says the price will remain the same, while a discounted price may be offered during Early Access. These are the developer's stated plans. The store information summarized here does not give an exact amount, a regional price table, or dates for any discount, so this page does not guess at a price or sale window.
      </p>

      <h2>Release date and announcement boundaries</h2>
      <p>
        The date displayed by Steam is a planned Early Access release date. It can be repeated as the current store-page listing, but it should not be turned into a precise launch-hour promise or described as the date of an announcement. The store page does not give an exact unlock time, a separate full-release date, or a dated list of interim milestones. Those omissions are important for readers planning around availability: a calendar date and a confirmed hour are not the same information.
      </p>
      <p>
        The same distinction applies to product scope. The Early Access notes describe broad systems and the developer's vision for growth; they do not provide a version-by-version contents table. “Meaningful updates” is the developer's stated intention, not a frequency guarantee. The 1.0 feature list names areas the developer hopes to expand, but does not state which update will add each one. A careful news summary can explain what is planned while leaving sequencing, dates, and delivery status unassigned.
      </p>
      <p>
        This page is checked against the official store text and labels the verification date below. If the page changes, its current wording can be compared with the prior summary, but the date of a verification check must not be mistaken for a developer announcement date. No external article or community post is used here to fill a blank in the official record. The distinction keeps a concise announcement summary useful without presenting an estimate as a promise or an absence of detail as a hidden schedule.
      </p>

      <h2>Minimum PC requirements shown on Steam</h2>
      <p>
        The store page lists a 64-bit processor and operating system, Windows 10 or higher, an Intel Core i5 at 3.2 GHz or equivalent, 4 GB of memory, a DirectX 10-compatible video card, DirectX 11, and 4 GB of available storage as minimum requirements. These are minimum PC requirements as presented by the official page, not a performance guarantee for every configuration. No recommended configuration is included in this summary, and this page does not infer frame rates or device compatibility beyond those listed requirements.
      </p>

      <h2>News policy and related system guides</h2>
      <p>
        This timeline uses dated IGN reporting and trailer listings alongside a developer-authored press release and the Steam store page. IGN is identified as media coverage; the GamesPress-hosted item is identified as Cygnus Cross’s release, not independent GamesPress reporting. No community-post rumor or guessed patch schedule is used. The <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">map and world overview</Link> explains the world spaces described by the studio without assigning unnamed areas.
      </p>
      <p>
        For mechanics rather than announcements, the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">combat and class systems guide</Link> explains why no tested builds or rankings are claimed from a store description. The <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">item and crafting guide</Link> outlines the announced categories without making up item names or statistics, and the <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">characters and village stories guide</Link> covers the rescue and rebuilding information available from the same first-party source.
      </p>

      <h2>Emberville news FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
