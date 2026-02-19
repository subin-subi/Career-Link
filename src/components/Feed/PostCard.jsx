import { FiThumbsUp, FiMessageCircle, FiSend, FiMoreHorizontal } from "react-icons/fi";

export default function PostCard() {
  return (
    <div className="bg-[#0f172a] text-white max-w-2xl mx-auto mt-10 rounded-2xl shadow-lg border border-gray-800">
      
      {/* Header */}
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-lg">Zemira Lopez</h2>
            <p className="text-sm text-gray-400">UI/UX Designer</p>
            <p className="text-xs text-gray-500">6h ago · 🌐</p>
          </div>
        </div>

        <FiMoreHorizontal className="text-gray-400 cursor-pointer" size={20} />
      </div>

      {/* Post Content */}
      <div className="px-5 pb-4">
        <h3 className="text-lg font-medium mb-2">
          "5 Simple UX Tips I Wish I Knew When Starting Out"
        </h3>
        <p className="text-gray-300">
          Tip #4: <span className="font-semibold">Borders.</span> Too many
          boundaries create visual noise. Use whitespace instead! 🎨✨
        </p>
      </div>

      {/* Image Section */}
      <div className="px-5 pb-5">
        <div className="bg-[#1e293b] rounded-xl p-6 border border-gray-700">
          <h4 className="text-center text-blue-400 text-xl font-semibold mb-6">
            Borders vs Whitespace
          </h4>

          <div className="grid grid-cols-2 gap-6">
            {/* Good Example */}
            <div className="bg-[#0f172a] p-4 rounded-lg relative border border-gray-600">
              <div className="space-y-2">
                <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                <div className="h-2 bg-gray-600 rounded w-full"></div>
                <div className="h-2 bg-gray-600 rounded w-5/6"></div>
              </div>

              <div className="absolute -top-3 -right-3 bg-green-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                ✓
              </div>
            </div>

            {/* Bad Example */}
            <div className="bg-[#0f172a] p-4 rounded-lg relative border border-gray-500">
              <div className="space-y-2 border border-gray-500 p-3">
                <div className="h-2 bg-gray-600 rounded w-2/3"></div>
                <div className="h-2 bg-gray-600 rounded w-full"></div>
                <div className="h-2 bg-gray-600 rounded w-5/6"></div>
              </div>

              <div className="absolute -top-3 -right-3 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                ✕
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-800 text-gray-400 text-sm">
        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FiThumbsUp size={18} />
          <span>Like 482</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FiMessageCircle size={18} />
          <span>Comment 94</span>
        </div>

        <div className="flex items-center gap-2 cursor-pointer hover:text-blue-400">
          <FiSend size={18} />
          <span>Send</span>
        </div>
      </div>
    </div>
  );
}
