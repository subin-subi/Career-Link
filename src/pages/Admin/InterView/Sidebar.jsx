import { useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  Bell,
  Users,
  Settings,
  Menu,
  X,
} from "lucide-react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-lg"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen
          w-64 bg-slate-900 text-white border-r border-slate-800
          z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6">
          <h1 className="text-2xl font-bold text-violet-500">
            Zecpath
          </h1>

          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            className="md:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
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
    </>
  );
}