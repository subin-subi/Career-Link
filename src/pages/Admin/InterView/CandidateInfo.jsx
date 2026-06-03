export default function CandidateInfo() {
  return (
    <div className="bg-slate-900 p-4 rounded-xl">
      <h3 className="font-semibold mb-4">
        Candidate Info
      </h3>

      <p>Name: Sarah Johnson</p>
      <p>Experience: 3+ Years</p>
      <p>Role: Frontend Developer</p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="bg-slate-800 px-2 py-1 rounded">
          React
        </span>

        <span className="bg-slate-800 px-2 py-1 rounded">
          JavaScript
        </span>

        <span className="bg-slate-800 px-2 py-1 rounded">
          TypeScript
        </span>
      </div>
    </div>
  );
}