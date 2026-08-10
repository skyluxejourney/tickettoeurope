"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp, Phone, HelpCircle } from "lucide-react";
import type { AirlineData } from "../constants";

interface AirlineFAQProps {
  airline: AirlineData;
}

export default function AirlineFAQ({ airline }: AirlineFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Get data from airline object
  const airlineName = airline.airline.name;
  const phoneNumber = airline.airline.phoneNumber || "+1-888-845-0220";
  
  // Get ONLY non-policy FAQs (general questions)
  const generalFaqs = airline.faqs.filter((faq) => {
    const question = faq.question.toLowerCase();
    return (
      !question.includes('policy') &&
      !question.includes('change') &&
      !question.includes('cancel') &&
      !question.includes('reschedule') &&
      !question.includes('refund') &&
      !question.includes('fee') &&
      !question.includes('same-day') &&
      !question.includes('modification')
    );
  });

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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // If no general FAQs, don't render the section
  if (generalFaqs.length === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="py-4 sm:py-6 bg-white border-t border-[#E2E8F0] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left Aligned */}
        <div className="mb-6">
          <div
            className={`
              flex items-center gap-2 mb-2
              transition-all duration-700
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            <HelpCircle className="w-5 h-5 text-[#1A3A6B]" />
            <span className="text-xs font-semibold text-[#1A3A6B] uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2
            className={`
              text-2xl sm:text-3xl font-bold text-[#0A1628]
              transition-all duration-700 delay-100
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            Frequently Asked Questions
          </h2>
          <p
            className={`
              text-[#0A1628]/60 text-sm mt-1
              transition-all duration-700 delay-150
              ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
            `}
          >
            Find answers to the most common questions about {airlineName} flights
          </p>
          <div
            className={`
              w-12 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] mt-2
              transition-all duration-700 delay-200
              ${isVisible ? "opacity-100 w-12" : "opacity-0 w-0"}
            `}
          />
        </div>

        {/* FAQ List - Full Width */}
        <div className="space-y-2">
          {generalFaqs.map((faq, index) => (
            <div
              key={index}
              className={`
                bg-[#F5F9FF] border border-[#E2E8F0] 
                transition-all duration-300 overflow-hidden
                ${openIndex === index ? 'border-[#4A8BCF] shadow-md' : 'hover:border-[#4A8BCF]/30 hover:shadow-sm'}
                ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}
              `}
              style={{ transitionDelay: `${250 + index * 50}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-5 py-3 flex items-center justify-between gap-4 text-left group"
              >
                <span className="text-sm sm:text-base font-semibold text-[#0A1628] flex-1 transition-colors duration-300 group-hover:text-[#1A3A6B]">
                  {faq.question}
                </span>
                <span className={`
                  flex-shrink-0 w-7 h-7 flex items-center justify-center
                  transition-all duration-300
                  ${openIndex === index 
                    ? 'bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] text-white' 
                    : 'bg-[#E8F0FE] text-[#1A3A6B]'
                  }
                  group-hover:scale-110
                `}>
                  {openIndex === index ? (
                    <ChevronUp size={16} className="transition-transform duration-300" />
                  ) : (
                    <ChevronDown size={16} className="transition-transform duration-300" />
                  )}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-5 pb-4 animate-in slide-in-from-top-2 duration-300">
                  <div className="pt-3 border-t border-[#E2E8F0]">
                    <p className="text-sm text-[#0A1628]/70 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-[#1A3A6B]">
                      <Phone size={14} className="animate-pulse" />
                      <span>Need help? Call us: </span>
                      <a 
                        href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                        className="font-semibold hover:text-[#4A8BCF] transition-colors duration-300 hover:scale-105 inline-block"
                      >
                        {phoneNumber}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`
            mt-6 text-left
            transition-all duration-700 delay-300
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <p className="text-sm text-[#0A1628]/60">
            Still have questions? Our travel experts are here to help you 24/7
          </p>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] text-white font-semibold hover:from-[#2B5A9E] hover:to-[#7BAEE0] transition-all duration-300 shadow-lg shadow-[#1A3A6B]/20 hover:scale-105 active:scale-95"
          >
            <Phone size={16} className="animate-in zoom-in duration-500" />
            Call Us Now: {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}