import { CheckCircle2, XCircle } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

export default function ActionButtons({
  onShortlist,
  onReject,
}) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      
      {/* Shortlist Button */}
      <button
        onClick={onShortlist}
        className={`
          group
          flex
          items-center
          justify-center
          gap-2
          w-full
          sm:w-auto
          px-4
          py-2.5
          rounded-xl
          text-xs
          sm:text-sm
          font-semibold
          transition-all
          duration-200
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-sm
          bg-green-600
          hover:bg-green-700
          text-white
        `}
      >
        <CheckCircle2
          size={16}
          className="transition-transform duration-200 group-hover:rotate-6"
        />

        Shortlist
      </button>

      {/* Reject Button */}
      <button
        onClick={onReject}
        className={`
          group
          flex
          items-center
          justify-center
          gap-2
          w-full
          sm:w-auto
          px-4
          py-2.5
          rounded-xl
          text-xs
          sm:text-sm
          font-semibold
          transition-all
          duration-200
          hover:scale-[1.02]
          active:scale-[0.98]
          shadow-sm
          bg-red-600
          hover:bg-red-700
          text-white
        `}
      >
        <XCircle
          size={16}
          className="transition-transform duration-200 group-hover:rotate-6"
        />

        Reject
      </button>
    </div>
  );
}