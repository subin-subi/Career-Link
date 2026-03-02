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

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-6">Post a New Job</h3>

      <div className="space-y-4">
        <input name="title" placeholder="Job Title"
          className="input" onChange={handleChange} />

        <input name="location" placeholder="Location"
          className="input" onChange={handleChange} />

        <select name="type" className="input" onChange={handleChange}>
          <option>Full-time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>

        <input type="number" name="salary"
          placeholder="Salary (₹)"
          className="input"
          onChange={handleChange} />

        <input type="number" name="experience"
          placeholder="Required Experience (years)"
          className="input"
          onChange={handleChange} />

        <textarea
          name="description"
          placeholder="Job Description"
          rows="4"
          className="input"
          onChange={handleChange}
        />

        <button className="w-full bg-blue-700 text-white py-3 rounded-full">
          Publish Job
        </button>
      </div>
    </div>
  );
}