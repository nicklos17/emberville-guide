import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Map & Areas: Regions, Dungeons & Loot";
const route = getRoute("/map");

const FAQS: Faq[] = [
  {
    "q": "How many regions does Emberville have?",
    "a": "The region count is not published before launch. Regions are listed here as they can be reached and recorded, each with its entrance, contents and loot — the list grows with the game rather than guessing at a total."
  },
  {
    "q": "Does the Emberville map change between patches?",
    "a": "It can. This page is updated whenever a patch changes an entrance or a loot source, and each region entry carries the patch it was verified on so an outdated route is visible rather than silently wrong."
  },
  {
    "q": "Where do I find Emberville items?",
    "a": "Loot sources are recorded per region on this page, and the items themselves are listed in the Emberville item database with their stats."
  },
  {
    "q": "Are there dungeons separate from the open map?",
    "a": "Instanced areas are listed separately from open regions once they can be reached, because their entrance condition and loot differ from open-world areas."
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
      <h1>Emberville Map</h1>
      <p className="answer">
        The Emberville map is organised region by region across the Vitromotus. Each area records where
        its entrance is, what lives there and what it drops — and is re-checked whenever a patch moves
        something.
      </p>

      <h2>Emberville map regions</h2>
      <p>
        Regions are listed rather than guessed. A region appears here once it can be reached and its
        contents recorded, and its entry carries the patch it was verified on. Until then the list stays
        short, because a map page full of speculative areas is worse than an honest short one.
      </p>
      <p className="empty-state">
        No region entries are published yet — Emberville has not launched and the region layout is not
        confirmed by the publisher. Areas appear here as they can be verified in play.
      </p>

      <h2>Emberville area entrances</h2>
      <p>
        Each region entry is written from the approach rather than from the map screen: how the area is
        reached, what blocks the way in, and what a first visit should prepare for. That framing is why
        entrances are recorded separately from loot — an entrance rarely changes, loot does. The
        companion coverage of who lives in these areas sits on the{" "}
        <Link href="/characters" title="Emberville Characters: Survivors &amp; Companions | Emberville Guide">Emberville characters</Link>{" "}
        page.
      </p>

      <h2>Emberville loot locations</h2>
      <p>
        Loot is listed per region with the patch it was verified on, and each drop is linked to its
        entry in the{" "}
        <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>.
        Materials that only appear after a region is cleared are marked separately from ones available on
        entry, so the table stays useful rather than optimistic.
      </p>

      <h2>Emberville map update status</h2>
      <DataBlock
        source="Steam store page"
        url="https://store.steampowered.com/app/2295170/Emberville/"
        verified="2026-10-09"
      >
        <div className="overflow-x-auto my-4">
          <table>
            <thead>
              <tr>
                <th scope="col">Map layer</th>
                <th scope="col">Status</th>
                <th scope="col">Filled when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Open regions</b></td>
                <td>Pending launch</td>
                <td>Region can be reached and recorded</td>
              </tr>
              <tr>
                <td><b>Dungeons</b></td>
                <td>Pending launch</td>
                <td>Instance entrance condition is confirmed</td>
              </tr>
              <tr>
                <td><b>Loot tables</b></td>
                <td>Pending launch</td>
                <td>Drops observed on a stable patch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville map FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}