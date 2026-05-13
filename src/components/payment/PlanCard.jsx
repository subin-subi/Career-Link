import { useTheme } from "../../context/ThemeContext";

export default function PlanCard({ plan, active }) {
  const { theme } = useTheme();

  return (
    <div
      className={`
        rounded-xl p-5 cursor-pointer transition-all duration-200
        ${theme.cardBg}
        ${theme.border}
        ${
          active
            ? "border-purple-500 ring-2 ring-purple-500/30"
            : "hover:border-purple-400"
        }
      `}
    >
      <div className="flex justify-between items-center gap-4">
        <div>
          <h3
            className={`font-semibold ${theme.textPrimary}`}
          >
            {plan.name}
          </h3>

          {plan.description && (
            <p
              className={`text-sm mt-1 ${theme.textMuted}`}
            >
              {plan.description}
            </p>
          )}
        </div>

        <p
          className={`
            font-bold text-lg
            ${active ? "text-purple-600" : theme.textPrimary}
          `}
        >
          {plan.price}
        </p>
      </div>
    </div>
  );
}