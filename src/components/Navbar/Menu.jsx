import {
  FiHome,
  FiUsers,
  FiBell,
  FiBriefcase,
  FiUser,
  FiGrid,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Menu() {
  const iconSize = 24;

  // ✅ FIX: move inside component
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-8 text-sm">

      <Link to="/home" className="flex flex-col items-center hover:text-gray-300">
        <FiHome size={iconSize} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link to="/network" className="flex flex-col items-center hover:text-gray-300">
        <FiUsers size={iconSize} />
        <span className="text-xs mt-1">My Network</span>
      </Link>

      <Link to="/job" className="flex flex-col items-center hover:text-gray-300">
        <FiBriefcase size={iconSize} />
        <span className="text-xs mt-1">Jobs</span>
      </Link>

      <Link to="/chat" className="flex flex-col items-center hover:text-gray-300">
        <FiMessageSquare size={iconSize} />
        <span className="text-xs mt-1">Messaging</span>
      </Link>

      <Link to="/notifications" className="flex flex-col items-center hover:text-gray-300">
        <FiBell size={iconSize} />
        <span className="text-xs mt-1">Notifications</span>
      </Link>

      <Link to="/settings" className="flex flex-col items-center hover:text-gray-300">
        <FiSettings size={iconSize} />
        <span className="text-xs mt-1">Settings</span>
      </Link>

      {/* ✅ Profile Dropdown */}
      <div className="relative flex flex-col items-center hover:text-gray-300">

        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          <FiUser size={iconSize} />
          <span className="text-xs mt-1">Profile</span>
        </div>

        {open && (
          <div className="absolute right-0 top-12 w-56 bg-white text-black rounded-lg shadow-lg z-50">

            <div className="px-4 py-3 border-b">
              <p className="font-semibold">Admin</p>
              <p className="text-sm text-gray-500">Candidate</p>
            </div>

            <Link to="/profile" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
              <FiUser size={18} />
              View Profile
            </Link>

            <Link to="/dashboard" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
              📊 My Dashboard
            </Link>

            <Link to="/applications" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
              📄 My Applications
            </Link>

            <div className="border-t"></div>

            <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">
              Logout
            </button>
          </div>
        )}
      </div>

      <div className="h-8 border-l border-gray-400"></div>

      <div className="flex flex-col items-center hover:text-gray-300 cursor-pointer">
        <FiGrid size={iconSize} />
        <span className="text-xs mt-1">For Business</span>
      </div>

      <Link to="/pay" className="flex flex-col items-center hover:text-gray-300">
        <FiBriefcase size={iconSize} />
        <span className="text-xs mt-1">Try Premium</span>
      </Link>

    </div>
  );
}