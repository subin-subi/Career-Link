export default function RecentApplicationsTable() {
  return (
    <div className="bg-zinc-800 rounded-2xl overflow-hidden shadow-lg">
      
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-zinc-700">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
          Recent Applications
        </h2>
        <p className="text-gray-400 mt-2 text-sm sm:text-base">
          Latest candidates who applied for your jobs
        </p>
      </div>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead className="bg-black text-gray-400 text-xs sm:text-sm">
            <tr>
              <th className="p-3 sm:p-4 text-left">CANDIDATE</th>
              <th className="p-3 sm:p-4 text-left">POSITION</th>
              <th className="p-3 sm:p-4 text-left">APPLIED DATE</th>
              <th className="p-3 sm:p-4 text-left">STATUS</th>
              <th className="p-3 sm:p-4 text-left">ACTIONS</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-t border-zinc-700">
              <td className="p-3 sm:p-4 font-semibold">John Doe</td>
              <td className="p-3 sm:p-4">Frontend Developer</td>
              <td className="p-3 sm:p-4 text-gray-400">2026-02-08</td>
              <td className="p-3 sm:p-4">
                <span className="bg-yellow-600/30 text-yellow-400 px-3 py-1 rounded-full text-xs sm:text-sm">
                  Under Review
                </span>
              </td>
              <td className="p-3 sm:p-4 text-blue-400 font-medium cursor-pointer whitespace-nowrap">
                View Details
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}