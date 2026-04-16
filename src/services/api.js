import { BASE_URL, JOBS_ENDPOINT } from "../constant/apiConstants";
export const fetchRemoteJobs = async () => {
   const response = await fetch(`${BASE_URL}${JOBS_ENDPOINT}`);;

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();
  return data.jobs.slice(0, 5);
};
