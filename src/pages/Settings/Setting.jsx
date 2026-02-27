import { useContext } from "react";
import { FiSun, FiMoon, FiCheck } from "react-icons/fi";
import Navbar from "../../components/Navbar/Navbar";
import { ThemeContext } from "../../context/ThemeContext";


export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="px-6 py-10 pt-24">
        <div className="max-w-4xl mx-auto">

          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your display preferences and account settings.
          </p>

          <div className="mt-10 bg-gray-100 dark:bg-[#111827] 
                          border border-gray-300 dark:border-gray-800 
                          rounded-2xl p-8 shadow-lg">

            <div className="mb-8">
              <h2 className="text-xl font-semibold">Display</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                Choose how Zecpath looks on your device.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">

              {/* Light Mode */}
              <div
                onClick={() => setTheme("light")}
                className={`relative cursor-pointer border rounded-xl p-6 flex items-center gap-4 transition-all
                ${theme === "light"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-300 dark:border-gray-700"
                  }`}
              >
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full">
                  <FiSun size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Light Mode</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Default Classic Theme
                  </p>
                </div>

                {theme === "light" && (
                  <FiCheck className="absolute right-4 text-blue-500" />
                )}
              </div>

              {/* Dark Mode */}
              <div
                onClick={() => setTheme("dark")}
                className={`relative cursor-pointer border rounded-xl p-6 flex items-center gap-4 transition-all
                ${theme === "dark"
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-300 dark:border-gray-700"
                  }`}
              >
                <div className="bg-gray-200 dark:bg-gray-800 p-4 rounded-full">
                  <FiMoon size={20} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg">Dark Mode</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Easier on the eyes
                  </p>
                </div>

                {theme === "dark" && (
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