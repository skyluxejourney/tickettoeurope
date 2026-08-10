"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
} from "lucide-react";
import ContactModal from "./ContactModal";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, CONTACT, BRAND } from "@/app/constants";

const navItems = [
  { name: "FLIGHTS", isActive: true },
  { name: "LIVE HELP?" },
  { name: "BLOG" },
  { name: "CUSTOMER SUPPORT" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: { name: string; isActive?: boolean }) => {
    if (item.isActive) {
      return;
    }
    
    setSelectedTab(item.name);
    setShowModal(true);
    
    if (open) {
      setOpen(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedTab("");
  };

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 px-4 sm:px-6
          transition-all duration-500 ease-in-out
          ${scrolled ? "pt-1" : "pt-4"}
        `}
      >
        <div
          className={`
            max-w-[90vw] mx-auto rounded-lg border transition-all duration-500 ease-in-out
            ${scrolled
              ? "border-[#E2E8F0] bg-white shadow-lg"
              : "border-[#E2E8F0] bg-white shadow-md"
            }
          `}
        >
          <div
            className={`
              flex items-center justify-between px-3 sm:px-4 md:px-5
              transition-all duration-500 ease-in-out
              ${scrolled ? "py-1.5" : "py-2"}
            `}
          >
            {/* LOGO - Ticket to Europe with Homepage Link */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group cursor-pointer flex-shrink-0">
              <div className="relative flex-shrink-0">
                <Image
                  src={BRAND.logo}
                  alt={BRAND.name}
                  width={scrolled ? 30 : 34}
                  height={scrolled ? 30 : 34}
                  className="transition-all duration-500 group-hover:scale-105"
                  priority
                />
              </div>

              <div>
                <h1
                  className={`
                    font-bold
                    text-[#0A1628]
                    tracking-tight
                    leading-tight
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-sm" : "text-base"}
                  `}
                >
                  {BRAND.name}
                </h1>
                <p
                  className={`
                    text-[#4A8BCF]
                    leading-tight
                    font-medium
                    tracking-[0.15em]
                    uppercase
                    transition-all duration-500 ease-in-out
                    ${scrolled ? "text-[6px]" : "text-[7px]"}
                  `}
                >
                  {BRAND.tagline}
                </p>
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center justify-center flex-1 gap-2 px-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={`
                    relative
                    font-medium
                    transition-all
                    duration-200
                    px-2.5
                    py-1.5
                    text-xs
                    tracking-wider
                    ${
                      item.isActive
                        ? "text-[#1A3A6B]"
                        : "text-[#0A1628]/70 hover:text-[#1A3A6B]"
                    }
                  `}
                >
                  {item.name}
                  {item.isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] rounded-full" />
                  )}
                  {!item.isActive && (
                    <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-[#1A3A6B] to-[#4A8BCF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* RIGHT SIDE - Call Only Deals */}
            <div className="hidden lg:flex items-center">
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className={`
                  flex items-center gap-2
                  bg-[#1A3A6B]
                  hover:bg-[#2B5A9E]
                  transition-all duration-300
                  rounded-lg
                  px-3 py-1.5
                  cursor-pointer
                  hover:scale-105 active:scale-95
                  shadow-md
                  hover:shadow-lg
                  group
                `}
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={12} className="text-white" />
                </div>
                
                <div className="flex flex-col">
                  <span className="text-[7px] font-bold text-white/70 tracking-[0.1em] uppercase">
                    Call Only Deals
                  </span>
                  <span className="text-[10px] font-bold text-white">
                    {CONTACT.phone}
                  </span>
                </div>
              </a>
            </div>

            {/* MOBILE/TABLET BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="
                lg:hidden
                text-[#0A1628]
                hover:text-[#1A3A6B]
                transition-colors
                p-1.5
                rounded-lg
                hover:bg-[#E8F0FE]
                flex-shrink-0
              "
              aria-label="Toggle menu"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          {open && (
            <div
              className="
                lg:hidden
                px-4 sm:px-6
                pb-4
                space-y-1
                animate-in
                slide-in-from-top-2
                duration-200
              "
            >
              <div className="pt-2 border-t border-[#E8F0FE]">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleNavClick(item);
                    }}
                    className={`
                      w-full
                      flex items-center justify-between
                      transition-all
                      duration-200
                      px-3 py-2.5
                      rounded-lg
                      text-sm
                      font-medium
                      tracking-wider
                      ${
                        item.isActive
                          ? "text-[#1A3A6B] bg-[#E8F0FE]"
                          : "text-[#0A1628]/70 hover:text-[#1A3A6B] hover:bg-[#E8F0FE]"
                      }
                    `}
                  >
                    <span>{item.name}</span>
                    {item.isActive && (
                      <span className="w-1 h-1 rounded-full bg-[#1A3A6B]" />
                    )}
                  </button>
                ))}
                
                <div className="mt-3 pt-3 border-t border-[#E8F0FE]">
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="flex items-center gap-3 bg-[#1A3A6B] rounded-lg px-4 py-3 hover:bg-[#2B5A9E] transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-[9px] font-medium text-white/70 tracking-[0.1em] uppercase">
                        Call Only Deals
                      </p>
                      <p className="text-xs font-bold text-white">
                        {CONTACT.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal}
        onClose={closeModal}
        selectedItem={selectedTab}
      />
    </>
  );
}