import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

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
      <h1>Emberville Wiki: Setting and Systems</h1>
      <p className="answer">
        This Emberville wiki is a structured guide to what the Steam store page confirms about the setting and
        gameplay. Its subject areas are world and story, exploration, combat, character growth, crafting,
        rebuilding, villagers and customization. It records confirmed categories, so the public description's
        silence on individual weapon names, enemy entries, character biographies, item statistics and an exact
        biome count is left visible. Those gaps are identified, not filled with guesses.
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
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Wiki category</th><th scope="col">Confirmed scope</th></tr></thead>
            <tbody>
              <tr><td>World</td><td>The Vitromotus, an underground magical prison; kymia is emotion-derived and makes prisoners return to life</td></tr>
              <tr><td>Exploration</td><td>Tunnels, ruins, survivor settlements, unusual biomes and monsters</td></tr>
              <tr><td>Combat</td><td>Positioning, timing, perception, weapon-specific combos, combination attacks, melee, magic and ranged options</td></tr>
              <tr><td>Growth</td><td>Combat, exploration, rebuilding and choices contribute; skills include inherited active and passive abilities</td></tr>
              <tr><td>Making and building</td><td>Gathering, crafting, farming, cooking and customization of a personal estate</td></tr>
              <tr><td>Release context</td><td>Single-player Early Access planned for 27 October 2026; the exact unlock time stays unannounced</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>World reference: the Vitromotus and kymia</h2>
      <p>
        The Vitromotus is the central named setting in the store description. It is an underground magical
        prison, and it is where the player character wakes after losing their memories. The description presents
        it as an explorable environment rather than a single room: tunnels, ruins and settlements of survivors
        are among the places the player can encounter, alongside strange biomes and monsters. Names for those
        areas, plus a map, route order or count of distinct regions, stay unpublished.
      </p>
      <p>
        Kymia is the other essential term. It is a power that originates in emotions and is associated with
        prisoners returning to life. That statement gives the setting a specific supernatural rule while leaving
        its wider consequences open. The store description omits a glossary of emotional sources, a resource
        interface, a crafting recipe involving kymia and a list of characters who use it. A careful reference
        should therefore keep the definition narrow: emotion-derived force, connected to the return of prisoners
        to life.
      </p>

      <h2>Exploration and areas</h2>
      <p>
        Exploration connects several kinds of spaces: tunnels, ruins, survivor settlements and unusual biomes.
        The store description also identifies monsters as part of the world. That supports an area index organized
        around environments and discoveries, while a detailed atlas stays out of reach. Named map regions,
        entrances, compass directions, procedural generation rules, floor counts and enemy placements all remain
        unpublished. The word “biomes” indicates variety, distinct from evidence of a fixed number. We will only
        assign a place name or describe an area-specific encounter when a primary source identifies it or the
        playable game can be checked.
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
        the player is expected to read situations and choose when or where to act, instead of treating every
        encounter as an interchangeable attack sequence. Each weapon has its own combos, and combination attacks
        are also part of the design. The store page leaves a complete set of weapons and spell names unpublished,
        so this wiki can explain the announced structure while a verified move list stays pending.
      </p>
      <p>
        The disclosed attack approaches include melee, magic and ranged combat. This is a broad taxonomy, and it
        stops short of a promise that every character can use every option in every situation. Weapon-specific
        combinations imply that weapon choice matters to how an attack is performed, while class skills add
        another layer of customization. Exact attack inputs, damage values, cooldowns, status effects and enemy
        resistances stay unlisted. Those are precisely the kinds of fields that should be recorded only after they
        can be observed reliably in a build of the game.
      </p>

      <h2>Classes, abilities and character growth</h2>
      <p>
        The class system is notable for its stated flexibility: class skills can be inherited as active or
        passive abilities, and players may switch classes at any time. In practical terms, the store description
        treats a class as a changeable role rather than a permanently fixed identity. Equipment and skills also
        both contribute to a character's setup. It is reasonable to organize later wiki entries by class, skill
        and equipment, while the listing leaves skill trees, ability prerequisites, inheritance limits, class
        names and numerical bonuses for later.
      </p>
      <p>
        Growth is broader than combat alone. The store page explicitly includes exploration, rebuilding and
        choices alongside battle as parts of progression. This matters for the wiki structure: character
        development reaches beyond a speculative damage build or a guessed level curve. The source used here
        leaves the level cap, experience formula, attribute table and optimal progression sequence unstated. Our
        companion{" "}
        <Link href="/builds" title={routeTitle("/builds")}>builds and equipment reference</Link> is a place for
        future tested combinations rather than pre-launch rankings.
      </p>

      <h2>Materials, crafting and food</h2>
      <p>
        The game includes gathering, crafting, farming and cooking. The store description lists the kinds of
        output players can create from collected materials: equipment, potions, food, tools and trinkets.
        These categories connect practical preparation to the action RPG side, while specific recipes and resource
        uses stay unlisted. The distinction between confirmed activity and unknown recipe data is important: a
        crafting system is confirmed, while the ingredients for a particular potion remain open.
      </p>
      <p>
        A future item reference can be useful without assuming anything in advance. For each confirmed entry, a
        reader would want the exact displayed name, category, use, source, acquisition method and the game version
        in which the detail was checked. Until those individual facts are available, the wiki records categories
        in place of fictional item cards. The same restraint applies to crops, cooking outputs, tool tiers and
        gathering locations. The store page confirms that these activities exist, while a complete recipe book
        stays for later.
      </p>

      <h2>Rebuilding Emberville, villagers and the estate</h2>
      <p>
        Rescuing survivors and rebuilding Emberville form the community side of the premise. Villagers are
        associated with stories, diaries, quests, classes, skills and rewards. That is a meaningful outline of
        how residents can connect narrative content to progression, while the listing leaves individuals and the
        exact structure of each quest unstated. Named residents, relationship meters and named relationship
        outcomes all remain unverified. Those unsupported details stay out of a factual character database.
      </p>
      <p>
        Separately, the player can customize a personal estate. The described options include placing buildings
        and arranging furniture, plants and decorations. Materials can be used to craft equipment, potions, food,
        tools and trinkets. The estate therefore has both a decorative role and a connection to making things,
        while Emberville itself is the settlement being rebuilt as part of the larger story. A confirmed building
        catalogue, estate size, placement grid and list of unlock conditions all stay unstated in the store
        description.
      </p>
      <p>
        Appearance customization for the player character is also confirmed. The store page leaves the available
        looks and whether they are available from the beginning unlisted, so those details remain open. A future
        character entry should distinguish appearance choices from class, skills and equipment; the store
        description treats them as different parts of the experience.
      </p>

      <h2>The Memento and the Vitromotus story</h2>
      <p>
        Cygnus Cross’s studio introduction adds the Memento to the opening premise: a strange, luminous entity
        accompanies the protagonist through the prison. That makes the story more than an isolated escape attempt;
        the studio presents the player as having a companion while survivors and the ruined town create a second
        reason to keep moving. The official site still stops short of a character-by-character account of what
        the Memento is or how its abilities work.
      </p>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio introduction names the luminous companion as the Memento and places it beside the amnesiac protagonist on the escape journey.</p>
      </DataBlock>

      <h2>What the September preview has shown</h2>
      <p>
        IGN’s September 11 hands-on preview reports seeing mastery and class skill trees, loot, and stat points to
        distribute. Those are observations from a preview, and they stop short of a complete specification: the
        article leaves some trees, items and the final progression formula unpublished. It does, however, show
        that the public system outline had moved beyond a bare genre pitch by that preview, with character
        progression visible in a playable look.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>Scott White’s September 11 preview notes mastery and class skill trees, loot, and distributable stat points in the preview he played.</p>
      </DataBlock>

      <h2>Developer feature notes beyond the storefront summary</h2>
      <p>
        In its July feature release, Cygnus Cross describes a two-button combat base expanded by weapon-bound combos
        and class skills, plus a dynamic interface that changes the HUD around the player’s current needs. The same
        release says inherited skills are carried from one leveled-up class to another. These are developer-stated
        design details; IGN’s preview independently observed trees and stat allocation, while a full ability
        catalogue and a tested optimal build stay unpublished in both.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The developer release describes weapon-bound combos, class-related combat skills, a dynamic HUD, and inheritance from a leveled-up class.</p>
      </DataBlock>

      <h2>How Emberville compares to Stardew Valley and Diablo</h2>
      <p>
        The comparison that travels furthest is “Diablo meets Stardew Valley,” and it began as press shorthand
        rather than a developer category. IGN introduced “Diablo Lite meets Stardew Valley” with the January
        announcement, and GameSpot’s January 28 report described Diablo-style action paired with Stardew Valley
        vibes. Read as a description of structure rather than of feel, the shorthand maps onto two of the game’s
        pillars: action-RPG combat in the Vitromotus below, and farming-style gathering with town rebuilding above.
      </p>
      <DataBlock source="GameSpot" url="https://www.gamespot.com/articles/emberville-announced-for-pc-blends-diablo-style-action-with-stardew-valley-vibes/1100-6537712/" verified="2026-10-10">
        <p>GameSpot’s January 28 report described Emberville as blending Diablo-style action with Stardew Valley vibes.</p>
      </DataBlock>
      <p>
        IGN’s September hands-on preview sharpens the split. Against Diablo’s single main attack backed by spells,
        it sets Emberville’s two-button combo system, where a main and an alternate attack chain into a stronger
        finishing hit. Against Stardew Valley’s farming loop, it sets the gathering the preview actually performed —
        mining ore veins, cutting trees and pulling plants in the Vitromotus. The shorthand also omits the layer
        neither comparison covers: rescued survivors return to Emberville, reopen shops and improve your gear. And
        where Diablo is built around multiplayer, the Steam listing describes Emberville as single-player only.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>IGN’s September 11 preview contrasts the two-button combo system with Diablo’s single main attack and likens the gathering loop to Stardew Valley-style sims.</p>
      </DataBlock>

      <h2>The studio and voice cast behind the game</h2>
      <p>
        Emberville is the debut title from Cygnus Cross, an independent studio in Cork, Ireland that self-publishes
        the game. The studio is led by founder and lead game director Brynjar Gigja, with Twitch streamer Ben
        “CohhCarnage” Cassell as co-founder and co-game director — a role sometimes described loosely in community
        posts as “creative lead.” The team had been building Emberville for roughly three years before the January
        2026 reveal.
      </p>
      <DataBlock source="GamingTrend" url="https://gamingtrend.com/news/get-a-look-at-emberville-before-it-launches-into-early-access-this-october" verified="2026-10-10">
        <p>GamingTrend names “Co-founder and Co-Game Director CohhCarnage” and “Lead Game Director Bynja Gigja” at Cygnus Cross.</p>
      </DataBlock>
      <DataBlock source="Gamer Social Club" url="https://gamersocialclub.ca/2026/09/11/emberville-preview/" verified="2026-10-10">
        <p>Gamer Social Club’s September 11 preview describes the studio as building Emberville since 2023 in Cork, Ireland, led by founder and lead game director Brynjar Gigja with co-founder and co-director Ben “CohhCarnage” Cassell.</p>
      </DataBlock>
      <p>
        The studio’s official site also publishes a 22-name voice cast, led by voice-acting director Alex Jordan.
        The roster includes Doug Cockle, Matthew Mercer, Jennifer English, Ben Starr, Abubakar Salim, Jane Perry,
        Amelia Tyler, Elias Toufexis and Briana White; the full list is on the{" "}
        <Link href="/characters" title={routeTitle("/characters")}>characters page</Link>. Two roles have been named
        in coverage so far: Alex Jordan as the elderly Adeos and Matthew Mercer as the shopkeeper Gumu.
      </p>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio site publishes the full 22-name Emberville voice cast, with Alex Jordan credited as Voice Acting Director.</p>
      </DataBlock>

      <h2>How this wiki handles confirmed and unknown data</h2>
      <p>
        This overview combines the developer’s Steam feature description with the studio’s own story introduction,
        its July feature release, the official voice-cast listing, and dated coverage from IGN, GameSpot,
        GamingTrend and Gamer Social Club. Those sources serve different purposes: developer pages describe
        intended systems, while previews and reports record what a journalist saw or was told. A complete area map,
        item catalogue and final skill tree stay outside all of them, so this wiki keeps those distinctions clear
        instead of treating a preview observation as a complete game specification.
      </p>
      <p>
        Early Access begins on 27 October 2026 according to the listing, though the store page gives a date
        without a time of day. The release-status table and the date-only explanation are on the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>release information page</Link>. For a
        practical pre-launch orientation to how the confirmed systems fit together, see the{" "}
        <Link href="/guides" title={routeTitle("/guides")}>systems guide</Link>. Both references complement
        in-game testing once the game is available.
      </p>

      <h2>Emberville wiki FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        This overview is intentionally a system map, with exhaustive database coverage left for later. When
        individual entries become supportable, useful records will describe what was checked and avoid turning an
        unverified assumption into a “wiki fact.” That approach is especially important for combat values and
        quest details, which may be revised during Early Access.
      </p>
    </AdArticle>
  );
}
