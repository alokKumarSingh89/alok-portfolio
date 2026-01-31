"use client";
import { Cpu, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#020617] border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          
          {/* Brand/Status Side */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Cpu size={14} className="text-cyan-400" />
              </div>
              <span className="font-mono text-sm font-bold tracking-tight text-white uppercase">
                Alok Kumar Singh <span className="text-slate-600">//</span> System Architect
              </span>
            </div>
            <p className="text-slate-500 text-xs font-mono max-w-xs leading-relaxed uppercase tracking-wider">
              Specializing in MFE, NestJS Microservices, and Cloud Native Architectures.
            </p>
          </div>

          {/* Quick Links / Socials */}
          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-slate-500 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:itsaloksingh2011@gmail.com" className="text-slate-500 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* System Terminal Bar */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/50" /> 
              System Online
            </span>
            <span>v1.2.0-stable</span>
            <span>Runtime: Next.js 15</span>
          </div>

          <div className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em]">
            © {currentYear} // Handcrafted by Alok
          </div>
        </div>
      </div>
    </footer>
  );
}