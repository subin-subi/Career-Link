export default function StatCard({ data }) {
  return (
    <div className="bg-zinc-800 rounded-2xl p-4 sm:p-6 shadow-md flex justify-between items-start gap-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-gray-400 text-xs sm:text-sm">
          {data.title}
        </p>

        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mt-2 sm:mt-3">
          {data.value}
        </h2>

        <p
          className={`mt-2 sm:mt-3 text-xs sm:text-sm font-medium ${
            data.change.startsWith("+")
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {data.change}{" "}
          <span className="text-gray-500">
            vs last month
          </span>
        </p>
      </div>

      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl bg-slate-700 flex items-center justify-center text-lg sm:text-xl shrink-0">
        {data.icon}
      </div>
    </div>
  );
}