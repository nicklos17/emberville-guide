import type { Metadata } from "next";
import Link from "next/link";
import { AdArticle } from "@/components/ads/AdArticle";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DataBlock } from "@/components/DataBlock";
import { FaqList, type Faq } from "@/components/FaqList";
import { getRoute, routeTitle } from "@/lib/routes";
import { articleSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const SEO_TITLE = "Emberville Delay: Early Access Now Launches January 7, 2027";
const route = getRoute("/news/emberville-delay");
const PUBLISHED = "2026-10-28";
const MODIFIED = "2026-10-28";

const FAQS: Faq[] = [
  {
    q: "Is Emberville cancelled, or only delayed?",
    a: "Delayed. Cygnus Cross gives January 7, 2027 as the new Early Access date and describes the game as coming to Early Access rather than being shelved. No source connected to the studio has used the word cancellation.",
  },
  {
    q: "Will demo progress still carry over to the January build?",
    a: "The studio's October 19 briefing promised that Steam Next Fest demo saves carry into Early Access, and the October 26 letter does not revisit that promise. It also does not restate it for the new build, so the carry-over is the last published position rather than a freshly confirmed one.",
  },
  {
    q: "Can I pre-order Emberville before January 7, 2027?",
    a: "There is no pre-purchase option. The Steam listing carries no price block while the product is unreleased, and wishlisting is the only action the store page offers ahead of launch.",
  },
  {
    q: "Does the delay push back the 1.0 release?",
    a: "No 1.0 date has ever been published, so there is nothing to move. The studio's estimate of roughly eighteen months to reach its complete experience was given before the delay, and it has not been recalculated since.",
  },
  {
    q: "Where was the Emberville delay announced?",
    a: "In a Steam news post signed by the Emberville team, published on October 26, 2026, and in a video update from co-founder Ben “CohhCarnage” Cassell. The letter was republished in full by several outlets, which is how the exact wording above can be checked independently.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function EmbervilleDelayPage() {
  const schema = articleSchema({
    headline: "Emberville's Early Access launch is delayed to January 7, 2027",
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
        { name: "Release delay", href: route.path },
      ]} />
      <h1>Emberville&rsquo;s Early Access launch is delayed to January 7, 2027</h1>
      <p className="answer">
        Cygnus Cross moved Emberville&rsquo;s Early Access release from October 27, 2026 to January 7, 2027,
        announcing the change on October 26 — one day before the game was due to go on sale. The studio attributes
        the move to systems work that the Steam Next Fest demo feedback exposed, naming a rework of bow combat as
        its example.
        The demo stays available, and no other published term — price, platforms or the single-player launch mode —
        has been withdrawn.
      </p>
      <p>
        The delay arrived in two forms: a Steam news post signed by the Emberville team, and a video update from
        co-founder Ben &ldquo;CohhCarnage&rdquo; Cassell. The letter is the operative document, since it is the one
        the store page carries; the video adds the studio&rsquo;s own account of what the extra ten weeks are for.
        This page records the new date, the stated reason, and the difference between what the studio has committed
        to and what the press has read into it.
      </p>
      <p className="text-sm text-ink-muted">
        Published <time dateTime={PUBLISHED}>October 28, 2026</time> · Sources checked October 28, 2026
      </p>

      <h2>Emberville&rsquo;s new Early Access date: January 7, 2027</h2>
      <p>
        January 7, 2027 replaces October 27, 2026 — a gap of 72 days, or a little over ten weeks. The announcement
        landed on October 26, roughly 24 hours before the original date, which makes it the latest change to a
        schedule the studio had reaffirmed as recently as October 19 in its Early Access briefing.
      </p>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Detail</th><th scope="col">Before October 26</th><th scope="col">Now</th></tr>
          </thead>
          <tbody>
            <tr><td>Early Access date</td><td>October 27, 2026</td><td>January 7, 2027</td></tr>
            <tr><td>Notice given</td><td>—</td><td>One day before the planned launch</td></tr>
            <tr><td>Time to the date</td><td>1 day</td><td>72 days</td></tr>
            <tr><td>Unlock hour</td><td>Not announced</td><td>Not announced</td></tr>
            <tr><td>Demo availability</td><td>Next Fest window, October 19–26</td><td>Still downloadable</td></tr>
            <tr><td>Base price</td><td>$29.99</td><td>$29.99, discount terms not restated</td></tr>
            <tr><td>1.0 release date</td><td>Unannounced</td><td>Unannounced</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The new date is a calendar day, not a moment: the letter gives no unlock hour, exactly as the store listing
        never did for October 27. Anyone converting January 7 into a local clock time is producing a projection, not
        a published figure — the same limit that applies to every date this game has carried. The{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville release date and Early Access details</Link>{" "}
        keep the timezone question in one place.
      </p>
      <DataBlock source="Steam, Emberville news hub (Cygnus Cross)" url="https://store.steampowered.com/news/app/2295170" verified="2026-10-28">
        <p>The delay is carried as a Steam news post on the Emberville app (2295170), dated October 26, 2026 and signed &ldquo;The Emberville Team&rdquo;. The store listing itself gives no unlock hour for the new date.</p>
      </DataBlock>

      <h2>Why Emberville was delayed a day before launch</h2>
      <p>
        The letter is unusually specific about the cause, which is why it is worth quoting rather than paraphrasing.
        The team says demo feedback prompted &ldquo;more improvements&rdquo; than it could plan for, and that
        &ldquo;some of the improvements we want to make are systems changes that can&rsquo;t be done quickly&rdquo;.
        Bow combat is the example it chooses: reworking it &ldquo;would take more time than we had prior to our
        Early Access release, even though the team is working around the clock&rdquo;.
      </p>
      <p>
        The letter frames the decision as a choice between shipping on time and shipping at a standard the team can
        stand behind: &ldquo;While we could have simply released the game now, we feel that it wouldn&rsquo;t be up to
        our standards and to your high expectations of us.&rdquo; Cassell&rsquo;s video version of the same argument
        is blunter — he says the team could have put the game out and it &ldquo;would have probably been okay&rdquo;,
        and that the studio did not want a probably-okay first impression.
      </p>
      <DataBlock source="Bleeding Cool, “Emberville Early Access Launch Officially Pushed to January 2027” (republishes the full letter)" url="https://bleedingcool.com/games/emberville-early-access-launch-officially-pushed-to-january-2027/" verified="2026-10-28">
        <p>The outlet reproduces the complete Steam letter, including the sentence naming bow combat, the apology to players who were ready to buy, and the January 7, 2027 date — a checkable copy of the primary text.</p>
      </DataBlock>

      <h3>What the extra ten weeks are for</h3>
      <p>
        Two different kinds of work are being described, and the studio does not itemise either. The first is quick
        feedback from the demo that can be folded in cheaply: in the video Cassell mentions controller feel, and
        explicitly says the team is <em>not</em> attempting the deeper combat-mechanic changes. The second is the
        slow, structural work — the bow-combat rework being the named case — that made the original date
        unreachable.
      </p>
      <p>
        What the letter commits to is that the launch build will include &ldquo;some essential improvements&rdquo;.
        It does not say the bow rework ships on January 7, and it does not list which changes make the cut. Treat
        any specific feature list attached to the January build as unconfirmed until the studio publishes one.
      </p>

      <h3>Did GTA 6 cause the delay?</h3>
      <p>
        The studio&rsquo;s letter does not mention any other release. The GTA 6 connection appears in press coverage
        and player discussion, not in the announcement: GamingBible and GameSpot both note the wider pattern of
        studios moving away from the November window, and GameSpot attributes the speculation to players rather than
        to Cygnus Cross. That makes it a reading of the calendar, not a stated reason.
      </p>

      <h2>What the delay changes in the launch build</h2>
      <p>
        The October 19 briefing set out a day-one scope — the first biome, 180 minutes of voice-acted content,
        playtime estimates of 7–10 hours for a rushed run and 20–30+ for a thorough one, nine supported languages,
        and a first update within a month of launch that would have added Biome 1&rsquo;s final boss, further
        controller work, more languages and a public roadmap. That plan was written against an October 27 launch and
        has not been republished since.
      </p>
      <p>
        One outlet has read the delay as pulling that first-update content forward into the launch build. The letter
        supports a weaker claim than that: it promises essential improvements, not the contents of a named update.
        Until Cygnus Cross restates the post-launch plan, the month-after-launch framing should be treated as
        suspended rather than cancelled.
      </p>
      <DataBlock source="The Outer Haven, “Emberville Early Access Delayed to January 2027”" url="https://www.theouterhaven.net/emberville-early-access-delayed-to-january-2027/" verified="2026-10-28">
        <p>The report summarises the letter and interprets it as moving additions planned for the first post-launch update into the launch build. That interpretation is the outlet&rsquo;s, not a sentence in the studio&rsquo;s post.</p>
      </DataBlock>

      <h2>Is the Emberville demo still available?</h2>
      <p>
        Yes. The Next Fest festival window closed at 10:00 PDT on October 26, but the demo app itself has not been
        withdrawn, and Cassell says in the video that the studio intends to keep it up and may keep patching it on
        the way to January. That gives the delay an unusual side effect: the build that prompted the postponement
        stays playable for the ten weeks in which it is being fixed.
      </p>
      <p>
        The demo is the game&rsquo;s prologue, averages about 90 minutes, and shipped with a same-day patch,
        Alpha Demo 0.20.17.x. What it contains, and what that patch changed, is recorded in the{" "}
        <Link href="/news/emberville-demo-launch" title={routeTitle("/news/emberville-demo-launch")}>Emberville Next Fest demo launch record</Link>;
        whether the demo is worth your evening is the separate question on the{" "}
        <Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>Emberville demo dates and content page</Link>.
      </p>
      <DataBlock source="GameSpot, “One Day Out From Early Access, Emberville Has Been Delayed To 2027”" url="https://www.gamespot.com/articles/one-day-out-from-early-access-emberville-has-been-delayed-to-2027/" verified="2026-10-28">
        <p>The report corroborates two points from the studio&rsquo;s own material: the demo was among the most played of the October Steam Next Fest, and the demo remains playable after the delay.</p>
      </DataBlock>

      <h2>Emberville price, platforms and 1.0 after the delay</h2>
      <p>
        Nothing published before October 26 has been withdrawn. Early Access is still a one-time purchase at $29.99,
        with a 10% launch discount taking it to $26.99 and regional pricing flagged as variable. What has not been
        restated is the discount&rsquo;s timing: the &ldquo;first week&rdquo; framing was written for October 27, and
        the studio has not said whether the same window applies in January.
      </p>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Term</th><th scope="col">Status after October 26</th></tr>
          </thead>
          <tbody>
            <tr><td>Price</td><td>$29.99 with a 10% launch discount to $26.99; unchanged, regional pricing varies</td></tr>
            <tr><td>Discount window</td><td>Not restated for January 7</td></tr>
            <tr><td>Platforms</td><td>PC via Steam and GOG; console versions remain a 1.0 plan with no platform named</td></tr>
            <tr><td>Launch mode</td><td>Single-player; co-op multiplayer remains a 1.0 plan</td></tr>
            <tr><td>Languages</td><td>Nine at launch, as listed in the October 19 briefing</td></tr>
            <tr><td>1.0 date</td><td>Unannounced, as before</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The price and discount terms are documented in full on the{" "}
        <Link href="/price" title={routeTitle("/price")}>Emberville price and purchase model page</Link>, and the
        platform split — PC now, consoles inside the 1.0 plan — on the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms and console status page</Link>.
      </p>

      <h2>Emberville delay FAQ</h2>
      <FaqList faqs={FAQS} />

      <p>
        Everything above was checked on <b>2026-10-28</b> against the Steam news post of October 26, a full
        republication of that letter, Cassell&rsquo;s video statement, and dated coverage from GameSpot and The Outer
        Haven. Where those sources disagree, the letter wins: it is the document the store page carries, and the
        press readings are labelled as readings.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/news/emberville-announcement-video" title={routeTitle("/news/emberville-announcement-video")}>Emberville announcement video: what CohhCarnage revealed</Link></li>
        <li><Link href="/studio" title={routeTitle("/studio")}>Cygnus Cross studio profile and CohhCarnage&rsquo;s role</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville systems guide for the January build</Link></li>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news index</Link></li>
      </ul>
    </AdArticle>
  );
}
