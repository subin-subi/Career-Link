import {
  LayoutDashboard,
  Calendar,
  Bell,
  Users,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-violet-500">
          HirePro
        </h1>
      </div>

      <nav className="px-4 space-y-2">
        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800">
          <LayoutDashboard size={18} />
          Dashboard
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg bg-violet-600">
          <Users size={18} />
          Interviews
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800">
          <Calendar size={18} />
          Calendar
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800">
          <Bell size={18} />
          Notifications
        </button>

        <button className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-slate-800">
          <Settings size={18} />
          Settings
        </button>
      </nav>
    </aside>
  );
}