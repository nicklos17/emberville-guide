import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Items: Crafting & Database Reference"
const route = getRoute("/item-database");

const FAQS: Faq[] = [
  {
    q: "Does Steam say that every crafting recipe is made at the personal estate?",
    a: "No. The description says the estate is a place to craft items needed for the journey, but does not assign every recipe or crafting activity to that space."
  },
  {
    q: "Does the official page describe more than one way to gather materials?",
    a: "It confirms gathering and crafting as systems, but does not describe specific gathering methods or say whether a material has multiple sources."
  },
  {
    q: "Does the store page describe selling or trading items?",
    a: "No selling or player-trading system is described in the item and crafting information summarized here, so neither is included as a confirmed database feature."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ItemDatabasePage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Item Database", href: route.path }]} />
      <h1>Emberville Item Database and Crafting Guide</h1>
      <p className="answer">
        Emberville's Steam page confirms gathering, crafting, farming, cooking, equipment, and a personal estate where the player can make equipment, potions, food, tools, and trinkets from collected materials. It does not publish individual item names, recipe lists, quantities, or item statistics. This page explains the confirmed categories and a transparent database format without inventing entries or values.
      </p>

      <h2>What the official item information covers</h2>
      <p>
        The Early Access feature list identifies base building, gathering, crafting, farming, cooking, equipment, and skills systems. The game description adds more context: players can collect materials and use them to craft combat equipment as well as useful potions, food, tools, and trinkets. The personal estate is described as a place within Emberville that can be customized with buildings, furniture, plants, and decorations, and where the player can craft things needed for the journey through the Vitromotus.
      </p>
      <p>
        These are confirmed activity and object categories, not a full catalogue. The store page does not name a particular weapon, potion, meal, material, tool, trinket, furniture piece, plant, or decoration. It does not give an item's attributes, recipe, rarity, inventory size, value, crafting time, or source location. For that reason, this database guide uses category-level descriptions only. A plausible example item is still not an official item entry, even if it sounds appropriate for a fantasy crafting game.
      </p>
      <p>
        “Equipment” and “skills” are both called out by the official page, but they are not interchangeable terms. Equipment belongs to the announced equipment system; skills are described as part of character progression and combat classes. The description does not say that skills occupy inventory slots or can be crafted. The same care applies to estate objects: buildings and decorations are named as customization options, but the store page does not supply an estate inventory list or a construction recipe book.
      </p>

      <h2>Officially stated categories</h2>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Category or activity</th><th scope="col">Official description supports</th><th scope="col">Not specified on the store page</th></tr></thead>
            <tbody>
              <tr><td><b>Gathered materials</b></td><td>Materials are collected and used in crafting</td><td>Names, locations, quantities, rarity, and gathering tools</td></tr>
              <tr><td><b>Equipment</b></td><td>Combat equipment can be crafted; weapons are described as improvable</td><td>Item names, slots, attributes, recipes, and numerical stats</td></tr>
              <tr><td><b>Potions</b></td><td>Potions are among the things made from materials</td><td>Effects, duration, ingredients, and brewing process</td></tr>
              <tr><td><b>Food and cooking</b></td><td>Cooking is an Early Access system; food can be crafted</td><td>Meal names, recipes, effects, and ingredient amounts</td></tr>
              <tr><td><b>Tools and trinkets</b></td><td>Both are named as craftable outputs</td><td>Specific examples, use cases, values, and stats</td></tr>
              <tr><td><b>Estate objects</b></td><td>Buildings, furniture, plants, and decorations support customization</td><td>A complete catalogue, placement rules, costs, or construction steps</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>How crafting connects to the wider game</h2>
      <p>
        Crafting is presented as part of a wider loop rather than as a standalone recipe simulator. The player explores the prison, rescues survivors, helps rebuild the town, and develops a personal space. The store page says villagers can lend skills and help restore their homes; it also describes a variety of gathering and crafting professions involved in the town's rebuilding. This supports a connection between people, restoration, and practical making, but it does not establish the unlock condition for any recipe or profession.
      </p>
      <p>
        The personal estate has two stated purposes: it is a customizable place to make a comfortable home and a space where the player can craft items needed for the journey. Materials can be used for combat equipment and useful supplies, while buildings, furniture, plants, and decorations allow customization. No official layout or item-by-item placement data is published here, so the estate should be represented as a confirmed feature rather than a mapped catalogue with made-up costs.
      </p>
      <p>
        The store page also describes progression through battle, exploration, rebuilding, and choices. It says equipment and skills can be improved through leveling, items, and the help of rescued villagers. That statement explains why an item database may eventually need to relate equipment records to skills, character help, or crafting, but it does not disclose numerical improvement curves or the exact items involved. The <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">characters and village stories guide</Link> covers the confirmed role of rescued residents; the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">combat and class systems guide</Link> describes what is known about weapons, classes, and skills.
      </p>

      <h2>Database fields that make entries useful</h2>
      <p>
        A database should make clear which fields are facts and which are editorial organization. The fields below are a proposed record structure, not a claim that Emberville exposes those values in an in-game tooltip. A field stays blank or marked “not stated” when the only permitted source does not disclose the data. This is especially important for numbers: a guessed recipe count or stat can look precise while being entirely unsupported.
      </p>
      <ul>
        <li><b>Official item name:</b> entered only when an official first-party source gives the name.</li>
        <li><b>Broad category:</b> for example, equipment, potion, food, tool, trinket, or an estate object, provided the classification is explicitly supported.</li>
        <li><b>Stated use:</b> a concise description limited to the purpose given by the source; do not infer combat effects from a category.</li>
        <li><b>Crafting relationship:</b> note that an item is craftable only when the source says so, and leave ingredients and quantities unstated unless supplied.</li>
        <li><b>Progression relation:</b> distinguish improvement through items from the specific effect or amount of an item, which is not disclosed.</li>
        <li><b>Source and verification date:</b> link the first-party material and identify when the wording was checked.</li>
        <li><b>Unknown fields:</b> show missing names, stats, recipes, and acquisition details as unknown rather than silently filling them with assumptions.</li>
      </ul>

      <p>
        It is also useful to keep source categories distinct from a player's own sorting preferences. A guide may group records by use or by whether the object is gathered, crafted, or placed in an estate, but those headings are navigation aids rather than official rarity tiers or inventory sections. If a later first-party source uses a different category, the record should preserve that wording and make any guide-side grouping visibly editorial. This avoids suggesting that a sortable site label is an in-game property.
      </p>

      <h2>Reading this database before a full item list exists</h2>
      <p>
        At present, the trustworthy result is a taxonomy and a description of evidence boundaries, not a row for every piece of loot. There are no named item examples in the source used here, so this page intentionally avoids sample weapons, named resources, drop tables, and recipe cards. It also does not promise that every future entry can be verified from the store page alone. If a first-party source adds an item name or value, the corresponding record can quote only the detail that source actually supports.
      </p>
      <p>
        Readers looking for spatial context should use the <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">confirmed world and map guide</Link>, which explains what the official description does and does not reveal about locations. For current official release and Early Access scope information, see the <Link href="/news" title="Emberville News: Early Access Scope &amp; Roadmap">Emberville news summary</Link>. These references provide context without implying item availability, item locations, or numerical data that have not been published.
      </p>

      <h2>Emberville item database FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
