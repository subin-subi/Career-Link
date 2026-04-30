export default function ProfileHeader({ profile }) {
  return (
    <div className="bg-gray-100 rounded-xl p-4 shadow">
      <div className="flex items-center gap-4">
       <img
  src={profile.image}
  alt="profile"
  className="w-16 h-16 rounded-full"
/>

        <div>
          <h2 className="font-bold text-lg">{profile.name}</h2>
          <p className="text-gray-500">{profile.email}</p>
        </div>
      </div>

      <div className="flex gap-3 mt-4">
        <button className="bg-blue-900 text-white px-4 py-2 rounded-full">
          Edit Profile
        </button>
        <button className="border px-4 py-2 rounded-full">
          Manage Links
        </button>
      </div>
    </div>
  );
}