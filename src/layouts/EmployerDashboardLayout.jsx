import { useTheme } from "../context/ThemeContext";

export default function DashboardLayout({ children }) {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.textPrimary} transition-all duration-300`}
    >
      {children}
    </div>
  );
}