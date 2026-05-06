import DashboardLayout from "../../../layouts/CandidateLayout";
import StatCard from "../../../components/candidate/StatCard";

export default function CandidateDashboard() {
  return (
    <DashboardLayout>
      
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
          Welcome back 👋
        </h1>

        <p className="text-gray-500 text-xs sm:text-sm mt-2">
          Track your job applications and career progress.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <StatCard title="Jobs Applied" value="18" change="+3 this week" />
        <StatCard title="Interviews Scheduled" value="4" change="+1 new" />
        <StatCard title="Saved Jobs" value="12" change="+2 added" />
      </div>

      {/* Profile Completion */}
      <div className="mt-6 sm:mt-8 bg-white p-4 sm:p-6 rounded-xl shadow-sm">
        
        <h3 className="text-base sm:text-lg font-semibold mb-4">
          Profile Completion
        </h3>

        <div className="w-full bg-gray-200 h-2 sm:h-3 rounded-full">
          <div className="bg-emerald-500 h-2 sm:h-3 rounded-full w-3/4"></div>
        </div>

        <p className="text-xs sm:text-sm text-gray-500 mt-3">
          Your profile is 75% complete. Add skills to increase visibility.
        </p>
      </div>

    </DashboardLayout>
  );
}