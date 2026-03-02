    import { FiArrowLeft } from "react-icons/fi";
    import { useNavigate } from "react-router-dom";
    import { useState } from "react";

    import Navbar from "../../../components/Navbar/Navbar";
    import ProfileSidebar from "../../../components/Profile/ProfileSidebar";

    export default function ApplyIntern() {
    const navigate = useNavigate();
   const [experience, setExperience] = useState("");
const [error, setError] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();

  const exp = Number(experience);

  if (experience === "" || isNaN(exp)) {
    setError("Experience must be a number");
    return;
  }

  if (exp < 0) {
    setError("Experience cannot be negative");
    return;
  }

  // If valid
  alert("Application submitted successfully!");

  navigate("/job");
};

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col pt-18">
        
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-1 justify-center px-4 py-8">
  <div className="flex w-full max-w-6xl gap-8">

    {/* Sidebar */}
    <div className="hidden lg:block w-72">
      <ProfileSidebar />
    </div>

    {/* Content */}
    <div className="flex-1 flex justify-center">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 md:p-8 relative">

        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 text-gray-600 hover:text-black"
        >
          <FiArrowLeft size={22} />
        </button>

        <div className="mt-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Apply for MernStack Intern
          </h1>
          <p className="text-gray-500 mt-2">
            Complete the form below to submit your application
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experience
            </label>
          <input
  type="number"
  min="0"
  value={experience}
  onChange={(e) => {
    setExperience(e.target.value);
    setError("");
  }}
  placeholder="Enter your experience (in years)"
  className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
  required
/>
{error && (
  <p className="text-red-500 text-sm mt-2">{error}</p>
)}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            Submit Application
          </button>
        </form>

      </div>
    </div>

  </div>
</div>
        </div>
    );
    }