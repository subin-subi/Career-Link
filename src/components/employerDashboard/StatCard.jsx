import { useTheme } from "../../context/ThemeContext";

export default function StatCard({ data }) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
        rounded-2xl p-4 sm:p-6
        flex justify-between items-start gap-4
      `}
    >
      <div className="flex-1 min-w-0">
        <p className={`${theme.textMuted} text-xs sm:text-sm`}>
          {data.title}
        </p>

        <h2
          className={`
            text-2xl sm:text-4xl lg:text-5xl
            font-bold mt-2 sm:mt-3
            ${theme.textPrimary}
          `}
        >
          {data.value}
        </h2>

        <p
          className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium ${
            data.change.startsWith("+")
              ? "text-green-500 dark:text-green-400"
              : "text-red-500 dark:text-red-400"
          }`}
        >
          {data.change}{" "}
          <span className={theme.textMuted}>
            vs last month
          </span>
        </p>
      </div>

      <div
        className={`
          w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
          rounded-xl flex items-center justify-center
          text-lg sm:text-xl shrink-0
          ${theme.isDark
            ? "bg-slate-700 text-white"
            : "bg-gray-100 text-gray-700"}
        `}
      >
        {data.icon}
      </div>
    </div>
  );
}