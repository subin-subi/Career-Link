import { FiBriefcase, FiUsers, FiBarChart2, FiSettings } from "react-icons/fi";

export default function EmployerSidebar() {
  return (
    <div className="w-64 bg-blue-950 text-white p-6 space-y-8">
      <h1 className="text-2xl font-bold">CareerLink</h1>

      <nav className="space-y-4 mt-10">
        <SidebarItem icon={<FiBriefcase />} label="Jobs" active />
        <SidebarItem icon={<FiUsers />} label="Applicants" />
        <SidebarItem icon={<FiBarChart2 />} label="Analytics" />
        <SidebarItem icon={<FiSettings />} label="Settings" />
      </nav>
    </div>
  );
}

function SidebarItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
        active ? "bg-blue-800" : "hover:bg-blue-900"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}