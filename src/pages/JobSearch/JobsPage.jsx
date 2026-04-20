import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "./BottomNav";
import { Plus, SlidersHorizontal } from "lucide-react";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { fetchRemoteJobs } from "../../services/api";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import ApplyButton from "../../components/Button/Apply";

import FilterForm from "../../components/filters/FilterForm";
import FilterDrawer from "../../components/filters/FilterDrawer";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showFilter, setShowFilter] = useState(false);

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

          {/* CENTER */}
          <div className="col-span-1 lg:col-span-6">

            {/* Header */}
            <div className="mb-4">
              <div className="bg-white rounded-xl shadow p-4">
                <h2 className="text-xl font-bold">
                  Top job picks for you
                </h2>
                <p className="text-sm text-gray-500">
                  Based on your profile
                </p>
              </div>
            </div>

            {/* ✅ Mobile Filter Button */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setShowFilter(true)}
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                <SlidersHorizontal size={18} />
                Filters
              </button>
            </div>

            {/* Jobs */}
            <div className="space-y-4">
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
                    className="bg-white rounded-xl shadow p-4 border"
                  >
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-sm">{job.company_name}</p>
                    <p className="text-xs text-gray-500">
                      {job.category}
                    </p>

                    <div className="flex justify-between mt-3">
                      <ApplyButton to={`/job-apply`} />
                      <span className="text-xs text-gray-400">
                        {job.publication_date}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR FILTER */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <FilterForm filters={filters} setFilters={setFilters} />
            </div>
          </div>

        </div>
      </div>

      {/* 🔥 FILTER DRAWER */}
      <FilterDrawer
        open={showFilter}
        onClose={() => setShowFilter(false)}
        onApply={() => setShowFilter(false)}
        onReset={() =>
          setFilters({
            search: "",
            category: "All",
          })
        }
      >
        <FilterForm filters={filters} setFilters={setFilters} />
      </FilterDrawer>

      {/* Floating Button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-blue-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <Plus size={20} />
      </div>

      <BottomNav />
    </div>
  );
}