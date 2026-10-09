import type { ReactNode } from "react";

// 政策/合规页布局：无广告、无 GA4（ADS.md 白名单 + AGENT.md §4.5）
export default function PlainLayout({ children }: { children: ReactNode }) {
  return <main className="mx-auto w-full max-w-3xl px-4 py-10">{children}</main>;
}
