"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    title: "Opening Ceremony Highlights",
    year: "Concord 2025",
    desc: "Key diplomatic addresses and highlights from the inaugural session launch.",
    aspect: "aspect-[16/9]",
    type: "video",
    src: "/opening-highlights.mp4",
  },
  {
    id: 2,
    title: "Crisis Cabinet Deliberations",
    year: "Concord 2025",
    desc: "Cabinet delegates responding to the midnight crisis notification briefing.",
    aspect: "aspect-[16/9]",
    type: "video",
    src: "/crisis-deliberations.mp4",
  },
  {
    id: 3,
    title: "Security Council Debates",
    year: "Concord 2024",
    desc: "Intense negotiations over draft resolution protocols regarding territorial sovereignty.",
    aspect: "aspect-[3/4]",
    type: "image",
    src: "/gallery-sc.jpg",
  },
  {
    id: 4,
    title: "Consensus in the Lobby",
    year: "Concord 2024",
    desc: "Delegates drafting amendments and negotiating blocks during unmoderated caucuses.",
    aspect: "aspect-[4/3]",
    type: "image",
    src: "/gallery-consensus.jpg",
  },
  {
    id: 5,
    title: "The Fern Residency Ballroom",
    year: "Venue Showcase",
    desc: "Elegant chandeliers and setups prepared for the Opening Ceremony.",
    aspect: "aspect-[1/1]",
    type: "image",
    src: "/gallery-venue.jpg",
  },
  {
    id: 6,
    title: "Gavel & Academic Honors",
    year: "Concord 2025",
    desc: "Best Delegate accolades and certificates prepared for outstanding cabinet leaders.",
    aspect: "aspect-[4/3]",
    type: "image",
    src: "/gallery-awards.jpg",
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Visual Chronicles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Previous Editions
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Gallery Grid (Art-Gallery Style) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`break-inside-avoid border border-thin-gold bg-parchment-dark/20 p-4 flex flex-col justify-between group cursor-pointer hover:border-gold transition-colors duration-300`}
              onClick={() => setSelectedItem(item)}
            >
              {/* Graphic/Video Showcase Box */}
              <div className={`${item.aspect} w-full bg-maroon/5 border border-thin-gold/40 relative overflow-hidden flex items-center justify-center`}>
                
                {/* Fallback pattern */}
                <div className="w-10 h-10 border border-gold/30 rounded-sm rotate-45 flex items-center justify-center bg-parchment-dark z-0">
                  <span className="text-gold font-serif text-[10px] -rotate-45">✦</span>
                </div>
                <div className="absolute inset-2 border border-dashed border-gold/15 pointer-events-none" />
                
                {/* Play button indicator for video type */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-maroon/5 group-hover:bg-maroon/10 transition-colors z-10">
                    <div className="w-12 h-12 border border-gold flex items-center justify-center rounded-full bg-parchment shadow-md group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-5 h-5 text-maroon fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Hover mask */}
                <div className="absolute inset-0 bg-maroon-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-2 z-20">
                  <span className="text-gold font-serif text-sm uppercase tracking-wider">
                    {item.title}
                  </span>
                  <span className="text-parchment/70 text-[9px] uppercase tracking-widest flex items-center gap-1 justify-center">
                    {item.type === "video" && (
                      <svg className="w-3 h-3 text-gold fill-current" viewBox="0 0 24 24">
                        <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                      </svg>
                    )}
                    {item.year}
                  </span>
                </div>
              </div>

              {/* Caption details below */}
              <div className="pt-4 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-serif uppercase tracking-wider text-maroon font-bold">
                    {item.title}
                  </h3>
                  <span className="text-[10px] text-gold uppercase tracking-widest font-semibold flex items-center gap-1">
                    {item.type === "video" && "Video"}
                    {item.type === "image" && "Photo"}
                  </span>
                </div>
                <p className="text-[11px] text-almost-black/70 font-light leading-relaxed font-sans line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-almost-black"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
            >
              <div className="bg-parchment border border-gold max-w-xl w-full p-8 md:p-12 space-y-6 pointer-events-auto relative shadow-2xl">
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 text-maroon hover:text-gold transition-colors focus:outline-none"
                  aria-label="Close"
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

                {/* Main Showcase Box */}
                {selectedItem.type === "video" ? (
                  <div className="aspect-[16/9] w-full bg-almost-black border border-thin-gold/45 relative flex items-center justify-center overflow-hidden">
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/5 text-gold-dark font-serif"
                    >
                      <span className="text-gold font-serif text-lg font-bold">Video Clip Pending</span>
                      <span className="text-[10px] text-almost-black/50 uppercase tracking-widest mt-2">
                        Upload {selectedItem.src.replace('/', '')} to public/
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[16/10] w-full bg-maroon/5 border border-thin-gold/45 relative flex items-center justify-center overflow-hidden">
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-3 border border-dashed border-gold/15 pointer-events-none" />
                    <div className="w-16 h-16 border border-gold/30 rounded-sm rotate-45 flex items-center justify-center bg-parchment-dark">
                      <span className="text-gold font-serif text-lg -rotate-45 font-semibold">C</span>
                    </div>
                  </div>
                )}

                {/* Caption Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-thin-gold/40 pb-2">
                    <h3 className="text-lg text-maroon font-serif font-semibold uppercase tracking-wider font-bold">
                      {selectedItem.title}
                    </h3>
                    <span className="text-xs text-gold font-serif tracking-widest uppercase font-semibold">
                      {selectedItem.year}
                    </span>
                  </div>
                  <p className="text-sm text-almost-black/85 font-light leading-relaxed font-sans">
                    {selectedItem.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
