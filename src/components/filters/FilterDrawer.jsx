import { useEffect } from "react";

export default function FilterDrawer({
  open,
  onClose,
  children,
  onApply,
  onReset,
}) {
  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-end"
      onClick={onClose}
    >
      <div
        className="w-80 max-w-full h-full bg-white shadow-xl p-4 overflow-y-auto transform transition-transform duration-300 translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <button
            onClick={onClose}
            className="text-gray-500 text-xl hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">{children}</div>

        {/* Footer Buttons */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={onReset}
            className="w-1/2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            Reset
          </button>
          <button
            onClick={onApply}
            className="w-1/2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}