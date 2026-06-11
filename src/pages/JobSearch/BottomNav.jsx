import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {
  Home,
  Briefcase,
  Bell,
  Users,
  Crown,
} from "lucide-react";


export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white flex justify-around py-3 rounded-t-3xl md:hidden">

      <Link to="/home" className="flex flex-col items-center text-xs">
        <Home size={20} />
        Home
      </Link>

      <Link to="/network" className="flex flex-col items-center text-xs">
        <Briefcase size={20} />
        My Network
      </Link>

      
      <Link
  to="/pay"
  className="
    flex flex-col items-center text-xs
    transition-all duration-300
    hover:text-amber-400
  "
>
  <Crown
    size={20}
    className="
      transition-transform duration-300
      hover:scale-110
    "
  />

  <span className="mt-1">
    Premium
  </span>
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
