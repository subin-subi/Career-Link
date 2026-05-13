import { FiUsers, FiUserPlus, FiFileText, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useTheme } from "../../context/ThemeContext";
import Swal from "sweetalert2";
export default function ProfileSidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { theme } = useTheme();



const handleLogout = async () => {
  const result = await Swal.fire({
    title: "Logout?",
    text: "Do you want to logout?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, logout",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    logout();
    navigate("/login");
  }
};
  return (
   <div className="w-full space-y-6 sticky top-28 max-h-[calc(100vh-7rem)] overflow-y-auto">

      {/* Profile Card */}
      <div className={`${theme.cardBg} rounded-2xl ${theme.shadowMd} overflow-hidden`}>

        {/* Top Banner */}
        <div className="h-28 bg-blue-900 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-16">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="profile"
              className={`w-20 h-20 rounded-full border-4 ${theme.border} object-cover`}
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="pt-14 pb-6 px-6 text-left">
          <h2 className={`text-lg font-semibold ${theme.textPrimary}`}>
            Mike Riz
          </h2>
          <p className={`${theme.textSecondary} text-sm`}>
            UI/UX Designer
          </p>
          <p className={`${theme.textSecondary} text-sm`}>
            Kochi, Ernakulam
          </p>
        </div>
      </div>

      {/* Followers Card */}
      <div className={`${theme.cardBg} rounded-2xl ${theme.shadowMd} p-6 space-y-5`}>

        <div className={`flex items-center gap-3 cursor-pointer ${theme.hover}`}>
          <FiUsers size={20} />
          <span className="font-medium">Followers</span>
        </div>

        <div className={`flex items-center gap-3 cursor-pointer ${theme.hover}`}>
          <FiUserPlus size={20} />
          <span className="font-medium">Following</span>
        </div>

        <div className={`flex items-center gap-3 cursor-pointer ${theme.hover}`}>
          <FiFileText size={20} />
          <span className="font-medium">Pages</span>
        </div>

      <div
  onClick={handleLogout}
  className={`flex items-center gap-3 cursor-pointer ${theme.hover}`}
>
  <FiLogOut size={20} />
  <span className="font-medium">Logout</span>
</div>

      </div>

    </div>
  );
}