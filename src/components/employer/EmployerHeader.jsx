import { FiBell } from "react-icons/fi";

export default function EmployerHeader() {
  return (
    <div className="bg-white px-8 py-4 flex justify-between items-center shadow-sm">
      <h2 className="text-xl font-semibold">Employer Dashboard</h2>

      <div className="flex items-center gap-6">
        <FiBell size={20} />
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}