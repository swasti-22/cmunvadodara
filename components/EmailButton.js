"use client";

import { motion } from "framer-motion";

export default function EmailButton() {
  const emailUrl = "mailto:concordmunvadodara08@gmail.com?subject=Concord%20MUN%202026%20Inquiry";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={emailUrl}
        className="group relative flex items-center justify-center w-14 h-14 bg-maroon border-2 border-gold rounded-full shadow-lg hover:shadow-xl hover:bg-maroon-dark transition-all duration-300 transform active:scale-95"
        aria-label="Contact via Email"
      >
        {/* Tooltip */}
        <span className="absolute right-16 scale-0 group-hover:scale-100 transition-all duration-200 origin-right bg-parchment text-maroon border border-gold font-serif text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 whitespace-nowrap shadow-md">
          Email Registry
        </span>

        {/* Envelope Premium Gold SVG Icon */}
        <svg
          className="w-6 h-6 text-gold"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </a>
    </motion.div>
  );
}
