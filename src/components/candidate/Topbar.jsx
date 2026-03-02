import { FiSearch, FiBell, FiMenu } from "react-icons/fi";

export default function Topbar({ setIsOpen }) {
  return (
    <header className="bg-white border-b px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      
      {/* Left Section */}
      <div className="flex items-center gap-3">
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-gray-700"
        >
          <FiMenu size={22} />
        </button>

        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
          Dashboard
        </h1>
      </div>

      {/* Search (Hidden on Small Screens) */}
      <div className="hidden md:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg w-72 lg:w-80">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search jobs..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4 sm:gap-6">
        <FiBell className="text-gray-600 cursor-pointer" size={20} />

        <div className="flex items-center gap-2 sm:gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
          />

          {/* Hide text on very small screens */}
          <div className="hidden sm:block text-sm">
            <p className="font-semibold">Subin</p>
            <p className="text-gray-500 text-xs">Candidate</p>
          </div>
        </div>
      </div>
    </header>
  );
}