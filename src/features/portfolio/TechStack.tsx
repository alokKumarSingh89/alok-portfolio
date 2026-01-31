"use client";
import { motion } from "framer-motion";
import { Cpu, Layers, Server, Cloud, Database, Terminal } from "lucide-react";

const SKILL_DATA = [
  {
    category: "Frontend Architecture",
    icon: <Layers size={20} className="text-cyan-400" />,
    items: [
      { name: "React / Next.js", level: 95, years: 8 },
      { name: "Micro-Frontends", level: 90, years: 5 },
      { name: "TypeScript", level: 92, years: 7 },
    ]
  },
  {
    category: "Backend Engineering",
    icon: <Server size={20} className="text-orange-400" />,
    items: [
      { name: "NestJS / Node.js", level: 94, years: 6 },
      { name: "Python / Django", level: 85, years: 4 },
      { name: "GraphQL / gRPC", level: 88, years: 4 },
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud size={20} className="text-blue-400" />,
    items: [
      { name: "AWS (Lambda/S3)", level: 88, years: 6 },
      { name: "Docker / K8s", level: 80, years: 4 },
      { name: "CI/CD Pipelines", level: 90, years: 7 },
    ]
  },
  {
    category: "Data Architecture",
    icon: <Database size={20} className="text-emerald-400" />,
    items: [
      { name: "PostgreSQL / SQL", level: 90, years: 9 },
      { name: "Redis / Caching", level: 85, years: 5 },
      { name: "NoSQL (DynamoDB)", level: 82, years: 4 },
    ]
  }
];

export default function TechStack() {
  return (
    <section id="stack" className="py-24 bg-[#020617]">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />
          <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] flex items-center gap-3">
            <Terminal size={16} /> 02. Technical_Capabilities
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {SKILL_DATA.map((group, gIdx) => (
            <motion.div 
              key={group.category}
              initial={{ opacity: 0, x: gIdx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8 p-8 rounded-3xl bg-slate-900/20 border border-slate-800/50"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-slate-900 rounded-lg">{group.icon}</div>
                <h3 className="text-xl font-bold text-white">{group.category}</h3>
              </div>

              <div className="space-y-6">
                {group.items.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <div>
                        <span className="text-slate-200 font-medium">{skill.name}</span>
                        <span className="ml-3 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                          {skill.years} Yrs Exp
                        </span>
                      </div>
                      <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    
                    {/* The Status Bar */}
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 rounded-full relative"
                      >
                        {/* Glow effect on the tip of the bar */}
                        <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[4px] opacity-50" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}