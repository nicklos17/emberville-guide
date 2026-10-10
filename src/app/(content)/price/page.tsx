import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville Price 2026: Purchase Model & What's Announced";
const route = getRoute("/price");

const FAQS: Faq[] = [
  {
    q: "How much will Emberville cost?",
    a: "No specific price has been announced. The Steam store page and the official GOG product page do not list a price as of 2026-10-10.",
  },
  {
    q: "Will Emberville have microtransactions?",
    a: "The developer describes a one-time purchase with no microtransactions, and says the price will remain stable while discounts may be offered during Early Access.",
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
      <h1>Emberville Price: What’s Confirmed So Far</h1>
      <p className="answer">
        Emberville’s price has not been announced. The Steam store page and the official GOG product page list the
        Early Access date but no price as of 2026-10-10. What is confirmed is the pricing model: the developer
        describes a one-time purchase with no microtransactions, a price that stays stable, and possible discounts
        during Early Access.
      </p>
      <p>
        Because the number is missing, any figure you see somewhere else is not an official price. This page records
        only what the developer and the store pages state, leaves the amount open, and points to where a price will
        appear first when it is set.
      </p>

      <h2>Pricing model: one-time purchase, no microtransactions</h2>
      <p>
        The model is the part that is actually documented. The developer describes Emberville as a one-time purchase
        with no microtransactions, and says the price will remain stable after launch, with possible discounts during
        Early Access. Those are statements about how you buy and how the price behaves, not about the amount. A
        stable price means the developer does not plan to raise or cut the base price; a discount is a temporary
        reduction, which is a different thing from a permanent price change.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <div className="overflow-x-auto my-4">
          <table>
            <thead><tr><th scope="col">Pricing item</th><th scope="col">Confirmed status</th><th scope="col">What that means</th></tr></thead>
            <tbody>
              <tr><td>Specific price</td><td>Not announced</td><td>No amount is listed on the Steam or GOG product pages</td></tr>
              <tr><td>Purchase model</td><td>One-time purchase</td><td>Pay once for the game rather than a subscription</td></tr>
              <tr><td>Microtransactions</td><td>None, per the developer</td><td>No in-game purchases are described</td></tr>
              <tr><td>Price stability</td><td>Developer says the price stays stable</td><td>The base price is not planned to shift after purchase</td></tr>
              <tr><td>Discounts</td><td>Possible during Early Access</td><td>A temporary reduction, separate from a permanent price change</td></tr>
            </tbody>
          </table>
        </div>
      </DataBlock>

      <h2>Why no price has been announced</h2>
      <p>
        The cited sources simply do not publish an amount, and nothing in them lets us derive one. An Early Access
        store page can carry a date and a feature list without carrying a price, and that is the case here. The
        absence of a number is not a hidden clue: it does not imply a range, a tier, or a match with another game’s
        pricing. Any dollar figure presented elsewhere, including one labelled an estimate, is somebody’s guess
        rather than the developer’s price, and this page does not repeat it.
      </p>
      <p>
        The safest reading is to treat the price as genuinely unknown until it is listed. Whoever sets the price will
        publish it through the store listings, and the amount can change right up to launch.
      </p>

      <h2>Where the price will be published first</h2>
      <p>
        A price appears on the storefronts where the game is sold. For Emberville, that means the Steam store page
        and the official GOG product page, the two listings that carry the Early Access date and platform detail.
        Checking those pages is more reliable than relying on a number quoted second-hand, because a storefront
        displays the live price for your region rather than a global estimate.
      </p>
      <p>
        The release date and pricing policy sit together on the{" "}
        <Link href="/release-date" title={routeTitle("/release-date")}>Emberville Early Access date and launch details</Link>.
        When the amount is set, it will also be reflected in the platform status on the{" "}
        <Link href="/platforms" title={routeTitle("/platforms")}>Emberville platforms page</Link>.
      </p>

      <h2>Related Emberville coverage</h2>
      <ul>
        <li><Link href="/news" title={routeTitle("/news")}>Emberville news and dated announcements</Link></li>
        <li><Link href="/news/emberville-demo" title={routeTitle("/news/emberville-demo")}>Emberville demo dates, content and what to expect</Link></li>
        <li><Link href="/guides" title={routeTitle("/guides")}>Emberville pre-launch systems guide</Link></li>
      </ul>

      <h2>Emberville price FAQ</h2>
      <FaqList faqs={FAQS} />
      <p>
        Pricing status was verified on <b>2026-10-10</b> against the Steam store page and the official GOG product
        page. Announced: one-time purchase, no microtransactions, a stable price and possible Early Access discounts.
        Not announced: the specific amount.
      </p>
    </AdArticle>
  );
}