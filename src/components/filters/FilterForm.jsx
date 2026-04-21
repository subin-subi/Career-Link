import { useTheme } from "../../context/ThemeContext";

export default function JobFilterPage({ filters, setFilters }) {
  const { theme } = useTheme();

  const handleChange = (field, value) => {
    setFilters({ ...filters, [field]: value });
  };

  return (
    <div
      className={`${theme.cardBg} ${theme.textPrimary} p-4 sm:p-5 rounded-2xl ${theme.shadowMd} ${theme.border} flex flex-col gap-4`}
    >

      {/* 🔹 Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm sm:text-base font-semibold">
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
          className={`${theme.accentText} hover:underline text-xs sm:text-sm`}
        >
          Clear
        </button>
      </div>

      {/* 🔍 Keyword */}
      <div className="flex flex-col gap-1">
        <label className={`text-xs ${theme.textMuted}`}>Keyword</label>
        <input
          type="text"
          placeholder="Job title or company..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className={`w-full ${theme.border} rounded-lg px-3 py-2 text-sm ${theme.bg} ${theme.textPrimary} focus:ring-2 focus:ring-[#1B365D]`}
        />
      </div>

      {/* 📍 Location */}
      <div className="flex flex-col gap-1">
        <label className={`text-xs ${theme.textMuted}`}>Location</label>
        <input
          type="text"
          placeholder="Enter location..."
          value={filters.location}
          onChange={(e) => handleChange("location", e.target.value)}
          className={`w-full ${theme.border} rounded-lg px-3 py-2 text-sm ${theme.bg} ${theme.textPrimary} focus:ring-2 focus:ring-[#1B365D]`}
        />
      </div>

      {/* 💼 Experience */}
      <div className="flex flex-col gap-1">
        <label className={`text-xs ${theme.textMuted}`}>Experience</label>
        <select
          value={filters.experience}
          onChange={(e) => handleChange("experience", e.target.value)}
          className={`w-full ${theme.border} rounded-lg px-3 py-2 text-sm ${theme.bg} ${theme.textPrimary}`}
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
        <label className={`text-xs ${theme.textMuted}`}>Salary</label>
        <select
          value={filters.salary}
          onChange={(e) => handleChange("salary", e.target.value)}
          className={`w-full ${theme.border} rounded-lg px-3 py-2 text-sm ${theme.bg} ${theme.textPrimary}`}
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
        <label className={`text-xs ${theme.textMuted}`}>Category</label>
        <select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className={`w-full ${theme.border} rounded-lg px-3 py-2 text-sm ${theme.bg} ${theme.textPrimary}`}
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