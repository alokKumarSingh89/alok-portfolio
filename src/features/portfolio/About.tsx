"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Award, Target, Terminal } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-[#020617] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />
          <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] flex items-center gap-3">
            <Terminal size={16} /> 01. System_Profile
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* MAIN BIO CARD (Spans 8 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-3xl backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck size={120} />
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
              Bridging the gap between <br />
              <span className="text-cyan-400">Complex Logic</span> & Elegant UI.
            </h3>
            
            <div className="space-y-4 text-slate-400 text-lg leading-relaxed max-w-2xl">
              <p>
                With over <span className="text-white font-semibold">11 years of engineering rigor</span>, I specialize in building resilient web ecosystems. My journey has evolved from writing SEO-optimized scripts to architecting 
                <span className="text-white"> Micro-Frontend (MFE) frameworks</span> for global financial institutions.
              </p>
              <p>
                I don’t just write code; I design systems that scale. My focus is on reducing technical debt and increasing deployment velocity—proven by a 40% reduction in build times for my most recent Fintech projects.
              </p>
            </div>
          </motion.div>

          {/* QUICK STATS CARD (Spans 4 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 space-y-6"
          >
            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/20 p-8 rounded-3xl h-full flex flex-col justify-center">
              <div className="text-5xl font-bold text-white mb-2 tracking-tighter">11+</div>
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">Years Experience</div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <Zap size={16} className="text-cyan-400" /> 20+ Global Systems Shipped
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-sm">
                  <Target size={16} className="text-cyan-400" /> Focus: Scalable MFE
                </div>
              </div>
            </div>
          </motion.div>

          {/* EDUCATION BENTO BOX (Spans 5 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-5 bg-slate-900/20 border border-slate-800 p-8 rounded-3xl"
          >
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Award size={18} className="text-cyan-500" /> Credentials
            </h4>
            <div className="space-y-6">
              <div>
                <p className="text-white text-sm font-bold">PG Diploma in Data Science</p>
                <p className="text-slate-500 text-xs font-mono">IIIT Bangalore // 2021</p>
              </div>
              <div className="h-px bg-slate-800" />
              <div>
                <p className="text-white text-sm font-bold">B.Tech in Technology</p>
                <p className="text-slate-500 text-xs font-mono">GGSIPU Delhi // 2012</p>
              </div>
            </div>
          </motion.div>

          {/* INTERESTS/SOFT SKILLS BENTO BOX (Spans 7 columns) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-7 bg-slate-900/20 border border-slate-800 p-8 rounded-3xl flex flex-wrap gap-3 items-center"
          >
            {["System Architecture", "Performance Tuning", "Technical Mentoring", "Legacy Modernization", "Cloud Native", "TDD"].map((tag) => (
              <span key={tag} className="px-5 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 text-xs font-mono">
                {tag}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}