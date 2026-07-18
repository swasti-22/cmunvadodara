"use client";

import { motion } from "framer-motion";

export default function Footer({ onOpenParents, onOpenSchools }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-parchment border-t border-thin-gold py-16 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative vertical parchment lines */}
      <div className="absolute top-0 bottom-0 left-12 w-[1px] bg-thin-gold/20 hidden lg:block" />
      <div className="absolute top-0 bottom-0 right-12 w-[1px] bg-thin-gold/20 hidden lg:block" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:px-12">
        {/* Brand Section */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 border border-gold flex items-center justify-center rounded-sm bg-maroon/5 rotate-45">
              <span className="text-gold font-serif text-base -rotate-45 font-semibold">C</span>
            </div>
            <div className="flex flex-col">
              <span className="text-maroon font-serif text-base font-bold tracking-[0.15em] uppercase">
                Concord MUN
              </span>
              <span className="text-xs text-gold tracking-widest uppercase font-medium -mt-1">
                Vadodara 2026
              </span>
            </div>
          </div>
          <p className="text-almost-black/70 text-sm leading-relaxed font-sans font-light">
            Gujarat's premier platform for diplomatic discourse, academic excellence, and international policy simulation. Cultivating the global leaders of tomorrow.
          </p>
          <div className="pt-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-gold font-medium">
              Where Ideas Converge. Change Begins.
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-maroon font-serif text-sm font-semibold tracking-wider uppercase border-b border-thin-gold/50 pb-2">
            Navigation
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {[
              { name: "Home", href: "#home", type: "scroll" },
              { name: "About", href: "#about", type: "scroll" },
              { name: "Committees", href: "#committees", type: "scroll" },
              { name: "Leadership", href: "#leadership", type: "scroll" },
              { name: "Gallery", href: "#gallery", type: "scroll" },
              { name: "For Parents ✦", action: onOpenParents, type: "drawer" },
              { name: "Partnerships ✦", action: onOpenSchools, type: "drawer" },
              { name: "FAQ", href: "#faq", type: "scroll" },
              { name: "Contact", href: "#contact", type: "scroll" },
            ].map((link) => (
              <li key={link.name}>
                {link.type === "scroll" ? (
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-almost-black/80 hover:text-maroon text-xs uppercase tracking-widest transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <button
                    onClick={link.action}
                    className="text-maroon hover:text-gold-dark text-xs uppercase tracking-widest transition-colors duration-300 font-bold text-left"
                  >
                    {link.name}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-maroon font-serif text-sm font-semibold tracking-wider uppercase border-b border-thin-gold/50 pb-2">
            Contact Info
          </h3>
          <ul className="space-y-3.5 text-sm text-almost-black/80 font-light">
            <li className="flex items-start gap-2.5">
              <span className="text-gold text-xs mt-1">✦</span>
              <div>
                mail: <a href="mailto:concordmunvadodara08@gmail.com" className="hover:text-maroon transition-colors font-medium">concordmunvadodara08@gmail.com</a>
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-gold text-xs mt-1">✦</span>
              <div>
                or drop a text at: <a href="tel:+918980575757" className="hover:text-maroon transition-colors font-mono font-medium">+91 89805 75757</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Social & Connect */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-maroon font-serif text-sm font-semibold tracking-wider uppercase border-b border-thin-gold/50 pb-2">
            Social Channels
          </h3>
          <p className="text-almost-black/70 text-sm font-light leading-relaxed">
            Follow our Instagram handle for announcements, delegate allocations, and live updates.
          </p>
          <div className="flex flex-col space-y-2 pt-2">
            <a
              href="https://www.instagram.com/concord_mun?igsh=bmhlamVmZmxwN3F4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 border border-gold hover:bg-gold/15 text-almost-black px-4 py-2.5 text-xs font-semibold uppercase tracking-widest rounded-sm transition-all duration-300 w-full"
            >
              <svg
                className="w-4 h-4 text-maroon"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @concordmun
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-thin-gold/30 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4 text-xs text-almost-black/60 font-light lg:px-12">
        <p>© 2026 Concord Model United Nations Vadodara. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Designed & Crafted for Prestige</span>
          <span className="text-maroon font-serif">✦</span>
          <span>Team Concord</span>
        </p>
      </div>
    </footer>
  );
}
