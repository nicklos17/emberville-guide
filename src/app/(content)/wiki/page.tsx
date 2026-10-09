import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Wiki: Weapons, Items, Characters & Bosses";
const route = getRoute("/wiki");

// 四大分组（SITE.md：装备 / 道具 / 角色 / Boss）。
// 分组下暂无可核验条目时不上屏——不挂空分类（SITE.md：「别把空分类挂上去」）。
const GROUPS = [
  {
    id: "weapons",
    name: "Weapons",
    blurb: "Every confirmed weapon, its acquisition source and the patch its values were verified on.",
    href: "/item-database",
    linkText: "Emberville item database",
  },
  {
    id: "items",
    name: "Items & materials",
    blurb: "Trinkets, consumables and crafting materials, each with where it is found and what it does.",
    href: "/item-database",
    linkText: "Emberville item database",
  },
  {
    id: "characters",
    name: "Characters",
    blurb: "Survivors and companions you meet in Emberville, with identity, location and affinity notes.",
    href: "/characters",
    linkText: "Emberville characters",
  },
  {
    id: "bosses",
    name: "Bosses",
    blurb: "Named enemies with fight notes. Ratings appear only after the fight can actually be recorded.",
    href: "/builds",
    linkText: "Emberville builds",
  },
] as const;

const FAQS: Faq[] = [
  {
    "q": "What is the Emberville wiki?",
    "a": "It is the single index of every Emberville entry on this site — weapons, items, characters and bosses — grouped so a specific entry is two clicks from the homepage."
  },
  {
    "q": "Why are the groups empty right now?",
    "a": "Emberville has not launched yet, and the client does not publish its full item and enemy names. Publishing guessed names would be worse than publishing none, so each group stays closed until its entries can be verified."
  },
  {
    "q": "Will the Emberville wiki include datamined data?",
    "a": "No. Datamined names and values are treated as unconfirmed until they appear in the live game. Nothing on this site is published from leaks or placeholder files."
  },
  {
    "q": "How do I get an entry added or corrected?",
    "a": "Email support@emberville-guide.wiki with the entry name and where you saw it. Community findings are labelled Community-reported until an official source confirms them."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function WikiPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Wiki", href: route.path }]} />
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>Emberville Wiki</h1>
      <p className="answer">
        The Emberville wiki is the total index of entries on this site, grouped into weapons,
        items, characters and bosses. Each group opens only once its entries can be verified against
        the live game.
      </p>

      <h2>Emberville wiki entry groups</h2>
      <p>
        The four groups below are the fixed structure of this wiki. They are listed with the page that
        carries their entries, so a group with nothing verified yet never links to an empty list.
      </p>
      <div className="overflow-x-auto my-4">
        <table>
          <thead>
            <tr>
              <th scope="col">Group</th>
              <th scope="col">What it covers</th>
              <th scope="col">Entries live on</th>
            </tr>
          </thead>
          <tbody>
            {GROUPS.map((g) => (
              <tr key={g.id}>
                <td>
                  <b>{g.name}</b>
                </td>
                <td>{g.blurb}</td>
                <td>
                  <Link href={g.href} title={g.linkText}>{g.linkText}</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Emberville weapons</h2>
      <p>
        Weapon entries record the official name, where the weapon is found and the patch its values
        were checked on. Until the game is live, no weapon entry is published — the names a datamine
        turns up are not treated as confirmed. Current item coverage lives in the
        {" "}<Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>.
      </p>

      <h2>Emberville items and materials</h2>
      <p>
        Trinkets, consumables and crafting materials are recorded with their acquisition source and
        verified effect, so a reader can tell what an item is for before spending time on it. The
        same page carries the full listing while groups are still closed: see the
        {" "}<Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>.
      </p>

      <h2>Emberville characters</h2>
      <p>
        Character entries cover identity, where the survivor is met and how affinity works with them.
        Because affinity values are not published before launch, entries are written from observed
        play rather than assumption. Follow the
        {" "}<Link href="/characters" title="Emberville Characters: Survivors &amp; Companions | Emberville Guide">Emberville characters</Link>{" "}
        page as companions are confirmed.
      </p>

      <h2>Emberville bosses</h2>
      <p>
        Boss entries describe phases, punish windows and the loadout that made the fight tractable.
        Difficulty ratings are withheld until a fight can actually be recorded — the
        {" "}<Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>{" "}
        page lists the setups each entry is tested with, and states the patch it was tested on.
      </p>

      <h2>Emberville wiki verification status</h2>
      <DataBlock
        source="Steam store page"
        url="https://store.steampowered.com/app/2295170/Emberville/"
        verified="2026-10-09"
      >
        <div className="overflow-x-auto my-4">
          <table>
            <thead>
              <tr>
                <th scope="col">Group</th>
                <th scope="col">Status</th>
                <th scope="col">When it opens</th>
              </tr>
            </thead>
            <tbody>
              {GROUPS.map((g) => (
                <tr key={g.id}>
                  <td>
                    <b>{g.name}</b>
                  </td>
                  <td>Pending launch</td>
                  <td>Once entries can be checked against the live game</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville wiki FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}