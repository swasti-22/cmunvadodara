"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const desktopLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Committees", href: "#committees" },
  { name: "Leadership", href: "#leadership" },
  { name: "Gallery", href: "#gallery" },
  { name: "FAQ", href: "#faq" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({ onOpenParents, onOpenSchools }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-parchment/95 backdrop-blur-md border-b border-thin-gold py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Brand Title */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm bg-maroon/5 rotate-45 transition-colors duration-300 group-hover:bg-maroon/10">
              <span className="text-gold font-serif text-sm -rotate-45 font-semibold">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-maroon font-serif text-sm md:text-base font-bold tracking-[0.15em] uppercase">
                Concord MUN
              </span>
              <span className="text-[10px] text-gold-dark tracking-widest uppercase font-semibold -mt-1">
                Vadodara 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-7">
            {desktopLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-almost-black/80 hover:text-maroon text-[11px] uppercase tracking-widest font-bold transition-colors duration-300 relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

            {/* Register Button CTA (Desktop) */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="btn-primary py-2 px-6"
              >
                Register Now
              </a>
            </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-maroon hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-parchment lg:hidden flex flex-col justify-between overflow-y-auto"
          >
            {/* Mobile Drawer Header */}
            <div className="px-6 py-6 border-b border-thin-gold/60 flex items-center justify-between bg-parchment-dark/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm bg-maroon/5 rotate-45">
                  <span className="text-gold font-serif text-sm -rotate-45 font-semibold">C</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-maroon font-serif text-sm font-bold tracking-[0.15em] uppercase">
                    Concord MUN
                  </span>
                  <span className="text-[10px] text-gold tracking-widest uppercase font-medium -mt-1">
                    Vadodara 2026
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-maroon hover:text-gold transition-colors duration-300 focus:outline-none"
                aria-label="Close Menu"
              >
                <svg
                  className="w-6 h-6"
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

            {/* Mobile Nav Links */}
            <div className="flex-1 flex flex-col justify-center px-8 py-10 space-y-4">
              {[
                { name: "Home", href: "#home", type: "scroll" },
                { name: "About", href: "#about", type: "scroll" },
                { name: "Why Concord", href: "#why-choose", type: "scroll" },
                { name: "First MUN?", href: "#first-mun", type: "scroll" },
                { name: "Committees", href: "#committees", type: "scroll" },
                { name: "Leadership", href: "#leadership", type: "scroll" },
                { name: "For Parents ✦", action: onOpenParents, type: "drawer" },
                { name: "School Partnerships ✦", action: onOpenSchools, type: "drawer" },
                { name: "Gallery", href: "#gallery", type: "scroll" },
                { name: "FAQ", href: "#faq", type: "scroll" },
                { name: "Contact", href: "#contact", type: "scroll" },
              ].map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.04, duration: 0.35 }}
                >
                  {link.type === "scroll" ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-almost-black font-serif text-xl tracking-wider hover:text-maroon transition-colors duration-300 block py-0.5"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        link.action();
                      }}
                      className="text-maroon font-serif text-xl tracking-wider hover:text-gold-dark transition-colors duration-300 text-left block py-0.5"
                    >
                      {link.name}
                    </button>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.35 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                  className="btn-primary w-full block py-3.5"
                >
                  Register Now
                </a>
              </motion.div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="p-8 border-t border-thin-gold/60 bg-parchment-dark/30 text-center">
              <span className="text-[10px] tracking-[0.2em] uppercase text-almost-black/50 font-semibold">
                Where Ideas Converge. Change Begins.
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
