"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leaders = [
  {
    role: "Founder & President",
    name: "Het Ankur Bhatt",
    image: "/president.jpg",
    fallbackInitial: "HAB",
    description: "Diplomatic Lead & Conference Director",
  },
  {
    role: "Vice President (Vadodara)",
    name: "Shivangraj Chudasama",
    image: "/vice-president.jpg",
    fallbackInitial: "SC",
    description: "Operations Director & Editorial Lead (Vadodara Edition)",
  },
  {
    role: "Vice President (Vadodara)",
    name: "Jainam Joshi",
    image: "/vp-vadodara.png",
    fallbackInitial: "JJ",
    description: "Operations & Editorial Coordinator (Vadodara Edition)",
  }
];

export default function Leadership() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <section id="leadership" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Background Decorative lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-4xl mx-auto z-10 relative lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
            Executive Board
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Leadership
          </h2>
          {/* Decorative Diamond Divider */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-gold-dark/40" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-gold-dark/40" />
          </div>
        </div>

        {/* Leaders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="card-parchment p-8 relative flex flex-col items-center text-center group transition-colors duration-300 rounded-none"
            >
              {/* Corner Borders */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-gold/45 group-hover:border-gold transition-colors" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-gold/45 group-hover:border-gold transition-colors" />

              {/* Portrait Frame Container with stacked card hover effect */}
              <div 
                onClick={() => setActivePhoto(leader)}
                className="stack w-44 h-56 md:w-48 md:h-60 cursor-zoom-in"
                title="Click to view full photo"
              >
                <div className="card">
                  <div className="image">
                    <img
                      src={leader.image}
                      alt={leader.role}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      style={{ display: 'none' }}
                      className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/5 text-gold-dark font-serif"
                    >
                      <span className="text-4xl font-extrabold tracking-widest">{leader.fallbackInitial}</span>
                      <span className="text-[9px] uppercase tracking-widest mt-2 opacity-60">Photo Pending</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leader Description Info */}
              <div className="mt-6 space-y-2">
                <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">
                  {leader.role}
                </span>
                <h3 className="text-xl text-maroon font-serif font-bold uppercase tracking-wider">
                  {leader.name}
                </h3>
                <p className="text-xs text-almost-black/75 font-light font-sans max-w-[240px]">
                  {leader.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Enlarged Photo Lightbox Modal */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePhoto(null)}
            className="fixed inset-0 z-50 bg-almost-black/90 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-parchment p-3 border-2 border-gold max-w-sm md:max-w-md w-full shadow-2xl flex flex-col items-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute -top-12 right-0 p-2 text-parchment hover:text-gold transition-colors duration-300 focus:outline-none"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="w-full aspect-[3/4] relative overflow-hidden bg-parchment-dark">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center mt-4 pb-1.5">
                <span className="text-[10px] uppercase tracking-widest text-gold-dark font-bold block">{activePhoto.role}</span>
                <span className="text-lg text-maroon font-serif font-bold uppercase tracking-wider block mt-1">{activePhoto.name}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
