import { FiUsers, FiUserPlus, FiFileText } from "react-icons/fi";

export default function ProfileSidebar() {
  return (
    <div className="w-full space-y-6">


      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        
        {/* Top Banner */}
        <div className="h-28 bg-blue-900 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-14 pb-6 px-6 text-left">
          <h2 className="text-lg font-semibold text-gray-800">
            Mike Riz
          </h2>
          <p className="text-gray-500 text-sm">
            UI/UX Designer
          </p>
          <p className="text-gray-500 text-sm">
            Kochi, Ernakulam
          </p>
        </div>
      </div>

      {/* Followers Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 space-y-5">
        
        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FiUsers size={20} />
          <span className="font-medium">Followers</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FiUserPlus size={20} />
          <span className="font-medium">Following</span>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600">
          <FiFileText size={20} />
          <span className="font-medium">Pages</span>
        </div>

      </div>

    </div>
  );
}
