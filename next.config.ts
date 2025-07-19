import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://yjpphv5stqjhntza.public.blob.vercel-storage.com/**"),
    ],
  },
};

export default nextConfig;
