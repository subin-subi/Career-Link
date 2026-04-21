import React from "react";
import { useTheme } from "../../../context/ThemeContext";

export default function ProfileCenterPage() {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">

      <div className="mx-auto w-full max-w-5xl space-y-6">

        {/* Profile Header */}
        <div className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} p-6 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between`}>
          
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="w-20 h-20 rounded-full"
              alt=""
            />

            <div>
              <h2 className={`text-lg font-semibold ${theme.textPrimary}`}>
                Azlan Muhammed
              </h2>
              <p className={`text-sm ${theme.textSecondary}`}>
                UI/UX Designer
              </p>
              <p className={`text-xs ${theme.textMuted}`}>
                Palakkad
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-4 md:mt-0">
            <button className={`${theme.primary} text-white px-6 py-2 rounded-full ${theme.primaryHover}`}>
              + Follow
            </button>

            <button className={`border ${theme.border} px-6 py-2 rounded-full ${theme.textPrimary}`}>
              Message
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-6 rounded-xl flex justify-between text-center`}>
          
          <div>
            <p className="text-purple-600 font-semibold text-lg">0</p>
            <p className={`${theme.textMuted} text-sm`}>Followers</p>
          </div>

          <div>
            <p className="text-green-600 font-semibold text-lg">0</p>
            <p className={`${theme.textMuted} text-sm`}>Following</p>
          </div>

          <div>
            <p className="text-blue-600 font-semibold text-lg">0</p>
            <p className={`${theme.textMuted} text-sm`}>Following pages</p>
          </div>

          <div>
            <p className="text-orange-600 font-semibold text-lg">3</p>
            <p className={`${theme.textMuted} text-sm`}>Viewers</p>
          </div>
        </div>

        {/* About */}
        <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-6 rounded-xl`}>
          <h3 className={`font-semibold mb-2 ${theme.textPrimary}`}>
            About
          </h3>
          <p className={`text-sm ${theme.textMuted}`}>
            No bio
          </p>
        </div>

        {/* Activity */}
        <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-6 rounded-xl`}>
          <h3 className={`font-semibold mb-2 ${theme.textPrimary}`}>
            Activity
          </h3>
          <p className={`text-sm ${theme.textMuted}`}>
            No activities
          </p>
        </div>

        {/* Education */}
        <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-6 rounded-xl`}>
          <h3 className={`font-semibold mb-2 ${theme.textPrimary}`}>
            Education
          </h3>

          <p className={`font-medium ${theme.textPrimary}`}>
            St: Aloysius College Mangalore - Mangalore
          </p>

          <p className={`text-sm ${theme.textSecondary}`}>
            Computer Engineering
          </p>

          <p className={`text-sm ${theme.textMuted}`}>
            2021–2025
          </p>
        </div>

      </div>
    </div>
  );
}