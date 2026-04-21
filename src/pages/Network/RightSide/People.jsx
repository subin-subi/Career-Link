import { useTheme } from "../../../context/ThemeContext";

export default function People() {
  const { theme } = useTheme();

  const users = [
    { id: 1, name: "Ananya Rao", role: "Frontend Developer" },
    { id: 2, name: "Rahul Mehta", role: "UI/UX Designer" },
    { id: 3, name: "Sneha Kapoor", role: "Product Manager" },
  ];

  return (
    <div className={`${theme.cardBg} rounded-2xl ${theme.shadow} p-6 ${theme.border}`}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">
          People you may know
        </h3>
        <button className={`text-sm font-medium ${theme.textMuted} ${theme.hover}`}>
          Show all
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {users.map((user, i) => (
          <div
            key={user.id}
            className={`group ${theme.cardBg} ${theme.border} rounded-2xl overflow-hidden ${theme.shadow} hover:${theme.shadowMd} transition duration-300`}
          >
            {/* Cover */}
            <div className="h-16 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

            {/* Profile */}
            <div className="relative px-4 pb-4 text-center">
              <img
                src={`https://i.pravatar.cc/100?img=${i + 30}`}
                alt=""
                className={`w-20 h-20 rounded-full border-4 ${theme.border} -mt-10 mx-auto object-cover`}
              />

              <h4 className={`mt-2 font-semibold text-sm ${theme.textPrimary}`}>
                {user.name}
              </h4>

              <p className={`text-xs ${theme.textSecondary}`}>
                {user.role}
              </p>

              <p className={`text-[11px] ${theme.textMuted} mt-1`}>
                5 mutual connections
              </p>

              {/* Button */}
              <button
                className={`mt-3 w-full border ${theme.primaryBorder} ${theme.primaryText} text-sm font-medium py-1.5 rounded-full ${theme.primaryHover} hover:text-white transition duration-200`}
              >
                Connect
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
