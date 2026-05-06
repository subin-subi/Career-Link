// src/pages/candidate/Jobs.jsx

import JobCard from "../../../components/candidate/JobCard";
import JobFilters from "../../../components/candidate/JobFilters";
import Navbar from "../../../components/Navbar/Navbar";
import jobs from "../../../data/candidatedummyJobs";

export default function Jobs() {
  return (
    <div className="min-h-screen bg-gray-100">
 <Navbar/>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">

        <div className="bg-gray-50 p-6 rounded-2xl">

          <h2 className="text-2xl font-semibold mb-6">
            Find Your Dream Job
          </h2>

          <div className="flex flex-col md:flex-row gap-8">

            {/* Filters */}
            <div className="w-full md:w-1/3">
              <JobFilters />
            </div>

            {/* Job List */}
            <div className="w-full md:w-2/3 space-y-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}