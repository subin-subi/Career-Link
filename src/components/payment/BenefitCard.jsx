export default function BenefitCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="bg-purple-600 text-white p-3 rounded-xl">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm">{desc}</p>
      </div>
    </div>
  );
}