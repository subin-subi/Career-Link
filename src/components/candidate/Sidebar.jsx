import { NavLink } from "react-router-dom";
import { FiX } from "react-icons/fi";
import {
  FiHome,
  FiBriefcase,
  FiBookmark,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  { name: "Dashboard", path: "/candidate/dashboard", icon: <FiHome /> },
  { name: "Applied Jobs", path: "/candidate/applied", icon: <FiBriefcase /> },
  { name: "Saved Jobs", path: "/candidate/saved", icon: <FiBookmark /> },
  { name: "Profile", path: "/profile", icon: <FiUser /> },
  { name: "Settings", path: "/settings", icon: <FiSettings /> },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-screen w-64 bg-white border-r px-6 py-8 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static lg:z-auto`}
      >
        {/* Mobile Close Button */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold text-gray-800">
            Zecpath
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <FiX size={22} />
          </button>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm
                ${
                  isActive
                    ? "bg-emerald-50 text-emerald-600 font-semibold shadow-sm"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              {item.name}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}