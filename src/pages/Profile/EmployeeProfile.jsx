import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import RightSide from "./Right/RightSide";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";
import { useTheme } from "../../context/ThemeContext";

import ProfileHeader from "./Center/ProfileHeader";
import StatsSection from "./Center/StatsSection";
import InfoCard from "./Center/InfoCard";
import ResumeSection from "./Center/ResumeSection";
import { employerProfileData  } from "../../data/profileData";

export default function EmployeeProfile() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.textPrimary} pt-28 pb-24 transition-all duration-300`}
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto flex gap-6 items-start px-4">
        
        {/* Left Sidebar */}
        <div className="hidden lg:block w-72 shrink-0">
          <div className="sticky top-28">
            <ProfileSidebar />
          </div>
        </div>


      {/* Center Content */}
<div className="flex-1 min-w-0">
  <div
    className={`
      space-y-4
      p-4
      w-full
      ${theme.cardBg}
      ${theme.textPrimary}
      rounded-2xl
      shadow-sm
      border
      border-gray-200
      dark:border-gray-700
      transition-all
      duration-300
    `}
  >
    <ProfileHeader profile={employerProfileData } />

    <StatsSection stats={employerProfileData .stats} />

    <InfoCard
      title="Bio"
      value={employerProfileData.bio}
      editable
    />

    <InfoCard
      title="Education"
      value={employerProfileData .education}
      addable
    />

    <InfoCard
      title="Experiences"
      value={employerProfileData .experience}
      addable
    />

    <InfoCard
      title="Skills"
      value={employerProfileData .skills}
      editable
    />

    <InfoCard
      title="Portfolio"
      value={employerProfileData .portfolio}
      addable
    />

    <ResumeSection />

    <InfoCard
      title="Expected Salary"
      value={employerProfileData .salary}
      editable
    />
  </div>
</div>
        {/* Right Sidebar */}
        <div className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-28">
            <RightSide />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNav />
    </div>
  );
}