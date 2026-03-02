import EmployerSidebar from "./EmployerSidebar";
import EmployerHeader from "./EmployerHeader";
import PostJobForm from "./PostJobForm";
import ManageJobs from "./ManageJobs";

export default function EmployerLayout() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      
      <EmployerSidebar />

      <div className="flex-1 flex flex-col">
        <EmployerHeader />

        <div className="flex gap-8 p-8">
          <div className="w-[400px]">
            <PostJobForm />
          </div>

          <div className="flex-1">
            <ManageJobs />
          </div>
        </div>
      </div>

    </div>
  );
}