import type { MetadataRoute } from "next";
import { SITE } from "@/config/site";

// robots 只屏蔽后台与预览路径，不屏蔽任何内容页（AGENT.md §3）；当前无后台路径
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
