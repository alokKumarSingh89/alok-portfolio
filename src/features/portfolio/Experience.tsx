"use client";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Terminal, Zap } from "lucide-react";

const EXPERIENCES = [
  {
    company: "InfoBeans (Client: Synchrony)",
    role: "Senior Software Engineer",
    location: "Indore (Remote), India",
    period: "Apr 2025 — Present",
    impact: "40% Build Reduction",
    description: "Architecting dynamic Micro-Frontend (MFE) transitions for fintech modules[cite: 28, 29].",
    tasks: [
      "Engineered a mission-critical Card Status Tracker MFE for millions of users[cite: 30].",
      "Refactored localization to a server-driven dynamic system for real-time updates[cite: 32].",
      "Eliminated 30% redundant code in Cypress suites, accelerating pipeline execution[cite: 33, 34]."
    ],
    tech: ["React", "TypeScript", "TanStack Query", "Dynamic MFE", "Cypress"]
  },
  {
    company: "Enable Data",
    role: "Full-Stack Engineer",
    location: "India (Remote)",
    period: "Feb 2023 — Aug 2023",
    impact: "40% Cost Reduction",
    description: "Led end-to-end development of high-performance Insurance Claim Portals[cite: 36, 37].",
    tasks: [
      "Architected a Serverless backend using AWS Lambda, reducing maintenance costs by 40%[cite: 38].",
      "Improved data processing efficiency by 30% through DynamoDB and MySQL optimization[cite: 39].",
      "Integrated CKEditor for complex legal document generation within the portal[cite: 41]."
    ],
    tech: ["React", "Node.js", "AWS Lambda", "DynamoDB", "MySQL"]
  },
  {
    company: "Nityo Infotech (Client: Equinix)",
    role: "Senior Full-Stack Engineer",
    location: "Singapore & India",
    period: "Nov 2020 — Jan 2023",
    impact: "45% Faster Retrieval",
    description: "Led mission-critical platform migrations to MFE architectures for global retail ecosystems[cite: 43, 44].",
    tasks: [
      "Engineered NestJS APIs for NTUC FairPrice to sync POS and vendor integrations[cite: 46, 47].",
      "Implemented Redis caching and RxJS, boosting data speeds by 45%[cite: 49].",
      "Reduced release cycles by 30% through independent MFE deployments[cite: 45]."
    ],
    tech: ["NestJS", "GraphQL", "TypeORM", "Redis", "RxJS", "Chakra UI"]
  },
  {
    company: "Optimum Solutions (Client: UOB)",
    role: "Senior Software Engineer",
    location: "Singapore",
    period: "Jun 2019 — Nov 2020",
    impact: "60% Bug Reduction",
    description: "Engineered high-security corporate banking platforms for multi-currency transactions[cite: 57, 58].",
    tasks: [
      "Increased test coverage from 25% to 85%, reducing post-release bugs by 60%[cite: 59].",
      "Optimized state logic with React Query and Reselect, cutting re-renders by 40%[cite: 61].",
      "Streamlined onboarding by reducing user input errors by 25% via Formik and Yup[cite: 62]."
    ],
    tech: ["React", "Redux", "TypeScript", "Formik", "Ant Design"]
  },
  {
    company: "Teksystems (Client: Flipkart)",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    period: "Nov 2017 — May 2019",
    impact: "25% Latency Drop",
    description: "Architected high-availability loan portals for the Flipkart seller ecosystem[cite: 65, 66, 67].",
    tasks: [
      "Orchestrated microservices using Express.js to reduce fetching latency by 25%[cite: 68].",
      "Achieved 90%+ unit test coverage, cutting production regressions by 40%[cite: 69].",
      "Developed a Python data pipeline to process 30GB+ of XML datasets daily for Societe Generale[cite: 73]."
    ],
    tech: ["React", "Express.js", "Python", "LoopBack", "PostgreSQL"]
  },
  {
    company: "Cisco (Servion Global)",
    role: "Full Stack Developer",
    location: "Bengaluru, India",
    period: "Mar 2016 — Nov 2017",
    impact: "35% Cost Savings",
    description: "Led digital transformation of mission-critical internal applications[cite: 76, 78].",
    tasks: [
      "Migrated legacy PHP monoliths to a modern Node.js/Angular stack[cite: 78].",
      "Consolidated disparate services into a centralized Express.js API layer[cite: 79].",
      "Improved data retrieval speeds by 40% by migrating to MongoDB[cite: 82]."
    ],
    tech: ["Angular", "Node.js", "MongoDB", "PHP", "Material-UI"]
  },
  {
    company: "Intuit (Technosoft Corp)",
    role: "Software Engineer",
    location: "Bengaluru, India",
    period: "Oct 2014 — Mar 2016",
    impact: "Automated Workflows",
    description: "Built multi-tier VM management portals to automate backend updates and system monitoring.",
    tasks: [
      "Orchestrated background jobs using RabbitMQ to ensure consistency across distributed systems.",
      "Developed real-time system alerts with Socket.io, reducing incident response times.",
      "Built a unified management portal using Angular.js and Ruby on Rails."
    ],
    tech: ["Angular.js", "Ruby on Rails", "RabbitMQ", "Socket.io", "Redis"]
  },
  {
    company: "Infiniti Research",
    role: "Junior Software Engineer",
    location: "Bengaluru, India",
    period: "Jan 2013 — Oct 2014",
    impact: "15% Traffic Increase",
    description: "Developed SEO-optimized search functionalities and modernized legacy UI components.",
    tasks: [
      "Built high-performance business search tools using jQuery and JSP.",
      "Modernized legacy components for mobile responsiveness, improving UX for thousands of users.",
      "Collaborated on SEO foundations that led to a 15% increase in organic traffic."
    ],
    tech: ["JSP", "JavaScript", "jQuery", "Bootstrap", "CSS"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#020617] relative">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-slate-800" />
          <h2 className="text-sm font-mono text-cyan-500 uppercase tracking-[0.3em] flex items-center gap-3">
            <Terminal size={16} /> 03. Experience_History
          </h2>
        </div>
        

        <div className="space-y-12">
          {EXPERIENCES.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group grid lg:grid-cols-[1fr_3fr] gap-8 p-8 rounded-3xl border border-slate-800 bg-slate-900/10 hover:bg-slate-900/30 transition-all shadow-xl"
            >
              {/* Left Column: Metadata */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-widest">
                  <Zap size={12} /> {job.impact}
                </div>
                <h3 className="text-2xl font-bold text-white">{job.company}</h3>
                <div className="flex flex-col gap-2 text-slate-500 text-sm font-mono">
                  <div className="flex items-center gap-2"><Calendar size={14} /> {job.period}</div>
                  <div className="flex items-center gap-2"><MapPin size={14} /> {job.location}</div>
                </div>
              </div>

              {/* Right Column: Details */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-slate-100 mb-2">{job.role}</h4>
                  <p className="text-slate-400 leading-relaxed italic">{job.description}</p>
                </div>

                <ul className="space-y-3">
                  {job.tasks.map((task, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="text-cyan-500 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyan-500" />
                      {task}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-4">
                  {job.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-mono border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Vertical line connector (Decorative) */}
              <div className="absolute top-0 -left-4 h-full w-[2px] bg-gradient-to-b from-cyan-500/50 to-transparent hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}