import { SITE } from "@/config/site";

// 结构化数据统一产出（SEO.md）：全站 WebSite + SearchAction；非首页 BreadcrumbList；含 FAQ 页 FAQPage
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.tagline,
    inLanguage: SITE.locale,
    // TODO: /search 搜索页上线后此 SearchAction 才完整；先按 AGENT.md §3 规范占位
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: SITE.url + "/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.href === "/" ? SITE.url : SITE.url + item.href,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image?: string;
}) {
  const pageUrl = SITE.url + path;
  const imageUrl = SITE.url + (image ?? "/images/og/og-default.png");

  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline,
    description,
    datePublished,
    dateModified,
    inLanguage: SITE.locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    image: [imageUrl],
  };
}
