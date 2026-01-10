import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow Next.js Image optimization
    formats: ['image/avif', 'image/webp'],
  },
  reactCompiler: true,
};

export default nextConfig;
