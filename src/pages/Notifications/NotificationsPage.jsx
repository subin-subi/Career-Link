import { useTheme } from "../../context/ThemeContext";
import { ChevronRight } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import BottomNav from "../JobSearch/BottomNav";
export default function NotificationCenter() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textPrimary}`}>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto pt-26 flex gap-6 px-4">

        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block w-72">
          <div className="sticky top-24">
            <ProfileSidebar />
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 max-w-2xl w-full">

          <div
            className={`${theme.cardBg} ${theme.border} ${theme.shadowMd} rounded-xl overflow-hidden`}
          >

            {/* Header */}
            <div className={`px-6 py-4 border-b ${theme.border}`}>
              <h2 className="text-lg font-semibold">
                Notification
              </h2>
            </div>

            {/* Item 1 */}
            <div
              className={`flex items-center justify-between px-6 py-4 cursor-pointer ${theme.hover}`}
            >
              <span className={theme.textSecondary}>
                Email notification
              </span>
              <ChevronRight size={18} className={theme.textMuted} />
            </div>

            {/* Divider */}
            <div className={theme.border}></div>

            {/* Item 2 */}
            <div
              className={`flex items-center justify-between px-6 py-4 cursor-pointer ${theme.hover}`}
            >
              <span className={theme.textSecondary}>
                In-app notification
              </span>
              <ChevronRight size={18} className={theme.textMuted} />
            </div>

          </div>
        </div>

      </div>
          <BottomNav />
    </div>
  );
}