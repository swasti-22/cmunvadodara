"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videoItems = [
  {
    id: "v1",
    title: "Concord Vadodara 2025 Aftermovie",
    year: "Concord 2025",
    desc: "Relive the diplomatic deliberations, crisis updates, and closing celebrations of our flagship Vadodara edition.",
    src: "/videos/CONCORD MUN VADODARA 2025 AFTERMOVIE.mp4",
    type: "video"
  },
  {
    id: "v2",
    title: "Concord x LPSA MUN 2025 Day 1",
    year: "Concord 2025",
    desc: "Inaugural opening ceremonies and the first intense sessions of parliamentary debate.",
    src: "/videos/CONCORD X LPSA MUN 2025 DAY-1.mp4",
    type: "video"
  },
  {
    id: "v3",
    title: "Concord x LPSA MUN 2025 Day 2",
    year: "Concord 2025",
    desc: "Final resolution drafting, bloc negotiations, and the closing honors ceremony.",
    src: "/videos/CONCORD X LPSA MUN 2025 DAY-2.mp4",
    type: "video"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Visual Chronicles
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Previous Editions
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Video Highlights Row (3 Columns Side-by-Side) */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoItems.map((video) => (
              <div 
                key={video.id}
                className="border border-thin-gold bg-parchment-dark/15 p-4 flex flex-col justify-between group rounded-sm shadow-sm hover:border-gold transition-colors duration-300"
              >
                <div className="aspect-[16/9] w-full bg-almost-black border border-thin-gold/40 relative overflow-hidden flex items-center justify-center rounded-sm">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    className="w-full h-full object-cover z-10"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-maroon/5 pointer-events-none z-0" />
                </div>
                
                <div className="pt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-serif uppercase tracking-wider text-maroon font-bold leading-tight max-w-[80%]">
                      {video.title}
                    </h4>
                    <span className="text-[9px] text-gold uppercase tracking-widest font-bold">
                      {video.year}
                    </span>
                  </div>
                  <p className="text-[11px] text-almost-black/70 font-light leading-relaxed font-sans line-clamp-2">
                    {video.desc}
                  </p>
                  
                  {/* Cinema Maximization Button */}
                  <button
                    onClick={() => setSelectedItem(video)}
                    className="text-[9px] uppercase tracking-widest text-gold hover:text-gold-dark font-bold flex items-center gap-1 mt-1 cursor-pointer border-none bg-transparent"
                  >
                    Maximize Video ↗
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal (Cinema Scale) */}
      <AnimatePresence>
        {selectedItem && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="fixed inset-0 z-50 bg-almost-black"
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 pointer-events-none"
            >
              <div className="bg-parchment border border-gold max-w-4xl w-full p-6 md:p-8 space-y-6 pointer-events-auto relative shadow-2xl rounded-sm">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 text-maroon hover:text-gold transition-colors focus:outline-none z-30"
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
                      strokeWidth="1.8"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Cinema Showcase Box */}
                <div className="aspect-[16/9] w-full bg-almost-black border border-thin-gold/45 relative flex items-center justify-center overflow-hidden rounded-sm">
                  <video
                    src={selectedItem.src}
                    controls
                    autoPlay
                    className="w-full h-full object-contain z-10"
                  />
                </div>

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
