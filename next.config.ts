import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Add this line for static export
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // If you're using static export, you may need this:
    unoptimized: true, // This disables image optimization for static export
  },
};

export default nextConfig;