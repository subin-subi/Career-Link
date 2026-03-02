export default function ActivityTable() {
  const data = [
    { name: "Arun K", role: "Frontend Dev", status: "Shortlisted" },
    { name: "Maya R", role: "Backend Dev", status: "Interview" },
    { name: "Rahul S", role: "UI/UX Designer", status: "Applied" },
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mt-8">
      <h3 className="text-lg font-semibold mb-6">Recent Applicants</h3>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-3">Name</th>
            <th className="pb-3">Role</th>
            <th className="pb-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b last:border-none">
              <td className="py-4">{item.name}</td>
              <td>{item.role}</td>
              <td className="text-indigo-600 font-medium">
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}