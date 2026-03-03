export default function ProfileTabs() {
  return (
    <div className="overflow-x-auto border-b">
      <div className="flex gap-6 px-4 md:px-6 whitespace-nowrap">
        <button className="py-3 border-b-2 border-blue-600 text-blue-600 font-medium">
          Profile
        </button>
        <button className="py-3">Resume</button>
        <button className="py-3">Skills</button>
        <button className="py-3">Portfolio</button>
      </div>
    </div>
  );
}