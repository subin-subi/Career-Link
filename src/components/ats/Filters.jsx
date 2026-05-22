import { Search, Briefcase, Filter } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function Filters() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
      
      {/* Search Input */}
      <div className="relative flex-1">
        <Search
          size={18}
          className={`
            absolute
            left-4
            top-1/2
            -translate-y-1/2
            ${theme.textMuted}
          `}
        />

        <input
          type="text"
          placeholder="Search applicants..."
          className={`
            w-full
            pl-11
            pr-4
            py-3
            rounded-2xl
            border
            text-sm
            transition-all
            duration-200
            outline-none
            ${theme.cardBg}
            ${theme.border}
            ${theme.textPrimary}
            ${theme.focus}
            placeholder:text-gray-400
          `}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* Role Filter */}
        <div className="relative">
          <Briefcase
            size={17}
            className={`
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              ${theme.textMuted}
            `}
          />

          <select
            className={`
              appearance-none
              min-w-[190px]
              pl-11
              pr-10
              py-3
              rounded-2xl
              border
              text-sm
              font-medium
              transition-all
              duration-200
              outline-none
              cursor-pointer
              ${theme.cardBg}
              ${theme.border}
              ${theme.textPrimary}
              ${theme.focus}
            `}
          >
            <option>All Roles</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>UI/UX Designer</option>
          </select>
        </div>

        {/* Status Filter */}
        <div className="relative">
          <Filter
            size={17}
            className={`
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              ${theme.textMuted}
            `}
          />

          <select
            className={`
              appearance-none
              min-w-[180px]
              pl-11
              pr-10
              py-3
              rounded-2xl
              border
              text-sm
              font-medium
              transition-all
              duration-200
              outline-none
              cursor-pointer
              ${theme.cardBg}
              ${theme.border}
              ${theme.textPrimary}
              ${theme.focus}
            `}
          >
            <option>All Status</option>
            <option>Pending</option>
            <option>Shortlisted</option>
            <option>Rejected</option>
          </select>
        </div>
      </div>
    </div>
  );
}