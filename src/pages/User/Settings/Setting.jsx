import { FiSun, FiMoon, FiCheck } from "react-icons/fi";
import { BsMoonStars } from "react-icons/bs"; // 🌌 new icon
import Navbar from "../../../components/Navbar/Navbar";
import { useTheme } from "../../../context/ThemeContext";

export default function Settings() {
  const { currentTheme, changeTheme, theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textPrimary}`}>
      <Navbar />

      <div className="px-6 py-10 pt-24">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold">Settings</h1>
          <p className={`${theme.textSecondary} mt-2`}>
            Manage your display preferences and account settings.
          </p>

          <div
            className={`mt-10 ${theme.cardBg} ${theme.border}
            rounded-2xl p-8 ${theme.shadowMd}`}
          >
            <div className="mb-8">
              <h2 className="text-xl font-semibold">Display</h2>
              <p className={`${theme.textSecondary} mt-1`}>
                Choose how app looks on your device.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">

              {/* Light */}
              <div
                onClick={() => changeTheme("light")}
                className={`relative cursor-pointer border rounded-xl p-6 flex items-center gap-4
                ${currentTheme === "light"
                    ? "border-blue-500 bg-blue-500/10"
                    : theme.border
                  }`}
              >
                <FiSun size={20} />
                <div>
                  <h3>Light Mode</h3>
                  <p className="text-sm">Classic theme</p>
                </div>

                {currentTheme === "light" && (
                  <FiCheck className="absolute right-4 text-blue-500" />
                )}
              </div>

              {/* Dark (BLACK) */}
              <div
                onClick={() => changeTheme("dark")}
                className={`relative cursor-pointer border rounded-xl p-6 flex items-center gap-4
                ${currentTheme === "dark"
                    ? "border-blue-500 bg-blue-500/10"
                    : theme.border
                  }`}
              >
                <FiMoon size={20} />
                <div>
                  <h3>Dark Mode</h3>
                  <p className="text-sm">Pure black theme</p>
                </div>

                {currentTheme === "dark" && (
                  <FiCheck className="absolute right-4 text-blue-500" />
                )}
              </div>

              {/* Midnight */}
              <div
                onClick={() => changeTheme("midnight")}
                className={`relative cursor-pointer border rounded-xl p-6 flex items-center gap-4
                ${currentTheme === "midnight"
                    ? "border-blue-500 bg-blue-500/10"
                    : theme.border
                  }`}
              >
                <BsMoonStars size={20} />
                <div>
                  <h3>Midnight</h3>
                  <p className="text-sm">Cool dark blue theme</p>
                </div>

                {currentTheme === "midnight" && (
                  <FiCheck className="absolute right-4 text-blue-500" />
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}