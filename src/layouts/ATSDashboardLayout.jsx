import { useState } from "react";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">

      {/* Sidebar */}
      <aside
        className={`bg-white shadow-md transition-all duration-300 
        ${sidebarOpen ? "w-64" : "w-16"} flex flex-col`}
      >
        <div className="p-4 font-bold text-lg border-b">
          ATS
        </div>

        <nav className="flex-1 p-2 space-y-2">
          <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
            Dashboard
          </a>
          <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
            Applications
          </a>
          <a className="block p-2 rounded hover:bg-gray-100 cursor-pointer">
            Jobs
          </a>
        </nav>
      </aside>

      {/* Main Section */}
      <div className="flex flex-col flex-1">

        {/* Navbar */}
        <header className="bg-white shadow px-4 py-3 flex items-center justify-between">
          
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>

          <h1 className="font-semibold text-gray-700">
            Employer Panel
          </h1>

          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}