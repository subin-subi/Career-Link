import { FiSearch, FiMenu, FiUser, FiMic } from "react-icons/fi";

export default function MobileMenu({ open, setOpen }) {
  return (
    <div className="flex md:hidden items-center justify-between">

      {/* Left: Profile */}
      <FiUser size={24} />

      {/* Center: Search */}
      <div className="flex items-center bg-white rounded-full px-3 py-2 flex-1 mx-3">
        <FiSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="ml-2 w-full outline-none text-black text-sm bg-transparent"
        />
        <FiMic className="text-gray-500" />
      </div>

      {/* Right: Hamburger */}
      <FiMenu
        size={26}
        className="cursor-pointer"
        onClick={() => setOpen(!open)}
      />
    </div>
  );
}
