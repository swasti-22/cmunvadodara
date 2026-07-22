"use client";

import { motion } from "framer-motion";

export default function ForParents({ isOpen, onClose }) {
  if (!isOpen) return null;

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
                Guardian Reassurance Portal
              </span>
              <h3 className="text-3xl text-maroon font-serif font-bold uppercase tracking-wider">
                For Parents
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-gold/45 text-maroon hover:bg-gold/10 transition-colors duration-300 rounded-sm focus:outline-none"
              aria-label="Close parent panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Academic Benefits */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
              Developmental & Academic Impact
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Public Speaking", desc: "Builds confidence in addressing assemblies, structuring arguments, and debating complex topics." },
                { title: "Critical Thinking", desc: "Teaches analytical research, drafting formal resolutions, and evaluating geopolitical scenarios." },
                { title: "Consensus Building", desc: "Develops negotiation, leadership, compromise, and mutual cooperation skills." },
                { title: "Academic Prestige", desc: "Provides high-value certified credentials signed by international advisors, boosting college resumes." },
              ].map((benefit, idx) => (
                <div key={idx} className="border border-thin-gold/40 p-4 bg-parchment-dark/30">
                  <h5 className="text-xs font-serif uppercase tracking-wider font-bold text-maroon">
                    {benefit.title}
                  </h5>
                  <p className="text-[11px] text-almost-black/80 font-light font-sans mt-1.5 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Safety & Supervision */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
              Supervision & Venue Safety
            </h4>
            <div className="border border-thin-gold/50 p-6 bg-parchment-dark/20 space-y-4 leading-relaxed font-sans text-xs font-light text-almost-black/95">
              <p>
                <strong>Secure Hospitality Environment:</strong> The conference is hosted exclusively inside the luxury chambers of **The Fern Residency Vadodara**, a premier business hotel with 24/7 CCTV surveillance, secure keycard entry, and professional security staff.
              </p>
              <p>
                <strong>Strict Supervision Ratio:</strong> We maintain a **1:12 coordinator-to-delegate ratio**. Our organizing team is always present inside the halls, lobbies, and dining zones to guide and safeguard delegates.
              </p>
              <p>
                <strong>Medical & Dietary Care:</strong> A dedicated medical first-aid kit is available on site. All meals (breakfasts, lunches, high teas) are hygienically prepared by the hotel's expert chefs, offering clear vegetarian, vegan, and allergic options.
              </p>
            </div>
          </div>

          {/* Emergency Directory */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
              Organizing Team Contacts
            </h4>
            <div className="border border-dashed border-gold/45 p-6 text-center bg-parchment-dark/15 rounded-sm">
              <span className="text-xs font-light text-almost-black/75 font-sans block">
                Will be shared with you before the event.
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-thin-gold/50 flex gap-4 mt-8">
          <a
            href="/decks/Concord_MUN_Vadodara_2026_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 py-4 text-center block"
          >
            View official brochure
          </a>
          <a
            href="/decks/Concord_MUN_Vadodara_2026_Brochure.pdf"
            download="Concord_MUN_Vadodara_2026_Brochure.pdf"
            className="btn-primary flex-1 py-4 text-center block"
          >
            Download official brochure
          </a>
        </div>
      </motion.div>
    </>
  );
}
