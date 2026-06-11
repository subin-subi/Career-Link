// NotFound.jsx
import { Link } from "react-router-dom";
import { Home, RefreshCw, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center shadow-2xl">

        {/* Error Code */}
        <h1 className="text-8xl font-bold text-indigo-500">404</h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold text-white">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-slate-400 leading-relaxed">
          The page you are looking for might have been removed,
          renamed, or is temporarily unavailable.
        </p>

        {/* Icon */}
        <div className="flex justify-center mt-8">
          <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center">
            <Search className="text-indigo-400" size={40} />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/home"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-xl text-white font-medium transition"
          >
            <Home size={18} />
            Go Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-6 py-3 border border-slate-700 hover:bg-slate-800 rounded-xl text-slate-200 transition"
          >
            <RefreshCw size={18} />
            Retry
          </button>
        </div>

        {/* Help Text */}
        <p className="mt-8 text-sm text-slate-500">
          Error Code: 404 • Resource Not Found
        </p>
      </div>
    </div>
  );
}