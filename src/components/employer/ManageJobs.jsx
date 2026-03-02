import JobFilters from "./JobFilters";
import JobCard from "./JobCard";
import jobs from "../../data/dummyJobs";

export default function ManageJobs() {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Manage Jobs</h3>

      <JobFilters />

      <div className="space-y-6 mt-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
}