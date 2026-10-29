import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";
import { articleSchema } from "@/lib/schema";

const SEO_TITLE = "Emberville Announcement Video: What CohhCarnage Revealed";
const route = getRoute("/news/emberville-announcement-video");
const PUBLISHED = "2026-10-12";
const MODIFIED = "2026-10-12";

const FAQS: Faq[] = [
  {
    q: "What did CohhCarnage announce about Emberville?",
    a: "In his first game update video he introduced the game, described how he joined the team, and set the business terms: a price of no more than $25, zero microtransactions, an Early Access discount, and no crowdfunding or outside investment. The Steam page opened for wishlists at the same time.",
  },
  {
    q: "How much will Emberville cost?",
    a: "In the announcement video Cassell said the game will not cost more than $25, will launch in Early Access at a discount, and will have zero microtransactions. The price has since changed: the studio's October 19, 2026 briefing sets launch at $29.99 with a 10% discount to $26.99, so the $25 line is now a historical statement rather than the current price.",
  },
  {
    q: "Is CohhCarnage the game director of Emberville?",
    a: "Named coverage identifies Ben “CohhCarnage” Cassell as co-founder and co-game director alongside founder and lead game director Brynjar Gigja. In the announcement video he described his day-to-day involvement in producer terms: weekly sprint meetings, planning the next sprint and giving feedback on everything implemented so far.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function AnnouncementVideoPage() {
  const schema = articleSchema({
    headline: "Emberville Announcement Video: What CohhCarnage Revealed",
    description: route.description,
    path: route.path,
    datePublished: PUBLISHED,
    dateModified: MODIFIED,
  });

  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "News", href: "/news" },
        { name: "Announcement video", href: route.path },
      ]} />
      <h1>Emberville Announcement Video: What CohhCarnage Revealed</h1>
      <p className="answer">
        Emberville’s public story starts with one video: “CohhCarnage Announces EMBERVILLE And The New Game Update
        Playlist! (Update #1)”, published on Ben “CohhCarnage” Cassell’s YouTube channel in late January 2026. In it
        he introduces the game, explains how he joined the project, and sets out the business terms the team still
        advertises today. This page turns the video’s statements into a dated, sourced record.
      </p>
      <p>
        The video sits inside a playlist Cassell set up for the game’s development updates, and he framed it as the
        first of many: his plan is to keep publishing videos as major updates ship, walking through patches, progress
        and what community feedback changed.
      </p>

      <h2>How CohhCarnage joined the project</h2>
      <p>
        Cassell describes the announcement as game development attempt number three for him. He says a fan of the
        channel approached him months earlier, understood what he likes to play and how he works, and brought him in
        to help make the game as good as it could be: shaping core mechanics, helping design systems and giving
        feedback. In the video he describes a producer-style routine — an hour-plus team meeting every week, planning
        the next sprint, and reviewing essentially everything implemented so far, including features that went from
        conversation to prototype to playable build. Cygnus Cross and named coverage now identify his studio role as
        co-founder and co-game director alongside founder and lead game director Brynjar Gigja; the{" "}
        <Link href="/studio" title={routeTitle("/studio")}>Cygnus Cross studio profile</Link> has the sourced
        breakdown.
      </p>

      <h2>What the video showed of Emberville</h2>
      <p>
        The game is introduced as Ember — the Emberville name settled later — and pitched as a take on what a Stardew
        Valley-style game would look like if it leaned far more into combat, carried a darker tone, and had a giant,
        thoroughly fleshed-out procedural dungeon at its centre. You farm, you progress, you rescue people and you
        build a town. The trailer’s sound effects are placeholders, and he says so on screen; the UI and inventory
        systems already existed at announcement but were held back from the trailer while their look was being
        finalised.
      </p>
      <p>
        The systems he calls out by name line up with the game’s current store description: combat-heavy play with
        multiple weapon types and multiple skill trees, a full inventory with plenty of loot, and a small companion
        — the Memento — that flies alongside you, feeds into the story and carries customisation of its own. In the
        middle of the town sits a giant crystal that opens a procedurally generated dungeon he compares to a delve
        map for Path of Exile players: each map its own area, with its own loop, monsters and unique events, holding
        bosses, townspeople to rescue and everything needed to restore the town. Alongside it sits a personal
        creative building area, a progressive rebuilding system for the town itself, and a fishing system he wanted
        to be “very extensive”. He also describes what he calls procedural quality-of-life: rescue a cartographer
        and your minimap starts filling in; gain townsfolk and features like auto-sort and auto-banking start
        appearing.
      </p>

      <h2>The business terms set in the video</h2>
      <p>
        The announcement fixed several terms that still define the project. On price, he set a ceiling of $25 and a
        discount at Early Access entry; that figure has since been revised — the studio&rsquo;s October 19, 2026
        briefing prices launch at $29.99 with a 10% discount to $26.99. The rest of the terms stand: zero
        microtransactions, no crowdfunding and no community money — he answers a viewer&rsquo;s offer to support the
        project directly with &ldquo;no&rdquo; — and any additional funding would come from the team itself.
        Controller support is confirmed. He also states the game has no blockchain, web3 or NFT integration of any
        kind and none is planned. Consoles are described as &ldquo;further down the road&rdquo;, which the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>platforms page</Link> now records as the studio&rsquo;s
        October 19, 2026 statement that console versions are planned for the 1.0 release — a firmer line than this
        video&rsquo;s, though still without a named platform or a date.
      </p>

      <h2>The timeline: from “early next year” to a confirmed date</h2>
      <p>
        In the video, Early Access was aimed at “early next year”, with a couple of years or more of development
        expected after that and a “when it’s ready” policy for the 1.0 — he says the team will not release a rushed
        version and will not ask players to fund the gap. The window later moved twice: the July release-date
        announcement named October 27, 2026, and the studio postponed that to{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>January 7, 2027</Link> on 26 October. The open
        development approach he described — community feedback shaping major updates, in the way Unknown Worlds’
        Subnautica evolved from player questions — is the development model the studio advertises for the year
        ahead.
      </p>
      <p>
        The versioning plan he sketches in the video is also on record: Early Access around version 0.5, a first
        major update adding the procedural dungeon, then a skills-and-weapons update, each paired with a video like
        this one.
      </p>

      <DataBlock source="CohhCarnage, “CohhCarnage Announces EMBERVILLE And The New Game Update Playlist! (Update #1)” (YouTube)" url="https://www.youtube.com/watch?v=uJr15tyoe80" verified="2026-10-12">
        <p>The announcement video introduces the game, the weekly sprint working rhythm, the $25 price cap (since superseded by the October 2026 briefing), no microtransactions, and the open Early Access approach; it is the first entry in the game’s development update playlist.</p>
      </DataBlock>
      <DataBlock source="IGN announcement report" url="https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley" verified="2026-10-12">
        <p>IGN’s January 27, 2026 report covers Emberville’s PC announcement and its “Diablo-lite meets Stardew Valley” framing, placing the video in the same late-January reveal window.</p>
      </DataBlock>
      <DataBlock source="Kakuchopurei" url="https://www.kakuchopurei.com/2026/01/emberville-is-diablo-meets-stardew-valley-backed-by-this-youtube-gaming-content-creator/" verified="2026-10-12">
        <p>Kakuchopurei’s January 29, 2026 piece covers the reveal and Cassell’s involvement with the Cygnus Cross project.</p>
      </DataBlock>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-12">
        <p>Steam listed Emberville’s Early Access launch for October 27, 2026 — the date the announcement video’s window resolved to. The studio postponed it to January 7, 2027 on October 26, 2026.</p>
      </DataBlock>

      <h2>Announcement video FAQ</h2>
      <FaqList faqs={FAQS} />

      <p>
        This record was built from the announcement video itself, checked on <b>2026-10-12</b>, alongside IGN’s
        January 27, 2026 announcement report, Kakuchopurei’s January 29, 2026 coverage and the Steam store page on
        the same date. The video’s exact upload date is not stated on the watch page metadata available to us, so the
        entry is dated to the corroborated late-January 2026 reveal window. Where the video and current sources
        differ — the working name “Ember”, the Early Access window, and Cassell’s studio title — the current sourced
        position is stated above.
      </p>
      <p>
        For the surrounding coverage, see the{" "}
        <Link href="/news" title={routeTitle("/news")}>Emberville news index</Link>, the{" "}
        <Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>October 2026 Steam Next Fest demo breakdown</Link>,
        or the <Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki</Link> for the systems themselves.
      </p>
    </AdArticle>
  );
}
