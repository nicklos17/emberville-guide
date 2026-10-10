// 广告供应商配置（ADS.md）：invoke key 属公开页面值，配置在此，不走构建环境变量。
// 总开关在 .env.production 的 NEXT_PUBLIC_ADS_ENABLED（默认 false）。

export type AdSlotPosition = "in-article" | "bottom-banner" | "left-skyscraper" | "right-skyscraper";

export type AdOptions = {
  key: string;
  format: "iframe";
  height: number;
  width: number;
  params: Record<string, unknown>;
};

export type AdSlotConfig = {
  src: string;
  options: AdOptions;
};

declare global {
  interface Window {
    __adQueue?: Promise<void>;
    atOptions?: AdOptions;
  }
}

const banner: AdSlotConfig = {
  src: "https://bicea.org/22/e2a902bee0d30ef50acd611563b5dbe5",
  options: {
    key: "e2a902bee0d30ef50acd611563b5dbe5",
    format: "iframe",
    height: 90,
    width: 728,
    params: {},
  },
};

const skyscraper: AdSlotConfig = {
  src: "https://bicea.org/22/acaecec2f826994c4465caa6c8d91ef9",
  options: {
    key: "acaecec2f826994c4465caa6c8d91ef9",
    format: "iframe",
    height: 600,
    width: 160,
    params: {},
  },
};

/** 每个展示位映射到供应商配置；左右对联复用同一个 160×600 广告单元。 */
export const AD_SLOTS: Record<AdSlotPosition, AdSlotConfig> = {
  "in-article": banner,
  "bottom-banner": banner,
  "left-skyscraper": skyscraper,
  "right-skyscraper": skyscraper,
};
