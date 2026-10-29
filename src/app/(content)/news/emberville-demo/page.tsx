import type { Metadata } from "next";
import Link from "next/link";
import { AdArticle } from "@/components/ads/AdArticle";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DataBlock } from "@/components/DataBlock";
import { FaqList, type Faq } from "@/components/FaqList";
import { getRoute, routeTitle } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const SEO_TITLE = "Emberville Demo Dates, Content & Early Access Explained";
const route = getRoute("/news/emberville-demo");
const PUBLISHED = "2026-10-10";
const MODIFIED = "2026-10-28";

const FAQS: Faq[] = [
  {
    q: "Is the Emberville demo the full game?",
    a: "No. The demo is the Prologue, the opening chapter that introduces the world, characters and core mechanics. Early Access adds the first major biome plus substantially more content, progression and gameplay.",
  },
  {
    q: "Is the Emberville demo available on GOG?",
    a: "The demo is distributed through Steam as a Steam Next Fest build. GOG lists Emberville for the same Early Access release, but no GOG demo has been announced.",
  },
  {
    q: "Do I need to finish the demo before Early Access launches?",
    a: "No. Saves from the Next Fest demo carry into Early Access, so progress does not have to be completed first. The festival window itself closes at 10:00 PDT on October 26, 2026, and post-festival availability has not been announced.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function EmbervilleDemoPage() {
  const schema = articleSchema({
    headline: "Emberville Demo: Dates, Content & Is It Worth Playing?",
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
        { name: "Emberville Demo", href: route.path },
      ]} />
      <h1>Emberville Demo: Dates, Content &amp; Is It Worth Playing?</h1>
      <p className="answer">
        The Emberville demo is a free Steam Next Fest build that ran from October 19 to 26, 2026 and is still
        downloadable after the festival closed. It is the game&rsquo;s prologue, averages about 90 minutes, and its
        saves carry into Early Access — which now begins on January 7, 2027, after the studio postponed the original
        October 27 date. This page covers the schedule, the playable scope and whether a session is worth your
        evening.
      </p>
      <p>
        The dates come from Steamworks and the studio; the playable scope comes from Cygnus Cross&rsquo;s own Early
        Access briefing, published as the festival opened. For the launch record itself — the exact opening hour, the
        first patch and the day-one Early Access scope — see the{" "}
        <Link href="/news/emberville-demo-launch" title={routeTitle("/news/emberville-demo-launch")}>Emberville Next Fest demo launch record</Link>.
      </p>
      <p className="text-sm text-ink-muted">
        Published <time dateTime={PUBLISHED}>October 10, 2026</time> · Updated <time dateTime={MODIFIED}>October 28, 2026</time> · Sources checked October 28, 2026
      </p>

      <h2>Emberville demo dates and how to play</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Milestone</th><th scope="col">Date</th><th scope="col">What is confirmed</th></tr>
          </thead>
          <tbody>
            <tr><td>Demo status</td><td>Live during Steam Next Fest</td><td>A separate demo app is listed alongside the main Steam page.</td></tr>
            <tr><td>Steam Next Fest event window</td><td>October 19, 10 a.m.–October 26, 10 a.m. PDT (UTC−7)</td><td>Steamworks sets the festival hours; the demo opened with them.</td></tr>
            <tr><td>PC Early Access</td><td>January 7, 2027</td><td>Moved from October 27, 2026 by the studio on October 26; the unlock hour is unannounced.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The festival window is the demo&rsquo;s window, not a separate schedule: 10 a.m. PDT on October 19 is
        01:00 on October 20 in Beijing, which is why Chinese-language coverage dates the launch to October 20.
        Post-festival availability has not been announced, so treat October 26 as the last confirmed day of access.
        For the wider release timeline, see the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>.
      </p>
      <DataBlock
        source="Steamworks, Steam Next Fest: October 2026"
        url="https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest/2026october?l=schinese&language=english"
        verified="2026-10-22"
      >
        <p>Steamworks sets the October festival window at 10 a.m. PDT on October 19 through 10 a.m. PDT on October 26.</p>
      </DataBlock>
      <DataBlock source="Steam, Emberville store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-28">
        <p>The Steam listing carries a separate demo app for the festival build and dates Emberville&rsquo;s Early Access to January 7, 2027, following the studio&rsquo;s October 26 postponement.</p>
      </DataBlock>

      <h2>What the Emberville demo includes</h2>
      <p>
        Cygnus Cross defines the demo as the Prologue: &ldquo;the opening chapter of Emberville&rsquo;s story,
        introducing the world, characters, and core mechanics.&rdquo; The studio states that the prologue takes 90
        minutes on average to complete, and calls it the quality bar it is working toward across the full game.
      </p>
      <p>
        That scope is narrower than the store page reads. Town rebuilding, the personal estate and the life-skill
        professions are described as full-game systems, and Cygnus Cross has not said how far a 90-minute prologue
        reaches into them. Plan on a short combat-and-exploration slice, and judge the town half of the game from
        the store description rather than from the demo.
      </p>
      <DataBlock source="Steam, “What to Expect from Emberville Early Access on October 27th” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170/view/760703279879423656" verified="2026-10-22">
        <p>The announcement identifies the public demo as the Prologue, gives an average completion time of 90 minutes for it, and confirms that saves from the demo carry over to Early Access.</p>
      </DataBlock>

      <h2>What an earlier Emberville hands-on preview played</h2>
      <p>
        IGN&rsquo;s Scott White reported on a hands-on preview of an earlier prologue build on September 11. The
        account describes fighting and exploring the first biome, with some resource gathering and crafting;
        city-building was absent from that session. It was a separate media preview, and the studio now confirms
        that saves from the Creator &amp; Press Preview do not carry over — only the public demo&rsquo;s do.
      </p>
      <p>
        The preview remains useful for one thing the demo cannot show you: how the game feels several hours in,
        beyond a 90-minute opening. It is a report on a build that no longer exists, so treat its specifics as
        context for the game&rsquo;s direction rather than as a description of what you will download today.
      </p>
      <DataBlock
        source="IGN preview by Scott White (September 11, 2026)"
        url="https://www.ign.com/articles/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview"
        verified="2026-10-10"
      >
        <p>IGN labels the piece an opening-prologue hands-on preview and describes the scope of that earlier playable build.</p>
      </DataBlock>

      <h2>Does demo progress carry over? Length and save transfer</h2>
      <p>
        Progress carries over. Cygnus Cross states that &ldquo;progress made during the Next Fest Demo will carry
        over into Early Access&rdquo; and that there is no need to start again, which turns the demo into the first
        stretch of your launch save rather than a disposable sample.
      </p>
      <p>
        What travels is unspecified. Character level, weapon proficiency, materials, recipes and town state are all
        unaddressed, so the safe reading is that the save file transfers, not that every unlock is preserved. If a
        specific progression point matters to your launch plan, check it in your own save once Early Access opens on
        January 7, 2027.
      </p>

      <h2>Is the Emberville demo worth playing before Early Access?</h2>
      <p>
        With the demo still playable and Early Access ten weeks out, it works as a paid-for-nothing trial of the
        systems you will be judged on:
        whether combat reads clearly, whether the loot loop pulls you forward, and whether the game runs well on
        your PC. Controller support ships at launch but is still being refined — the studio says demo feedback on
        controller feel is part of what the extra time is for — so testing a pad now is informative rather than
        definitive.
      </p>
      <p>
        It is a poor test of breadth. A 90-minute prologue cannot represent a first biome, let alone the nine biomes
        the studio plans across Early Access, and it says nothing about the crafting, building and town-management
        half of the game. Use it to decide whether you like the moment-to-moment combat; use the{" "}
        <Link href="/builds" title={routeTitle("/builds")}>Emberville combat and build systems</Link> for how
        weapons, combos and classes fit together.
      </p>

      <h2>Emberville demo FAQ</h2>
      <FaqList faqs={FAQS} />

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news index</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville systems guide</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki and gameplay overview</Link></li>
      </ul>
    </AdArticle>
  );
}
