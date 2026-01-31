"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? "bg-[#020617]/80 backdrop-blur-xl border-b border-slate-800 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Area */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-cyan-500 flex items-center justify-center font-bold text-black group-hover:rotate-12 transition-transform">
            A
          </div>
          <span className="font-mono font-bold text-xl tracking-tighter text-white">
            ALOK<span className="text-cyan-400">.ARCH</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all group-hover:w-full" />
            </Link>
          ))}
          
          {/* Status Indicator (Purely Visual for the Architect Vibe) */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Available</span>
          </div>
        </div>

        {/* Mobile Placeholder (Optional) */}
        <div className="md:hidden text-slate-400">
          <Link href="mailto:itsaloksingh2011@gmail.com" className="text-xs font-mono border border-slate-800 px-4 py-2 rounded-lg">
            CONNECT
          </Link>
        </div>
      </div>
    </nav>
  );
}