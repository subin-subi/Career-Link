// src/components/candidate/JobFilters.jsx

export default function JobFilters() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm space-y-6">
      <h3 className="text-lg font-semibold">Filters</h3>

      <input
        type="text"
        placeholder="Search jobs..."
        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div>
        <label className="block text-sm font-medium mb-2">
          Job Type
        </label>
        <select className="w-full border border-gray-300 rounded-lg px-4 py-2">
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Location
        </label>
        <input
          type="text"
          placeholder="Enter location"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Salary Range
        </label>
        <input type="range" min="50000" max="150000" className="w-full" />
        <div className="flex justify-between text-sm text-gray-500">
          <span>50k</span>
          <span>150k</span>
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Apply Filters
      </button>
    </div>
  );
}