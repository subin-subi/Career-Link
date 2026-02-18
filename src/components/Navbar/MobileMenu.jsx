import { FiSearch, FiUser, FiMic } from "react-icons/fi";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

export default function MobileMenu() {
  return (
    <div className="flex md:hidden items-center justify-between">

      {/* Left: Profile */}
      {/* <FiUser size={24} /> */}
      <ProfileMenu/>

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

      {/* Right: Chat Icon */}
      <Link to="/chat">
        <MessageCircle size={26} className="cursor-pointer text-white" />
      </Link>

    </div>
  );
}
