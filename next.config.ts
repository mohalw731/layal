import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // This will skip ESLint during the build
  },
  // Other Next.js configuration options can go here
};

export default nextConfig;