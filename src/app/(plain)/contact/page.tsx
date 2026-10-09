import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SEO_TITLE = "Contact: Support & Corrections";
const route = getRoute("/contact");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function ContactPage() {
  return (
    <article className="article">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Contact", href: route.path }]} />
      <h1>Contact Emberville Guide</h1>
      <p className="answer">The fastest way to reach Emberville Guide is email: <a href="mailto:support@emberville-guide.wiki">support@emberville-guide.wiki</a>.</p>
      <h2>Corrections and content issues</h2>
      <p>Found an outdated date, a broken code or a wrong number? Email support@emberville-guide.wiki with the page URL and, if possible, the official source. Verified corrections go live with an Updated stamp the same day they are confirmed.</p>
      <h2>Codes, builds and guide submissions</h2>
      <p>Submissions are welcome: send the code or build, the patch or day it was verified on, and where it came from. Community submissions are labeled as such until an official source confirms them.</p>
      <h2>Copyright and trademark concerns</h2>
      <p>Emberville Guide is an unofficial fan site. Emberville and all related names and assets belong to their respective owners. Rights holders can reach the same address for corrections, credits or takedowns; valid requests are handled promptly.</p>
      <h2>Before you write</h2>
      <p>Please do not send account credentials, personal data or purchase information — the site has no accounts and never needs them. One email per topic keeps the inbox workable.</p>
    </article>
  );
}
