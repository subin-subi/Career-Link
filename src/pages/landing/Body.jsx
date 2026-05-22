import {
  BrainCircuit,
  Mic,
  CalendarClock,
  BarChart3,
  Search,
} from "lucide-react";
import Navbar from "./nav";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
   const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#f5f7fb] font-sans">

      <Navbar/>
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 pt-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-md">
          
          {/* LEFT */}
          <div className="p-6 lg:p-10 flex flex-col justify-center">
            
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[#1B365D]">
              Zecpath{" "}
              <span className="text-[#0077ff]">
                AI hiring platform
              </span>
            </h1>

            <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-gray-800">
              Find your{" "}
              <span className="text-[#ffb400]">
                Dream Job
              </span>
            </h2>

            <p className="mt-5 text-gray-600 leading-7 text-sm lg:text-base">
              ZECPATH is AI-powered hiring platform that
              makes recruitment faster, smarter and effortless.
              Find your dream job or hire the perfect candidate
              with smart screening, voice interviews and
              automated scheduling in one place.
            </p>

            {/* SEARCH */}
            <div className="mt-6 relative">
              
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="search job title"
                className="w-full h-12 rounded-2xl border border-gray-300 bg-gray-50 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative bg-gradient-to-br from-[#dce9ff] to-[#f1f6ff] flex items-center justify-center p-8">
            
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
              alt="AI Hiring"
              className="rounded-3xl object-cover h-full"
            />

            {/* FLOATING CARD */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-lg max-w-[250px]">
              
              <p className="text-sm text-gray-500">
                Search jobs from top
              </p>

              <h3 className="text-lg font-bold text-[#ffb400]">
                Companies
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-4 mt-12">
        
        <h2 className="text-3xl font-bold text-gray-800">
          Powerful{" "}
          <span className="text-[#0077ff]">
            Features
          </span>{" "}
          For Smarter Hiring
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          
          {[
            {
              title: "AI smart Ranking",
              icon: <BrainCircuit size={24} />,
              desc:
                "Automated ATS resume parsing candidate ranking to find top 1% instantly",
              color: "bg-[#fff0e5] text-[#ff7a00]",
            },
            {
              title: "AI Voice Interviews",
              icon: <Mic size={24} />,
              desc:
                "Automated screening with multilingual & gender-based AI agents available 24/7",
              color: "bg-[#e9f6ff] text-[#0091ff]",
            },
            {
              title: "Smart Scheduling",
              icon: <CalendarClock size={24} />,
              desc:
                "Automated interview scheduling with intelligent email & call reminder",
              color: "bg-[#ebfff0] text-[#1ea75f]",
            },
            {
              title: "Admin Analytics",
              icon: <BarChart3 size={24} />,
              desc:
                "Real-time monitoring & hiring insights to track performance and opportunities",
              color: "bg-[#fff0fb] text-[#ff4fd8]",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              
              <div
                className={`h-14 w-14 rounded-2xl flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        
        <h2 className="text-3xl font-bold text-gray-800">
          How Zecpath{" "}
          <span className="text-[#0077ff]">
            Simplifies Hiring
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          
          {[
            {
              step: "1",
              title: "Create Profile",
              desc: "Sign up and add details",
              image:
                "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            },
            {
              step: "2",
              title: "AI Screening",
              desc: "Our AI filters matches jobs",
              image:
                "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
            },
            {
              step: "3",
              title: "Interview",
              desc: "Get screened via smart voice calls",
              image:
                "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
            },
            {
              step: "4",
              title: "Get Hired",
              desc: "Attend interview and get hired",
              image:
                "https://cdn-icons-png.flaticon.com/512/2784/2784487.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-6 shadow-sm border border-gray-200 text-center"
            >
              
              {/* STEP */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-[#0077ff] text-white flex items-center justify-center font-bold shadow-lg">
                {item.step}
              </div>

              <img
                src={item.image}
                alt={item.title}
                className="h-24 w-24 object-contain mx-auto mt-4"
              />

              <h3 className="mt-5 text-lg font-bold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500 leading-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 mt-16 pb-16">
        
        <div className="bg-[#0077ff] rounded-3xl p-10 text-center text-white shadow-xl">
          
          <h2 className="text-3xl font-bold">
            Ready to Launch Your Career?
          </h2>

          <p className="mt-4 text-blue-100 text-lg">
            Join 10,000+ professionals who found their dream
            jobs through zecpath
          </p>

           <button
      onClick={() => navigate("/login")}
      className="
        mt-8
        px-8
        py-3
        bg-white
        text-[#0077ff]
        rounded-2xl
        font-semibold
        hover:scale-105
        transition-all
        duration-300
      "
    >
      Create your Profile
    </button>
        </div>
      </section>
    </div>
  );
}