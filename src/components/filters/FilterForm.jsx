export default function JobFilterPage({ filters, setFilters }) {
  return (
    <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-md border flex flex-col gap-4">

      {/* 🔹 Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800">
          Filters
        </h3>
        <button
          onClick={() =>
            setFilters({ search: "", category: "All" })
          }
          className="text-xs sm:text-sm text-blue-600 hover:underline"
        >
          Clear
        </button>
      </div>

      {/* 🔍 Search */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Search</label>
        <div className="relative">
          <input
            type="text"
            placeholder="Job title or company..."
            value={filters.search}
            onChange={(e) =>
              setFilters({ ...filters, search: e.target.value })
            }
            className="w-full border rounded-lg px-3 py-2 pl-9 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 text-sm">
            🔍
          </span>
        </div>
      </div>

      {/* 🎯 Category */}
      <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-500">Category</label>
        <select
          value={filters.category}
          onChange={(e) =>
            setFilters({ ...filters, category: e.target.value })
          }
          className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="All">All Categories</option>
          <option value="Development">Development</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* 📊 Quick Filters (Optional UI boost) */}
      <div className="flex flex-wrap gap-2">
        {["Software Development", "Design", "Marketing"].map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setFilters({ ...filters, category: cat })
            }
            className={`text-xs px-3 py-1 rounded-full border transition ${
              filters.category === cat
                ? "bg-blue-600 text-white border-blue-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

    </div>
  );
}