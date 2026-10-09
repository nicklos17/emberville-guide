import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SEO_TITLE = "Terms of Service \u2014 Use, IP & Liability";
const route = getRoute("/terms");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function TermsPage() {
  return (
    <article className="article">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Terms", href: route.path }]} />
      <h1>Emberville Guide Terms of Service</h1>
      <p className="answer">By using Emberville Guide you accept these terms: an unofficial fan project, best-effort accuracy, and content licensed for personal, non-commercial use.</p>
      <h2>Unofficial fan project</h2>
      <p>Emberville Guide is an independent fan site. Emberville is a trademark of Cygnus Cross. We are not affiliated with, endorsed by or sponsored by the rights holders.</p>
      <h2>Using the site</h2>
      <p>Content is provided for personal, non-commercial use. Automated scraping, wholesale republishing, or presenting the site's material as your own is not permitted.</p>
      <h2>Accuracy and availability</h2>
      <p>Information is provided as-is. Game data changes with patches and publisher decisions; pages carry their last-verified date, but no warranty is given that content is complete or current.</p>
      <h2>Submissions</h2>
      <p>By emailing a correction, code or build, you grant Emberville Guide permission to publish it with attribution to the source you provide.</p>
      <h2>Liability</h2>
      <p>To the extent permitted by law, Emberville Guide is not liable for decisions made or losses incurred on the basis of the site's content.</p>
      <h2>Changes to these terms</h2>
      <p>Terms are updated on this page; continued use after a change means acceptance.</p>
    </article>
  );
}
