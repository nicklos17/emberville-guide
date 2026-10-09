import { ROUTES } from "@/lib/routes";
import { SITE } from "@/config/site";

// llms.txt（llmstxt.org 规范）：站点名 + 一句话 + 分节链接清单，链接与描述取 routes.json
export const dynamic = "force-static";

const POLICY_PATHS = ["/about", "/contact", "/privacy", "/terms"];

export function GET(): Response {
  const content = ROUTES.filter((r) => !POLICY_PATHS.includes(r.path));
  const policy = ROUTES.filter((r) => POLICY_PATHS.includes(r.path));
  const line = (r: (typeof ROUTES)[number]) =>
    `- [${r.title}](${SITE.url}${r.path === "/" ? "" : r.path}): ${r.description}`;
  const lines = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.tagline}`,
    "",
    `${SITE.name} is an unofficial fan site about ${SITE.game}. Facts are sourced and dated; nothing is published without a verifiable source.`,
    "",
    "## Pages",
    ...content.map(line),
    "",
    "## Policies",
    ...policy.map(line),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
