export default function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-4 bg-gray-100 rounded-xl shadow p-4 text-center">
      {stats.map((item, index) => (
        <div key={index}>
          <h3 className="font-bold text-lg">{item.count}</h3>
          <p className="text-sm text-gray-500">{item.label}</p>
        </div>
      ))}
    </div>
  );
}