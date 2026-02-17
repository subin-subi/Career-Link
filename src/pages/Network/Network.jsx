
import Navbar from "../../components/Navbar/Navbar";
import BottomNav from "../JobSearch/BottomNav";
import LeftSide from "./LeftSides/Leftside";
import Pending from "./RightSide/Pending";
import People from "./RightSide/People";
import Premium from "./RightSide/Premium";
import Puzzle from "./RightSide/PuzzleCard";
import Tab from "./RightSide/Tabs";

export default function NetworkPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-28">
        <Navbar/>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* LEFT SIDEBAR */}
        <div className="lg:w-72 w-full space-y-4">
        <LeftSide/>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 space-y-4">

          {/* Tabs */}
         <Tab/>        

          {/* Pending invitations */}
         <Pending/>

          {/* Puzzle card */}
         <Puzzle/>

          {/* Premium Card */}
          <Premium/>

          {/* People section */}
          <People/>
        </div>

      </div>
      <BottomNav/>
    </div>
  );
}
