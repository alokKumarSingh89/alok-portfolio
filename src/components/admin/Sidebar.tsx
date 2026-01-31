"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Briefcase, 
  Cpu, 
  Settings, 
  LogOut, 
  ExternalLink 
} from "lucide-react";

const ADMIN_LINKS = [
  { name: "Dashboard", href: "/gate", icon: LayoutDashboard },
  { name: "Experience", href: "/gate/experience", icon: Briefcase },
  { name: "Tech Stack", href: "/gate/skills", icon: Cpu },
  { name: "Settings", href: "/gate/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 h-screen bg-[#020617] border-r border-slate-800 flex flex-col">
      {/* Admin Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-cyan-500 rounded flex items-center justify-center text-black font-bold text-xs">A</div>
          <span className="font-mono text-white font-bold tracking-tighter">ADMIN.SYSTEMS</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-4">
        {ADMIN_LINKS.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium ${
                isActive 
                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20" 
                : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >
              <Icon size={18} />
              {link.name}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link 
          href="/" 
          className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:text-white text-xs font-mono uppercase tracking-widest transition-colors"
        >
          <ExternalLink size={14} />
          View Live Site
        </Link>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl text-xs font-mono uppercase tracking-widest transition-all">
          <LogOut size={14} />
          Terminate Session
        </button>
      </div>
    </div>
  );
}