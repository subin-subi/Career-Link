export default function StatsCard({ title, value, icon, color }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl shadow-sm border hover:shadow-md transition">
      
      {/* Icon */}
      <div className={`p-2 sm:p-3 rounded-lg ${color} flex items-center justify-center`}>
        <div className="text-lg sm:text-xl">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <p className="text-xs sm:text-sm text-gray-500">
          {title}
        </p>
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {value}
        </h2>
      </div>

    </div>
  );
}