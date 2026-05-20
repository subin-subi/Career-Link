import {
  FiBell,
} from "react-icons/fi";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";

export default function NotificationDropdown() {

  const iconSize = 24;

  const [notifications, setNotifications] =
    useState([]);

  const [showDropdown, setShowDropdown] =
    useState(false);

  const dropdownRef = useRef();

  // Load Notifications
  useEffect(() => {

    const fakeNotifications = [
      {
        id: 1,
        title: "Arjun Nair",
        message: "started following you",
        time: "1m ago",
        read: false,
        image:
          "https://i.pravatar.cc/150?img=11",
      },

      {
        id: 2,
        title: "New Job Posted",
        message:
          "Frontend Developer role at Google.",
        time: "5m ago",
        read: false,
        image:
          "https://i.pravatar.cc/150?img=12",
      },

      {
        id: 3,
        title: "Akhil Raj",
        message: "liked your post",
        time: "12m ago",
        read: false,
        image:
          "https://i.pravatar.cc/150?img=13",
      },

      {
        id: 4,
        title: "Interview Scheduled",
        message:
          "Your interview is scheduled for tomorrow.",
        time: "1h ago",
        read: false,
        image:
          "https://i.pravatar.cc/150?img=14",
      },

      {
        id: 5,
        title: "Meera",
        message: "commented on your post",
        time: "2h ago",
        read: false,
        image:
          "https://i.pravatar.cc/150?img=15",
      },
    ];

    let savedNotifications =
      JSON.parse(
        localStorage.getItem("notifications")
      ) || [];

    if (savedNotifications.length === 0) {

      savedNotifications =
        fakeNotifications;

      localStorage.setItem(
        "notifications",
        JSON.stringify(savedNotifications)
      );
    }

    setNotifications(
      savedNotifications.slice(0, 5)
    );

  }, []);

  // Close Dropdown
  useEffect(() => {

    const handleClickOutside = (
      event
    ) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target
        )
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  const unreadCount =
    notifications.filter(
      (item) => !item.read
    ).length;

  return (
    <div
      className="relative"
      ref={dropdownRef}
    >

      {/* Bell */}
      <button
        onClick={() =>
          setShowDropdown(
            !showDropdown
          )
        }
        className="
        relative flex flex-col
        items-center hover:text-gray-300
        "
      >

        <FiBell size={24} />

        {/* Badge */}
        {unreadCount > 0 && (
          <span
            className="
            absolute -top-1 right-0
            bg-red-500 text-white
            text-[10px]
            min-w-[18px] h-[18px]
            rounded-full
            flex items-center
            justify-center px-1
            "
          >
            {unreadCount > 9
              ? "9+"
              : unreadCount}
          </span>
        )}

        <span className="text-xs mt-1">
          Notifications
        </span>
      </button>

      {/* Dropdown */}
      {showDropdown && (

        <div
          className="
          absolute right-0 mt-4
          w-[380px]
          bg-white rounded-2xl
          shadow-2xl overflow-hidden
          z-50
          "
        >

          {/* Header */}
          <div
            className="
            px-5 py-4 border-b
            "
          >
            <h2
              className="
              text-lg font-semibold
              text-black
              "
            >
              Notifications
            </h2>
          </div>

          {/* Notification List */}
          <div
            className="
            max-h-[350px]
            overflow-y-auto
            "
          >

            {notifications.map((item) => (

              <div
                key={item.id}
                className="
                flex gap-4 px-5 py-4
                border-b hover:bg-gray-50
                "
              >

                <img
                  src={item.image}
                  alt="user"
                  className="
                  w-10 h-10 rounded-full
                  object-cover
                  "
                />

                <div className="flex-1">

                  <h3
                    className="
                    font-semibold text-black
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-sm text-gray-600
                    "
                  >
                    {item.message}
                  </p>

                  <span
                    className="
                    text-xs text-gray-400
                    "
                  >
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <Link
            to="/notifications"
            className="
            block text-center
            py-4 font-medium
            text-blue-600
            hover:bg-gray-50
            "
          >
            View all notifications →
          </Link>
        </div>
      )}
    </div>
  );
}