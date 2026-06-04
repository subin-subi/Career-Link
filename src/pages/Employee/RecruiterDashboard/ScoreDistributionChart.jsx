import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { PieChart as PieChartIcon } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

const data = [
  {
    name: "90-100%",
    value: 25,
  },
  {
    name: "70-89%",
    value: 35,
  },
  {
    name: "50-69%",
    value: 15,
  },
  {
    name: "Below 50%",
    value: 10,
  },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
];

export default function ScoreDistributionChart() {
  const { theme, currentTheme } = useTheme();

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
            Score Distribution
          </h2>

          <p
            className={`text-sm mt-1 ${theme.textSecondary}`}
          >
            Candidate performance breakdown
          </p>
        </div>

        <div
          className={`
            p-3 rounded-xl
            ${theme.infoBg}
          `}
        >
          <PieChartIcon
            size={20}
            className={theme.infoText}
          />
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={65}
            outerRadius={95}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.name}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBg,
              borderRadius: "12px",
              border: "none",
            }}
          />
        </PieChart>
      </ResponsiveContainer>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span
                className={`text-sm ${theme.textSecondary}`}
              >
                {item.name}
              </span>
            </div>

            <span
              className={`font-medium ${theme.textPrimary}`}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div
        className={`
          mt-5 pt-4 border-t
          ${theme.border}
        `}
      >
        <div className="flex justify-between">
          <span
            className={`text-sm ${theme.textSecondary}`}
          >
            Average Interview Score
          </span>

          <span
            className={`font-semibold ${theme.successText}`}
          >
            84%
          </span>
        </div>
      </div>
    </div>
  );
}