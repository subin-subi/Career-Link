import { useTheme } from "../../../context/ThemeContext";

export default function InfoCard({
  title,
  value,
  editable,
  addable,
}) {

  const { theme } = useTheme();

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.textPrimary}
        rounded-2xl
        p-5
        shadow-lg
        flex
        justify-between
        items-center
        transition-all
        duration-300
        hover:shadow-xl
      `}
    >

      {/* Content */}
      <div>
        <h3 className="font-semibold text-lg">
          {title}
        </h3>

        <p
          className={`
            text-sm
            mt-1
            ${theme.textSecondary}
          `}
        >
          {value}
        </p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2">

        {editable && (
          <button
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-blue-100
              hover:bg-blue-200
              text-lg
              transition
            "
          >
            ✏️
          </button>
        )}

        {addable && (
          <button
            className="
              w-10
              h-10
              flex
              items-center
              justify-center
              rounded-full
              bg-green-100
              hover:bg-green-200
              text-lg
              transition
            "
          >
            ➕
          </button>
        )}

      </div>
    </div>
  );
}