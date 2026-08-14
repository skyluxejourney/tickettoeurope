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

  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <TravelDeals />
        <ExclusiveDeals  />
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