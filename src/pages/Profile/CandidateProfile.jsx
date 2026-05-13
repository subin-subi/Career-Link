import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ResumeUpload from "../../components/Profile/ResumeUpload";
import BasicInfo from "../../components/Profile/BasicInfo";
import ExperienceSection from "../../components/Profile/ExperienceSection";
import SkillsSection from "../../components/Profile/SkillsSection";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";

import { useTheme } from "../../context/ThemeContext";

export default function CandidateProfile() {

  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.bg}
        ${theme.textPrimary}
        min-h-screen
        pt-24
        pb-24
        px-3
        md:px-6
        transition-all
        duration-300
      `}
    >

      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div
        className={`
          max-w-5xl
          mx-auto
          ${theme.cardBg}
          rounded-3xl
          shadow-xl
          border
          border-gray-200
          dark:border-gray-700
          overflow-hidden
          transition-all
          duration-300
        `}
      >

        {/* Header */}
        <ProfileHeader />

        {/* Tabs */}
        <ProfileTabs />

        {/* Main Content */}
        <div className="p-4 md:p-6 space-y-6">

          {/* Resume + Basic Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

            <div
              className="
                rounded-2xl
                transition
                duration-300
              "
            >
              <ResumeUpload />
            </div>

            <div
              className="
                rounded-2xl
                transition
                duration-300
              "
            >
              <BasicInfo />
            </div>

          </div>

          {/* Experience + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            {/* Experience */}
            <div
              className="
                lg:col-span-2
                rounded-2xl
                transition
                duration-300
              "
            >
              <ExperienceSection />
            </div>

            {/* Skills */}
            <div
              className="
                rounded-2xl
                transition
                duration-300
              "
            >
              <SkillsSection />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}