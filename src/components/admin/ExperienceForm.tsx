"use client";
import { useState, useEffect, useTransition, useCallback } from "react";
import { 
  X, Save, Plus, Trash2, Loader2, Sparkles, 
  Terminal, Layers, Zap, Info, Command 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { IExperience } from "@/types/admin";
import { saveExperience } from "@/app/gate/experience/actions";

interface ExperienceFormProps {
  isOpen: boolean;
  onClose: () => void;
  entry: IExperience | null;
}

export default function ExperienceForm({ isOpen, onClose, entry }: ExperienceFormProps) {
  const [isPending, startTransition] = useTransition();
  const [activeTab, setActiveTab] = useState<'meta' | 'tasks' | 'stack'>('meta');
  const [formData, setFormData] = useState<IExperience>({
    company: "", role: "", period: "", impactMetric: "", 
    description: "", tasks: [""], techStack: [""]
  });

  // Hotkeys: Cmd+S to save, Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 's') {
        e.preventDefault();
        document.getElementById('submit-btn')?.click();
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    if (entry) setFormData(entry);
    else resetForm();
  }, [entry, isOpen]);

  const resetForm = () => setFormData({
    company: "", role: "", period: "", impactMetric: "", 
    description: "", tasks: [""], techStack: [""]
  });

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    startTransition(async () => {
      const result = await saveExperience(formData);
      if (result.success) onClose();
      else alert(result.error);
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex justify-end overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose} className="absolute inset-0 bg-black/90 backdrop-blur-md" 
      />
      
      <motion.div 
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 28, stiffness: 220 }}
        className="relative w-full max-w-3xl bg-[#050505] border-l border-white/10 h-full flex flex-col shadow-2xl"
      >
        {/* TOP STATUS BAR */}
        <div className="h-1 bg-slate-900 w-full">
           <motion.div 
             className="h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" 
             initial={{ width: "0%" }}
             animate={{ width: activeTab === 'meta' ? '33%' : activeTab === 'tasks' ? '66%' : '100%' }}
           />
        </div>

        {/* HEADER */}
        <div className="p-8 border-b border-white/5 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] mb-2">
              <Terminal size={12} /> System_Editor_v2
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tighter">
              {entry ? "Refactor_Node" : "Deploy_New_Node"}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-slate-500">
              <Command size={10} /> S to Save
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X size={20} /></button>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div className="flex border-b border-white/5 bg-white/[0.01]">
          {[
            { id: 'meta', label: '01 Metadata', icon: Info },
            { id: 'tasks', label: '02 Impact_Logs', icon: Zap },
            { id: 'stack', label: '03 Tech_Entropy', icon: Layers },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-4 flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-widest transition-all ${
                activeTab === tab.id ? "text-cyan-400 border-b-2 border-cyan-400 bg-cyan-400/5" : "text-slate-500 hover:text-slate-300"
              }`}
            >
              <tab.icon size={14} /> {tab.label}
            </button>
          ))}
        </div>

        {/* FORM CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'meta' && (
              <motion.div 
                key="meta" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Entity_Name</label>
                    <input autoFocus value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 ring-cyan-500/50 outline-none transition-all" placeholder="e.g. Equinix" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Designation</label>
                    <input value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 ring-cyan-500/50 outline-none" placeholder="e.g. Senior Full-Stack Engineer" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Temporal_Range</label>
                    <input value={formData.period} onChange={e => setFormData({...formData, period: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:ring-1 ring-cyan-500/50 outline-none" placeholder="2020 - 2023" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest font-bold">Primary_Impact_Metric</label>
                    <input value={formData.impactMetric} onChange={e => setFormData({...formData, impactMetric: e.target.value})} className="w-full bg-cyan-500/5 border border-cyan-500/20 rounded-xl p-4 text-cyan-400 font-mono focus:ring-1 ring-cyan-500/50 outline-none" placeholder="e.g. 45% Performance Increase" />
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tasks' && (
              <motion.div 
                key="tasks" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="space-y-4"
              >
                {formData.tasks.map((task, i) => (
                  <div key={i} className="group relative flex items-center gap-3 bg-white/[0.02] p-2 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                    <div className="pl-4 text-cyan-900 font-mono text-xs">{i+1}</div>
                    <textarea 
                      value={task} 
                      onChange={e => {
                        const t = [...formData.tasks]; t[i] = e.target.value; 
                        setFormData({...formData, tasks: t});
                      }}
                      className="flex-1 bg-transparent p-3 text-sm text-slate-300 outline-none min-h-[80px] resize-none" 
                      placeholder="Achieved X by implementing Y resulting in Z..."
                    />
                    <button onClick={() => setFormData({...formData, tasks: formData.tasks.filter((_, idx) => idx !== i)})} className="p-3 text-slate-700 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
                <button onClick={() => setFormData({...formData, tasks: [...formData.tasks, ""]})} className="w-full py-4 border-2 border-dashed border-white/5 rounded-2xl text-slate-500 font-mono text-[10px] hover:border-cyan-500/30 hover:text-cyan-500 transition-all uppercase tracking-widest">
                  + append_new_log_entry
                </button>
              </motion.div>
            )}

            {activeTab === 'stack' && (
              <motion.div 
                key="stack" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                className="grid grid-cols-3 gap-3"
              >
                {formData.techStack.map((tech, i) => (
                  <div key={i} className="relative group">
                    <input 
                      value={tech} 
                      onChange={e => {
                        const s = [...formData.techStack]; s[i] = e.target.value;
                        setFormData({...formData, techStack: s});
                      }}
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-3 pr-10 text-xs text-white focus:border-purple-500 outline-none transition-all"
                      placeholder="e.g. Kafka"
                    />
                    <button onClick={() => setFormData({...formData, techStack: formData.techStack.filter((_, idx) => idx !== i)})} className="absolute right-3 top-3.5 text-slate-700 hover:text-red-500">
                      <X size={14} />
                    </button>
                  </div>
                ))}
                <button onClick={() => setFormData({...formData, techStack: [...formData.techStack, ""]})} className="p-3 border border-dashed border-white/10 rounded-xl text-slate-600 hover:text-purple-400 hover:border-purple-400/50 transition-all text-xs font-mono">
                  + Add_Tech
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* FOOTER ACTIONS */}
        <div className="p-8 border-t border-white/5 bg-black/40 backdrop-blur-md flex gap-4">
           <button onClick={onClose} className="px-8 py-4 text-slate-500 font-bold hover:text-white transition-colors">ABORT</button>
           <button 
             id="submit-btn"
             disabled={isPending} 
             onClick={() => handleSubmit()} 
             className="flex-1 py-4 bg-gradient-to-r from-cyan-600 to-cyan-500 text-black font-black rounded-2xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all disabled:opacity-50 active:scale-[0.98]"
           >
             {isPending ? <Loader2 className="animate-spin" size={20} /> : <Save size={20} />}
             EXECUTE_DATABASE_COMMIT
           </button>
        </div>
      </motion.div>
    </div>
  );
}