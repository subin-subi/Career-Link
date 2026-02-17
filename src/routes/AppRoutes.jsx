import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import JobsPage from "../pages/JobSearch/JobsPage";
import NetworkPage from "../pages/Network/Network";
import ProfileCenterPage from "../pages/Profile/ProfilePage";


export default function AppRoutes() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job" element={<JobsPage />} />
        <Route path="/profile" element={<ProfileCenterPage />} />
        <Route path="network" element={<NetworkPage/>}/>
      </Routes>
    </>
  );
}
