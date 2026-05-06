import { useNavigate, useLocation } from "react-router-dom";

export default function Option() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="flex mb-6 bg-gray-200 rounded-full overflow-hidden">
      <button
        onClick={() => navigate("/login")}
        className={`w-1/2 py-2 font-semibold ${
          location.pathname === "/login"
            ? "bg-blue-600 text-white"
            : ""
        }`}
      >
        Login
      </button>

      <button
        onClick={() => navigate("/signup")}
        className={`w-1/2 py-2 font-semibold ${
          location.pathname === "/signup"
            ? "bg-blue-600 text-white"
            : ""
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}
