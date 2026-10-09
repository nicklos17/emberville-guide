import { faqSchema } from "@/lib/schema";

export type Faq = { q: string; a: string };

// FAQ + FAQPage JSON-LD（SEO.md）；FAQ 不重复正文已答的问题（ONPAGE.md §4.1）
export function FaqList({ faqs }: { faqs: Faq[] }) {
  if (faqs.length === 0) return null;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <div className="mt-2">
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </div>
    </>
  );
}
