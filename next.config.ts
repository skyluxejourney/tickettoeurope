import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for frontend-only site
  output: 'export',
  
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compression
  compress: true,

  // React strict mode
  reactStrictMode: true,

  // Production source maps (disable for smaller builds)
  productionBrowserSourceMaps: false,

  // Disable x-powered-by header (security)
  poweredByHeader: false,

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: 'https://tickettooeurope.com',
    NEXT_PUBLIC_SITE_NAME: 'Ticket to Europe',
    NEXT_PUBLIC_CONTACT_PHONE: '+1-18554937655',
  },

  // Turbopack config for Next.js 16+
  turbopack: {
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },

  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'date-fns'],
    scrollRestoration: true,
  },

  // Generate static 404 page
  generateEtags: true,
};

export default nextConfig;