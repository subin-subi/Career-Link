import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ text }) {
  return (
    <div className="flex justify-center">
      <button className="bg-white p-3 rounded-full shadow hover:shadow-md flex items-center gap-2 px-6">
        <FcGoogle size={22} />
        {text && <span className="text-sm font-medium">{text}</span>}
      </button>
    </div>
  );
}
