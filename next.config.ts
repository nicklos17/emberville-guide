import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash 保持默认 false —— canonical 统一无尾斜杠（ONPAGE.md §6，定了不许改）
  // 禁止 output: 'export'（AGENT.md §2：会丧失 SSR）
  images: {
    // Workers 上 /_next/image 由 OpenNext 以 302 重定向回原图：每张图多一次 Worker 调用
    // 加一跳往返，直接拖慢 LCP。全站图片已在构建期预压成 WebP（源图收在 assets-source/），
    // 开 unoptimized 让 <Image> 直接引用原文件，跳过运行时优化器。
    unoptimized: true,
  },
};

export default nextConfig;