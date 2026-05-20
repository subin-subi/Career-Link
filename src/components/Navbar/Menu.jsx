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

  const iconSize = 24;

  return (
    <div className="flex items-center gap-8 text-sm">

      {/* Home */}
      <Link
        to="/home"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiHome size={iconSize} />

        <span className="text-xs mt-1">
          Home
        </span>
      </Link>

      {/* Network */}
      <Link
        to="/network"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiUsers size={iconSize} />

        <span className="text-xs mt-1">
          My Network
        </span>
      </Link>

      {/* Jobs */}
      <Link
        to="/job"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiBriefcase size={iconSize} />

        <span className="text-xs mt-1">
          Jobs
        </span>
      </Link>

      {/* Messaging */}
      <Link
        to="/chat"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiMessageSquare size={iconSize} />

        <span className="text-xs mt-1">
          Messaging
        </span>
      </Link>

      {/* Notifications */}
      <NotificationDropdown />

      {/* Settings */}
      <Link
        to="/settings"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiSettings size={iconSize} />

        <span className="text-xs mt-1">
          Settings
        </span>
      </Link>

      {/* Profile */}
      <ProfileDropdown />

      {/* Divider */}
      <div className="h-8 border-l border-gray-400"></div>

      {/* Business */}
      <div
        className="
        flex flex-col items-center
        hover:text-gray-300
        cursor-pointer
        "
      >
        <FiGrid size={iconSize} />

        <span className="text-xs mt-1">
          For Business
        </span>
      </div>

      {/* Premium */}
      <Link
        to="/pay"
        className="flex flex-col items-center hover:text-gray-300"
      >
        <FiBriefcase size={iconSize} />

        <span className="text-xs mt-1">
          Try Premium
        </span>
      </Link>
    </div>
  );
}