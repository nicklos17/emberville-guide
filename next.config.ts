import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash 保持默认 false —— canonical 统一无尾斜杠（ONPAGE.md §6，定了不许改）
  // 禁止 output: 'export'（AGENT.md §2：会丧失 SSR）
  images: {
    // Cloudflare Workers 上Image Optimization 默认不可用；静态资源随 assets bucket 直接服务。
    // 保持默认优化器即可，若部署后图片 404 再切 unoptimized（见 docs/CONFLICTS.md待办）。
    formats: ["image/avif", "image/webp"],
    // 官方截图已在构建期转WebP（public/images/program/*.webp），无需远端域名
    remotePatterns: [],
  },
};

export default nextConfig;