import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Voice Cast: All 22 Actors & Known Roles";
const route = getRoute("/voice-cast");

const FAQS: Faq[] = [
  {
    q: "How many people are in the Emberville voice cast?",
    a: "The Cygnus Cross official site lists 22 people: Voice Acting Director Alex Jordan and 21 voice actors.",
  },
  {
    q: "Which Emberville characters have confirmed voice actors?",
    a: "Published hands-on coverage names Alex Jordan as Adeos and Matthew Mercer as the shopkeeper Gumu. The remaining cast members have not been mapped to roles in the sources cited here.",
  },
  {
    q: "Who narrates the Emberville cinematic trailer?",
    a: "The developer’s July 16 press release identifies Jane Perry as the cinematic narrator. This credit does not assign her to a character role.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function VoiceCastPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Voice Cast", href: route.path }]} />
      <h1>Emberville Voice Cast: The Full 22-Name Roster</h1>
      <p className="answer">
        The official Emberville voice cast listing names 22 people: voice-acting director Alex Jordan and 21
        performers. Only two character pairings are identified in the cited hands-on coverage—Jordan as Adeos and
        Matthew Mercer as Gumu—so this roster keeps every other role unassigned rather than guessing.
      </p>

      <h2>Emberville voice cast: the complete official roster</h2>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <div className="my-4 overflow-x-auto">
          <table>
            <thead><tr><th scope="col">Credit</th><th scope="col">Name</th></tr></thead>
            <tbody>
              <tr><td>Voice Acting Director</td><td>Alex Jordan</td></tr>
              <tr><td>Voice actor</td><td>Doug Cockle</td></tr>
              <tr><td>Voice actor</td><td>Abubakar Salim</td></tr>
              <tr><td>Voice actor</td><td>Lucy Elliott</td></tr>
              <tr><td>Voice actor</td><td>Amelia Tyler</td></tr>
              <tr><td>Voice actor</td><td>Jennifer English</td></tr>
              <tr><td>Voice actor</td><td>Ben Starr</td></tr>
              <tr><td>Voice actor</td><td>Matthew Mercer</td></tr>
              <tr><td>Voice actor</td><td>Alex Ponton</td></tr>
              <tr><td>Voice actor</td><td>Jane Perry</td></tr>
              <tr><td>Voice actor</td><td>Elias Toufexis</td></tr>
              <tr><td>Voice actor</td><td>Kirsty Rider</td></tr>
              <tr><td>Voice actor</td><td>Nick Apostolides</td></tr>
              <tr><td>Voice actor</td><td>Anjali Bhimani</td></tr>
              <tr><td>Voice actor</td><td>Cahla Thorman</td></tr>
              <tr><td>Voice actor</td><td>Briana White</td></tr>
              <tr><td>Voice actor</td><td>Rich Keeble</td></tr>
              <tr><td>Voice actor</td><td>Michael Bryan</td></tr>
              <tr><td>Voice actor</td><td>David Menkin</td></tr>
              <tr><td>Voice actor</td><td>Harry McEntire</td></tr>
              <tr><td>Voice actor</td><td>LilyPichu</td></tr>
              <tr><td>Voice actor</td><td>Dillon Francis</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>
      <p>
        The list is a studio-published credit roster, not a full character directory. Names in the table indicate
        involvement with the game; they do not by themselves establish which survivor, villager or other character
        each performer plays.
      </p>

      <h2>Emberville voice roles confirmed in coverage</h2>
      <p>
        IGN’s September hands-on preview identifies two performances heard in the prologue: Alex Jordan voices
        Adeos, an elderly character, and Matthew Mercer voices Gumu, a shopkeeper. No role mapping for the rest of
        the 22-name list is stated in that preview or the official cast listing cited here.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>The September 11 preview names Alex Jordan as Adeos and Matthew Mercer as Gumu.</p>
      </DataBlock>

      <h2>Jane Perry’s Emberville narration credit</h2>
      <p>
        Jane Perry is part of the published cast roster. Separately, Cygnus Cross’s July 16 developer press release
        credits her with cinematic narration for the trailer and names Greg Dombrowski of Secession Studios as
        composer. Trailer narration is a distinct credit; it is not evidence of a named in-game character role.
      </p>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The July 16 release names Jane Perry for cinematic narration and Greg Dombrowski for the original score.</p>
      </DataBlock>

      <h2>Related Emberville references</h2>
      <ul>
        <li><Link href="/characters" title={routeTitle("/characters")}>Emberville characters, survivors and villagers</Link></li>
        <li><Link href="/studio" title={routeTitle("/studio")}>Cygnus Cross and CohhCarnage: the Emberville studio</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki and gameplay systems</Link></li>
      </ul>

      <h2>Emberville voice cast FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
