import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Wiki: Setting, Combat & Gameplay Systems";
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
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function WikiPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Wiki", href: route.path }]} />
      <h1>Emberville Wiki: Setting and Systems</h1>
      <p className="answer">
        This Emberville wiki is a structured guide to what the Steam store page confirms about the setting and
        gameplay. Its subject areas are world and story, exploration, combat, character growth, crafting,
        rebuilding, villagers and customization. It is not a fabricated catalogue: the public description does
        not give individual weapon names, enemy entries, character biographies, item statistics or an exact
        biome count. Those gaps are identified rather than filled with guesses.
      </p>

      <h2>At a glance: the announced game</h2>
      <p>
        Cygnus Cross is both developer and publisher. Emberville is planned for Early Access on Steam on
        27 October 2026 and is listed as single-player. Its premise follows an amnesiac character who wakes in
        the Vitromotus, a magical underground prison. The player explores its tunnels, ruins, survivor
        settlements, unusual biomes and monsters; the wider objective includes rescuing survivors and rebuilding
        Emberville. The description connects growth to combat, exploration, rebuilding and choices, so the
        overall design spans both action and community restoration.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Wiki category</th><th scope="col">Confirmed scope</th></tr></thead>
            <tbody>
              <tr><td>World</td><td>The Vitromotus, an underground magical prison; kymia is emotion-derived and makes prisoners return to life</td></tr>
              <tr><td>Exploration</td><td>Tunnels, ruins, survivor settlements, unusual biomes and monsters</td></tr>
              <tr><td>Combat</td><td>Positioning, timing, perception, weapon-specific combos, combination attacks, melee, magic and ranged options</td></tr>
              <tr><td>Growth</td><td>Combat, exploration, rebuilding and choices contribute; skills include inherited active and passive abilities</td></tr>
              <tr><td>Making and building</td><td>Gathering, crafting, farming, cooking and customization of a personal estate</td></tr>
              <tr><td>Release context</td><td>Single-player Early Access planned for 27 October 2026; no exact unlock time is given</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>World reference: the Vitromotus and kymia</h2>
      <p>
        The Vitromotus is the central named setting in the store description. It is an underground magical
        prison, and it is where the player character wakes after losing their memories. The description presents
        it as an explorable environment rather than a single room: tunnels, ruins and settlements of survivors
        are among the places the player can encounter, alongside strange biomes and monsters. It does not name
        those areas or provide a map, route order or count of distinct regions.
      </p>
      <p>
        Kymia is the other essential term. It is a power that originates in emotions and is associated with
        prisoners returning to life. That statement gives the setting a specific supernatural rule without
        explaining every consequence of that rule. The store description does not supply a glossary of emotional
        sources, a resource interface, a crafting recipe involving kymia or a list of characters who use it. A
        careful reference should therefore keep the definition narrow: emotion-derived force, connected to the
        return of prisoners to life.
      </p>

      <h2>Exploration and areas</h2>
      <p>
        Exploration connects several kinds of spaces: tunnels, ruins, survivor settlements and unusual biomes.
        The store description also identifies monsters as part of the world. That supports an area index organized
        around environments and discoveries, but not a detailed atlas. No named map regions, entrances, compass
        directions, procedural generation rules, floor counts or enemy placements are provided. The word “biomes”
        indicates variety; it is not evidence for a fixed number. We will only assign a place name or describe an
        area-specific encounter when a primary source identifies it or the playable game can be checked.
      </p>
      <p>
        This distinction helps a reader use a pre-release wiki. A confirmed system can be explained in plain
        language, while a location database needs exact entries. For now, the useful confirmed description is that
        the player explores different underground spaces, encounters monsters and can find survivors. Readers
        looking for a geography reference can follow the{" "}
        <Link href="/map" title={routeTitle("/map")}>areas index</Link> as it is populated with verifiable names and details.
      </p>

      <h2>Combat reference: actions and choices</h2>
      <p>
        Combat is described through decisions about positioning, timing and knowledge. Those terms suggest that
        the player is expected to read situations and choose when or where to act, rather than treating every
        encounter as an interchangeable attack sequence. Each weapon has its own combos, and combination attacks
        are also part of the design. The store page does not identify a complete set of weapons or spell names,
        so this wiki can explain the announced structure but cannot yet provide a verified move list.
      </p>
      <p>
        The disclosed attack approaches include melee, magic and ranged combat. This is a broad taxonomy, not a
        promise that every character can use every option in every situation. Weapon-specific combinations imply
        that weapon choice matters to how an attack is performed, while class skills add another layer of
        customization. Exact attack inputs, damage values, cooldowns, status effects and enemy resistances are not
        listed. Those are precisely the kinds of fields that should be recorded only after they can be observed
        reliably in a build of the game.
      </p>

      <h2>Classes, abilities and character growth</h2>
      <p>
        The class system is notable for its stated flexibility: class skills can be inherited as active or
        passive abilities, and players may switch classes at any time. In practical terms, that means the store
        description does not frame a class as a permanently fixed identity. Equipment and skills also both
        contribute to a character's setup. It is reasonable to organize later wiki entries by class, skill and
        equipment, but the listing does not yet provide skill trees, ability prerequisites, inheritance limits,
        class names or numerical bonuses.
      </p>
      <p>
        Growth is broader than combat alone. The store page explicitly includes exploration, rebuilding and
        choices alongside battle as parts of progression. This matters for the wiki structure: character
        development should not be reduced to a speculative damage build or a guessed level curve. No level cap,
        experience formula, attribute table or optimal progression sequence has been stated in the source used
        here. Our companion{" "}
        <Link href="/builds" title={routeTitle("/builds")}>builds and equipment reference</Link> is a place for
        future tested combinations, not pre-launch rankings.
      </p>

      <h2>Materials, crafting and food</h2>
      <p>
        The game includes gathering, crafting, farming and cooking. The store description lists the kinds of
        output players can create from collected materials: equipment, potions, food, tools and accessories.
        These categories connect practical preparation to the action RPG side, but specific recipes and resource
        uses are not listed. The distinction between confirmed activity and unknown recipe data is important: a
        crafting system is confirmed, while the ingredients for a particular potion are not.
      </p>
      <p>
        A future item reference can be useful without assuming anything in advance. For each confirmed entry, a
        reader would want the exact displayed name, category, use, source, acquisition method and the game version
        in which the detail was checked. Until those individual facts are available, the wiki records categories
        rather than fictional item cards. The same restraint applies to crops, cooking outputs, tool tiers and
        gathering locations. The store page confirms that these activities exist, not a complete recipe book.
      </p>

      <h2>Rebuilding Emberville, villagers and the estate</h2>
      <p>
        Rescuing survivors and rebuilding Emberville form the community side of the premise. Villagers are
        associated with stories, diaries, quests, classes, skills and rewards. That is a meaningful outline of
        how residents can connect narrative content to progression, but the listing does not identify individuals
        or explain the exact structure of each quest. It does not verify named residents, relationship meters,
        or named relationship outcomes. Those unsupported details do not belong in a factual character database.
      </p>
      <p>
        Separately, the player can customize a personal estate. The described options include placing buildings
        and arranging furniture, plants and decorations. Materials can be used to craft gear, potions, food,
        tools and accessories. The estate therefore has both a decorative role and a connection to making things,
        while Emberville itself is the settlement being rebuilt as part of the larger story. There is no confirmed
        building catalogue, estate size, placement grid or list of unlock conditions in the store description.
      </p>
      <p>
        Appearance customization for the player character is also confirmed. The store page does not list the
        available looks or explain whether options are available from the beginning, so those details remain
        open. A future character entry should distinguish appearance choices from class, skills and equipment;
        the store description treats them as different parts of the experience.
      </p>

      <h2>How this wiki handles confirmed and unknown data</h2>
      <p>
        This page relies on one first-party reference: the Steam store listing linked in the citation above, checked
        on 2026-10-09. It confirms the broad world premise and system categories. It does not provide a named
        entry list, complete map, item values, release price, exact unlock time, full-release date or precise
        biome count. “Not specified” does not mean that a feature is absent; it means there is not enough
        information in the cited source to state it as fact.
      </p>
      <p>
        Early Access begins on 27 October 2026 according to the listing, but the store page gives a date rather
        than a time of day. The release-status table and the date-only explanation are on the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>release information page</Link>. For a
        practical pre-launch orientation to how the confirmed systems fit together, see the{" "}
        <Link href="/guides" title={routeTitle("/guides")}>systems guide</Link>. Neither reference should be
        read as a substitute for in-game testing once the game is available.
      </p>

      <h2>Emberville wiki FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        This overview is intentionally a system map, not an exhaustive database. When individual entries become
        supportable, useful records will describe what was checked and avoid turning an unverified assumption
        into a “wiki fact.” That approach is especially important for combat values and quest details, which may
        be revised during Early Access.
      </p>
    </article>
  );
}
