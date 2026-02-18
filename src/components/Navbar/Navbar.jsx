
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";
import LeftMenu from "./LeftMenu";

export default function Navbar() {
  

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0f1b5b] text-white px-4 py-6 shadow-md z-50">

      {/* Desktop Navbar */}
      <div div className="hidden md:flex items-center w-full">

        {/* Logo */}
        <LeftMenu/>

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
      <MobileMenu />

      {/* Mobile Dropdown */}
     
    </nav>
  );
}
