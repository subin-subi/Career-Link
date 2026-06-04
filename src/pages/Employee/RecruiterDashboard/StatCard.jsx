import { TrendingUp } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function StatCard({
  title,
  value,
  icon,
  growth = "+12%",
}) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        border
        rounded-2xl
        p-5
        ${theme.shadow}
        transition-all
        duration-300
        hover:-translate-y-1
      `}
    >
      <div className="flex justify-between items-start">
        <div>
          <p
            className={`
              text-sm
              font-medium
              ${theme.textSecondary}
            `}
          >
            {title}
          </p>

          <h2
            className={`
              text-3xl
              font-bold
              mt-2
              ${theme.textPrimary}
            `}
          >
            {value}
          </h2>
        </div>

        {icon && (
          <div
            className={`
              p-3
              rounded-xl
              ${theme.infoBg}
            `}
          >
            {icon}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 mt-4">
        <TrendingUp
          size={16}
          className={theme.successText}
        />

        <span
          className={`
            text-sm
            font-medium
            ${theme.successText}
          `}
        >
          {growth}
        </span>

        <span
          className={`
            text-sm
            ${theme.textSecondary}
          `}
        >
          vs last month
        </span>
      </div>
    </div>
  );
}