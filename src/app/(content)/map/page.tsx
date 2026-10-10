import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Map: Confirmed Areas & World Guide";
const route = getRoute("/map");

const FAQS: Faq[] = [
  {
    q: "What is the Vitromotus?",
    a: "It is the vast underground world and magical prison where the protagonist wakes. The Steam page describes tunnels, ruins, survivor settlements, and strange biomes within it.",
  },
  {
    q: "Is Emberville itself part of the map?",
    a: "Yes. Emberville is the ravaged town residents help rebuild; the player also has a customizable personal estate there.",
  },
  {
    q: "Does the official page show entrances or routes between areas?",
    a: "No. The Steam description names broad types of spaces but does not publish a labeled map, route network, coordinates, or entrance locations.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function MapPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Map & Areas", href: route.path }]} />
      <h1>Emberville Map: The Vitromotus and Known Areas</h1>
      <p className="answer">
        The Emberville map centers on the Vitromotus, a vast underground prison containing tunnels, ruins, survivor
        settlements, and strange biomes shaped by kymia. The Steam page also identifies Emberville as the town the
        player helps rebuild, with a personal estate to customize. These are confirmed world spaces; a labeled map,
        named regions, entrances, and routes have not yet been published.
      </p>

      <h2>Emberville map: the Vitromotus</h2>
      <p>
        The protagonist wakes in the Vitromotus with clouded memories and seeks a way out. The store description
        frames the prison as an immense underground world built to confine people excluded from a once-great society.
        Its history is tied to the arrogance and corruption of that society, while kymia later reshaped the world
        within it. This gives the setting a clear structure in broad terms: an underground prison, transformed
        environments, and people trying to survive inside it.
      </p>
      <p>
        The known exploration vocabulary includes tunnels, ruins, settlements, and threatening environments. The
        page does not name individual tunnels or ruins, show how they connect, or specify how deep they lie. These
        words are useful for understanding the kinds of spaces players will explore, but they are not yet a navigable
        region list or a substitute for an in-game map.
      </p>

      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio’s story introduction adds the Memento, a luminous entity accompanying the protagonist through the Vitromotus; it does not identify a mapped location or route.</p>
      </DataBlock>

      <h2>Emberville regions and world spaces</h2>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">Known place or space</th><th scope="col">What it means in the world</th><th scope="col">Map detail available</th></tr></thead>
            <tbody>
              <tr><td>Vitromotus</td><td>The vast underground magical prison and the main setting</td><td>No published outline, levels, or exit route</td></tr>
              <tr><td>Tunnels and ruins</td><td>Forgotten spaces the player can explore</td><td>No individual names or connections</td></tr>
              <tr><td>Strange biomes</td><td>Environments formed as kymia reshaped the prison</td><td>No named biome list or exact count</td></tr>
              <tr><td>Survivor settlements</td><td>Places connected to people the player can rescue</td><td>No settlement names or positions</td></tr>
              <tr><td>Emberville</td><td>A ravaged town whose residents and homes can be restored</td><td>No street or district map</td></tr>
              <tr><td>Personal estate</td><td>A customizable space for buildings, furniture, plants, and decorations</td><td>No layout or coordinates</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Dynamic world exploration in the developer’s feature brief</h2>
      <p>
        Cygnus Cross’s July feature release describes world exploration in terms of distinct biomes, locations,
        encounters, enemies, events, and treasures. It says the world systems use authored content together with
        rules and logic to create varied adventures while retaining structure. That is a developer description of
        how exploration is designed; it does not publish a coordinate map, prove that layouts are randomly generated,
        or name an area the player can visit. The IGN release trailer coverage also describes the game as a pixel-art
        action-adventure RPG, but offers no atlas or named route list.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The developer’s “Dynamic World Exploration” feature note names biomes, locations, encounters, enemies, events, and treasures, and describes authored content combined with rules and logic.</p>
      </DataBlock>
      <h2>Kymia, biomes, and exploration</h2>
      <p>
        Kymia is described as a force born from emotions that brings prisoners back to life. It also changed the
        world inside the prison over time, producing strange biomes and bizarre monsters. That makes it part of the
        world’s geography as well as its story: the environments are presented as transformed spaces, not simply
        rooms in an ordinary prison. The source does not identify the biomes by name or explain where one ends and
        another begins.
      </p>
      <p>
        Exploration links those environments to the rest of the game. The protagonist can encounter monsters and
        survivors while venturing through the Vitromotus; rescuing residents connects the underground journey to the
        rebuilding of Emberville. The <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">Emberville characters guide</Link> covers what rescued villagers contribute, while the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">combat and class systems guide</Link> explains the confirmed combat mechanics without assigning enemies to unverified locations.
      </p>

      <h2>Emberville town and personal estate</h2>
      <p>
        Emberville is distinct from the prison spaces. It is the town the player helps rebuild after its residents
        have been ravaged by hostile forces. Villagers contribute gathering and crafting professions, lend skills,
        and help restore their homes. The description calls the town a living hub shaped by the player’s actions, so
        it is the central return point for the community side of progression—not just another unnamed ruin.
      </p>
      <p>
        The personal estate is another confirmed place within Emberville. Players can customize it with buildings,
        furniture, plants, and decorations, and craft items needed for the journey. The store page does not show its
        exact position relative to town services or any route into the Vitromotus. For the craftable item categories
        named by the store listing, see the <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">Emberville item database</Link>.
      </p>

      <h2>Map coverage at Early Access</h2>
      <p>
        The public description establishes the world’s major settings, but not a player-usable map. When Early Access
        begins, this page will add named areas, entrances, connections, and map details that can be verified in the
        game or in first-party material. Specific routes, coordinates, enemy placements, and item drops will be
        added only when they are actually documented.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/wiki" title="Emberville Wiki: Setting, Combat &amp; Gameplay Systems">Setting, combat, and gameplay systems</Link></li>
        <li><Link href="/news" title="Emberville News: Early Access Scope &amp; Roadmap">Early Access announcements and roadmap</Link></li>
        <li><Link href="/release-date" title="Emberville Early Access Date 2026: Price &amp; Scope">Early Access date and release details</Link></li>
        <li><Link href="/about/methodology" title="Sources &amp; Methodology | Emberville Guide">Sources and verification methodology</Link></li>
      </ul>

      <h2>Emberville map FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
