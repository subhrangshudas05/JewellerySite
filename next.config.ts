import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.tanishq.co.in" },
      { protocol: "https", hostname: "caratlane.com" },
      { protocol: "https", hostname: "www.caratlane.com" },
      {
        protocol: "https",
        hostname: "**", // allows any HTTPS domain
      },
    ],
  }
};

export default nextConfig;
