import React from "react";

export default function RightSidebar() {
  return (
    <div className="w-full max-w-xs space-y-4 text-sm">

      {/* Messages Card */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h2 className="font-semibold text-base mb-3">Messages</h2>

        <div className="space-y-3">
          {/* Message Item */}
          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=5"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold text-xs">Priya Sharma</p>
              <p className="text-[11px] text-gray-500 truncate">
                Hey, are you available for a quick call?
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold text-xs">James Wilson</p>
              <p className="text-[11px] text-gray-500 truncate">
                Sent you the design files.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=32"
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="font-semibold text-xs">Elena Rodriguez</p>
              <p className="text-[11px] text-gray-500 truncate">
                Great work on the project!
              </p>
            </div>
          </div>
        </div>

        <button className="mt-3 text-xs text-gray-500 hover:text-gray-700">
          Show more
        </button>
      </div>

      {/* News Card */}
      <div className="bg-white rounded-xl shadow-sm p-4">
        <h2 className="font-semibold text-base mb-3">News</h2>

        <ul className="space-y-2">
          <li>
            <p className="font-medium text-xs">
              Global Tech Summit 2026 announced
            </p>
            <p className="text-[11px] text-gray-500">
              1h ago • 12,400 readers
            </p>
          </li>

          <li>
            <p className="font-medium text-xs">
              Crypto market sees new high
            </p>
            <p className="text-[11px] text-gray-500">
              4h ago • 8,900 readers
            </p>
          </li>

          <li>
            <p className="font-medium text-xs">
              10 Startups watching in 2026
            </p>
            <p className="text-[11px] text-gray-500">
              6h ago • 34,200 readers
            </p>
          </li>

          <li>
            <p className="font-medium text-xs">
              New strict AI laws passed
            </p>
            <p className="text-[11px] text-gray-500">
              12h ago • 15,100 readers
            </p>
          </li>

          <li>
            <p className="font-medium text-xs">
              Design trends for next year
            </p>
            <p className="text-[11px] text-gray-500">
              1d ago • 22,700 readers
            </p>
          </li>
        </ul>

        <button className="mt-3 text-xs text-gray-500 hover:text-gray-700">
          Show more
        </button>
      </div>

    </div>
  );
}
