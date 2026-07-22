"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Luxury Hotel Conference",
    desc: "Held at The Fern Residency Vadodara, offering professional-grade conference halls, premium acoustics, and a world-class diplomatic setting.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "7 Gourmet Meals",
    desc: "Exquisite culinary spreads including 2 morning breakfasts, 2 multi-cuisine lunches, 2 high-tea networks, and 1 grand delegate dinner.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697-.056-4.024-.166C6.845 7.91 6 6.905 6 5.74V3.375c0-.621.504-1.125 1.125-1.125h9.75c.621 0 1.125.504 1.125 1.125V5.74c0 1.165-.845 2.17-1.976 2.344A40.3 40.3 0 0112 8.25zm0 0v1.125c0 2.227-1.644 4.07-3.75 4.375v4.625h7.5V13.75c-2.106-.305-3.75-2.148-3.75-4.375V8.25zM12 18.75v3" />
      </svg>
    ),
  },
  {
    title: "Premium Delegate Kit",
    desc: "Includes a custom leatherette portfolio, corporate metal pen, formal notepad, detailed rulebook handbook, and secure credentials card.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875A1.125 1.125 0 013.75 18.4V14.15m16.5 0c0-1.286-.833-2.408-2.07-2.677a29.07 29.07 0 00-12.36 0c-1.237.269-2.07 1.391-2.07 2.677m16.5 0V9.45c0-1.286-.833-2.408-2.07-2.677a29.07 29.07 0 00-12.36 0c-1.237.269-2.07 1.391-2.07 2.677m16.5 0V6.75A2.25 2.25 0 0018 4.5H6A2.25 2.25 0 003.75 6.75V9.45M12 11.25a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z" />
      </svg>
    ),
  },
  {
    title: "Elite Networking",
    desc: "Engage with 500+ top-performing student leaders, corporate sponsors, and guest speakers from prestigious fields.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Accredited Presidium",
    desc: "Chaired by seasoned executives with 20+ combined years of MUN leadership, guaranteeing rigorous academic debate and fair moderation.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Grand Social Evening",
    desc: "An unforgettable cultural celebration featuring formal dinners, live musical setups, and networking lounges for relaxed collaboration.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 0L21 9m-1.5-3v10.5m-3-6L7.5 12m0 0V18m0-6H3.75m0 0v6" />
      </svg>
    ),
  },
  {
    title: "Premium Experience",
    desc: "Uncompromising support, dedicated hospitality desks, safety supervision, and direct advisor help channels.",
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.172-.436.78-.436.952 0l3 7a1 1 0 00.95.69h7.498c.476 0 .673.616.287.892l-6.064 4.3c-.382.27-.54 1.202-.387 1.664l2.25 5.25a.5.5 0 01-.762.553l-6.063-4.3a1 1 0 00-1.185 0l-6.062 4.3a.5.5 0 01-.762-.553l2.25-5.25c.152-.462-.005-1.393-.387-1.664l-6.064-4.3a.5.5 0 01.287-.892h7.498a1 1 0 00.95-.69l3-7z" />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold">
            Conference Benefits
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Why Choose Concord?
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="w-12 h-[1px] bg-gold-dark/40" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-gold-dark/40" />
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="card-parchment p-8 flex flex-col space-y-4 rounded-none group hover:border-gold transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-gold/40 flex items-center justify-center bg-maroon/5 rounded-sm mb-2 group-hover:bg-maroon/10 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-bold uppercase tracking-wider text-maroon">
                {feature.title}
              </h3>
              <p className="text-sm text-almost-black/85 leading-relaxed font-light font-sans">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
