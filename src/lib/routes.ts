import routesJson from "@/content/routes.json";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  lastModified: string;
  priority: number;
  changeFrequency: string;
  pageLive: boolean;
}

// routes.json 是 lastModified / priority / changeFrequency 的唯一登记处（SITEMAP.md）
export const ROUTES = routesJson as RouteEntry[];

export function getRoute(path: string): RouteEntry {
  const route = ROUTES.find((r) => r.path === path);
  if (!route) {
    throw new Error(`Route ${path} is not registered in src/content/routes.json（见 docs/SITEMAP.md）`);
  }
  return route;
}

/** 内链 title 属性镜像目标页完整 SEO title（SEO.md 同步面④） */
export function routeTitle(path: string): string {
  return getRoute(path).title;
}
