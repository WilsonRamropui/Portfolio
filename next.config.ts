import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  cacheComponents: true,

  // Compress all responses with gzip/brotli
  compress: true,

  // Tree-shake large icon/animation libraries to only include used exports
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "@tabler/icons-react",
      "react-icons",
      "framer-motion",
      "motion",
    ],
  },

  // Next.js Image optimisation — serve AVIF then WebP, cache 1 year
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 year in seconds
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "img.icons8.com" },
      { protocol: "https", hostname: "www.chaosgroup.com" },
      { protocol: "https", hostname: "enscape3d.com" },
      { protocol: "https", hostname: "www.csiamerica.com" },
      { protocol: "https", hostname: "lumion.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },

};

export default nextConfig;

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
