import { FiBriefcase, FiUsers, FiBarChart2, FiSettings } from "react-icons/fi";

export default function EmployerSidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-950 text-white p-6 flex flex-col">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold">Zecpath</h1>

      {/* Navigation */}
      <nav className="space-y-4 mt-10 flex-1">
        <SidebarItem icon={<FiBriefcase />} label="Jobs" active />
        <SidebarItem icon={<FiUsers />} label="Applicants" />
        <SidebarItem icon={<FiBarChart2 />} label="Analytics" />
        <SidebarItem icon={<FiSettings />} label="Settings" />
      </nav>

      {/* Optional Bottom Section */}
      <div className="pt-6 border-t border-blue-800">
        <p className="text-sm text-blue-300">© 2026 Zecpath</p>
      </div>

    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition ${
        active ? "bg-blue-800" : "hover:bg-blue-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}