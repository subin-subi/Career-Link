import {
  Mic,
  Video,
  MonitorUp,
  PhoneOff,
} from "lucide-react";

export default function VideoPanel() {
  return (
    <div className="bg-slate-900 rounded-2xl p-4">
      <h2 className="text-xl font-semibold mb-4">
        Frontend Developer Interview
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center">
          Candidate Video
        </div>

        <div className="bg-slate-800 rounded-xl h-96 flex items-center justify-center">
          Interviewer Video
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <button className="p-3 rounded-xl bg-slate-800">
          <Mic />
        </button>

        <button className="p-3 rounded-xl bg-slate-800">
          <Video />
        </button>

        <button className="p-3 rounded-xl bg-slate-800">
          <MonitorUp />
        </button>

        <button className="p-3 rounded-xl bg-red-600">
          <PhoneOff />
        </button>
      </div>
    </div>
  );
}