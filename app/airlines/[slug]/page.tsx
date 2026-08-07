// app/airlines/[slug]/page.tsx

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirlineHero from "./components/AirlineHero";
import AirlinePolicy from "./components/AirlinePolicy";
import AirlineFAQ from "./components/AirlineFAQ";
import { getAirlineBySlug, getAirlineSlugs, type AirlineData } from "./constants";

// Generate static params for all airlines
export async function generateStaticParams() {
  return getAirlineSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each airline
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    return {
      title: "Airline Not Found",
      description: "The requested airline page could not be found.",
    };
  }

  return {
    title: airline.metadata.title,
    description: airline.metadata.description,
    keywords: airline.metadata.keywords,
    openGraph: {
      title: airline.metadata.title,
      description: airline.metadata.description,
      type: "website",
      siteName: airline.airline.name,
    },
    twitter: {
      card: "summary_large_image",
      title: airline.metadata.title,
      description: airline.metadata.description,
    },
  };
}

// For Next.js 15+, use this syntax
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function AirlinePage({ params }: Props) {
  const { slug } = await params;
  const airline = getAirlineBySlug(slug);

  if (!airline) {
    notFound();
  }

  // Extract frequently used data for better readability
  const { name, code, rating, reviews, hub, destinations } = airline.airline;

  return (
    <>
      <Header />
      <main>
        {/* Pass the entire airline object */}
        <AirlineHero airline={airline} />
        <AirlinePolicy airline={airline} />
        <AirlineFAQ airline={airline} />

        {/* Schema Markup - Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              "name": "tickettoeurope.com",
              "url": "https://tickettooeurope.com",
              "description": `Book ${name} flights and get assistance with changes, cancellations, and upgrades.`,
              "telephone": airline.airline.phoneNumber,
              "serviceType": "Flight Booking and Travel Assistance",
              "provider": {
                "@type": "Airline",
                "name": name,
                "iataCode": code,
                "hub": hub,
                "numberOfDestinations": destinations,
                "rating": {
                  "@type": "AggregateRating",
                  "ratingValue": rating,
                  "reviewCount": reviews
                }
              }
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}