import { CheckCircle, AlertTriangle } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";

export default function AIEvaluation() {
  const { theme } = useTheme();

  const scores = [
    {
      title: "Communication",
      score: 85,
    },
    {
      title: "Technical Knowledge",
      score: 92,
    },
    {
      title: "Problem Solving",
      score: 90,
    },
    {
      title: "Confidence",
      score: 88,
    },
  ];

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
      <div className="flex items-center justify-between">
        <div>
          <h2
            className={`text-xl font-bold ${theme.textPrimary}`}
          >
            AI Evaluation
          </h2>

          <p
            className={`text-sm mt-1 ${theme.textSecondary}`}
          >
            Automated candidate assessment
          </p>
        </div>

        <span
          className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${theme.successBg}
            ${theme.successText}
          `}
        >
          Strong Hire
        </span>
      </div>

      {/* Overall Score */}
      <div className="flex justify-center my-8">
        <div className="relative w-32 h-32">
          <div
            className={`
              w-32 h-32 rounded-full border-8
              border-green-500
              flex items-center justify-center
            `}
          >
            <div className="text-center">
              <h3
                className={`text-3xl font-bold ${theme.textPrimary}`}
              >
                92%
              </h3>

              <p
                className={`text-xs ${theme.textSecondary}`}
              >
                Overall
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-5">
        {scores.map((item) => (
          <div key={item.title}>
            <div className="flex justify-between mb-2">
              <span
                className={`text-sm font-medium ${theme.textPrimary}`}
              >
                {item.title}
              </span>

              <span
                className={`text-sm ${theme.textSecondary}`}
              >
                {item.score}%
              </span>
            </div>

            <div
              className={`h-2 rounded-full ${theme.active}`}
            >
              <div
                className={`${theme.primary} h-2 rounded-full`}
                style={{ width: `${item.score}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Strengths */}
      <div
        className={`
          mt-6
          rounded-xl
          p-4
          ${theme.successBg}
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle
            size={18}
            className={theme.successText}
          />

          <h4
            className={`font-semibold ${theme.successText}`}
          >
            Strengths
          </h4>
        </div>

        <ul
          className={`text-sm space-y-1 ${theme.textSecondary}`}
        >
          <li>• Excellent technical knowledge</li>
          <li>• Strong communication skills</li>
          <li>• Good problem-solving approach</li>
        </ul>
      </div>

      {/* Concerns */}
      <div
        className={`
          mt-4
          rounded-xl
          p-4
          ${theme.warningBg}
        `}
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle
            size={18}
            className={theme.warningText}
          />

          <h4
            className={`font-semibold ${theme.warningText}`}
          >
            Areas for Improvement
          </h4>
        </div>

        <ul
          className={`text-sm space-y-1 ${theme.textSecondary}`}
        >
          <li>• Needs more experience with system design</li>
          <li>• Could improve leadership examples</li>
        </ul>
      </div>

      {/* Footer */}
      <div
        className={`
          mt-6 pt-4 border-t
          ${theme.border}
        `}
      >
        <div className="flex justify-between">
          <span
            className={`text-sm ${theme.textSecondary}`}
          >
            AI Confidence
          </span>

          <span
            className={`font-semibold ${theme.textPrimary}`}
          >
            94%
          </span>
        </div>
      </div>
    </div>
  );
}