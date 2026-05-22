import { TrendingUp } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function StatsCard({
  title,
  value,
  icon,
  color,
  growth = "+12%",
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        relative
        overflow-hidden
        border
        rounded-2xl
        p-4
        sm:p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
      `}
    >
      {/* Background Glow */}
      <div
        className={`
          absolute
          top-0
          right-0
          h-24
          w-24
          rounded-full
          blur-3xl
          opacity-10
          ${color}
        `}
      />

      <div className="relative z-10 flex items-start justify-between">
        
        {/* Left Content */}
        <div className="flex items-center gap-4">
          
          {/* Icon */}
          <div
            className={`
              h-14
              w-14
              rounded-2xl
              flex
              items-center
              justify-center
              shadow-md
              ${color}
            `}
          >
            <div className="text-white text-2xl">
              {icon}
            </div>
          </div>

          {/* Text */}
          <div>
            <p
              className={`
                text-sm
                font-medium
                ${theme.textMuted}
              `}
            >
              {title}
            </p>

            <h2
              className={`
                mt-1
                text-2xl
                sm:text-3xl
                font-bold
                tracking-tight
                ${theme.textPrimary}
              `}
            >
              {value}
            </h2>
          </div>
        </div>

        {/* Growth Badge */}
        <div
          className={`
            flex
            items-center
            gap-1
            px-2.5
            py-1
            rounded-xl
            text-xs
            font-semibold
            ${theme.successBg}
            ${theme.successText}
          `}
        >
          <TrendingUp size={14} />
          {growth}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-5 flex items-center justify-between">
        
        <p
          className={`
            text-xs
            ${theme.textMuted}
          `}
        >
          Updated just now
        </p>

        <button
          className={`
            text-xs
            font-semibold
            transition-all
            duration-200
            ${theme.primaryText}
            hover:underline
          `}
        >
          View Details
        </button>
      </div>
    </div>
  );
}