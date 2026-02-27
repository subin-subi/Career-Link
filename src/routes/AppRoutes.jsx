import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import JobsPage from "../pages/JobSearch/JobsPage";
import NetworkPage from "../pages/Network/Network";
import ProfileCenterPage from "../pages/Profile/ProfilePage";
import Notifications from "../pages/Notifications/NotificationsPage";
import Message from "../pages/chat/chat";
import Settings from "../pages/Settings/Setting";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Landing from "../pages/landing/Body";

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
        <Route path="/profile" element={<ProfileCenterPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/chat" element={<Message />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

    </Routes>
  );
}
