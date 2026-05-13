import {
  FiHome,
  FiUsers,
  FiBell,
  FiBriefcase,
  FiUser,
  FiGrid,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileDropdown from "./ProfileDropdown";


export default function Menu() {
  const iconSize = 24;



  return (
    <div className="flex items-center gap-8 text-sm">

      <Link to="/home" className="flex flex-col items-center hover:text-gray-300">
        <FiHome size={iconSize} />
        <span className="text-xs mt-1">Home</span>
      </Link>

      <Link to="/network" className="flex flex-col items-center hover:text-gray-300">
        <FiUsers size={iconSize} />
        <span className="text-xs mt-1">My Network</span>
      </Link>

      <Link to="/job" className="flex flex-col items-center hover:text-gray-300">
        <FiBriefcase size={iconSize} />
        <span className="text-xs mt-1">Jobs</span>
      </Link>

      <Link to="/chat" className="flex flex-col items-center hover:text-gray-300">
        <FiMessageSquare size={iconSize} />
        <span className="text-xs mt-1">Messaging</span>
      </Link>

      <Link to="/notifications" className="flex flex-col items-center hover:text-gray-300">
        <FiBell size={iconSize} />
        <span className="text-xs mt-1">Notifications</span>
      </Link>

      <Link to="/settings" className="flex flex-col items-center hover:text-gray-300">
        <FiSettings size={iconSize} />
        <span className="text-xs mt-1">Settings</span>
      </Link>

      {/* ✅ Profile Dropdown */}
       <ProfileDropdown/>


      <div className="h-8 border-l border-gray-400"></div>

      <div className="flex flex-col items-center hover:text-gray-300 cursor-pointer">
        <FiGrid size={iconSize} />
        <span className="text-xs mt-1">For Business</span>
      </div>

      <Link to="/pay" className="flex flex-col items-center hover:text-gray-300">
        <FiBriefcase size={iconSize} />
        <span className="text-xs mt-1">Try Premium</span>
      </Link>

    </div>
  );
}