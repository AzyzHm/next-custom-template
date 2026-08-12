import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Linting is run explicitly via `npm run lint` / CI, not during `next build`.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
