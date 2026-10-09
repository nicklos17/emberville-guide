import type { Metadata } from "next";
import { SITE } from "@/config/site";

export const DEFAULT_OG_IMAGE = "/images/og/og-default.png";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/**
 * 页面元数据单点产出（SEO.md）。
 * - title 传「不带品牌后缀」的主标题；内页在这里统一追加 ` | ${SITE.name}`，首页不加
 * - canonical 绝对路径、无尾斜杠（ONPAGE.md §6，开站即定，不许改）
 * - og:image / twitter:image 每页必带，缺省回退 DEFAULT_OG_IMAGE（1200×630）
 */
export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const canonical = path === "/" ? SITE.url : `${SITE.url}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE.name}`;
  const og = image ?? DEFAULT_OG_IMAGE;
  return {
    title: fullTitle,
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE.name,
      type: "website",
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [og] },
  };
}
