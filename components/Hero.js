"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Explicitly target 22 August 2026 9:00 AM IST (GMT+05:30)
    const targetDate = new Date("2026-08-22T09:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({
          days: d < 10 ? `0${d}` : `${d}`,
          hours: h < 10 ? `0${h}` : `${h}`,
          minutes: m < 10 ? `0${m}` : `${m}`,
          seconds: s < 10 ? `0${s}` : `${s}`,
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-between bg-parchment relative pt-32 pb-12 overflow-hidden px-6 md:px-12"
    >
      {/* Subtle Diplomatic Watermark (Laurel lines & Compass Grid) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.06] pointer-events-none select-none">
        <svg
          className="w-[120%] h-[120%] text-gold max-w-7xl"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="44" />
          <circle cx="50" cy="50" r="34" />
          <circle cx="50" cy="50" r="22" />
          <path d="M5,50 L95,50 M50,5 L50,95" />
          <path d="M18,18 L82,82 M18,82 L82,18" />
          {/* Concentric stars */}
          <path d="M50,42 L52,48 L58,50 L52,52 L50,58 L48,52 L42,50 L48,48 Z" fill="currentColor" />
        </svg>
      </div>

      {/* Luxury Outer Frame (Double Gold Borders) */}
      <div className="absolute inset-4 md:inset-8 border border-thin-gold pointer-events-none z-10" />
      <div className="absolute inset-5 md:inset-9 border border-dashed border-gold/25 pointer-events-none z-10" />

      {/* Corner Ornaments */}
      <div className="absolute top-6 left-6 md:top-10 md:left-10 w-4 h-4 border-t-2 border-l-2 border-gold z-20" />
      <div className="absolute top-6 right-6 md:top-10 md:right-10 w-4 h-4 border-t-2 border-r-2 border-gold z-20" />
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-4 h-4 border-b-2 border-l-2 border-gold z-20" />
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-4 h-4 border-b-2 border-r-2 border-gold z-20" />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center text-center z-10 max-w-5xl mx-auto py-8">
        
        {/* Animated Concord Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-32 h-32 md:w-40 md:h-40 mb-6 select-none flex items-center justify-center"
        >
          {/* Spinning gold laurel border (slow micro-animation) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-gold/70 rounded-full"
          />
          {/* Rotating outer frame */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-2.5 border border-gold-dark rounded-sm rotate-45"
          />
          
          {/* Inner core emblem content */}
          <div className="w-24 h-24 md:w-28 md:h-28 bg-parchment border border-gold rounded-full shadow-md overflow-hidden flex items-center justify-center">
            <img
              src="/emblem.png"
              alt="Concord MUN Vadodara 2026 Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Top Tag & Dates */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mb-4"
        >
          <span className="text-gold-dark uppercase tracking-[0.25em] text-xs font-bold block mb-1">
            The Premiere Assembly of Gujarat
          </span>
          <div className="flex items-center justify-center gap-2 text-almost-black/80 font-serif text-xs uppercase tracking-widest">
            <span>22–23 August 2026</span>
            <span className="text-gold">•</span>
            <span>The Fern Residency Vadodara</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-maroon font-serif text-4xl md:text-6xl lg:text-7.5xl font-bold tracking-wider uppercase leading-[1.05] mb-6"
        >
          Concord Model <br />
          <span className="text-almost-black">United Nations</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-gold-dark font-subheading text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto italic mb-12"
        >
          "Where Ideas Converge. Change Begins."
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-sm sm:max-w-none"
        >
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-full sm:w-auto bg-maroon text-parchment hover:bg-maroon-dark border-2 border-maroon hover:border-gold px-10 py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Register Now
          </a>
        </motion.div>
      </div>

      {/* Countdown & Scroll Down */}
      <div className="z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8 mt-6">
        
        {/* Countdown Timer (Plaque Style) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.2 }}
          className="flex items-center gap-4 md:gap-8 border-2 border-double border-gold/60 py-5 px-8 md:px-12 bg-parchment-dark/70 shadow-md w-full justify-center max-w-lg rounded-sm"
        >
          {[
            { value: isMounted ? timeLeft.days : "00", label: "Days" },
            { value: isMounted ? timeLeft.hours : "00", label: "Hours" },
            { value: isMounted ? timeLeft.minutes : "00", label: "Minutes" },
            { value: isMounted ? timeLeft.seconds : "00", label: "Seconds" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center min-w-[65px]">
              <span className="font-serif text-3.5xl md:text-4xl font-bold text-maroon text-shadow-sm">
                {item.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-dark font-bold mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Animated Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center mb-2"
        >
          <a
            href="#about"
            onClick={(e) => handleScrollTo(e, "#about")}
            className="group flex flex-col items-center gap-2 focus:outline-none"
            aria-label="Scroll Down"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-almost-black/85 font-semibold group-hover:text-maroon transition-colors duration-300">
              Scroll to Explore
            </span>
            <div className="w-[1px] h-12 bg-gold relative overflow-hidden">
              <motion.div
                animate={{
                  y: ["0%", "100%"],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 right-0 h-1/2 bg-maroon"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
