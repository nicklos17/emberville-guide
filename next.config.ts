import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // trailingSlash 保持默认 false —— canonical 统一无尾斜杠（ONPAGE.md §6，定了不许改）
  // 禁止 output: 'export'（AGENT.md §2：会丧失 SSR）
  // 撤页路径 301：/countdown 与 /release-date 高度重叠，2026-10-10 撤页（docs/CONFLICTS.md C-13，
  // 原决策直接 404），同日反转为保留 URL 权重、301 到承接页。此处由 Next server 路由生效
  // （/countdown 无对应静态资产，请求必达 Worker），查询参数自动透传。
  async redirects() {
    return [{ source: "/countdown", destination: "/release-date", statusCode: 301 }];
  },
  images: {
    // Workers 上 /_next/image 由 OpenNext 以 302 重定向回原图：每张图多一次 Worker 调用
    // 加一跳往返，直接拖慢 LCP。全站图片已在构建期预压成 WebP（源图收在 assets-source/），
    // 开 unoptimized 让 <Image> 直接引用原文件，跳过运行时优化器。
    unoptimized: true,
  },
};

export default nextConfig;