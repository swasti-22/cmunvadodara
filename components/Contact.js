"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can participate in Concord MUN Vadodara 2026?",
    answer: "Concord MUN 2026 is open to students from Grade 8 to undergraduate/postgraduate university levels. Delegations can apply as part of school/college teams, or individuals can apply as independent delegates.",
  },
  {
    question: "What are the registration fees and what do they include?",
    answer: "The registration fee is INR 2,900 per delegate. This is inclusive of entry to all committee sessions, official delegate kits, 7 gourmet meals (breakfasts, lunches, high teas on both days, plus the social evening dinner), and certified credentials signed by the Secretariat.",
  },
  {
    question: "Are country and committee allocations assigned on a first-come, first-served basis?",
    answer: "Yes. Allocations are assigned strictly based on the applicant's experience, preference rank, and the order of complete payment registration. Early registration increases the likelihood of securing preferred portfolios. Lists will be officially released on 1st August 2026.",
  },
  {
    question: "Is accommodation provided for outstation delegates?",
    answer: "Accommodation is not included in the standard registration fee. However, we have partnered with our venue, The Fern Residency Vadodara, to offer exclusive discounted room rates for Concord delegates. Details can be requested during registration.",
  },
  {
    question: "What is the official dress code for the conference?",
    answer: "The dress code is strictly Western Formal Attire (suits, blazers, formal trousers, formal shirts, dresses) for Day 1 and traditional Indian Formal Attire (sherwanis, kurtas, sarees, salwars) for Day 2. Casual wear, sneakers, and t-shirts are prohibited.",
  },
  {
    question: "How are meals arranged, and what dietary options are available?",
    answer: "We provide 7 gourmet meals prepared by The Fern Residency's executive chefs. Spreads include morning breakfasts, high tea networks, and lunch buffets on both days, plus a formal social evening dinner. Clear vegetarian, vegan, and allergen-free items are labeled.",
  },
  {
    question: "What is the cancellation and refund policy?",
    answer: "Cancellations made before 25th July 2026 are eligible for a 50% refund. No refunds will be issued for cancellations requested after 25th July 2026, as resource provisioning and allocation slots will have been locked with the venue.",
  },
  {
    question: "How does the blockchain certificate verification system work?",
    answer: "Each certificate features an encrypted digital hash ID registered on a secure registry. After the event, universities, employers, and advisors can scan the QR code on the certificate or query the ID on our portal to verify the delegate's participation and honors instantly.",
  },
  {
    question: "Can parents accompany delegates to the venue?",
    answer: "Parents are welcome to visit the venue lobby and dining spaces. However, the committee chambers themselves are restricted strictly to registered delegates, advisors, and secretariat members to maintain parliamentary decorum. A dedicated Parent Lounge is available for waiting.",
  },
  {
    question: "What benefits do you offer for school partnerships and bulk delegations?",
    answer: "We offer dedicated benefits for institutional partners, including priority bulk allocation queues (for delegations of 10 to 50+ students), complimentary premium lounge access for teacher chaperones, eligibility for the prestigious 'Best Delegation Award', and highlights in our official media publications.",
  },
  {
    question: "How does participating in Concord MUN benefit students academically and developmentally?",
    answer: "Concord MUN provides high-value educational impact by building public speaking confidence, teaching critical research and analytical drafting skills, developing leadership and consensus building, and offering certified digital credentials that significantly boost college resumes.",
  },
];

export default function Contact() {
  const [activeFormTab, setActiveFormTab] = useState("individual");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Registration & Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Join the Assembly
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Urgency Deadline Banner */}
        <div className="bg-maroon border border-gold/40 py-3.5 px-6 text-center max-w-4xl mx-auto rounded-sm shadow-md mb-8">
          <span className="text-gold font-serif text-xs md:text-sm tracking-wider uppercase font-bold block sm:inline">
            ✦ Regular Registrations are Now Open ✦
          </span>
          <span className="text-parchment text-xs font-light tracking-wide sm:ml-2">
            Apply today to secure your country portfolio.
          </span>
        </div>

        {/* Participating Institutions Strip */}
        <div className="text-center space-y-3 max-w-4xl mx-auto mb-10 border-t border-b border-thin-gold/25 py-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-almost-black/50 font-semibold block">
            Trusted by delegates from premier institutions
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest font-serif font-semibold text-gold-dark/80">
            <span>DPS Vadodara</span>
            <span className="text-thin-gold/40">•</span>
            <span>Navrachana University</span>
            <span className="text-thin-gold/40">•</span>
            <span>MSU Vadodara</span>
            <span className="text-thin-gold/40">•</span>
            <span>The Heritage School</span>
            <span className="text-thin-gold/40">•</span>
            <span>St. Kabir School</span>
            <span className="text-thin-gold/40">•</span>
            <span>Vikas International</span>
          </div>
        </div>

        {/* Pricing Block & Inclusions */}
        <div className="max-w-4xl mx-auto mb-12 border border-thin-gold bg-parchment-dark/30 p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-thin-gold/40 pb-6 md:pb-0 md:pr-6 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold block">
                Delegate Pass
              </span>
              <span className="font-serif text-3xl font-bold text-maroon block mt-1">
                ₹2,900
              </span>
              <span className="text-[10px] text-almost-black/60 uppercase tracking-wider block mt-1">
                Per Representative
              </span>
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-almost-black">
                Registration Inclusions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-almost-black/85 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>7 Gourmet Meals (Fern Residency buffets)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Premium Leatherette Kit & Pen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Entry to all committee sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Blockchain Certificate verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Toggle UI & Embedded Iframe Container */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {/* Tab Toggles */}
          <div className="flex border-b border-thin-gold/45">
            <button
              onClick={() => setActiveFormTab("individual")}
              className={`flex-1 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFormTab === "individual"
                  ? "bg-maroon text-parchment border-t border-l border-r border-gold"
                  : "bg-parchment-dark/30 text-almost-black hover:bg-parchment-dark/50 border-b border-thin-gold/45"
              }`}
            >
              Individual Registration
            </button>
            <button
              onClick={() => setActiveFormTab("team")}
              className={`flex-1 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFormTab === "team"
                  ? "bg-maroon text-parchment border-t border-l border-r border-gold"
                  : "bg-parchment-dark/30 text-almost-black hover:bg-parchment-dark/50 border-b border-thin-gold/45"
              }`}
            >
              Team Delegation Registration
            </button>
          </div>

          {/* Iframe Viewport Container */}
          <div className="border border-gold bg-[#1e1b18] p-4 shadow-lg rounded-sm relative overflow-hidden">
            {/* Elegant Header Decors inside dark card */}
            <div className="flex justify-between items-center text-[10px] text-gold uppercase tracking-widest mb-3 pb-2 border-b border-gold/20">
              <span>Secure Registration Node</span>
              <span className="animate-pulse flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Live Portal
              </span>
            </div>

            {activeFormTab === "individual" ? (
              <div className="space-y-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf3KIV8_uB5b6hFPAI1hpq0cTMy106TobxRMyRDSqPK4Ub9Cw/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full bg-white rounded-sm shadow-inner"
                  title="Individual Delegate Registration Form"
                >
                  Loading form...
                </iframe>
                <div className="text-center pt-2">
                  <a
                    href="https://forms.gle/RgJRsuojFsCxyk1a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-wider underline decoration-dashed"
                  >
                    Open Form in New Tab ↗
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScWbmzFQYU6QVkzwvJRkWII1dVC7pFLqeBEm5pF8bKYUA5ttg/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full bg-white rounded-sm shadow-inner"
                  title="Team Delegation Registration Form"
                >
                  Loading form...
                </iframe>
                <div className="text-center pt-2">
                  <a
                    href="https://forms.gle/Mys3tWFEWRg6USqi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-wider underline decoration-dashed"
                  >
                    Open Form in New Tab ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Row: FAQs & Venue Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-thin-gold/30 pt-16 mt-8">
          
          {/* FAQ Accordion Section */}
          <div id="faq" className="space-y-4 scroll-mt-24">
            <h3 className="text-xl text-maroon font-serif uppercase tracking-wider mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gold/25 scrollbar-track-transparent">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;
                return (
                  <div
                    key={index}
                    className="border border-thin-gold bg-parchment-dark/15 rounded-sm transition-all duration-300 shadow-sm"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span className="text-xs font-serif uppercase tracking-wide text-maroon font-bold pr-4">
                        {faq.question}
                      </span>
                      <span className="text-gold text-sm font-serif">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 border-t border-thin-gold/20 text-xs font-light text-almost-black/85 leading-relaxed font-sans">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Venue & Location Coordinates */}
          <div className="flex flex-col justify-between space-y-8">
            {/* Conference Venue */}
            <div className="border border-thin-gold p-8 bg-parchment-dark/10 space-y-6">
              <h3 className="text-xl text-maroon font-serif uppercase tracking-wider">
                Conference Venue
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">✦</span>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-almost-black">The Fern Residency Vadodara</strong>
                    <span className="text-sm font-light text-almost-black/85 leading-relaxed">
                      Near Station, Alkapuri, Vadodara, Gujarat 390002. A premium business hotel located in the heart of Vadodara, featuring world-class conferencing amenities, luxury chambers, and executive dining.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Coordinates & Google Map */}
            <div className="border border-thin-gold/80 p-3 bg-parchment-dark/30 flex-1 flex flex-col justify-between min-h-[200px]">
              <div className="border border-dashed border-gold/40 flex-1 flex flex-col items-center justify-center text-center p-6 bg-parchment relative overflow-hidden">
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <svg className="w-full h-full text-gold" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" />
                    <path d="M10,50 L90,50 M50,10 L50,90" />
                  </svg>
                </div>
                
                <div className="z-10 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block">
                    Geographic Coordinates
                  </span>
                  <p className="text-xs text-almost-black/60 font-mono">
                    22.3112° N, 73.1812° E
                  </p>
                  <a
                    href="https://maps.google.com/?q=The+Fern+Residency+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-gold hover:bg-gold/15 text-almost-black px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest rounded-sm transition-colors duration-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
