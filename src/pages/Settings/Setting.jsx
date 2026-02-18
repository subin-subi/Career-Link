import Navbar from "../../components/Navbar/Navbar";
import ComingSoon from "../../components/common/ComingSoon";
import BottomNav from "../JobSearch/BottomNav";

export default function Settings() {
  return (
    <> 
      <Navbar/>
    <ComingSoon
      title="Settings"
      message="This feature is coming soon!"
    />
    <BottomNav/>
    </>
  
  );
}
