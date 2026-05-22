import {
  Briefcase,
  Eye,
  Pencil,
  Trash2,
  Filter,
  Search,
  MoreVertical,
  Bell,
  HelpCircle,
} from "lucide-react";
import { useState } from "react";

import { useTheme } from "../../../context/ThemeContext";
import Navbar from "../../../components/Navbar/Navbar";
import PostJobModal from "./PostJobModal";
export default function EmployerJobsPage() {
  const { theme } = useTheme();
const [isModalOpen, setIsModalOpen] = useState(false);
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      category: "Engineering",
      location: "Remote",
      applications: 45,
      status: "Active",
      posted: "20 May 2025",
    },
    {
      id: 2,
      title: "Backend Developer",
      category: "Engineering",
      location: "Bangalore",
      applications: 32,
      status: "Active",
      posted: "18 May 2025",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      category: "Design",
      location: "Remote",
      applications: 28,
      status: "Active",
      posted: "15 May 2025",
    },
    {
      id: 4,
      title: "Product Manager",
      category: "Product",
      location: "Bangalore",
      applications: 16,
      status: "Draft",
      posted: "10 May 2025",
    },
    {
      id: 5,
      title: "DevOps Engineer",
      category: "Engineering",
      location: "Hyderabad",
      applications: 22,
      status: "Closed",
      posted: "05 May 2025",
    },
  ];

  return (
    <div
      className={`
        min-h-screen
        p-26
        ${theme.bg}
      `}
    >
        <Navbar/>
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
        
        <div>
          <h1
            className={`
              text-3xl
              font-bold
              ${theme.textPrimary}
            `}
          >
            My Jobs
          </h1>

          <p
            className={`
              mt-1
              text-sm
              ${theme.textMuted}
            `}
          >
            Manage and track all your posted jobs
          </p>
        </div>

        <div className="flex items-center gap-4">
          
          <button
            className={`
              h-10
              w-10
              rounded-xl
              flex
              items-center
              justify-center
              border
              ${theme.border}
              ${theme.cardBg}
            `}
          >
            <Bell size={18} className={theme.textSecondary} />
          </button>

          <button
            className={`
              h-10
              w-10
              rounded-xl
              flex
              items-center
              justify-center
              border
              ${theme.border}
              ${theme.cardBg}
            `}
          >
            <HelpCircle
              size={18}
              className={theme.textSecondary}
            />
          </button>

         <button
        onClick={() => setIsModalOpen(true)}
        className={`
          px-5
          py-2.5
          rounded-xl
          text-white
          font-medium
          transition-all
          duration-200
          ${theme.primary}
          ${theme.primaryHover}
        `}
      >
        + Post New Job
      </button>

      {/* MODAL */}
      <PostJobModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        
        {[
          {
            title: "Total Jobs",
            value: "12",
            sub: "All time posted jobs",
            color: "bg-blue-100 text-blue-600",
          },
          {
            title: "Active Jobs",
            value: "7",
            sub: "Currently active",
            color: "bg-green-100 text-green-600",
          },
          {
            title: "Draft Jobs",
            value: "2",
            sub: "Saved as draft",
            color: "bg-yellow-100 text-yellow-600",
          },
          {
            title: "Closed Jobs",
            value: "3",
            sub: "Successfully closed",
            color: "bg-red-100 text-red-600",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`
              border
              rounded-2xl
              p-5
              flex
              items-center
              gap-4
              ${theme.cardBg}
              ${theme.border}
              ${theme.shadow}
            `}
          >
            <div
              className={`
                h-14
                w-14
                rounded-2xl
                flex
                items-center
                justify-center
                ${item.color}
              `}
            >
              <Briefcase size={24} />
            </div>

            <div>
              <p
                className={`
                  text-sm
                  ${theme.textMuted}
                `}
              >
                {item.title}
              </p>

              <h2
                className={`
                  text-3xl
                  font-bold
                  mt-1
                  ${theme.textPrimary}
                `}
              >
                {item.value}
              </h2>

              <p
                className={`
                  text-xs
                  mt-1
                  ${theme.textMuted}
                `}
              >
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* MAIN CONTENT */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* LEFT */}
        <div className="xl:col-span-8">
          
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
            {/* Top */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              
              <h2
                className={`
                  text-2xl
                  font-bold
                  ${theme.textPrimary}
                `}
              >
                All Posted Jobs
              </h2>

              <div className="flex flex-col md:flex-row gap-3">
                
                {/* Search */}
                <div className="relative">
                  <Search
                    size={17}
                    className={`
                      absolute
                      left-3
                      top-1/2
                      -translate-y-1/2
                      ${theme.textMuted}
                    `}
                  />

                  <input
                    type="text"
                    placeholder="Search jobs..."
                    className={`
                      pl-10
                      pr-4
                      py-2.5
                      rounded-xl
                      border
                      outline-none
                      ${theme.cardBg}
                      ${theme.border}
                      ${theme.textPrimary}
                    `}
                  />
                </div>

                <select
                  className={`
                    px-4
                    py-2.5
                    rounded-xl
                    border
                    outline-none
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                  `}
                >
                  <option>All Status</option>
                </select>

                <button
                  className={`
                    h-11
                    w-11
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    border
                    ${theme.border}
                  `}
                >
                  <Filter
                    size={18}
                    className={theme.textSecondary}
                  />
                </button>
              </div>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px]">
                
                <thead>
                  <tr
                    className={`
                      border-b
                      ${theme.border}
                    `}
                  >
                    {[
                      "Job Title",
                      "Applications",
                      "Status",
                      "Posted On",
                      "Actions",
                    ].map((head) => (
                      <th
                        key={head}
                        className={`
                          text-left
                          py-4
                          text-sm
                          font-semibold
                          ${theme.textSecondary}
                        `}
                      >
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {jobs.map((job) => (
                    <tr
                      key={job.id}
                      className={`
                        border-b
                        transition-all
                        duration-200
                        ${theme.border}
                        ${theme.hover}
                      `}
                    >
                      {/* TITLE */}
                      <td className="py-5">
                        <h3
                          className={`
                            font-semibold
                            ${theme.textPrimary}
                          `}
                        >
                          {job.title}
                        </h3>

                        <p
                          className={`
                            text-sm
                            mt-1
                            ${theme.textMuted}
                          `}
                        >
                          {job.category} • {job.location}
                        </p>
                      </td>

                      {/* APPS */}
                      <td>
                        <h4
                          className={`
                            font-semibold
                            ${theme.textPrimary}
                          `}
                        >
                          {job.applications}
                        </h4>

                        <p
                          className={`
                            text-sm
                            ${theme.textMuted}
                          `}
                        >
                          Applicants
                        </p>
                      </td>

                      {/* STATUS */}
                      <td>
                        <span
                          className={`
                            px-3
                            py-1
                            rounded-lg
                            text-xs
                            font-semibold
                            ${
                              job.status === "Active"
                                ? "bg-green-100 text-green-700"
                                : job.status === "Draft"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-red-100 text-red-700"
                            }
                          `}
                        >
                          {job.status}
                        </span>
                      </td>

                      {/* POSTED */}
                      <td
                        className={`
                          text-sm
                          ${theme.textSecondary}
                        `}
                      >
                        {job.posted}
                      </td>

                      {/* ACTIONS */}
                      <td>
                        <div className="flex items-center gap-2">
                          
                          <button
                            className={`
                              h-9
                              w-9
                              rounded-lg
                              border
                              flex
                              items-center
                              justify-center
                              ${theme.border}
                            `}
                          >
                            <Eye
                              size={16}
                              className={theme.textSecondary}
                            />
                          </button>

                          <button
                            className={`
                              h-9
                              w-9
                              rounded-lg
                              border
                              flex
                              items-center
                              justify-center
                              ${theme.border}
                            `}
                          >
                            <Pencil
                              size={16}
                              className={theme.textSecondary}
                            />
                          </button>

                          <button
                            className="h-9 w-9 rounded-lg border flex items-center justify-center border-red-200"
                          >
                            <Trash2
                              size={16}
                              className="text-red-500"
                            />
                          </button>

                          <button
                            className={`
                              h-9
                              w-9
                              rounded-lg
                              border
                              flex
                              items-center
                              justify-center
                              ${theme.border}
                            `}
                          >
                            <MoreVertical
                              size={16}
                              className={theme.textSecondary}
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* JOB DETAILS */}
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
                  text-xl
                  font-bold
                  ${theme.textPrimary}
                `}
              >
                Job Details
              </h3>

              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-lg text-xs font-semibold">
                Active
              </span>
            </div>

            <h2
              className={`
                text-2xl
                font-bold
                ${theme.textPrimary}
              `}
            >
              Frontend Developer
            </h2>

            <p
              className={`
                mt-2
                text-sm
                leading-7
                ${theme.textSecondary}
              `}
            >
              We are looking for a skilled frontend developer
              to build responsive and modern applications using
              React.js and Tailwind CSS.
            </p>

            <div className="mt-6 space-y-4">
              
              {[
                ["Employment Type", "Full-time"],
                ["Experience", "2-4 Years"],
                ["Salary Range", "₹6LPA - ₹10LPA"],
                ["Deadline", "20 Jun 2025"],
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between"
                >
                  <span
                    className={`
                      text-sm
                      ${theme.textMuted}
                    `}
                  >
                    {item[0]}
                  </span>

                  <span
                    className={`
                      text-sm
                      font-semibold
                      ${theme.textPrimary}
                    `}
                  >
                    {item[1]}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              
              <button
                className={`
                  flex-1
                  py-3
                  rounded-xl
                  text-white
                  font-medium
                  ${theme.primary}
                `}
              >
                Preview Job
              </button>

              <button
                className={`
                  flex-1
                  py-3
                  rounded-xl
                  border
                  font-medium
                  ${theme.border}
                  ${theme.textPrimary}
                `}
              >
                Share Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}