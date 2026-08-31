import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import JobContainer from "~/components/job-container";
import { jobService } from "~/service/job-service";
import type { TJob } from "~/types/job.type";

export default function ListJobPages() {
  const navigate = useNavigate();
  const [job, setJob] = useState<TJob[]>([]);
  useEffect(() => {
    async function fetchJob() {
      try {
        const data = await jobService.findAllJob();
        setJob(prevData => ([...prevData, ...data]));
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.error(err.response?.data);
        }
      }
    }
    fetchJob();
  }, []);

  const handleDeleteJob = (id: number) => {
    try {
      jobService.deleteJob(id);
      setJob(prevData => prevData.filter(job => job.postId !== id));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data);
      }
    }
  }

  const handleUpdateJon = (id: number) => {
    // navigate(`/edit-job/${job.id}`, { state: { job } });
    navigate(`/edit-job/${id}`);
  }

  if (job.length < 1) {
    return <>
      <div className="flex flex-col items-center justify-center p-8 m-4 text-center border-2 border-dashed rounded-xl border-gray-300 bg-gray-50/50">
        <h1 className="text-xl font-bold text-gray-800 mb-1">
          No content for now
        </h1>
        <p className="text-sm text-gray-500">
          Please create a new job to get started.
        </p>
      </div>
    </>
  }

  return <>
    <h1 className="text-xl font-bold text-gray-800 mb-1 p-4">
      list of job
    </h1>
    <JobContainer jobs={job} onDelete={handleDeleteJob} onUpdate={handleUpdateJon} />
  </>
}