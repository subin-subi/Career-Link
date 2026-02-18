import { useState } from "react";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      
      {/* Profile Icon */}
      <FiUser
        size={24}
        className="text-white cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg text-black">

          {/* Profile */}
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <FiUser size={18} />
            Profile
          </Link>

          {/* Settings */}
          <Link
            to="/settings"
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
          >
            <FiSettings size={18} />
            Settings
          </Link>

          {/* Logout */}
          <button
            className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
            onClick={() => {
              localStorage.removeItem("token");
              window.location.href = "/login";
            }}
          >
            <FiLogOut size={18} />
            Logout
          </button>

        </div>
      )}
    </div>
  );
}
