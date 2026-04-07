

import API from "./api";

// GET all jobs
export const getJobs = async () => {
  const res = await API.get("/jobs");
  return res.data;
};

// CREATE job
export const createJob = async (jobData) => {
  const res = await API.post("/jobs", jobData);
  return res.data;
};

// UPDATE job
export const updateJob = async (id, jobData) => {
  const res = await API.put(`/jobs/${id}`, jobData);
  return res.data;
};

// APPLY for job
export const applyJob = async (jobId) => {
  const res = await API.post(`/jobs/${jobId}/apply`);
  return res.data;
};