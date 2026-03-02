export default function JobFilters() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex gap-4">
      <input
        placeholder="Search by job title..."
        className="input flex-1"
      />

      <select className="input w-40">
        <option>All Status</option>
        <option>Active</option>
        <option>Closed</option>
      </select>

      <select className="input w-40">
        <option>All Types</option>
        <option>Full-time</option>
        <option>Internship</option>
      </select>
    </div>
  );
}