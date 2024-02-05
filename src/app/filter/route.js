// pages/api/job/[id].js
// import { getJobById } from '../../../prisma/jobs';
import { getJobById } from "../../../../../prisma/jobs";

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const jobId = parseInt(id, 10);

    if (isNaN(jobId)) {
      return res.status(400).json({ error: "Invalid job ID" });
    }

    const job = await getJobById(jobId);

    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    return res.status(200).json({ job });
  } catch (error) {
    console.error("Error fetching job data:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
