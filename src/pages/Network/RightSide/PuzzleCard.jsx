import { useTheme } from "../../../context/ThemeContext";

export default function Puzzle() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} rounded-xl p-5 flex justify-between items-center`}
    >
      <div>
        <p className={`font-semibold ${theme.textPrimary}`}>
          Need a 30 second break?
        </p>

        <p className={`text-sm ${theme.textMuted}`}>
          You've earned it! LinkedIn’s daily logic puzzle
        </p>
      </div>

      <button
        className={`border ${theme.primaryBorder} ${theme.primaryText} px-4 py-2 rounded-full ${theme.primaryHover} hover:text-white transition`}
      >
        Solve now
      </button>
    </div>
  );
}