import { useState } from "react";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1b5b] text-white px-4 py-6 shadow-md z-50">

      {/* Desktop Navbar */}
      <div className="hidden md:flex items-center w-full">

        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          ZECPATH
        </div>

        {/* Elastic Search */}
        <div className="flex-1 mx-6">
          <div className="flex items-center bg-white rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none text-black bg-transparent"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <Menu />
      </div>

      {/* Mobile Navbar */}
      <MobileMenu open={open} setOpen={setOpen} />

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-[#0f1b5b] mt-3 border-t border-gray-600 p-4">
          <Menu />
        </div>
      )}
    </nav>
  );
}
