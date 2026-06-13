import {
  Mic,
  Video,
  MonitorUp,
  PhoneOff,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VideoPanel() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 rounded-2xl p-4">
      <h2 className="text-xl font-semibold text-white mb-4">
        Frontend Developer Interview
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center text-white">
          Candidate Video
        </div>

        <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center text-white">
          Interviewer Video
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
          <Mic />
        </button>

        <button className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
          <Video />
        </button>

        <button className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors">
          <MonitorUp />
        </button>

        <button
          onClick={() => navigate("/employer/applicants")}
          className="p-3 rounded-xl bg-red-600 text-white hover:bg-red-700 transition-colors"
        >
          <PhoneOff />
        </button>
      </div>
    </div>
  );
}