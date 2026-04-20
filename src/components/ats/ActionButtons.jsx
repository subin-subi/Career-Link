export default function ActionButtons({ onShortlist, onReject }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
      <button
        onClick={onShortlist}
        className="w-full sm:w-auto bg-green-600 text-white text-xs sm:text-sm px-3 py-2 rounded hover:bg-green-700 transition"
      >
        Shortlist
      </button>

      <button
        onClick={onReject}
        className="w-full sm:w-auto bg-red-500 text-white text-xs sm:text-sm px-3 py-2 rounded hover:bg-red-600 transition"
      >
        Reject
      </button>
    </div>
  );
}