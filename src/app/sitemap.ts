import type { MetadataRoute } from "next";
import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// sitemap 规范见 docs/SITEMAP.md：routes.json 是唯一来源，这里不写死路由；>5000 条自动分片
const CHUNK_SIZE = 5000;

export default function sitemap(): MetadataRoute.Sitemap | MetadataRoute.Sitemap[] {
  const live = ROUTES.filter((r) => r.pageLive !== false).map((r) => ({
    url: r.path === "/" ? SITE.url : `${SITE.url}${r.path}`,
    lastModified: r.lastModified,
    changeFrequency: r.changeFrequency as MetadataRoute.Sitemap[number]["changeFrequency"],
    priority: r.priority,
  }));
  if (live.length <= CHUNK_SIZE) return live;
  const shards: MetadataRoute.Sitemap[] = [];
  for (let i = 0; i < live.length; i += CHUNK_SIZE) {
    shards.push(live.slice(i, i + CHUNK_SIZE));
  }
  return shards;
}
