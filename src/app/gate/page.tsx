"use client";
import { motion } from "framer-motion";
import { 
  Activity, 
  Users, 
  BarChart3, 
  ShieldCheck, 
  Clock,
  Terminal as TerminalIcon
} from "lucide-react";

const SYSTEM_LOGS = [
  { event: "MFE Module Updated", status: "Success", time: "12 mins ago" },
  { event: "New Inquiry: Equinix Project", status: "Pending", time: "1 hr ago" },
  { event: "Cache Purge - Redis", status: "Success", time: "4 hrs ago" },
];

export default function AdminDashboard() {
  return (
    <div className="max-w-[1600px] mx-auto space-y-10">
      
      {/* 1. TOP HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Console.Root</h1>
          <p className="text-slate-500 font-mono text-xs mt-1 uppercase tracking-[0.2em]">
            Managing 11.2 Years of Deployment History
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-emerald-500 text-[10px] font-bold font-mono">NODE_ACTIVE</span>
          </div>
          <button className="px-4 py-2 bg-cyan-500 text-black text-[10px] font-bold font-mono rounded-lg hover:bg-cyan-400 transition-all uppercase">
            Force Rebuild
          </button>
        </div>
      </div>

      {/* 2. ANALYTICS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Portfolio Reach", val: "2.4k", change: "+12%", icon: Users },
          { label: "Uptime Rate", val: "99.9%", change: "Stable", icon: Activity },
          { label: "Avg. Load Time", val: "0.8s", change: "-0.2s", icon: ShieldCheck },
          { label: "Code Coverage", val: "92%", change: "+5%", icon: BarChart3 },
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/30 border border-white/5 hover:border-cyan-500/30 transition-all group"
          >
            <div className="flex justify-between items-center mb-4">
              <item.icon className="text-slate-500 group-hover:text-cyan-400 transition-colors" size={20} />
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">{item.change}</span>
            </div>
            <p className="text-slate-500 text-[10px] uppercase font-mono tracking-widest">{item.label}</p>
            <p className="text-3xl font-bold text-white mt-1">{item.val}</p>
          </motion.div>
        ))}
      </div>

      {/* 3. CORE MANAGEMENT PANELS */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Tech Stack Distribution (Mock Graph) */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/20 border border-slate-800">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <TerminalIcon size={18} className="text-cyan-400" /> Technology.Entropy
            </h3>
            <select className="bg-black border border-slate-800 text-[10px] font-mono p-1 rounded text-slate-400 outline-none">
              <option>Last 12 Months</option>
            </select>
          </div>
          
          <div className="h-64 flex items-end justify-between gap-4">
            {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }} animate={{ height: `${h}%` }}
                className="flex-1 bg-gradient-to-t from-cyan-500/10 to-cyan-500/40 rounded-t-sm relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                  {h}%
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] font-mono text-slate-600">
            <span>JAN</span><span>MAR</span><span>MAY</span><span>JUL</span><span>SEP</span><span>NOV</span>
          </div>
        </div>

        {/* Live System Logs */}
        <div className="p-8 rounded-3xl bg-slate-900/20 border border-slate-800">
          <h3 className="text-lg font-bold text-white mb-6">Recent_Events</h3>
          <div className="space-y-6">
            {SYSTEM_LOGS.map((log, i) => (
              <div key={i} className="flex gap-4">
                <div className="mt-1">
                  <div className="h-2 w-2 rounded-full bg-cyan-500" />
                  <div className="w-[1px] h-full bg-slate-800 mx-auto mt-2" />
                </div>
                <div>
                  <p className="text-sm text-slate-300 font-medium">{log.event}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] text-slate-600 font-mono uppercase">{log.time}</span>
                    <span className="text-[9px] text-cyan-500 font-mono px-1.5 py-0.5 bg-cyan-500/10 rounded uppercase tracking-tighter">
                      {log.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 border border-slate-800 text-slate-500 text-[10px] font-mono rounded-xl hover:text-white hover:border-slate-700 transition-all uppercase tracking-widest">
            Audit Full Logs
          </button>
        </div>

      </div>

      {/* 4. DATA QUICK-EDIT SECTION */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-500/5 via-cyan-500/5 to-transparent border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="h-16 w-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <Clock className="text-cyan-400" size={32} />
          </div>
          <div>
            <h4 className="text-white font-bold">Experience Resume Point</h4>
            <p className="text-slate-500 text-sm italic">Last major update: Apr 2025 (Synchrony Fintech)</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-3 text-slate-300 font-bold text-sm hover:text-white transition-colors">Dismiss</button>
          <button className="px-6 py-3 bg-white text-black rounded-xl font-bold text-sm shadow-lg shadow-white/5">Update CV Data</button>
        </div>
      </div>
    </div>
  );
}