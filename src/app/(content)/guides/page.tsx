import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";

const SEO_TITLE = "Emberville Guides: Basics, Systems & Tips";
const route = getRoute("/guides");

const FAQS: Faq[] = [
  {
    "q": "When do the first Emberville guides arrive?",
    "a": "During launch week, starting with the basics most players need on day one. New guides are added as systems can be verified firsthand."
  },
  {
    "q": "Can I suggest a guide topic?",
    "a": "Yes — email support@emberville-guide.wiki with the topic and what you would want covered. Requests that match real search demand get built first."
  },
  {
    "q": "Are datamined numbers used in guides?",
    "a": "No. Guides use firsthand results and official sources; unconfirmed data is never presented as fact."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function GuidesPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Guides", href: route.path }]} />
      <h1>Emberville Guide Hub</h1>
      <p className="answer">Emberville guides land in this hub once the game can be played — each guide states the patch it was verified on. Pre-launch, the hub holds the plan, not guesses.</p>
      <h2>Emberville guides</h2>
      <p>Guides are written when claims can be tested instead of guessed, so this hub fills during launch week. Each guide lists the patch or build it was verified on, so advice does not silently go stale.</p>
      <h2>What Emberville guides are planned</h2>
      <p>First, launch-week basics: starting progression, early mistakes to avoid, and how the core systems fit together. Then system-by-system explainers as they stabilize, and endgame preparation once the meta can be tested firsthand. Titles are added here as each guide is published.</p>
      <h2>How guides are sourced</h2>
      <p>Firsthand testing and official sources only. Datamined numbers are not treated as confirmed; community tips are labeled Community-reported until an official source backs them.</p>
      <p>More on Emberville Guide: <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">Emberville release date</Link>, <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">Emberville countdown</Link>, <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>, <Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>.</p>

      <h2>Emberville guides FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
