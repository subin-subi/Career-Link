import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/Employee/home/Home";
import JobsPage from "../pages/JobSearch/JobsPage";
import NetworkPage from "../pages/Network/Network";
import ProfileCenterPage from "../pages/Profile/ProfilePage";
import Notifications from "../pages/Notifications/NotificationsPage";
import Message from "../pages/User/chat/chat";
import Settings from "../pages/Settings/Setting";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Landing from "../pages/landing/Body";

import CandidateDashboard from "../pages/Employee/Candidate/CandidateDashboard";
import JobDetails from "../pages/JobSearch/JobApply/JobApply";
import ApplyIntern from "../pages/JobSearch/JobSubmitting/JobSubmit";

// import Dashboard from "../pages/employer/ManageJobs";
import Jobs from "../pages/Employee/Candidate/jobs";
import CandidateProfile from "../pages/Profile/CandidateProfile";

import EmployerDashboardPage from "../pages/Employee/employer/EmployerDashboard";
import ATSDashboard from "../pages/User/ATS/ATSDashboard";
import PremiumPaymentPage from "../pages/Employee/payment/PremiumPaymentPage";

export default function AppRoutes() {
  return (
    <Routes>

      {/* General Route */}
      <Route path="/" element={<Landing />} />

      {/* Auth Routes (Restricted when logged in) */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* Private Routes */}
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
        {/* <Route path="/dashboard" element={<EmployerDashboard />} /> */}
        <Route path="/candidate" element={<CandidateDashboard />} />
        {/* <Route path="/dashboard-form" element={<Dashboard />} /> */}
        <Route path="/candidate-form" element={<Jobs/>} />
        <Route path="/profile-form" element={<CandidateProfile/>} />
        <Route path="/ats" element={<ATSDashboard/>}/>
        <Route path="/pay" element={<PremiumPaymentPage/>}/>







        <Route path="/employer-dashboard" element={<EmployerDashboardPage/>}/>


      </Route>

    </Routes>
  );
}
