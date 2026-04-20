const styles = {
  Pending: "bg-yellow-100 text-yellow-700",
  Shortlisted: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function StatusBadge({ status }) {
  const baseStyle =
    "inline-flex items-center px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full font-medium";

  const statusStyle = styles[status] || "bg-gray-100 text-gray-600";

  return (
    <span className={`${baseStyle} ${statusStyle}`}>
      {status}
    </span>
  );
}