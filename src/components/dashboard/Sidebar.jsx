import { NavLink } from "react-router-dom";
import { FiHome, FiBriefcase, FiUsers, FiBarChart2, FiSettings, FiX } from "react-icons/fi";

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 z-50 h-screen w-64 bg-white border-r px-6 py-8 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        {/* Close Button (Mobile Only) */}
        <div className="flex justify-between items-center mb-10 lg:hidden">
          <h2 className="text-xl font-bold text-gray-800">
            CareerLink
          </h2>
          <button onClick={() => setIsOpen(false)}>
            <FiX size={22} />
          </button>
        </div>

        {/* Desktop Logo */}
        <h2 className="hidden lg:block text-xl font-bold text-gray-800 mb-10">
          CareerLink
        </h2>

        <nav className="space-y-3">
          <NavItem to="/dashboard" icon={<FiHome />} label="Dashboard" />
          <NavItem to="/jobs" icon={<FiBriefcase />} label="Jobs" />
          <NavItem to="/applicants" icon={<FiUsers />} label="Applicants" />
          <NavItem to="/analytics" icon={<FiBarChart2 />} label="Analytics" />
          <NavItem to="/settings" icon={<FiSettings />} label="Settings" />
        </nav>
      </aside>
    </>
  );
}

function NavItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all
        ${
          isActive
            ? "bg-indigo-50 text-indigo-600 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      {label}
    </NavLink>
  );
}