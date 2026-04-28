export default function PlanCard({ plan, active }) {
  return (
    <div
      className={`border rounded-xl p-5 cursor-pointer ${
        active ? "border-purple-500" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{plan.name}</h3>
        <p className="font-bold">{plan.price}</p>
      </div>
    </div>
  );
}