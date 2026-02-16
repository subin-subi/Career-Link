import React from "react";

export default function FeedOne() {
  return (
    <div className="space-y-4 px-3 sm:px-0">

      {/* Create Post */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt="user"
            className="w-10 h-10 rounded-full"
          />

          <input
            type="text"
            placeholder="Start a post, Mike..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
          />
        </div>

        <div className="flex justify-around mt-4 text-gray-600 text-sm">
          <button>📷 Media</button>
          <button>📅 Event</button>
          <button>📝 Write article</button>
        </div>
      </div>

      {/* Post Card */}
      <div className="bg-white rounded-xl shadow p-4">
        <div className="flex items-center gap-3 mb-3">
          <img
            src="https://picsum.photos/40"
            alt="company"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">TechCorp Inc.</h3>
            <p className="text-sm text-gray-500">
              Human Resources · 2h ago
            </p>
          </div>
        </div>

        <h2 className="font-semibold text-lg mb-2">🚀 We are Hiring!</h2>

        <p className="mb-2">
          Looking for a{" "}
          <span className="text-blue-600 font-medium">
            Senior React Developer
          </span>{" "}
          to join our remote team.
        </p>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          <li>5+ Years Experience</li>
          <li>React, Tailwind, Node.js</li>
          <li>Remote / Hybrid Options</li>
        </ul>

        <p className="mt-3 text-sm">
          Apply directly or DM me for more info! #Hiring #ReactJS #RemoteJobs
        </p>

        <img
          src="https://picsum.photos/600/300"
          alt="post"
          className="rounded-lg mt-4 w-full"
        />
      </div>

    </div>
  );
}
