import Sidebar from "@/components/admin/Sidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-[#020617] text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-black/20">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}