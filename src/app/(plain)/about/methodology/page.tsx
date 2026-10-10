import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute, routeTitle } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SEO_TITLE = "Sources & Methodology";
const route = getRoute("/about/methodology");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function MethodologyPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Sources & Methodology", href: route.path },
      ]} />
      <h1>Sources and Methodology</h1>
      <p className="answer">
        Emberville Guide separates published facts from hands-on findings and community reports. Topic pages focus
        on what players need to know; this page explains where claims come from, how they are checked, and how
        missing details are handled.
      </p>

      <h2>Primary and corroborating sources</h2>
      <p>
        The <a href="https://www.cygnuscross.com/" rel="noopener noreferrer">Cygnus Cross official website</a>, the <a href="https://store.steampowered.com/app/2295170/Emberville/" rel="noopener noreferrer">Emberville Steam store page</a>, Steam News, and the <a href="https://www.gog.com/en/game/emberville" rel="noopener noreferrer">GOG product page</a> are first-party or storefront sources. Each supports only statements present on that specific page: for example, use GOG for the GOG listing and its product details, not as proof of a separate studio announcement.
      </p>
      <p>
        Developer-authored releases published through GamesPress are identified as developer press releases, not independent GamesPress reporting. IGN announcements and its hands-on previews are cited as media sources; a reporter’s observations are kept separate from developer-promised features. A press release republished elsewhere remains one originating source, not several independent confirmations.
      </p>
      <p>
        SteamDB and Steam Charts are used only for player-count snapshots, with the date and measurement scope stated. Reddit and Discord posts are community sources unless the specific account is verified as an official developer account; unverified discussion is labelled community-reported and never treated as official confirmation. Unverifiable posts are not cited. Marketing/SEO content pages and unsupported guide aggregators are not factual sources.
      </p>

      <h2>How claims are presented</h2>
      <p>
        Factual statements link to their source and include a verification date. Official descriptions, direct observations in a playable build, and community reports are kept distinct. A planned feature is not described as already delivered, and a test-based conclusion identifies the game version and conditions when that information is available.
      </p>
      <p>
        If a source does not provide a name, number, route, recipe, or mechanic, the relevant page says so briefly where it matters. Missing information is not filled with genre conventions or guesses, but uncertainty is kept in proportion: a topic page should still explain the confirmed systems and their value to players.
      </p>

      <h2>Testing and updates</h2>
      <p>
        Rankings and build recommendations require hands-on testing; they are not inferred from promotional descriptions. After Early Access begins, in-game details will be added when they can be checked, with the build or patch context recorded where relevant. Official changes are rechecked against developer sources before being described as updates.
      </p>
      <p>
        For the subjects covered by the site, visit the <Link href="/wiki" title={routeTitle("/wiki")}>Emberville wiki</Link>, <Link href="/map" title={routeTitle("/map")}>map and areas guide</Link>, <Link href="/builds" title={routeTitle("/builds")}>builds guide</Link>, <Link href="/item-database" title={routeTitle("/item-database")}>item database</Link>, and <Link href="/characters" title={routeTitle("/characters")}>characters guide</Link>.
      </p>
    </article>
  );
}
