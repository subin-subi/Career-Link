import { Briefcase, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ATSHeader() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
        border
        rounded-2xl
        p-5
        sm:p-6
        mb-6
        transition-all
        duration-300
      `}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        
        {/* Left Section */}
        <div className="flex items-start gap-4">
          
          {/* Icon */}
          <div
            className={`
              h-14
              w-14
              rounded-2xl
              flex
              items-center
              justify-center
              ${theme.primary}
              shadow-lg
            `}
          >
            <Briefcase className="text-white" size={26} />
          </div>

          {/* Title & Subtitle */}
          <div>
            <h1
              className={`
                text-2xl
                sm:text-3xl
                font-bold
                tracking-tight
                ${theme.textPrimary}
              `}
            >
              ATS Dashboard
            </h1>

            <p
              className={`
                mt-1
                text-sm
                sm:text-base
                ${theme.textMuted}
              `}
            >
              Manage applications, hiring pipeline, and recruitment workflow
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-3 mt-4">
              
              <div
                className={`
                  px-3
                  py-1.5
                  rounded-xl
                  text-xs
                  font-medium
                  ${theme.infoBg}
                  ${theme.infoText}
                `}
              >
                120 Applications
              </div>

              <div
                className={`
                  px-3
                  py-1.5
                  rounded-xl
                  text-xs
                  font-medium
                  ${theme.successBg}
                  ${theme.successText}
                `}
              >
                32 Shortlisted
              </div>

              <div
                className={`
                  px-3
                  py-1.5
                  rounded-xl
                  text-xs
                  font-medium
                  ${theme.warningBg}
                  ${theme.warningText}
                `}
              >
                8 Interviews Today
              </div>
            </div>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          
          {/* Secondary Button */}
          <button
            className={`
              px-4
              py-2.5
              rounded-xl
              text-sm
              font-medium
              border
              transition-all
              duration-200
              ${theme.border}
              ${theme.textSecondary}
              ${theme.hover}
            `}
          >
            Export Report
          </button>

          {/* Primary Button */}
          <button
            className={`
              flex
              items-center
              justify-center
              gap-2
              px-5
              py-2.5
              rounded-xl
              text-sm
              font-medium
              text-white
              transition-all
              duration-200
              ${theme.primary}
              ${theme.primaryHover}
              shadow-md
            `}
          >
            <Plus size={16} />
            Add Job
          </button>
        </div>
      </div>
    </div>
  );
}