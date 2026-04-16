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

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 pt-28">
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT SIDEBAR */}
          <div className="hidden lg:block lg:col-span-3">
            <ProfileSidebar />
          </div>

          {/* CENTER CONTENT */}
          <div className="col-span-12 lg:col-span-6">

            {/* Title */}
            <div className="mb-6">
              <div className="bg-white rounded-2xl shadow-md p-5">
                <h2 className="text-3xl font-bold">
                  Top job picks for you
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Based on your profile preference and recent activity
                </p>
              </div>
            </div>

            {/* Job list */}
            <div className="bg-white rounded-2xl shadow-lg p-4 space-y-4">
              {loading ? (
                <LoadingSpinner />
              ) : error ? (
                <ErrorMessage message={error} />
              ) : (
                jobs.map((job) => (
                  <div
                    key={job.id}
                    className="bg-gray-100 rounded-xl shadow p-4"
                  >
                    <h3 className="font-semibold text-lg mb-2">
                      {job.title}
                    </h3>

                    <p>Company: {job.company_name}</p>
                    <p>Category: {job.category}</p>

                    <ApplyButton to={`/job-apply`} />

                    <p className="text-xs text-gray-500 mt-2">
                      Posted: {job.publication_date}
                    </p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* RIGHT SIDEBAR FILTER */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28">
              <JobFilterPage />
            </div>
          </div>
        </div>
      </div>

      {/* Floating button */}
      <div className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-blue-900 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <Plus />
      </div>

      <BottomNav />
    </div>
  );
}