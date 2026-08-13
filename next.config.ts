import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Disable strict mode if it's causing issues
  reactStrictMode: true,
  // Ensure trailing slashes for consistent routing
  trailingSlash: true,
  // Disable the x-powered-by header
  poweredByHeader: false,
  // Generate source maps for debugging
  productionBrowserSourceMaps: false,
};

export default nextConfig;