export default function AIAssistant() {
  return (
    <aside className="w-96 bg-slate-900 border-l border-slate-800 p-4">
      <h2 className="text-xl font-bold text-violet-400">
        AI Assistant
      </h2>

      <div className="bg-slate-800 rounded-xl p-4 mt-4">
        <h3>Overall Assessment</h3>

        <div className="mt-3 text-green-400">
          85% Good Fit
        </div>

        <ul className="mt-4 space-y-2">
          <li>✔ React Expertise</li>
          <li>✔ Problem Solving</li>
          <li>✔ Communication</li>
        </ul>
      </div>

      <div className="mt-6">
        <input
          placeholder="Ask AI..."
          className="w-full bg-slate-800 p-3 rounded-lg"
        />
      </div>
    </aside>
  );
}