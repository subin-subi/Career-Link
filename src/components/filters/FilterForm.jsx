export default function JobFilterPage({ filters, setFilters }) {
  const handleChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md border flex flex-col gap-4">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          Filters
        </h3>
        <button
          onClick={() =>
            setFilters({
              search: "",
              location: "",
              experience: "All",
              salary: "All",
              category: "All",
            })
          }
          className="text-xs sm:text-sm text-blue-600 hover:underline"
        >
          Clear
        </button>
      </div>

      {/* 🔍 Keyword */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Keyword</label>
        <input
          type="text"
          placeholder="Job title or company..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 📍 Location */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Location</label>
        <input
          type="text"
          placeholder="Enter location..."
          value={filters.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 💼 Experience */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Experience</label>
        <select
          value={filters.experience}
          onChange={(e) => handleChange("experience", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Fresher">Fresher</option>
          <option value="1-3">1-3 Years</option>
          <option value="3-5">3-5 Years</option>
          <option value="5+">5+ Years</option>
        </select>
      </div>

      {/* 💰 Salary */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Salary</label>
        <select
          value={filters.salary}
          onChange={(e) => handleChange("salary", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="0-3">0 - 3 LPA</option>
          <option value="3-6">3 - 6 LPA</option>
          <option value="6-10">6 - 10 LPA</option>
          <option value="10+">10+ LPA</option>
        </select>
      </div>

      {/* 🎯 Category */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All</option>
          <option value="Software Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

    </div>
  );
}