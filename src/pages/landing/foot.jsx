import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-6 border-t">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        
        <div>
          <h2 className="text-xl font-bold text-blue-700">Zecpath.</h2>
          <p className="text-sm text-gray-500">
            © 2026 Zecser Business LLP. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4 text-gray-500 text-xl">
          <FaLinkedin className="hover:text-blue-600 cursor-pointer" />
          <FaTwitter className="hover:text-blue-400 cursor-pointer" />
          <FaFacebook className="hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}