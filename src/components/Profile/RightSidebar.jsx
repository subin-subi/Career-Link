import React from "react";
import { useTheme } from "../../context/ThemeContext";

export default function RightSidebar() {
  const { theme } = useTheme();

  return (
    <div className="w-full max-w-xs space-y-4 text-sm">

      {/* Messages Card */}
      <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-4 rounded-xl`}>
        <h2 className={`font-semibold text-base mb-3 ${theme.textPrimary}`}>
          Messages
        </h2>

        <div className="space-y-3">

          {/* Message Item */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className={`font-semibold text-xs ${theme.textPrimary}`}>
                Priya Sharma
              </p>
              <p className={`text-[11px] ${theme.textMuted} truncate`}>
                Hey, are you available for a quick call?
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className={`font-semibold text-xs ${theme.textPrimary}`}>
                James Wilson
              </p>
              <p className={`text-[11px] ${theme.textMuted} truncate`}>
                Sent you the design files.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=32"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className={`font-semibold text-xs ${theme.textPrimary}`}>
                Elena Rodriguez
              </p>
              <p className={`text-[11px] ${theme.textMuted} truncate`}>
                Great work on the project!
              </p>
            </div>
          </div>

        </div>

        <button className={`mt-3 text-xs ${theme.textMuted} ${theme.hover}`}>
          Show more
        </button>
      </div>

      {/* News Card */}
      <div className={`${theme.cardBg} ${theme.shadow} ${theme.border} p-4 rounded-xl`}>
        <h2 className={`font-semibold text-base mb-3 ${theme.textPrimary}`}>
          News
        </h2>

        <ul className="space-y-2">

          <li>
            <p className={`font-medium text-xs ${theme.textPrimary}`}>
              Global Tech Summit 2026 announced
            </p>
            <p className={`text-[11px] ${theme.textMuted}`}>
              1h ago • 12,400 readers
            </p>
          </li>

          <li>
            <p className={`font-medium text-xs ${theme.textPrimary}`}>
              Crypto market sees new high
            </p>
            <p className={`text-[11px] ${theme.textMuted}`}>
              4h ago • 8,900 readers
            </p>
          </li>

          <li>
            <p className={`font-medium text-xs ${theme.textPrimary}`}>
              10 Startups watching in 2026
            </p>
            <p className={`text-[11px] ${theme.textMuted}`}>
              6h ago • 34,200 readers
            </p>
          </li>

          <li>
            <p className={`font-medium text-xs ${theme.textPrimary}`}>
              New strict AI laws passed
            </p>
            <p className={`text-[11px] ${theme.textMuted}`}>
              12h ago • 15,100 readers
            </p>
          </li>

          <li>
            <p className={`font-medium text-xs ${theme.textPrimary}`}>
              Design trends for next year
            </p>
            <p className={`text-[11px] ${theme.textMuted}`}>
              1d ago • 22,700 readers
            </p>
          </li>

        </ul>

        <button className={`mt-3 text-xs ${theme.textMuted} ${theme.hover}`}>
          Show more
        </button>
      </div>

    </div>
  );
}