export default function ATSHeader() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
      
      {/* Title Section */}
      <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
          ATS Dashboard
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Manage applications and hiring process
        </p>
      </div>

      {/* Optional Actions */}
      <div className="flex gap-2">
        <button className="text-xs sm:text-sm px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          + Add Job
        </button>
      </div>

    </div>
  );
}