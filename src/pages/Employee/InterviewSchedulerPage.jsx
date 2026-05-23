import Navbar from "../../components/Navbar/Navbar";

export default function InterviewSchedulerPage() {
  const calendarDays = [
    { day: 'Mon', date: 12 },
    { day: 'Tue', date: 13 },
    { day: 'Wed', date: 14 },
    { day: 'Thu', date: 15, active: true },
    { day: 'Fri', date: 16 },
    { day: 'Sat', date: 17 },
    { day: 'Sun', date: 18 },
  ];

  const slots = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
  ];

  const interviews = [
    {
      candidate: 'Arjun Nair',
      role: 'Frontend Developer',
      time: '10:00 AM',
      status: 'Scheduled',
    },
    {
      candidate: 'Maya Joseph',
      role: 'Backend Developer',
      time: '01:00 PM',
      status: 'Completed',
    },
    {
      candidate: 'Rahul Das',
      role: 'UI/UX Designer',
      time: '03:00 PM',
      status: 'Pending',
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Scheduled':
        return 'bg-blue-100 text-blue-700';
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-28">
        <Navbar/>
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Interview Scheduler
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage interview schedules, slots, and candidate statuses.
            </p>
          </div>

          <button className="rounded-2xl bg-[#1B365D] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02]">
            + Schedule Interview
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Calendar Section */}
          <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Calendar View
                </h2>
                <p className="text-sm text-gray-500">
                  Select a date for interviews.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600">
                August 2026
              </div>
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-3">
              {calendarDays.map((item, index) => (
                <div
                  key={index}
                  className={`flex cursor-pointer flex-col items-center rounded-2xl border p-4 transition-all hover:shadow-md ${
                    item.active
                      ? 'border-[#1B365D] bg-[#1B365D] text-white'
                      : 'border-gray-200 bg-gray-50 text-gray-800'
                  }`}
                >
                  <span className="text-sm font-medium">{item.day}</span>
                  <span className="mt-2 text-xl font-bold">{item.date}</span>
                </div>
              ))}
            </div>

            {/* Slot Selection */}
            <div className="mt-8">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Slot Selection
                  </h2>
                  <p className="text-sm text-gray-500">
                    Choose an available interview slot.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {slots.map((slot, index) => (
                  <button
                    key={index}
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold transition-all hover:shadow-md ${
                      index === 2
                        ? 'border-[#1B365D] bg-[#1B365D] text-white'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-[#1B365D]'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Status Section */}
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Interview Status
              </h2>
              <p className="text-sm text-gray-500">
                Track ongoing and completed interviews.
              </p>
            </div>

            <div className="space-y-4">
              {interviews.map((interview, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-100 bg-gray-50 p-4 transition hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-gray-900">
                        {interview.candidate}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {interview.role}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(
                        interview.status
                      )}`}
                    >
                      {interview.status}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-sm">
                    <span className="text-gray-500">Interview Time</span>
                    <span className="font-semibold text-gray-800">
                      {interview.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-blue-50 p-4">
                <h4 className="text-sm font-medium text-blue-700">
                  Scheduled
                </h4>
                <p className="mt-2 text-2xl font-bold text-blue-900">12</p>
              </div>

              <div className="rounded-2xl bg-green-50 p-4">
                <h4 className="text-sm font-medium text-green-700">
                  Completed
                </h4>
                <p className="mt-2 text-2xl font-bold text-green-900">08</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
