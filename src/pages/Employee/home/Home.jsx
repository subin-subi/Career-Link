import Navbar from "../../../components/Navbar/Navbar";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import FeedPage from "../../../components/Feed/FeedPage";
import RightSidebar from "../../../components/Profile/RightSidebar";
import BottomNav from "../../JobSearch/BottomNav";
import { useTheme } from "../../../context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.textPrimary} pt-30 transition-all duration-300`}>
      
      {/* Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 px-4">

        {/* Sidebar (Desktop Only) */}
        <div className="hidden lg:block w-72">
          <div className="sticky top-28">
            <ProfileSidebar />
          </div>
        </div>

        {/* Feed */}
        <div className="flex-1 max-w-2xl w-full">
          <FeedPage />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-80">
          <div className="sticky top-28">
            <RightSidebar />
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}