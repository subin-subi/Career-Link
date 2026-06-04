import { Search, Filter, Eye } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function CandidateTable() {
  const { theme } = useTheme();

  const candidates = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      score: 92,
      status: "Selected",
    },
    {
      id: 2,
      name: "Sarah Wilson",
      role: "Backend Developer",
      score: 84,
      status: "Review",
    },
    {
      id: 3,
      name: "Michael Scott",
      role: "MERN Developer",
      score: 65,
      status: "Rejected",
    },
    {
      id: 4,
      name: "Emily Davis",
      role: "React Developer",
      score: 89,
      status: "Selected",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Selected":
        return `${theme.successBg} ${theme.successText}`;
      case "Review":
        return `${theme.warningBg} ${theme.warningText}`;
      case "Rejected":
        return `${theme.dangerBg} ${theme.dangerText}`;
      default:
        return `${theme.infoBg} ${theme.infoText}`;
    }
  };

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
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2
            className={`text-xl font-bold ${theme.textPrimary}`}
          >
            Candidate Interviews
          </h2>

          <p
            className={`text-sm mt-1 ${theme.textSecondary}`}
          >
            Review interview performance and hiring decisions
          </p>
        </div>

        <div className="flex gap-3">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className={`absolute left-3 top-3 ${theme.textMuted}`}
            />

            <input
              type="text"
              placeholder="Search candidate..."
              className={`
                pl-10 pr-4 py-2 rounded-lg
                ${theme.cardBg}
                ${theme.border}
                border
                ${theme.textPrimary}
                focus:outline-none
              `}
            />
          </div>

          {/* Filter */}
          <button
            className={`
              px-4 py-2 rounded-lg
              ${theme.primary}
              text-white
              flex items-center gap-2
            `}
          >
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr
              className={`
                border-b
                ${theme.border}
              `}
            >
              <th
                className={`text-left py-4 ${theme.textSecondary}`}
              >
                Candidate
              </th>

              <th
                className={`text-left ${theme.textSecondary}`}
              >
                Position
              </th>

              <th
                className={`text-left ${theme.textSecondary}`}
              >
                Score
              </th>

              <th
                className={`text-left ${theme.textSecondary}`}
              >
                Status
              </th>

              <th
                className={`text-left ${theme.textSecondary}`}
              >
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <tr
                key={candidate.id}
                className={`
                  border-b
                  ${theme.border}
                  ${theme.hover}
                  transition
                `}
              >
                {/* Candidate */}
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://i.pravatar.cc/150?img=${candidate.id + 10}`}
                      alt={candidate.name}
                      className="w-10 h-10 rounded-full"
                    />

                    <div>
                      <h4
                        className={`font-medium ${theme.textPrimary}`}
                      >
                        {candidate.name}
                      </h4>

                      <p
                        className={`text-xs ${theme.textSecondary}`}
                      >
                        Candidate #{candidate.id}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Role */}
                <td className={theme.textSecondary}>
                  {candidate.role}
                </td>

                {/* Score */}
                <td>
                  <span
                    className={`
                      font-semibold
                      ${
                        candidate.score >= 85
                          ? theme.successText
                          : candidate.score >= 70
                          ? theme.warningText
                          : theme.dangerText
                      }
                    `}
                  >
                    {candidate.score}%
                  </span>
                </td>

                {/* Status */}
                <td>
                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${getStatusStyle(candidate.status)}
                    `}
                  >
                    {candidate.status}
                  </span>
                </td>

                {/* Action */}
                <td>
                  <button
                    className={`
                      flex items-center gap-2
                      ${theme.primaryText}
                      font-medium
                    `}
                  >
                    <Eye size={16} />
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div
        className={`
          mt-4 pt-4 border-t
          ${theme.border}
          flex justify-between items-center
        `}
      >
        <p className={`text-sm ${theme.textSecondary}`}>
          Showing 4 candidates
        </p>

        <div className="flex gap-2">
          <button
            className={`
              px-3 py-1 rounded-lg border
              ${theme.border}
            `}
          >
            Previous
          </button>

          <button
            className={`
              px-3 py-1 rounded-lg
              ${theme.primary}
              text-white
            `}
          >
            1
          </button>

          <button
            className={`
              px-3 py-1 rounded-lg border
              ${theme.border}
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}