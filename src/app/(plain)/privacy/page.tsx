import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { getRoute } from "@/lib/routes";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const SEO_TITLE = "Privacy Policy \u2014 Data, Cookies & Ads";
const route = getRoute("/privacy");

export const revalidate = false;

export function generateMetadata(): Metadata {
  return pageMetadata({ title: SEO_TITLE, description: route.description, path: route.path });
}

export default function PrivacyPage() {
  return (
    <article className="article">
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Privacy Policy", href: route.path }]} />
      <h1>Emberville Guide Privacy Policy</h1>
      <p className="answer">Emberville Guide collects as little as a fan site can: server logs, optional analytics on content pages, and whatever you choose to email us.</p>
      <h2>What this site collects</h2>
      <p>Standard server logs (pages served, timestamps, approximate region) plus Google Analytics 4 on content pages once a measurement ID is configured — it is empty at setup, so measurement is off. Policy pages are excluded from measurement. There are no accounts, comments or newsletters, so no names or emails are stored unless you write to us.</p>
      <h2>Cookies and advertising</h2>
      <p>Content pages may display advertising once ad slots are configured; ad partners may then set cookies for measurement and frequency capping. Advertising is disabled at setup. No cookie is set by Emberville Guide itself beyond what the infrastructure requires.</p>
      <h2>Your choices</h2>
      <p>Analytics and ad scripts can be blocked with browser settings or extensions. To ask about data you have emailed, write to support@emberville-guide.wiki and it will be deleted on request.</p>
      <h2>Children</h2>
      <p>The site is not directed at children under 13 and does not knowingly collect their data.</p>
      <h2>Changes</h2>
      <p>Material changes to this policy are posted on this page, with the Updated date at the top reflecting the last revision.</p>
    </article>
  );
}
