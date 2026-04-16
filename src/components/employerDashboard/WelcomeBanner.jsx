export default function WelcomeBanner() {
  return (
    <div className="bg-zinc-800 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
        Welcome back! 👋
      </h1>

      <p className="text-gray-400 mt-2 text-sm sm:text-base lg:text-lg">
        Here's what's happening with your job postings today.
      </p>
    </div>
  );
}