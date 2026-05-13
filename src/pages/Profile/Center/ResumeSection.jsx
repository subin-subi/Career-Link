import { useState } from "react";
import ResumeUpload from "../../../components/Profile/ResumeUpload";
import { useTheme } from "../../../context/ThemeContext";

export default function ResumeSection() {
  const [open, setOpen] = useState(false);

  const { theme } = useTheme();

  return (
    <>
      {/* Resume Card */}
      <div
        className={`
          ${theme.cardBg}
          ${theme.textPrimary}
          rounded-2xl
          p-5
          shadow-lg
          transition-all
          duration-300
        `}
      >
        <h3 className="font-semibold text-lg mb-4">
          Resume
        </h3>

        <button
          onClick={() => setOpen(true)}
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2
            rounded-full
            transition
            duration-300
          "
        >
          Manage Resume
        </button>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="
            fixed
            inset-0
            bg-black/50
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-50
            p-3
            sm:p-4
          "
          onClick={() => setOpen(false)}
        >

          {/* Modal Content */}
          <div
            className={`
              ${theme.cardBg}
              ${theme.textPrimary}
              rounded-2xl
              w-full
              max-w-lg
              sm:max-w-xl
              md:max-w-2xl
              max-h-[90vh]
              overflow-y-auto
              relative
              shadow-2xl
              transition-all
              duration-300
            `}
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="
                absolute
                top-4
                right-4
                text-gray-400
                hover:text-red-500
                text-2xl
                transition
              "
            >
              ✕
            </button>

            {/* Resume Upload Component */}
            <div className="p-4 sm:p-6">
              <ResumeUpload onClose={() => setOpen(false)} />
            </div>

          </div>
        </div>
      )}
    </>
  );
}