import React from "react";


export default function ProfileCenterPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">
 
      {/* CENTER SECTION */}
      <div className="mx-auto w-full max-w-5xl space-y-6">



        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="w-20 h-20 rounded-full"
              alt=""
            />

            <div>
              <h2 className="text-lg font-semibold">Azlan Muhammed</h2>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-xs text-gray-400">Palakkad</p>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="bg-blue-900 text-white px-6 py-2 rounded-full">
              + Follow
            </button>
            <button className="border px-6 py-2 rounded-full">
              Message
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow p-6 flex justify-between text-center">
          <div>
            <p className="text-purple-600 font-semibold text-lg">0</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-green-600 font-semibold text-lg">0</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
          <div>
            <p className="text-blue-600 font-semibold text-lg">0</p>
            <p className="text-sm text-gray-500">Following pages</p>
          </div>
          <div>
            <p className="text-orange-600 font-semibold text-lg">3</p>
            <p className="text-sm text-gray-500">Viewers</p>
          </div>
        </div>

        {/* About */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="text-sm text-gray-500">No bio</p>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Activity</h3>
          <p className="text-sm text-gray-500">No activities</p>
        </div>

        {/* Education */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="font-semibold mb-2">Education</h3>
          <p className="font-medium">
            St: Aloysius College Mangalore - Mangalore
          </p>
          <p className="text-sm text-gray-500">Computer Engineering</p>
          <p className="text-sm text-gray-400">2021–2025</p>
        </div>

      </div>

   



    </div>
  );
}
