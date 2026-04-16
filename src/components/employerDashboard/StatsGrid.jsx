import StatCard from "./StatCard";
import { statsData } from "../../data/dashboardData";
import {
  Briefcase,
  FileText,
  CheckCircle2,
  Hourglass,
} from "lucide-react";

const iconMap = {
  "Total Jobs Posted": <Briefcase size={22} />,
  "Active Applications": <FileText size={22} />,
  "Hired Candidates": <CheckCircle2 size={22} />,
  "Pending Reviews": <Hourglass size={22} />,
};

export default function StatsGrid() {
  return (
    <section className="relative w-full">
      
      {/* Soft glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/20 via-transparent to-slate-900/20 rounded-3xl blur-2xl pointer-events-none" />

      {/* Responsive Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="group h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
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