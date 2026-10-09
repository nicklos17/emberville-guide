import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";

const SEO_TITLE = "Emberville Characters: Survivors & Companions";
const route = getRoute("/characters");

const FAQS: Faq[] = [
  {
    "q": "Who are the Emberville characters?",
    "a": "Emberville characters are the survivors and companions met across the Vitromotus. Names are recorded as the game writes them once they can be verified in play — no guessed or placeholder names are published."
  },
  {
    "q": "How does affinity work in Emberville?",
    "a": "Affinity rises through interactions found in play. Exact numeric values are not published before launch, so entries describe which interactions raise it rather than quoting numbers that may change."
  },
  {
    "q": "Are romances in Emberville confirmed?",
    "a": "Companion affinity is the confirmed system. Specific romance routes are listed only once they can be observed in the live game, and community claims are labelled as such until then."
  },
  {
    "q": "How do I submit a character I found?",
    "a": "Email support@emberville-guide.wiki with the character name and where you met them. Community findings are labelled Community-reported until an official source confirms them."
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
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>Emberville Characters</h1>
      <p className="answer">
        Emberville characters are the survivors and companions met across the Vitromotus. Each entry
        records who they are, where they are met and how affinity with them works — written from
        observed play, with names exactly as the game writes them.
      </p>

      <h2>Emberville survivors and companions</h2>
      <p>
        A character entry answers three things a reader actually needs: who this person is, where
        they are met, and what raising affinity with them changes. Entries open once the character can
        be observed in the live game rather than inferred from datamined files, so the list below is
        deliberately short while Emberville is in Early Access.
      </p>
      <p className="empty-state">
        No character entry is published yet — Emberville has not launched, and character names are
        not confirmed by the publisher. Entries appear here as they can be verified.
      </p>

      <h2>Where Emberville characters are met</h2>
      <p>
        Companions are encountered across the Vitromotus rather than in one hub, so this page is
        organised by where a character is found instead of by importance. Region coverage for each
        area lives on the <Link href="/map" title="Emberville Map &amp; Areas: Regions &amp; Loot | Emberville Guide">Emberville map</Link>,
        which is where the entrance and loot notes for each area are kept.
      </p>

      <h2>Emberville character affinity</h2>
      <p>
        Affinity is the system behind companion availability: interactions raise it, and raised
        affinity changes what a companion will do for you. Because the exact numeric values are not
        published before launch, entries here describe which interactions raise affinity and what
        changes afterwards, rather than quoting numbers that may still be adjusted. Which loadout
        makes those conversations efficient is covered under
        {" "}<Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>.
      </p>

      <h2>Emberville character entry status</h2>
      <DataBlock
        source="Steam store page"
        url="https://store.steampowered.com/app/2295170/Emberville/"
        verified="2026-10-09"
      >
        <div className="overflow-x-auto my-4">
          <table>
            <thead>
              <tr>
                <th scope="col">Entry field</th>
                <th scope="col">Status</th>
                <th scope="col">Filled when</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><b>Character names</b></td>
                <td>Pending launch</td>
                <td>Confirmed by the publisher or observed in play</td>
              </tr>
              <tr>
                <td><b>Meet locations</b></td>
                <td>Pending launch</td>
                <td>Area can be reached and recorded</td>
              </tr>
              <tr>
                <td><b>Affinity values</b></td>
                <td>Pending launch</td>
                <td>Values are stable across a patch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Emberville characters FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}