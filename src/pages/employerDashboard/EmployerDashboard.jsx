import DashboardLayout from "../../layouts/EmployerDashboardLayout";
import WelcomeBanner from "../../components/employerDashboard/WelcomeBanner";
import StatsGrid from "../../components/employerDashboard/StatsGrid";
import RecentApplicationsTable from "../../components/employerDashboard/RecentApplicationsTable";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";

export default function EmployerDashboardPage() {
  return (
    <DashboardLayout>
      <Navbar />

      <div className="pt-24">
        <div className="flex gap-6">
          
          {/* Hide sidebar on mobile */}
          <div className="hidden lg:block lg:w-1/4 sticky top-24 self-start">
            <ProfileSidebar />
          </div>

          {/* Full width on mobile, 75% on desktop */}
          <div className="w-full lg:w-3/4 space-y-6">
            <WelcomeBanner />
            <StatsGrid />
            <RecentApplicationsTable />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}