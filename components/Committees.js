"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const committeesData = [
  {
    id: "loksabha",
    shortName: "Lok Sabha",
    fullName: "Indian House of Representatives (Lok Sabha)",
    agendas: [
      "Deliberation upon the Delimitation Bill, 2026, with Special Emphasis on Federal Balance, Equitable Democratic Representation, and National Integration.",
      "Discussion upon Freedom of Speech in the Digital Age with Special Emphasis on National Security, Misinformation, and Public Order."
    ],
    difficulty: "Intermediate to Advanced",
    type: "Single Delegation",
    eb: "Speaker: TBA • Deputy Speaker: TBA",
    description: "The Lok Sabha, the lower house of India's bicameral Parliament, simulates legislative processes, parliamentary debates, and policy making addressing national challenges and national security directives.",
    bgColor: "bg-maroon/5",
    logoText: "LS",
  },
  {
    id: "unsc",
    shortName: "UNSC",
    fullName: "United Nations Security Council",
    agendas: [
      "Cybersecurity & Global Threats: Countering State-Sponsored Cyberterrorism.",
      "Israel-Palestine Crisis: Stabilizing Gaza & West Bank Amid Humanitarian and Security Concerns."
    ],
    difficulty: "Advanced",
    type: "Single Delegation",
    eb: "President: TBA • Vice President: TBA",
    description: "The United Nations Security Council is tasked with maintaining international peace and security. As the premier decision-making body, it holds the power to pass binding resolutions, impose sanctions, and authorize peacekeeping missions.",
    bgColor: "bg-maroon/5",
    logoText: "UNSC",
  },
  {
    id: "brics",
    shortName: "BRICS+",
    fullName: "BRICS+ Nations Summit",
    agendas: [
      "Deliberation upon Reducing Dependence on Western Institutions through BRICS+ Economic and Financial Cooperation.",
      "Deliberation upon Reforming the United Nations Security Council to Reflect Contemporary Global Power Dynamics."
    ],
    difficulty: "Intermediate",
    type: "Single Delegation",
    eb: "Chairperson: TBA",
    description: "A forum for major emerging economies to coordinate on economic and geopolitical strategies. BRICS+ aims to foster multilateral cooperation, reform international financial systems, and create a multipolar global order.",
    bgColor: "bg-maroon/5",
    logoText: "BRICS",
  },
  {
    id: "ip",
    shortName: "IP",
    fullName: "International Press",
    agendas: [
      "Journalism",
      "Photography"
    ],
    difficulty: "Beginner to Advanced",
    type: "Individual Press Portfolio",
    eb: "Editor-in-Chief: TBA",
    description: "The International Press represents independent news organizations. Delegates act as journalists or photojournalists, reporting on committee proceedings, interviewing representatives, and publishing daily logs.",
    bgColor: "bg-maroon/5",
    logoText: "IP",
  },
  {
    id: "ipl",
    shortName: "IPL Auction",
    fullName: "Indian Premier League simulation",
    agendas: [
      "IPL Auction: Portfolio management, bidding tactics, and team composition strategies."
    ],
    difficulty: "Beginner",
    type: "Single Delegation",
    eb: "Auctioneer: TBA",
    description: "An interactive bidding simulation where delegates represent franchises, balancing budget limits, player skills, and strategic squad development in a high-stakes, fast-paced environment.",
    bgColor: "bg-maroon/5",
    logoText: "IPL",
  }
];

export default function Committees() {
  const [selectedCommittee, setSelectedCommittee] = useState(null);

  const handleScrollToContact = () => {
    setSelectedCommittee(null);
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="committees" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Background Decorative lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-7xl mx-auto z-10 relative lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
            Deliberative Chambers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Committees & Agendas
          </h2>
          {/* Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-gold-dark/40" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-gold-dark/40" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committeesData.map((committee) => (
            <motion.div
              key={committee.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="card-parchment p-8 relative flex flex-col justify-between group transition-colors duration-300 rounded-none h-full"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-gold/45 group-hover:border-gold transition-colors" />

              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="inline-block border border-gold-dark/30 px-2 py-0.5 text-[9px] uppercase tracking-wider font-semibold text-gold-dark bg-parchment-dark/50">
                      {committee.difficulty}
                    </span>
                    <h3 className="text-2xl text-maroon font-serif font-bold tracking-wide uppercase pt-1">
                      {committee.shortName}
                    </h3>
                  </div>
                  {/* Emblem text badge */}
                  <div className="w-12 h-12 border border-gold/50 rounded-sm flex items-center justify-center bg-maroon/5 text-xs text-gold-dark font-serif font-bold rotate-45 group-hover:bg-maroon/10 transition-colors">
                    <span className="-rotate-45">{committee.logoText}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold tracking-wider uppercase text-almost-black">
                    {committee.fullName}
                  </h4>
                  <div className="text-xs uppercase tracking-widest text-gold-dark font-semibold">
                    {committee.type}
                  </div>
                </div>

                <div className="h-[1px] bg-thin-gold/60" />

                <div className="space-y-2.5">
                  <span className="text-[10px] uppercase tracking-wider text-gold-dark font-bold block">Agendas</span>
                  <ul className="space-y-2 text-almost-black/90 text-xs font-light leading-relaxed font-sans">
                    {committee.agendas.map((agendaItem, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-gold text-[10px] mt-0.5">✦</span>
                        <span>{agendaItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-1.5 text-xs text-almost-black/80">
                  <span className="text-[10px] uppercase tracking-wider text-gold-dark font-bold block">Executive Board</span>
                  <span className="font-medium text-almost-black">{committee.eb}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mt-8 pt-4 border-t border-thin-gold/45">
                <button
                  onClick={() => setSelectedCommittee(committee)}
                  className="flex-1 text-center bg-transparent border border-gold hover:bg-gold/15 text-almost-black text-xs font-bold uppercase tracking-widest py-3 transition-colors duration-300 rounded-sm shadow-sm"
                >
                  Learn More
                </button>
                <button
                  onClick={handleScrollToContact}
                  className="flex-1 text-center bg-maroon text-parchment hover:bg-maroon-dark text-xs font-bold uppercase tracking-widest py-3 transition-colors duration-300 rounded-sm border-2 border-maroon hover:border-gold"
                >
                  Register
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Slide-over detailed Drawer */}
      <AnimatePresence>
        {selectedCommittee && (
          <>
            {/* Drawer Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.65 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCommittee(null)}
              className="fixed inset-0 z-50 bg-almost-black"
            />
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-lg bg-parchment border-l border-thin-gold shadow-2xl p-8 md:p-12 flex flex-col justify-between overflow-y-auto"
            >
              <div className="space-y-8">
                {/* Drawer Header */}
                <div className="flex items-start justify-between border-b border-thin-gold/50 pb-6">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest font-semibold text-gold-dark">
                      {selectedCommittee.difficulty} • {selectedCommittee.type}
                    </span>
                    <h3 className="text-3xl text-maroon font-serif font-bold uppercase tracking-wider">
                      {selectedCommittee.shortName}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedCommittee(null)}
                    className="p-2 border border-gold/45 text-maroon hover:bg-gold/10 transition-colors duration-300 rounded-sm focus:outline-none"
                    aria-label="Close details"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Full Details */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
                      Official Designation
                    </h4>
                    <p className="text-base text-almost-black font-serif uppercase tracking-wide">
                      {selectedCommittee.fullName}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
                      Deliberative Mandate (About)
                    </h4>
                    <p className="text-sm text-almost-black/85 leading-relaxed font-light">
                      {selectedCommittee.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
                      Featured Agenda Items
                    </h4>
                    <ul className="space-y-3">
                      {selectedCommittee.agendas.map((agendaItem, idx) => (
                        <li key={idx} className="text-sm font-serif-heading text-maroon uppercase tracking-wide border-l-2 border-gold pl-3 py-2 bg-maroon/5 leading-relaxed">
                          {agendaItem}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs uppercase tracking-widest text-gold font-bold">
                      Presidium (Executive Board)
                    </h4>
                    <div className="border border-thin-gold/50 p-4 bg-parchment-dark/30 rounded-sm">
                      <span className="text-sm font-semibold block text-almost-black">
                        {selectedCommittee.eb}
                      </span>
                      <span className="text-xs text-almost-black/60 font-light block mt-1">
                        Tasked with ensuring parliamentary protocol and maintaining academic standards.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Drawer Footer */}
              <div className="pt-8 border-t border-thin-gold/50 flex gap-4 mt-8">
                <button
                  onClick={() => setSelectedCommittee(null)}
                  className="flex-1 py-4 border border-gold/45 text-almost-black text-xs font-bold uppercase tracking-widest hover:bg-gold/10 transition-colors duration-300 rounded-sm"
                >
                  Close Panel
                </button>
                <button
                  onClick={handleScrollToContact}
                  className="flex-1 py-4 bg-maroon border border-maroon hover:border-gold hover:bg-maroon-dark text-parchment text-xs font-bold uppercase tracking-widest transition-colors duration-300 rounded-sm"
                >
                  Register For Allocation
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
