import { useTheme } from "../../context/ThemeContext";

const applications = [
  {
    id: 1,
    candidate: "John Doe",
    position: "Frontend Developer",
    date: "2026-02-08",
    status: "Under Review",
  },
  {
    id: 2,
    candidate: "Sarah Wilson",
    position: "Backend Developer",
    date: "2026-02-10",
    status: "Interview",
  },
  {
    id: 3,
    candidate: "Michael Brown",
    position: "UI/UX Designer",
    date: "2026-02-11",
    status: "Rejected",
  },
  {
    id: 4,
    candidate: "Emily Johnson",
    position: "Full Stack Developer",
    date: "2026-02-12",
    status: "Hired",
  },
  {
    id: 5,
    candidate: "David Miller",
    position: "React Developer",
    date: "2026-02-13",
    status: "Pending",
  },
  {
    id: 6,
    candidate: "Sophia Davis",
    position: "DevOps Engineer",
    date: "2026-02-14",
    status: "Interview",
  },
];

export default function RecentApplicationsTable() {
  const { theme } = useTheme();

  const getStatusStyle = (status) => {
    switch (status) {
      case "Hired":
        return "bg-green-500/20 text-green-500";
      case "Rejected":
        return "bg-red-500/20 text-red-500";
      case "Interview":
        return "bg-blue-500/20 text-blue-500";
      case "Pending":
        return "bg-purple-500/20 text-purple-500";
      default:
        return "bg-yellow-500/20 text-yellow-500";
    }
  };

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowLg}
        rounded-2xl overflow-hidden
      `}
    >
      {/* Header */}
      <div className={`p-4 sm:p-6 border-b ${theme.border}`}>
        <h2
          className={`
            text-xl sm:text-2xl lg:text-3xl
            font-bold ${theme.textPrimary}
          `}
        >
          Recent Applications
        </h2>

        <p
          className={`${theme.textMuted} mt-2 text-sm sm:text-base`}
        >
          Latest candidates who applied for your jobs
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead
            className={`${
              theme.isDark
                ? "bg-black"
                : "bg-gray-100"
            } ${theme.textMuted} text-xs sm:text-sm`}
          >
            <tr>
              <th className="p-3 sm:p-4 text-left">CANDIDATE</th>
              <th className="p-3 sm:p-4 text-left">POSITION</th>
              <th className="p-3 sm:p-4 text-left">APPLIED DATE</th>
              <th className="p-3 sm:p-4 text-left">STATUS</th>
              <th className="p-3 sm:p-4 text-left">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app) => (
              <tr
                key={app.id}
                className={`border-t ${theme.border} hover:bg-gray-100 dark:hover:bg-zinc-800 transition`}
              >
                <td
                  className={`p-3 sm:p-4 font-semibold ${theme.textPrimary}`}
                >
                  {app.candidate}
                </td>

                <td
                  className={`p-3 sm:p-4 ${theme.textSecondary}`}
                >
                  {app.position}
                </td>

                <td
                  className={`p-3 sm:p-4 ${theme.textMuted}`}
                >
                  {app.date}
                </td>

                <td className="p-3 sm:p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${getStatusStyle(
                      app.status
                    )}`}
                  >
                    {app.status}
                  </span>
                </td>

                <td
                  className="p-3 sm:p-4 text-blue-500 font-medium cursor-pointer whitespace-nowrap hover:underline"
                >
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}