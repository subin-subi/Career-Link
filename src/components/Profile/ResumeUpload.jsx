import { useRef, useState } from "react";
import { FiUploadCloud, FiFileText, FiX } from "react-icons/fi";

export default function ResumeUpload() {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
  };

  const handleRemove = () => {
    setFile(null);
    fileInputRef.current.value = "";
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6">
      
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Resume
        </h3>
        <p className="text-sm text-gray-500">
          Upload your resume to apply faster
        </p>
      </div>

      {/* Upload Area */}
      {!file ? (
        <div className="
          border-2 border-dashed border-gray-300
          rounded-xl
          p-6 md:p-10
          text-center
          bg-gray-50
          hover:border-blue-500
          transition
        ">
          <div className="flex flex-col items-center gap-3">
            <FiUploadCloud className="text-4xl text-gray-400" />

            <p className="text-sm md:text-base text-gray-600">
              Drag & drop your resume here
            </p>

            <span className="text-xs text-gray-400">or</span>

            <button
              onClick={handleClick}
              className="
                bg-blue-600 text-white
                px-5 py-2.5
                rounded-lg
                hover:bg-blue-700
                transition
                w-full md:w-auto
              "
            >
              Browse File
            </button>

            <p className="text-xs text-gray-400 mt-2">
              PDF, DOCX, TXT (Max 5MB)
            </p>
          </div>
        </div>
      ) : (
        /* Uploaded File Card */
        <div className="
          flex items-center justify-between
          border border-gray-200
          rounded-xl
          p-4
          bg-gray-50
        ">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-3 rounded-lg">
              <FiFileText className="text-blue-600 text-xl" />
            </div>

            <div>
              <p className="text-sm md:text-base font-medium text-gray-800">
                {file.name}
              </p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-center">
            <button
              onClick={handleClick}
              className="text-sm text-blue-600 hover:underline"
            >
              Replace
            </button>

            <button
              onClick={handleRemove}
              className="text-gray-500 hover:text-red-500"
            >
              <FiX size={18} />
            </button>
          </div>
        </div>
      )}

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