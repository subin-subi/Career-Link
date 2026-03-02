import { FiMapPin, FiUsers } from "react-icons/fi";

export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex justify-between items-center">

      <div>
        <h4 className="text-lg font-semibold">{job.title}</h4>
        <p className="text-gray-500 flex gap-4 mt-2 text-sm">
          <span className="flex items-center gap-1">
            <FiMapPin /> {job.location}
          </span>
          <span>{job.type}</span>
          <span className="flex items-center gap-1">
            <FiUsers /> {job.applicants} Applicants
          </span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            job.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {job.status}
        </span>

        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          View Applicants
        </button>

        <button className="bg-gray-200 px-4 py-2 rounded-lg">
          Edit
        </button>
      </div>

    </div>
  );
}