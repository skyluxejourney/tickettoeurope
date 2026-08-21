"use client";

import { useState, useEffect, useRef } from "react";
import SearchEngine from "./SearchEngine";
import { Phone, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { CONTACT } from "../app/constants";

// Slides data – replace video sources with your own
const slides = [
  {
    id: 0,
    video: "/videos/slide1.mp4",
    tagline: "FLY BEYOND BOUNDARIES",
    heading: (
      <>
        WHERE JOURNEYS
        <br />
        <span className="relative inline-block">
          <span className="relative z-10 italic px-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4A8BCF] to-white">
            TAKE FLIGHT
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4A8BCF]/60 via-white/40 to-[#4A8BCF]/60 rounded-full blur-sm" />
        </span>
      </>
    ),
    subtitle: "Discover seamless travel experiences, curated for your comfort and style.",
  },
  {
    id: 1,
    video: "/videos/slide2.mp4",
    tagline: "EXPLORE THE UNKNOWN",
    heading: (
      <>
        UNCOVER HIDDEN
        <br />
        <span className="relative inline-block">
          <span className="relative z-10 italic px-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4A8BCF] to-white">
            PARADISES
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4A8BCF]/60 via-white/40 to-[#4A8BCF]/60 rounded-full blur-sm" />
        </span>
      </>
    ),
    subtitle: "Off‑the‑beaten‑path destinations that will leave you breathless.",
  },
  {
    id: 2,
    video: "/videos/slide3.mp4",
    tagline: "LUXURY REDEFINED",
    heading: (
      <>
        EXPERIENCE THE
        <br />
        <span className="relative inline-block">
          <span className="relative italic z-10 px-5 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#4A8BCF] to-white">
            EXTRAORDINARY
          </span>
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4A8BCF]/60 via-white/40 to-[#4A8BCF]/60 rounded-full blur-sm" />
        </span>
      </>
    ),
    subtitle: "Elevate your journey with bespoke services and impeccable attention to detail.",
  },
  {
    id: 3,
    video: "/videos/slide4.mp4",
    tagline: "ADVENTURE AWAITS",
    heading: (
      <>
        YOUR NEXT
        <br />
        <span className="relative inline-block">
          <span className="relative z-10 text-transparent italic px-5 bg-clip-text bg-gradient-to-r from-white via-[#4A8BCF] to-white">
            GREAT ESCAPE
          </span> 
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-[#4A8BCF]/60 via-white/40 to-[#4A8BCF]/60 rounded-full blur-sm" />
        </span>
      </>
    ),
    subtitle: "From mountain peaks to ocean depths, make every moment count.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Initial mount animation
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Auto‑play every 3 seconds
  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length);
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide]);

  const handleMouseEnter = () => stopAutoPlay();
  const handleMouseLeave = () => startAutoPlay();

  const current = slides[currentSlide];

  useEffect(() => {
    const activeVideo = videoRefs.current[currentSlide];
    if (activeVideo) {
      activeVideo.play().catch(() => {});
    }
    videoRefs.current.forEach((video, idx) => {
      if (idx !== currentSlide && video) {
        video.pause();
      }
    });
  }, [currentSlide]);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ---------- BACKGROUND VIDEOS WITH ZOOM TRANSITION ---------- */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`
              absolute inset-0 
              transition-all duration-500 ease-in-out
              will-change-transform
              ${idx === currentSlide 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
              }
            `}
            style={{ transformOrigin: "center" }}
          >
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              src={slide.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Dark overlays for text readability */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-white/10" />
          </div>
        ))}
      </div>

      {/* ---------- BLURRY BOTTOM GRADIENT ---------- */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-48 md:h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 backdrop-blur-[2px] z-10" />

      {/* ---------- CONTENT (TEXT + SEARCH) ---------- */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p
            className={`
              text-[11px] sm:text-xs md:text-sm font-semibold text-white/90 tracking-[0.3em] uppercase mb-3 sm:mb-4
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            key={`tagline-${currentSlide}`}
          >
            {current.tagline}
          </p>

          <h1
            className={`
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-4 sm:mb-6
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            key={`heading-${currentSlide}`}
          >
            {current.heading}
          </h1>

          <p
            className={`
              text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 font-light tracking-wide leading-relaxed
              transition-all duration-700 ease-out
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
            key={`subtitle-${currentSlide}`}
          >
            {current.subtitle}
          </p>

          <div
            className={`
              relative z-20 w-full max-w-6xl mx-auto
              transition-all duration-700 ease-out delay-300
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
            `}
          >
            <SearchEngine />
          </div>
        </div>
      </div>

      {/* ---------- ARROW BUTTONS - hidden on mobile, visible sm and up ---------- */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="
          hidden sm:block
          absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30
          text-white/80 hover:text-white transition-colors duration-300
          focus:outline-none drop-shadow-lg
        "
      >
        <ChevronLeft className="h-8 w-8 sm:h-10 sm:w-10" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="
          hidden sm:block
          absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30
          text-white/80 hover:text-white transition-colors duration-300
          focus:outline-none drop-shadow-lg
        "
      >
        <ChevronRight className="h-8 w-8 sm:h-10 sm:w-10" />
      </button>

      {/* ---------- DOTS - hidden on mobile, visible sm and up ---------- */}
      <div className="hidden sm:flex absolute bottom-24 left-1/2 -translate-x-1/2 z-30 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`
              rounded-full transition-all duration-300
              ${idx === currentSlide 
                ? "w-6 h-2.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF]" 
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

      {/* ---------- SCROLL INDICATOR ---------- */}
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

      {/* ---------- FLOATING CALL WIDGET (unchanged) ---------- */}
      <div
        className={`
          fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50
          transition-all duration-700 ease-out
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}
        `}
        style={{ transitionDelay: "600ms" }}
      >
        <a
          href={`tel:${CONTACT.phoneRaw}`}
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
              <div className="relative mt-0.5 flex h-10 w-10 items-center justify-center rounded-full bg-[#EEF4FF] transition-transform duration-300 group-hover:scale-105">
                <span className="absolute inset-0 rounded-full bg-[#4A8BCF]/20 animate-ping"></span>
                <Headphones className="relative z-10 h-5 w-5 text-[#1A3A6B] transition-transform duration-300 group-hover:rotate-12" />
              </div>
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
                  {CONTACT.phone}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  Flight booking, changes and cancellations.
                </p>
              </div>
            </div>
          </div>

          <span className="absolute inset-0 rounded-full border-2 border-[#4A8BCF]/60 animate-[ping_2s_ease-in-out_infinite]"></span>
          <span className="absolute inset-[-4px] rounded-full border-2 border-[#4A8BCF]/40 animate-[pulse_2.5s_ease-in-out_infinite_0.5s]"></span>
          <span className="absolute inset-[-8px] rounded-full border-2 border-[#4A8BCF]/25 animate-[pulse_3s_ease-in-out_infinite_1s]"></span>
          
          <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/12 backdrop-blur-md border border-white/20 group-hover:bg-white/20 transition-all duration-300">
            <Phone className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          </span>

          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#4A8BCF]/0 to-[#1A3A6B]/0 group-hover:from-[#4A8BCF]/30 group-hover:to-[#1A3A6B]/30 transition-all duration-500 blur-xl"></span>
        </a>
      </div>
    </section>
  );
}