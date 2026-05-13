import { useTheme } from "../../context/ThemeContext";

export default function BenefitCard({ icon: Icon, title, desc }) {
  const { theme } = useTheme();

  return (
    <div className="flex gap-4 items-start">
      
      {/* Icon */}
      <div className="bg-purple-600 text-white p-3 rounded-xl shadow-md">
        <Icon size={20} />
      </div>

      {/* Content */}
      <div>
        <h3
          className={`font-semibold ${theme.textPrimary}`}
        >
          {title}
        </h3>

        <p
          className={`text-sm mt-1 ${theme.textMuted}`}
        >
          {desc}
        </p>
      </div>
    </div>
  );
}