import { FiMapPin, FiUsers } from "react-icons/fi";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-md">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        
        {/* Job Info */}
        <div>
          <h4 className="text-base md:text-lg font-semibold">
            {job.title}
          </h4>

          <div className="text-gray-500 flex flex-wrap gap-3 mt-2 text-sm">
            <span className="flex items-center gap-1">
              <FiMapPin size={14} /> {job.location}
            </span>

            <span>{job.type}</span>

            <span className="flex items-center gap-1">
              <FiUsers size={14} /> {job.applicants} Applicants
            </span>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`self-start md:self-auto px-3 py-1 rounded-full text-xs md:text-sm font-medium ${
            job.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {job.status}
        </span>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full sm:w-auto">
          View Applicants
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded-lg w-full sm:w-auto">
          Edit
        </button>
      </div>

    </div>
  );
}