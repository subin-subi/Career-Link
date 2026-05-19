import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons"
export default function Navbar() {
  return (
    <nav className="bg-[#0c1f4a] text-white px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">
        Zecpath<span className="text-blue-400">.</span>
      </h1>

      {/* Center Links */}
      <div className="hidden md:flex space-x-8 text-sm font-medium">
        <Link to="#">Find Jobs</Link>
        <Link to="#">Companies</Link>
        <Link to="#">Salaries</Link>
        <Link to="#">Resources</Link>
      </div>

      {/* Right Buttons */}
     <AuthButtons/>
    </nav>
  );
}