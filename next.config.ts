import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // Forces Next.js to generate static HTML/CSS/JS for cloudflare pages
  images: {
    unoptimized: true, // Disable Image Optimization API for static export
  },
};

module.exports = nextConfig;
