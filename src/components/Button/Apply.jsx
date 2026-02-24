import { useNavigate } from "react-router-dom";
import { FiSend } from "react-icons/fi";

export default function ApplyButton({ to = "/job-apply" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="px-4 py-2 text-sm rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 transition flex items-center gap-2"
    >
      <FiSend size={14} />
      Apply Now
    </button>
  );
}