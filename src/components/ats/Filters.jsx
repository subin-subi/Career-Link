export default function Filters() {
  return (
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-4">
      
      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search applicants..."
        className="w-full sm:flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* 🎯 Role Filter */}
      <select className="w-full sm:w-auto border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Roles</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>UI/UX Designer</option>
      </select>

      {/* 📊 Status Filter */}
      <select className="w-full sm:w-auto border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option>All Status</option>
        <option>Pending</option>
        <option>Shortlisted</option>
        <option>Rejected</option>
      </select>

    </div>
  );
}