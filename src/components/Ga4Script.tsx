"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import { SITE } from "@/config/site";

// GA4 只在内容页统计（本组件仅在 (content) layout 引入）；仅生产域名生效（AGENT.md §4.5）
export function Ga4Script() {
  const id = SITE.ga4MeasurementId;
  const [onProd, setOnProd] = useState(false);

  useEffect(() => {
    setOnProd(window.location.hostname === SITE.domain);
  }, []);

  if (!id || process.env.NODE_ENV !== "production" || !onProd) return null;
  return (
    <>
      <Script src={"https://www.googletagmanager.com/gtag/js?id=" + id} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${id}');`}
      </Script>
    </>
  );
}
