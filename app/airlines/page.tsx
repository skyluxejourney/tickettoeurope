// app/airlines/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { COMPANY, CONTACT, META } from "../constants";

// Generate metadata for the airlines index page
export const metadata: Metadata = {
  title: `Top Airlines Flying to Europe | ${COMPANY.name}`,
  description: `Compare and book flights with leading airlines flying to European destinations. Find the best deals on ${COMPANY.name}. 24/7 support available.`,
  keywords: [
    "airlines to Europe",
    "Europe flights",
    "book flights",
    "British Airways",
    "Lufthansa",
    "Air France",
    "KLM",
    "Turkish Airlines",
    "SWISS",
    "Virgin Atlantic",
    "flight booking",
    "Europe travel",
  ],
  alternates: {
    canonical: `https://${COMPANY.domain}/airlines`,
  },
  openGraph: {
    title: `Top Airlines Flying to Europe | ${COMPANY.name}`,
    description: `Compare and book flights with leading airlines flying to European destinations. Best deals and 24/7 support.`,
    url: `https://${COMPANY.domain}/airlines`,
    siteName: COMPANY.name,
    type: "website",
  },
};

// Airline data with full information
const airlinesData = {
  "british-airways": {
    name: "British Airways",
    code: "BA",
    description: "Premium British airline with extensive European network",
    rating: 4.2,
    destinations: 180,
    hub: "London Heathrow (LHR)",
  },
  "lufthansa": {
    name: "Lufthansa",
    code: "LH",
    description: "Germany's largest airline with European excellence",
    rating: 4.1,
    destinations: 220,
    hub: "Frankfurt (FRA) & Munich (MUC)",
  },
  "air-france": {
    name: "Air France",
    code: "AF",
    description: "French elegance and extensive European connections",
    rating: 4.0,
    destinations: 200,
    hub: "Paris Charles de Gaulle (CDG)",
  },
  "klm-royal-dutch-airlines": {
    name: "KLM Royal Dutch Airlines",
    code: "KL",
    description: "World's oldest airline with Dutch reliability",
    rating: 4.1,
    destinations: 130,
    hub: "Amsterdam Schiphol (AMS)",
  },
  "turkish-airlines": {
    name: "Turkish Airlines",
    code: "TK",
    description: "Award-winning service with extensive European routes",
    rating: 4.3,
    destinations: 340,
    hub: "Istanbul (IST)",
  },
  "swiss-international-airlines": {
    name: "SWISS International Airlines",
    code: "LX",
    description: "Swiss precision and quality in European travel",
    rating: 4.2,
    destinations: 100,
    hub: "Zurich (ZRH) & Geneva (GVA)",
  },
  "virgin-atlantic": {
    name: "Virgin Atlantic",
    code: "VS",
    description: "Vibrant British airline with innovative travel experience",
    rating: 4.0,
    destinations: 30,
    hub: "London Heathrow (LHR) & Manchester (MAN)",
  },
};

// JSON-LD structured data for the airlines page
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Top Airlines Flying to Europe",
  description: "Compare and book flights with leading airlines to European destinations.",
  url: `https://${COMPANY.domain}/airlines`,
  numberOfItems: Object.keys(airlinesData).length,
  itemListElement: Object.entries(airlinesData).map(([slug, airline], index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Airline",
      name: airline.name,
      iataCode: airline.code,
      url: `https://${COMPANY.domain}/airlines/${slug}`,
      description: airline.description,
    },
  })),
};

export default function AirlinesPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-[#F5F9FF] pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-[#0A1628] font-heading mb-2">
                Top Airlines Flying to Europe
              </h1>
              <p className="text-[#0A1628]/60 text-lg">
                Compare and book flights with the world's leading airlines
              </p>
              <p className="text-sm text-[#0A1628]/40 mt-2">
                {Object.keys(airlinesData).length} airlines • 24/7 support at {CONTACT.phone}
              </p>
            </div>

            {/* Airlines Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(airlinesData).map(([slug, airline]) => (
                <Link
                  key={slug}
                  href={`/airlines/${slug}`}
                  className="bg-white rounded-2xl shadow-lg p-6 border border-[#E2E8F0] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#4A8BCF]/30 group"
                >
                  <div className="flex items-center gap-4">
                    {/* Airline Code Badge */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] flex items-center justify-center text-white text-xl font-bold shadow-lg flex-shrink-0">
                      {airline.code}
                    </div>
                    
                    {/* Airline Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-[#0A1628] group-hover:text-[#1A3A6B] transition-colors truncate">
                        {airline.name}
                      </h3>
                      <p className="text-xs text-[#0A1628]/50 line-clamp-2">
                        {airline.description}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs text-[#0A1628]/40">
                          ⭐ {airline.rating}/5
                        </span>
                        <span className="text-xs text-[#0A1628]/30">•</span>
                        <span className="text-xs text-[#0A1628]/40">
                          {airline.destinations} destinations
                        </span>
                      </div>
                    </div>

                    {/* Arrow Icon */}
                    <div className="text-[#0A1628]/20 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Call to Action Section */}
            <div className="mt-12 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">
                Need Help Choosing an Airline?
              </h2>
              <p className="text-white/80 mb-4">
                Our travel experts are available 24/7 to help you find the best flights
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-block bg-white text-[#1A3A6B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Call Now: {CONTACT.phone}
              </a>
            </div>

            {/* FAQ Section for SEO */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
                Frequently Asked Questions About European Airlines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A1628] mb-2">
                    Which airline is best for flying to Europe?
                  </h3>
                  <p className="text-sm text-[#0A1628]/60">
                    The best airline depends on your preferences. British Airways offers premium service, Lufthansa provides German efficiency, and Turkish Airlines offers award-winning value.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A1628] mb-2">
                    What is the cheapest airline to Europe?
                  </h3>
                  <p className="text-sm text-[#0A1628]/60">
                    Budget airlines like Ryanair and easyJet offer the cheapest fares, while full-service carriers like Lufthansa and Air France provide more inclusive services.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A1628] mb-2">
                    Can I book multiple airlines through {COMPANY.name}?
                  </h3>
                  <p className="text-sm text-[#0A1628]/60">
                    Yes! {COMPANY.name} offers booking services for all major airlines flying to Europe. Contact our support team at {CONTACT.phone} for the best deals.
                  </p>
                </div>
                <div className="bg-white rounded-xl p-6 border border-[#E2E8F0]">
                  <h3 className="font-semibold text-[#0A1628] mb-2">
                    Do European airlines offer flexible cancellation?
                  </h3>
                  <p className="text-sm text-[#0A1628]/60">
                    Most major European airlines offer flexible cancellation policies on premium fares. Check specific airline pages for detailed policy information.
                  </p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 text-xs text-[#0A1628]/40 text-center border-t border-[#E2E8F0] pt-6">
              <p>
                {COMPANY.name} is an independent travel agency. All airlines and logos are the property of their respective owners.
              </p>
              <p className="mt-1">
                Contact: {CONTACT.phone} | Email: {CONTACT.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}