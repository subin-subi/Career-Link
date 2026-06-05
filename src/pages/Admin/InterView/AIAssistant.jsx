import { useNavigate } from "react-router-dom";

export default function AIAssistant() {
  const navigate = useNavigate();
  return (
    <aside className="w-96 h-full flex flex-col bg-slate-900 border-l border-slate-800 p-4">

      {/* Header */}
      <h2 className="text-xl font-bold text-violet-400">
        AI Assistant
      </h2>

      {/* Assessment Card */}
      <div className="bg-slate-800 rounded-xl p-4 mt-4">
        <h3 className="text-white font-semibold">
          Overall Assessment
        </h3>

        <div className="mt-3 text-green-400 font-semibold">
          85% Good Fit
        </div>

        <ul className="mt-4 space-y-2 text-gray-300 text-sm">
          <li>✔ React Expertise</li>
          <li>✔ Problem Solving</li>
          <li>✔ Communication</li>
        </ul>
      </div>

  

     

      {/* Premium Card (BOTTOM FIXED STYLE) */}
      <div className="mt-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-slate-700 rounded-2xl p-5">

        <div className="text-center">
          <div className="text-5xl mb-3">👑</div>

          <h3 className="text-xl font-bold text-white">
            Premium Plan
          </h3>

          <p className="text-gray-400 text-sm mt-1">
            Unlock advanced interview features
          </p>

          <div className="my-5">
            <span className="text-3xl font-bold text-white">₹499</span>
            <span className="text-gray-400"> / month</span>
          </div>

          <div className="space-y-2 text-sm text-gray-300 text-left">
            <div>✅ Unlimited AI Evaluations</div>
            <div>✅ Advanced Analytics</div>
            <div>✅ Video Interview Recording</div>
            <div>✅ Priority Support</div>
          </div>

          <button
            onClick={() => navigate("/pay")}
            className="w-full mt-5 py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-[1.02] transition"
          >
            Upgrade Now
          </button>
        </div>

      </div>
    </aside>
  );
}