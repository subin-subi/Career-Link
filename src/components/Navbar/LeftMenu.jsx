import { Compass } from "lucide-react";

export default function LeftMenu() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Logo Icon */}
      <Compass size={28} className="text-white" />

      {/* Logo Text */}
      <div className="text-2xl font-bold text-white">
        CareerLink
      </div>

    </div>
  );
}
