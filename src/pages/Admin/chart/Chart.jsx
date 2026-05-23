import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { useTheme } from "../../../context/ThemeContext";

const data = [
  { month: "Jan", applications: 120 },
  { month: "Feb", applications: 240 },
  { month: "Mar", applications: 180 },
  { month: "Apr", applications: 320 },
  { month: "May", applications: 400 },
  { month: "Jun", applications: 290 },
];

export default function ApplicationsChart() {
  const { theme } = useTheme();

  // Dynamic chart colors based on theme
  const axisColor =
    theme.textMuted.includes("gray-4")
      ? "#9CA3AF"
      : "#6B7280";

  const gridColor =
    theme.border.includes("gray-8")
      ? "#374151"
      : "#E5E7EB";

  const tooltipBg =
    theme.bg.includes("black") ||
    theme.bg.includes("#2C2C2C")
      ? "#1F1F1F"
      : "#FFFFFF";

  const tooltipText =
    theme.bg.includes("black") ||
    theme.bg.includes("#2C2C2C")
      ? "#FFFFFF"
      : "#111827";

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        border
        p-6
        rounded-3xl
        ${theme.shadow}
      `}
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2
            className={`
              text-xl
              font-semibold
              ${theme.textPrimary}
            `}
          >
            Job Applications Trend
          </h2>

          <p
            className={`
              text-sm
              mt-1
              ${theme.textMuted}
            `}
          >
            Monthly application analytics
          </p>
        </div>

        <select
          className={`
            border
            rounded-xl
            px-3
            py-2
            text-sm
            outline-none

            ${theme.border}
            ${theme.cardBg}
            ${theme.textPrimary}
          `}
        >
          <option>Last 6 Months</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke={gridColor}
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: axisColor,
              fontSize: 12,
            }}
          />

          <YAxis
            tick={{
              fill: axisColor,
              fontSize: 12,
            }}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              border: "none",
              borderRadius: "12px",
              color: tooltipText,
            }}
            labelStyle={{
              color: tooltipText,
            }}
          />

          <Line
            type="monotone"
            dataKey="applications"
            stroke="#2563eb"
            strokeWidth={3}
            dot={{
              r: 5,
            }}
            activeDot={{
              r: 8,
            }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}