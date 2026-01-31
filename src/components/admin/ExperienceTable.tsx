"use client";
import { useState } from "react";
import { Trash2, Loader2 } from "lucide-react";
import { deleteExperience } from "@/app/gate/experience/actions";
import { IExperience } from "@/types/admin";

export default function ExperienceTable({ data }: { data: IExperience[] }) {
  const [deletingId, setDeletingId] = useState<number | null>(null);

  const handleDelete = async (id: number) => {
    // Use a custom confirm or standard alert for safety
    if (!confirm("Are you sure you want to permanently delete this career node?")) return;

    setDeletingId(id);
    const result = await deleteExperience(id);
    
    if (!result.success) {
      alert(result.error);
    }
    setDeletingId(null);
  };

  return (
    <table className="w-full text-left">
      {/* ... thead stays the same ... */}
      <tbody className="divide-y divide-slate-800/50">
        {data.map((item) => (
          <tr key={item.id} className="group hover:bg-white/[0.01]">
            {/* ... other columns ... */}
            <td className="px-6 py-5 text-right">
              <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Edit Button here */}
                
                <button 
                  onClick={() => item.id && handleDelete(item.id)}
                  disabled={deletingId === item.id}
                  className="p-2 hover:bg-red-500/10 rounded-lg text-slate-600 hover:text-red-500 transition-all disabled:opacity-50"
                >
                  {deletingId === item.id ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Trash2 size={16} />
                  )}
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}