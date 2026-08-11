"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SearchEngine from "@/components/SearchEngine";
import { Phone, Headphones } from "lucide-react";
import type { AirlineData } from "../constants";

// Define the props interface
interface AirlineHeroProps {
  airline: AirlineData;
}

export default function AirlineHero({ airline }: AirlineHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract airline name from the title
  const airlineName = airline.airline.name;
  
  // Split the title to highlight the airline name
  const titleParts = airline.hero.title.split(airlineName);

  useEffect(() => {
    // Trigger entrance animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/exclusivedeal.jpg"
          alt={`${airline.airline.name} flights - Ticket to Europe`}
          fill
          className="object-cover object-center scale-105 animate-in zoom-in duration-1000"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Blurry Gradient at Bottom - connects hero to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 backdrop-blur-[2px] z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="w-full">
          <h1
            className={`
              mb-4 sm:mb-5
              transition-all duration-700 ease-out delay-100
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
              {titleParts[0]}
              <span 
                className="text-transparent bg-clip-text italic animate-in zoom-in duration-700 delay-200"
                style={{
                  background: `linear-gradient(to right, #4A8BCF, #27548F, #3060a8)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {airlineName}
              </span>
              <span className="text-white">{titleParts[1]}</span>
            </span>
          </h1>

          <p
            className={`
              text-white/70 text-sm sm:text-base md:text-lg italic w-full mb-4 sm:mb-6 font-light tracking-wide
              transition-all duration-700 ease-out delay-200
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {airline.hero.disclaimer}
          </p>

          <p
            className={`
              text-white/80 text-sm sm:text-base md:text-lg italic w-full mb-6 sm:mb-8 font-light tracking-wide leading-relaxed
              transition-all duration-700 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {airline.hero.subtitle}
          </p>

          <div
            className={`
              relative z-20 w-full
              transition-all duration-700 ease-out delay-400
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 hover:text-[#4A8BCF]/60 transition-all duration-700 cursor-pointer z-20
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        style={{ transitionDelay: "500ms" }}
      >
        <div className="w-4 h-6 border border-white/20 rounded-full flex justify-center p-1">
          <div className="w-0.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* Professional Floating Call Widget - chat card is inside the button */}
      <div
        className={`
          fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
        `}
        style={{ transitionDelay: "600ms" }}
      >
        <a
          href={`tel:${airline.hero.ctaPhone}`}
          aria-label="Call support"
          className="
            group relative flex h-16 w-16 items-center justify-center
            rounded-full
            bg-gradient-to-br from-[#1A3A6B] via-[#27548F] to-[#4A8BCF]
            text-white
            shadow-[0_12px_32px_rgba(26,58,107,0.38)]
            transition-all duration-400 
            ease-[cubic-bezier(0.34,1.56,0.64,1)]
            hover:scale-110
            hover:shadow-[0_20px_45px_rgba(26,58,107,0.48)]
            focus:outline-none focus:ring-4 focus:ring-[#4A8BCF]/30
            active:scale-95
            will-change-transform
          "
        >
          {/* Chat Card - positioned slightly higher, appears only when button is hovered */}
          <div
            className="
              absolute right-full mr-3 top-1/2 -translate-y-[70%]
              hidden sm:block
              w-[260px]
              rounded-sm 
              border border-gray-200/80
              bg-white
              p-4
              shadow-[0_20px_60px_rgba(15,23,42,0.18)]
              opacity-0
              translate-x-4
              scale-95
              pointer-events-none
              transition-all duration-400 
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:opacity-100
              group-hover:translate-x-0
              group-hover:scale-100
              group-hover:pointer-events-auto
              will-change-transform
            "
          >
            <div className="flex items-start gap-3">
              {/* Support Icon with subtle animation */}
              <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4FF] transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-[#4A8BCF]/20 animate-ping"></span>
                <Headphones className="relative z-10 h-5 w-5 text-[#1A3A6B] transition-transform duration-300 group-hover:rotate-12" />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                  </span>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    24/7 Call Assistance
                  </p>
                </div>

                <p className="text-base font-bold text-gray-900 group-hover:text-[#1A3A6B] transition-colors duration-300">
                  {airline.hero.ctaPhone}
                </p>

                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Flight booking, changes and cancellations.
                </p>
              </div>
            </div>
          </div>

          {/* Wave Rings - with dark/colored borders for visibility */}
          <span className="absolute inset-0 rounded-full border-2 border-[#4A8BCF]/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-[#4A8BCF]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-[#4A8BCF]/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          {/* Inner Glass Circle with improved hover effect */}
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          {/* Hover glow effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4A8BCF]/0 to-[#1A3A6B]/0 group-hover:from-[#4A8BCF]/30 group-hover:to-[#1A3A6B]/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}