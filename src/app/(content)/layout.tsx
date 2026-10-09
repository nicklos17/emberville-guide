import type { ReactNode } from "react";
import { AdSlot } from "@/components/ads/AdSlot";
import { Ga4Script } from "@/components/Ga4Script";

// 内容页布局：左/右对联位仅 ≥1280px 渲染，bottom-banner 仅 <1280px（ADS.md）。
// 广告与 GA4 只在此分组渲染——白名单制，非内容页不引入组件（AGENT.md §4）。
export default function ContentLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto flex w-full max-w-[1600px] justify-center gap-6 px-4">
      <aside className="hidden shrink-0 py-10 xl:block" aria-hidden="true">
        <AdSlot position="left-skyscraper" />
      </aside>
      <div className="flex min-w-0 flex-1 flex-col items-center">
        {children}
        <div className="flex w-full justify-center py-6 xl:hidden">
          <AdSlot position="bottom-banner" />
        </div>
      </div>
      <aside className="hidden shrink-0 py-10 xl:block" aria-hidden="true">
        <AdSlot position="right-skyscraper" />
      </aside>
      <Ga4Script />
    </main>
  );
}
