"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import TravelDeals from "@/components/TravelDeals";
import ExclusiveDeals from "@/components/ExclusiveDeals";
import Whypaymore from "@/components/Whypaymoresection";
import ContactModal from "@/components/ContactModal";
import Head from "next/head";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const handleOpenModal = (itemName: string) => {
    setSelectedItem(itemName);
    setIsContactModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsContactModalOpen(false);
    setSelectedItem("");
  };

  // JSON-LD Structured Data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Ticket To Europe",
    description: "Affordable Europe travel deals, tour packages, and exclusive vacation offers.",
    url: "https://tickettooeurope.com",
    telephone: "+1-800-555-0199",
    email: "info@tickettooeurope.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://tickettooeurope.com"
    }
  };

  return (
    <>
      {/* HEAD METADATA */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Ticket To Europe | Best Europe Travel Deals & Tour Packages 2025</title>
        <meta name="title" content="Ticket To Europe | Best Europe Travel Deals & Tour Packages 2025" />
        <meta 
          name="description" 
          content="Discover affordable Europe travel deals, exclusive tour packages, and curated itineraries. Book your dream European vacation with Ticket To Europe today!" 
        />
        <meta 
          name="keywords" 
          content="europe travel deals, europe tour packages, cheap flights to europe, europe vacation packages, europe travel agency, best europe tours" 
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Ticket To Europe" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tickettooeurope.com/" />
        <meta property="og:title" content="Ticket To Europe | Best Europe Travel Deals & Tour Packages 2025" />
        <meta 
          property="og:description" 
          content="Discover affordable Europe travel deals, exclusive tour packages, and curated itineraries. Book your dream European vacation today!" 
        />
        <meta 
          property="og:image" 
          content="https://tickettooeurope.com/og-image.jpg" 
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Ticket To Europe" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://tickettooeurope.com/" />
        <meta property="twitter:title" content="Ticket To Europe | Best Europe Travel Deals & Tour Packages 2025" />
        <meta 
          property="twitter:description" 
          content="Discover affordable Europe travel deals, exclusive tour packages, and curated itineraries. Book your dream European vacation today!" 
        />
        <meta 
          property="twitter:image" 
          content="https://tickettooeurope.com/twitter-image.jpg" 
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://tickettooeurope.com/" />

        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <TravelDeals />
        <ExclusiveDeals />
        <Whypaymore />
      </main>
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={handleCloseModal}
        selectedItem={selectedItem}
      />
    </>
  );
}