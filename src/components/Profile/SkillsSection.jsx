import { useState } from "react";
import { FiX } from "react-icons/fi";

export default function SkillsSection() {
  const [skills, setSkills] = useState([
    "Digital Marketing",
    "SEO",
    "Content Creation",
    "Social Media",
    "Project Management",
    "Google Analytics",
  ]);

  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() === "") return;
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-4 md:p-6">
      
      {/* Header */}
      <div className="mb-5">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          Skills
        </h3>
        <p className="text-sm text-gray-500">
          Highlight your core strengths
        </p>
      </div>

      {/* Skill Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              flex items-center gap-2
              bg-blue-50 text-blue-700
              px-3 py-1.5
              rounded-full
              text-sm
            "
          >
            {skill}
            <button
              onClick={() => removeSkill(index)}
              className="hover:text-red-500 transition"
            >
              <FiX size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Add Skill Input */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Add a new skill"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="
            w-full
            border border-gray-300
            rounded-lg
            px-3 py-2
            text-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
            focus:border-blue-500
            transition
          "
        />

        <button
          onClick={addSkill}
          className="
            bg-blue-600 text-white
            px-4 py-2
            rounded-lg
            hover:bg-blue-700
            transition
            w-full sm:w-auto
          "
        >
          Add
        </button>
      </div>
    </div>
  );
}