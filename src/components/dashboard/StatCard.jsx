export default function StatCard({ title, value, change }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all">
      <p className="text-gray-500 text-sm">{title}</p>
      <div className="flex justify-between items-end mt-3">
        <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
        <span className="text-sm text-green-600 font-medium">
          {change}
        </span>
      </div>
    </div>
  );
}