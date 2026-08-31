import type { TJob } from "~/types/job.type"
import JobItem from "./job-item";

type JobContainerProps = {
  jobs: TJob[];
  onDelete: (id: number) => void,
  onUpdate: (id: number) => void
}

export default function JobContainer({ jobs, onDelete, onUpdate }: JobContainerProps) {
  return <>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full p-4">
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} onDeleteJob={onDelete} onUpdateJob={onUpdate} />
      ))}
    </div>
  </>
}