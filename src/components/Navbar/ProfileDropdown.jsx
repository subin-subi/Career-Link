import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiGrid,
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiLogOut,
} from "react-icons/fi";

import { useAuth } from "../../context/useAuth";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const iconSize = 24;

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative flex flex-col items-center hover:text-gray-300">

      {/* Profile Icon */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer flex flex-col items-center"
      >
        <FiUser size={iconSize} />
        <span className="text-xs mt-1">Profile</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-12 w-64 bg-white text-black rounded-xl shadow-2xl z-50 overflow-hidden">

          {/* User Info */}
          <div className="px-4 py-4 border-b bg-gray-50">
            <p className="font-bold text-lg">
              {user?.name || "Guest"}
            </p>

            <p className="text-sm text-gray-500">
              {user?.email}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 capitalize">
              {user?.role}
            </span>
          </div>

          {/* ================= ADMIN ================= */}
          {user?.role === "admin" && (
            <>
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                Admin Dashboard
              </Link>

              <Link
                to="/admin/users"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiUsers size={18} />
                Manage Users
              </Link>

              <Link
                to="/admin/employers"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiBriefcase size={18} />
                Manage Employers
              </Link>

              <Link
                to="/admin/reports"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiFileText size={18} />
                Reports
              </Link>

              <Link
           to="/admin/profile"
            className="flex items-center gap-3 px-4 py-3 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition rounded-lg"
                  >
              <FiUser size={18} />
             <span>Admin Profile</span>
            </Link>
            </>
          )}

          {/* ================= EMPLOYER ================= */}
          {user?.role === "employer" && (
            <>
              <Link
                to="/employer/dashboard"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                Employer Dashboard
              </Link>

              <Link
                to="/employer/jobs"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiBriefcase size={18} />
                Post Jobs
              </Link>

              <Link
                to="/employer/applicants"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiUsers size={18} />
                Applicants
              </Link>

              <Link
                to="/employer/profile"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiUser size={18} />
                Company Profile
              </Link>
            </>
          )}

          {/* ================= USER ================= */}
          {user?.role === "user" && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiUser size={18} />
                View Profile
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                My Dashboard
              </Link>

              <Link
                to="/applications"
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition"
              >
                <FiFileText size={18} />
                My Applications
              </Link>
            </>
          )}

          {/* Logout */}
          <div className="border-t">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition"
            >
              <FiLogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;