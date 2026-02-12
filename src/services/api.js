// src/services/api.js
export const fetchRemoteJobs = async () => {
  const response = await fetch("https://remotive.com/api/remote-jobs");

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();
  return data.jobs.slice(0, 4);
};
