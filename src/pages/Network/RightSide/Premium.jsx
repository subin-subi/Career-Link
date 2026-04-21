import { useTheme } from "../../../context/ThemeContext";

export default function Premium() {
  const { theme } = useTheme();

  return (
    <div className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} rounded-xl p-5`}>
      
      <h3 className={`font-semibold text-lg mb-2 ${theme.textPrimary}`}>
        Achieve your goals faster with Premium
      </h3>

      <p className={`text-sm mb-4 ${theme.textSecondary}`}>
        See who’s viewed your profile and message members outside your network.
      </p>

      <button className="bg-yellow-400 px-5 py-2 rounded-full font-medium hover:bg-yellow-500 transition">
        Try Premium for ₹0
      </button>

      <p className={`text-xs mt-2 ${theme.textMuted}`}>
        1 month free. Easy to cancel.
      </p>
    </div>
  );
}