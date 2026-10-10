import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";
import { DataBlock } from "@/components/DataBlock";
import { AdArticle } from "@/components/ads/AdArticle";

const SEO_TITLE = "Emberville vs Stardew Valley and Diablo Compared";
const route = getRoute("/stardew-valley-diablo");

const FAQS: Faq[] = [
  {
    q: "Is Emberville officially described as Diablo meets Stardew Valley?",
    a: "No. “Diablo Lite meets Stardew Valley” is wording used in IGN’s announcement coverage, not an official genre label from the developer.",
  },
  {
    q: "How does Emberville combat differ from the Diablo comparison?",
    a: "IGN’s September hands-on preview contrasts Emberville’s two-button combo system with Diablo’s single main attack backed by spells and abilities.",
  },
  {
    q: "Is Emberville multiplayer like Diablo?",
    a: "The Steam listing describes Emberville as single-player. It does not confirm co-op or another multiplayer mode.",
  },
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ComparisonPage() {
  return (
    <AdArticle className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Stardew Valley & Diablo", href: route.path }]} />
      <h1>How Emberville Compares to Stardew Valley and Diablo</h1>
      <p className="answer">
        “Diablo Lite meets Stardew Valley” is press shorthand for Emberville’s mix of action-RPG combat, gathering,
        and town rebuilding—not an official genre label. IGN’s hands-on preview gives a more precise comparison:
        it contrasts Emberville’s two-button combos with Diablo’s main-attack pattern and likens its resource
        gathering to farming-life sims, while noting that the game is single-player.
      </p>

      <h2>Why Emberville is compared with Stardew Valley and Diablo</h2>
      <p>
        IGN’s January 27 announcement report introduced Emberville as “Diablo Lite meets Stardew Valley.” GameSpot’s
        January 28 report used a similar frame, describing Diablo-style action alongside Stardew Valley vibes. The
        comparison captures two broad ingredients—combat-focused exploration and a slower gathering-and-rebuilding
        layer—but it is editorial shorthand, not a developer-defined category or a claim that the games share the
        same systems.
      </p>
      <DataBlock source="IGN announcement report" url="https://nordic.ign.com/news/103247/emberville-announced-for-pc-aims-to-be-like-diablo-lite-meets-stardew-valley" verified="2026-10-10">
        <p>IGN’s January 27 announcement report used the “Diablo Lite meets Stardew Valley” description.</p>
      </DataBlock>
      <DataBlock source="GameSpot" url="https://www.gamespot.com/articles/emberville-announced-for-pc-blends-diablo-style-action-with-stardew-valley-vibes/1100-6537712/" verified="2026-10-10">
        <p>GameSpot’s January 28 report described Emberville as blending Diablo-style action with Stardew Valley vibes.</p>
      </DataBlock>

      <h2>Emberville combat compared with Diablo</h2>
      <p>
        IGN’s September 11 hands-on preview draws a mechanical distinction: it describes Diablo as leaning on a
        single main attack supported by spells and abilities, while Emberville uses a main and alternate attack
        that can combine into a stronger finishing hit. That comparison is specific to the preview’s description;
        it should not be treated as a complete analysis of every Diablo entry or every Emberville weapon.
      </p>
      <DataBlock source="IGN hands-on preview" url="https://nordic.ign.com/emberville/112727/emberville-is-a-charming-blend-of-stardew-valley-and-diablo-ign-preview" verified="2026-10-10">
        <p>The preview describes Emberville’s two-button combo system and contrasts it with Diablo’s single main attack backed by abilities.</p>
      </DataBlock>

      <h2>Emberville gathering compared with Stardew Valley</h2>
      <p>
        The Stardew Valley side of the shorthand points toward gathering and life-simulation activities, not a
        confirmed copy of its farming systems. In the same hands-on preview, IGN reports mining ore veins, cutting
        trees and gathering plants in the Vitromotus. The game’s broader premise adds another element: rescued
        survivors return to Emberville, where the town can be rebuilt and shops reopened. That restoration loop is
        part of the comparison’s context, even though it is not captured by the two-game slogan.
      </p>

      <h2>Emberville is a single-player experience</h2>
      <p>
        One important difference is scope. Steam lists Emberville as single-player, so the Diablo comparison does
        not imply online co-op or multiplayer. The store listing is the source for the mode; the shorthand from
        press coverage is not evidence of shared progression or party play.
      </p>
      <DataBlock source="Steam store page" url="https://store.steampowered.com/app/2295170/Emberville/" verified="2026-10-10">
        <p>Steam lists Emberville as a single-player game.</p>
      </DataBlock>

      <p>
        If you came here looking for what to play next rather than a direct comparison, the{" "}
        <Link href="/games-like-emberville" title={routeTitle("/games-like-emberville")}>games like Emberville list</Link>{" "}
        matches the same mechanics to similar games.
      </p>

      <h2>Related Emberville guides</h2>
      <ul>
        <li><Link href="/builds" title={routeTitle("/builds")}>Emberville combat, classes and builds</Link></li>
        <li><Link href="/item-database" title={routeTitle("/item-database")}>Emberville crafting and item categories</Link></li>
        <li><Link href="/studio" title={routeTitle("/studio")}>The Cygnus Cross studio behind Emberville</Link></li>
        <li><Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki and gameplay systems</Link></li>
      </ul>

      <h2>Emberville comparison FAQ</h2>
      <FaqList faqs={FAQS} />
    </AdArticle>
  );
}
