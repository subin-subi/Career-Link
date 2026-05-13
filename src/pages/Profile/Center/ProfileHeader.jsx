import { useTheme } from "../../../context/ThemeContext";

export default function ProfileHeader({ profile }) {

  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.textPrimary}
        rounded-2xl
        p-4
        shadow-lg
        transition-all
        duration-300
      `}
    >

      {/* Profile Section */}
      <div className="flex items-center gap-4">

        <img
          src={profile.image}
          alt="profile"
          className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
        />

        <div>
          <h2 className="font-bold text-lg">
            {profile.name}
          </h2>

          <p className={theme.textSecondary}>
            {profile.email}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 mt-5">

        <button
          className="
            bg-blue-900
            hover:bg-blue-800
            text-white
            px-5
            py-2
            rounded-full
            transition
          "
        >
          Edit Profile
        </button>

        <button
          className={`
            border
            px-5
            py-2
            rounded-full
            transition
            hover:bg-gray-200
            dark:hover:bg-gray-700
          `}
        >
          Manage Links
        </button>

      </div>
    </div>
  );
}