import { useEffect, useState } from "react";

import Navbar from "../../../components/Navbar/Navbar";
import ProfileSidebar from "../../../components/Profile/ProfileSidebar";
import BottomNav from "../../JobSearch/BottomNav";
import { Bell } from "lucide-react";
export default function NotificationCenter() {

  const [notifications, setNotifications] =
    useState([]);

  // Load Notifications
  useEffect(() => {

    const savedNotifications =
      JSON.parse(
        localStorage.getItem("notifications")
      ) || [];

    // Mark Notifications Read
    const updatedNotifications =
      savedNotifications.map((item) => ({
        ...item,
        read: true,
      }));

    setNotifications(updatedNotifications);

    localStorage.setItem(
      "notifications",
      JSON.stringify(updatedNotifications)
    );

  }, []);

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div
        className="
        max-w-6xl mx-auto
        pt-30 flex gap-6 px-4
        "
      >

        {/* Sidebar */}
        <div className="hidden lg:block w-72">
          <div className="sticky top-24">
            <ProfileSidebar />
          </div>
        </div>

        {/* Notification Section */}
        <div className="flex-1 max-w-2xl w-full">

          {/* Title */}
          <h1
            className="
            text-3xl font-bold
            mb-8
            "
          >
            Notifications
          </h1>

          {/* Notification List */}
         <div
  className="
  space-y-5
  max-h-[75vh]
  overflow-y-auto
  pr-2
  "
>

            {notifications.length === 0 ? (

              <div
  className="
  flex flex-col items-center
  justify-center
  py-20 text-gray-400
  "
>
  <Bell size={50} />

  <p className="mt-4 text-lg">
    No Notifications
  </p>
</div>

            ) : (

              notifications.map((item, index) => (

                <div
                  key={item.id}
                  className={`
                  flex items-center gap-4
                  p-5 rounded-2xl
                  bg-[#2F2F39]
                  hover:bg-[#3A3A45]
                  hover:scale-[1.01]
                  transition-all
                  border

                  ${
                    index === 0
                      ? "border-blue-500"
                      : "border-transparent"
                  }
                  `}
                >

                  {/* Profile Image */}
                  <img
                    src={
                      item.image ||
                      "https://i.pravatar.cc/150?img=12"
                    }
                    alt="user"
                    className="
                    w-14 h-14
                    rounded-full
                    object-cover
                    "
                  />

                  {/* Content */}
                  <div className="flex-1">

                    <h3
                      className="
                      text-xl font-semibold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-sm text-gray-300
                      mt-1
                      "
                    >
                      {item.message}
                    </p>
                  </div>

                  {/* Time */}
                  <div
                    className="
                    text-sm text-gray-400
                    whitespace-nowrap
                    "
                  >
                    {item.time}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}