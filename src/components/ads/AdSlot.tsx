"use client";

import { useEffect, useRef } from "react";
import { AD_SLOTS, type AdSlotPosition } from "@/lib/ads";

const ADS_ENABLED = process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

// 固定尺寸容器是硬性要求：banner 等比（aspect 728:90），对联 160×600 —— CLS=0（ADS.md）
const SIZE_CLASS: Record<AdSlotPosition, string> = {
  "in-article": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "bottom-banner": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "left-skyscraper": "h-[600px] w-[160px]",
  "right-skyscraper": "h-[600px] w-[160px]",
};

export function AdSlot({ position, className = "" }: { position: AdSlotPosition; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const invokeKey = AD_SLOTS[position];
    if (!el || !invokeKey) return;

    let settled = false;
    const timer = window.setTimeout(() => {
      if (!settled) el.style.display = "none"; // 10s 无创意自动收起，不留空白块
    }, 10000);

    // 串行队列注入：atOptions 全局唯一，多 slot 依次注入，避免配置互相覆盖（ADS.md §4）
    window.__adQueue = (window.__adQueue ?? Promise.resolve()).then(async () => {
      if (!el.isConnected) return;
      const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
      await new Promise<void>((resolve) => {
        const ric = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
        ric(() => resolve()); // 懒加载：requestIdleCallback 后注入
      });
      if (!el.isConnected) return;
      const script = document.createElement("script");
      script.src = invokeKey;
      script.async = true;
      script.onload = () => {
        settled = true;
        window.clearTimeout(timer);
      };
      script.onerror = () => {
        el.style.display = "none";
      };
      el.appendChild(script);
    });

    return () => window.clearTimeout(timer);
  }, [position]);

  if (!ADS_ENABLED || !AD_SLOTS[position]) return null;
  return (
    <div
      ref={ref}
      data-ad-position={position}
      className={`${SIZE_CLASS[position]} overflow-hidden ${className}`}
      aria-hidden="true"
    />
  );
}
