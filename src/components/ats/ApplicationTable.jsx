import { useState } from "react";
import { applications as initialData } from "../../data/applications";
import StatusBadge from "./StatusBadge";
import ActionButtons from "./ActionButtons";
import Filters from "./Filters";
import { useTheme } from "../../context/ThemeContext";

export default function ApplicationTable() {
  const [data, setData] = useState(initialData);

  const { theme } = useTheme();

  const updateStatus = (id, status) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  return (
    <div
      className={`
        ${theme.cardBg}
        ${theme.border}
        ${theme.shadowMd}
        border
        rounded-2xl
        p-6
        transition-all
        duration-300
      `}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <h2
            className={`
              text-2xl
              font-bold
              ${theme.textPrimary}
            `}
          >
            Applications
          </h2>

          <p
            className={`
              text-sm
              mt-1
              ${theme.textMuted}
            `}
          >
            Manage and review candidate applications
          </p>
        </div>

        <div
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            ${theme.infoBg}
            ${theme.infoText}
          `}
        >
          Total: {data.length} Applications
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6">
        <Filters />
      </div>

      {/* Desktop Table */}
      <div
        className={`
          hidden
          md:block
          overflow-hidden
          rounded-2xl
          border
          ${theme.border}
        `}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead
              className={`
                ${theme.bg}
                border-b
                ${theme.border}
              `}
            >
              <tr>
                <th
                  className={`
                    py-4
                    px-6
                    text-left
                    font-semibold
                    ${theme.textSecondary}
                  `}
                >
                  Candidate
                </th>

                <th
                  className={`
                    px-6
                    text-left
                    font-semibold
                    ${theme.textSecondary}
                  `}
                >
                  Position
                </th>

                <th
                  className={`
                    px-6
                    text-center
                    font-semibold
                    ${theme.textSecondary}
                  `}
                >
                  Status
                </th>

                <th
                  className={`
                    px-6
                    text-left
                    font-semibold
                    ${theme.textSecondary}
                  `}
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((app, index) => (
                <tr
                  key={app.id}
                  className={`
                    border-b
                    ${theme.border}
                    ${theme.hover}
                    transition-all
                    duration-200
                  `}
                >
                  {/* Candidate */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`
                          h-11
                          w-11
                          rounded-full
                          flex
                          items-center
                          justify-center
                          text-sm
                          font-bold
                          ${theme.profilePrimary}
                          ${theme.primaryText}
                        `}
                      >
                        {app.name.charAt(0)}
                      </div>

                      <div>
                        <h3
                          className={`
                            font-semibold
                            ${theme.textPrimary}
                          `}
                        >
                          {app.name}
                        </h3>

                        <p
                          className={`
                            text-xs
                            mt-1
                            ${theme.textMuted}
                          `}
                        >
                          Candidate #{index + 1}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Position */}
                  <td
                    className={`
                      px-6
                      font-medium
                      ${theme.textPrimary}
                    `}
                  >
                    {app.role}
                  </td>

                  {/* Status */}
                  <td className="px-6 text-center">
                    <StatusBadge status={app.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-6">
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
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {data.map((app, index) => (
          <div
            key={app.id}
            className={`
              border
              rounded-2xl
              p-4
              ${theme.cardBg}
              ${theme.border}
              ${theme.shadow}
            `}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`
                    h-12
                    w-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    font-bold
                    ${theme.profilePrimary}
                    ${theme.primaryText}
                  `}
                >
                  {app.name.charAt(0)}
                </div>

                <div>
                  <h3
                    className={`
                      font-semibold
                      ${theme.textPrimary}
                    `}
                  >
                    {app.name}
                  </h3>

                  <p
                    className={`
                      text-sm
                      mt-1
                      ${theme.textMuted}
                    `}
                  >
                    Candidate #{index + 1}
                  </p>
                </div>
              </div>

              <StatusBadge status={app.status} />
            </div>

            <div
              className={`
                mt-4
                p-3
                rounded-xl
                ${theme.bg}
              `}
            >
              <p
                className={`
                  text-xs
                  uppercase
                  tracking-wide
                  ${theme.textMuted}
                `}
              >
                Applied Position
              </p>

              <p
                className={`
                  mt-1
                  font-medium
                  ${theme.textPrimary}
                `}
              >
                {app.role}
              </p>
            </div>

            <div className="mt-4">
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

      {/* Pagination */}
      <div
        className={`
          flex
          items-center
          justify-between
          mt-6
          pt-4
          border-t
          ${theme.border}
        `}
      >
        <button
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            border
            transition-all
            duration-200
            ${theme.border}
            ${theme.textSecondary}
            ${theme.hover}
          `}
        >
          ← Previous
        </button>

        <div
          className={`
            text-sm
            font-medium
            ${theme.textMuted}
          `}
        >
          Page 1 of 15
        </div>

        <button
          className={`
            px-4
            py-2
            rounded-xl
            text-sm
            font-medium
            text-white
            transition-all
            duration-200
            ${theme.primary}
            ${theme.primaryHover}
          `}
        >
          Next →
        </button>
      </div>
    </div>
  );
}