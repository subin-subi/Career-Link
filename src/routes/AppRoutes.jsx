import { Routes, Route } from "react-router-dom";

import Login from "../pages/User/login/Login";
import Signup from "../pages/User/signup/Signup";
import Home from "../pages/Employee/home/Home";
import JobsPage from "../pages/JobSearch/JobsPage";
import NetworkPage from "../pages/Network/Network";
import ProfileCenterPage from "../pages/Profile/ProfilePage";
import EmployeeProfile from "../pages/Profile/EmployeeProfile";
import Notifications from "../pages/User/Notifications/NotificationsPage";
import Message from "../pages/User/chat/chat";
import Settings from "../pages/User/Settings/Setting";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Landing from "../pages/landing/Body";

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
       
        <Route path="/candidate-form" element={<Jobs/>} />
        <Route path="/profile-form" element={<CandidateProfile/>} />
        <Route path="/ats" element={<ATSDashboard/>}/>
        <Route path="/pay" element={<PremiumPaymentPage/>}/>


        <Route path="/dashboard" element={<CandidateDashboard />} />
        <Route path="/applications" element={<MyApplicationsPage />} />


        <Route path="/employer/dashboard" element={<CandidateDashboard />} />
        <Route path="/employer/profile" element={<EmployeeProfile />} />    


        <Route path="/admin/profile" element={<AdminProfile />} />    
        <Route path="/admin/dashboard" element={<EmployerDashboardPage/>}/>


      </Route>

    </Routes>
  );
}
