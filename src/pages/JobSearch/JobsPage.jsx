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
import { useTheme } from "../../context/ThemeContext";
export default function JobsPage() {


  const { theme } = useTheme();
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [showFilter, setShowFilter] = useState(false);

  const [filters, setFilters] = useState({
    search: "",
    category: "All",
  });

  // ✅ Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;

  // Fetch jobs
  useEffect(() => {
    const loadJobs = async () => {
      try {
        const jobsData = await fetchRemoteJobs();
        setJobs(jobsData);
        setAllJobs(jobsData);
      } catch (err) {
        setError("Failed to load jobs");
        console.log(err);
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
    setCurrentPage(1); // ✅ reset page after filter
  }, [filters, allJobs]);

  // ✅ Pagination logic
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
   <div className={`min-h-screen ${theme.bg} ${theme.textPrimary} pb-24`}>
      <Navbar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 pt-24 sm:pt-30">
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
            <div className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} p-4 rounded-xl`}>
                <h2 className="text-xl font-bold">
                  Top job picks for you
                </h2>
                <p className="text-sm text-gray-500">
                  Based on your profile
                </p>
              </div>
            </div>

            {/* Mobile Filter Button */}
            <div className="lg:hidden mb-4">
             <button
  onClick={() => setShowFilter(true)}
  className={`${theme.primary} text-white py-2 rounded-lg flex items-center justify-center gap-2 w-full`}
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
              ) : currentJobs.length === 0 ? (
                <p className={`text-center ${theme.textMuted}`}>
  No jobs found
</p>
              ) : (
                currentJobs.map((job) => (
                <div
  key={job.id}
  className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-4 rounded-xl`}
>
  <h3 className={`font-semibold ${theme.textPrimary}`}>
    {job.title}
  </h3>

  <p className={`text-sm ${theme.textSecondary}`}>
    {job.company_name}
  </p>

  <p className={`text-xs ${theme.textMuted}`}>
    {job.category}
  </p>

  <div className="flex justify-between mt-3">
    <ApplyButton to={`/job-apply`} />
    <span className={`text-xs ${theme.textMuted}`}>
      {job.publication_date}
    </span>
  </div>
</div>
                ))
              )}
            </div>

            {/* ✅ Pagination UI */}
            {!loading && jobs.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
                {/* Prev */}
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 ${theme.cardBg} ${theme.border} rounded disabled:opacity-50`}
                >
                  Prev
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                     currentPage === page
  ? `${theme.primary} text-white`
  : `${theme.cardBg} ${theme.border}`
                    }`}
                  >
                    {page}
                  </button>
                ))}

                {/* Next */}
                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR FILTER */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <FilterForm filters={filters} setFilters={setFilters} />
            </div>
          </div>

        </div>
      </div>

      {/* FILTER DRAWER */}
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

    

      <BottomNav />
    </div>
  );
}