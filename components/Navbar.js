"use client";

import { useState, useEffect, useRef } from "react";

export default function Navbar({ onOpenParents, onOpenSchools }) {
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

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

  // Listen to clicks outside the navigation container to close the dropdown
  useEffect(() => {
    if (!navOpen) return;

    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setNavOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [navOpen]);

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
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || navOpen
          ? "bg-parchment/95 backdrop-blur-md border-b border-thin-gold py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo Brand Title */}
        <a
          href="#home"
          className="flex items-center gap-3 group"
        >
          <div className="w-8 h-8 border border-gold flex items-center justify-center rounded-sm bg-maroon/5 rotate-45 transition-colors duration-300 group-hover:bg-maroon/10">
            <span className="text-gold font-serif text-sm -rotate-45 font-semibold">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm md:text-base font-bold tracking-[0.15em] uppercase text-maroon">
              Concord MUN
            </span>
            <span className="text-[10px] text-gold-dark tracking-widest uppercase font-semibold -mt-1">
              Vadodara 2026
            </span>
          </div>
        </a>

        {/* Navigation Dropdown Trigger */}
        <div className="relative">
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-maroon hover:text-gold-dark text-xs font-serif uppercase tracking-[0.2em] font-bold transition-all duration-300 flex items-center gap-1.5 focus:outline-none cursor-pointer px-4 py-2 border border-thin-gold rounded-sm bg-parchment-dark/40 hover:bg-parchment-deep/60"
          >
            Navigation
            <span className={`text-[9px] transition-transform duration-300 ${navOpen ? "rotate-180" : ""}`}>▼</span>
          </button>

          {/* Dropdown Menu (Desktop) */}
          <div
            className={`absolute right-0 mt-4 z-50 bg-parchment border border-thin-gold p-6 md:p-8 w-[320px] md:w-[380px] rounded-sm shadow-xl hidden lg:block transition-all duration-550 ease-out ${
              navOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-gold-dark font-serif text-xs font-semibold tracking-[0.25em] uppercase border-b border-thin-gold/40 pb-2">
                Navigation Menu
              </h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.type === "scroll" ? (
                      <a
                        href={link.href}
                        onClick={() => setNavOpen(false)}
                        className="text-almost-black/80 hover:text-maroon text-[11px] uppercase tracking-widest font-serif transition-colors duration-300 block py-1 font-medium cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button
                        onClick={() => {
                          setNavOpen(false);
                          link.action();
                        }}
                        className="text-maroon hover:text-gold-dark text-[11px] uppercase tracking-widest font-serif transition-colors duration-300 block py-1 text-left border-none bg-transparent cursor-pointer font-bold w-full"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Menu (Mobile Expand) */}
      <div
        className={`lg:hidden w-full bg-parchment-dark border-t border-thin-gold/45 overflow-hidden transition-all duration-300 ease-in-out ${
          navOpen
            ? "max-h-[500px] opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-4">
          <h3 className="text-gold-dark font-serif text-[10px] font-semibold tracking-widest uppercase border-b border-thin-gold/25 pb-2">
            Navigation Menu
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <a
                    href={link.href}
                    onClick={() => setNavOpen(false)}
                    className="text-almost-black/80 hover:text-maroon text-xs uppercase tracking-wider font-serif transition-colors duration-300 block py-1 font-medium cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setNavOpen(false);
                      link.action();
                    }}
                    className="text-maroon hover:text-gold-dark text-xs uppercase tracking-wider font-serif transition-colors duration-300 block py-1 text-left border-none bg-transparent cursor-pointer font-bold w-full"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
