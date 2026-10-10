import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Developer: Cygnus Cross & CohhCarnage";
const route = getRoute("/studio");

const FAQS: Faq[] = [
  {
    q: "Who is developing Emberville?",
    a: "Emberville is developed and self-published by Cygnus Cross, an independent studio based in Cork, Ireland.",
  },
  {
    q: "Who founded Cygnus Cross?",
    a: "Coverage identifies Brynjar Gigja as founder and lead game director, and Ben “CohhCarnage” Cassell as co-founder and co-game director.",
  },
  {
    q: "Is Emberville Cygnus Cross’s first game?",
    a: "The September preview describes Emberville as the studio’s debut title.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function StudioPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Studio", href: route.path }]} />
      <h1>Emberville Developer: The Cygnus Cross Studio</h1>
      <p className="answer">
        Emberville is the debut game from Cygnus Cross, an independent studio based in Cork, Ireland. The team is
        led by founder and lead game director Brynjar Gigja, with Twitch streamer Ben “CohhCarnage” Cassell as
        co-founder and co-game director. These are the roles used in developer and named-media sources.
      </p>

      <h2>Cygnus Cross: the independent Emberville studio</h2>
      <p>
        Cygnus Cross is identified as both developer and publisher on the Steam listing. A July developer release
        is datelined Cork, Ireland and describes the company as an independent developer. Emberville is the
        studio’s debut title; Gamer Social Club’s September preview reports that the team had been building it
        since 2023. Those details provide a sourced outline of the studio without extending it into unverified
        claims about its size or internal structure.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <p>Steam identifies Cygnus Cross as both the developer and publisher of Emberville.</p>
      </DataBlock>
      <DataBlock source="Cygnus Cross press release (hosted by GamesPress)" url="https://www.gamespress.com/Emberville-Sets-October-27-Early-Access-Launch-Reveals-Its-Biggest-Loo" verified="2026-10-10">
        <p>The July 16 developer release is datelined Cork, Ireland and describes Cygnus Cross as an independent developer.</p>
      </DataBlock>

      <h2>Emberville leadership: Brynjar Gigja and CohhCarnage</h2>
      <p>
        Named coverage describes Brynjar Gigja as founder and lead game director. Ben “CohhCarnage” Cassell is
        identified as a co-founder and co-game director. Cassell is also known as a Twitch streamer, but the
        position relevant to Emberville in the cited reports is the studio role—not an informal label sometimes
        repeated in community posts.
      </p>
      <DataBlock source="GamingTrend" url="https://gamingtrend.com/news/get-a-look-at-emberville-before-it-launches-into-early-access-this-october" verified="2026-10-10">
        <p>GamingTrend names CohhCarnage as “Co-founder and Co-Game Director” and Brynjar Gigja as “Lead Game Director.”</p>
      </DataBlock>
      <DataBlock source="Gamer Social Club" url="https://gamersocialclub.ca/2026/09/11/emberville-preview/" verified="2026-10-10">
        <p>The September 11 preview describes Emberville as Cygnus Cross’s debut title, based in Cork, and identifies Gigja and Cassell’s studio roles.</p>
      </DataBlock>

      <h2>Emberville studio and cast references</h2>
      <p>
        Cygnus Cross’s official site also publishes the 22-person voice-cast roster, while the game’s dated
        announcement and preview coverage describe how the project was introduced and played. For the individual
        performer list and the two character roles named in published coverage, see the{" "}
        <Link href="/voice-cast" title={routeTitle("/voice-cast")}>Emberville voice cast reference</Link>. The{" "}
        <Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki</Link> covers the confirmed premise and systems.
      </p>
      <DataBlock source="Cygnus Cross official website" url="https://www.cygnuscross.com/" verified="2026-10-10">
        <p>The studio’s site publishes an official 22-name Emberville voice cast listing.</p>
      </DataBlock>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/characters" title={routeTitle("/characters")}>Emberville characters, survivors and villagers</Link></li>
        <li><Link href="/stardew-valley-diablo" title={routeTitle("/stardew-valley-diablo")}>Emberville compared with Stardew Valley and Diablo</Link></li>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville announcements and Early Access scope</Link></li>
      </ul>

      <h2>Emberville developer FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
