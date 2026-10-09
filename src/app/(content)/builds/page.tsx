import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Builds: Combat & Class Systems Guide"
const route = getRoute("/builds");

const FAQS: Faq[] = [
  {
    q: "How many combat classes or weapons are available?",
    a: "The Steam store page gives no class count, weapon roster, or complete skills list. It describes a range of combat classes and weapons, but exact totals should wait for a source that lists them."
  },
  {
    q: "Does changing class erase skills learned in another class?",
    a: "The store page says classes can inherit active and passive skills from other learned classes and that class choice can be changed at any time. It does not explain retention rules, limits, or what happens to an equipped skill during a change."
  },
  {
    q: "Can I use a controller for combat?",
    a: "The Early Access description lists keyboard and mouse as well as controller support. It does not publish a button map or platform-specific control layout."
  },
  {
    q: "Does the Early Access description list a multiplayer mode?",
    a: "The store page lists single-player support. It does not describe co-op or competitive modes, so this guide does not assume a multiplayer combat format."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function BuildsPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Builds", href: route.path }]} />
      <h1>Emberville Combat Builds: A Responsible Setup Guide</h1>
      <p className="answer">
        Emberville's official description confirms action combat built around positioning, timing, and knowledge; weapon-specific combos; melee, magic, and ranged attacks; and classes whose learned active and passive skills can be inherited across classes. It does not publish tested builds, weapon names, damage values, or skill combinations. This guide explains how to think about a setup using only those confirmed systems, without presenting untested recommendations as results.
      </p>

      <h2>What is confirmed about combat</h2>
      <p>
        Combat is described as action-focused. The store page says success rewards positioning, timing, and knowledge. Those words establish the broad demands of the system, but they are not numerical advice: no dodge window, stamina rule, enemy resistance chart, damage formula, or precise rotation is specified. A responsible build guide can help readers structure their choices around the disclosed mechanics, while leaving performance claims open until they can be supported.
      </p>
      <p>
        Emberville offers melee, magic, and ranged combat, and weapons have unique, weapon-bound combos. It also describes chaining different kinds of attacks. That confirms that a weapon category can affect the moves available and that attack sequencing matters. It does not identify a particular weapon, say which category deals the most damage, or prove that one sequence works in every encounter. Avoid treating a category label as a ranking.
      </p>
      <p>
        The class system is flexible. Players can learn from a wide selection of combat classes, change classes at any time, and use active and passive skills inherited from other learned classes. The store page presents this as a way to develop different styles, but it does not give a skill tree, class names, unlock conditions, slot limits, or compatibility table. Any setup that claims exact requirements or a superior combination would need evidence beyond the currently disclosed store details.
      </p>

      <h2>A framework for planning a setup</h2>
      <p>
        A useful setup begins with the kind of decisions the official description actually supports. Start with a preferred attack range, choose a weapon category whose handling you want to learn, and decide which learned class skills suit that approach. Then assess whether your choices let you respond to the encounter through positioning and timing. This is a planning framework, not a claim that one setup has been tested or that the game enforces these as formal roles.
      </p>
      <ol>
        <li><b>Choose a range to practice.</b> Melee, magic, and ranged options are explicitly listed. Decide which distance feels natural to you, but do not infer class restrictions or assume that the categories have fixed damage tiers.</li>
        <li><b>Learn the weapon's own combo language.</b> The store page confirms weapon-specific combos. Treat each weapon as having its own moves to understand; do not import an assumed combo list or attack speed from another game.</li>
        <li><b>Think about sequence and spacing together.</b> Because the description calls out chained attack types and positioning, a setup should be evaluated for how its attacks fit into movement and spacing. The actual combo inputs and safe openings are not published here.</li>
        <li><b>Separate active choices from passive support.</b> The class system names both active and passive skills as inheritable. Record which source class a skill comes from and how the game describes it before claiming that it synergizes with another skill.</li>
        <li><b>Revisit the setup as you learn.</b> Classes can be changed at any time, so experimentation is part of the stated flexibility. That does not reveal respec costs or the consequences of a switch; those details should not be assumed.</li>
        <li><b>Judge beyond combat alone.</b> The store page says growth comes through combat, exploration, rebuilding, and choices. A character plan should not be reduced to a damage score when the game explicitly presents several progression activities.</li>
      </ol>

      <h2>What a future build entry should show</h2>
      <p>
        A build listing becomes useful only when another player can understand its context and separate facts from opinion. The fields below are an editorial checklist, not a claim that the game has a particular build screen or data panel. Until an official source documents concrete choices and outcomes, the page should remain a mechanics guide rather than displaying fictional sample loadouts.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-09">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Build record field</th><th scope="col">Why it matters</th><th scope="col">Current official detail</th></tr></thead>
            <tbody>
              <tr><td><b>Combat approach</b></td><td>Explains intended range and action style</td><td>Melee, magic, and ranged combat are confirmed; role labels are not</td></tr>
              <tr><td><b>Weapon and combo</b></td><td>Shows the weapon-specific move context</td><td>Unique weapon-bound combos are confirmed; names and inputs are not listed</td></tr>
              <tr><td><b>Class and inherited skills</b></td><td>Explains active and passive choices</td><td>Inheritance and class switching are confirmed; individual skills are not listed</td></tr>
              <tr><td><b>Evaluation conditions</b></td><td>Prevents an opinion from appearing universal</td><td>No test mode, encounter, patch result, or performance metric is published</td></tr>
              <tr><td><b>Evidence and date</b></td><td>Makes the source and scope inspectable</td><td>This page verifies only the official store description on the date shown</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Progression is broader than a combat setup</h2>
      <p>
        Emberville describes character growth as a mix of battle experience, quests, exploration, rebuilding, and choices. Weapons and skills can be improved through leveling, items, and help from rescued villagers, according to the store page. It also connects professions and crafting to restoration of the town. These statements mean a combat-only guide cannot explain every route to character development; it should make its scope explicit instead of calling one loadout a complete progression solution.
      </p>
      <p>
        The description says the deeper the player ventures, the stronger foes become, and encourages experimenting with fighting techniques to find a build and weapon category that suits an individual playstyle. That is a broad design statement, not a disclosed difficulty curve or a promise that a specific category counters a named enemy. For the setting behind exploration, use the <Link href="/map" title="Emberville Map: Confirmed Areas &amp; World Guide">confirmed world and map guide</Link>. For people who contribute skills and teachings after rescue, see the <Link href="/characters" title="Emberville Characters: Survivors &amp; Village Stories">survivors and village stories page</Link>.
      </p>
      <p>
        Equipment is part of the announced Early Access feature set, while gathering, crafting, farming, and cooking are also described. The official page does not provide actual item stats, recipe data, or a list of equipment slots, so this guide does not turn those broad categories into a supposed best-in-slot table. See the <Link href="/item-database" title="Emberville Items: Crafting &amp; Database Reference">items and crafting database guide</Link> for the confirmed category boundaries. Official game announcements and scope notes are summarized on the <Link href="/news" title="Emberville News: Early Access Scope &amp; Roadmap">Emberville news page</Link>.
      </p>

      <h2>What this page deliberately does not rank</h2>
      <p>
        No tier list appears here because the Steam store page does not report play-tested results. There are no named weapons, classes, enemies, skill values, damage measurements, or encounter conditions in the source used for this guide. A speculative combination dressed up with confident wording would be less informative than a clear account of the systems and their limits. When first-party material identifies additional mechanics, the guide can add those facts without retroactively claiming that a build was tested.
      </p>

      <h2>Emberville builds FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
