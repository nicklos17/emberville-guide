import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";

const SEO_TITLE = "Emberville Items: Full Database & Stats";
const route = getRoute("/item-database");

const FAQS: Faq[] = [
  {
    "q": "When will the Emberville item database be filled?",
    "a": "During launch week and the weeks after, as items can be verified in the live game. The page updates continuously once the game is out."
  },
  {
    "q": "Are datamined Emberville items included?",
    "a": "No. Datamined names and stats are treated as unconfirmed until they appear in the live game; nothing is published from leaks or placeholder files."
  },
  {
    "q": "What does each item entry include?",
    "a": "The official name, category, acquisition source and verified stats — each with its source and verification date."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ItemDatabasePage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Item Database", href: route.path }]} />
      <h1>Emberville Item Database</h1>
      <p className="answer">The Emberville item database fills after launch: every entry lists the official name, acquisition source and verified stats. Datamined placeholders are not published.</p>
      <h2>Emberville item database</h2>
      <p>This database is built on confirmed data only. Each entry names the item exactly as the game writes it — no shorthand or guessed naming — and lists its category, acquisition source and the patch its stats were verified on. Entries appear as items can be observed in the live game.</p>
      <h2>Emberville items list</h2>
      <p className="empty-state">The list starts empty by design — entries appear once item data can be verified in the live game.</p>
      <p>An entry is added when its data can be verified against a live observation or an official source; until then it stays out, and the empty state stays honest.</p>
      <h2>Submitting item corrections</h2>
      <p>After launch, email support@emberville-guide.wiki with the item name and the source to report a missing or wrong entry. Community findings are labeled Community-reported until an official source confirms them.</p>
      <p>More on Emberville Guide: <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">Emberville release date</Link>, <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">Emberville countdown</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">Emberville guides</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>.</p>

      <h2>Emberville item database FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
