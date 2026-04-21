import {
  FiUsers,
  FiUser,
  FiCalendar,
  FiFileText,
  FiLayers,
} from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";

export default function LeftSide() {
  const { theme } = useTheme();

  return (
    <div className={`${theme.cardBg} rounded-xl ${theme.shadowMd} ${theme.border}`}>
      
      <h3 className={`font-semibold text-lg p-4 border-b ${theme.border}`}>
        Manage my network
      </h3>

      <div className={`space-y-3 p-4 ${theme.textSecondary}`}>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiUsers />
            <span>Connections</span>
          </div>
          <span className={`text-sm ${theme.textMuted}`}>1,188</span>
        </div>

        <div className="flex items-center gap-3">
          <FiUser />
          <span>Following & followers</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiLayers />
            <span>Groups</span>
          </div>
          <span className={`text-sm ${theme.textMuted}`}>14</span>
        </div>

        <div className="flex items-center gap-3">
          <FiCalendar />
          <span>Events</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiFileText />
            <span>Pages</span>
          </div>
          <span className={`text-sm ${theme.textMuted}`}>36</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <FiFileText />
            <span>Newsletters</span>
          </div>
          <span className={`text-sm ${theme.textMuted}`}>19</span>
        </div>

      </div>
    </div>
  );
}