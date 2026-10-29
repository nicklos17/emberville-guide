import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Wiki Database: Setting, Combat & Systems";
const route = getRoute("/wiki");

const FAQS: Faq[] = [
  {
    q: "What is the Vitromotus?",
    a: "It is the magical underground prison where the amnesiac player character wakes. The store description frames it as a place of exploration, survivors and monsters.",
  },
  {
    q: "What is kymia?",
    a: "Kymia is described as a force that comes from emotions and causes prisoners to return to life.",
  },
  {
    q: "How many biomes are in Emberville?",
    a: "The Steam page refers to unusual biomes but gives no exact count or named biome list.",
  },
  {
    q: "Does the wiki list tested item stats?",
    a: "No item-by-item names or values are confirmed by the store page. This pre-release overview records system categories without inventing database entries.",
  },
  {
    q: "Is Emberville like Stardew Valley or Diablo?",
    a: "Press coverage introduced it as \u201CDiablo Lite meets Stardew Valley,\u201D shorthand for its blend of action-RPG combat and farming-style gathering with town rebuilding. It is not an official genre label.",
  },
  {
    q: "Who is making Emberville, and who is in the voice cast?",
    a: "It is the debut title from Cygnus Cross, an independent studio in Cork, Ireland, led by founder and lead game director Brynjar Gigja with co-founder and co-game director Ben \u201CCohhCarnage\u201D Cassell. The official site lists a 22-name voice cast led by voice-acting director Alex Jordan.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function WikiPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Wiki", href: route.path }]} />
      <h1>Inside the Emberville Wiki Database</h1>
      <p className="answer">
        This Emberville wiki database maps the setting and systems the store page confirms: the Vitromotus, kymia,
        combat, classes, crafting, rebuilding and the personal estate. It also keeps a running list of what is
        still unconfirmed, so nothing gets filled in with guesses.
      </p>

      <h2>Emberville wiki at a glance: the announced game</h2>
      <p>
        Cygnus Cross is both developer and publisher. Emberville is planned for Early Access on Steam on
        7 January 2027, postponed from 27 October 2026 on 26 October, and is listed as single-player, with co-op multiplayer planned for the 1.0 release. Its premise follows an amnesiac character who wakes in
        the Vitromotus, a magical underground prison. The player explores its tunnels, ruins, survivor
        settlements, unusual biomes and monsters; the wider objective includes rescuing survivors and rebuilding
        Emberville. The description connects growth to combat, exploration, rebuilding and choices, so the
        overall design spans both action and community restoration.
      </p>
      <DataBlock source="Steam store page and the 26 October 2026 delay announcement" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-28">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Wiki category</th><th scope="col">Confirmed scope</th></tr></thead>
            <tbody>
              <tr><td>World</td><td>The Vitromotus, an underground magical prison; kymia is emotion-derived and makes prisoners return to life</td></tr>
              <tr><td>Exploration</td><td>Tunnels, ruins, survivor settlements, unusual biomes and monsters</td></tr>
              <tr><td>Combat</td><td>Positioning, timing, perception, weapon-specific combos, combination attacks, melee, magic and ranged options</td></tr>
              <tr><td>Growth</td><td>Combat, exploration, rebuilding and choices contribute; skills include inherited active and passive abilities</td></tr>
              <tr><td>Making and building</td><td>Gathering, crafting, farming, cooking and customization of a personal estate</td></tr>
              <tr><td>Release context</td><td>Single-player Early Access dated 7 January 2027, moved from 27 October 2026; the exact unlock time stays unannounced</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville world: the Vitromotus and kymia</h2>
      <p>
        The Vitromotus is the central named setting. It is an underground magical prison, and it is where the
        player character wakes after losing their memories. The description presents it as an explorable
        environment rather than a single room: tunnels, ruins and settlements of survivors sit alongside strange
        biomes and monsters. Kymia is the other essential term — a power that originates in emotions and is
        associated with prisoners returning to life. That gives the setting a specific supernatural rule and
        leaves its wider consequences open, so this reference keeps the definition narrow rather than extending it
        into an unstated resource or recipe system.
      </p>

      <h2>Emberville exploration and areas</h2>
      <p>
        Exploration connects several kinds of space: tunnels, ruins, survivor settlements and unusual biomes, with
        monsters as part of the world. That supports an area index organized around environments and discoveries.
        The word “biomes” indicates variety; it does not establish a fixed number. Readers looking for a geography
        reference can follow the{" "}
        <Link href="/map" title={routeTitle("/map")}>Emberville map and areas guide</Link> as it is populated with
        verifiable names.
      </p>

      <h2>Emberville combat: actions and choices</h2>
      <p>
        Combat is described through decisions about positioning, timing and knowledge. Those terms suggest that
        the player reads a situation and chooses when or where to act, rather than running every encounter as an
        interchangeable attack sequence. Each weapon has its own combos, and combination attacks are part of the
        design. The disclosed attack approaches are melee, magic and ranged — a broad taxonomy rather than a
        promise that every character can use every option in every situation. Weapon-specific combinations imply
        that weapon choice shapes how an attack is performed, while class skills add another layer of
        customization.
      </p>

      <h2>Emberville classes, abilities and growth</h2>
      <p>
        The class system is notable for its stated flexibility: class skills can be inherited as active or passive
        abilities, and players may switch classes at any time. In practical terms, the store description treats a
        class as a changeable role rather than a permanently fixed identity, with equipment and skills both
        contributing to a character's setup. Growth is broader than combat alone: the store page explicitly
        includes exploration, rebuilding and choices alongside battle. Our companion{" "}
        <Link href="/builds" title={routeTitle("/builds")}>Emberville builds and class guide</Link> is where tested
        combinations will go once the game can be played.
      </p>

      <h2>Emberville crafting, materials and food</h2>
      <p>
        The game includes gathering, crafting, farming and cooking. The store description lists the kinds of
        output players can create from collected materials: equipment, potions, food, tools and trinkets. Those
        categories connect practical preparation to the action-RPG side. A crafting system is confirmed; the
        ingredients for a particular potion are not. Individual entries, their names, sources and values belong on
        the{" "}
        <Link href="/item-database" title={routeTitle("/item-database")}>Emberville item database</Link>, which
        records only categories until they can be verified.
      </p>

      <h2>Rebuilding Emberville, villagers and the estate</h2>
      <p>
        Rescuing survivors and rebuilding Emberville form the community side of the premise. Villagers are
        associated with stories, diaries, quests, classes, skills and rewards, which outlines how residents can
        connect narrative content to progression. Separately, the player can customize a personal estate with
        buildings, furniture, plants and decorations, and can use materials to craft items for the journey. The
        estate has a decorative role and a making role, while Emberville itself is the settlement being rebuilt as
        part of the larger story. The{" "}
        <Link href="/characters" title={routeTitle("/characters")}>Emberville characters guide</Link> covers what
        rescued villagers contribute, and appearance customization is confirmed for the player character as a
        separate kind of personal expression.
      </p>

      <h2>Emberville story: the Memento and the Vitromotus</h2>
      <p>
        Cygnus Cross’s studio introduction adds the Memento to the opening premise: a strange, luminous entity
        accompanies the protagonist through the prison. That makes the story more than an isolated escape attempt,
        pairing a companion with the survivors and ruined town as a second reason to keep moving.
      </p>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio introduction names the luminous companion as the Memento and places it beside the amnesiac protagonist on the escape journey.</p>
      </DataBlock>

      <h2>Emberville preview: what the September hands-on showed</h2>
      <p>
        IGN’s September 11 hands-on preview reports seeing mastery and class skill trees, loot, and stat points to
        distribute. Those are observations from a preview rather than a complete specification, but they show that
        the public system outline had moved beyond a bare genre pitch by that preview.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>Scott White’s September 11 preview notes mastery and class skill trees, loot, and distributable stat points in the preview he played.</p>
      </DataBlock>

      <h2>Emberville developer notes beyond the store summary</h2>
      <p>
        In its July feature release, Cygnus Cross describes a two-button combat base expanded by weapon-bound
        combos and class skills, plus a dynamic interface that changes the HUD around the player’s current needs.
        The same release says inherited skills are carried from one leveled-up class to another. These are
        developer-stated design details, and IGN’s preview independently observed trees and stat allocation.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The developer release describes weapon-bound combos, class-related combat skills, a dynamic HUD, and inheritance from a leveled-up class.</p>
      </DataBlock>

      <h2>Emberville comparisons with Stardew Valley and Diablo</h2>
      <p>
        Press coverage uses “Diablo Lite meets Stardew Valley” as shorthand for Emberville’s action combat and
        gathering-and-rebuilding loop. The comparison is editorial rather than a developer category; the{" "}
        <Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville vs Stardew
        Valley and Diablo comparison</Link> sets out the reported combat differences and what the shorthand leaves
        out.
      </p>

      <h2>Emberville’s studio and voice cast</h2>
      <p>
        Cygnus Cross is the independent studio behind Emberville, led by founder and lead game director Brynjar
        Gigja with co-founder and co-game director Ben “CohhCarnage” Cassell. The studio also publishes a
        22-person voice-cast roster, with two character roles named in coverage. See the{" "}
        <Link href="/studio" title={routeTitle("/studio")}>Emberville developer profile</Link> and the{" "}
        <Link href="/voice-cast" title={routeTitle("/voice-cast")}>Emberville voice cast reference</Link> for the
        sourced detail.
      </p>

      <h2>What is still unconfirmed</h2>
      <p>
        Everything below is genuinely open in the sources cited on this site. It is listed once here rather than
        repeated through the sections above, and it will be filled in only when a primary source or the playable
        game supports it.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Area</th><th scope="col">Still unconfirmed</th></tr></thead>
            <tbody>
              <tr><td>World</td><td>Area and biome names, exact biome count, map layout, route order</td></tr>
              <tr><td>Combat</td><td>Weapon and spell names, attack inputs, damage values, cooldowns, status effects, enemy resistances</td></tr>
              <tr><td>Growth</td><td>Class names, skill trees, ability prerequisites, inheritance limits, level cap, attribute tables</td></tr>
              <tr><td>Items</td><td>Item names, recipes, resource quantities, crop seasons, station requirements, item values</td></tr>
              <tr><td>Characters</td><td>Named residents, diaries, quest structures, relationship mechanics, performer-to-role pairings beyond the two confirmed</td></tr>
              <tr><td>Estate</td><td>Building catalogue, plot size, placement grid, unlock conditions, appearance options</td></tr>
              <tr><td>Release</td><td>Exact unlock time, specific price, full-release (1.0) date</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>How this Emberville wiki handles confirmed and unknown data</h2>
      <p>
        This Emberville wiki distinguishes developer statements, official listings and media observations from
        details that remain unknown; see the{" "}
        <Link href="/about/methodology" title={routeTitle("/about/methodology")}>sources and methodology page</Link>{" "}
        for the full verification policy.
      </p>

      <h2>Emberville wiki FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
