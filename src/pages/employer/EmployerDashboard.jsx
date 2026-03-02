import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/StatCard";
import ActivityTable from "../../components/dashboard/ActivityTable";

export default function EmployerDashboard() {
  return (
    <DashboardLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Welcome back 👋
        </h1>
        <p className="text-gray-500 text-sm">
          Here's what's happening with your jobs today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Active Jobs" value="24" change="+4%" />
        <StatCard title="Total Applicants" value="342" change="+12%" />
        <StatCard title="Interviews Scheduled" value="18" change="+6%" />
      </div>

      {/* Table */}
      <ActivityTable />
    </DashboardLayout>
  );
}