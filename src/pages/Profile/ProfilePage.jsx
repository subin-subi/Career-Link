
import ProfileSidebar from "../../components/Profile/ProfileSidebar";
import ProfileCenterPage from "./Center/ProfileCenterPage";
import RightSide from "./Right/RightSide";
import Navbar from "../../components/Navbar/Navbar"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-28">
      <Navbar/>
      <div className="max-w-7xl mx-auto flex gap-6 items-start">

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

        {/* RIGHT SIDEBAR (optional) */}
        <div className="hidden lg:block w-80">
          <div className="sticky top-28">
            < RightSide/>
          </div>
        </div>

      </div>
    </div>
  );
}
