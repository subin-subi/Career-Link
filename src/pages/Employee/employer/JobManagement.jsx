import {
  Briefcase,
  CheckCircle,
  Clock,
  XCircle,
  TrendingUp,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

export default function JobManagementCard() {

  const { theme } = useTheme();

  const jobs = [
    {
      title: "Active Jobs",
      value: 120,
      percent: 85,
      color: "bg-green-500",
      text: "text-green-400",
      icon: <Briefcase size={18} />,
    },

    {
      title: "Applications",
      value: 842,
      percent: 72,
      color: "bg-blue-500",
      text: "text-blue-400",
      icon: <TrendingUp size={18} />,
    },

    {
      title: "Pending Review",
      value: 48,
      percent: 45,
      color: "bg-yellow-500",
      text: "text-yellow-400",
      icon: <Clock size={18} />,
    },

    {
      title: "Closed Jobs",
      value: 34,
      percent: 60,
      color: "bg-red-500",
      text: "text-red-400",
      icon: <XCircle size={18} />,
    },

    {
      title: "Successfully Hired",
      value: 97,
      percent: 90,
      color: "bg-purple-500",
      text: "text-purple-400",
      icon: <CheckCircle size={18} />,
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
            Job Management
          </h2>

          <p
            className={`
            mt-1
            ${theme.textMuted}
            `}
          >
            Monitor jobs and hiring activity
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
          View Jobs →
        </button>
      </div>

      {/* Cards */}
      <div
        className="
        grid grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
        "
      >

        {jobs.map((item, index) => (

          <div
            key={index}
            className={`
            rounded-2xl
            p-5
            border
            transition-all duration-300

            ${theme.profilePrimary}
            ${theme.border}
            ${theme.hover}
            `}
          >

            {/* Top */}
            <div
              className="
              flex items-center
              justify-between
              "
            >

              <div
                className={`
                w-12 h-12
                rounded-2xl
                flex items-center
                justify-center

                ${item.color}
                text-white
                `}
              >
                {item.icon}
              </div>

              <span
                className={`
                text-sm font-medium
                ${item.text}
                `}
              >
                {item.percent}%
              </span>
            </div>

            {/* Value */}
            <h1
              className={`
              text-4xl font-bold
              mt-5

              ${theme.textPrimary}
              `}
            >
              {item.value}
            </h1>

            {/* Title */}
            <p
              className={`
              mt-2
              ${theme.textMuted}
              `}
            >
              {item.title}
            </p>

            {/* Progress */}
            <div
              className={`
              mt-5 w-full
              h-3 rounded-full
              overflow-hidden

              ${theme.active}
              `}
            >

              <div
                className={`
                h-full rounded-full
                ${item.color}
                transition-all duration-700
                `}
                style={{
                  width: `${item.percent}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        className="
        mt-8
        flex flex-wrap
        items-center gap-4
        text-sm
        "
      >

        <span className="text-green-400 font-medium">
          ↑ +18%
        </span>

        <span className={theme.textMuted}>
          Hiring activity increased this week
        </span>

        <span
          className="
          px-3 py-1 rounded-full
          bg-green-500/20
          text-green-400
          text-xs font-medium
          "
        >
          Excellent Performance
        </span>
      </div>
    </div>
  );
}