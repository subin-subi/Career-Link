import { useTheme } from "../../context/ThemeContext";

export default function WelcomeBanner() {
  const { theme } = useTheme();

  return (
    <div
      className={`${theme.cardBg} ${theme.border} ${theme.shadowLg} rounded-2xl p-4 sm:p-6 lg:p-8`}
    >
      <h1
        className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight ${theme.textPrimary}`}
      >
        Welcome back! 👋
      </h1>

      <p
        className={`${theme.textMuted} mt-2 text-sm sm:text-base lg:text-lg`}
      >
        Here's what's happening with your job postings today.
      </p>
    </div>
  );
}