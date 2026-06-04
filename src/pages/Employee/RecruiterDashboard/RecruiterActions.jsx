import Navbar from "../../../components/Navbar/Navbar";
import { useTheme } from "../../../context/ThemeContext";
import { useState } from "react";
import TopNavbar from "./TopNavbar";
import StatCard from "./StatCard";
import CandidateTable from "./CandidateTable";
import CandidateDetails from "./CandidateDetails";
import InterviewTrendChart from "./InterviewTrendChart";
import ScoreDistributionChart from "./ScoreDistributionChart";
import AIEvaluation from "./AIEvaluation";
import BottomNav from "../../JobSearch/BottomNav";

export default function RecruiterDashboard() {
  const { theme } = useTheme();
const [showAI, setShowAI] = useState(false);
  return (
    <div
      className={`
        min-h-screen
        ${theme.bg}
        ${theme.textPrimary}
      `}
    >
      <Navbar />

      <div className="pt-28 px-4 lg:px-6 pb-20">
        <TopNavbar />

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
          <StatCard title="Total Candidates" value="120" />
          <StatCard title="Total Interviews" value="85" />
          <StatCard title="Selected" value="24" />
          <StatCard title="Rejected" value="18" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          
          {/* Left Section */}
          <div className="xl:col-span-2 space-y-6">
            <CandidateTable />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InterviewTrendChart />
              <ScoreDistributionChart />
            </div>
          </div>

          {/* Right Section */}
          {/* Right Section */}
<div className="space-y-6">
  <CandidateDetails />

  {/* Toggle Button */}
  <button
    onClick={() => setShowAI(!showAI)}
    className="w-full bg-[#1B365D] hover:bg-[#152948] text-white py-3 rounded-xl font-medium transition"
  >
    {showAI ? "Hide AI Evaluation" : "Show AI Evaluation"}
  </button>

  {/* AI Evaluation */}
  {showAI && <AIEvaluation />}
</div>

        </div>
      <BottomNav/>
      </div>
    </div>
  );
}