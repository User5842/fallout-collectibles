import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        destination: "/fallout-3",
        permanent: true,
        source: "/",
      },
    ];
  },
};

export default nextConfig;
