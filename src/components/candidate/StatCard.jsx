export default function StatCard({ title, value, change }) {
  const isPositive = change?.includes("+");

  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-200">
      
      <p className="text-gray-500 text-xs sm:text-sm">{title}</p>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-3 gap-2">
        
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
          {value}
        </h3>

        <span
          className={`text-xs sm:text-sm font-medium ${
            isPositive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>
    </div>
  );
}