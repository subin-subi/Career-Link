import Navbar from "./nav";
import Footer from "./foot";

export default function Landing() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      <Navbar />

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center px-6">
        <div className="bg-[#145d82] text-white rounded-2xl shadow-lg p-12 text-center max-w-4xl w-full">
          
          <h2 className="text-4xl font-bold mb-4">
            Ready to Launch Your Career?
          </h2>

          <p className="text-lg text-gray-200 mb-8">
            Join 10,000+ professionals who found their dream jobs through Zecpath.
          </p>

          <button className="bg-gray-200 text-[#145d82] font-semibold px-6 py-3 rounded-md hover:bg-white transition">
            Create Free Profile
          </button>

        </div>
      </div>

      <Footer />

    </div>
  );
}