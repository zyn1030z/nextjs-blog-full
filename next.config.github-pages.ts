import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/nextjs_frontend" : "",
};

export default nextConfig;
