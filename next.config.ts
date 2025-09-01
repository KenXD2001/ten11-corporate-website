import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  images: {
    unoptimized: true,
  },
  output: "export",
  // basePath: "/ten11",
};

export default nextConfig;
