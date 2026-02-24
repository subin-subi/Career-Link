import { FiGrid, FiMapPin, FiCalendar, FiBriefcase } from "react-icons/fi";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import Navbar from "../../../components/Navbar/Navbar";
import ApplyButton from "../../../components/Button/Apply";
import BottomNav from "../BottomNav";

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        <div className="hidden lg:block lg:col-span-3">
          <ProfileSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-white shadow-md rounded-xl overflow-hidden relative">

            {/* Header Card */}
            <div className="p-6 border-b">
              <div className="flex items-start gap-4">
                
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FiGrid className="text-blue-600" size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-semibold">MernStack Intern</h2>
                  <p className="text-sm text-gray-600">Saftronics</p>
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <FiMapPin className="mr-1" />
                    Palakkad
                  </div>
                </div>
              </div>

              {/* Views & Questions */}
              <div className="flex gap-3 mt-4">
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-md">
                  1 Views
                </span>
                <span className="bg-gray-200 text-xs px-3 py-1 rounded-md">
                  1 Questions
                </span>
              </div>

              {/* Job Type Buttons */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <button className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm shadow">
                  Full Time
                </button>
                <button className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm shadow">
                  Onsite
                </button>
                <button className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm shadow">
                  Fresher
                </button>
              </div>
            </div>

            {/* Job Info Section */}
            <div className="p-6 space-y-4 border-b">
              
              <div className="flex items-start gap-3">
                <FiCalendar className="text-blue-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Posted</p>
                  <p className="text-sm font-medium">07 Feb 2026</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiBriefcase className="text-blue-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Openings</p>
                  <p className="text-sm font-medium">5 positions</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FiCalendar className="text-blue-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-600">Deadline</p>
                  <p className="text-sm font-medium text-red-600">
                    04 Mar 2026
                  </p>
                </div>
              </div>

            </div>

            {/* About Section */}
            <div className="p-6">
              <h3 className="font-semibold mb-2">About the role</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We are looking for a MERN Stack Developer to design,
                develop, and maintain dynamic, high-performance web
                applications using MongoDB, Express.js, React.js,
                and Node.js.
              </p>

              <h3 className="font-semibold mt-6 mb-2">Responsibilities</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                <li>Assist in developing web applications using the MERN stack</li>
                <li>Work on frontend UI components</li>
                <li>Collaborate with backend developers</li>
                <li>Debug and improve application performance</li>
              </ul>
            </div>

            {/* Apply Button */}
          <div className="p-6 border-t flex items-center justify-center">
  <ApplyButton to={`/job-submit`} />
</div>

          </div>
        </div>

        {/* Right Empty Space (Optional like LinkedIn layout) */}
        <div className="hidden lg:block lg:col-span-3"></div>

      </div>
      <BottomNav/>
    </div>
  );
}