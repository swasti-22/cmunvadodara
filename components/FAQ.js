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
    answer: "The delegation fees are non-refundable under all circumstances.",
  },
  {
    question: "How does the blockchain certificate verification system work?",
    answer: "Each certificate features an encrypted digital hash ID registered on a secure registry. After the event, universities, employers, and advisors can scan the QR code on the certificate or query the ID on our portal to verify the delegate's participation and honors instantly.",
  },
  {
    question: "Can parents accompany delegates to the venue?",
    answer: "Parents are welcome to visit the venue lobby and dining spaces. However, the committee chambers themselves are restricted strictly to registered delegates, advisors, and secretariat members to maintain parliamentary decorum. A dedicated Parent Lounge is available for waiting.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-4xl mx-auto z-10 relative lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
            Inquiries & Assistance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Frequently Asked Questions
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-gold-dark/40" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-gold-dark/40" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="border border-thin-gold bg-parchment-dark/15 rounded-sm transition-all duration-300 shadow-sm"
              >
                {/* Accordion Toggle Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm md:text-base font-serif uppercase tracking-wide text-maroon font-bold pr-4">
                    {faq.question}
                  </span>
                  <span className="text-gold text-lg font-serif">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Animated Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-thin-gold/20 text-sm font-light text-almost-black/85 leading-relaxed font-sans">
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
    </section>
  );
}
