import { useState } from "react";
import {
  FiUser,
  FiSettings,
  FiLogOut,
  FiGrid,
  FiUsers,
  FiBriefcase,
  FiFileText,
} from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative">

      {/* Profile Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center"
      >
        <FiUser
          size={24}
          className="text-white cursor-pointer"
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-10 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden z-[999]">

          {/* User Info */}
          <div className="px-4 py-4 border-b bg-gray-50">

            <h2 className="font-bold text-black text-lg">
              {user?.name || "Guest"}
            </h2>

            <p className="text-sm text-gray-600">
              {user?.email || "No Email"}
            </p>

            <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-600 capitalize">
              {user?.role || "user"}
            </span>
          </div>

          {/* ================= ADMIN ================= */}
          {user?.role === "admin" && (
            <>
              <Link
                to="/admin/dashboard"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                <span>Admin Dashboard</span>
              </Link>

              <Link
                to="/admin/users"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiUsers size={18} />
                <span>Manage Users</span>
              </Link>

              <Link
                to="/admin/employers"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiBriefcase size={18} />
                <span>Manage Employers</span>
              </Link>

              <Link
                to="/admin/reports"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiFileText size={18} />
                <span>Reports</span>
              </Link>
            </>
          )}

          {/* ================= EMPLOYER ================= */}
          {user?.role === "employer" && (
            <>
              <Link
                to="/employer/dashboard"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                <span>Employer Dashboard</span>
              </Link>

              <Link
                to="/employer/jobs"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiBriefcase size={18} />
                <span>Post Jobs</span>
              </Link>

              <Link
                to="/employer/applicants"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiUsers size={18} />
                <span>Applicants</span>
              </Link>

              <Link
                to="/employer/profile"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiUser size={18} />
                <span>Company Profile</span>
              </Link>
            </>
          )}

          {/* ================= USER ================= */}
          {user?.role === "user" && (
            <>
              <Link
                to="/profile"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiUser size={18} />
                <span>Profile</span>
              </Link>

              <Link
                to="/dashboard"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiGrid size={18} />
                <span>My Dashboard</span>
              </Link>

              <Link
                to="/applications"
                className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition"
              >
                <FiFileText size={18} />
                <span>My Applications</span>
              </Link>
            </>
          )}

          {/* Settings */}
          <Link
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 text-black hover:bg-gray-100 transition border-t"
          >
            <FiSettings size={18} />
            <span>Settings</span>
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 transition border-t"
          >
            <FiLogOut size={18} />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  );
}