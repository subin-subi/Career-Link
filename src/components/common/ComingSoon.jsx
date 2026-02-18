export default function ComingSoon({ title, message }) {
  return (
    <div className="flex items-center justify-center min-h-[70vh]">
      <div className="bg-zinc-900 text-white p-10 rounded-2xl shadow-lg text-center border border-zinc-700">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-400">{message}</p>
      </div>
    </div>
  );
}
