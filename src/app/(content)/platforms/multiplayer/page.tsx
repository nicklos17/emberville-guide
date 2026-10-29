import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Co-op: Planned for 1.0, Not at Launch";
const route = getRoute("/platforms/multiplayer");

const FAQS: Faq[] = [
  {
    q: "Can I play Emberville co-op at launch?",
    a: "No. Early Access launches as a single-player experience, and the studio states that directly alongside the co-op plan. Co-op arrives with the 1.0 release, which has no date.",
  },
  {
    q: "How many players will co-op support?",
    a: "The number is not stated. The announcement describes co-op as “allowing players to experience Emberville together” and gives no player count, so a two-player or four-player limit would both be guesses.",
  },
  {
    q: "Is Emberville co-op online or split-screen?",
    a: "Neither is specified. The studio calls it “co-op multiplayer” without saying whether it is online, local or both, and no split-screen mode is mentioned anywhere in the announcement.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function MultiplayerPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Platforms", href: "/platforms" },
        { name: "Multiplayer", href: route.path },
      ]} />
      <h1>Emberville is single-player at launch, with co-op planned for 1.0</h1>
      <p className="answer">
        Emberville launches as a single-player game on 7 January 2027, and co-op multiplayer is planned for the 1.0
        release. The studio’s own answer is “Yes! Co-op multiplayer is planned for the 1.0 release”, followed by
        “Early Access launches as a single-player experience”. So the honest answer has two halves: no co-op on day
        one, and a stated plan for co-op later. The postponement from 27 October 2026 changes neither half.
      </p>
      <p>
        That replaces the earlier reading of this page, which treated co-op as unannounced because the store listing
        showed single-player. The listing still shows single-player — it describes the Early Access build — but the
        developer has since said what comes after it.
      </p>

      <h2>What is confirmed for the Early Access launch</h2>
      <p>
        The Steam store page carries the game-mode field that matters for day one: it lists Emberville as
        single-player, and shows no co-op, multiplayer or online PvP tag. Controller support is listed, which
        describes how one person plays rather than how several people play together. The announcement confirms the
        same thing in words, so the launch build and the store listing agree.
      </p>
      <DataBlock
        source="Steam store page and Early Access announcement"
        url="https://store.steampowered.com/app/2295170/Emberville/"
        verified="2026-10-22"
      >
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Mode question</th><th scope="col">At Early Access launch</th><th scope="col">Planned for 1.0</th></tr></thead>
            <tbody>
              <tr><td>Game mode</td><td>Single-player, as listed on Steam</td><td>Co-op multiplayer added</td></tr>
              <tr><td>Co-op</td><td>Not available</td><td>Stated plan, no date</td></tr>
              <tr><td>Player count</td><td>One</td><td>Not stated</td></tr>
              <tr><td>Online or local</td><td>Neither — no networked mode</td><td>Not stated</td></tr>
              <tr><td>PvP</td><td>Not listed</td><td>Not mentioned</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>The co-op statement, in the studio’s words</h2>
      <p>
        Co-op appears twice in the 19 October 2026 announcement, once as a roadmap item and once as a direct answer.
        The roadmap lists “Co-op multiplayer, allowing players to experience Emberville together” among the major 1.0
        additions, next to modding support and console releases. The FAQ repeats it as a question: “Will Emberville
        have co-op? Yes! Co-op multiplayer is planned for the 1.0 release. Early Access launches as a single-player
        experience.”
      </p>
      <p>
        The roadmap section adds a caveat worth keeping attached to the promise: “These are part of our development
        plans, and we’ll communicate progress and any changes as development moves forward.” Co-op is a plan with an
        explicit change clause, not a delivered feature.
      </p>

      <h2>What the announcement does not say about co-op</h2>
      <p>
        Several details that decide whether co-op suits you are simply absent. There is no player count, so nothing
        supports “two-player” or “four-player” claims. There is no statement on whether co-op is online, local or
        both, and no mention of split-screen. Nothing is said about dedicated servers, host migration, cross-play
        between Steam and GOG, or whether a co-op partner needs their own copy. And there is no word on how co-op
        interacts with existing saves, which matters because demo progress carries into Early Access and players will
        have a single-player save before co-op exists.
      </p>
      <p>
        Those gaps are the useful part of this page. A planned mode with an unknown shape is different from a
        designed mode, and any site that lists a player count for Emberville co-op today is filling a gap the
        developer left open.
      </p>

      <h2>When co-op arrives, and what it depends on</h2>
      <p>
        Co-op is tied to 1.0, and 1.0 has no date. The studio’s earlier estimate was roughly eighteen months from the
        Early Access launch, a period it said community feedback could extend, and neither the 19 October
        announcement nor the 26 October postponement revised it. In practice that means co-op is not a near-term
        feature: Early Access begins on 7 January 2027 with a single-player prologue and first biome, and the mode
        sits at the far end of the roadmap.
      </p>
      <p>
        For the platform picture that the console side of the same 1.0 plan belongs to, see the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms status page</Link>; for the
        launch date and what the first build contains, see the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Early Access date and launch details</Link>.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville compared with Stardew Valley and Diablo</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville pre-launch systems guide</Link></li>
        <li><Link href="/price" title={routeTitle("/price")}>Emberville price and purchase model</Link></li>
      </ul>

      <h2>Emberville multiplayer FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Mode status was verified on <b>2026-10-22</b> against the Steam store page and the 19 October 2026 Early
        Access announcement. Listed mode at launch: single-player. Co-op: planned for 1.0, no date, no player count,
        no online-or-local detail. PvP: not mentioned in any source checked.
      </p>
    </AdArticle>
  );
}
