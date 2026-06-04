import {
  LayoutDashboard,
  Users,
  Calendar,
  FileText,
  Settings,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

export default function Sidebar() {
  const { theme } = useTheme();

  return (
    <aside
      className={`
        w-64
        min-h-screen
        hidden lg:flex
        flex-col
        ${theme.sidebarBg}
        ${theme.border}
        border-r
      `}
    >
      {/* Logo */}
      <div
        className={`
          p-6
          border-b
          ${theme.border}
        `}
      >
        <h1
          className={`
            text-2xl
            font-bold
            ${theme.primaryText}
          `}
        >
          HirePro AI
        </h1>

        <p
          className={`
            text-sm mt-1
            ${theme.textSecondary}
          `}
        >
          Recruiter Dashboard
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        <MenuItem
          icon={<LayoutDashboard size={18} />}
          text="Dashboard"
        />

        <MenuItem
          icon={<Users size={18} />}
          text="Interviews"
          active
        />

        <MenuItem
          icon={<Calendar size={18} />}
          text="Calendar"
        />

        <MenuItem
          icon={<FileText size={18} />}
          text="Reports"
        />

        <MenuItem
          icon={<Settings size={18} />}
          text="Settings"
        />
      </nav>

      {/* Footer */}
      <div
        className={`
          p-4
          border-t
          ${theme.border}
        `}
      >
        <div
          className={`
            rounded-xl
            p-3
            ${theme.infoBg}
          `}
        >
          <h4
            className={`font-medium ${theme.textPrimary}`}
          >
            Recruiter Pro
          </h4>

          <p
            className={`text-xs mt-1 ${theme.textSecondary}`}
          >
            AI-powered hiring assistant
          </p>
        </div>
      </div>
    </aside>
  );
}

function MenuItem({ icon, text, active = false }) {
  const { theme } = useTheme();

  return (
    <button
      className={`
        w-full
        flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        transition-all

        ${
          active
            ? `${theme.primary} text-white shadow-md`
            : `${theme.textSecondary} ${theme.hover}`
        }
      `}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  );
}