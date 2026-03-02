import { FiSearch, FiBell, FiMenu } from "react-icons/fi";

export default function Topbar({ toggleSidebar }) {
  return (
    <header className="bg-white border-b px-4 md:px-8 py-4 flex items-center justify-between gap-4">
      
      <div className="flex items-center gap-3 flex-1">
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleSidebar}
          className="lg:hidden text-gray-600"
        >
          <FiMenu size={22} />
        </button>

        <div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-lg w-full md:w-80">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <FiBell className="text-gray-600 cursor-pointer" size={20} />

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="w-8 h-8 md:w-9 md:h-9 rounded-full"
          />
          <div className="hidden sm:block text-sm">
            <p className="font-semibold">John Employer</p>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}