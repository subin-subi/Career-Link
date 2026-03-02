import { useState } from "react";

export default function PostJobForm() {
  const [form, setForm] = useState({
    title: "",
    location: "",
    type: "Full-time",
    salary: "",
    experience: "",
    description: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
      
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Post a New Job
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          Fill in the details to publish your job listing.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Job Details Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Job Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Job Title */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Job Title *
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. Frontend Developer"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Location *
              </label>
              <input
                type="text"
                name="location"
                value={form.location}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. Bangalore, India"
              />
            </div>

            {/* Job Type */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Employment Type
              </label>
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option>Full-time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Salary (₹)
              </label>
              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. 600000"
              />
            </div>

            {/* Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Required Experience (Years)
              </label>
              <input
                type="number"
                name="experience"
                value={form.experience}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="e.g. 2"
              />
            </div>

          </div>
        </div>

        {/* Description Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Job Description
          </h3>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Describe responsibilities, requirements, and skills needed..."
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-full transition duration-200 shadow-md"
          >
            Publish Job
          </button>
        </div>

      </form>
    </div>
  );
}