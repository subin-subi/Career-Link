import { useState } from "react";
import EmployerSidebar from "./EmployerSidebar";
import EmployerHeader from "./EmployerHeader";
import PostJobForm from "./PostJobForm";
import ManageJobs from "./ManageJobs";

export default function EmployerLayout() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className={`
        fixed md:static z-40 top-0 left-0 h-full 
        transition-transform duration-300
        ${openSidebar ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0
      `}>
        <EmployerSidebar />
      </div>

      {/* Overlay for mobile */}
      {openSidebar && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpenSidebar(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        <EmployerHeader setOpenSidebar={setOpenSidebar} />

        {/* Content Area */}
        <div className="p-4 md:p-8">
          <div className="flex flex-col lg:flex-row gap-8">

            {/* Form */}
            <div className="w-full lg:w-[400px]">
              <PostJobForm />
            </div>

            {/* Manage Jobs */}
            <div className="flex-1">
              <ManageJobs />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}