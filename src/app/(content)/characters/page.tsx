import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Characters: Survivors & Village Stories"
const route = getRoute("/characters");

const FAQS: Faq[] = [
  {
    q: "Can players customize the protagonist's appearance?",
    a: "Yes. The store page describes dozens of character-creation options, including hairstyles, beards, facial features, and colors. It does not connect those options to a resident or rescue reward."
  },
  {
    q: "Does the store page map each rebuilding profession to one specific resident?",
    a: "No character-to-profession roster is provided. The description says villagers help rebuild through gathering and crafting professions, but does not publish a one-to-one assignment."
  },
  {
    q: "Can readers tell whether diaries affect quest outcomes?",
    a: "The official description mentions diaries and quests, but does not state that reading a diary changes a quest or its outcome."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function CharactersPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Characters", href: route.path }]} />
      <h1>Emberville Characters, Survivors, and Village Stories</h1>
      <p className="answer">
        Emberville's story centers on a memoryless protagonist in the Vitromotus and the survivors of a ravaged town who need help. The Steam description confirms rescue, quests, resident stories and diaries, rebuilding, professions, and rewards or teachings. It does not disclose specific character names, affinity values, or romance mechanics. This guide covers the roles the official page describes without inventing biographies or relationship systems.
      </p>

      <h2>Why residents matter to the story</h2>
      <p>
        The official premise begins with a protagonist waking in darkness inside the Vitromotus, a magical prison where death no longer lasts. Memories are clouded, and escape appears to be the immediate goal. As despair grows, the player encounters people from a once-thriving town, now ravaged by hostile forces. They are among the denizens left imprisoned, and the store description frames helping them as a meaningful alternative to simply pressing toward escape.
      </p>
      <p>
        The energy called kymia is described as a mysterious power born from emotions that brings those trapped in the Vitromotus back to life. This is part of the world's premise and helps explain why the prison and its inhabitants are unusual. The store page does not provide a detailed character-by-character account of how kymia affects a resident, so this guide does not assign it a personal history, personality trait, or relationship consequence.
      </p>
      <p>
        The player is invited to rescue a range of characters along the way. Those rescued people show gratitude through rewards and useful teachings, and the description says they can lend their skills and help rebuild their homes. That makes residents part of both the narrative and the town's restoration. The page does not establish that every resident is rescued in the same manner, appears in a fixed order, or becomes a combat companion.
      </p>

      <h2>Rescue and rebuilding form a connected loop</h2>
      <p>
        Emberville's restoration is described as a community effort. Residents help rebuild their town through gathering and crafting professions; as the town restores itself, it becomes a living hub shaped by the player's deeds. This links exploration beyond the town with visible reconstruction at home. It also gives this character page a practical focus: future entries should distinguish a person's narrative role from the help or profession explicitly attributed to them.
      </p>
      <p>
        The personal estate is a separate confirmed customization feature within Emberville. The player can shape that space with buildings, furniture, plants, and decorations, and craft items useful for the journey. The description does not say that a named resident owns a particular building or that estate decoration is a character affinity reward. Those connections should not be added unless an official source states them.
      </p>
      <p>
        Help from villagers also appears in character development: the store page says weapons and skills can be improved through leveling, items, and assistance from rescued villagers. It does not disclose the effect, amount, prerequisites, or identity of the helper. A character entry can record that residents contribute to progression at a broad system level, but cannot responsibly promise a stat increase or combat bonus based on this description alone.
      </p>

      <h2>Stories, diaries, quests, and rewards</h2>
      <p>
        The official page says players can hear the denizens' stories and read their diaries, and can fulfill quests, engage with townsfolk, and unlock mechanics. It also describes assisting residents in their many quests. These details suggest several different kinds of interaction: narrative material, tasks, contact with townspeople, and system unlocks. The source does not map each activity to a specific character or explain whether a diary is required for a quest.
      </p>
      <p>
        Rewards and teachings are described as things rescued characters offer in gratitude. The wording supports documenting those outcomes when an official source connects one to a person, but it does not identify a reward list or define “teaching” as a particular skill tree. Similarly, unlocking mechanics is confirmed as part of engaging with townsfolk, but no unlock sequence or prerequisite is supplied. This page keeps the broader promise separate from a detailed walkthrough that the source cannot support.
      </p>

      <h2>Professions and the role of a villager</h2>
      <p>
        Gathering and crafting professions help rebuild the town, according to the store description. Residents also lend skills, teach the player, and take part in quests. The official material therefore supports several useful editorial tags for a future character index: rescue, rebuilding, profession, quest, story, diary, teaching, and reward. These are descriptions of source topics, not a claim that the game uses those exact interface labels or that every resident belongs to each category.
      </p>
      <p>
        A profession record should not turn into an unsupported location guide. The Steam page does not list the profession names, the materials they gather, the goods they produce, or their work schedules. For confirmed crafting categories and how item records should handle missing details, consult the <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">crafting and item database guide</Link>. The <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">world and map guide</Link> explains why this source also cannot yet assign residents to named settlements or precise map coordinates.
      </p>

      <h2>What a responsible character entry can record</h2>
      <p>
        The Steam page gives a strong framework for a people-focused guide but not a cast list. A future sourced entry should contain only facts connected to an identifiable person in an official first-party description. Until the source supplies such a name and detail, a generic description of “survivors” or “townsfolk” is more accurate than a filled profile with invented likes, dialogue, or personal history.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Possible record field</th><th scope="col">What the source currently supports</th><th scope="col">Keep unfilled unless disclosed</th></tr></thead>
            <tbody>
              <tr><td><b>Name and description</b></td><td>An array of characters and the town's denizens exist</td><td>Individual names, appearance, and biographies</td></tr>
              <tr><td><b>Rescue context</b></td><td>Characters can be rescued during the journey</td><td>Exact rescue location, order, conditions, and failure rules</td></tr>
              <tr><td><b>Story interaction</b></td><td>Stories, diaries, quests, and townsfolk engagement are described</td><td>Character-specific dialogue, quest text, and diary contents</td></tr>
              <tr><td><b>Town contribution</b></td><td>Residents help rebuild homes and contribute professions or skills</td><td>Named profession, schedule, output, or quantified benefit</td></tr>
              <tr><td><b>Relationship system</b></td><td>No character-specific relationship mechanic is disclosed</td><td>Affinity scores, romance routes, choices, or relationship outcomes</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Character facts that are not disclosed</h2>
      <p>
        The store page does not identify individual residents by name. It also does not describe an affinity meter, numerical affection values, romance routes, or relationship thresholds. No particular resident, dialogue choice, romance outcome, or gift preference can be verified from this source. The presence of stories, diaries, quests, and interactions with townsfolk is not evidence of a specific romance system, so this guide does not infer one.
      </p>
      <p>
        Combat build discussions should likewise avoid assigning a named villager a weapon bonus or an exclusive skill. The confirmed relationship is general: rescued villagers can help improve weapons and skills, and residents lend skills while the town is rebuilt. For confirmed combat mechanics, see the <Link href="/builds" title="Emberville Builds: Combat &amp; Class Systems Guide">combat and class systems guide</Link>. Release and Early Access statements are tracked separately on the <Link href="/news" title="Emberville News: Early Access Scope &amp; Roadmap">official Steam news summary</Link>.
      </p>

      <h2>Emberville characters FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
