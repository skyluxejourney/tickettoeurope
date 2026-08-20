// app/contact/page.tsx
"use client";

import { useState } from "react";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ZoomIn,
  ZoomOut,
  Maximize
} from "lucide-react";
import { CONTACT } from "@/app/constants";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [mapZoom, setMapZoom] = useState(15);

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 1));
  };

  const handleResetZoom = () => {
    setMapZoom(15);
  };

const mapSrc = `https://www.google.com/maps/embed/v1/place?q=Alexandria+VA+22310&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=${mapZoom}`;

  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-white pt-28 pb-12">
        <div className="w-full px-4 sm:px-6 lg:px-20">
          {/* Header Section */}
          <div className="max-w-7xl mx-auto border-b border-[#E8F0FE] pb-6 mb-8">
            <h1 className="text-3xl sm:text-4xl font-light text-[#0A1628] mb-2 tracking-tight">
              Get In <span className="font-bold text-[#1A3A6B]">Touch</span>
            </h1>
            <p className="text-sm text-[#0A1628]/60 max-w-xl font-light">
              Have questions about your next adventure? We&apos;re here to help you plan the perfect journey.
            </p>
          </div>

          {/* Contact Information Grid - 4 Cards with smaller size */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Phone */}
            <div className="bg-[#F8FAFC] p-4 hover:bg-[#F1F5F9] transition-colors duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#1A3A6B] flex items-center justify-center mb-3">
                <Phone size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold text-[#0A1628]/40 uppercase tracking-wider mb-1.5">
                Phone
              </h3>
              <a 
                href={`tel:${CONTACT.phoneRaw}`} 
                className="text-xs font-medium text-[#0A1628] hover:text-[#1A3A6B] transition-colors"
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Email - Smaller box */}
            <div className="bg-[#F8FAFC] p-4 hover:bg-[#F1F5F9] transition-colors duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#1A3A6B] flex items-center justify-center mb-3">
                <Mail size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold text-[#0A1628]/40 uppercase tracking-wider mb-1.5">
                Email
              </h3>
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-xs font-medium text-[#0A1628] hover:text-[#1A3A6B] transition-colors break-all w-full"
              >
                {CONTACT.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-[#F8FAFC] p-4 hover:bg-[#F1F5F9] transition-colors duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#1A3A6B] flex items-center justify-center mb-3">
                <MapPin size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold text-[#0A1628]/40 uppercase tracking-wider mb-1.5">
                Address
              </h3>
              <p className="text-xs font-medium text-[#0A1628] leading-relaxed">
                Alexandria, VA 22310<br />
                
              </p>
            </div>

            {/* Support Hours */}
            <div className="bg-[#F8FAFC] p-4 hover:bg-[#F1F5F9] transition-colors duration-300 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#1A3A6B] flex items-center justify-center mb-3">
                <Clock size={20} className="text-white" />
              </div>
              <h3 className="text-[9px] font-semibold text-[#0A1628]/40 uppercase tracking-wider mb-1.5">
                Support Hours
              </h3>
              <p className="text-xs font-medium text-[#0A1628]">
                {CONTACT.supportHours}
              </p>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="max-w-7xl mx-auto bg-[#0A1628] p-6 text-white flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                24/7
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Support</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                100%
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Satisfaction</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ✓
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Verified</span>
            </div>
            
            <div className="hidden md:block w-px h-8 bg-white/20" />
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-base font-bold">
                ★
              </div>
              <span className="text-xs font-light uppercase tracking-wider opacity-70">Premium</span>
            </div>
          </div>

          {/* Google Maps */}
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-[#0A1628] tracking-wider uppercase flex items-center gap-2">
                <MapPin size={14} className="text-[#1A3A6B]" />
                Find Us
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 bg-[#1A3A6B] text-white hover:bg-[#2B5A9E] transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut size={14} />
                </button>
                <span className="text-[10px] font-medium text-[#0A1628]/60 min-w-[30px] text-center">
                  {mapZoom}x
                </span>
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 bg-[#1A3A6B] text-white hover:bg-[#2B5A9E] transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn size={14} />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="p-1.5 bg-[#E8F0FE] text-[#1A3A6B] hover:bg-[#DEE8F5] transition-colors"
                  title="Reset Zoom"
                >
                  <Maximize size={14} />
                </button>
                <div className="w-px h-6 bg-[#E2E8F0]" />
                <a 
                  href="https://www.google.com/maps/search/Alexandria+VA+22310"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-medium text-[#1A3A6B] hover:text-[#4A8BCF] transition-colors"
                >
                  View on Maps →
                </a>
              </div>
            </div>
            <div className="bg-[#E8F0FE] h-64 sm:h-80 md:h-96 overflow-hidden relative">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location - Alexandria, VA 22310"
              />
            </div>
            <div className="mt-1 text-[9px] text-[#0A1628]/30 text-right">
              Use + and - buttons to zoom, or scroll on the map
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}