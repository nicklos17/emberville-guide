import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList, type Faq } from "@/components/FaqList";

const SEO_TITLE = "Emberville News & Updates: Patch Notes & Roadmap";
const route = getRoute("/news");

// 倒序时间线（CONTENT.md 时效页规范）。无日期戳的传闻不入列，只转述官方渠道。
const TIMELINE = [
  {
    date: "2026-10-09",
    title: "Early Access date and time recorded",
    body: "The Steam store page lists Emberville entering Early Access on 27 October 2026 at 15:00 UTC. The date, platform and full-release status are recorded on the release date page with that source.",
  },
  {
    date: "2026-10-09",
    title: "Wiki index structure published",
    body: "The wiki hub now groups entries into weapons, items, characters and bosses, so a specific entry has one obvious place to live. Groups stay closed until their entries can be verified.",
  },
  {
    date: "2026-10-08",
    title: "Site structure and sourcing policy set",
    body: "Every page on this site carries its source and verification date, and anything traced to community testing is labelled as such rather than presented as fact.",
  },
] as const;

const FAQS: Faq[] = [
  {
    "q": "Where do Emberville patch notes come from?",
    "a": "From the Steam store page's official announcement feed. Patch notes are summarised here with their date, and the original post stays linked so the wording can be checked."
  },
  {
    "q": "Will you post leaks or datamined data?",
    "a": "No. Datamined names and values are treated as unconfirmed until they appear in the live game, and nothing on this site is published from leaks or placeholder files."
  },
  {
    "q": "How often is this page updated?",
    "a": "Around official announcements and Early Access patches. Each entry carries its own date, and the Updated stamp at the top matches the most recent change."
  },
  {
    "q": "Is there an Emberville roadmap?",
    "a": "A public roadmap has not been published by the developer. Any feature list here would be speculation, so this page records dated announcements only."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function NewsPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "News", href: route.path }]} />
      <h1>Emberville News</h1>
      <p className="answer">
        Emberville news, in reverse chronological order: official announcements and Early Access patch
        notes, each with its date and the original source. Rumours and datamined data are not listed.
      </p>

      <h2>Emberville news timeline</h2>
      <p>
        Everything below is dated and sourced. Where an announcement changes something already on this
        site, the affected page is corrected the same day rather than left to drift — the Early Access
        date recorded on the{" "}
        <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">Emberville Early Access date page</Link>{" "}
        is the current example.
      </p>
      <div className="my-4">
        {TIMELINE.map((entry) => (
          <div key={`${entry.date}-${entry.title}`} className="my-4 border-l-2 border-line pl-4">
            <p className="text-xs font-medium tracking-wide text-accent">{entry.date}</p>
            <h3 className="mt-1 mb-1">{entry.title}</h3>
            <p className="m-0">{entry.body}</p>
          </div>
        ))}
      </div>

      <h2>Emberville patch notes</h2>
      <p>
        Patch notes are summarised per patch once the game is live, each entry stating what changed and
        which pages on this site were updated as a result. Notes are taken from the official Steam
        announcement rather than paraphrased from third-party summaries, so the wording can be checked
        against the source.
      </p>

      <h2>Emberville roadmap coverage</h2>
      <p>
        No public roadmap has been published by the developer, so none is reproduced here. When one
        appears it is recorded with its source and date, and the effect on planned coverage — the
        {" "}<Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">Emberville guides</Link>{" "}
        and{" "}<Link href="/builds" title="Emberville Builds: Tested by Patch &amp; Mode | Emberville Guide">Emberville builds</Link>{" "}
        — is stated next to it rather than implied.
      </p>

      <h2>Emberville news FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}