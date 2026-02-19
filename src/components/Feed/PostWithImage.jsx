import {
  FiThumbsUp,
  FiMessageCircle,
  FiSend,
  FiMoreHorizontal,
} from "react-icons/fi";

export default function PostWithImage() {
  return (
    <div className="bg-[#0f172a] text-white max-w-2xl mx-auto mt-10 rounded-2xl shadow-lg border border-gray-800">
      
      {/* Header */}
      <div className="flex items-start justify-between p-5">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h2 className="font-semibold text-lg">Sarah Miller</h2>
            <p className="text-sm text-gray-400">Data Scientist</p>
            <p className="text-xs text-gray-500">8h ago · 🌐</p>
          </div>
        </div>

        <FiMoreHorizontal
          className="text-gray-400 cursor-pointer hover:text-white"
          size={20}
        />
      </div>

      {/* Post Content */}
      <div className="px-5 pb-4 text-gray-300 leading-relaxed">
        <p>
          Thrilled to announce that I have successfully passed the{" "}
          <span className="font-semibold text-white">
            AWS Certified Data Analytics
          </span>{" "}
          exam! ☁️📊
        </p>

        <p className="mt-3">
          It was a tough journey balancing work and study, but totally worth
          it.
        </p>

        <p className="mt-2 text-blue-400">
          #AWS #CloudComputing #CareerGoals
        </p>
      </div>

      {/* Image Section */}
      <div className="px-5 pb-5">
  <img
    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    alt="post"
    className="rounded-2xl w-full h-[350px] object-cover shadow-2xl hover:shadow-blue-500/20 transition duration-300"
  />
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
