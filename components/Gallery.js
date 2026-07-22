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

const galleryItems = [
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

        {/* Video Highlights Row (3 Columns Side-by-Side) */}
        <div className="space-y-6">
          <h3 className="text-lg text-maroon font-serif uppercase tracking-wider border-b border-thin-gold/30 pb-3">
            Official Highlights & Aftermovies
          </h3>
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

        {/* Photo Archive Section */}
        <div className="space-y-6 pt-8">
          <h3 className="text-lg text-maroon font-serif uppercase tracking-wider border-b border-thin-gold/30 pb-3">
            Captured Moments
          </h3>
          <div className="columns-1 md:columns-2 lg:columns-2 gap-6 space-y-6">
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid border border-thin-gold bg-parchment-dark/20 p-4 flex flex-col justify-between group cursor-pointer hover:border-gold transition-colors duration-300"
                onClick={() => setSelectedItem(item)}
              >
                <div className={`${item.aspect} w-full bg-maroon/5 border border-thin-gold/40 relative overflow-hidden flex items-center justify-center`}>
                  <div className="w-10 h-10 border border-gold/30 rounded-sm rotate-45 flex items-center justify-center bg-parchment-dark z-0">
                    <span className="text-gold font-serif text-[10px] -rotate-45">✦</span>
                  </div>
                  <div className="absolute inset-2 border border-dashed border-gold/15 pointer-events-none" />
                  
                  {/* Image Display */}
                  <img
                    src={item.src}
                    alt={item.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                    className="absolute inset-0 w-full h-full object-cover z-10"
                  />
                  
                  <div 
                    style={{ display: 'none' }}
                    className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/5 text-gold-dark font-serif z-10"
                  >
                    <span className="text-2xl font-extrabold tracking-widest">C</span>
                    <span className="text-[8px] uppercase tracking-widest mt-1 opacity-60">Archive Photo</span>
                  </div>

                  {/* Hover mask */}
                  <div className="absolute inset-0 bg-maroon-dark/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center space-y-2 z-20">
                    <span className="text-gold font-serif text-sm uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-parchment/70 text-[9px] uppercase tracking-widest flex items-center gap-1 justify-center">
                      {item.year}
                    </span>
                  </div>
                </div>

                <div className="pt-4 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-serif uppercase tracking-wider text-maroon font-bold">
                      {item.title}
                    </h3>
                    <span className="text-[10px] text-gold uppercase tracking-widest font-semibold">
                      Photo
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

                {/* Main Showcase Box */}
                {selectedItem.type === "video" ? (
                  <div className="aspect-[16/9] w-full bg-almost-black border border-thin-gold/45 relative flex items-center justify-center overflow-hidden rounded-sm">
                    <video
                      src={selectedItem.src}
                      controls
                      autoPlay
                      className="w-full h-full object-contain z-10"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/10] w-full bg-maroon/5 border border-thin-gold/45 relative flex items-center justify-center overflow-hidden rounded-sm">
                    <img
                      src={selectedItem.src}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover z-10"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        if (e.target.nextSibling) {
                          e.target.nextSibling.style.display = 'flex';
                        }
                      }}
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
