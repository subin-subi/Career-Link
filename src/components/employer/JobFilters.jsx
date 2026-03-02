export default function JobFilters() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      
      <div className="flex flex-col md:flex-row gap-3 md:gap-4">
        
        {/* Search */}
        <input
          placeholder="Search by job title..."
          className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Status Filter */}
        <select
          className="w-full md:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>All Status</option>
          <option>Active</option>
          <option>Closed</option>
        </select>

        {/* Type Filter */}
        <select
          className="w-full md:w-40 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>All Types</option>
          <option>Full-time</option>
          <option>Internship</option>
        </select>

      </div>
    </div>
  );
}