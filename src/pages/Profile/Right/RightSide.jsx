import { useTheme } from "../../../context/ThemeContext";

export default function RightSide() {
  const { theme } = useTheme();

  return (
    <div className="hidden lg:block w-80 space-y-6">

      {/* Messages */}
      <div className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} p-5 rounded-xl`}>
        <h3 className={`font-semibold mb-4 ${theme.textPrimary}`}>
          Messages
        </h3>

        <div className="space-y-3">
          {["Zemira lopez","Megna Fox","Zemira lopez"].map((name,i)=>(
            <div key={i} className="flex items-center gap-3">
              <img
                src={`https://i.pravatar.cc/40?img=${i+30}`}
                className="w-9 h-9 rounded-full"
                alt=""
              />
              <p className={`text-sm ${theme.textPrimary}`}>
                {name}
              </p>
            </div>
          ))}
        </div>

        <button className={`text-sm ${theme.primaryText} mt-3 ${theme.hover}`}>
          Show more
        </button>
      </div>

      {/* News */}
      <div className={`${theme.cardBg} ${theme.shadowMd} ${theme.border} p-5 rounded-xl`}>
        <h3 className={`font-semibold mb-4 ${theme.textPrimary}`}>
          News
        </h3>

        <ul className="space-y-3 text-sm">
          <li>
            <p className={theme.textPrimary}>
              Breakthrough in solar battery technology
            </p>
            <p className={`text-xs ${theme.textMuted}`}>
              2h ago • 112,540 readers
            </p>
          </li>

          <li>
            <p className={theme.textPrimary}>
              Neuralink achieves wireless brain-texting
            </p>
            <p className={`text-xs ${theme.textMuted}`}>
              9h ago • 32,800 readers
            </p>
          </li>

          <li>
            <p className={theme.textPrimary}>
              Global oil prices fall amid green energy shift
            </p>
            <p className={`text-xs ${theme.textMuted}`}>
              5h ago • 10,270 readers
            </p>
          </li>
        </ul>

        <button className={`text-sm ${theme.primaryText} mt-3 ${theme.hover}`}>
          Show more
        </button>
      </div>

    </div>
  );
}