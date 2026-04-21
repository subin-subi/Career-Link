import { useTheme } from "../../../context/ThemeContext";

export default function Pending() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} p-5 rounded-xl flex justify-between items-center`}
    >
      <span className={theme.textPrimary}>
        No pending invitations
      </span>

      <button
        className={`${theme.primaryText} font-medium ${theme.hover}`}
      >
        Manage
      </button>
    </div>
  );
}