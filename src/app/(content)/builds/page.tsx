import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { UpdatedStamp } from "@/components/UpdatedStamp";
import { FaqList, type Faq } from "@/components/FaqList";

const SEO_TITLE = "Emberville Builds: Tested by Patch & Mode";
const route = getRoute("/builds");

const FAQS: Faq[] = [
  {
    "q": "Is there a Emberville tier list?",
    "a": "Not yet. Tier rankings require hands-on testing, which is impossible before launch. Once live, rankings are split by role and mode, with a reason for every rating."
  },
  {
    "q": "What counts as a tested Emberville build?",
    "a": "A build is tested when it has been played on the live game on its stated patch, with results recorded — not simulated and not imported from another region's meta."
  },
  {
    "q": "Can I submit a build?",
    "a": "Yes — see the submission section above, or email support@emberville-guide.wiki directly with the build and its test conditions."
  }
];

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function BuildsPage() {
  return (
    <article className="article mx-auto w-full max-w-3xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Builds", href: route.path }]} />
      <UpdatedStamp lastModified={route.lastModified} />
      <h1>Emberville Build Hub — Tested Setups</h1>
      <p className="answer">Emberville builds appear here only after hands-on testing, each listing its patch, mode and test conditions. No ratings before launch — an empty hub beats an invented one.</p>
      <h2>Emberville builds</h2>
      <p className="empty-state">This hub is empty before launch on purpose — builds appear once they can be tested on the live game.</p>
      <p>Rankings without playtime are the content this site refuses to publish. Entries appear as soon as the game is out and setups can be verified firsthand.</p>
      <h2>How Emberville builds are tested</h2>
      <p>Every build lists the patch it was tested on, the mode, the content it was played in and what it is good at. What was verified firsthand and what is Community-reported are stated separately. Builds are re-tested after major patches and re-dated when conclusions change.</p>
      <h2>Submitting a Emberville build</h2>
      <p>Email support@emberville-guide.wiki with the build, the patch and mode it was played on, and your results. Community builds are labeled Community-reported and re-tested before they join the main list.</p>
      <p>More on Emberville Guide: <Link href="/release-date" title="Emberville Early Access Date 2026 | Emberville Guide">Emberville release date</Link>, <Link href="/countdown" title="Emberville Early Access Countdown 2026 | Emberville Guide">Emberville countdown</Link>, <Link href="/item-database" title="Emberville Items: Full Database &amp; Stats | Emberville Guide">Emberville item database</Link>, <Link href="/guides" title="Emberville Guides: Basics, Systems &amp; Tips | Emberville Guide">Emberville guides</Link>.</p>

      <h2>Emberville builds FAQ</h2>
      <FaqList faqs={FAQS} />
    </article>
  );
}
