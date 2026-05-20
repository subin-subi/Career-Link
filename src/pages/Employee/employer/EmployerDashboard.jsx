import DashboardLayout from "../../../layouts/EmployerDashboardLayout";
import WelcomeBanner from "../../../components/employerDashboard/WelcomeBanner";
import StatsGrid from "../../../components/employerDashboard/StatsGrid";
import RecentApplicationsTable from "../../../components/employerDashboard/RecentApplicationsTable";
import Navbar from "../../../components/Navbar/Navbar";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import BottomNav from "../../JobSearch/BottomNav";
import AdminAnalyticsCard from "./AdminAnalyticsCard"
import JobManagementCard from "./JobManagement"
export default function EmployerDashboardPage() {
  return (
    <>
      <DashboardLayout>
        <Navbar />

        <div className="pt-24 pb-24">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* LEFT SIDEBAR */}
              <div className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <ProfileSidebar />
                </div>
              </div>

              {/* MAIN CONTENT */}
              <div className="col-span-1 lg:col-span-9 space-y-6">
                <WelcomeBanner />
                <StatsGrid />
                <AdminAnalyticsCard/>
                <JobManagementCard/>
                <RecentApplicationsTable />
              </div>

            </div>
          </div>
        </div>
      </DashboardLayout>

      <BottomNav />
    </>
  );
}