"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Elegant entrance timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-parchment"
        >
          <div className="flex flex-col items-center max-w-md px-6 text-center">
            {/* Elegant Minimal Gold Crest Placeholder */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                transition: { duration: 1.2, ease: "easeOut" } 
              }}
              className="w-16 h-16 mb-8 relative overflow-hidden rounded-full border border-gold shadow-md flex items-center justify-center bg-parchment"
            >
              <img
                src="/emblem.png"
                alt="Concord Logo"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Typography Entrance */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                transition: { delay: 0.3, duration: 1, ease: "easeOut" } 
              }}
              className="text-maroon text-2xl md:text-3xl font-medium tracking-[0.2em] uppercase font-serif-heading"
            >
              Concord MUN
            </motion.h1>

            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                transition: { delay: 0.6, duration: 1, ease: "easeOut" } 
              }}
              className="text-gold font-subheading text-lg md:text-xl tracking-wider mt-2"
            >
              Vadodara 2026
            </motion.p>

            {/* Custom Bounce Loader */}
            <div className="mt-4">
              <div className="loader"></div>
            </div>
            
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6, transition: { delay: 1 } }}
              className="text-xs uppercase tracking-[0.3em] text-almost-black/50 mt-4"
            >
              Where Ideas Converge
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
