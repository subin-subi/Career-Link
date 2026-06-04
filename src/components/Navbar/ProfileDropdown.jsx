import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  FiUser,
  FiGrid,
  FiBriefcase,
  FiFileText,
  FiUsers,
  FiLogOut,
  FiPlusCircle 
} from "react-icons/fi";

import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/useAuth";

function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const { theme } = useTheme();
  const { user, logout } = useAuth();

  const iconSize = 24;



  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    // move to landing page
    navigate("/");
  };


  return (
    <div
      className={`
        relative
        flex
        flex-col
        items-center
        ${theme.textPrimary}
      `}
    >
      {/* Profile Icon */}
      <div
        onClick={() => setOpen(!open)}
        className={`
          cursor-pointer
          flex
          flex-col
          items-center
          transition-all
          duration-200
          hover:opacity-80
        `}
      >
        <div
          className={`
            h-10
            w-10
            rounded-full
            flex
            items-center
            justify-center
            border
            ${theme.cardBg}
            ${theme.border}
          `}
        >
          <FiUser size={iconSize - 2} />
        </div>

       <span className="text-xs mt-1 font-medium text-white">
  Profile
</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={`
            absolute
            right-0
            top-14
            w-72
            rounded-2xl
            overflow-hidden
            z-50
            border
            backdrop-blur-xl
            animate-in
            fade-in
            zoom-in-95
            duration-200
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadowMd}
          `}
        >
          {/* USER INFO */}
          <div
            className={`
              px-5
              py-5
              border-b
              ${theme.border}
            `}
          >
            <div className="flex items-center gap-4">
              
              <div
                className={`
                  h-14
                  w-14
                  rounded-full
                  flex
                  items-center
                  justify-center
                  text-lg
                  font-bold
                  ${theme.profilePrimary}
                  ${theme.textPrimary}
                `}
              >
                {user?.name?.charAt(0) || "G"}
              </div>

              <div>
                <p
                  className={`
                    font-bold
                    text-lg
                    ${theme.textPrimary}
                  `}
                >
                  {user?.name || "Guest"}
                </p>

                <p
                  className={`
                    text-sm
                    ${theme.textMuted}
                  `}
                >
                  {user?.email}
                </p>

                <span
                  className={`
                    inline-block
                    mt-2
                    px-3
                    py-1
                    text-xs
                    rounded-full
                    capitalize
                    ${theme.infoBg}
                    ${theme.infoText}
                  `}
                >
                  {user?.role}
                </span>
              </div>
            </div>
          </div>

          {/* MENU */}
          <div className="py-2">
            
            {/* ================= ADMIN ================= */}
            {user?.role === "admin" && (
              <>
                <DropdownItem
                  to="/admin/dashboard"
                  icon={<FiGrid size={18} />}
                  label="Admin Dashboard"
                  theme={theme}
                />

                <DropdownItem
                  to="/admin/users"
                  icon={<FiUsers size={18} />}
                  label="Manage Users"
                  theme={theme}
                />

                <DropdownItem
                  to="/admin/employers"
                  icon={<FiBriefcase size={18} />}
                  label="Manage Employers"
                  theme={theme}
                />

                <DropdownItem
                  to="/admin/reports"
                  icon={<FiFileText size={18} />}
                  label="Reports"
                  theme={theme}
                />

                <DropdownItem
                  to="/admin/profile"
                  icon={<FiUser size={18} />}
                  label="Admin Profile"
                  theme={theme}
                />
              </>
            )}

            {/* ================= EMPLOYER ================= */}
            {user?.role === "employer" && (
              <>
                <DropdownItem
                  to="/employer/dashboard"
                  icon={<FiGrid size={18} />}
                  label="Employer Dashboard"
                  theme={theme}
                />

                <DropdownItem
                  to="/employer/jobs"
                  icon={<FiPlusCircle  size={18} />}
                  label="Post Jobs"
                  theme={theme}
                />

                <DropdownItem
                  to="/employer/applicants"
                  icon={<FiUsers size={18} />}
                  label="Applicants"
                  theme={theme}
                />

                <DropdownItem
                  to="/employer/profile"
                  icon={<FiUser size={18} />}
                  label="Company Profile"
                  theme={theme}
                />
                <DropdownItem
                  to="/employer/report"
                  icon={<FiFileText size={18} />}
                  label="Reports"
                  theme={theme}
                />
              </>
            )}

            {/* ================= USER ================= */}
            {user?.role === "user" && (
              <>
                <DropdownItem
                  to="/profile"
                  icon={<FiUser size={18} />}
                  label="View Profile"
                  theme={theme}
                />

                <DropdownItem
                  to="/dashboard"
                  icon={<FiGrid size={18} />}
                  label="My Dashboard"
                  theme={theme}
                />

                <DropdownItem
                  to="/applications"
                  icon={<FiFileText size={18} />}
                  label="My Applications"
                  theme={theme}
                />
              </>
            )}
          </div>

          {/* LOGOUT */}
           <div
      className={`
        border-t
        p-2
        ${theme.border}
      `}
    >
      <button
        onClick={handleLogout}
        className="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-xl
          text-red-500
          hover:bg-red-50
          dark:hover:bg-red-950/20
          transition-all
          duration-200
        "
      >
        <FiLogOut size={18} />

        <span className="font-medium">
          Logout
        </span>
      </button>
    </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;

/* =========================================
   REUSABLE DROPDOWN ITEM
========================================= */

function DropdownItem({
  to,
  icon,
  label,
  theme,
}) {
  return (
    <Link
      to={to}
      className={`
        flex
        items-center
        gap-3
        mx-2
        px-4
        py-3
        rounded-xl
        transition-all
        duration-200
        ${theme.hover}
        ${theme.textPrimary}
      `}
    >
      <span className={theme.textSecondary}>
        {icon}
      </span>

      <span className="font-medium text-sm">
        {label}
      </span>
    </Link>
  );
}