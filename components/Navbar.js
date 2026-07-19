"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ onOpenParents, onOpenSchools }) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

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
    setNavOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Committees", href: "#committees", type: "scroll" },
    { name: "Leadership", href: "#leadership", type: "scroll" },
    { name: "Gallery", href: "#gallery", type: "scroll" },
    { name: "For Parents ✦", action: onOpenParents, type: "drawer" },
    { name: "Partnerships ✦", action: onOpenSchools, type: "drawer" },
    { name: "FAQ", href: "#faq", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || navOpen
            ? "bg-[#161412]/95 backdrop-blur-md border-b border-thin-gold/40 py-4 shadow-lg"
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
              <span className={`font-serif text-sm md:text-base font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${scrolled || navOpen ? "text-parchment" : "text-maroon"}`}>
                Concord MUN
              </span>
              <span className="text-[10px] text-gold tracking-widest uppercase font-semibold -mt-1">
                Vadodara 2026
              </span>
            </div>
          </a>

          {/* Navigation Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gold hover:text-gold-light text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer px-4 py-2 border border-gold/40 rounded-sm bg-maroon/5 hover:bg-maroon/15"
            >
              Navigation
              <span className={`text-[9px] transition-transform duration-300 ${navOpen ? "rotate-180" : ""}`}>▼</span>
            </button>

            {/* Dropdown Menu (Desktop) */}
            <AnimatePresence>
              {navOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="absolute right-0 mt-4 z-50 bg-[#161412] border border-thin-gold p-6 md:p-8 w-[320px] md:w-[380px] rounded-sm shadow-2xl hidden lg:block"
                >
                  <div className="space-y-4">
                    <h3 className="text-gold-dark font-serif text-xs font-semibold tracking-[0.25em] uppercase border-b border-thin-gold/30 pb-2">
                      Navigation Menu
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          {link.type === "scroll" ? (
                            <a
                              href={link.href}
                              onClick={(e) => handleLinkClick(e, link.href)}
                              className="text-parchment/80 hover:text-gold text-[11px] uppercase tracking-widest font-serif transition-colors duration-300 block py-1 font-light"
                            >
                              {link.name}
                            </a>
                          ) : (
                            <button
                              onClick={() => {
                                setNavOpen(false);
                                link.action();
                              }}
                              className="text-gold font-bold hover:text-gold-light text-[11px] uppercase tracking-widest font-serif transition-colors duration-300 block py-1 text-left border-none bg-transparent cursor-pointer"
                            >
                              {link.name}
                            </button>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dropdown Menu (Mobile Expand) */}
        <AnimatePresence>
          {navOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full bg-[#161412] border-t border-thin-gold/30 overflow-hidden"
            >
              <div className="px-6 py-8 space-y-4">
                <h3 className="text-gold-dark font-serif text-[10px] font-semibold tracking-widest uppercase border-b border-thin-gold/20 pb-2">
                  Navigation Menu
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      {link.type === "scroll" ? (
                        <a
                          href={link.href}
                          onClick={(e) => handleLinkClick(e, link.href)}
                          className="text-parchment/80 hover:text-gold text-xs uppercase tracking-wider font-serif transition-colors duration-300 block py-1 font-light"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <button
                          onClick={() => {
                            setNavOpen(false);
                            link.action();
                          }}
                          className="text-gold font-bold hover:text-gold-light text-xs uppercase tracking-wider font-serif transition-colors duration-300 block py-1 text-left border-none bg-transparent cursor-pointer"
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Invisible backdrop to capture outside clicks */}
      {navOpen && (
        <div
          className="fixed inset-0 z-40 bg-transparent"
          onClick={() => setNavOpen(false)}
        />
      )}
    </>
  );
}
