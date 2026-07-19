"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import GlobalLoader from "@/components/GlobalLoader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyChoose from "@/components/WhyChoose";
import FirstMUN from "@/components/FirstMUN";
import Committees from "@/components/Committees";
import Leadership from "@/components/Leadership";



import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ForParents from "@/components/ForParents";
import SchoolPartnerships from "@/components/SchoolPartnerships";
import FAQPanel from "@/components/FAQPanel";

export default function Home() {
  const [parentsOpen, setParentsOpen] = useState(false);
  const [schoolsOpen, setSchoolsOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <>
      <GlobalLoader />
      <Navbar 
        onOpenParents={() => setParentsOpen(true)} 
        onOpenSchools={() => setSchoolsOpen(true)} 
        onOpenFAQ={() => setFaqOpen(true)}
      />
      <main className="flex-grow">
        <Hero />
        <About />
        <WhyChoose />
        <FirstMUN />
        <Committees />
        <Leadership />



        <Gallery />
        <Contact />
      </main>
      <Footer 
        onOpenParents={() => setParentsOpen(true)} 
        onOpenSchools={() => setSchoolsOpen(true)} 
        onOpenFAQ={() => setFaqOpen(true)}
      />
      
      {/* Dynamic Slide-over panels */}
      <AnimatePresence>
        {parentsOpen && (
          <ForParents isOpen={parentsOpen} onClose={() => setParentsOpen(false)} />
        )}
        {schoolsOpen && (
          <SchoolPartnerships isOpen={schoolsOpen} onClose={() => setSchoolsOpen(false)} />
        )}
        {faqOpen && (
          <FAQPanel isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
