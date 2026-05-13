import StatCard from "./StatCard";
import { statsData } from "../../data/dashboardData";
import {
  Briefcase,
  FileText,
  CheckCircle2,
  Hourglass,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const iconMap = {
  "Total Jobs Posted": <Briefcase size={22} />,
  "Active Applications": <FileText size={22} />,
  "Hired Candidates": <CheckCircle2 size={22} />,
  "Pending Reviews": <Hourglass size={22} />,
};

export default function StatsGrid() {
  const { theme } = useTheme();

  return (
    <section className="relative w-full">

      {/* Soft glow background */}
      <div
        className={`absolute inset-0 rounded-3xl blur-2xl pointer-events-none ${
          theme.isDark
            ? "bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20"
            : "bg-gradient-to-r from-gray-200/40 via-transparent to-gray-200/40"
        }`}
      />

      {/* Responsive Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((item) => (
          <div
            key={item.id}
            className={`
              group h-full rounded-2xl border
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-2xl
              ${theme.border}
              ${theme.cardBg}
            `}
          >
            <div className="h-full">
              <StatCard
                data={{
                  ...item,
                  icon: iconMap[item.title],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}