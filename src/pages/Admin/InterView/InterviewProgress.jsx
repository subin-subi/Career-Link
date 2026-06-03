export default function InterviewProgress() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <h3 className="font-semibold mb-4">
        Interview Progress
      </h3>

      <div className="w-full bg-slate-700 h-2 rounded">
        <div className="bg-violet-500 h-2 rounded w-2/3"></div>
      </div>

      <div className="mt-4 space-y-3">
        <p>✅ Introduction</p>
        <p>✅ Technical Questions</p>
        <p>🟣 Coding Challenge</p>
        <p>⏳ System Design</p>
      </div>
    </div>
  );
}