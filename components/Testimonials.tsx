"use client";

import { Star, Quote, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { BRAND } from "@/app/constants"; 

export default function TestimonialsSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York, USA",
      shortText: `Absolutely incredible experience! ${BRAND.name} made our dream vacation to Bali seamless.`,
      fullText: `Absolutely incredible experience! ${BRAND.name} made our dream vacation to Bali seamless. The attention to detail was outstanding and the booking process was so smooth. From the moment we booked until we returned home, everything was perfectly organized. The team went above and beyond to ensure we had the best experience possible. I can't recommend them enough!`,
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "London, UK",
      shortText: `I've booked over 10 trips with ${BRAND.name} and every single one was perfect.`,
      fullText: `I've booked over 10 trips with ${BRAND.name} and every single one was perfect. Their customer support is unmatched and they always find the best deals. The prices are competitive, the service is exceptional, and the entire experience is stress-free. Whether it's a quick weekend getaway or a month-long adventure, they never disappoint. They've earned a customer for life!`,
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Davis",
      location: "Sydney, Australia",
      shortText: `From booking to returning home, everything was handled perfectly.`,
      fullText: `From booking to returning home, everything was handled perfectly. I'll never travel with anyone else. Highly recommend ${BRAND.name} to everyone! The team is professional, responsive, and genuinely cares about their customers. They made our family vacation unforgettable and we've already booked our next trip with them. If you're looking for a travel agency you can trust, look no further.`,
      rating: 5,
    },
  ];

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-10 lg:py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Heading - Left Aligned */}
          <div className="mb-4">
            <div
              className={`
                inline-flex items-center gap-2 bg-[#E8F0FE] px-4 py-1.5 mb-4 transition-all duration-700
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
            >
              <Quote size={16} className="text-[#1A3A6B]" />
              <span className="text-[#1A3A6B] text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Testimonials
              </span>
            </div>
            <h2
              className={`
                text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0A1628] leading-tight
                transition-all duration-700 delay-100
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
            >
              What Our Customers Say About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF]">
                {BRAND.name}
              </span>
            </h2>
            <div
              className={`
                w-12 h-1 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] mt-3 transition-all duration-700 delay-200
                ${isVisible ? "opacity-100 w-12" : "opacity-0 w-0"}
              `}
            />
          </div>

          {/* Content - Left Aligned */}
          <div
            className={`
              mb-6 sm:mb-8 transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <p className="text-[#0A1628]/70 text-sm sm:text-base max-w-2xl">
              Nothing speaks louder than the voices of our happy travelers. Here's
              what real customers are saying about their experience booking with us.
            </p>
          </div>
        </div>

        {/* Three Testimonial Cards */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  bg-[#F5F9FF] p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#4A8BCF]/30 border border-[#E2E8F0]
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
                `}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                {/* Rating Stars */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-[#1A3A6B] fill-[#1A3A6B] animate-in zoom-in duration-300"
                      style={{ animationDelay: `${(index + 1) * 50 + i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text - Short or Full */}
                <div className="mb-3">
                  <p className="text-[#0A1628]/80 text-sm sm:text-base leading-relaxed transition-all duration-300">
                    "{expandedId === testimonial.id ? testimonial.fullText : testimonial.shortText}"
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#0A1628] text-sm sm:text-base">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-[#1A3A6B]">
                      {testimonial.location}
                    </div>
                  </div>

                  {/* View Testimonial Link */}
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="flex items-center gap-1 text-[#1A3A6B] hover:text-[#4A8BCF] font-medium text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ml-2 hover:scale-105 active:scale-95"
                  >
                    {expandedId === testimonial.id ? (
                      <>
                        <span>Show Less</span>
                        <ChevronUp size={14} className="transition-transform duration-300 rotate-0" />
                      </>
                    ) : (
                      <>
                        <span>View Testimonial</span>
                        <ChevronDown size={14} className="transition-transform duration-300 group-hover:translate-y-0.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Expand/Collapse Animation */}
                {expandedId === testimonial.id && (
                  <div className="mt-3 pt-3 border-t border-[#E2E8F0] animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-center gap-2 text-xs text-[#0A1628]/40">
                      <Quote size={12} className="text-[#1A3A6B]" />
                      <span>Full review</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}