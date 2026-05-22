import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      <h1 className="text-7xl font-bold text-[#0077ff]">
        404
      </h1>

      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 text-center">
        The page you are looking for does not exist.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-[#0077ff] text-white rounded-xl hover:bg-blue-700 transition"
      >
        Go Back Home
      </button>
    </div>
  );
}
