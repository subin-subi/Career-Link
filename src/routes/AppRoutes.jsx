import { Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import Login from "../pages/User/login/Login";
import Signup from "../pages/User/signup/Signup";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import LandingPage from "../pages/landing/Body";
import ErrorPage from "../components/ui/ErrorMessage";

import CandidateDashboard from "../pages/Employee/Candidate/CandidateDashboard";
import JobDetails from "../pages/JobSearch/JobApply/JobApply";
import ApplyIntern from "../pages/JobSearch/JobSubmitting/JobSubmit";
import Jobs from "../pages/Employee/Candidate/jobs";
import CandidateProfile from "../pages/Profile/CandidateProfile";
import EmployerDashboardPage from "../pages/Employee/employer/EmployerDashboard";
import ATSDashboard from "../pages/User/ATS/ATSDashboard";
import PremiumPaymentPage from "../pages/Employee/payment/PremiumPaymentPage";
import AdminProfile from "../pages/Profile/AdminProfile";
import MyApplicationsPage from "../pages/User/Application/MyApplicationsPage";
import ManageUsers from "../pages/Admin/UserManagement/ManageUsers";
import EmployerJobsPage from "../pages/Employee/EmployerJobs/EmployerJobsPage";
import AIInsightsDashboard from "../pages/Admin/Report/AiDashboard";
import InterviewSchedulerPage from "../pages/Employee/InterviewSchedulerPage";
import InterviewRoom from "../pages/Admin/InterView/InterviewRoom";
import InterviewInstructions from "../pages/Admin/InterviewInstructions/InterviewInstructions";
import RecruiterDashboard from "../pages/Employee/RecruiterDashboard/RecruiterActions";
import CodingAssessment from "../pages/Employee/CodeEditor/CodeEditor";


const Home = lazy(() => import("../pages/Employee/home/Home"));

const JobsPage = lazy(() =>
  import("../pages/JobSearch/JobsPage")
);

const NetworkPage = lazy(() =>
  import("../pages/Network/Network")
);

const ProfileCenterPage = lazy(() =>
  import("../pages/Profile/ProfilePage")
);

const EmployeeProfile = lazy(() =>
  import("../pages/Profile/EmployeeProfile")
);

const Notifications = lazy(() =>
  import("../pages/User/Notifications/NotificationsPage")
);

const Message = lazy(() =>
  import("../pages/User/chat/chat")
);

const Settings = lazy(() =>
  import("../pages/User/Settings/Setting")
);


export default function AppRoutes() {
  const location = useLocation();

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
          Loading...
        </div>
      }
    >
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.pathname}
        >
          {/* Public Pages */}
          <Route path="/" element={<LandingPage />} />

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          {/* Protected Pages */}
          <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/job" element={<JobsPage />} />
            <Route path="/job-apply" element={<JobDetails />} />
            <Route path="/job-submit" element={<ApplyIntern />} />

            <Route path="/profile" element={<ProfileCenterPage />} />
            <Route path="/network" element={<NetworkPage />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/chat" element={<Message />} />
            <Route path="/settings" element={<Settings />} />

            <Route path="/candidate-form" element={<Jobs />} />
            <Route path="/profile-form" element={<CandidateProfile />} />

            <Route path="/pay" element={<PremiumPaymentPage />} />

            <Route path="/dashboard" element={<CandidateDashboard />} />
            <Route
              path="/applications"
              element={<MyApplicationsPage />}
            />

            <Route path="/interview" element={<InterviewRoom />} />

            <Route
              path="/interviewInstruction"
              element={<InterviewInstructions />}
            />

            <Route
              path="/code"
              element={<CodingAssessment />}
            />

            {/* Employer */}
            <Route
              path="/employer/dashboard"
              element={<CandidateDashboard />}
            />

            <Route
              path="/employer/profile"
              element={<EmployeeProfile />}
            />

            <Route
              path="/employer/applicants"
              element={<ATSDashboard />}
            />

            <Route
              path="/employer/jobs"
              element={<EmployerJobsPage />}
            />

            <Route
              path="/employer/report"
              element={<RecruiterDashboard />}
            />

            {/* Admin */}
            <Route
              path="/admin/profile"
              element={<AdminProfile />}
            />

            <Route
              path="/admin/dashboard"
              element={<EmployerDashboardPage />}
            />

            <Route
              path="/admin/users"
              element={<ManageUsers />}
            />

            <Route
              path="/admin/reports"
              element={<AIInsightsDashboard />}
            />
          </Route>

          {/* Misc */}
          <Route
            path="/ab"
            element={<InterviewSchedulerPage />}
          />

          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}