import ATSHeader from "../../../components/ats/ATSHeader";
import StatsCard from "../../../components/ats/StatsCard";
import ApplicationTable from "../../../components/ats/ApplicationTable";

import {
  FileText,
  CheckCircle,
  XCircle,
  Users,
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import { useTheme } from "../../../context/ThemeContext";

export default function ATSDashboard() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        transition-all
        duration-300
        ${theme.bg}
      `}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 pb-8">
        
        {/* Header */}
        <ATSHeader />

        {/* Top Analytics Section */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 mb-8">
          
          <StatsCard
            title="Total Applications"
            value="256"
            icon={<FileText size={22} />}
            color="bg-blue-600"
            growth="+18%"
          />

          <StatsCard
            title="Shortlisted"
            value="78"
            icon={<CheckCircle size={22} />}
            color="bg-green-600"
            growth="+9%"
          />

          <StatsCard
            title="Rejected"
            value="45"
            icon={<XCircle size={22} />}
            color="bg-red-600"
            growth="-3%"
          />

          <StatsCard
            title="Active Candidates"
            value="133"
            icon={<Users size={22} />}
            color="bg-purple-600"
            growth="+12%"
          />
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* Main Table */}
          <div className="xl:col-span-9">
            <ApplicationTable />
          </div>

          {/* Right Side Panel */}
          <div className="xl:col-span-3 space-y-6">
            
            {/* Hiring Progress */}
            <div
              className={`
                border
                rounded-2xl
                p-5
                ${theme.cardBg}
                ${theme.border}
                ${theme.shadowMd}
              `}
            >
              <div className="flex items-center justify-between mb-5">
                <h3
                  className={`
                    text-lg
                    font-bold
                    ${theme.textPrimary}
                  `}
                >
                  Hiring Progress
                </h3>

                <span
                  className={`
                    text-xs
                    px-2.5
                    py-1
                    rounded-lg
                    ${theme.successBg}
                    ${theme.successText}
                  `}
                >
                  Active
                </span>
              </div>

              <div className="space-y-5">
                
                {/* Shortlisted */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`
                        text-sm
                        ${theme.textSecondary}
                      `}
                    >
                      Shortlisted
                    </span>

                    <span
                      className={`
                        text-sm
                        font-semibold
                        ${theme.textPrimary}
                      `}
                    >
                      78%
                    </span>
                  </div>

                  <div
                    className={`
                      h-2
                      rounded-full
                      overflow-hidden
                      ${theme.active}
                    `}
                  >
                    <div className="h-full w-[78%] bg-green-500 rounded-full" />
                  </div>
                </div>

                {/* Interviews */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`
                        text-sm
                        ${theme.textSecondary}
                      `}
                    >
                      Interviews
                    </span>

                    <span
                      className={`
                        text-sm
                        font-semibold
                        ${theme.textPrimary}
                      `}
                    >
                      52%
                    </span>
                  </div>

                  <div
                    className={`
                      h-2
                      rounded-full
                      overflow-hidden
                      ${theme.active}
                    `}
                  >
                    <div className="h-full w-[52%] bg-blue-500 rounded-full" />
                  </div>
                </div>

                {/* Hired */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`
                        text-sm
                        ${theme.textSecondary}
                      `}
                    >
                      Hired
                    </span>

                    <span
                      className={`
                        text-sm
                        font-semibold
                        ${theme.textPrimary}
                      `}
                    >
                      32%
                    </span>
                  </div>

                  <div
                    className={`
                      h-2
                      rounded-full
                      overflow-hidden
                      ${theme.active}
                    `}
                  >
                    <div className="h-full w-[32%] bg-purple-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              className={`
                border
                rounded-2xl
                p-5
                ${theme.cardBg}
                ${theme.border}
                ${theme.shadowMd}
              `}
            >
              <h3
                className={`
                  text-lg
                  font-bold
                  mb-5
                  ${theme.textPrimary}
                `}
              >
                Recent Activity
              </h3>

              <div className="space-y-4">
                
                {[
                  {
                    title: "New frontend application received",
                    time: "2 min ago",
                    color: "bg-blue-500",
                  },
                  {
                    title: "3 candidates shortlisted",
                    time: "15 min ago",
                    color: "bg-green-500",
                  },
                  {
                    title: "Interview scheduled",
                    time: "1 hour ago",
                    color: "bg-yellow-500",
                  },
                  {
                    title: "Backend role closed",
                    time: "3 hours ago",
                    color: "bg-red-500",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div
                      className={`
                        h-3
                        w-3
                        rounded-full
                        mt-1.5
                        ${item.color}
                      `}
                    />

                    <div>
                      <p
                        className={`
                          text-sm
                          font-medium
                          ${theme.textPrimary}
                        `}
                      >
                        {item.title}
                      </p>

                      <span
                        className={`
                          text-xs
                          ${theme.textMuted}
                        `}
                      >
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}