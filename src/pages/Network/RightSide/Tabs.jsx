import { useTheme } from "../../../context/ThemeContext";

export default function Tab() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} rounded-xl px-6 py-3 flex gap-8`}
    >
      {/* Active Tab */}
      <button
        className={`border-b-2 ${theme.primaryBorder} pb-2 font-semibold ${theme.textPrimary}`}
      >
        Grow
      </button>

      {/* Inactive Tab */}
      <button className={`${theme.textMuted} ${theme.hover}`}>
        Catch up
      </button>
    </div>
  );
}