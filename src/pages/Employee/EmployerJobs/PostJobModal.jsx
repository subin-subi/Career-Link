import {
  X,
  Briefcase,
  MapPin,
  IndianRupee,
  Clock3,
  Layers3,
  FileText,
  CalendarDays,
  Upload,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

export default function PostJobModal({
  isOpen,
  onClose,
}) {
  const { theme } = useTheme();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      
      {/* Modal */}
      <div
        className={`
          w-full
          max-w-5xl
          max-h-[95vh]
          overflow-y-auto
          rounded-3xl
          border
          ${theme.cardBg}
          ${theme.border}
          ${theme.shadowMd}
        `}
      >
        {/* Header */}
        <div
          className={`
            sticky
            top-0
            z-10
            flex
            items-center
            justify-between
            p-6
            border-b
            backdrop-blur-lg
            ${theme.cardBg}
            ${theme.border}
          `}
        >
          <div>
            <h2
              className={`
                text-2xl
                font-bold
                ${theme.textPrimary}
              `}
            >
              Post New Job
            </h2>

            <p
              className={`
                mt-1
                text-sm
                ${theme.textMuted}
              `}
            >
              Fill all required information to publish a new job
            </p>
          </div>

          <button
            onClick={onClose}
            className={`
              h-11
              w-11
              rounded-xl
              border
              flex
              items-center
              justify-center
              transition-all
              duration-200
              ${theme.border}
              ${theme.hover}
            `}
          >
            <X size={20} className={theme.textPrimary} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          
          {/* Basic Information */}
          <div>
            <h3
              className={`
                text-lg
                font-semibold
                mb-5
                ${theme.textPrimary}
              `}
            >
              Basic Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* Job Title */}
              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Job Title
                </label>

                <div className="relative">
                  <Briefcase
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${theme.textMuted}
                    `}
                  />

                  <input
                    type="text"
                    placeholder="Frontend Developer"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      ${theme.cardBg}
                      ${theme.border}
                      ${theme.textPrimary}
                      ${theme.focus}
                    `}
                  />
                </div>
              </div>

              {/* Job Category */}
              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Job Category
                </label>

                <select
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                  `}
                >
                  <option>Engineering</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Management</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Location
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${theme.textMuted}
                    `}
                  />

                  <input
                    type="text"
                    placeholder="Bangalore"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      ${theme.cardBg}
                      ${theme.border}
                      ${theme.textPrimary}
                    `}
                  />
                </div>
              </div>

              {/* Employment Type */}
              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Employment Type
                </label>

                <select
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                  `}
                >
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Internship</option>
                  <option>Remote</option>
                </select>
              </div>
            </div>
          </div>

          {/* Salary & Experience */}
          <div>
            <h3
              className={`
                text-lg
                font-semibold
                mb-5
                ${theme.textPrimary}
              `}
            >
              Salary & Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Minimum Salary
                </label>

                <div className="relative">
                  <IndianRupee
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${theme.textMuted}
                    `}
                  />

                  <input
                    type="number"
                    placeholder="300000"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      ${theme.cardBg}
                      ${theme.border}
                      ${theme.textPrimary}
                    `}
                  />
                </div>
              </div>

              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Maximum Salary
                </label>

                <input
                  type="number"
                  placeholder="1000000"
                  className={`
                    w-full
                    px-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                  `}
                />
              </div>

              <div>
                <label
                  className={`
                    text-sm
                    font-medium
                    mb-2
                    block
                    ${theme.textSecondary}
                  `}
                >
                  Experience
                </label>

                <div className="relative">
                  <Clock3
                    size={18}
                    className={`
                      absolute
                      left-4
                      top-1/2
                      -translate-y-1/2
                      ${theme.textMuted}
                    `}
                  />

                  <input
                    type="text"
                    placeholder="2 - 4 Years"
                    className={`
                      w-full
                      pl-11
                      pr-4
                      py-3
                      rounded-2xl
                      border
                      outline-none
                      ${theme.cardBg}
                      ${theme.border}
                      ${theme.textPrimary}
                    `}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3
              className={`
                text-lg
                font-semibold
                mb-5
                ${theme.textPrimary}
              `}
            >
              Skills Required
            </h3>

            <div className="relative">
              <Layers3
                size={18}
                className={`
                  absolute
                  left-4
                  top-4
                  ${theme.textMuted}
                `}
              />

              <textarea
                rows={3}
                placeholder="React.js, Node.js, MongoDB, Tailwind CSS"
                className={`
                  w-full
                  pl-11
                  pr-4
                  py-3
                  rounded-2xl
                  border
                  resize-none
                  outline-none
                  ${theme.cardBg}
                  ${theme.border}
                  ${theme.textPrimary}
                `}
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3
              className={`
                text-lg
                font-semibold
                mb-5
                ${theme.textPrimary}
              `}
            >
              Job Description
            </h3>

            <div className="relative">
              <FileText
                size={18}
                className={`
                  absolute
                  left-4
                  top-4
                  ${theme.textMuted}
                `}
              />

              <textarea
                rows={7}
                placeholder="Write detailed job description..."
                className={`
                  w-full
                  pl-11
                  pr-4
                  py-3
                  rounded-2xl
                  border
                  resize-none
                  outline-none
                  ${theme.cardBg}
                  ${theme.border}
                  ${theme.textPrimary}
                `}
              />
            </div>
          </div>

          {/* Deadline & Upload */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Deadline */}
            <div>
              <label
                className={`
                  text-sm
                  font-medium
                  mb-2
                  block
                  ${theme.textSecondary}
                `}
              >
                Application Deadline
              </label>

              <div className="relative">
                <CalendarDays
                  size={18}
                  className={`
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    ${theme.textMuted}
                  `}
                />

                <input
                  type="date"
                  className={`
                    w-full
                    pl-11
                    pr-4
                    py-3
                    rounded-2xl
                    border
                    outline-none
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                  `}
                />
              </div>
            </div>

            {/* Upload */}
            <div>
              <label
                className={`
                  text-sm
                  font-medium
                  mb-2
                  block
                  ${theme.textSecondary}
                `}
              >
                Company Logo / Banner
              </label>

              <label
                className={`
                  flex
                  items-center
                  justify-center
                  gap-3
                  h-[52px]
                  rounded-2xl
                  border-2
                  border-dashed
                  cursor-pointer
                  transition-all
                  duration-200
                  ${theme.border}
                  ${theme.hover}
                `}
              >
                <Upload
                  size={18}
                  className={theme.textMuted}
                />

                <span
                  className={`
                    text-sm
                    ${theme.textSecondary}
                  `}
                >
                  Upload Image
                </span>

                <input
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className={`
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-4
            p-6
            border-t
            ${theme.border}
          `}
        >
          <div
            className={`
              text-sm
              ${theme.textMuted}
            `}
          >
            Make sure all details are correct before publishing.
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            
            <button
              onClick={onClose}
              className={`
                flex-1
                sm:flex-none
                px-5
                py-3
                rounded-2xl
                border
                font-medium
                ${theme.border}
                ${theme.textPrimary}
              `}
            >
              Cancel
            </button>

            <button
              className={`
                flex-1
                sm:flex-none
                px-6
                py-3
                rounded-2xl
                text-white
                font-medium
                transition-all
                duration-200
                ${theme.primary}
                ${theme.primaryHover}
              `}
            >
              Publish Job
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}