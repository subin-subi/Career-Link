export default function ProfileHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 md:p-6 border-b">
      
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="w-14 h-14 md:w-16 md:h-16 rounded-full"
        />

        <div>
          <h2 className="text-lg md:text-xl font-semibold">
            Sarah Johnson
          </h2>
          <p className="text-gray-500 text-sm">
            Marketing Specialist
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full md:w-auto">
        <button className="flex-1 md:flex-none bg-blue-600 text-white py-2 px-4 rounded-lg">
          Save
        </button>
        <button className="flex-1 md:flex-none bg-gray-200 py-2 px-4 rounded-lg">
          Cancel
        </button>
      </div>
    </div>
  );
}