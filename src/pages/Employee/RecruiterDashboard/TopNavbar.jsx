import { Search, Bell, Calendar, Download } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function TopNavbar() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        border
        rounded-2xl
        p-6
        ${theme.shadow}
      `}
    >
      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between gap-5">
        
        {/* Left */}
        <div>
          <h1
            className={`
              text-3xl font-bold
              ${theme.textPrimary}
            `}
          >
            Recruiter Review Dashboard
          </h1>

          <p
            className={`
              mt-1
              ${theme.textSecondary}
            `}
          >
            Review, evaluate and manage candidate interviews
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className={`
                absolute left-3 top-3
                ${theme.textMuted}
              `}
            />

            <input
              type="text"
              placeholder="Search candidates..."
              className={`
                pl-10 pr-4 py-2.5 w-72
                rounded-xl border
                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                focus:outline-none
                ${theme.focus}
              `}
            />
          </div>

          {/* Date Range */}
          <button
            className={`
              px-4 py-2.5
              rounded-xl border
              flex items-center gap-2
              ${theme.cardBg}
              ${theme.border}
              ${theme.textPrimary}
              ${theme.hover}
            `}
          >
            <Calendar size={18} />
            May 1 - May 31
          </button>

          {/* Export */}
          <button
            className={`
              px-4 py-2.5 rounded-xl
              flex items-center gap-2
              ${theme.primary}
              text-white
              ${theme.primaryHover}
            `}
          >
            <Download size={18} />
            Export
          </button>

          {/* Notifications */}
          <button
            className={`
              relative p-3 rounded-xl
              border
              ${theme.border}
              ${theme.cardBg}
              ${theme.hover}
            `}
          >
            <Bell
              size={20}
              className={theme.textPrimary}
            />

            <span
              className="
                absolute -top-1 -right-1
                h-5 w-5
                rounded-full
                bg-red-500
                text-white
                text-xs
                flex items-center justify-center
              "
            >
              3
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}