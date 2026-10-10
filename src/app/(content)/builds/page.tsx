import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Builds: Combat & Class Systems Guide";
const route = getRoute("/builds");

const FAQS: Faq[] = [
  {
    q: "Can players change class in Emberville?",
    a: "Yes. The Steam description says players can change class at any time and inherit active or passive skills from other classes they have learned.",
  },
  {
    q: "Do weapons have the same combos?",
    a: "No. The store page describes unique combos for each weapon and says different kinds of attacks can be chained together.",
  },
  {
    q: "Does the store page identify the strongest build?",
    a: "No tested loadouts, weapon names, damage values, or class rankings are published in the cited description.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function BuildsPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Builds", href: route.path }]} />
      <h1>Emberville Builds: Weapons, Combos, and Classes</h1>
      <p className="answer">
        Emberville builds combine a weapon’s own combo set with a flexible class system: players can change class at
        any time and inherit active or passive skills from other classes they have learned. Combat offers melee,
        magic, and ranged approaches, with positioning, timing, and attack chains shaping how each setup plays. The
        Steam description confirms these systems, but does not publish named loadouts or tested rankings yet.
      </p>

      <h2>Emberville combat styles and weapon combos</h2>
      <p>
        The game describes combat as a mix of positioning, timing, and knowledge. That points to three connected
        decisions: where to fight from, when to commit to an attack, and which weapon moves to use. Weapons have
        unique combos, so a weapon is more than a cosmetic choice or a single damage number; its own sequence of
        attacks shapes the actions available to the player.
      </p>
      <p>
        The confirmed combat approaches are melee, magic, and ranged. The store page also mentions chaining different
        types of attacks together. This means a build can be understood through both its preferred range and the
        weapon-specific moves it brings into a sequence. It does not establish which approach deals more damage,
        which weapon has the fastest combo, or which chain is best for a particular enemy. Those are questions for
        in-game testing, not conclusions that can be drawn from the category names alone.
      </p>

      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">Confirmed build system</th><th scope="col">What the description establishes</th></tr></thead>
            <tbody>
              <tr><td>Combat styles</td><td>Melee, magic, and ranged attacks</td></tr>
              <tr><td>Weapon identity</td><td>Each weapon has its own combos</td></tr>
              <tr><td>Attack flow</td><td>Different types of attacks can be chained</td></tr>
              <tr><td>Class choice</td><td>Players can change class at any time</td></tr>
              <tr><td>Skill inheritance</td><td>Active and passive skills can be inherited from other learned classes</td></tr>
              <tr><td>Progression</td><td>Combat, exploration, rebuilding, quests, choices, items, and villager help all contribute</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>IGN preview: mastery trees, loot, and stat points</h2>
      <p>
        IGN’s September 11 hands-on preview reports mastery and class skill trees, loot, and stat points the player
        could distribute. That makes the build conversation more concrete than weapon categories alone: progression
        appeared to include tree-based mastery and player-selected stats in the preview. The report does not provide
        a full tree, stat formula, named best setup, or a comparative damage test, so these observations should not
        be stretched into build rankings.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>Scott White’s September 11 preview reports mastery and class skill trees, loot, and points to distribute among stats.</p>
      </DataBlock>

      <h2>Combat inputs and the adaptive HUD</h2>
      <p>
        The July developer feature release describes combat as a two-button base expanded by weapon-bound combos
        and class-related combat skills. It also describes a dynamic interface that changes the HUD around the
        player’s needs. Those details frame a setup as a combination of weapon moves, inherited class abilities,
        and information the interface presents—not simply a class name. The release does not name button inputs or
        explain the final HUD rules, and the IGN preview is an early look rather than a launch-build test.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The developer describes a two-button combat foundation, weapon-bound combos, class skills, and a dynamic HUD.</p>
      </DataBlock>

      <h2>Emberville classes and inherited skills</h2>
      <p>
        Class choice is presented as flexible rather than permanent. Players can learn from a range of combat
        classes, switch classes at any time, and inherit active and passive skills from classes they have learned.
        The important distinction is between the class currently selected and skills retained from other learned
        classes: the description explicitly connects class learning with inheritance, allowing a character’s combat
        style to draw on more than one class over time.
      </p>
      <p>
        That flexibility gives class and weapon choices separate jobs in a setup. The weapon determines its own
        combos; class skills add active or passive abilities that can be inherited. The Steam page does not list
        class names, individual skills, inheritance limits, slots, prerequisites, or how a class change affects an
        equipped ability. It is therefore possible to explain the structure of the system, but not to prescribe a
        specific class-and-skill combination yet.
      </p>

      <h2>How progression shapes a build</h2>
      <p>
        Builds sit inside a broader progression loop. The store description says character growth comes through
        combat, exploration, rebuilding, and choices. Weapons and skills can be improved through leveling, items,
        and help from rescued villagers; quests and exploration also contribute to development. A build is therefore
        more than a combat menu: it grows alongside the player’s activity in the prison and the work of restoring
        Emberville.
      </p>
      <p>
        The description also says foes become stronger the deeper the player ventures and encourages experimentation
        with fighting techniques. Combined with the ability to change class at any time, that supports trying
        different approaches as new challenges appear. It does not reveal an exact difficulty curve or guarantee
        that a class switch is free of costs. For the spaces behind that exploration loop, see the
        <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">Emberville map and areas guide</Link>; the <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">survivors and village stories page</Link> covers how rescued residents contribute to progression.
      </p>

      <h2>Emberville build data after launch</h2>
      <p>
        The current Steam description does not provide actual weapon or skill names, item statistics, or tested
        loadouts, so there is no evidence-based “best build” to rank before hands-on play. After Early Access begins,
        this guide will add setups only when their weapon, class skills, use case, and test context can be checked
        against the game. The <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">item database</Link> will cover individual equipment and item details rather than build recommendations.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/wiki" title="Emberville Wiki Database: Setting, Combat &amp; Systems">Emberville wiki and gameplay systems</Link></li>
        <li><Link href="/stardew-valley-diablo" title="Emberville vs Stardew Valley and Diablo: What’s Different">Emberville compared with Stardew Valley and Diablo</Link></li>
        <li><Link href="/news" title="Emberville News &amp; Updates: Announcements &amp; Launches">Early Access scope and official announcements</Link></li>
        <li><Link href="/release-date" title="Emberville Early Access Date 2026: Price &amp; Scope">Early Access date and release details</Link></li>
        <li><Link href="/about/methodology" title="Sources &amp; Methodology | Emberville Guide">How sources and test findings are handled</Link></li>
      </ul>

      <h2>Emberville builds FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
