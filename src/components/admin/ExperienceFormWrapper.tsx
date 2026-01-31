"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import ExperienceForm from "./ExperienceForm";
import { IExperience } from "@/types/admin";

export default function ExperienceFormWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<IExperience | null>(null);

  const handleClose = () => {
    setIsOpen(false);
    setSelectedEntry(null);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-2xl font-black text-xs uppercase hover:bg-cyan-400 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-[1.02] active:scale-95"
      >
        <Plus size={18} /> Add Professional Node
      </button>

      <ExperienceForm 
        isOpen={isOpen} 
        onClose={handleClose} 
        entry={selectedEntry} 
      />
    </>
  );
}