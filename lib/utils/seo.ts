// lib/utils/seo.ts
import { COMPANY, META, CONTACT, BRAND } from '../../app/constants'

interface SeoProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article' | 'product'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  noIndex?: boolean
}

export const generateSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  noIndex = false,
}: SeoProps) => {
  const baseUrl = `https://${COMPANY.domain}`
  const siteTitle = title ? `${title} | ${COMPANY.name}` : META.title
  const siteDescription = description || META.description
  const siteKeywords = keywords || META.keywords
  const siteImage = image ? `${baseUrl}${image}` : `${baseUrl}/og-image.jpg`
  const siteUrl = url ? `${baseUrl}${url}` : baseUrl

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords.join(', '),
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: siteUrl,
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: siteUrl,
      type,
      siteName: COMPANY.name,
      images: [
        {
          url: siteImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      emails: [COMPANY.email],
      phoneNumbers: [COMPANY.phone],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [siteImage],
    },
  }
}

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  }
}

// Generate article schema
export const generateArticleSchema = ({
  title,
  description,
  image,
  author,
  datePublished,
  dateModified,
}: {
  title: string
  description: string
  image: string
  author: string
  datePublished: string
  dateModified: string
}) => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    image: `${baseUrl}${image}`,
    author: {
      '@type': 'Person',
      name: author || COMPANY.name,
    },
    publisher: {
      '@type': 'Organization',
      name: COMPANY.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${BRAND.logo}`,
      },
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': baseUrl,
    },
  }
}

// Generate FAQ schema
export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Product schema (for deals)
export const generateProductSchema = ({
  name,
  description,
  image,
  price,
  currency = 'USD',
  availability = 'InStock',
  rating,
  reviewCount,
}: {
  name: string
  description: string
  image: string
  price: number
  currency?: string
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  rating?: number
  reviewCount?: number
}) => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description,
    image: `${baseUrl}${image}`,
    offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: currency,
      availability: `https://schema.org/${availability}`,
      url: baseUrl,
    },
    ...(rating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: rating,
        reviewCount: reviewCount || 0,
      },
    }),
  }
}

// Generate LocalBusiness schema
export const generateLocalBusinessSchema = () => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: COMPANY.name,
    description: META.description,
    url: baseUrl,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressCountry: 'US',
    },
    priceRange: '$$',
    openingHours: 'Mo-Su 00:00-23:59',
    sameAs: [
      'https://facebook.com/tickettoeurope',
      'https://instagram.com/tickettoeurope',
      'https://youtube.com/tickettoeurope',
    ],
  }
}

// Generate WebSite schema
export const generateWebSiteSchema = () => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY.name,
    description: META.description,
    url: baseUrl,
    ...(typeof window !== 'undefined' && {
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }),
  }
}

// Generate Organization schema
export const generateOrganizationSchema = () => {
  const baseUrl = `https://${COMPANY.domain}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY.name,
    description: META.description,
    url: baseUrl,
    logo: `${baseUrl}${BRAND.logo}`,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'New York',
      addressCountry: 'US',
    },
    sameAs: [
      'https://facebook.com/tickettoeurope',
      'https://instagram.com/tickettoeurope',
      'https://youtube.com/tickettoeurope',
    ],
  }
}

// Generate Review schema
export const generateReviewSchema = ({
  name,
  rating,
  reviewCount,
  description,
}: {
  name: string
  rating: number
  reviewCount: number
  description?: string
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: name,
    description: description || '',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating,
      reviewCount: reviewCount,
      bestRating: 5,
    },
  }
}

// Generate all schemas combined (for homepage)
export const generateAllSchemas = () => {
  return [
    generateLocalBusinessSchema(),
    generateWebSiteSchema(),
    generateOrganizationSchema(),
  ]
}

// Generate schema script tag string
export const generateSchemaScript = (schema: any) => {
  return JSON.stringify(schema)
}

// Helper to convert schema to script tag (for use in components)
export const getSchemaScript = (schema: any) => {
  return {
    __html: JSON.stringify(schema),
  }
}

// Static page SEO presets
export const pageSEO = {
  home: generateSEO({
    title: META.title,
    description: META.description,
    url: '/',
  }),
  about: generateSEO({
    title: 'About Us',
    description: `Learn about ${COMPANY.name}, your trusted travel partner for European adventures. Discover our story, mission, and commitment to exceptional travel experiences.`,
    url: '/about',
  }),
  contact: generateSEO({
    title: 'Contact Us',
    description: `Contact ${COMPANY.name} for all your Europe travel needs. Call ${CONTACT.phone} or email ${CONTACT.email}. 24/7 support available for bookings and inquiries.`,
    url: '/contact',
  }),
  deals: generateSEO({
    title: 'Europe Travel Deals & Packages',
    description: `Discover the best Europe travel deals and holiday packages. Save on flights, hotels, and tours with exclusive offers from ${COMPANY.name}.`,
    url: '/deals',
  }),
  airlines: generateSEO({
    title: 'Airlines Flying to Europe',
    description: `Compare and book flights with top airlines flying to European destinations. Find the best deals with ${COMPANY.name}. 24/7 support available.`,
    url: '/airlines',
  }),
  destinations: generateSEO({
    title: 'European Destinations Guide',
    description: `Explore the best European destinations with ${COMPANY.name}. Find travel guides, tips, and deals for Paris, Rome, London, and more.`,
    url: '/destinations',
  }),
  blog: generateSEO({
    title: 'Travel Blog & Guides',
    description: `Read the latest travel tips, guides, and inspiration for your European adventure. Expert advice from the ${COMPANY.name} team.`,
    url: '/blog',
  }),
  faq: generateSEO({
    title: 'Frequently Asked Questions',
    description: `Find answers to frequently asked questions about booking, travel, and destinations with ${COMPANY.name}. Your Europe travel questions answered.`,
    url: '/faq',
  }),
}