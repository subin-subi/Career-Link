import {
  Search,
  Filter,
  Eye,
  Pencil,
  MoreVertical,
  CheckCircle,
  Clock3,
  Users,
  Briefcase,
  Shield,
  Download,
  Plus,
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import { useTheme } from "../../../context/ThemeContext";

const users = [
  {
    name: "John Smith",
    email: "john.smith@example.com",
    role: "Job Seeker",
    status: "Active",
    verified: true,
    joined: "May 20, 2024",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    role: "Employer",
    status: "Active",
    verified: true,
    joined: "May 18, 2024",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@example.com",
    role: "Job Seeker",
    status: "Inactive",
    verified: true,
    joined: "May 15, 2024",
    image:
      "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    role: "Employer",
    status: "Active",
    verified: true,
    joined: "May 12, 2024",
    image:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David Wilson",
    email: "david.wilson@example.com",
    role: "Job Seeker",
    status: "Pending",
    verified: false,
    joined: "May 10, 2024",
    image:
      "https://randomuser.me/api/portraits/men/12.jpg",
  },
];

function ManageUsers() {
  const { theme } = useTheme();

  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

      case "Inactive":
        return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";

      case "Pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getRoleStyle = (role) => {
    switch (role) {
      case "Employer":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";

      case "Admin":
        return "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400";

      default:
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    }
  };

  return (
    <div
      className={`
        min-h-screen
        p-6 md:p-10
        transition-all
        ${theme.bg}
      `}
    >
      <Navbar />

      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8 mt-16">
        <div>
          <h1
            className={`
              text-4xl font-bold
              ${theme.textPrimary}
            `}
          >
            Manage Users
          </h1>

          <p
            className={`
              mt-2
              ${theme.textMuted}
            `}
          >
            View, manage and control all users
            on the platform.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {/* EXPORT BUTTON */}
          <button
            className={`
              flex items-center gap-2
              px-5 py-3 rounded-xl border
              transition-all

              ${theme.cardBg}
              ${theme.border}
              ${theme.textPrimary}
              ${theme.hover}
            `}
          >
            <Download size={18} />
            Export Users
          </button>

          {/* ADD USER */}
          <button
            className={`
              flex items-center gap-2
              px-5 py-3 rounded-xl text-white
              transition-all

              ${theme.primary}
              ${theme.primaryHover}
            `}
          >
            <Plus size={18} />
            Add User
          </button>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 mb-8">
        {/* CARD 1 */}
        <div
          className={`
            rounded-2xl p-5 border
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadow}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl">
              <Users className="text-blue-600 dark:text-blue-400" />
            </div>

            <div>
              <p
                className={`text-sm ${theme.textMuted}`}
              >
                Total Users
              </p>

              <h2
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                1,248
              </h2>
            </div>
          </div>

          <p className="text-green-500 text-sm mt-4">
            ↑ 12.5% from last month
          </p>
        </div>

        {/* CARD 2 */}
        <div
          className={`
            rounded-2xl p-5 border
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadow}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl">
              <CheckCircle className="text-green-600 dark:text-green-400" />
            </div>

            <div>
              <p
                className={`text-sm ${theme.textMuted}`}
              >
                Active Users
              </p>

              <h2
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                1,038
              </h2>
            </div>
          </div>

          <p className="text-green-500 text-sm mt-4">
            ↑ 8.3% from last month
          </p>
        </div>

        {/* CARD 3 */}
        <div
          className={`
            rounded-2xl p-5 border
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadow}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl">
              <Briefcase className="text-purple-600 dark:text-purple-400" />
            </div>

            <div>
              <p
                className={`text-sm ${theme.textMuted}`}
              >
                Employers
              </p>

              <h2
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                326
              </h2>
            </div>
          </div>

          <p className="text-green-500 text-sm mt-4">
            ↑ 15.7% from last month
          </p>
        </div>

        {/* CARD 4 */}
        <div
          className={`
            rounded-2xl p-5 border
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadow}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-xl">
              <Users className="text-orange-600 dark:text-orange-400" />
            </div>

            <div>
              <p
                className={`text-sm ${theme.textMuted}`}
              >
                Job Seekers
              </p>

              <h2
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                922
              </h2>
            </div>
          </div>

          <p className="text-green-500 text-sm mt-4">
            ↑ 10.1% from last month
          </p>
        </div>

        {/* CARD 5 */}
        <div
          className={`
            rounded-2xl p-5 border
            ${theme.cardBg}
            ${theme.border}
            ${theme.shadow}
          `}
        >
          <div className="flex items-center gap-4">
            <div className="bg-pink-100 dark:bg-pink-900/30 p-3 rounded-xl">
              <Shield className="text-pink-600 dark:text-pink-400" />
            </div>

            <div>
              <p
                className={`text-sm ${theme.textMuted}`}
              >
                Admins
              </p>

              <h2
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                24
              </h2>
            </div>
          </div>

          <p className="text-green-500 text-sm mt-4">
            ↑ 4.3% from last month
          </p>
        </div>
      </div>

      {/* TABLE SECTION */}
      <div
        className={`
          rounded-3xl overflow-hidden border
          ${theme.cardBg}
          ${theme.border}
          ${theme.shadowMd}
        `}
      >
        {/* FILTER SECTION */}
        <div
          className={`
            p-5 flex flex-col lg:flex-row
            justify-between gap-4 border-b
            ${theme.border}
          `}
        >
          {/* SEARCH */}
          <div className="relative w-full lg:w-[350px]">
            <Search
              className={`
                absolute left-4 top-3.5
                ${theme.textMuted}
              `}
              size={18}
            />

            <input
              type="text"
              placeholder="Search users..."
              className={`
                w-full pl-11 pr-4 py-3
                rounded-xl border outline-none
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.focus}
              `}
            />
          </div>

          {/* FILTERS */}
          <div className="flex flex-wrap gap-3">
            <select
              className={`
                px-4 py-3 rounded-xl border outline-none
                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
              `}
            >
              <option>All Roles</option>
            </select>

            <select
              className={`
                px-4 py-3 rounded-xl border outline-none
                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
              `}
            >
              <option>All Status</option>
            </select>

            <button
              className={`
                flex items-center gap-2
                px-5 py-3 rounded-xl border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              <Filter size={18} />
              Filters
            </button>
          </div>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead
              className={`
                ${theme.hover}
              `}
            >
              <tr
                className={`
                  text-sm
                  ${theme.textSecondary}
                `}
              >
                <th className="p-5 text-left">
                  USER
                </th>

                <th className="p-5 text-left">
                  ROLE
                </th>

                <th className="p-5 text-left">
                  STATUS
                </th>

                <th className="p-5 text-left">
                  VERIFIED
                </th>

                <th className="p-5 text-left">
                  JOINED ON
                </th>

                <th className="p-5 text-center">
                  ACTIONS
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={index}
                  className={`
                    border-t transition-all
                    ${theme.border}
                    ${theme.hover}
                  `}
                >
                  {/* USER */}
                  <td className="p-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={user.image}
                        alt={user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />

                      <div>
                        <h3
                          className={`
                            font-semibold
                            ${theme.textPrimary}
                          `}
                        >
                          {user.name}
                        </h3>

                        <p
                          className={`
                            text-sm
                            ${theme.textMuted}
                          `}
                        >
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* ROLE */}
                  <td className="p-5">
                    <span
                      className={`
                        px-3 py-1 rounded-full
                        text-sm font-medium
                        ${getRoleStyle(user.role)}
                      `}
                    >
                      {user.role}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="p-5">
                    <span
                      className={`
                        px-3 py-1 rounded-full
                        text-sm font-medium
                        ${getStatusStyle(user.status)}
                      `}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* VERIFIED */}
                  <td className="p-5">
                    {user.verified ? (
                      <CheckCircle className="text-green-500" />
                    ) : (
                      <Clock3 className="text-yellow-500" />
                    )}
                  </td>

                  {/* JOINED */}
                  <td
                    className={`
                      p-5
                      ${theme.textSecondary}
                    `}
                  >
                    {user.joined}
                  </td>

                  {/* ACTIONS */}
                  <td className="p-5">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        className={`
                          p-2 rounded-lg border
                          transition-all

                          ${theme.cardBg}
                          ${theme.border}
                          ${theme.hover}
                          ${theme.textPrimary}
                        `}
                      >
                        <Eye size={18} />
                      </button>

                      <button
                        className={`
                          p-2 rounded-lg border
                          transition-all

                          ${theme.cardBg}
                          ${theme.border}
                          ${theme.hover}
                          ${theme.textPrimary}
                        `}
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        className={`
                          p-2 rounded-lg border
                          transition-all

                          ${theme.cardBg}
                          ${theme.border}
                          ${theme.hover}
                          ${theme.textPrimary}
                        `}
                      >
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        <div
          className={`
            p-5 flex flex-col lg:flex-row
            items-center justify-between gap-4
            border-t
            ${theme.border}
          `}
        >
          <p
            className={`text-sm ${theme.textMuted}`}
          >
            Showing 1 to 10 of 1,248 users
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-2">
            <button
              className={`
                px-4 py-2 rounded-lg border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              Prev
            </button>

            <button
              className={`
                w-10 h-10 rounded-lg text-white
                ${theme.primary}
              `}
            >
              1
            </button>

            <button
              className={`
                w-10 h-10 rounded-lg border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              2
            </button>

            <button
              className={`
                w-10 h-10 rounded-lg border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              3
            </button>

            <span
              className={`${theme.textMuted}`}
            >
              ...
            </span>

            <button
              className={`
                w-10 h-10 rounded-lg border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              125
            </button>

            <button
              className={`
                px-4 py-2 rounded-lg border
                transition-all

                ${theme.cardBg}
                ${theme.border}
                ${theme.textPrimary}
                ${theme.hover}
              `}
            >
              Next
            </button>
          </div>

          {/* PAGE SIZE */}
          <select
            className={`
              px-4 py-2 rounded-lg border outline-none

              ${theme.cardBg}
              ${theme.border}
              ${theme.textPrimary}
              ${theme.focus}
            `}
          >
            <option>10 per page</option>
            <option>25 per page</option>
            <option>50 per page</option>
            <option>100 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;