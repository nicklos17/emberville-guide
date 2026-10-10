import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Multiplayer: Co-op Status Explained";
const route = getRoute("/platforms/multiplayer");

const FAQS: Faq[] = [
  {
    q: "Does Emberville have co-op or multiplayer?",
    a: "No. The Steam store page lists Emberville as a single-player game, and no co-op or other online mode is announced for the Early Access release.",
  },
  {
    q: "Will Emberville add multiplayer later?",
    a: "No multiplayer plan is stated in the cited sources. The developer’s roadmap names Workshop modding for the 1.0 stage, which is a modding feature rather than a co-op mode, so it should not be read as a multiplayer announcement.",
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
      <h1>Is Emberville Multiplayer or Co-op? The Confirmed Answer</h1>
      <p className="answer">
        Emberville is a single-player game. The Steam store page lists it as single-player, and no co-op, split-screen
        or online multiplayer mode is announced for the Early Access release. If you were looking for a co-op
        partner, the confirmed answer today is no.
      </p>
      <p>
        That answer fits in one sentence, but the question keeps returning, so this page sets out what the store
        listing actually confirms, where the co-op expectation comes from, and what the roadmap does and does not say
        about playing with other people.
      </p>

      <h2>What the store listing confirms</h2>
      <p>
        The Steam store page carries the game-mode field that matters here: it lists Emberville as single-player.
        Steam does not list a co-op tag, a multiplayer tag or an online PvP tag for the game. The same listing shows
        support for keyboard, mouse and controller, which describes how one person plays rather than how several
        people play together. The cited sources therefore establish one player, one game session.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Mode question</th><th scope="col">Listed status</th><th scope="col">What that means</th></tr></thead>
            <tbody>
              <tr><td>Game mode</td><td>Single-player</td><td>The only play mode shown on the store listing</td></tr>
              <tr><td>Co-op</td><td>Not listed</td><td>No cooperative tag or feature is shown</td></tr>
              <tr><td>Online multiplayer / PvP</td><td>Not listed</td><td>No online or player-versus-player mode is shown</td></tr>
              <tr><td>Input support</td><td>Keyboard, mouse and controller</td><td>Controls for one player, not a local multiplayer mode</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Why co-op questions keep appearing</h2>
      <p>
        Three things push people toward expecting co-op even though the listing is single-player. First, the premise
        is about rescuing survivors and rebuilding a town, and that kind of communal goal is often paired with
        multiplayer in other games. Second, the genre Emberville is compared with has co-op entries, so a reader may
        assume the pattern carries over. Third, a roadmap that names a modding feature can be skimmed as “online
        features”, which it is not. None of these is a statement from the developer that co-op exists.
      </p>
      <p>
        The distinction matters because a shared goal inside the story is not the same as a networking feature. In
        Emberville, the survivors and the town are part of the single-player narrative; they are characters you
        meet and rebuild alongside, not players who join your session.
      </p>

      <h2>Will Emberville get multiplayer later?</h2>
      <p>
        No multiplayer plan is stated in the sources checked here. The developer’s roadmap names Workshop modding
        among the planned 1.0 work, alongside optimisation, additional difficulty options, balancing, and creative
        areas, bosses, biomes and monsters. Workshop modding is a way for players to add or change content; it is
        not a co-op mode, and reading it as one would overstate the announcement.
      </p>
      <p>
        The same caution applies to “not announced”. Saying there is no co-op plan today is accurate; predicting
        that co-op will never arrive would go beyond the sources. If a multiplayer mode is announced, it would come
        with its own developer statement, and this page would record it with a date and source. For the current
        platform picture that this sits inside, see the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms status page</Link>.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link></li>
        <li><Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville compared with Stardew Valley and Diablo</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville pre-launch systems guide</Link></li>
      </ul>

      <h2>Emberville multiplayer FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Mode status was verified on <b>2026-10-10</b> against the Steam store page. Listed mode: single-player.
        Co-op, online multiplayer and PvP: not listed or announced in that source.
      </p>
    </AdArticle>
  );
}