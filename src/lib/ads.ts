// 广告供应商配置（ADS.md）：invoke key 属公开页面值，配置在此，不走构建环境变量。
// 总开关在 .env.production 的 NEXT_PUBLIC_ADS_ENABLED（默认 false）。

export type AdSlotPosition = "in-article" | "bottom-banner" | "left-skyscraper" | "right-skyscraper";

declare global {
  interface Window {
    __adQueue?: Promise<void>;
    atOptions?: Record<string, unknown>;
  }
}

/** 每个 slot 的 invoke.js 地址；未配置的位不渲染容器（ADS.md：关闭即无容器残留） */
export const AD_SLOTS: Partial<Record<AdSlotPosition, string>> = {
  // "in-article": "https://...", // 按 ADS.md 接入供应商后填写
};
