import { Link } from "react-router-dom";
import { Home, Briefcase, Bell } from "lucide-react";


export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white flex justify-around py-3 rounded-t-3xl md:hidden">

      <Link to="/" className="flex flex-col items-center text-xs">
        <Home size={20} />
        Home
      </Link>

      <Link to="/network" className="flex flex-col items-center text-xs">
        <Briefcase size={20} />
        My Network
      </Link>

      <Link to="/notifications" className="flex flex-col items-center text-xs">
        <Bell size={20} />
        Notification
      </Link>

      <Link to="/job" className="flex flex-col items-center text-xs">
        <Briefcase size={20} />
        Jobs
      </Link>

    </div>
  );
}
