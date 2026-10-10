import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Guides: Systems, Prep & Verified Tips"
const route = getRoute("/guides");

const FAQS: Faq[] = [
  {
    q: "Is this an Early Access walkthrough?",
    a: "No. It is a pre-launch guide to the systems described on the Steam store page, not a report of routes or tactics tested in a playable build.",
  },
  {
    q: "What is the confirmed release date?",
    a: "The listed Early Access date is 27 October 2026. Steam does not state an exact unlock time.",
  },
  {
    q: "What should a combat guide verify after launch?",
    a: "It should test weapon combos, timing, positioning, combination attacks, skill interactions and relevant equipment in the current game version.",
  },
  {
    q: "Does the game require a fixed class choice?",
    a: "The store page says classes can be changed at any time and class skills can be inherited as active or passive abilities.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function GuidesPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides", href: route.path }]} />
      <h1>Emberville Guides: A Pre-Launch Systems Tour</h1>
      <p className="answer">
        These Emberville guides are a practical orientation to the systems the developer has described, not a
        fabricated first-day walkthrough. Before Early Access, the useful work is to understand how exploration,
        combat, rescue, crafting and rebuilding connect—and to mark which tactical details are still unknown.
        This page therefore offers a way to read the announced mechanics, questions to check when playing, and
        clear boundaries around claims that cannot yet be verified.
      </p>

      <h2>Start with the verified outline</h2>
      <p>
        The store description establishes a straightforward premise: an amnesiac character wakes in the
        Vitromotus, a magical underground prison, and becomes involved in rescuing survivors and rebuilding
        Emberville. Exploration includes tunnels, ruins, settlements, unusual biomes and monsters. Kymia is
        described as an emotion-derived force that makes prisoners return to life. This is enough to explain the
        broad setting and stakes; it is not enough to name the protagonist, list every location or reconstruct
        the story chapter by chapter.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">System area</th><th scope="col">Confirmed information</th><th scope="col">Still to test or learn</th></tr></thead>
            <tbody>
              <tr><td>Combat</td><td>Position, timing and perception matter; weapons have combos; combination attacks; melee, magic and ranged approaches</td><td>Inputs, damage, enemy patterns and tested tactics</td></tr>
              <tr><td>Class and skills</td><td>Classes can be changed at any time; active and passive skills can be inherited</td><td>Class names, skill limits, costs and exact interactions</td></tr>
              <tr><td>Exploration</td><td>Tunnels, ruins, survivor settlements, unusual biomes and monsters</td><td>Area names, routes, maps, drops and counts</td></tr>
              <tr><td>Making and restoring</td><td>Gather, craft, farm and cook; build and decorate a personal estate</td><td>Recipes, resource quantities, unlocks and optimal schedules</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Reading the core loop without assuming an order</h2>
      <p>
        The store listing presents several kinds of progress: fight, explore, rebuild and make choices. It also
        describes survivor rescue, crafting and an estate. A helpful mental model is that these activities can
        reinforce one another. Exploring may bring the player into contact with survivors and materials; combat
        challenges the player's timing and equipment choices; making things can produce equipment, potions, food,
        tools and trinkets; and rebuilding links underground activity to the town's recovery.
      </p>
      <p>
        That model is a connection between disclosed systems, not a prescribed quest order. There is no confirmed
        “best first area,” fixed sequence of residents, mandatory crop plan or shortest route in the cited source.
        When playing, follow the game's own prompts and record what actually unlocks each activity. A useful guide
        should tell a reader whether an instruction is stated by the game, observed in a specific version or simply
        a suggestion—not blur those categories into a single claim.
      </p>

      <h2>Combat orientation: observe before optimizing</h2>
      <p>
        The developer highlights positioning, timing and knowledge. Before recommending a weapon or skill, a
        trustworthy combat guide should identify what the player can see and control: how each weapon's combo is
        activated, what timing changes its sequence, what makes a combination attack available, and how movement
        affects an encounter. Those are questions for direct verification; the store listing does not publish
        button inputs, frame data, enemy tells or damage multipliers.
      </p>
      <p>
        The game includes melee, magic and ranged combat, but those labels alone do not establish a tier list.
        For an informative comparison, one would need to test options against comparable situations and report
        relevant context, including equipment and skills. Until that evidence exists, a “best weapon” ranking
        would be invented. The same restraint applies to claims about bosses, weaknesses and optimal dodge or
        attack windows. What can be said now is that the disclosed combat is built around situational judgment
        and weapon-specific combos.
      </p>

      <h2>What the IGN preview saw in progression</h2>
      <p>
        A September hands-on preview by IGN’s Scott White reports mastery and class skill trees, loot, and points
        the player could distribute among stats. That observation gives this pre-launch guide a concrete picture of
        what progression may look like in play, beyond the high-level feature list. It is still a preview snapshot:
        the article does not establish a finished skill tree, optimal allocation, or the full release balance.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>IGN’s September 11 preview reports mastery and class skill trees, loot, and stat points to distribute in the build it played.</p>
      </DataBlock>

      <h2>Class flexibility and loadout planning</h2>
      <p>
        The store page says players can switch classes at any time and inherit class skills as active or passive
        abilities. That is a useful design note for anyone worried about choosing a permanent archetype. It also
        suggests a practical test plan: compare the available class skills, note which ones can be carried over,
        and record whether a selected ability changes when the class changes. Do not assume there is no cost or
        restriction beyond what the listing explicitly states; those implementation details are not provided.
      </p>
      <p>
        Equipment and skills are both named as parts of character setup. A good build guide should therefore
        record more than a class label. It should show the relevant skill selections, equipment, tested encounter
        or activity and game version, so a reader knows when a recommendation applies. The disclosed store text
        does not supply named skills, numerical attributes, equipment affixes or an endgame meta. Use the
        <Link href="/wiki" title={routeTitle("/wiki")}>wiki system overview</Link> for confirmed categories; wait
        for actual in-game evidence before treating any combination as optimal.
      </p>

      <h2>Combat interface and layered controls</h2>
      <p>
        Cygnus Cross’s July feature release describes a simple two-button base with additional depth from weapon-bound
        combos and class-related skills. It also describes a dynamic UI that changes the HUD in response to what the
        player needs to manage. Those statements offer a useful way to read combat footage: look for how the weapon
        sequence, inherited class ability and interface work together, rather than assuming that a compact control
        scheme means combat has only two actions. The press release does not provide exact inputs or a complete HUD
        rule set.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The developer release describes two-button combat expanded by weapon-bound combos and class skills, alongside a HUD that adapts to player needs.</p>
      </DataBlock>

      <h2>Making resources useful</h2>
      <p>
        Gathering, crafting, farming and cooking are all part of the announced game. The player can collect
        materials to make equipment, potions, food, tools and trinkets. As a player-facing orientation, keep
        those outputs in mind when considering why a resource activity might matter: some crafted categories are
        directly named, while their recipes and exact use cases remain to be confirmed. The listing does not tell
        us which resources are common, how much storage exists, whether any recipe is missable or how long a crop
        takes to grow.
      </p>
      <p>
        Once available, a reliable crafting guide should capture exact recipe requirements from the current game,
        then distinguish ingredients that are confirmed from substitutions or player preferences. Farming advice
        should be based on observed planting and harvesting rules rather than assumed seasons. Cooking advice
        should name the actual effects displayed by the game rather than infer bonuses from a food's name. These
        checks turn a broad “crafting guide” into something another player can repeat and verify.
      </p>

      <h2>Rebuilding the town and customizing an estate</h2>
      <p>
        The story goal includes rescuing survivors and rebuilding Emberville. Villager stories, diaries, quests,
        classes, skills and rewards are part of the store description, but no complete character or quest list is
        supplied. A practical player journal can note a villager's exact name as displayed, the task accepted, the
        requirement stated and the reward actually received. It should not add relationship systems or plot
        conclusions that the game has not shown.
      </p>
      <p>
        The personal estate has a different emphasis: buildings can be made, and furniture, plants and decorations
        can be placed to customize the property. Materials also support crafting. For now, the source does not say
        what building plans exist, how large the plot is or which arrangement is most efficient. Treat design as
        player choice until tested mechanics demonstrate otherwise. The distinction between restoring the town
        and arranging a private estate is useful when sorting future tips; they are related parts of the game, not
        interchangeable names for one system.
      </p>

      <h2>What to verify on a first play session</h2>
      <p>
        A non-spoiler first-session checklist can be built around questions rather than invented answers. Confirm
        how the game explains movement and combat; observe one weapon's combos; note how class changes and skill
        inheritance are presented; identify the in-game language used for exploration and survivor objectives;
        and check where the interface describes gathering, crafting, farming or cooking. For every claim, write
        down whether it came from an on-screen explanation, a repeated test or a single observation. That habit
        makes future guides more useful and less likely to confuse an early impression with a rule.
      </p>
      <p>
        Keep track of the build or patch shown in the game if one is available, especially for values that may
        change. Record the exact item or ability text before paraphrasing it. If a result is uncertain, label it
        as a question to test rather than a recommendation. This method is more dependable than publishing a
        confident route before the game can be played, and it gives readers context if a later update changes a
        system.
      </p>

      <h2>Early Access, date and unknown boundaries</h2>
      <p>
        Cygnus Cross describes Early Access as a fully playable experience with substantial content and meaningful
        updates. The studio estimates approximately eighteen months toward what it calls the complete experience,
        while noting that feedback may extend development. That estimate is not a full-release date. Planned 1.0
        work includes Workshop modding, optimization, more difficulty options, balancing, creative-area
        implementation, bosses, biomes and monsters, but the roadmap can change and does not provide a dated
        delivery schedule for each item.
      </p>
      <p>
        The announced Early Access date is 27 October 2026, with no exact unlock time specified by Steam. For the
        date and scope table, see the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>release-date page</Link>. The
        <Link href="/countdown" title={routeTitle("/countdown")}>Emberville countdown: date vs unlock time</Link> makes clear why a
        calendar timer should not be mistaken for a store unlock notice. Minimum PC requirements are listed as
        64-bit Windows 10 or newer, Intel Core i5 3.2 GHz or equivalent, 4 GB RAM, a DirectX 10-compatible
        graphics card, DirectX 11 and 4 GB storage.
      </p>

      <h2>Related Emberville guides</h2>
      <ul>
        <li><Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville compared with Stardew Valley and Diablo</Link></li>
        <li><Link href="/builds" title={routeTitle("/builds")}>Emberville combat, classes and builds</Link></li>
        <li><Link href="/characters" title={routeTitle("/characters")}>Emberville characters, survivors and villagers</Link></li>
        <li><Link href="/item-database" title={routeTitle("/item-database")}>Emberville crafting and item categories</Link></li>
      </ul>

      <h2>Emberville guides FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        This guide combines the developer’s store and feature descriptions with IGN’s dated hands-on preview.
        Developer statements describe planned mechanics; the preview reports observations from an earlier playable
        look. Neither substitutes for testing a launch build, so tactics and optimal setups still require direct play.
      </p>
    </AdArticle>
  );
}
