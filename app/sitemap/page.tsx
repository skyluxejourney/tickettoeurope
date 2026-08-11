"use client";

import { useState } from "react";
import { 
  LayoutGrid, 
  Plane, 
  Scale, 
  Search, 
  ChevronRight,
  Phone
} from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { BRAND, CONTACT } from "@/app/constants";

export default function SitemapPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");

  // Exact arrays taken from the Footer component
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Contact Us", href: "#", isModal: true },
    { name: "Site Map", href: "/sitemap" },
  ];

  const legalLinks = [
    { name: "Terms & Condition", href: "/terms-of-service" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Price Match Promise", href: "/price-match-policy" },
    { name: "Fulfillment Policy", href: "/fulfillment-policy" },
    { name: "Fare Disclosure", href: "/fare-disclosure-policy" },
    { name: "Advertiser Disclosure", href: "/advertiser-disclosure-policy" },
    { name: "Cookies Policy", href: "/cookies" },
    { name: "Cancellation and Refund", href: "/cancellation-refund-policy" },
    { name: "Taxes and Fees", href: "/taxes-fees" },
  ];

  const topAirlines = [
    { name: "British Airways", slug: "british-airways" },
    { name: "Lufthansa", slug: "lufthansa" },
    { name: "Air France", slug: "air-france" },
    { name: "KLM Royal Dutch Airlines", slug: "klm-royal-dutch-airlines" },
    { name: "Turkish Airlines", slug: "turkish-airlines" },
    { name: "SWISS International Airlines", slug: "swiss-international-airlines" },
    { name: "Virgin Atlantic", slug: "virgin-atlantic" },
  ];

  const handleLinkClick = (e: React.MouseEvent, linkName: string, isModal?: boolean) => {
    if (isModal) {
      e.preventDefault();
      setSelectedLink(linkName);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedLink("");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-[#1A3A6B] hover:text-[#4A8BCF] transition-colors">
              Home
            </Link>
            <span className="text-[#0A1628]/30">›</span>
            <span className="text-[#0A1628]/60">Sitemap</span>
          </nav>

          <div className="max-w-4xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight">
                Sitemap
              </h1>
              <p className="text-sm text-[#0A1628]/60 mt-2 leading-relaxed text-justify">
                Welcome to the Tickettoeurope.com sitemap. This page provides a comprehensive 
                overview of all the main pages, legal policies, and airline partners available 
                on our website to help you navigate our services.
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full mt-3" />
            </div>

            {/* Sitemap Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* Quick Links Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                    <LayoutGrid size={16} className="text-[#1A3A6B]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0A1628]">Quick Links</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 border-[#E8F0FE] pl-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      {link.isModal ? (
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.name, true)}
                          className="flex items-center gap-2 text-sm text-[#0A1628]/70 hover:text-[#1A3A6B] transition-colors duration-200 cursor-pointer group"
                        >
                          <ChevronRight size={14} className="text-[#4A8BCF]/50 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0" />
                          {link.name}
                        </a>
                      ) : link.name === "Home" ? (
                        <a
                          href={link.href}
                          onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="flex items-center gap-2 text-sm text-[#0A1628]/70 hover:text-[#1A3A6B] transition-colors duration-200 cursor-pointer group"
                        >
                          <ChevronRight size={14} className="text-[#4A8BCF]/50 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0" />
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="flex items-center gap-2 text-sm text-[#0A1628]/70 hover:text-[#1A3A6B] transition-colors duration-200 group"
                        >
                          <ChevronRight size={14} className="text-[#4A8BCF]/50 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0" />
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Top Airlines Column */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                    <Plane size={16} className="text-[#1A3A6B]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0A1628]">Top Airlines</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 border-[#E8F0FE] pl-4">
                  {topAirlines.map((airline) => (
                    <li key={airline.name}>
                      <Link
                        href={`/airlines/${airline.slug}`}
                        className="flex items-center gap-2 text-sm text-[#0A1628]/70 hover:text-[#1A3A6B] transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-[#4A8BCF]/50 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0" />
                        {airline.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Links Column */}
              <div className="md:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center flex-shrink-0">
                    <Scale size={16} className="text-[#1A3A6B]" />
                  </div>
                  <h2 className="text-lg font-bold text-[#0A1628]">Legal & Policies</h2>
                </div>
                <ul className="space-y-2.5 border-l-2 border-[#E8F0FE] pl-4">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-2 text-sm text-[#0A1628]/70 hover:text-[#1A3A6B] transition-colors duration-200 group"
                      >
                        <ChevronRight size={14} className="text-[#4A8BCF]/50 group-hover:text-[#4A8BCF] transition-colors flex-shrink-0" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-10 p-6 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-lg text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-2 !text-white">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-sm mb-4 !text-white/80">
                Our travel experts are here to assist you with flight bookings, changes, and any questions you may have.
              </p>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-white text-[#1A3A6B] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#E8F0FE] transition-all duration-300 shadow-lg hover:scale-105"
              >
                <Phone size={16} />
                Call Us Now: {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedLink}
      />
    </>
  );
}