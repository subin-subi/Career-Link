export default function ErrorMessage({ message }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      <div className="text-red-500 text-lg font-semibold">
        Something went wrong
      </div>

      <p className="text-gray-500 mt-2">
        {message || "Unable to load data. Please try again."}
      </p>
    </div>
  );
}
