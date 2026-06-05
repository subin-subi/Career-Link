import Navbar from "../../../components/Navbar/Navbar";
import BottomNav from "../../JobSearch/BottomNav";
import { useNavigate } from "react-router-dom";
export default function PremiumEmployerDashboard() {

const navigate = useNavigate();

  const theme = {
    bg: "bg-gray-50 dark:bg-[#0f172a]",
    cardBg: "bg-white dark:bg-[#1e293b]",
    border: "border border-gray-200 dark:border-slate-700",
    textPrimary: "text-gray-900 dark:text-white",
    textSecondary: "text-gray-600 dark:text-gray-300",
    textMuted: "text-gray-500 dark:text-gray-400",
    shadow: "shadow-sm",
    shadowLg: "shadow-2xl",
  };

  const stats = [
    {
      title: "Jobs Applied",
      value: 12,
      change: "+3",
      icon: "📋",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Profile Views",
      value: 48,
      change: "+8",
      icon: "👁️",
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Saved Jobs",
      value: 7,
      change: "-2",
      icon: "⭐",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Interview Invites",
      value: 3,
      change: "+1",
      icon: "📅",
      color: "from-emerald-500 to-green-500",
    },
  ];

  const recentApplications = [
    {
      company: "Google",
      role: "Frontend Developer",
      status: "Interview",
    },
    {
      company: "Microsoft",
      role: "React Developer",
      status: "Under Review",
    },
    {
      company: "Netflix",
      role: "UI Engineer",
      status: "Applied",
    },
  ];

  const recommendedJobs = [
    {
      title: "Senior MERN Developer",
      company: "Spotify",
      salary: "$85k - $110k",
    },
    {
      title: "Full Stack Engineer",
      company: "Adobe",
      salary: "$90k - $120k",
    },
  ];

  return (
    <div
      className={`min-h-screen ${theme.bg} ${theme.textPrimary} p-4 sm:p-6 lg:p-8 transition-all duration-300`}
    >
      <Navbar/>
     <div className="max-w-7xl mx-auto space-y-6 pt-24">



        {/* HERO SECTION */}
        <div
          className={`relative overflow-hidden rounded-3xl p-8 lg:p-10 ${theme.cardBg} ${theme.border} ${theme.shadowLg}`}
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
                Welcome back, <span className="text-violet-500">employee</span> 👋
              </h1>

              <p
                className={`mt-4 text-base sm:text-lg max-w-2xl ${theme.textSecondary}`}
              >
                Track your applications, discover premium opportunities,
                improve your AI profile score and manage your career growth.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition-all duration-300 shadow-lg hover:scale-105">
                  Explore Jobs
                </button>

                <button
                  className={`px-5 py-3 rounded-xl ${theme.border} ${theme.cardBg} ${theme.textPrimary} hover:scale-105 transition-all duration-300`}
                >
                  Upgrade Resume
                </button>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-6xl shadow-2xl">
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl p-6 ${theme.cardBg} ${theme.border} ${theme.shadow} hover:shadow-2xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Gradient Glow */}
              <div
                className={`absolute inset-0 opacity-10 bg-gradient-to-br ${item.color}`}
              />

              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <p className={`${theme.textMuted} text-sm font-medium`}>
                    {item.title}
                  </p>

                  <h2 className="text-5xl font-black mt-3">
                    {item.value}
                  </h2>

                  <p
                    className={`mt-4 text-sm font-medium ${
                      item.change.startsWith("+")
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.change} this month
                  </p>
                </div>

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-all duration-300`}
                >
                  {item.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

         {/* RECOMMENDED */}
          <div
            className={`rounded-3xl p-6 ${theme.cardBg} ${theme.border} ${theme.shadowLg}`}
          >
            <h2 className="text-2xl font-bold">
              Recommended
            </h2>

            <p className={`${theme.textMuted} mt-1`}>
              Based on your profile
            </p>

            <div className="mt-6 space-y-4">
              {recommendedJobs.map((job, index) => (
                <div
                  key={index}
                  className={`p-5 rounded-2xl ${theme.border} hover:shadow-lg transition-all duration-300`}
                >
                  <h3 className="font-bold text-lg">
                    {job.title}
                  </h3>

                  <p className={`${theme.textMuted} mt-1`}>
                    {job.company}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-green-500 font-semibold">
                      {job.salary}
                    </span>

                    <button className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-700 text-white text-sm font-medium transition-all duration-300">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

   

        {/* BOTTOM SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* RECENT APPLICATIONS */}
          <div
            className={`lg:col-span-2 rounded-3xl p-6 ${theme.cardBg} ${theme.border} ${theme.shadowLg}`}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">
                  Recent Applications
                </h2>

                <p className={`${theme.textMuted} mt-1`}>
                  Your latest job applications
                </p>
              </div>

              <button className="text-violet-500 font-semibold hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {recentApplications.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-2xl ${theme.border} hover:shadow-lg transition-all duration-300`}
                >
                  <div>
                    <h3 className="font-bold text-lg">
                      {item.role}
                    </h3>

                    <p className={`${theme.textMuted}`}>
                      {item.company}
                    </p>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-violet-500/10 text-violet-500 font-medium text-sm">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

              {/* AI SCORE */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
  {/* Left Side */}
  <div>
    {/* Your existing Premium Features section */}
  </div>

  {/* Right Side */}
  <div
    className={`w-full lg:w-[350px] rounded-2xl p-6 border ${theme.border} bg-gradient-to-br from-blue-500/10 to-cyan-500/10`}
  >
    <div className="text-center">
      <div className="text-6xl mb-4">👑</div>

      <h3 className="text-2xl font-bold">
        Premium Plan
      </h3>

      <p className={`${theme.textMuted} mt-2`}>
        Access all advanced interview features.
      </p>

      <div className="my-6">
        <span className="text-4xl font-bold">₹499</span>
        <span className={theme.textMuted}> / month</span>
      </div>

      <div className="space-y-3 text-left mb-6">
        <div className="flex items-center gap-2">
          ✅ Unlimited AI Evaluations
        </div>

        <div className="flex items-center gap-2">
          ✅ Advanced Analytics
        </div>

        <div className="flex items-center gap-2">
          ✅ Video Interview Recording
        </div>

        <div className="flex items-center gap-2">
          ✅ Priority Support
        </div>
      </div>

      <button
  onClick={() => navigate("/pay")}
  className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
>
  Upgrade Now
</button>
    </div>
  </div>
</div>
        </div>
      </div>
      <BottomNav/>
    </div>
  );
}
