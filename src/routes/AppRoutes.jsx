import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import Home from "../pages/home/Home";
import JobsPage from "../pages/JobSearch/JobsPage";
import ProfileSidebar from "../components/Profile/ProfileSidebar";
import NetworkPage from "../pages/Network/Network";


export default function AppRoutes() {
  return (
    <>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/job" element={<JobsPage />} />
        <Route path="/profile" element={<ProfileSidebar />} />
        <Route path="network" element={<NetworkPage/>}/>
      </Routes>
    </>
  );
}
