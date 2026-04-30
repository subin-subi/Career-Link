export default function InfoCard({ title, value, editable, addable }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow flex justify-between items-center">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{value}</p>
      </div>

      {editable && <button>✏️</button>}
      {addable && <button>➕</button>}
    </div>
  );
}