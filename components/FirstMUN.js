"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  {
    step: "01",
    title: "Register",
    desc: "Submit your basic preferences. You get to choose your committee and portfolio.",
  },
  {
    step: "02",
    title: "Receive Guides",
    desc: "Get your committee background guides compiled by our executive board.",
  },
  {
    step: "03",
    title: "Research & Draft",
    desc: "Understand your nation's policy, draft statements, and prepare arguments.",
  },
  {
    step: "04",
    title: "Debate & Consensus",
    desc: "Engage in moderated discussions, lobby for consensus, and pass resolutions.",
  },
  {
    step: "05",
    title: "Accredited Awards",
    desc: "Receive physical delegation certificates and compete for academic laurels.",
  },
];

const beginnerQAs = [
  {
    q: "Do I need prior MUN experience to participate?",
    a: "Absolutely not. Concord MUN is explicitly structured to support beginners. We have dedicated starter allocations and beginner-friendly committees like UNHRC.",
  },
  {
    q: "Will there be training sessions before the conference?",
    a: "Yes. We host live delegate orientation webinars that cover diplomatic vocabulary, research methods, and rules of procedure (ROP) step-by-step.",
  },
  {
    q: "What if I get nervous speaking in front of people?",
    a: "Every delegate starts somewhere. Our Executive Board chairs are trained to create a supportive environment, helping you speak, guide, and collaborate comfortably.",
  },
];

export default function FirstMUN() {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contact = document.querySelector("#contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="first-mun" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12 space-y-20">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold-dark font-bold block">
            Beginner Delegate Guide
          </span>
          <h2 className="text-3.5xl md:text-4.5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Never Attended an MUN?
          </h2>
          <p className="text-gold-dark font-subheading text-xl italic max-w-xl mx-auto">
            Perfect. Concord MUN welcomes and mentors first-time delegates.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <div className="w-12 h-[1px] bg-gold-dark/40" />
            <span className="text-gold text-xs">✦</span>
            <div className="w-12 h-[1px] bg-gold-dark/40" />
          </div>
        </div>

        {/* Roadmap Roadmap (Grid-based Timeline) */}
        <div className="space-y-8">
          <div className="border-b border-thin-gold/40 pb-4">
            <h3 className="text-xl text-maroon font-serif uppercase tracking-wider">
              Your Journey at Concord
            </h3>
            <p className="text-xs text-almost-black/60 font-light mt-1">
              Follow these simple steps from registration to certification
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timelineSteps.map((item, index) => (
              <div
                key={index}
                className="border border-thin-gold bg-parchment-dark/15 p-6 space-y-3 relative group"
              >
                <span className="font-serif text-3xl font-bold text-gold/60 group-hover:text-gold transition-colors block">
                  {item.step}
                </span>
                <h4 className="text-sm font-serif uppercase tracking-wider text-maroon font-semibold">
                  {item.title}
                </h4>
                <p className="text-xs text-almost-black/80 leading-relaxed font-light font-sans">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Q&A Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-4">
          {beginnerQAs.map((qa, index) => (
            <div
              key={index}
              className="card-parchment p-8 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <h4 className="text-sm font-serif uppercase tracking-wider text-maroon font-bold leading-relaxed border-l-2 border-gold pl-3">
                  {qa.q}
                </h4>
                <p className="text-xs text-almost-black/85 leading-relaxed font-light font-sans">
                  {qa.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="text-center pt-8">
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-block bg-maroon text-parchment hover:bg-maroon-dark border-2 border-maroon hover:border-gold px-12 py-4 text-xs font-bold uppercase tracking-widest rounded-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            I'm Ready for My First MUN
          </a>
        </div>
      </div>
    </section>
  );
}
