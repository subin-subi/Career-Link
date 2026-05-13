import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import RightSide from "./Right/RightSide";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";
import { useTheme } from "../../context/ThemeContext";

import ProfileHeader from "./Center/ProfileHeader";
import StatsSection from "./Center/StatsSection";
import InfoCard from "./Center/InfoCard";
import ResumeSection from "./Center/ResumeSection";

import { userProfileData } from "../../data/profileData";

export default function ProfileBody() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        ${theme.bg}
        ${theme.textPrimary}
        transition-all duration-300
      `}
    >
      <Navbar />

      {/* LEFT SIDEBAR */}
      <div className="hidden lg:block fixed left-6 top-28 w-72">
        <ProfileSidebar />
      </div>

      {/* RIGHT SIDEBAR */}
      <div className="hidden lg:block fixed right-6 top-28 w-80">
        <RightSide />
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-3xl mx-auto pt-28 pb-24 px-4">
        <div
          className={`
            w-full
            p-4
            space-y-4
            rounded-2xl
            ${theme.cardBg}
            ${theme.textPrimary}
            ${theme.shadowMd}
            border
            border-gray-200
            dark:border-gray-700
            transition-all duration-300
          `}
        >
          <ProfileHeader profile={userProfileData} />

          <StatsSection stats={userProfileData.stats} />

          <InfoCard
            title="Bio"
            value={userProfileData.bio}
            editable
          />

          <InfoCard
            title="Education"
            value={userProfileData.education}
            addable
          />

          <InfoCard
            title="Experiences"
            value={userProfileData.experience}
            addable
          />

          <InfoCard
            title="Skills"
            value={userProfileData.skills}
            editable
          />

          <InfoCard
            title="Portfolio"
            value={userProfileData.portfolio}
            addable
          />

          <ResumeSection />

          <InfoCard
            title="Expected Salary"
            value={userProfileData.salary}
            editable
          />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}