export default function ActionButtons({ onShortlist, onReject }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      
      <button
        onClick={onShortlist}
        className="w-full sm:w-auto bg-green-800 text-white text-xs sm:text-sm px-3 py-2 rounded hover:bg-green-900 transition"
      >
        Shortlist
      </button>

      <button
        onClick={onReject}
        className="w-full sm:w-auto bg-red-700 text-white text-xs sm:text-sm px-3 py-2 rounded hover:bg-red-800 transition"
      >
        Reject
      </button>

    </div>
  );
}