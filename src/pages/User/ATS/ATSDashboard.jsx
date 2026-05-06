import ATSHeader from "../../../components/ats/ATSHeader";
import StatsCard from "../../../components/ats/StatsCard";
import ApplicationTable from "../../../components/ats/ApplicationTable";
import { FileText, CheckCircle, XCircle } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";

export default function ATSDashboard() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      <Navbar />

      {/* ADD THIS WRAPPER */}
      <div className="pt-24 px-6">
        
        <ATSHeader />

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatsCard
            title="Total Applications"
            value="256"
            icon={<FileText size={20} />}
            color="bg-blue-100 text-blue-600"
          />
          <StatsCard
            title="Shortlisted"
            value="78"
            icon={<CheckCircle size={20} />}
            color="bg-green-100 text-green-600"
          />
          <StatsCard
            title="Rejected"
            value="45"
            icon={<XCircle size={20} />}
            color="bg-red-100 text-red-600"
          />
        </div>

        <ApplicationTable />

      </div>
    </div>
  );
}