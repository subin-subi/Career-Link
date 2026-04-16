import { useState } from "react";
import FilterSelect from "./FilterSelect";
import ToggleSwitch from "./ToggleSwitch";

function FilterForm() {
  const [filters, setFilters] = useState({
    jobType: "",
    workplaceType: "",
    experienceLevel: "",
    minOpening: "",
    maxOpening: "",
    hasQuestions: true,
  });

  const handleChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const applyFilters = () => {
    console.log("Applied Filters:", filters);
  };

  return (
    <div className="w-[350px] bg-white p-8 rounded-xl shadow-md mx-auto mt-10">
      <FilterSelect
        label="Job Type"
        options={["Full Time", "Part Time", "Internship"]}
        value={filters.jobType}
        onChange={(e) => handleChange("jobType", e.target.value)}
      />

      <FilterSelect
        label="Workplace Type"
        options={["Remote", "Hybrid", "Onsite"]}
        value={filters.workplaceType}
        onChange={(e) =>
          handleChange("workplaceType", e.target.value)
        }
      />

      <FilterSelect
        label="Experience Level"
        options={["Fresher", "Mid Level", "Senior"]}
        value={filters.experienceLevel}
        onChange={(e) =>
          handleChange("experienceLevel", e.target.value)
        }
      />

      <div className="mb-5">
        <label className="block font-semibold mb-2">
          Number of openings
        </label>

        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Min"
            value={filters.minOpening}
            onChange={(e) =>
              handleChange("minOpening", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="number"
            placeholder="Max"
            value={filters.maxOpening}
            onChange={(e) =>
              handleChange("maxOpening", e.target.value)
            }
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <ToggleSwitch
        checked={filters.hasQuestions}
        onChange={() =>
          handleChange(
            "hasQuestions",
            !filters.hasQuestions
          )
        }
      />

      <button
        onClick={applyFilters}
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
      >
        Apply filters
      </button>
    </div>
  );
}

export default FilterForm;