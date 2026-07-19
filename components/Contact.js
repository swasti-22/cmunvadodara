"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { db } from "@/lib/firebase";
import { ref, push, set } from "firebase/database";

export default function Contact() {
  const [activeFormTab, setActiveFormTab] = useState("individual");
  const [chatMessages, setChatMessages] = useState([
    {
      sender: "bot",
      text: "Greetings, Delegate! I am the Concord Secretariat Assistant. Ask me anything about Concord MUN Vadodara 2026, or use the quick replies below."
    }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isTyping]);

  const getBotResponse = (query) => {
    const q = query.toLowerCase();
    
    if (q.includes("date") || q.includes("when") || q.includes("schedule") || q.includes("calendar")) {
      return "Concord MUN Vadodara 2026 will take place on **22nd & 23rd August 2026**.";
    }
    if (q.includes("venue") || q.includes("where") || q.includes("hotel") || q.includes("location") || q.includes("place")) {
      return "The conference is hosted at **The Fern Residency, Vadodara** (Near Station, Alkapuri, Vadodara, Gujarat 390002). It is a premium business hotel offering world-class conferencing amenities, luxury chambers, and executive dining.";
    }
    if (q.includes("fee") || q.includes("price") || q.includes("cost") || q.includes("inclusions") || q.includes("meal") || q.includes("pay") || q.includes("money") || q.includes("amount")) {
      return "The registration fee is **INR 2,900 per delegate**. This covers entry to all committee sessions, official delegate kits, certified blockchain credentials, and 7 gourmet meals (buffet breakfasts, lunches, high teas on both days, plus a social evening dinner) prepared by The Fern Residency's executive chefs.";
    }
    if (q.includes("committee") || q.includes("agenda") || q.includes("unga") || q.includes("disec") || q.includes("aippm") || q.includes("unhrc") || q.includes("unsc")) {
      return "We feature 4 committees at Concord MUN 2026:\n\n1. **AIPPM**: Reviewing the status of internal security in India.\n2. **UNGA (DISEC)**: Exploring security parameters of Outer Space activities.\n3. **UNHRC**: Protecting human rights in conflict zones.\n4. **UNSC**: Addressing geopolitical security crises.";
    }
    if (q.includes("register") || q.includes("apply") || q.includes("join") || q.includes("form") || q.includes("link")) {
      return "To register, use the **Individual Registration** or **Team Delegation** tabs located right above this chatbot panel on our site to access the secure forms.";
    }
    if (q.includes("contact") || q.includes("phone") || q.includes("email") || q.includes("instagram") || q.includes("reach") || q.includes("support")) {
      return "You can reach the Secretariat at **concordmunvadodara08@gmail.com** or send a DM to our official Instagram page **@concordmunvadodara**.";
    }
    if (q.includes("hotel") || q.includes("stay") || q.includes("accommodation")) {
      return "Accommodation is not included in the standard fee, but outstation delegates can request discounted delegate rooms at **The Fern Residency Vadodara** during registration.";
    }
    if (q.includes("dress") || q.includes("suit") || q.includes("clothes") || q.includes("attire")) {
      return "The dress code is strictly Western Formal Attire (suits, blazers, formal trousers) on Day 1, and traditional Indian Formal Attire on Day 2.";
    }
    if (q.includes("hello") || q.includes("hi") || q.includes("hey") || q.includes("greetings")) {
      return "Hello! How can I assist you with Concord MUN Vadodara 2026 today?";
    }
    
    return "I can help you with details about dates, venue, registration fees, committees, and contact information. For custom inquiries, please email the Secretariat at **concordmunvadodara08@gmail.com**.";
  };

  const handleSendMessage = async (text) => {
    if (!text.trim()) return;
    
    const userMsg = { sender: "user", text };
    setChatMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // Save user query to Firebase for logs (spam-protected, max 200 chars)
    if (text.length <= 200) {
      try {
        const queryRef = ref(db, "chatbot_queries");
        const newQueryRef = push(queryRef);
        await set(newQueryRef, {
          query: text.trim(),
          timestamp: Date.now()
        });
      } catch (err) {
        console.error("Firebase log error:", err);
      }
    }

    setTimeout(() => {
      const responseText = getBotResponse(text);
      setChatMessages((prev) => [...prev, { sender: "bot", text: responseText }]);
      setIsTyping(false);
    }, 850);
  };

  const handleQuickReply = (pillText) => {
    let cleanText = pillText;
    if (pillText.includes("Dates")) cleanText = "What are the dates and venue?";
    else if (pillText.includes("Fees")) cleanText = "What are the registration fees and inclusions?";
    else if (pillText.includes("Committees")) cleanText = "Tell me about the committees and agendas.";
    else if (pillText.includes("Register")) cleanText = "How do I register?";

    handleSendMessage(cleanText);
  };

  return (
    <section id="contact" className="py-24 bg-parchment relative overflow-hidden px-6 md:px-12 border-t border-thin-gold/40">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />
      <div className="absolute top-0 bottom-0 right-6 md:right-12 w-[1px] bg-thin-gold/45 z-0 hidden sm:block" />

      <div className="max-w-6xl mx-auto z-10 relative lg:px-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-gold font-semibold">
            Registration & Inquiries
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-maroon font-serif font-semibold tracking-wide uppercase">
            Join the Assembly
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mt-4" />
        </div>

        {/* Urgency Deadline Banner */}
        <div className="bg-maroon border border-gold/40 py-3.5 px-6 text-center max-w-4xl mx-auto rounded-sm shadow-md mb-8">
          <span className="text-gold font-serif text-xs md:text-sm tracking-wider uppercase font-bold block sm:inline">
            ✦ Regular Registrations are Now Open ✦
          </span>
          <span className="text-parchment text-xs font-light tracking-wide sm:ml-2">
            Apply today to secure your country portfolio.
          </span>
        </div>

        {/* Participating Institutions Strip */}
        <div className="text-center space-y-3 max-w-4xl mx-auto mb-10 border-t border-b border-thin-gold/25 py-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-almost-black/50 font-semibold block">
            Trusted by delegates from premier institutions
          </span>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest font-serif font-semibold text-gold-dark/80">
            <span>DPS Vadodara</span>
            <span className="text-thin-gold/40">•</span>
            <span>Navrachana University</span>
            <span className="text-thin-gold/40">•</span>
            <span>MSU Vadodara</span>
            <span className="text-thin-gold/40">•</span>
            <span>The Heritage School</span>
            <span className="text-thin-gold/40">•</span>
            <span>St. Kabir School</span>
            <span className="text-thin-gold/40">•</span>
            <span>Vikas International</span>
          </div>
        </div>

        {/* Pricing Block & Inclusions */}
        <div className="max-w-4xl mx-auto mb-12 border border-thin-gold bg-parchment-dark/30 p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-1 border-b md:border-b-0 md:border-r border-thin-gold/40 pb-6 md:pb-0 md:pr-6 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-widest text-gold font-bold block">
                Delegate Pass
              </span>
              <span className="font-serif text-3xl font-bold text-maroon block mt-1">
                ₹2,900
              </span>
              <span className="text-[10px] text-almost-black/60 uppercase tracking-wider block mt-1">
                Per Representative
              </span>
            </div>
            
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-bold text-almost-black">
                Registration Inclusions
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-almost-black/85 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>7 Gourmet Meals (Fern Residency buffets)</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Premium Leatherette Kit & Pen</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Entry to all committee sessions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-gold">✦</span>
                  <span>Blockchain Certificate verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Toggle UI & Embedded Iframe Container */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {/* Tab Toggles */}
          <div className="flex border-b border-thin-gold/45">
            <button
              onClick={() => setActiveFormTab("individual")}
              className={`flex-1 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFormTab === "individual"
                  ? "bg-maroon text-parchment border-t border-l border-r border-gold"
                  : "bg-parchment-dark/30 text-almost-black hover:bg-parchment-dark/50 border-b border-thin-gold/45"
              }`}
            >
              Individual Registration
            </button>
            <button
              onClick={() => setActiveFormTab("team")}
              className={`flex-1 text-center py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeFormTab === "team"
                  ? "bg-maroon text-parchment border-t border-l border-r border-gold"
                  : "bg-parchment-dark/30 text-almost-black hover:bg-parchment-dark/50 border-b border-thin-gold/45"
              }`}
            >
              Team Delegation Registration
            </button>
          </div>

          {/* Iframe Viewport Container */}
          <div className="border border-gold bg-[#1e1b18] p-4 shadow-lg rounded-sm relative overflow-hidden">
            {/* Elegant Header Decors inside dark card */}
            <div className="flex justify-between items-center text-[10px] text-gold uppercase tracking-widest mb-3 pb-2 border-b border-gold/20">
              <span>Secure Registration Node</span>
              <span className="animate-pulse flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                Live Portal
              </span>
            </div>

            {activeFormTab === "individual" ? (
              <div className="space-y-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSf3KIV8_uB5b6hFPAI1hpq0cTMy106TobxRMyRDSqPK4Ub9Cw/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full bg-white rounded-sm shadow-inner"
                  title="Individual Delegate Registration Form"
                >
                  Loading form...
                </iframe>
                <div className="text-center pt-2">
                  <a
                    href="https://forms.gle/RgJRsuojFsCxyk1a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-wider underline decoration-dashed"
                  >
                    Open Form in New Tab ↗
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLScWbmzFQYU6QVkzwvJRkWII1dVC7pFLqeBEm5pF8bKYUA5ttg/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full bg-white rounded-sm shadow-inner"
                  title="Team Delegation Registration Form"
                >
                  Loading form...
                </iframe>
                <div className="text-center pt-2">
                  <a
                    href="https://forms.gle/Mys3tWFEWRg6USqi7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gold hover:text-gold-light text-xs font-semibold uppercase tracking-wider underline decoration-dashed"
                  >
                    Open Form in New Tab ↗
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Secondary Row: General Inquiries Form & Venue Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-thin-gold/30 pt-16">
          
          {/* Secretariat AI Assistant Chatbot */}
          <div className="border border-thin-gold p-6 md:p-8 bg-[#161412] relative flex flex-col justify-between h-[520px] rounded-sm shadow-xl">
            {/* Elegant Header Decors */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/45" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/45" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-gold/45" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-gold/45" />

            <div className="border-b border-thin-gold/30 pb-4 mb-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-serif uppercase tracking-wider text-gold font-bold">
                  Secretariat AI Assistant
                </h3>
                <p className="text-[10px] text-parchment/60 font-light">
                  Ask about dates, fees, venue, or committees
                </p>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] uppercase tracking-wider text-[#2a9d8f] font-bold">
                <span className="w-1.5 h-1.5 bg-[#2a9d8f] rounded-full animate-pulse" />
                Online
              </div>
            </div>

            {/* Chat Messages Log */}
            <div className="flex-1 overflow-y-auto pr-1 space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-md p-3 text-xs leading-relaxed font-sans ${
                      msg.sender === "user"
                        ? "bg-maroon text-parchment border border-thin-gold/45 rounded-tr-none"
                        : "bg-[#25221f] text-parchment/90 border border-thin-gold/20 rounded-tl-none"
                    }`}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-[#25221f] border border-thin-gold/20 rounded-md rounded-tl-none p-3 max-w-[85%] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies Grid */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {["📅 Dates", "💰 Fees", "🏛️ Committees", "✍️ How to Register?"].map((pill) => (
                <button
                  key={pill}
                  onClick={() => handleQuickReply(pill)}
                  className="text-[9px] uppercase tracking-wider bg-parchment-dark/10 border border-thin-gold/40 text-gold font-bold px-2 py-1 hover:bg-gold/10 hover:border-gold transition-all duration-300 rounded-sm cursor-pointer"
                >
                  {pill}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(chatInput);
                setChatInput("");
              }}
              className="flex gap-2 border-t border-thin-gold/20 pt-3"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Type your question here..."
                maxLength={200}
                className="flex-1 bg-[#1e1b18] border border-thin-gold/45 focus:border-gold p-2.5 text-xs text-parchment rounded-none focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="btn-primary py-2 px-4 text-[10px] font-bold uppercase tracking-widest border border-gold"
              >
                Send
              </button>
            </form>
          </div>

          {/* Venue & Location Coordinates */}
          <div className="flex flex-col justify-between space-y-8">
            <div className="border border-thin-gold p-8 bg-parchment-dark/10 space-y-6">
              <h3 className="text-xl text-maroon font-serif uppercase tracking-wider">
                Conference Venue
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-gold text-sm mt-0.5">✦</span>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider font-semibold text-almost-black">The Fern Residency Vadodara</strong>
                    <span className="text-sm font-light text-almost-black/85 leading-relaxed">
                      Near Station, Alkapuri, Vadodara, Gujarat 390002. A premium business hotel located in the heart of Vadodara, featuring world-class conferencing amenities, luxury chambers, and executive dining.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-thin-gold/80 p-3 bg-parchment-dark/30 flex-1 flex flex-col justify-between min-h-[200px]">
              <div className="border border-dashed border-gold/40 flex-1 flex flex-col items-center justify-center text-center p-6 bg-parchment relative overflow-hidden">
                <div className="absolute inset-0 z-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
                  <svg className="w-full h-full text-gold" fill="none" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" />
                    <path d="M10,50 L90,50 M50,10 L50,90" />
                  </svg>
                </div>
                
                <div className="z-10 space-y-4">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold block">
                    Geographic Coordinates
                  </span>
                  <p className="text-xs text-almost-black/60 font-mono">
                    22.3112° N, 73.1812° E
                  </p>
                  <a
                    href="https://maps.google.com/?q=The+Fern+Residency+Vadodara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-gold hover:bg-gold/15 text-almost-black px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest rounded-sm transition-colors duration-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
