// 站点常量（AGENT.md §0.2）：全站引用，禁止散落硬编码
export const SITE = {
  name: "Emberville Guide",
  domain: "emberville-guide.wiki",
  url: "https://emberville-guide.wiki",
  tagline: "The complete Emberville wiki & guides — maps, gear, characters and bosses.",
  game: "Emberville",
  locale: "en" as const,
  launchDate: "", // 正式版日期官方未定，不设（AGENT.md §0.2）
  earlyAccessDate: "2026-10-27", // 计划 EA 发售日，Steam 官方（Verified: 2026-10-09）
  developer: "Cygnus Cross",
  publisher: "Cygnus Cross",
  platform: "PC (Steam)",
  genre: "Action RPG",
  contactEmail: "support@emberville-guide.wiki",
  ga4MeasurementId: "G-ZWWDTDLD1X", // GA4 测量 ID（仅内容页、仅生产域名生效，AGENT.md §4.5）
  primaryColor: "#5AAEED",
} as const;

// 页脚常驻免责声明（AGENT.md §0.1）
export const DISCLAIMER = "Emberville Guide is an unofficial fan site. Emberville is a trademark of Cygnus Cross. We are not affiliated with or endorsed by Cygnus Cross.";
