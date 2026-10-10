import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Games Like Emberville: Similar Action RPGs Compared";
const route = getRoute("/games-like-emberville");

const FAQS: Faq[] = [
  {
    q: "What is the closest game to Emberville?",
    a: "On the two layers Emberville emphasises most — pixel action combat plus gathering, crafting and building a base — Core Keeper and Dimraeth sit closest. For the town-and-economy layer, Moonlighter and Graveyard Keeper 2 are nearer.",
  },
  {
    q: "Do the games on this list have co-op?",
    a: "Some do and some do not. Core Keeper and Dimraeth support online play, while DREDGE is single-player. Emberville is listed as single-player, so a co-op game is similar in mechanics but not in mode.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function GamesLikePage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Games Like Emberville", href: route.path }]} />
      <h1>Games Like Emberville: What to Play Next</h1>
      <p className="answer">
        Games “like” Emberville are best matched by mechanic, not by genre label. Emberville’s announced design mixes
        melee, magic and ranged combat, weapon-bound combos, classes you can switch at any time with skills you keep,
        and a loop of gathering, crafting, farming and rebuilding a town of rescued survivors. The five games below
        each overlap on one of those layers, and each differs somewhere else.
      </p>
      <p>
        Because Emberville arrives in Early Access on 27 October 2026, these comparisons describe the developer’s
        announced design rather than a finished game. Each entry says which part of Emberville it echoes and where the
        match stops, so you can pick by the loop you actually want.
      </p>

      <h2>Emberville’s confirmed mechanics, in five parts</h2>
      <p>
        Before matching games to it, it helps to break Emberville into the pieces a recommendation can key on. The
        Steam store page and IGN’s hands-on preview supply these five; nothing here is a guess about balance or endgame.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Emberville layer</th><th scope="col">Confirmed description</th></tr></thead>
            <tbody>
              <tr><td>Combat</td><td>Action combat built on position, timing and knowledge; melee, magic and ranged options; each weapon has its own combos and combination attacks</td></tr>
              <tr><td>Classes and skills</td><td>Classes can be changed at any time; class skills can be inherited as active or passive abilities</td></tr>
              <tr><td>Gathering and crafting</td><td>Collect materials to make equipment, potions, food, tools and trinkets; farming and cooking included</td></tr>
              <tr><td>Town and survivors</td><td>Rescue survivors and rebuild Emberville; villagers bring stories, diaries, quests, classes, skills and rewards</td></tr>
              <tr><td>Personal estate</td><td>Build a personal property and place furniture, plants and decorations to customise it</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Core Keeper: the underground gathering loop</h2>
      <p>
        Core Keeper is the closest match on the exploration-and-gathering side. Its store description calls it a
        mining sandbox adventure for one to eight players in which you “mine, build, fight, craft and farm to unravel
        the mystery of the ancient Core”. That is the same four-verb shape as Emberville’s loop — gather, build,
        fight, farm — set underground, much as Emberville’s Vitromotus is an underground prison. The difference worth
        knowing: Core Keeper is built for online co-op, while Emberville is listed as single-player, so the loop
        overlaps but the mode does not.
      </p>
      <DataBlock source="Core Keeper store page" url="https://store.steampowered.com/app/1621690/Core_Keeper/" verified="2026-10-10">
        <p>Core Keeper, from Pugstorm, is described as a mining sandbox adventure for 1–8 players who mine, build, fight, craft and farm.</p>
      </DataBlock>

      <h2>Moonlighter: shop by day, dungeon by night</h2>
      <p>
        Moonlighter matches Emberville’s two-layer structure: an action layer and a town layer feeding each other. Its
        store page describes an action RPG with rogue-lite elements in which Will is “an adventurous shopkeeper that
        secretly dreams of becoming a hero”; you sell the relics you find to fund better equipment and take on the
        Endless Vault trials. Read that against Emberville, where materials become equipment and the town is rebuilt
        as you progress, and the rhythm is familiar even though Emberville keeps the shopkeeping out of the picture.
        Both are top-down pixel action RPGs, which makes the comparison land visually as well.
      </p>
      <DataBlock source="Moonlighter store page" url="https://store.steampowered.com/app/606150/Moonlighter/" verified="2026-10-10">
        <p>Moonlighter, from Digital Sun and 11 bit studios, is described as an action RPG with rogue-lite elements built around a shopkeeper hero.</p>
      </DataBlock>

      <h2>DREDGE: a single-player resource loop with a dark current</h2>
      <p>
        DREDGE is the match for tone and for a single-player structure. Its store page describes “a single-player
        fishing adventure with a sinister undercurrent” in which you sell your catch, upgrade your boat and dredge the
        depths for long-buried secrets across a mysterious archipelago. The overlap with Emberville is the loop —
        explore, collect, sell or spend, upgrade — inside a setting with a dark undertow, matching the prison-and-kyma
        atmosphere. The difference is what you do with the results: DREDGE upgrades a boat, while Emberville invests
        in a character, a town and an estate.
      </p>
      <DataBlock source="DREDGE store page" url="https://store.steampowered.com/app/1562430/DREDGE/" verified="2026-10-10">
        <p>DREDGE, from Black Salt Games and Team17, is described as a single-player fishing adventure with a sinister undercurrent.</p>
      </DataBlock>

      <h2>Graveyard Keeper 2: rebuilding a town through systems</h2>
      <p>
        Graveyard Keeper 2 is the match for the settlement-management layer, and it is the newest entry on this list,
        released on 22 September 2026. Its store page frames it as a medieval graveyard simulator where you rebuild
        the town, run the graveyard and automate production with zombie labour. The honest overlap with Emberville is
        narrower than the genre tags suggest: both put you in charge of restoring a place and managing the systems
        around it, and both carry a dark streak. They diverge on combat — Graveyard Keeper leans into management and
        automation, while Emberville keeps action combat at the centre.
      </p>
      <DataBlock source="Graveyard Keeper 2 store page" url="https://store.steampowered.com/app/4358690/Graveyard_Keeper_2/" verified="2026-10-10">
        <p>Graveyard Keeper 2, from Lazy Bear Games and tinyBuild, is described as a medieval graveyard simulator about rebuilding a town and automating production.</p>
      </DataBlock>

      <h2>Dimraeth: the closest pixel action RPG with a stronghold</h2>
      <p>
        Dimraeth overlaps on the exact combination of pixel action RPG and base-building that Emberville advertises. Its
        store page describes a one-to-eight player fantasy RPG in a handcrafted pixel world where you build a hero
        across eight races and six classes, master elemental combat, forge relationships and shape a stronghold. That
        maps onto Emberville’s class-building, elemental-style combat options and personal estate. The key difference
        is mode again: Dimraeth is built for play “together or alone” with up to eight players, whereas Emberville is
        single-player. Dimraeth is also in Early Access, having launched on 15 September 2026.
      </p>
      <DataBlock source="Dimraeth store page" url="https://store.steampowered.com/app/2402680/Dimraeth/" verified="2026-10-10">
        <p>Dimraeth, from Mudtek, is described as a 1–8 player fantasy RPG in a handcrafted pixel world with races, classes, elemental combat and a stronghold.</p>
      </DataBlock>

      <h2>Which one fits your Emberville interest?</h2>
      <p>
        If what pulls you in is the underground gather-build-fight loop, Core Keeper and Dimraeth are the nearest.
        If it is the town that grows as you play, Moonlighter and Graveyard Keeper 2 speak to that side. If it is the
        single-player exploration mood, DREDGE is the closest in atmosphere. And if you want the Diablo-and-Stardew
        shorthand worked through properly, our{" "}
        <Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville vs Stardew Valley and Diablo comparison</Link>{" "}
        takes that pair apart; the{" "}
        <Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki</Link> lists the confirmed systems these
        comparisons are drawn from.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/builds" title={routeTitle("/builds")}>Emberville combat, classes and builds</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville pre-launch systems guide</Link></li>
        <li><Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms and console status</Link></li>
      </ul>

      <h2>Games like Emberville FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        This comparison was built from Emberville’s Steam store page and IGN’s hands-on preview, checked on
        <b> 2026-10-10</b>, alongside each listed game’s own store page on the same date. Emberville’s design is
        announced rather than released; the games above are all available now.
      </p>
    </AdArticle>
  );
}