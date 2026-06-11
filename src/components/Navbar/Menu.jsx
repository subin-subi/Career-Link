import {
  FiHome,
  FiUsers,
  FiBriefcase,
  FiMessageSquare,
  FiSettings,
  FiGrid,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import ProfileDropdown from "./ProfileDropdown";
import NotificationDropdown from "./NotificationDropdown";

export default function Menu() {
  const iconSize = 22;

  const menuStyle =
    "group flex flex-col items-center px-3 py-2 rounded-xl transition-all duration-300 hover:bg-slate-100 hover:text-blue-600";

  return (
    <div className="flex items-center gap-3 text-gray-600">

      {/* Home */}
      <Link to="/home" className={menuStyle}>
        <FiHome
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs mt-1 font-medium">Home</span>
      </Link>

      {/* Network */}
      <Link to="/network" className={menuStyle}>
        <FiUsers
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs mt-1 font-medium">Network</span>
      </Link>

      {/* Jobs */}
      <Link to="/job" className={menuStyle}>
        <FiBriefcase
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs mt-1 font-medium">Jobs</span>
      </Link>

      {/* Messaging */}
      <Link to="/chat" className={menuStyle}>
        <FiMessageSquare
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs mt-1 font-medium">Messages</span>
      </Link>

      {/* Notifications */}
      <NotificationDropdown />

      {/* Settings */}
      <Link to="/settings" className={menuStyle}>
        <FiSettings
          size={iconSize}
          className="transition-transform duration-300 group-hover:rotate-90"
        />
        <span className="text-xs mt-1 font-medium">Settings</span>
      </Link>

      {/* Profile */}
      <ProfileDropdown />

      {/* Divider */}
      <div className="h-10 border-l border-slate-300 mx-2"></div>

      {/* Business */}
      <div
        className="
          group flex flex-col items-center
          px-3 py-2 rounded-xl
          cursor-pointer
          transition-all duration-300
          hover:bg-slate-100
          hover:text-blue-600
        "
      >
        <FiGrid
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <span className="text-xs mt-1 font-medium">
          Business
        </span>
      </div>

      {/* Premium */}
      <Link
        to="/pay"
        className="
          group flex flex-col items-center
          px-3 py-2 rounded-xl
          transition-all duration-300
          hover:bg-amber-50
          hover:text-amber-600
        "
      >
        <FiBriefcase
          size={iconSize}
          className="transition-transform duration-300 group-hover:scale-110"
        />

        <span className="text-xs mt-1 font-semibold">
          Premium
        </span>

        <span className="text-[10px] text-amber-500">
          Upgrade
        </span>
      </Link>
    </div>
  );
}