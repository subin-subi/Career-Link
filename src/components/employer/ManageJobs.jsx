import JobFilters from "./JobFilters";
import JobCard from "./JobCard";
import jobs from "../../data/dummyJobs";

export default function ManageJobs() {
  return (
    <div className="w-full">
      
      {/* Page Container */}
      <div className="px-4 md:px-8 py-4 md:py-6 max-w-6xl mx-auto">
        
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h3 className="text-lg md:text-2xl font-semibold">
            Manage Jobs
          </h3>
        </div>

        {/* Filters Section */}
        <div className="bg-white p-4 rounded-xl shadow-sm">
          <JobFilters />
        </div>

        {/* Job List */}
        <div className="mt-6 space-y-4 md:space-y-6">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

      </div>
    </div>
  );
}