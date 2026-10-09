import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Map: Confirmed Areas & World Guide"
const route = getRoute("/map");

const FAQS: Faq[] = [
  {
    q: "Does the official description identify separate instanced dungeons?",
    a: "It describes the Vitromotus as a magical dungeon and prison, but does not identify a separate list of instanced dungeons, entrances, or instance boundaries."
  },
  {
    q: "Does the Steam page say how the world layout is generated?",
    a: "No generation method or layout variation is stated. The description of strange biomes describes the environment, not whether a map is fixed or generated."
  },
  {
    q: "Can the prison's exit be placed on a map?",
    a: "The story says the protagonist seeks a way out, but the store page does not publish an exit location or route."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function MapPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Map & Areas", href: route.path }]} />
      <h1>Emberville Map and Confirmed World Spaces</h1>
      <p className="answer">
        Emberville is set in the Vitromotus, a vast underground world used as a magical prison. The official description confirms tunnels, ruins, survivor settlements, threatening environments, strange biomes, and the town of Emberville, but it does not publish a labeled world map, region list, coordinates, or route network. This page separates confirmed setting details from the map records that still need an official source.
      </p>

      <h2>What the official description confirms</h2>
      <p>
        The player wakes in the Vitromotus with clouded memories and a desire to escape. The prison was intended to confine people excluded from a once-great society; the store description presents it as an immense place whose history reflects the arrogance and corruption of that society. This establishes the setting's scale and purpose, not the shape of a playable map. No compass, floor plan, travel distance, or boundary is specified on the store page.
      </p>
      <p>
        The confirmed environmental vocabulary is useful at a broad level. Exploration includes forgotten tunnels, ruins, survivor settlements, and threatening environments. The description also says a force called kymia reshaped the world inside the prison over time, producing strange biomes and bizarre monsters. These are descriptions of what exploration can involve, not the names or total count of map regions. The page gives no basis for claiming that a particular cave, settlement, biome, or monster belongs at a specific point on a map.
      </p>
      <p>
        Emberville is the town the player helps rebuild after its denizens have been ravaged by hostile forces. Rescued residents contribute skills and help restore their homes, so the town has a relationship to the exploration and rescue loop. The Steam page also describes a personal estate within Emberville. Neither statement provides a street plan, district boundaries, or a confirmed arrangement between the town, the estate, and any named dungeon.
      </p>

      <h2>Confirmed map scope and open fields</h2>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">World reference</th><th scope="col">What is confirmed</th><th scope="col">What is not provided</th></tr></thead>
            <tbody>
              <tr><td><b>Vitromotus</b></td><td>A vast underground magical prison and the primary setting described</td><td>Its complete outline, levels, coordinates, entrances, and exit route</td></tr>
              <tr><td><b>Exploration spaces</b></td><td>Tunnels, ruins, survivor settlements, and threatening environments</td><td>Individual official names, connections, dimensions, or order of discovery</td></tr>
              <tr><td><b>Biomes and creatures</b></td><td>Kymia has shaped strange biomes and bizarre monsters</td><td>Exact biome count, map placement, regional roster, or spawn data</td></tr>
              <tr><td><b>Emberville</b></td><td>A ravaged town whose residents can be rescued and whose homes can be rebuilt</td><td>A street map, district list, building coordinates, or service locations</td></tr>
              <tr><td><b>Personal estate</b></td><td>A customizable personal space within Emberville</td><td>Its precise position, dimensions, or connection to a travel map</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <p>
        A map index should also separate spatial references from world concepts. Kymia is described as a force, not a place to pin, while the Vitromotus is both the prison setting and the name attached to the underground world. Keeping that distinction visible prevents a glossary term or story premise from being mistaken for a traversable landmark, and helps readers see which words identify geography versus explain the fiction around it.
      </p>

      <h2>How to record a map without guessing</h2>
      <p>
        A useful map record should be traceable to a source and should distinguish a confirmed location from an interpretation. The store page gives the vocabulary above but no navigation data, so the method here is an editorial standard for future sourced entries, not a claim that those records already exist in the game or that the guide has visited these spaces.
      </p>
      <ol>
        <li><b>Keep official names intact.</b> Use a location name only when it appears in an official source. If a source only says “ruins” or “survivor settlement,” preserve that general wording rather than inventing a proper noun.</li>
        <li><b>Separate setting from map position.</b> A statement that a place is in the Vitromotus does not establish its direction, depth, adjacency, or travel time. Record those only when the source explicitly supports them.</li>
        <li><b>Describe the evidence.</b> Each future record should identify whether its wording comes from an official description, an official map, or another specifically allowed first-party publication. A vague “known location” label is not enough to explain confidence.</li>
        <li><b>Keep routes distinct from places.</b> An entrance, a traversable connection, and a destination are different facts. A source naming a tunnel does not prove what it connects, and a settlement mention does not disclose how a player reaches it.</li>
        <li><b>Mark unknowns visibly.</b> If scale, orientation, access requirements, or neighboring spaces are not stated, leave those fields unknown. Do not fill them with genre conventions or assumptions about how underground maps usually work.</li>
        <li><b>Revise only when evidence changes.</b> A later first-party map or store announcement can support a new record. The verification date should describe when the source was checked, not imply that a game patch or an unobserved route was tested.</li>
      </ol>

      <h2>Recommended fields for a map record</h2>
      <p>
        The following fields describe how a readable reference can be organized once official map information is available. They are documentation fields, not a preview of undisclosed game systems. In particular, “access” should remain blank until an official source gives an entrance or condition; the guide should not create a key, quest gate, floor number, or reward to make an entry look complete.
      </p>
      <ul>
        <li><b>Location label:</b> the official spelling, or a clearly marked generic descriptor when no proper name is published.</li>
        <li><b>Setting context:</b> whether the source places the reference in the Vitromotus, Emberville, or the personal estate.</li>
        <li><b>Source wording:</b> a concise paraphrase of the first-party statement that supports the record.</li>
        <li><b>Map position:</b> only a documented position or connection; otherwise explicitly not specified.</li>
        <li><b>Environment:</b> a confirmed description such as tunnel, ruin, settlement, or biome, without extending the category beyond the source.</li>
        <li><b>Evidence date:</b> the date the cited official material was checked, separate from any game release or update date.</li>
      </ul>

      <p>
        A later map key should also distinguish geographic symbols from narrative subjects. A survivor settlement is a kind of place mentioned in the description; a rescued character is a person connected to the story. Neither statement supplies a pin, icon, or boundary. Likewise, “threatening environments” is a broad description and should not be converted into a red danger zone without a published legend. Keeping labels separate prevents a reader from mistaking the guide's organizing vocabulary for an official in-game interface.
      </p>

      <h2>How map coverage fits the rest of the guide</h2>
      <p>
        Exploration is one strand of Emberville's progression, alongside combat, rebuilding, and choices. This page can eventually help readers connect documented places to those systems, but it should not claim item drops, enemy placements, or quest markers that the source does not give. For the official item categories and a careful record format, see the <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">Emberville item database</Link>. For the people whose rescue and stories shape the town, use the <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">Emberville characters guide</Link>.
      </p>
      <p>
        The world description mentions dangerous creatures and action-focused combat, while leaving individual encounter locations unspecified. A page about combat systems can explain the confirmed mechanics without pretending to map an enemy route; see the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">combat and class systems guide</Link>. This separation keeps a world overview useful even before detailed map data exists: readers can understand the setting now and see exactly which spatial facts remain unknown.
      </p>

      <h2>Emberville map FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
