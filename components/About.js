"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12 space-y-24">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Institutional Foundation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            About the Conference
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Alternating Layouts: What is MUN & Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="space-y-6"
          >
            <span className="text-gold font-subheading text-lg md:text-xl italic">
              Empowering global minds
            </span>
            <h3 className="text-2xl md:text-3xl text-almost-black font-serif uppercase tracking-wider">
              What is Model United Nations?
            </h3>
            <p className="text-almost-black/85 text-sm md:text-base leading-relaxed font-light font-sans">
              Model United Nations (MUN) is an educational simulation of the United Nations General Assembly and other multilateral bodies. By stepping into the shoes of global diplomats, delegates engage in intense research, drafting resolutions, negotiating, and resolving complex international crises.
            </p>
            <p className="text-almost-black/85 text-sm md:text-base leading-relaxed font-light font-sans">
              More than just debate, MUN develops crucial life skills: public speaking, critical research, analytical writing, diplomatic consensus-building, and international cooperation.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            className="border border-thin-gold p-8 md:p-12 bg-parchment-dark/30 relative flex flex-col justify-between h-full"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-gold" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-gold" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-gold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-gold" />

            <div className="space-y-8">
              <div className="space-y-3">
                <h4 className="text-maroon font-serif text-sm font-semibold tracking-widest uppercase">
                  Our Mission
                </h4>
                <p className="text-almost-black/80 text-sm leading-relaxed font-light">
                  To provide an uncompromisingly academic arena that challenges delegates to design collaborative, forward-thinking solutions for the world’s most pressing geopolitical, humanitarian, and environmental crises.
                </p>
              </div>

              <div className="w-full h-[1px] bg-thin-gold/50" />

              <div className="space-y-3">
                <h4 className="text-maroon font-serif text-sm font-semibold tracking-widest uppercase">
                  Our Vision
                </h4>
                <p className="text-almost-black/80 text-sm leading-relaxed font-light">
                  To establish Concord MUN as the benchmark for diplomatic simulations in India, fostering an environment where rigor meets prestige, and where ideas converge to ignite meaningful global change.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Letter from Team Concord */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUpVariants}
          className="border border-thin-gold bg-parchment-dark/15 p-8 md:p-16 space-y-8"
        >
          <div className="border-b border-thin-gold/40 pb-6 text-center lg:text-left">
            <h3 className="text-maroon font-serif text-2xl md:text-3xl font-medium uppercase tracking-wider">
              Letter from Team Concord
            </h3>
            <p className="text-gold font-subheading text-lg italic mt-1">
              Reflections on leadership, compromise, and global citizenship
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 font-sans font-light text-sm md:text-base leading-relaxed text-almost-black/85">
            <div className="space-y-4 lg:col-span-2">
              <p>
                Esteemed Delegates, Advisors, and Honored Guests,
              </p>
              <p>
                It is our absolute privilege to welcome you to the official platform of Concord Model United Nations Vadodara 2026. As we prepare to open our chambers, we find ourselves at an unprecedented crossroads in global history. The challenges of our era are no longer distant; they demand swift, rigorous, and collaborative action.
              </p>
              <p>
                At Concord, we believe MUN is not merely an exercise in rhetoric or a pursuit of accolades. It is a testing ground for character. The true diplomat does not seek to conquer with words, but to bridge differences through listening, compromise, and unwavering integrity.
              </p>
            </div>
            
            <div className="space-y-4 bg-parchment p-6 border-l-2 border-gold flex flex-col justify-between">
              <p className="italic font-serif text-almost-black/90 text-sm leading-relaxed">
                "Diplomacy is the art of letting someone else have your way. Our goal is to cultivate minds that understand the gravity of representation and the power of intellectual synergy."
              </p>
              <div className="pt-4 border-t border-thin-gold/30">
                <span className="block text-maroon font-serif text-xs uppercase tracking-widest font-semibold">
                  Secretariat Cabinet
                </span>
                <span className="block text-gold text-[10px] uppercase tracking-wider font-medium">
                  Concord MUN Vadodara 2026
                </span>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-thin-gold/30 text-center lg:text-left">
            <p className="text-sm font-light text-almost-black/75">
              We invite you to join us on 22nd & 23rd August at The Fern Residency, Vadodara, to engage in debate of the highest caliber.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
