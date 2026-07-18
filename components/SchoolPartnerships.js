"use client";

import { motion } from "framer-motion";

export default function SchoolPartnerships({ isOpen, onClose }) {
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
                Institutional Collaboration
              </span>
              <h3 className="text-3xl text-maroon font-serif font-bold uppercase tracking-wider">
                School Partnerships
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 border border-gold/45 text-maroon hover:bg-gold/10 transition-colors duration-300 rounded-sm focus:outline-none"
              aria-label="Close partnerships panel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Benefits Grid */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
              Institutional Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Bulk Registrations", desc: "Access priority bulk allocation queues, making it easy to register delegations of 10 to 50+ students." },
                { title: "Teacher Coordinator Perks", desc: "Complimentary access and premium lounge credentials for school advisors and teacher chaperones." },
                { title: "Institutional Honors", desc: "Participating institutions compete for the prestigious 'Best Delegation Award' and other institutional trophies." },
                { title: "Press Coverage", desc: "Partner schools are highlighted in our official media bulletins and event publications." },
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

          {/* Allocation Coordination */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
              Coordination & Support
            </h4>
            <div className="border border-thin-gold/50 p-6 bg-parchment-dark/20 space-y-4 leading-relaxed font-sans text-xs font-light text-almost-black/95">
              <p>
                <strong>Dedicated Relations Officer:</strong> Every partner school is assigned a designated Secretariat member who manually oversees allocation swaps, billing procedures, and delegate queries.
              </p>
              <p>
                <strong>Invoicing & Payment:</strong> We provide formal GST-compliant invoices and certificates of sponsorship to satisfy school audits. Payments can be wire-transferred directly to our registered organization account.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-8 border-t border-thin-gold/50 flex gap-4 mt-8">
          <button
            onClick={() => {
              window.location.href = "mailto:institutions@concordmun.org?subject=School%20Partnership%20Proposal%20-%20Concord%20MUN%202026";
            }}
            className="flex-1 py-4 bg-maroon border border-maroon hover:border-gold hover:bg-maroon-dark text-parchment text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-sm text-center"
          >
            Email Partnership Desk ✉
          </button>
          <a
            href="https://forms.gle/Mys3tWFEWRg6USqi7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-4 text-center border border-gold/45 text-almost-black text-xs font-bold uppercase tracking-widest hover:bg-gold/15 transition-colors duration-300 rounded-sm"
          >
            Open Delegation Form ↗
          </a>
        </div>
      </motion.div>
    </>
  );
}
