import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Items: Crafting & Database Reference";
const route = getRoute("/item-database");

const FAQS: Faq[] = [
  {
    q: "What item categories can players craft?",
    a: "The Steam page names equipment, potions, food, tools, and trinkets as craftable outputs made from collected materials.",
  },
  {
    q: "Where does Emberville describe crafting for the journey?",
    a: "The player’s personal estate is described as a place to craft items needed for the journey, alongside its home-customization features.",
  },
  {
    q: "Are item recipes and statistics published?",
    a: "The cited store description does not list item names, recipes, material quantities, effects, or numerical stats.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ItemDatabasePage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Item Database", href: route.path }]} />
      <h1>Emberville Items: Crafting and Equipment</h1>
      <p className="answer">
        Emberville’s item system begins with collected materials and crafting. The Steam page names equipment,
        potions, food, tools, and trinkets as craftable outputs, while gathering, farming, and cooking provide
        connected activities. The player’s personal estate is a place to make items for the journey as well as a
        customizable home. This guide organizes those confirmed categories; named recipes and item stats are not
        published in the store description.
      </p>

      <h2>Emberville crafting categories</h2>
      <p>
        The Early Access feature list includes gathering, crafting, farming, cooking, equipment, and skills. The
        store description explains what crafting can produce: combat equipment and useful supplies such as potions,
        food, tools, and trinkets. These categories give the item database a practical shape, from equipment used
        during combat to consumables and utility items that support a journey through the Vitromotus.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">Confirmed category</th><th scope="col">What the game description says</th><th scope="col">Connection to play</th></tr></thead>
            <tbody>
              <tr><td>Equipment</td><td>Combat equipment can be crafted; weapons and skills can be improved</td><td>Supports the character’s combat setup</td></tr>
              <tr><td>Potions</td><td>Potions are among the outputs crafted from collected materials</td><td>A named craftable category for the journey</td></tr>
              <tr><td>Food</td><td>Cooking is an announced system and food can be crafted</td><td>Connects cooking with material use</td></tr>
              <tr><td>Tools</td><td>Tools are listed among craftable outputs</td><td>Utility category; individual uses are not listed</td></tr>
              <tr><td>Trinkets</td><td>Trinkets are listed among craftable outputs</td><td>Equipment-adjacent category; individual effects are not listed</td></tr>
              <tr><td>Estate objects</td><td>Buildings, furniture, plants, and decorations customize the estate</td><td>Home-building and decoration, distinct from journey items</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Materials, blueprints, and recipe progression</h2>
      <p>
        The developer’s July feature release expands the materials picture: it names plants, wood, and minerals as
        gathering categories, and says crafted items can be improved by leveling, learning skills, blueprints, and
        recipes. Those details connect resource gathering to progression instead of presenting recipes as static
        shopping lists. The release does not identify any particular Emberville material or recipe, so this is a
        description of the announced crafting structure, not an item-by-item database entry.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The feature release names plants, wood, and minerals as gathering materials and describes improving craftable items through levels, skills, blueprints, and recipes.</p>
      </DataBlock>

      <h2>Loot seen in the IGN preview</h2>
      <p>
        IGN’s September hands-on preview mentions loot alongside mastery trees, class skill trees, and distributable
        stat points. This confirms that loot appeared in the early playable look, but the preview does not publish
        an item list, drop rates, named equipment, or numerical stats. The useful distinction for this database is
        between the presence of loot in a preview and verified item records with names and effects; the latter still
        needs an inspectable source or in-game entry.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>IGN’s September 11 preview mentions loot in the build it played but does not provide individual item data.</p>
      </DataBlock>

      <h2>How materials connect to crafting and progression</h2>
      <p>
        Materials are the link between gathering and making: the description says players collect resources and use
        them to craft equipment and useful items. Farming and cooking are also named activities, placing food
        alongside the wider crafting loop. The source does not specify which materials feed which recipe, but it
        confirms that gathering and crafting belong to the same progression picture rather than being unrelated
        features.
      </p>
      <p>
        Item use also connects to character growth. The Steam page says weapons and skills can be improved through
        leveling, items, and help from rescued villagers. It does not identify the items used or quantify their
        effect, but it makes equipment and item use part of the wider development system. For the weapon, class, and
        combo mechanics that shape a combat setup, see the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">Emberville builds guide</Link>.
      </p>

      <h2>Items and the personal estate</h2>
      <p>
        The estate combines a personal home with a crafting space. Players can customize it with buildings,
        furniture, plants, and decorations, and make items needed for the journey there. Those estate objects are
        different from the equipment, potions, food, tools, and trinkets listed as crafting outputs: the description
        confirms both home customization and practical item crafting, but does not say that every decoration is a
        recipe or that every journey item is made at the estate.
      </p>
      <p>
        The town of Emberville adds another link between people and production. Residents help rebuild through
        gathering and crafting professions, while rescued villagers can lend skills and help improve weapons and
        skills. This ties crafting to the community restoration loop. The <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">characters and survivors guide</Link> explains what the store page confirms about villagers; the <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">Emberville map guide</Link> covers the spaces where exploration and rebuilding take place.
      </p>

      <h2>Emberville item database at Early Access</h2>
      <p>
        The public store page confirms item categories, not individual entries. It does not name specific weapons,
        resources, potions, recipes, quantities, effects, or drop locations. When Early Access begins, this database
        will add item names, recipes, and stats that can be checked in the game, with a clear distinction between
        what an item does and where it was obtained. Until then, the useful reference is the confirmed crafting
        system and its role in exploration, combat, and rebuilding—not speculative sample loot.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/wiki" title="Emberville Wiki: Setting, Combat &amp; Gameplay Systems">Emberville wiki and gameplay systems</Link></li>
        <li><Link href="/news" title="Emberville News: Early Access Scope &amp; Roadmap">Official Early Access announcements</Link></li>
        <li><Link href="/release-date" title="Emberville Early Access Date 2026: Price &amp; Scope">Early Access date, platform, and scope</Link></li>
        <li><Link href="/about/methodology" title="Sources &amp; Methodology | Emberville Guide">Sources and verification methodology</Link></li>
      </ul>

      <h2>Emberville item database FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
