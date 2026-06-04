import {
  ClipboardList,
  Users,
  MessageCircle,
  Hand,
  PencilLine,
  ShieldCheck,
  Clock,
  Scale,
  Lock,
  FileText,
  CheckCircle,
  Info,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState} from "react";
import Navbar from "../../../components/Navbar/Navbar";

const instructions = [
  {
    icon: ClipboardList,
    title: "Review Candidate Profile",
    desc: "Go through the candidate's resume and role requirements before the interview.",
  },
  {
    icon: MessageCircle,
    title: "Use Structured Questions",
    desc: "Ask role-specific, structured questions to ensure consistency and fairness.",
  },
  {
    icon: Hand,
    title: "Avoid Bias",
    desc: "Do not ask questions related to age, gender, religion, marital status, or sensitive topics.",
  },
  {
    icon: PencilLine,
    title: "Take Accurate Notes",
    desc: "Document your observations and candidate responses honestly and objectively.",
  },
  {
    icon: ShieldCheck,
    title: "Maintain Confidentiality",
    desc: "Do not share candidate information with anyone outside the hiring team.",
  },
  {
    icon: Clock,
    title: "Be Punctual",
    desc: "Join on time and respect the candidate's time throughout the process.",
  },
];

const compliance = [
  {
    icon: Scale,
    title: "Equal Opportunity Compliance",
    desc: "Ensure a fair process for all candidates without discrimination.",
  },
  {
    icon: Lock,
    title: "Data Privacy",
    desc: "Handle candidate data in accordance with our Data Privacy Policy.",
  },
  {
    icon: FileText,
    title: "Confidentiality Agreement",
    desc: "Maintain confidentiality of all candidate and company information.",
  },
  {
    icon: ShieldCheck,
    title: "Interview Recording Policy",
    desc: "Record interviews only with prior approval and as per company policy.",
  },
  {
    icon: FileText,
    title: "Documentation",
    desc: "Ensure all feedback and evaluations are submitted accurately.",
  },
];



export default function InterviewInstructions() {

   const [accepted, setAccepted] = useState(false);
const [redirecting, setRedirecting] = useState(false);
const [countdown, setCountdown] = useState(5);
const handleProceed = () => {
  setRedirecting(true);

  let timer = 5;
  setCountdown(timer);

  const interval = setInterval(() => {
    timer--;

    setCountdown(timer);

    if (timer === 0) {
      clearInterval(interval);
      navigate("/interview");
    }
  }, 1000);
};


    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-6">
     <div className="max-w-5xl mx-auto">

        <nav className="bg-white border rounded-xl shadow-sm px-6 py-4 mb-6">
        <Navbar/>
      </nav>
        {/* Header */}
        <h1 className="text-3xl font-bold text-slate-800 pt-10">
          Interview Instructions & Compliance
        </h1>

        <p className="text-slate-500 mt-2">
          Please review the instructions and comply with all requirements before
          conducting the interview.
        </p>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Left Card */}
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <ClipboardList className="text-blue-600" />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Interview Instructions
                </h2>

                <p className="text-sm text-slate-500">
                  Guidelines to ensure a fair, consistent and professional
                  interview process.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {instructions.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 border-t pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="h-11 w-11 rounded-full bg-blue-50 flex items-center justify-center">
                    <item.icon size={20} className="text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-800">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-6 border border-blue-200 bg-blue-50 rounded-xl p-4">
              <div className="flex gap-3">
                <Info className="text-blue-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-700">Note</h4>
                  <p className="text-sm text-slate-500">
                    Failure to follow these instructions may affect the
                    integrity of the interview process.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="bg-white rounded-2xl border shadow-sm p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                <ShieldCheck className="text-green-600" />
              </div>

              <div>
                <h2 className="font-semibold text-lg">
                  Compliance Requirements
                </h2>

                <p className="text-sm text-slate-500">
                  Ensure you comply with company policies and legal
                  requirements.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {compliance.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start border-t pt-4 first:border-t-0 first:pt-0"
                >
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-full bg-green-50 flex items-center justify-center">
                      <item.icon size={20} className="text-green-600" />
                    </div>

                    <div>
                      <h3 className="font-medium text-slate-800">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">
                    Compliant ✓
                  </span>
                </div>
              ))}
            </div>

            {/* Checkbox */}
            <div className="mt-6 border border-green-200 bg-green-50 rounded-xl p-4">
  <label className="flex items-start gap-3 cursor-pointer">
    <input
      type="checkbox"
      checked={accepted}
      onChange={(e) => setAccepted(e.target.checked)}
      className="mt-1 h-4 w-4 accent-green-600"
    />

    <span className="text-sm text-slate-700">
      I have read and understood all the instructions and
      compliance requirements. I agree to follow them.
    </span>
  </label>
</div>

            {/* Button */}
      <button
  disabled={!accepted || redirecting}
  onClick={handleProceed}
  className={`w-full mt-5 text-white font-medium py-3 rounded-xl transition duration-300
    ${
      redirecting
        ? "bg-blue-600"
        : accepted
        ? "bg-green-600 hover:bg-green-700"
        : "bg-red-500 cursor-not-allowed opacity-70"
    }`}
>
  {redirecting
    ? `Starting Interview in ${countdown}s...`
    : accepted
    ? "I Agree & Proceed"
    : "Accept Instructions First"}
</button>

          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center gap-2 mt-8 text-sm text-slate-500">
          <ShieldCheck size={16} />
          <span>
            Your compliance ensures a fair and respectful experience for every
            candidate.
          </span>
        </div>
      </div>
    </div>
  );
}