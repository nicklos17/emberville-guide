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
const MODIFIED = "2026-10-10";

const FAQS: Faq[] = [
  {
    q: "When does the Emberville demo start and end?",
    a: "IGN lists the demo for Steam Next Fest from October 19 to 26, 2026. Steam's event window runs from 10 a.m. PDT on October 19 to 10 a.m. PDT on October 26; Emberville's exact access times have not been confirmed.",
  },
  {
    q: "What content is in the Emberville demo?",
    a: "A detailed demo-content list has not been announced. The Steam store page describes the full game, not a feature-by-feature list for the Next Fest demo.",
  },
  {
    q: "How long is the demo, and will progress carry over?",
    a: "Neither a playtime estimate nor save transfer has been announced. Post-festival access is also unconfirmed.",
  },
  {
    q: "Has the Early Access price been announced?",
    a: "No price was listed in the sources checked for this guide. Steam describes Next Fest as featuring free demos, which is separate from buying Emberville's Early Access release; check the store page for final access and price details.",
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
        The Emberville demo is listed for Steam Next Fest from October 19–26, 2026, ahead of PC Early Access on
        October 27. Its specific content, playtime, save transfer, post-festival availability, and Early Access
        price have not been announced. This guide separates the confirmed schedule from full-game features and an
        earlier media preview, so you can judge what a demo session can—and cannot—tell you.
      </p>
      <p>
        The dates are public; the demo’s playable scope is not. IGN’s October 8 page is an announcement-trailer
        listing, while Steam publishes the general festival window. Neither gives Emberville’s exact unlock time or
        a feature-by-feature demo breakdown. Here is what those sources confirm, what an earlier preview showed,
        and what to check before deciding whether Early Access is for you.
      </p>
      <p className="text-sm text-ink-muted">
        Published <time dateTime={PUBLISHED}>October 10, 2026</time> · Sources checked October 10, 2026
      </p>

      <h2>Emberville demo dates and how to play</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Milestone</th><th scope="col">Date</th><th scope="col">What is confirmed</th></tr>
          </thead>
          <tbody>
            <tr><td>Steam Next Fest demo listing</td><td>October 19–26, 2026</td><td>IGN lists a demo during the festival dates.</td></tr>
            <tr><td>Steam Next Fest event window</td><td>October 19, 10 a.m.–October 26, 10 a.m. PDT (UTC−7)</td><td>Steamworks gives the event hours; these are not Emberville-specific access times.</td></tr>
            <tr><td>PC Early Access</td><td>October 27, 2026</td><td>The Steam store page lists this planned release date.</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The Steam event window is useful for planning, but it does not establish that Emberville’s demo will unlock
        at midnight on October 19 or remain playable through every hour of October 26. Check the game’s Steam
        listing when the demo is available for its actual access details. For the wider release timeline, see the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>.
      </p>
      <DataBlock
        source="IGN demo-announcement trailer listing"
        url="https://www.ign.com/videos/emberville-official-demo-announcement-trailer-convergence-games-showcase-october-2026"
        verified="2026-10-10"
      >
        <p>IGN’s October 8 listing says the demo will be available during Steam Next Fest from October 19 to 26, with PC Early Access on October 27.</p>
      </DataBlock>
      <DataBlock
        source="Steamworks, Steam Next Fest: October 2026"
        url="https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest/2026october?l=schinese&language=english"
        verified="2026-10-10"
      >
        <p>Steamworks sets the October festival window at 10 a.m. PDT on October 19 through 10 a.m. PDT on October 26.</p>
      </DataBlock>
      <DataBlock source="Steam, Emberville store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <p>The Steam listing gives October 27, 2026 as Emberville’s planned PC Early Access date.</p>
      </DataBlock>

      <h2>What the Emberville demo is confirmed to include</h2>
      <p>
        A detailed demo-content list has not been announced. The sources confirm the festival dates, but do not
        identify which locations, quests, story beats, enemies, bosses, classes, weapons, or progression systems
        will be playable in this specific build.
      </p>
      <p>
        Steam describes combat, gathering, crafting, farming, and cooking as parts of Emberville overall. Those
        statements describe the game, not the contents of this demo. A system appearing on the store page is not
        evidence that the Next Fest build includes it, or that it will be available in full.
      </p>
      <DataBlock
        source="TalkEsport, Deepak Ojha (September 23, 2026)"
        url="https://www.talkesport.com/news/emberville-600k-wishlists-steam-next-fest-demo-early-access/"
        verified="2026-10-10"
      >
        <p>This bylined report says Cygnus Cross had not yet detailed exactly how much content the demo would contain. It is media reporting, not a developer-authored feature list.</p>
      </DataBlock>

      <h2>What an earlier Emberville hands-on preview played</h2>
      <p>
        IGN’s Scott White reported on a hands-on preview of an earlier prologue build on September 11. The account
        describes fighting and exploring the first biome, with some resource gathering and crafting; city-building
        was absent from that session. That was a separate media preview, not the October public Next Fest demo.
      </p>
      <p>
        Its observations can help set context for the game’s direction, but they cannot confirm the public demo’s
        locations or systems. For example, the fact that city-building did not appear in that earlier session does
        not mean it will be absent from the Next Fest build. The demo’s own listing or a new developer statement
        would be needed to settle that question.
      </p>
      <DataBlock
        source="IGN preview by Scott White (September 11, 2026)"
        url="https://www.ign.com/articles/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview"
        verified="2026-10-10"
      >
        <p>IGN labels the piece an opening-prologue hands-on preview and describes the scope of that earlier playable build.</p>
      </DataBlock>

      <h2>Emberville demo length, save transfer, and post-festival access</h2>
      <p>
        No playtime estimate, save-transfer policy, or post-festival access notice has been published in the sources
        checked for this article. Treat all three as unknown rather than assuming the demo lasts a certain number
        of hours, carries progress into Early Access, or closes as soon as the festival ends.
      </p>
      <p>
        When the demo goes live, note what you actually reach, what remains locked, and how long your own session
        lasts. That gives you a grounded picture of the slice available to play without turning one session into a
        claim about the full Early Access campaign.
      </p>

      <h2>Is the Emberville demo worth playing before Early Access?</h2>
      <p>
        If you are curious about Emberville, a free Next Fest demo is a low-commitment way to try whatever the
        developers make available. Steam’s festival page describes the event as a place to play free demos; that
        general event information is not an announcement of Emberville’s Early Access price or every demo term.
      </p>
      <p>
        Use the session to answer the questions that matter to you, if the demo exposes those systems: does combat
        feel responsive, do exploration and loot hold your attention, and do the controls and performance work on
        your PC? If crafting or town-building is available, try those too. If your decision depends on a specific
        class, location, or save transfer, wait until that detail is confirmed rather than assuming it is included.
      </p>
      <p>
        The demo can help you judge the slice you play. It cannot establish the full game’s breadth, future
        development, or value at a price that has not been announced. Before buying, compare the playable content
        with your own priorities and check the Steam store page for current Early Access details.
      </p>
      <DataBlock source="Steam Next Fest public event page" url="https://store.steampowered.com/sale/nextfest" verified="2026-10-10">
        <p>Steam describes Next Fest as an event where players can try free demos of upcoming games.</p>
      </DataBlock>

      <h2>Emberville demo FAQ</h2>
      <FaqList faqs={FAQS} />

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville systems guide</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki and gameplay overview</Link></li>
        <li><Link href="/about/methodology" title={routeTitle("/about/methodology")}>Emberville sources and verification methodology</Link></li>
      </ul>
    </AdArticle>
  );
}
