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
    answer: "We offer dedicated benefits for institutional partners, including priority bulk allocation queues (for delegations of 10 to 50+ students), complimentary premium lounge access for teacher chaperones, eligibility to compete for the prestigious 'Best Delegation Award', and highlights in our official media publications.",
  },
  {
    question: "How does participating in Concord MUN benefit students academically and developmentally?",
    answer: "Concord MUN provides high-value educational impact by building public speaking confidence, teaching critical research and analytical drafting skills, developing leadership and consensus building, and offering certified digital credentials that significantly boost college resumes.",
  },
];

export default function FAQPanel({ isOpen, onClose }) {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!isOpen) return null;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.65 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-almost-black"
      />

      {/* Drawer */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-2xl bg-parchment border-l border-thin-gold shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-y-auto"
      >
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-thin-gold/50 pb-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
                Inquiries & Assistance
              </span>
              <h3 className="text-3xl text-maroon font-serif font-bold uppercase tracking-wider">
                Frequently Asked Questions
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-gold/45 text-maroon hover:bg-gold/10 transition-colors duration-300 rounded-sm focus:outline-none"
              aria-label="Close FAQ panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-3.5 pr-1 max-h-[calc(100vh-220px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gold/25 scrollbar-track-transparent">
            {faqs.map((faq, index) => {
              const isFAQOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="border border-thin-gold bg-parchment-dark/15 rounded-sm transition-all duration-300 shadow-sm"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    aria-expanded={isFAQOpen}
                  >
                    <span className="text-xs md:text-sm font-serif uppercase tracking-wide text-maroon font-bold pr-4 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-gold text-sm font-serif">
                      {isFAQOpen ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isFAQOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 pt-0 border-t border-thin-gold/20 text-xs font-light text-almost-black/85 leading-relaxed font-sans">
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

        {/* Footer info */}
        <div className="pt-6 border-t border-thin-gold/50 text-center text-[10px] uppercase tracking-widest text-almost-black/60 mt-6">
          Still have questions? Email us at <a href="mailto:concordmunvadodara08@gmail.com" className="text-maroon font-bold hover:underline">concordmunvadodara08@gmail.com</a>
        </div>
      </motion.div>
    </>
  );
}
