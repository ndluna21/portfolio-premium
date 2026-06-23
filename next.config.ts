import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // // Tạo output standalone để Docker image nhỏ hơn (không cần node_modules)
  // output: "standalone",
};

export default nextConfig;
