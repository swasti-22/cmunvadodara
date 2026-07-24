"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! I'm here to help with questions about Concord MUN 2026 — registration, committees, fees, or anything else.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Failed to connect to assistant");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Chatbot widget error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I am having trouble connecting to the Secretariat server (${error.message}). Please try again or contact us at concordmunvadodara08@gmail.com.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open support chat"
          className="flex items-center justify-center w-14 h-14 bg-maroon text-parchment rounded-full border-2 border-gold shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 active:scale-95 group focus:outline-none"
          style={{
            boxShadow: "0 0 0 4px #FAF6F0, 0 8px 30px rgba(90, 24, 19, 0.3)"
          }}
        >
          {isOpen ? (
            <svg className="w-6 h-6 text-gold transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gold group-hover:animate-pulse transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Expanded Chat Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.4 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-[#161412] border border-thin-gold/80 shadow-2xl flex flex-col justify-between overflow-hidden rounded-lg max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:h-[85vh] max-sm:rounded-t-2xl"
          >
            {/* Decors */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-gold/45 pointer-events-none" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-gold/45 pointer-events-none" />

            {/* Header */}
            <div className="p-4 border-b border-thin-gold/30 flex justify-between items-center bg-[#1e1b18]">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-[#2a9d8f] rounded-full animate-pulse" />
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-serif font-bold text-gold">
                    Secretariat Assistant AI
                  </h3>
                  <p className="text-[9px] text-parchment/65 font-light">
                    Official Concord MUN Agent
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-parchment/60 hover:text-gold transition-colors focus:outline-none"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-gold/20 scrollbar-track-transparent bg-[#161412]">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-md p-3 text-xs leading-relaxed font-sans ${
                      msg.role === "user"
                        ? "bg-maroon text-parchment border border-thin-gold/45 rounded-tr-none"
                        : "bg-[#25221f] text-parchment/90 border border-thin-gold/20 rounded-tl-none"
                    }`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-[#25221f] border border-thin-gold/20 rounded-md rounded-tl-none p-3 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} className="p-3 border-t border-thin-gold/20 flex gap-2 bg-[#1e1b18]">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Concord MUN..."
                className="flex-1 bg-[#161412] border border-thin-gold/45 focus:border-gold p-2.5 text-xs text-parchment rounded-none focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="btn-primary py-2 px-4 text-[10px] font-bold uppercase tracking-widest border border-gold disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
