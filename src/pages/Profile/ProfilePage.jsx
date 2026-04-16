import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import ProfileCenterPage from "./Center/ProfileCenterPage";
import RightSide from "./Right/RightSide";
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";
import { useTheme } from "../../context/ThemeContext";

export default function ProfilePage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.textPrimary} pt-28 transition-all duration-300`}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto flex gap-6 items-start px-4">

        {/* LEFT SIDEBAR */}
        <div className="hidden lg:block w-72">
          <div className="sticky top-28">
            <ProfileSidebar />
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="flex-1 max-w-4xl">
          <ProfileCenterPage />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="hidden lg:block w-80">
          <div className="sticky top-28">
            <RightSide />
          </div>
        </div>

      </div>

      <BottomNav />
    </div>
  );
} 