import { TrendingUp } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "May 1", interviews: 10 },
  { day: "May 7", interviews: 20 },
  { day: "May 13", interviews: 14 },
  { day: "May 19", interviews: 22 },
  { day: "May 25", interviews: 18 },
  { day: "May 31", interviews: 25 },
];

export default function InterviewTrendChart() {
  const { theme, currentTheme } = useTheme();

  const axisColor =
    currentTheme === "light" ? "#6B7280" : "#9CA3AF";

  const tooltipBg =
    currentTheme === "light" ? "#FFFFFF" : "#1F2937";

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        border
        rounded-2xl
        p-6
        ${theme.shadowMd}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className={`text-xl font-bold ${theme.textPrimary}`}
          >
            Interview Trend
          </h2>

          <p
            className={`text-sm mt-1 ${theme.textSecondary}`}
          >
            Monthly interview activity
          </p>
        </div>

        <div
          className={`
            p-3 rounded-xl
            ${theme.infoBg}
          `}
        >
          <TrendingUp
            size={20}
            className={theme.infoText}
          />
        </div>
      </div>

      {/* Summary */}
      <div className="mb-6">
        <h3
          className={`text-3xl font-bold ${theme.textPrimary}`}
        >
          109
        </h3>

        <p
          className={`text-sm ${theme.successText}`}
        >
          +18% compared to last month
        </p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            opacity={0.2}
          />

          <XAxis
            dataKey="day"
            tick={{ fill: axisColor }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: axisColor }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderRadius: "12px",
              border: "none",
              color: "#fff",
            }}
          />

          <Line
            type="monotone"
            dataKey="interviews"
            stroke="#1B365D"
            strokeWidth={4}
            dot={{
              r: 5,
              fill: "#1B365D",
            }}
            activeDot={{
              r: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}