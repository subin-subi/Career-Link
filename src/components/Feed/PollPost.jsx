import React from "react";
import { FiMoreHorizontal, FiThumbsUp, FiMessageSquare, FiSend } from "react-icons/fi";

export default function PollPost() {
  return (
    <div className="bg-white rounded-xl shadow p-5 w-full">

      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">David Chen</h3>
            <p className="text-sm text-gray-500">
              Frontend Lead @ StartupFlow
            </p>
            <p className="text-xs text-gray-400">4h ago • 🌍</p>
          </div>
        </div>

        <FiMoreHorizontal className="text-gray-500 cursor-pointer" size={20} />
      </div>

      {/* Question */}
      <p className="mt-4 text-gray-800 font-medium">
        Which CSS framework do you prefer for large scale applications in 2024?
      </p>

      {/* Poll Options */}
      <div className="mt-4 space-y-3">

        {/* Option 1 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-blue-200 w-[68%]"></div>
          <div className="relative flex justify-between px-4 py-3 text-sm font-medium">
            <span>Tailwind CSS</span>
            <span>68%</span>
          </div>
        </div>

        {/* Option 2 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gray-300 w-[12%]"></div>
          <div className="relative flex justify-between px-4 py-3 text-sm font-medium">
            <span>Bootstrap 5</span>
            <span>12%</span>
          </div>
        </div>

        {/* Option 3 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gray-300 w-[15%]"></div>
          <div className="relative flex justify-between px-4 py-3 text-sm font-medium">
            <span>Material UI</span>
            <span>15%</span>
          </div>
        </div>

        {/* Option 4 */}
        <div className="relative bg-gray-100 rounded-lg overflow-hidden">
          <div className="absolute top-0 left-0 h-full bg-gray-300 w-[5%]"></div>
          <div className="relative flex justify-between px-4 py-3 text-sm font-medium">
            <span>Vanilla CSS / Modules</span>
            <span>5%</span>
          </div>
        </div>

      </div>

      {/* Footer Info */}
      <p className="mt-4 text-sm text-gray-500">
        2,408 votes • 1 day left
      </p>

      {/* Actions */}
      <div className="flex justify-around items-center mt-4 pt-3 border-t text-gray-600 text-sm">

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <FiThumbsUp />
          <span>Like 412</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <FiMessageSquare />
          <span>Comment 89</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600">
          <FiSend />
          <span>Send</span>
        </div>

      </div>

    </div>
  );
}
