import ProfileHeader from "../../components/Profile/ProfileHeader";
import ProfileTabs from "../../components/Profile/ProfileTabs";
import ResumeUpload from "../../components/Profile/ResumeUpload";
import BasicInfo from "../../components/Profile/BasicInfo";
import ExperienceSection from "../../components/Profile/ExperienceSection";
import SkillsSection from "../../components/Profile/SkillsSection";

export default function CandidateProfile() {
  return (
    <div className="bg-gray-50 min-h-screen py-6 px-3 md:px-6">
      
      <div className="
        max-w-5xl
        mx-auto
        bg-white
        rounded-2xl
        shadow-sm
        border
        overflow-hidden
      ">
        
        <ProfileHeader />
        <ProfileTabs />

        {/* Main Content */}
        <div className="p-4 md:p-6 space-y-5">

          {/* Resume + Basic Info Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <ResumeUpload />
            <BasicInfo />
          </div>

          {/* Experience + Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2">
              <ExperienceSection />
            </div>
            <div>
              <SkillsSection />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}