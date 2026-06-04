import Sidebar from "./Sidebar";
import VideoPanel from "./VideoPanel";
import InterviewProgress from "./InterviewProgress";
import CodingChallenge from "./CodingChallenge";
import CandidateInfo from "./CandidateInfo";
import AIAssistant from "./AIAssistant";

export default function InterviewRoom() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 overflow-auto">
        <VideoPanel />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          <InterviewProgress />
          <CodingChallenge />
          <CandidateInfo />
        </div>
      </main>

      {/* Hide AI Assistant on small screens or make it responsive */}
      <div className="hidden xl:block">
        <AIAssistant />
      </div>
    </div>
  );
}