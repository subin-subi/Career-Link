import API from "./api";

// GET jobs
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

// POST job
export const createJob = async (jobData) => {
  const res = await API.post("/jobs", jobData);
  return res.data;
};