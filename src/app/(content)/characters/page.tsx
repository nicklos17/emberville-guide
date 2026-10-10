import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Characters: Survivors & Village Stories";
const route = getRoute("/characters");

const FAQS: Faq[] = [
  {
    q: "What can rescued villagers contribute to Emberville?",
    a: "The Steam description says residents help rebuild through gathering and crafting professions, lend skills, and offer rewards or useful teachings.",
  },
  {
    q: "Can players customize their own character?",
    a: "Yes. The store page describes dozens of character-creation options, including hairstyles, beards, facial features, and colors.",
  },
  {
    q: "Does Emberville confirm romance routes?",
    a: "The Steam description mentions stories, diaries, quests, and interaction with townsfolk, but does not confirm romance routes or an affinity system.",
  },
  {
    q: "Who voices the characters in Emberville?",
    a: "The official site lists a 22-name cast led by voice-acting director Alex Jordan, including Doug Cockle, Matthew Mercer, Jennifer English, Ben Starr, Abubakar Salim and Jane Perry. Alex Jordan voices Adeos and Matthew Mercer voices the shopkeeper Gumu; the rest are not yet mapped to roles.",
  },
  {
    q: "Who is developing Emberville?",
    a: "Cygnus Cross, an independent studio based in Cork, Ireland, for which Emberville is the debut title. It is led by founder and lead game director Brynjar Gigja, with Twitch streamer Ben \u201CCohhCarnage\u201D Cassell as co-founder and co-game director.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CharactersPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Characters", href: route.path }]} />
      <h1>Emberville Characters: Survivors and Villagers</h1>
      <p className="answer">
        Emberville characters are part of the rescue-and-rebuilding loop: the protagonist meets imprisoned survivors,
        helps restore their ravaged town, and can receive rewards, teachings, and practical help from residents. The
        Steam description confirms quests, stories, diaries, gathering and crafting professions, and villagers who
        lend skills. It has not yet published a named character roster, so this guide focuses on what those roles do.
      </p>

      <h2>Emberville survivors and the rescue story</h2>
      <p>
        The protagonist wakes without clear memories inside the Vitromotus, a magical prison where prisoners return
        to life through kymia, an energy born from emotions. Escape is one goal, but the story also brings the player
        into contact with residents of a town ravaged by hostile forces. Rescuing them gives the journey a second
        direction: people encountered in the prison can return to a community that needs rebuilding.
      </p>
      <p>
        The store page describes a range of characters to rescue, not a fixed order or a list of named companions.
        It presents those people as townsfolk with stories and useful roles, rather than confirming that every rescue
        becomes a combat party member. The distinction matters: “survivor” describes the story and rescue loop, while
        the confirmed practical contributions are help with restoration, skills, quests, rewards, and teachings.
      </p>

      <h2>Villager skills, professions, and rebuilding</h2>
      <p>
        Residents help rebuild Emberville through gathering and crafting professions. Their skills are not only a
        piece of town background: the Steam description also says rescued villagers can help improve weapons and
        skills. This connects character progression with the people the player brings back, alongside leveling and
        items. The source does not give profession names or quantify a resident’s benefit, but it does establish that
        rebuilding and character growth are linked systems.
      </p>
      <p>
        That link gives the town a practical role between expeditions. Exploration takes the protagonist into the
        prison; rescued residents bring skills and work back to Emberville; rebuilding restores homes and develops
        the hub. The game also describes gathering and crafting professions as part of that effort. For the confirmed
        craftable categories that support the wider journey, see the <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">Emberville item database</Link>.
      </p>

      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">Character connection</th><th scope="col">Confirmed role in the game</th></tr></thead>
            <tbody>
              <tr><td>Rescue</td><td>Meet and rescue characters imprisoned in the Vitromotus</td></tr>
              <tr><td>Town restoration</td><td>Residents help rebuild homes through gathering and crafting professions</td></tr>
              <tr><td>Progression</td><td>Rescued villagers can lend skills and help improve weapons and skills</td></tr>
              <tr><td>Story and quests</td><td>Hear residents’ stories, read diaries, fulfill quests, and engage with townsfolk</td></tr>
              <tr><td>Rewards</td><td>Rescued characters may offer rewards and useful teachings</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville’s voice cast and the Memento</h2>
      <p>
        The Cygnus Cross studio introduction names the protagonist’s luminous companion as the Memento. The studio
        also publishes a 22-name voice cast — unusually large for a debut indie — led by voice-acting director Alex
        Jordan, who performs in the game as well. Two roles have been named in published coverage: Alex Jordan
        voices Adeos, an elderly and not-quite-all-there figure, and Matthew Mercer voices Gumu, a gremlin-like
        shopkeeper. The official roster does not map the remaining performers to characters, and this page does not
        infer those pairings from the cast list alone. The full roster and its sourcing are on the{" "}
        <Link href="/voice-cast" title={routeTitle("/voice-cast")}>Emberville voice cast reference</Link>.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>IGN’s September 11 preview heard Alex Jordan’s performance as the elderly Adeos and Matt Mercer’s shopkeeper Gumu in the prologue.</p>
      </DataBlock>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio site publishes the 22-name Emberville voice cast with Alex Jordan credited as Voice Acting Director; it does not map performers to specific villagers.</p>
      </DataBlock>
      <p>
        The cast is assembled by Cygnus Cross, the independent studio behind the game — Emberville is its debut
        title, based in Cork, Ireland and led by founder and lead game director Brynjar Gigja, with Twitch streamer
        Ben “CohhCarnage” Cassell as co-founder and co-game director. For the studio’s background, see the{" "}
        <Link href="/studio" title={routeTitle("/studio")}>Emberville developer profile</Link>.
      </p>

      <h2>Character stories, diaries, and quests</h2>
      <p>
        The announced interactions span more than a rescue event. Players can hear denizens’ stories, read their
        diaries, fulfill quests, and engage with townsfolk. The Steam page also says that interaction can unlock
        mechanics. Together, these details make residents part of the game’s narrative and progression: their stories
        give context to the prison and town, while quests and teachings connect that context to play.
      </p>
      <p>
        The store description does not assign a particular diary, quest, unlock, or reward to an individual resident.
        It also does not say that reading a diary changes a quest outcome. Once Early Access begins, this page will
        add character names and quest details when they can be checked against the game, rather than treating broad
        feature descriptions as individual biographies.
      </p>

      <h2>Player character creation and relationships</h2>
      <p>
        The player character is customizable: the Steam listing describes dozens of creation options, including
        hairstyles, beards, facial features, and colors. This is separate from the villagers’ stories and roles in
        rebuilding. For the combat choices the protagonist can develop alongside those relationships, see the
        <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">Emberville builds and class guide</Link>.
      </p>
      <p>
        Romance and affinity are not confirmed in the cited description. It mentions engaging with townsfolk, quests,
        stories, and diaries, but does not describe romance routes, affinity values, gift preferences, or relationship
        thresholds. Those mechanics should not be inferred from the presence of character interactions alone.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">Emberville map and confirmed world spaces</Link></li>
        <li><Link href="/news" title="Emberville News &amp; Updates: Announcements &amp; Launches">Emberville news and Early Access announcements</Link></li>
        <li><Link href="/wiki" title="Emberville Wiki Database: Setting, Combat &amp; Systems">Emberville wiki: setting and gameplay systems</Link></li>
      </ul>

      <h2>Emberville characters FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
