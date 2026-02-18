import Navbar from "../../components/Navbar/Navbar";
import ComingSoon from "../../components/common/ComingSoon";
import BottomNav from "../JobSearch/BottomNav";

export default function Message() {
  return (
    <> 
      <Navbar/>
    <ComingSoon
      title="Message"
      message="This feature is coming soon!"
    />
    <BottomNav/>
    </>
  
  );
}
