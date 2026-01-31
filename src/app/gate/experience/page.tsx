import {prisma} from "@/lib/prisma";
import { IExperience } from "@/types/admin";
import ExperienceTable from "@/components/admin/ExperienceTable";
import ExperienceFormWrapper from "@/components/admin/ExperienceFormWrapper";
import { Briefcase, Database, Terminal, Shield } from "lucide-react";

export default async function ExperiencePage() {
  // Fetch data directly from Local Postgres on the server
  const experiences = await prisma.experience.findMany({
    orderBy: { createdAt: 'desc' }
  }) as IExperience[];

  return (
    <div className="max-w-7xl mx-auto space-y-8 p-8">
      {/* 1. Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">
            <Shield size={12} /> System_Authenticated
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tighter flex items-center gap-4">
            Experience.Archive
          </h1>
          <p className="text-slate-500 font-mono text-xs uppercase tracking-widest">
            Relational Data Nodes: {experiences.length}
          </p>
        </div>

        {/* Handles the state for opening the Add/Edit form */}
        <ExperienceFormWrapper />
      </div>

      {/* 2. System Status Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-xl">
          <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">DB_Engine</p>
          <div className="flex items-center gap-3">
            <Database className="text-cyan-500" size={20} />
            <span className="text-white font-bold font-mono text-sm">Postgres 16 (Local)</span>
          </div>
        </div>
        
        <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-xl">
          <p className="text-[10px] font-mono text-slate-500 uppercase mb-2">ORM_Client</p>
          <p className="text-white font-bold font-mono text-sm">Prisma v7.3.0</p>
        </div>

        <div className="p-6 rounded-2xl bg-cyan-500/5 border border-cyan-500/20 backdrop-blur-xl">
          <p className="text-[10px] font-mono text-cyan-600 uppercase mb-2">Deployment_Status</p>
          <p className="text-cyan-400 font-bold font-mono text-sm animate-pulse">LIVE_SYNC_ENABLED</p>
        </div>
      </div>

      {/* 3. The Interactive Data Table */}
      <div className="bg-[#020617]/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
        <ExperienceTable data={experiences} />
      </div>

      {/* 4. Console Log Footer */}
      <div className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-slate-900 font-mono text-[11px] text-slate-600">
        <Terminal size={14} className="text-slate-500" />
        <span>root@portfolio:~$ fetch --all --source=local_postgres --ordered=desc</span>
      </div>
    </div>
  );
}