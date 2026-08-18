// app/sitemap.ts
import type { MetadataRoute } from "next";
import { COMPANY } from "./constants";

export const dynamic = "force-static";

// Define all airline slugs
const airlineSlugs = [
  "british-airways",
  "lufthansa",
  "air-france",
  "klm-royal-dutch-airlines",
  "turkish-airlines",
  "swiss-international-airlines",
  "virgin-atlantic",
  "emirates",
  "ryanair",
  "easyjet",
  "wizz-air",
];

// Define all destination slugs
const destinationSlugs = [
  "paris",
  "london",
  "rome",
  "barcelona",
  "amsterdam",
  "berlin",
  "prague",
  "vienna",
  "athens",
  "lisbon",
  "budapest",
  "dubrovnik",
  "florence",
  "venice",
  "copenhagen",
  "stockholm",
  "oslo",
  "helsinki",
  "dublin",
  "edinburgh",
];

// Define all deal/tour slugs
const dealSlugs = [
  "european-explorer",
  "romantic-paris",
  "historical-rome",
  "barcelona-beach",
  "amsterdam-canal",
  "alpine-adventure",
  "mediterranean-cruise",
  "eastern-europe",
  "scandinavian-northern-lights",
  "iberian-peninsula",
];

// Define all blog post slugs
const blogSlugs = [
  "best-time-to-visit-europe",
  "europe-budget-travel-guide",
  "eurail-vs-flights",
  "two-week-europe-itinerary",
  "european-cities-first-timers",
  "packing-list-for-europe",
  "cheapest-european-destinations",
  "europe-train-travel-guide",
  "solo-travel-europe",
  "family-vacation-europe",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${COMPANY.domain}`;
  const currentDate = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/deals`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/airlines`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cancellation-policy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Airline pages
  const airlinePages: MetadataRoute.Sitemap = airlineSlugs.map((slug) => ({
    url: `${baseUrl}/airlines/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // Destination pages
  const destinationPages: MetadataRoute.Sitemap = destinationSlugs.map(
    (slug) => ({
      url: `${baseUrl}/destinations/${slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    })
  );

  // Deal/tour pages
  const dealPages: MetadataRoute.Sitemap = dealSlugs.map((slug) => ({
    url: `${baseUrl}/deals/${slug}`,
    lastModified: currentDate,
    changeFrequency: "daily",
    priority: 0.9,
  }));

  // Blog pages
  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...airlinePages,
    ...destinationPages,
    ...dealPages,
    ...blogPages,
  ];
}