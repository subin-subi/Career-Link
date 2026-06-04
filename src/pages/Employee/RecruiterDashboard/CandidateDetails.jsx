import {
  Mail,
  Phone,
  Briefcase,
  Download,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

import { useTheme } from "../../../context/ThemeContext";

export default function CandidateDetails() {
  const { theme } = useTheme();

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
      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="Candidate"
          className="w-20 h-20 rounded-full object-cover border-2 border-green-500"
        />

        <div>
          <h2
            className={`text-xl font-bold ${theme.textPrimary}`}
          >
            John Doe
          </h2>

          <p className={theme.textSecondary}>
            Frontend Developer
          </p>

          <div
            className={`
              mt-2 inline-flex items-center gap-2
              px-3 py-1 rounded-full text-xs font-medium
              ${theme.successBg}
              ${theme.successText}
            `}
          >
            Interview Completed
          </div>
        </div>
      </div>

      {/* Contact */}
      <div
        className={`
          mt-6 pt-6 border-t
          ${theme.border}
        `}
      >
        <h3
          className={`font-semibold mb-4 ${theme.textPrimary}`}
        >
          Candidate Information
        </h3>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Mail
              size={18}
              className={theme.textSecondary}
            />
            <span className={theme.textSecondary}>
              john.doe@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Phone
              size={18}
              className={theme.textSecondary}
            />
            <span className={theme.textSecondary}>
              +91 9876543210
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase
              size={18}
              className={theme.textSecondary}
            />
            <span className={theme.textSecondary}>
              4 Years Experience
            </span>
          </div>
        </div>
      </div>

      {/* Score */}
      <div
        className={`
          mt-6
          rounded-xl
          p-4
          ${theme.successBg}
        `}
      >
        <p
          className={`text-sm ${theme.textSecondary}`}
        >
          Overall Interview Score
        </p>

        <h2
          className={`
            text-4xl font-bold mt-2
            ${theme.successText}
          `}
        >
          92%
        </h2>

        <p
          className={`text-sm mt-2 ${theme.textSecondary}`}
        >
          Excellent technical and communication performance.
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h3
          className={`font-semibold mb-3 ${theme.textPrimary}`}
        >
          Skills
        </h3>

        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Tailwind",
          ].map((skill) => (
            <span
              key={skill}
              className={`
                px-3 py-1 rounded-full text-sm
                ${theme.infoBg}
                ${theme.infoText}
              `}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Resume */}
      <button
        className={`
          w-full mt-6
          ${theme.primary}
          text-white
          py-3 rounded-xl
          flex items-center justify-center gap-2
          ${theme.primaryHover}
        `}
      >
        <Download size={18} />
        Download Resume
      </button>

      {/* Interview Recording */}
      <div className="mt-6">
        <h3
          className={`font-semibold mb-3 ${theme.textPrimary}`}
        >
          Interview Recording
        </h3>

        <video
          controls
          className="w-full rounded-xl"
        >
          <source src="/sample.mp4" />
        </video>
      </div>

      {/* Actions */}
      <div className="grid grid-cols-3 gap-3 mt-6">
        <button
          className={`
            ${theme.success}
            text-white
            py-2 rounded-lg
            flex items-center justify-center gap-2
          `}
        >
          <CheckCircle size={16} />
          Hire
        </button>

        <button
          className={`
            ${theme.warning}
            text-white
            py-2 rounded-lg
            flex items-center justify-center gap-2
          `}
        >
          <Clock size={16} />
          Hold
        </button>

        <button
          className={`
            ${theme.danger}
            text-white
            py-2 rounded-lg
            flex items-center justify-center gap-2
          `}
        >
          <XCircle size={16} />
          Reject
        </button>
      </div>
    </div>
  );
}