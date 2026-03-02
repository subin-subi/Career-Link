import { FiBell, FiMenu } from "react-icons/fi";

export default function EmployerHeader({ setOpenSidebar }) {
  return (
    <header className="bg-white w-full shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        
        {/* Left Section */}
        <div className="flex items-center gap-3 md:gap-4">
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpenSidebar(true)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FiMenu size={22} />
          </button>

          <h2 className="text-base md:text-xl font-semibold truncate">
            Employer Dashboard
          </h2>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6">
          <button className="relative p-2 rounded-lg hover:bg-gray-100 transition">
            <FiBell size={20} />
            {/* Notification Dot */}
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="profile"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}