import React from "react";
import {
  CalendarDays,
  Download,
  Brain,
  Code2,
  MessageSquare,
  Users,
  Trophy,
  TrendingUp,
  Lightbulb,
  Award,
} from "lucide-react";

import Navbar from "../../../components/Navbar/Navbar";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import { useTheme } from "../../../context/ThemeContext";

export default function AIInsightsDashboard() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        transition-all
        duration-300
        ${theme.bg}
        ${theme.textPrimary}
      `}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Wrapper */}
      <div className="pt-30 px-6 lg:px-10 pb-10">
        <div className="flex flex-col xl:flex-row gap-6">
          
          {/* Sidebar */}
         <div className="hidden xl:block xl:w-[320px] shrink-0">
  <ProfileSidebar />
</div>

          {/* Dashboard Content */}
          <div className="flex-1">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-8">
              
              <div>
                <p className={`text-sm mb-1 ${theme.textSecondary}`}>
                  Welcome back! 👋
                </p>

                <h1 className="text-3xl lg:text-4xl font-bold">
                  AI Insights Dashboard
                </h1>

                <p className={`mt-2 ${theme.textSecondary}`}>
                  Real-time AI analysis and candidate insights
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                
                <button
                  className={`
                    flex items-center justify-center gap-2
                    px-5 py-3 rounded-2xl border transition
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                    ${theme.hover}
                  `}
                >
                  <CalendarDays size={18} />
                  May 12 – May 18, 2025
                </button>

                <button
                  className={`
                    flex items-center justify-center gap-2
                    px-5 py-3 rounded-2xl border transition
                    ${theme.cardBg}
                    ${theme.border}
                    ${theme.textPrimary}
                    ${theme.hover}
                  `}
                >
                  <Download size={18} />
                  Export Report
                </button>

              </div>
            </div>

            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-6">

              <ScoreCard
                theme={theme}
                title="AI Overall Score"
                score="87"
                status="Strong Match"
                color="blue"
                icon={<Brain size={28} />}
              />

              <ScoreCard
                theme={theme}
                title="Technical Score"
                score="91"
                status="Excellent"
                color="green"
                icon={<Code2 size={28} />}
              />

              <ScoreCard
                theme={theme}
                title="Communication Score"
                score="78"
                status="Good"
                color="purple"
                icon={<MessageSquare size={28} />}
              />

              <ScoreCard
                theme={theme}
                title="Cultural Fit Score"
                score="84"
                status="Strong"
                color="orange"
                icon={<Users size={28} />}
              />

            </div>

            {/* Middle Section */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">

              {/* Interview Progress */}
              <div
                className={`
                  rounded-3xl
                  p-6
                  border
                  transition
                  ${theme.cardBg}
                  ${theme.border}
                  ${theme.shadowMd}
                `}
              >
                <h2 className="text-xl font-semibold mb-6">
                  Interview Progress
                </h2>

                <div className="space-y-6">

                  <ProgressItem
                    theme={theme}
                    title="Screening Interview"
                    date="May 10, 2025"
                    status="Completed"
                    score="85/100"
                    active
                  />

                  <ProgressItem
                    theme={theme}
                    title="Technical Interview"
                    date="May 12, 2025"
                    status="Completed"
                    score="92/100"
                    active
                  />

                  <ProgressItem
                    theme={theme}
                    title="HR Interview"
                    date="May 15, 2025"
                    status="Scheduled"
                    badge="Upcoming"
                    number="3"
                  />

                  <ProgressItem
                    theme={theme}
                    title="Final Round"
                    date="TBD"
                    badge="Pending"
                    number="4"
                  />

                </div>
              </div>

              {/* AI Remarks */}
              <div
                className={`
                  xl:col-span-2
                  rounded-3xl
                  p-6
                  border
                  transition
                  ${theme.cardBg}
                  ${theme.border}
                  ${theme.shadowMd}
                `}
              >
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

                  <div className="flex-1">

                    <h2 className="text-xl font-semibold mb-4">
                      AI Remarks
                    </h2>

                    <div className={`space-y-4 leading-7 ${theme.textSecondary}`}>
                      
                      <p>
                        The candidate demonstrates strong technical
                        expertise in software development and problem
                        solving.
                      </p>

                      <p>
                        Communication is clear, but can be more concise.
                        Shows good cultural alignment and collaboration
                        potential.
                      </p>

                      <p>
                        Overall, a strong candidate with high potential.
                      </p>

                    </div>

                    <button className="mt-6 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-xl text-sm font-semibold">
                      AI Confidence: 92%
                    </button>

                  </div>

                  {/* Robot */}
                  <div className="flex items-center justify-center">

                    <div
                      className={`
                        w-56
                        h-56
                        rounded-full
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                        ${theme.profilePrimary}
                      `}
                    >
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
                        alt="AI Bot"
                        className="w-40"
                      />
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Strengths */}
              <BottomCard
                theme={theme}
                title="Key Strengths"
                icon={<Trophy className="text-green-500" />}
              >
                <ul className={`space-y-3 ${theme.textSecondary}`}>
                  <li>• Excellent problem solving skills</li>
                  <li>• Strong technical knowledge</li>
                  <li>• Good analytical thinking</li>
                  <li>• Quick learner</li>
                  <li>• Team collaboration</li>
                </ul>
              </BottomCard>

              {/* Improvements */}
              <BottomCard
                theme={theme}
                title="Areas of Improvement"
                icon={<TrendingUp className="text-orange-400" />}
              >
                <ul className={`space-y-3 ${theme.textSecondary}`}>
                  <li>• Communication can be more concise</li>
                  <li>• Need more experience in leadership</li>
                  <li>• Presentation skills improvement</li>
                </ul>
              </BottomCard>

              {/* Recommendation */}
              <BottomCard
                theme={theme}
                title="AI Recommendation"
                icon={<Lightbulb className="text-blue-500" />}
              >
                <div
                  className={`
                    rounded-2xl
                    p-5
                    flex
                    justify-between
                    items-center
                    ${theme.infoBg}
                  `}
                >
                  <div>

                    <h3 className="text-blue-500 font-bold text-lg mb-2">
                      Proceed to next round
                    </h3>

                    <p className={`text-sm leading-6 ${theme.textSecondary}`}>
                      Candidate is a strong fit for the role with high
                      potential for growth.
                    </p>

                  </div>

                  <Award className="text-blue-500" size={70} />

                </div>
              </BottomCard>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   SCORE CARD
========================================= */

function ScoreCard({
  title,
  score,
  status,
  color,
  icon,
  theme,
}) {
  const colors = {
    blue: {
      text: "text-blue-500",
      bg: "bg-blue-500/10",
      progress: "bg-blue-500",
    },

    green: {
      text: "text-green-500",
      bg: "bg-green-500/10",
      progress: "bg-green-500",
    },

    purple: {
      text: "text-purple-500",
      bg: "bg-purple-500/10",
      progress: "bg-purple-500",
    },

    orange: {
      text: "text-orange-400",
      bg: "bg-orange-500/10",
      progress: "bg-orange-400",
    },
  };

  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
      `}
    >
      <div className="flex items-center justify-between mb-5">

        <div>
          <p className={`text-sm mb-2 ${theme.textSecondary}`}>
            {title}
          </p>

          <div className="flex items-end gap-1">
            <h2
              className={`text-5xl font-bold ${colors[color].text}`}
            >
              {score}
            </h2>

            <span className={`mb-1 ${theme.textMuted}`}>
              /100
            </span>
          </div>
        </div>

        <div
          className={`
            w-16
            h-16
            rounded-full
            flex
            items-center
            justify-center
            ${colors[color].bg}
            ${colors[color].text}
          `}
        >
          {icon}
        </div>
      </div>

      <p className={`font-semibold mb-4 ${colors[color].text}`}>
        {status}
      </p>

      <div
        className={`
          w-full
          h-2
          rounded-full
          mb-4
          ${theme.active}
        `}
      >
        <div
          className={`h-2 rounded-full ${colors[color].progress}`}
          style={{ width: `${score}%` }}
        ></div>
      </div>

      <p className={`text-sm ${theme.textMuted}`}>
        Top 18% of all candidates
      </p>
    </div>
  );
}

/* =========================================
   PROGRESS ITEM
========================================= */

function ProgressItem({
  title,
  date,
  status,
  score,
  active,
  badge,
  number,
  theme,
}) {
  return (
    <div className="flex justify-between items-start gap-4">

      <div className="flex gap-4">

        <div
          className={`
            w-8
            h-8
            rounded-full
            flex
            items-center
            justify-center
            text-sm
            font-semibold
            ${
              active
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-700"
            }
          `}
        >
          {active ? "✓" : number}
        </div>

        <div>
          <h3 className="font-semibold">
            {title}
          </h3>

          <p className={`text-sm mt-1 ${theme.textSecondary}`}>
            {date} {status && `• ${status}`}
          </p>
        </div>
      </div>

      {score && (
        <span className="bg-green-500/20 text-green-500 px-3 py-1 rounded-lg text-sm font-semibold">
          {score}
        </span>
      )}

      {badge && (
        <span
          className={`
            px-3
            py-1
            rounded-lg
            text-sm
            font-semibold
            ${
              badge === "Upcoming"
                ? "bg-blue-500/20 text-blue-500"
                : "bg-gray-500/20 text-gray-400"
            }
          `}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

/* =========================================
   BOTTOM CARD
========================================= */

function BottomCard({
  title,
  icon,
  children,
  theme,
}) {
  return (
    <div
      className={`
        rounded-3xl
        p-6
        border
        transition
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
      `}
    >
      <div className="flex items-center gap-2 mb-5">
        {icon}

        <h2 className="text-lg font-semibold">
          {title}
        </h2>
      </div>

      {children}
    </div>
  );
}