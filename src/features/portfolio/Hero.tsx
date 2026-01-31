"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Terminal } from "lucide-react";

const TECH_ITEMS = [
  { name: "Micro-Frontends", color: "text-cyan-400" },
  { name: "NestJS Microservices", color: "text-red-500" },
  { name: "AWS Serverless", color: "text-orange-400" },
  { name: "GraphQL Architecture", color: "text-pink-500" },
  { name: "System Scalability", color: "text-blue-400" }
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TECH_ITEMS.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-[#020617] overflow-hidden">
      {/* ARCHITECTURAL GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.07]" 
           style={{ backgroundImage: `linear-gradient(#22d3ee 1px, transparent 1px), linear-gradient(90deg, #22d3ee 1px, transparent 1px)`, 
           backgroundSize: '60px 60px' }} 
      />

      {/* MAIN CONTENT AREA */}
      <div className="container mx-auto px-6 relative z-10 text-center mb-20">
        <div className="flex flex-col items-center mb-6">
          <div className="h-8 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={TECH_ITEMS[index].name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`font-mono text-xs md:text-sm font-bold ${TECH_ITEMS[index].color} flex items-center gap-2 tracking-widest uppercase`}
              >
                <Terminal size={14} />
                <span>{TECH_ITEMS[index].name}</span>
                <span className="w-1.5 h-3 bg-current animate-pulse" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tighter mb-8 leading-[0.85]"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
            Systems.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-light"
        >
          Senior Architect specializing in high-scale <span className="text-slate-300">Fintech</span> & <span className="text-slate-300">SaaS</span> ecosystems.
        </motion.p>
      </div>

      {/* BOTTOM CONTACT INFO BAR (Replaces Buttons) */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-12 w-full max-w-6xl px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
          
          {/* Email */}
          <a href="mailto:itsaloksingh2011@gmail.com" className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-all">
              <Mail size={18} className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email</p>
              <p className="text-sm text-slate-300 font-medium">itsaloksingh2011@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a href="tel:+919986749371" className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/50 transition-all">
              <Phone size={18} className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Call</p>
              <p className="text-sm text-slate-300 font-medium">+91 99867 49371</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
              <MapPin size={18} className="text-cyan-400" />
            </div>
            <div className="text-left">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location</p>
              <p className="text-sm text-slate-300 font-medium">Indore, India</p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-end gap-3">
            <a href="https://github.com" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-cyan-500/50 transition-all">
              <Github size={20} className="text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" className="h-12 w-12 flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 hover:bg-slate-800 hover:border-cyan-500/50 transition-all">
              <Linkedin size={20} className="text-white" />
            </a>
          </div>

        </div>
      </motion.div>

      {/* Fades the background into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#020617] to-transparent z-0" />
    </section>
  );
}