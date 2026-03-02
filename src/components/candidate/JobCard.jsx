// src/components/candidate/JobCard.jsx

import { FiMapPin, FiBriefcase, FiClock } from "react-icons/fi";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">

      <h3 className="text-lg font-semibold">{job.title}</h3>

      <p className="text-blue-600 text-sm mt-1">
        {job.company}
      </p>

      <div className="flex flex-wrap gap-4 text-gray-500 text-sm mt-3">
        <span className="flex items-center gap-1">
          <FiMapPin size={14} /> {job.location}
        </span>

        <span className="flex items-center gap-1">
          <FiBriefcase size={14} /> {job.type}
        </span>

        <span className="flex items-center gap-1">
          <FiClock size={14} /> {job.posted}
        </span>
      </div>

      <p className="text-gray-600 text-sm mt-3">
        {job.description}
      </p>

      <div className="flex justify-between items-center mt-5">
        <span className="font-semibold text-gray-800">
          {job.salary}
        </span>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>

    </div>
  );
}