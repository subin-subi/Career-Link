import { useState } from "react";
import { applications as initialData } from "../../data/applications";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";
import Filters from "./Filters";

export default function ApplicationTable() {
  const [data, setData] = useState(initialData);

  const updateStatus = (id, status) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow border">
      <h2 className="text-lg font-semibold mb-4">Applications</h2>

      <Filters />

      {/* 🔹 Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 text-left">Name</th>
              <th className="text-left">Position</th>
              <th>Status</th>
              <th className="text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((app) => (
              <tr key={app.id} className="border-b hover:bg-gray-50">
                <td className="py-3">{app.name}</td>
                <td>{app.role}</td>
                <td>
                  <StatusBadge status={app.status} />
                </td>
                <td>
                  <ActionButtons
                    onShortlist={() =>
                      updateStatus(app.id, "Shortlisted")
                    }
                    onReject={() =>
                      updateStatus(app.id, "Rejected")
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 🔹 Mobile Card Layout */}
      <div className="md:hidden space-y-4">
        {data.map((app) => (
          <div
            key={app.id}
            className="border rounded-lg p-3 shadow-sm"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-medium">{app.name}</h3>
              <StatusBadge status={app.status} />
            </div>

            <p className="text-sm text-gray-500 mt-1">
              {app.role}
            </p>

            <div className="mt-3">
              <ActionButtons
                onShortlist={() =>
                  updateStatus(app.id, "Shortlisted")
                }
                onReject={() =>
                  updateStatus(app.id, "Rejected")
                }
              />
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Pagination */}
      <div className="flex justify-center items-center gap-4 mt-4 text-sm text-gray-500">
        <span className="cursor-pointer">‹</span>
        <span>Page 1 of 15</span>
        <span className="text-blue-500 cursor-pointer">Next ›</span>
      </div>
    </div>
  );
}