import Navbar from "../../../components/Navbar/Navbar";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import BottomNav from "../../JobSearch/BottomNav";

import { useTheme } from "../../../context/ThemeContext";

export default function MyApplicationsPage() {
  const { theme } = useTheme();

  const stats = [
    {
      title: "Total",
      value: 5,
      color: "text-gray-900 dark:text-white",
    },
    {
      title: "Under Review",
      value: 2,
      color: "text-orange-500",
    },
    {
      title: "Interviews",
      value: 1,
      color: "text-blue-500",
    },
    {
      title: "Offers",
      value: 1,
      color: "text-green-500",
    },
    {
      title: "Rejected",
      value: 1,
      color: "text-red-500",
    },
  ];

  const applications = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      salary: "$80k - $120k",
      applied: "2026-02-08",
      status: "Under Review",
      statusColor:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/20 dark:text-yellow-300",
    },
    {
      id: 2,
      title: "Frontend Engineer",
      company: "StartupXYZ",
      location: "San Francisco, CA",
      salary: "$90k - $130k",
      applied: "2026-02-06",
      status: "Interview Scheduled",
      statusColor:
        "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Google",
      location: "Bangalore",
      salary: "$100k - $150k",
      applied: "2026-02-04",
      status: "Offer Received",
      statusColor:
        "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
    },
    {
      id: 4,
      title: "Backend Developer",
      company: "Amazon",
      location: "Remote",
      salary: "$85k - $125k",
      applied: "2026-02-02",
      status: "Rejected",
      statusColor:
        "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
    },
  ];

  const filters = [
    "All (5)",
    "Under Review",
    "Interview Scheduled",
    "Offer Received",
    "Rejected",
  ];

  return (
    <div
      className={`
        min-h-screen
        ${theme.bg}
        ${theme.textPrimary}
        transition-all duration-300
        pb-20
      `}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28">
        
        {/* MAIN LAYOUT */}
        <div className="flex gap-6 items-start">
          
          {/* LEFT SIDEBAR */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <ProfileSidebar />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 min-w-0 space-y-4">

            {/* HERO */}
            <div
              className={`
                rounded-2xl p-5
                ${theme.cardBg}
                ${theme.border}
                ${theme.shadow}
              `}
            >
              <h1 className="text-2xl lg:text-3xl font-bold">
                My Applications
              </h1>

              <p className={`mt-2 text-sm ${theme.textMuted}`}>
                Track the status of your job applications
              </p>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className={`
                    rounded-xl p-4
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.shadow}
                  `}
                >
                  <p className={`text-xs ${theme.textMuted}`}>
                    {item.title}
                  </p>

                  <h2
                    className={`text-3xl font-bold mt-2 ${item.color}`}
                  >
                    {item.value}
                  </h2>
                </div>
              ))}
            </div>

            {/* FILTERS */}
            <div
              className={`
                rounded-2xl p-4 flex flex-wrap gap-3
                ${theme.cardBg}
                ${theme.border}
                ${theme.shadow}
              `}
            >
              {filters.map((filter, index) => (
                <button
                  key={index}
                  className={`
                    px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-300
                    ${
                      index === 0
                        ? `${theme.primary} text-white`
                        : `${theme.cardBg} ${theme.border} ${theme.textPrimary}`
                    }
                  `}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* APPLICATIONS */}
            <div className="space-y-4">
              {applications.map((job) => (
                <div
                  key={job.id}
                  className={`
                    rounded-2xl p-5
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.shadow}
                  `}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
                    
                    {/* LEFT */}
                    <div>
                      <h2 className="text-xl font-bold">
                        {job.title}
                      </h2>

                      <p
                        className={`mt-1 text-base ${theme.textSecondary}`}
                      >
                        {job.company}
                      </p>

                      <div
                        className={`flex flex-wrap gap-4 mt-4 text-xs ${theme.textMuted}`}
                      >
                        <span>📍 {job.location}</span>

                        <span>💰 {job.salary}</span>

                        <span>
                          🗓 Applied: {job.applied}
                        </span>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col items-start lg:items-end gap-3">
                      
                      <span
                        className={`
                          px-4 py-1.5 rounded-full text-xs font-semibold
                          ${job.statusColor}
                        `}
                      >
                        {job.status}
                      </span>

                      <div className="flex gap-2">
                        <button
                          className={`
                            px-4 py-2 rounded-xl text-sm
                            ${theme.border}
                            hover:bg-blue-600 hover:text-white
                            transition-all duration-300
                          `}
                        >
                          View Details
                        </button>

                        <button
                          className="
                            px-4 py-2 rounded-xl text-sm
                            border border-red-400
                            text-red-500
                            hover:bg-red-500 hover:text-white
                            transition-all duration-300
                          "
                        >
                          Withdraw
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}