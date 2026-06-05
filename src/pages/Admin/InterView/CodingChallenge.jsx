

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CodingChallenge() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/cd"); // change route here
    }, 600); // small delay for animation
  };


  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <h3 className="font-semibold mb-4">
        Coding Challenge
      </h3>

      <textarea
        className="w-full h-64 bg-slate-950 border border-slate-700 rounded-lg p-3"
        defaultValue={`function twoSum(nums,target){\n\n}`}
      />

      <div className="flex gap-3 mt-3">
        <button className="bg-violet-600 px-4 py-2 rounded-lg">
          Run Code
        </button>

        <button
      onClick={handleSubmit}
      className={`bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300
      ${loading ? "scale-110 px-6" : "hover:scale-105"}`}
    >
      {loading ? "Expand..." : "Expand"}
    </button>
      </div>
    </div>
  );
}