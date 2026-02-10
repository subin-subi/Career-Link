import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  return (
    <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm w-full">
      <FiSearch size={18} className="text-gray-500" />
      <input
        type="text"
        placeholder="Search"
        className="ml-3 w-full outline-none text-black bg-transparent"
      />
    </div>
  );
}
