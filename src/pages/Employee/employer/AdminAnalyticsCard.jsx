import {
  Users,
  Briefcase,
  UserCheck,
  TrendingUp,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

export default function AdminAnalyticsCard() {

  const { theme } = useTheme();

  const analytics = [
    {
      title: "Total Users",
      value: 85,
      color: "bg-green-500",
      text: "text-green-400",
      icon: <Users size={18} />,
    },

    {
      title: "Active Employers",
      value: 72,
      color: "bg-orange-500",
      text: "text-orange-400",
      icon: <Briefcase size={18} />,
    },

    {
      title: "Profile Completion",
      value: 90,
      color: "bg-blue-500",
      text: "text-blue-400",
      icon: <UserCheck size={18} />,
    },

    {
      title: "Job Success Rate",
      value: 68,
      color: "bg-purple-500",
      text: "text-purple-400",
      icon: <TrendingUp size={18} />,
    },
  ];

  return (
    <div
      className={`
      w-full
      rounded-3xl
      p-8
      border

      ${theme.cardBg}
      ${theme.border}
      ${theme.shadowMd}
      `}
    >

      {/* Header */}
      <div
        className="
        flex items-center
        justify-between
        mb-8
        "
      >

        <div>

          <h2
            className={`
            text-2xl font-bold
            ${theme.textPrimary}
            `}
          >
            Admin Analytics
          </h2>

          <p
            className={`
            mt-1
            ${theme.textMuted}
            `}
          >
            Platform performance overview
          </p>
        </div>

        <button
          className={`
          px-5 py-2 rounded-xl
          text-sm font-medium
          transition-all duration-300
          border

          ${theme.primary}
          ${theme.secondaryText}
          ${theme.primaryBorder}
          ${theme.primaryHover}
          `}
        >
          Full Report →
        </button>
      </div>

      {/* Main Section */}
      <div
        className="
        flex flex-col lg:flex-row
        gap-10 items-center
        "
      >

        {/* Circular Progress */}
        <div
          className="
          relative w-40 h-40
          flex items-center
          justify-center
          "
        >

          <svg
            className="
            absolute top-0 left-0
            w-full h-full
            rotate-[-90deg]
            "
          >

            {/* Background */}
            <circle
              cx="80"
              cy="80"
              r="68"
              className="stroke-gray-300 dark:stroke-gray-700"
              strokeWidth="12"
              fill="none"
            />

            {/* Progress */}
            <circle
              cx="80"
              cy="80"
              r="68"
              stroke="#22C55E"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="427"
              strokeDashoffset="85"
            />
          </svg>

          {/* Center */}
          <div className="text-center">

            <h1
              className={`
              text-4xl font-bold
              ${theme.textPrimary}
              `}
            >
              82%
            </h1>

            <p
              className={`
              text-sm mt-1
              ${theme.textMuted}
              `}
            >
              Overall Growth
            </p>
          </div>
        </div>

        {/* Analytics Bars */}
        <div className="flex-1 w-full space-y-6">

          {analytics.map((item, index) => (

            <div key={index}>

              {/* Top */}
              <div
                className="
                flex items-center
                justify-between
                mb-2
                "
              >

                <div
                  className={`
                  flex items-center gap-3
                  ${theme.textPrimary}
                  `}
                >

                  <div
                    className={`
                    w-9 h-9 rounded-xl
                    flex items-center
                    justify-center

                    ${theme.profilePrimary}
                    `}
                  >
                    {item.icon}
                  </div>

                  <span className="font-medium">
                    {item.title}
                  </span>
                </div>

                <span
                  className={`
                  font-semibold
                  ${item.text}
                  `}
                >
                  {item.value}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                className={`
                w-full h-3
                rounded-full
                overflow-hidden

                ${theme.active}
                `}
              >

                <div
                  className={`
                  h-full rounded-full
                  transition-all duration-700
                  ${item.color}
                  `}
                  style={{
                    width: `${item.value}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}

          {/* Footer */}
          <div
            className="
            flex items-center
            gap-3 pt-4
            text-sm flex-wrap
            "
          >

            <span className="text-green-400 font-medium">
              ↑ +12%
            </span>

            <span className={theme.textMuted}>
              Increased this month
            </span>

            <span
              className="
              px-3 py-1 rounded-full
              bg-green-500/20
              text-green-400
              text-xs font-medium
              "
            >
              High Performance
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}