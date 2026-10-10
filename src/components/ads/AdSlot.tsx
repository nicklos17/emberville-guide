"use client";

import { useEffect, useRef } from "react";
import { AD_SLOTS, type AdSlotPosition } from "@/lib/ads";

const ADS_ENABLED = process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_ADS_ENABLED === "true";

// 固定尺寸容器：banner 等比（aspect 728:90），对联 160×600 —— CLS=0（ADS.md）
const SIZE_CLASS: Record<AdSlotPosition, string> = {
  "in-article": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "bottom-banner": "mx-auto aspect-[728/90] w-full max-w-[728px]",
  "left-skyscraper": "h-[600px] w-[160px]",
  "right-skyscraper": "h-[600px] w-[160px]",
};

const SIDEBAR_POSITIONS = new Set<AdSlotPosition>(["left-skyscraper", "right-skyscraper"]);

export function AdSlot({ position, className = "" }: { position: AdSlotPosition; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    const config = AD_SLOTS[position];
    if (!el || !config || !ADS_ENABLED) return;

    const desktopQuery = window.matchMedia("(min-width: 1280px)");
    let disposed = false;
    let requested = false;
    let creativeTimer = 0;
    let loaderTimer = 0;
    let observer: MutationObserver | undefined;
    let activeScript: HTMLScriptElement | undefined;
    let finishLoader: (() => void) | undefined;

    const visibleAtViewport = () => {
      if (SIDEBAR_POSITIONS.has(position)) return desktopQuery.matches;
      if (position === "bottom-banner") return !desktopQuery.matches;
      return true;
    };

    const clearCreativeTimer = () => {
      if (creativeTimer) window.clearTimeout(creativeTimer);
      creativeTimer = 0;
    };

    const hideIfEmpty = () => {
      if (el.querySelector("iframe")) return;
      el.style.display = "none";
      clearCreativeTimer();
      observer?.disconnect();
      activeScript?.remove();
    };

    const settleCreative = () => {
      const iframe = el.querySelector("iframe");
      if (!iframe) return;
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "0";
      clearCreativeTimer();
      observer?.disconnect();
      finishLoader?.();
    };

    const enqueueAd = () => {
      if (disposed || requested || !visibleAtViewport()) return;
      requested = true;

      // atOptions 是供应商全局变量；队列等待脚本执行后再切换配置，避免多个 slot 串配置。
      window.__adQueue = (window.__adQueue ?? Promise.resolve()).then(async () => {
        if (disposed || !el.isConnected) return;
        if (!visibleAtViewport()) {
          requested = false;
          return;
        }

        const idleWindow = window as Window & { requestIdleCallback?: (cb: () => void) => number };
        await new Promise<void>((resolve) => {
          const requestIdle = idleWindow.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 1));
          requestIdle(() => resolve());
        });
        if (disposed || !el.isConnected) return;
        if (!visibleAtViewport()) {
          requested = false;
          return;
        }

        window.atOptions = { ...config.options, params: { ...config.options.params } };
        activeScript = document.createElement("script");
        activeScript.src = config.src;
        activeScript.async = true;

        observer = new MutationObserver(settleCreative);
        observer.observe(el, { childList: true, subtree: true });
        creativeTimer = window.setTimeout(hideIfEmpty, 10000);

        await new Promise<void>((resolve) => {
          let resolved = false;
          const finish = () => {
            if (resolved) return;
            resolved = true;
            if (loaderTimer) window.clearTimeout(loaderTimer);
            loaderTimer = 0;
            finishLoader = undefined;
            resolve();
          };
          finishLoader = finish;
          loaderTimer = window.setTimeout(() => {
            if (!el.querySelector("iframe")) hideIfEmpty();
            activeScript?.remove();
            finish();
          }, 10000);
          activeScript!.onload = settleCreative;
          activeScript!.onerror = () => {
            hideIfEmpty();
            finish();
          };
          el.appendChild(activeScript!);
        });
      });
    };

    enqueueAd();
    desktopQuery.addEventListener("change", enqueueAd);

    return () => {
      disposed = true;
      desktopQuery.removeEventListener("change", enqueueAd);
      clearCreativeTimer();
      if (loaderTimer) window.clearTimeout(loaderTimer);
      observer?.disconnect();
      activeScript?.remove();
      finishLoader?.();
    };
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
