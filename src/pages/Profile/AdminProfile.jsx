import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import RightSide from "./Right/RightSide";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";

import { useTheme } from "../../context/ThemeContext";

import ProfileHeader from "./Center/ProfileHeader";
import StatsSection from "./Center/StatsSection";
import InfoCard from "./Center/InfoCard";

import { adminProfileData } from "../../data/profileData";

export default function AdminProfile() {
  const { theme } = useTheme();

  return (
    <div
      className={`
        min-h-screen
        ${theme.bg}
        ${theme.textPrimary}
        pt-28 pb-24
        transition-all duration-300
      `}
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
              rounded-2xl
              transition-all duration-300
              ${theme.cardBg}
              ${theme.textPrimary}
              ${theme.border}
              ${theme.shadow}
            `}
          >
            {/* Profile Header */}
            <ProfileHeader profile={adminProfileData} />

            {/* Stats */}
            <StatsSection stats={adminProfileData.stats} />

            {/* Bio */}
            <InfoCard
              title="Bio"
              value={adminProfileData.bio}
              editable
            />

            {/* Department */}
            <InfoCard
              title="Department"
              value={adminProfileData.department}
              editable
            />

            {/* Access Level */}
            <InfoCard
              title="Access Level"
              value={adminProfileData.accessLevel}
              editable
            />

            {/* Joined */}
            <InfoCard
              title="Joined"
              value={adminProfileData.joined}
            />

            {/* Permissions */}
            <InfoCard
              title="Permissions"
              value={adminProfileData.permissions.join(", ")}
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