// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static export for frontend-only site
  output: 'export',

  // Image optimization
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
    NEXT_PUBLIC_SITE_URL: 'https://tickettoeurope.com',
    NEXT_PUBLIC_SITE_NAME: 'Ticket to Europe',
    NEXT_PUBLIC_CONTACT_PHONE: '+1-18554937655',
  },

  // ⚠️ IMPORTANT: Turbopack config (replaces webpack for Next.js 16+)
  turbopack: {
    // No custom rules needed for this project
    // But we need to define it to avoid the error
    resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },

  // ⚠️ Note: "redirects" and "headers" don't work with "output: export"
  // For static export, use server config (Netlify/Vercel) instead

  // Experimental features
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react', 'date-fns'],
    scrollRestoration: true,
  },

  // Output directory
  distDir: 'out',

  // Generate static 404 page
  generateEtags: true,
};

export default nextConfig;