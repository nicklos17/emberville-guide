import type { Metadata } from "next";
import Link from "next/link";
import { AdArticle } from "@/components/ads/AdArticle";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DataBlock } from "@/components/DataBlock";
import { FaqList, type Faq } from "@/components/FaqList";
import { getRoute, routeTitle } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const SEO_TITLE = "Emberville Next Fest Demo Live: Prologue & Save Transfer";
const route = getRoute("/news/emberville-demo-launch");
const PUBLISHED = "2026-10-22";
const MODIFIED = "2026-10-22";

const FAQS: Faq[] = [
  {
    q: "Is the Emberville demo free?",
    a: "Yes. Steam distributes it as a festival demo, and Steam describes Steam Next Fest as an event where players can try free demos of upcoming games. The paid Early Access release — now dated January 7, 2027 — is a separate purchase.",
  },
  {
    q: "Will the Emberville demo stay available after October 26?",
    a: "Yes. The festival window closed at 10:00 PDT on October 26, 2026, but the demo app stayed downloadable. In his postponement video co-founder Ben “CohhCarnage” Cassell says the studio is leaving the demo up and may keep updating it on the way to January 7, 2027, and GameSpot reported it still playable after the delay.",
  },
  {
    q: "Do creator and press preview saves carry over too?",
    a: "No. Cygnus Cross draws the line at the public demo: saves from the Creator & Press Preview do not carry over, while saves from the Steam Next Fest demo do.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function DemoLaunchPage() {
  const schema = articleSchema({
    headline: "Emberville's prologue demo is live, and its saves carry over",
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
        { name: "Next Fest demo launch", href: route.path },
      ]} />
      <h1>Emberville&rsquo;s prologue demo is live, and its saves carry over</h1>
      <p className="answer">
        Cygnus Cross opened the Emberville Steam Next Fest demo with the festival window on October 19 at 10:00
        PDT — October 20, 01:00 in China Standard Time — and published its Early Access briefing within the hour.
        The build is the game&rsquo;s prologue, averages about 90 minutes, and its saves carry into Early Access —
        which the studio has since moved from October 27 to January 7, 2027. A first patch, Alpha Demo 0.20.17.x,
        landed later the same day.
      </p>
      <p>
        The unlock came from the festival calendar rather than a separate launch announcement: Steamworks dates the
        October edition from 10:00 PDT on October 19 to 10:00 PDT on October 26. Cygnus Cross has published no
        standalone unlock time, and the demo ships as its own Steam app instead of a branch of the main listing.
        This page records what actually went live, what the build contains, and what the studio has confirmed about
        the handover to Early Access.
      </p>
      <p className="text-sm text-ink-muted">
        Published <time dateTime={PUBLISHED}>October 22, 2026</time> · Sources checked October 22, 2026
      </p>

      <h2>When the Emberville demo went live</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Milestone</th><th scope="col">UTC</th><th scope="col">Pacific (PDT)</th><th scope="col">China (UTC+8)</th></tr>
          </thead>
          <tbody>
            <tr><td>Steam Next Fest window opens</td><td>Oct 19, 17:00</td><td>Oct 19, 10:00</td><td>Oct 20, 01:00</td></tr>
            <tr><td>Early Access briefing published</td><td>Oct 19, 17:54</td><td>Oct 19, 10:54</td><td>Oct 20, 01:54</td></tr>
            <tr><td>First demo patch (0.20.17.x)</td><td>Oct 19, 22:46</td><td>Oct 19, 15:46</td><td>Oct 20, 06:46</td></tr>
            <tr><td>Steam Next Fest window closes</td><td>Oct 26, 17:00</td><td>Oct 26, 10:00</td><td>Oct 27, 01:00</td></tr>
            <tr><td>Early Access launch (postponed)</td><td colSpan={2}>Was Oct 27; unlock time not announced</td><td>Now Jan 7, 2027 (date only)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The two calendar dates in circulation describe one moment. Chinese-language coverage dated the demo to
        October 20 because 10:00 PDT falls at 01:00 the next morning in Beijing; the festival itself opened on
        October 19 in US Pacific time. Anyone planning a session around &ldquo;October 20&rdquo; is reading the same
        release, not a second one.
      </p>
      <DataBlock source="Steam, Emberville store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-28">
        <p>The store page carries a separate demo app alongside the main product listing, dates Early Access to January 7, 2027 after the October 26 postponement, and still shows no purchase price before release.</p>
      </DataBlock>

      <h2>What the Emberville prologue demo contains</h2>
      <p>
        Cygnus Cross defines the demo as the Prologue: &ldquo;the opening chapter of Emberville&rsquo;s story,
        introducing the world, characters, and core mechanics.&rdquo; The studio also states that the prologue
        &ldquo;takes 90 minutes on average to complete&rdquo; and calls it &ldquo;the quality bar we&rsquo;re
        working toward across the entire game&rdquo; — a useful framing, because a polished opening chapter is not
        evidence that later biomes match it.
      </p>
      <p>
        A same-day press write-up fills in the playable activities: combat, weapon-bound combos, exploration, loot
        and material gathering, and equipment crafting. It names the axe, hammer and crossbow among the usable
        weapon types, which fits the combat structure the{" "}
        <Link href="/builds" title={routeTitle("/builds")}>Emberville combat and build systems</Link> describe —
        combos bound to a weapon category rather than to a class.
      </p>
      <DataBlock source="3DM, “Emberville demo launches with carry-over saves” (October 20, 2026)" url="https://www.3dmgame.com/news/202610/3957117.html" verified="2026-10-22">
        <p>The report states that the demo covers the prologue, including combat, combos, exploration, loot and material gathering, and equipment crafting, and that demo saves can be inherited by the Early Access version. It is a bylined media compilation, not a developer-authored feature list.</p>
      </DataBlock>
      <p>
        What the build does not come with is a feature checklist. Cygnus Cross has not published a
        system-by-system inventory of the demo, so the store page&rsquo;s descriptions of town rebuilding, the
        estate and life skills remain statements about the full game. Treat them as the direction of travel, not as
        a promise that a 90-minute prologue reaches them.
      </p>

      <h2>Emberville demo save transfer to Early Access</h2>
      <p>
        The handover is confirmed in the studio&rsquo;s own words: &ldquo;There&rsquo;s no need to start again.
        Progress made during the Next Fest Demo will carry over into Early Access.&rdquo; That makes the demo worth
        playing as a head start rather than a throwaway sample — a distinction that matters more than usual for a
        game launching seven days later.
      </p>
      <p>
        The scope of &ldquo;progress&rdquo; is the open part. Cygnus Cross confirms that saves transfer but has not
        itemised what travels — character level, weapon proficiency, materials, recipes and town state are all
        plausible and none is specified. If a particular unlock matters to your launch plan, verify it in your own
        save once Early Access opens rather than assuming the whole file moves intact.
      </p>
      <DataBlock source="Steam, “What to Expect from Emberville Early Access on October 27th” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170/view/760703279879423656" verified="2026-10-22">
        <p>The announcement states that progress made during the Steam Next Fest demo carries over into Early Access, and that the demo includes the Prologue. It also separates the Creator &amp; Press Preview, whose saves do not carry over.</p>
      </DataBlock>

      <h2>The first Emberville demo patch, Alpha Demo 0.20.17.x</h2>
      <p>
        Cygnus Cross shipped a patch within hours of opening, which is the clearest available signal of how the
        build is being serviced. The fixes target startup and localisation rather than balance: a black screen on
        some Windows configurations, cutscene language bugs, and text problems specific to Simplified Chinese,
        Traditional Chinese, Japanese and Korean.
      </p>
      <p>
        The same patch corrects a Palm Strike bug that gave the skill a 100% stun chance, a mastery entry showing
        the wrong name and description, clothing colour selection on a controller, key rebinding, and the death XP
        penalty calculation. One known issue stayed open: the L and R controller buttons misbehave in some tabs and
        menus.
      </p>
      <DataBlock source="Steam, “Demo - Patch Notes” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170" verified="2026-10-22">
        <p>The patch notes list the startup, localisation, skill and input fixes in version Alpha Demo 0.20.17.x and record the open controller-button issue.</p>
      </DataBlock>

      <h2>Emberville Early Access content at launch</h2>
      <p>
        Early Access begins with the first major biome and &ldquo;substantially more content, progression, and
        gameplay than the demo.&rdquo; The studio puts the full Early Access experience at 180 minutes of
        voice-acted content, and estimates 7–10 hours for players who rush, 15–20 for an average run and 20–30+ for
        invested players, with crafting and building able to stretch that further.
      </p>
      <p>
        Controller support ships at launch, though the studio says the experience has not reached its target
        quality yet, with no on-screen keyboard initially and improvements queued for the first update. Nine
        languages are supported at launch: English for interface, subtitles and voice, plus Spanish (Spain), French,
        German, Japanese, Korean, Simplified Chinese, Traditional Chinese and Brazilian Portuguese for interface and
        subtitles.
      </p>
      <p>
        The first Early Access update is planned within a month of launch and is set to add the final boss of Biome
        1, further controller work, additional languages, bug fixes and a public roadmap. Beyond that, the studio
        lists co-op multiplayer, modding support and console releases as 1.0 additions — plans rather than dated
        commitments, and the reason the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>{" "}
        still treat the 1.0 window as open.
      </p>
      <DataBlock source="Steam, “What to Expect from Emberville Early Access on October 27th” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170/view/760703279879423656" verified="2026-10-22">
        <p>The announcement sets out the day-one scope, the 180 minutes of voice-acted content, the playtime estimates, launch controller and language support, the first-month update, and the co-op, modding and console plans attached to 1.0.</p>
      </DataBlock>

      <h2>Emberville demo FAQ</h2>
      <FaqList faqs={FAQS} />

      <p>
        Everything above was checked on <b>2026-10-28</b> against the Steam store page, Cygnus Cross announcements on
        Steam, and one dated Chinese-language report. Two things have moved since the launch week: Early Access was
        postponed to January 7, 2027, and the demo stayed up rather than disappearing with the festival. The
        postponement itself is recorded on the{" "}
        <Link href="/news/emberville-delay" title={routeTitle("/news/emberville-delay")}>Emberville delay page</Link>.
        For the planning view — playtime and whether a session is worth your evening — see the{" "}
        <Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>Emberville demo dates and content page</Link>.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news index</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville systems guide</Link></li>
        <li><Link href="/item-database" title={routeTitle("/item-database")}>Emberville items and crafting reference</Link></li>
      </ul>
    </AdArticle>
  );
}
