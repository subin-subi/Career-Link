import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "./BottomNav";
import { Plus } from "lucide-react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { fetchRemoteJobs } from "../../services/api";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import ApplyButton from "../../components/Button/Apply";
import JobFilterPage from "../../components/filters/FilterForm";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    search: "",
    category: "All",
  });

  // Fetch jobs
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await fetchRemoteJobs();
        setJobs(jobsData);
        setAllJobs(jobsData);
      } catch (err) {
        setError("Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  // Filter logic
  useEffect(() => {
    let filtered = [...allJobs];

    if (filters.search.trim() !== "") {
      const search = filters.search.toLowerCase();
      filtered = filtered.filter(
        (job) =>
          job.title?.toLowerCase().includes(search) ||
          job.company_name?.toLowerCase().includes(search)
      );
    }

    if (filters.category !== "All") {
      filtered = filtered.filter(
        (job) =>
          job.category?.toLowerCase() ===
          filters.category.toLowerCase()
      );
    }

    setJobs(filtered);
  }, [filters, allJobs]);

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 pt-24 sm:pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">

         {/* LEFT SIDEBAR */}
<div className="hidden lg:block lg:col-span-3">
  <div className="sticky top-28">
    <ProfileSidebar />
  </div>
</div>

          {/* CENTER CONTENT */}
          <div className="col-span-1 lg:col-span-6">

            {/* Title */}
            <div className="mb-4 sm:mb-6">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow p-4 sm:p-5">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
                  Top job picks for you
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                  Based on your profile preference and recent activity
                </p>
              </div>
            </div>

            {/* ✅ Mobile Filter */}
            <div className="lg:hidden mb-4">
              <JobFilterPage filters={filters} setFilters={setFilters} />
            </div>

            {/* Job list */}
            <div className="space-y-3 sm:space-y-4">
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <ErrorMessage message={error} />
              ) : jobs.length === 0 ? (
                <p className="text-center text-gray-500">
                  No jobs found
                </p>
              ) : (
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 sm:p-5 border"
                  >
                    <h3 className="font-semibold text-base sm:text-lg mb-1">
                      {job.title}
                    </h3>

                    <p className="text-sm text-gray-700">
                      {job.company_name}
                    </p>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1">
                      {job.category}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 gap-2">
                      <ApplyButton to={`/job-apply`} />

                      <p className="text-xs text-gray-400">
                        {job.publication_date}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR FILTER */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <JobFilterPage filters={filters} setFilters={setFilters} />
            </div>
          </div>

        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-blue-900 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition">
        <Plus size={20} />
      </div>

      <BottomNav />
    </div>
  );
}