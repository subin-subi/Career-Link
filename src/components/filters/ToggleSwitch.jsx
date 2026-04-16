function ToggleSwitch({ checked, onChange }) {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-xl mb-5">
      <div>
        <h4 className="font-semibold">
          Applications Questions
        </h4>
        <p className="text-sm text-gray-500">
          Only show jobs with questions
        </p>
      </div>

      <button
        onClick={onChange}
        className={`w-14 h-8 rounded-full flex items-center px-1 transition duration-300 ${
          checked ? "bg-blue-900" : "bg-gray-400"
        }`}
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md transform transition duration-300 ${
            checked ? "translate-x-6" : ""
          }`}
        />
      </button>
    </div>
  );
}

export default ToggleSwitch;