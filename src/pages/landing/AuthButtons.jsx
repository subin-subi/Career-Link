import { Link, useLocation } from "react-router-dom";

function AuthButtons() {
  const location = useLocation();

  return (
    <div className="flex items-center space-x-3 bg-[#071B57] p-3">
      
      <Link
        to="/login"
        className={`px-5 py-2 rounded-md font-semibold transition-all duration-300
          ${
            location.pathname === "/login"
              ? "bg-white text-black"
              : "text-white hover:bg-white hover:text-black"
          }`}
      >
        Login
      </Link>

      <Link
        to="/signup"
        className={`px-5 py-2 rounded-md font-semibold transition-all duration-300
          ${
            location.pathname === "/signup"
              ? "bg-white text-black"
              : "text-white hover:bg-white hover:text-black"
          }`}
      >
        Signup
      </Link>

    </div>
  );
}

export default AuthButtons;