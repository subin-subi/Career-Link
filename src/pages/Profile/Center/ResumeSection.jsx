import { useState } from "react";
import ResumeUpload from "../../../components/Profile/ResumeUpload";

export default function ResumeSection() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gray-100 rounded-xl p-4 shadow">
        <h3 className="font-semibold mb-3">Resume</h3>

        <button
          onClick={() => setOpen(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Manage Resume
        </button>
      </div>

      {/* Modal */}
      {open && (
  <div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-3 sm:p-4"
    onClick={() => setOpen(false)}
  >
    <div
      className="
        bg-white
        rounded-2xl
        w-full
        max-w-lg
        sm:max-w-xl
        md:max-w-2xl
        max-h-[90vh]
        overflow-y-auto
        relative
      "
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-gray-500 text-xl"
      >
        ✕
      </button>

      <ResumeUpload onClose={() => setOpen(false)} />
    </div>
  </div>
)}
    </>
  );
}