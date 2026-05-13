import { useTheme } from "../../../context/ThemeContext";

export default function StatsSection({ stats }) {

  const { theme } = useTheme();

  return (
    <div
      className={`
        grid
        grid-cols-2
        sm:grid-cols-4
        gap-4
        ${theme.cardBg}
        rounded-2xl
        shadow-lg
        p-5
        transition-all
        duration-300
      `}
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="
            text-center
            border
            border-gray-200
            dark:border-gray-700
            rounded-xl
            py-4
            hover:scale-105
            transition
            duration-300
          "
        >

          {/* Count */}
          <h3
            className={`
              font-bold
              text-2xl
              ${theme.textPrimary}
            `}
          >
            {item.count}
          </h3>

          {/* Label */}
          <p
            className={`
              text-sm
              mt-1
              ${theme.textSecondary}
            `}
          >
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}