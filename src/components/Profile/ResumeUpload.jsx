import { useRef, useState } from "react";
import { FiUploadCloud, FiFileText, FiX } from "react-icons/fi";

export default function ResumeUpload({ onClose }) {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  // Open file picker
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle selected file
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
  };

  // Remove file
  const handleRemove = () => {
    setFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Save file and close modal
  const handleSave = () => {
    if (!file) {
      alert("Please upload a resume first");
      return;
    }

    console.log("Resume saved:", file);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 w-full">
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
          Resume
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          Upload your resume to apply faster
        </p>
      </div>

      {/* Upload Area */}
      {!file ? (
        <div
          className="
            border-2 border-dashed border-gray-300
            rounded-xl
            p-5 sm:p-8 md:p-10
            text-center
            bg-gray-50
            hover:border-blue-500
            transition
          "
        >
          <div className="flex flex-col items-center gap-3">
            <FiUploadCloud className="text-3xl sm:text-4xl text-gray-400" />

            <p className="text-sm sm:text-base text-gray-600">
              Drag & drop your resume here
            </p>

            <span className="text-xs text-gray-400">or</span>

            <button
              type="button"
              onClick={handleClick}
              className="
                bg-blue-600
                text-white
                px-4 sm:px-5
                py-2.5
                rounded-lg
                hover:bg-blue-700
                transition
                w-full sm:w-auto
              "
            >
              Browse File
            </button>

            <p className="text-xs text-gray-400">
              PDF, DOCX, TXT (Max 5MB)
            </p>
          </div>
        </div>
      ) : (
        /* Uploaded File Card */
        <div
          className="
            flex flex-col sm:flex-row
            gap-4
            sm:items-center
            sm:justify-between
            border border-gray-200
            rounded-xl
            p-4
            bg-gray-50
          "
        >
          {/* File Info */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="bg-blue-100 p-3 rounded-lg shrink-0">
              <FiFileText className="text-blue-600 text-xl" />
            </div>

            <div className="min-w-0">
              <p className="text-sm sm:text-base font-medium text-gray-800 truncate">
                {file.name}
              </p>

              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 items-center">
            <button
              type="button"
              onClick={handleClick}
              className="text-sm text-blue-600 hover:underline"
            >
              Replace
            </button>

            <button
              type="button"
              onClick={handleRemove}
              className="text-gray-500 hover:text-red-500"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="flex flex-row justify-end gap-2 sm:gap-3 mt-6">
  {/* Cancel */}
  <button
    type="button"
    onClick={onClose}
    className="
      px-3 py-1.5
      sm:px-5 sm:py-2
      text-sm sm:text-base
      border border-gray-300
      rounded-lg
      hover:bg-gray-100
      transition
    "
  >
    Cancel
  </button>

  {/* Save */}
  <button
    type="button"
    onClick={handleSave}
    className="
      px-3 py-1.5
      sm:px-5 sm:py-2
      text-sm sm:text-base
      bg-blue-600 text-white
      rounded-lg
      hover:bg-blue-700
      transition
    "
  >
    OK
  </button>
</div>
      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
        accept=".pdf,.doc,.docx,.txt"
      />
    </div>
  );
}