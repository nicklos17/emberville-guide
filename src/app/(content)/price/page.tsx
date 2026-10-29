import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Price: $29.99, 10% Off, No Microtransactions";
const route = getRoute("/price");
const VERIFIED = "2026-10-28";

const FAQS: Faq[] = [
  {
    q: "How long does the Emberville launch discount last?",
    a: "The 10% launch discount is announced without an end date. Cygnus Cross describes it as a launch discount rather than a pre-order or wishlist bonus, and has not said when the base price of $29.99 resumes.",
  },
  {
    q: "Does the $29.99 price include future content?",
    a: "The studio states there are no microtransactions, battle passes or subscription fees, and that it intends to expand the game through regular updates beyond 1.0 without paid DLC. Co-op, modding and console versions are listed as 1.0 additions rather than paid extras.",
  },
  {
    q: "Is the price the same on GOG?",
    a: "The announcement quotes USD and notes that regional pricing may vary. GOG lists Emberville for the same Early Access release as Steam, but the studio has not published a separate GOG price, so check that listing when it goes live.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function PricePage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "Release", href: "/release-date" },
        { name: "Price", href: route.path },
      ]} />
      <h1>Emberville&rsquo;s price at launch: $29.99, or $26.99 with the discount</h1>
      <p className="answer">
        Emberville launches at <b>$29.99</b> with a <b>10% launch discount</b>, which puts the introductory price
        at <b>$26.99</b>. Cygnus Cross published those figures in its Early Access briefing on October 19, 2026,
        alongside a one-time purchase model with no microtransactions, no battle passes, no subscription and no paid
        DLC. Regional pricing may vary.
      </p>
      <p>
        The figure replaces an earlier ceiling. In his January 2026 announcement video, co-founder Ben
        &ldquo;CohhCarnage&rdquo; Cassell said the game would cost &ldquo;not more than $25&rdquo;; the October
        briefing states a higher base price and a launch discount instead. This page records both statements, the
        model that has not changed, and what the storefronts still have to show you.
      </p>

      <h2>Emberville price change: from the $25 cap to $29.99</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">When</th><th scope="col">Source</th><th scope="col">What it states</th></tr>
          </thead>
          <tbody>
            <tr><td>January 2026</td><td>CohhCarnage announcement video</td><td>&ldquo;This game is not going to be more than $25,&rdquo; with a discount at Early Access entry</td></tr>
            <tr><td>October 19, 2026</td><td>Cygnus Cross Early Access briefing (Steam)</td><td>$29.99 USD, 10% launch discount, $26.99 introductory price, regional pricing may vary</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The later statement is the operative one: it comes from the studio, is dated, and prices the Early Access
        release, which the studio now dates to January 7, 2027 — the date itself moved on October 26, the price did
        not. Cygnus Cross has not published an explanation for the difference between the two numbers, and this page
        does not invent one — a $25 ceiling quoted nine months before launch and a $29.99 launch price are simply two
        dated statements, and the newer one governs what you pay.
      </p>
      <p>
        One practical consequence: any page, video or forum post still quoting &ldquo;$25&rdquo; as the current price
        is repeating the January video. The discount narrows the gap — $26.99 against a $25 ceiling — but the base
        price is above the old cap.
      </p>
      <DataBlock source="Steam, “What to Expect from Emberville Early Access on October 27th” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170/view/760703279879423656" verified={VERIFIED}>
        <p>The briefing states: &ldquo;Emberville launches at $29.99 USD, with a 10% launch discount, bringing the introductory price to $26.99 USD. Regional pricing may vary.&rdquo;</p>
      </DataBlock>
      <DataBlock source="CohhCarnage, “CohhCarnage Announces EMBERVILLE And The New Game Update Playlist! (Update #1)” (YouTube, January 2026)" url="https://www.youtube.com/watch?v=uJr15tyoe80" verified="2026-10-13">
        <p>The January video sets a $25 ceiling (&ldquo;this game is not going to be more than $25&rdquo;), confirms an Early Access discount and zero microtransactions, and rules out crowdfunding and outside investment. It is the historical statement the October briefing supersedes on price.</p>
      </DataBlock>

      <h2>Emberville price and launch discount</h2>
      <div className="my-4 overflow-x-auto">
        <table>
          <thead>
            <tr><th scope="col">Item</th><th scope="col">Amount</th><th scope="col">Status</th></tr>
          </thead>
          <tbody>
            <tr><td>Base price</td><td>$29.99 USD</td><td>Stated in the October 19 briefing</td></tr>
            <tr><td>Launch discount</td><td>10%</td><td>Stated in the same briefing; end date not announced, and not restated when the date moved to January 7, 2027</td></tr>
            <tr><td>Introductory price</td><td>$26.99 USD</td><td>Base price with the launch discount applied</td></tr>
            <tr><td>Regional pricing</td><td>Varies by store and region</td><td>Explicitly flagged by the studio; no regional table published</td></tr>
            <tr><td>Store display</td><td>No amount shown yet</td><td>The Steam page still has no price block before release</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        The storefront, not this page, is the final word on what you pay. Steam shows a live regional price once the
        product is purchasable, and that number can differ from the USD figure above after currency conversion and
        local pricing. Until the listing goes live in January 2027, the announced amounts are the only sourced
        figures.
      </p>

      <h2>Pricing model: one-time purchase, no microtransactions</h2>
      <p>
        The model is unchanged from the January announcement and restated in October: one purchase, no
        microtransactions, no battle passes, no subscription fees. The October briefing adds that the studio intends
        to expand Emberville through regular updates beyond 1.0 &ldquo;without paid DLCs&rdquo;, which is a plan
        rather than a contract, but it is stated plainly.
      </p>
      <p>
        Price stability is the one term that did not carry over. The January video described a base price that stays
        stable while discounts occur during Early Access; the October briefing prices the launch without repeating
        that commitment. Treat a later increase as unstated rather than ruled out.
      </p>
      <DataBlock source="Steam, “What to Expect from Emberville Early Access on October 27th” (Cygnus Cross, October 19, 2026)" url="https://store.steampowered.com/news/app/2295170/view/760703279879423656" verified={VERIFIED}>
        <p>On monetisation: &ldquo;No microtransactions, battle passes, or subscription fees. EVER!&rdquo; The studio adds that it aims to expand the game through regular updates beyond 1.0 without paid DLC.</p>
      </DataBlock>

      <h2>Why the Steam page shows no amount yet</h2>
      <p>
        Steam does not publish a price block for an unreleased product, so the Emberville page still shows a release
        date and no figure. That is a display behaviour, not a gap in the announcement: the amounts above come from
        the studio&rsquo;s own briefing, which is the same channel that carries the demo and roadmap details.
      </p>
      <p>
        When the page goes live, compare the displayed price with the discount rather than reading the struck-through
        number alone, and check whether the launch discount is still active. For the timing side — date, unlock hour
        and platforms — use the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>.
      </p>
      <DataBlock source="Steam, Emberville store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified={VERIFIED}>
        <p>The listing carries no price block while the product is unreleased; the Early Access date it shows is now January 7, 2027, per the studio&rsquo;s October 26 announcement.</p>
      </DataBlock>

      <h2>Emberville price FAQ</h2>
      <FaqList faqs={FAQS} />

      <p>
        Pricing was checked on <b>{VERIFIED}</b> against the October 19 Early Access briefing, the January
        announcement video and the Steam store listing. On record: $29.99 base, 10% launch discount, $26.99
        introductory price, regional variation, and no microtransactions or paid DLC. The full context for the
        January figure is in the{" "}
        <Link href="/news/emberville-announcement-video" title={routeTitle("/news/emberville-announcement-video")}>announcement video breakdown</Link>.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news and dated announcements</Link></li>
        <li><Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms and console status</Link></li>
        <li><Link href="/news/emberville-demo-launch" title={routeTitle("/news/emberville-demo-launch")}>Emberville Next Fest demo launch record</Link></li>
      </ul>
    </AdArticle>
  );
}
