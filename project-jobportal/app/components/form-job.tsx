import { useEffect, useState } from "react";
import type { TErrorResponse, TJobCreate } from '../types/job.type';
import { jobService } from '../service/job-service';
import { redirect } from 'react-router';
import axios from "axios";
import { useNavigate } from "react-router";

function initialSkill() {

  const SKILL_SET = [
    {
      name: 'javascript'
    },
    {
      name: 'java'
    },
    {
      name: 'python'
    },
    {
      name: 'django'
    },
    {
      name: 'rust'
    }
  ];
  return SKILL_SET;
}

function generateJavaIntegerId() {
  // Ambil waktu epoch dalam detik (10 digit)
  const epochInSeconds = Math.floor(Date.now() / 1000);
  // Ambil 6 digit terakhir dari detik (0-999999)
  const shortTime = epochInSeconds % 1000000;
  const randomDigits = Math.floor(100 + Math.random() * 900);
  return parseInt(`${shortTime}${randomDigits}`, 10);
}

type FormJobProps = {
  jobId: number,
}

export default function FormJob({ jobId }: FormJobProps) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [initialJob, setInitialJob] = useState<TJobCreate>({
    postId: 0,
    postProfile: '',
    postDescription: '',
    reqExperience: 1,
    postTechStack: []
  });
  const [initialError, setInitialError] = useState<TErrorResponse>({
    timestamp: '',
    status: 0,
    message: '',
    details: {
      postProfile: '',
      postDescription: '',
      reqExperience: '',
      postTechStack: ''
    }
  });
  useEffect(() => {
    if (jobId && jobId != -1) {
      setIsEdit(true);
      loadJobData(jobId);
    }
  }, [jobId]);

  const loadJobData = async (id: number) => {
    try {
      const data = await jobService.findOneJob(id);
      setInitialJob(prevData => ({
        ...prevData,
        postId: data.postId,
        postProfile: data.postProfile,
        postDescription: data.postDescription,
        reqExperience: data.reqExperience,
        postTechStack: data.postTechStack
      }));
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (!err.response) {
          setInitialError((prevState) => ({
            ...prevState,
            message: 'Gagal mengambil data job. Server mati atau tidak terjangkau.'
          }));
        } else {
          console.error(err.response.data);
        }
      }
    }
  }

  const skill = initialSkill();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInitialJob(prevState => {
      if (prevState.postId !== 0) {
        return {
          ...prevState,
          [name]: value
        }
      } else {
        return {
          ...prevState,
          postId: generateJavaIntegerId(),
          [name]: value
        }
      }
    });
  }
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setInitialJob(prevState => {
      let updatedSkills = [...prevState.postTechStack];
      if (checked) {
        updatedSkills.push(name);
      } else {
        updatedSkills = updatedSkills.filter(skill => skill !== name);
      }
      return {
        ...prevState,
        postTechStack: updatedSkills
      }
    })
  }
  const isSkillChecked = (skillName: string) => {
    return initialJob.postTechStack.includes(skillName);
  }

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // send http here
      if (isEdit) {
        await jobService.updateJob(initialJob);
      } else {
        await jobService.createJob(initialJob);
      }
      navigate('/list-job');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          const errors = err.response?.data as TErrorResponse;
          setInitialError((prevState) => ({
            ...prevState,
            timestamp: errors.timestamp,
            status: errors.status,
            message: errors.message,
            details: errors.details
          }));
        } else {
          setInitialError((prevState) => ({
            ...prevState,
            status: 503,
            message: 'Gagal terhubung ke server. Pastikan server backend Anda sudah berjalan.',
            details: { ...prevState.details }
          }));
        }
      }
    }
  }
  return <>
    <div className='max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg space-y-6'>
      <div className="flex items-center justify-between border-b border-gray-200 pb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {isEdit ? 'Edit Job Posting' : 'Create New Job Posting'}
        </h2>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isEdit ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
          }`}>
          {isEdit ? 'EDIT MODE' : 'CREATE MODE'}
        </span>
      </div>
      {/* Tampilkan pesan error utama jika terjadi masalah server/koneksi */}
      {initialError.message && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm mb-4">
          {initialError.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className=''>
        <div className='space-y-1.5'>
          <label htmlFor="job-title" className='job-create-label'>Job Title</label>
          <input type="text" id="job-title" name='postProfile' value={initialJob.postProfile} onChange={handleInputChange} className='job-create-input' placeholder="Enter job title..." />
          {initialError.details.postProfile && <span className='text-xs text-red-500'>{initialError.details.postProfile}</span>}
        </div>
        <div className='space-y-1.5'>
          <label htmlFor="req-job-experience" className='job-create-label'>Required Job Experience</label>
          <input type="number" id='req-job-experience' name='reqExperience' value={initialJob.reqExperience} onChange={handleInputChange} className='job-create-input' min='1' max='20' placeholder="Years of experience..." />
          {initialError.details.reqExperience && <span className='text-xs text-red-500'>{initialError.details.reqExperience}</span>}
        </div>
        <div className='space-y-1.5'>
          <label htmlFor="job-desc" className='job-create-label'>Description job</label>
          <textarea
            id="job-desc"
            name='postDescription'
            value={initialJob.postDescription}
            onChange={handleInputChange}
            className='job-create-input resize-y min-h-25'
            placeholder="Describe the job requirements...">
          </textarea>
          {initialError.details.postDescription && <span className='text-xs text-red-500'>{initialError.details.postDescription}</span>}
        </div>
        <div className='space-y-3'>
          <label className="job-create-label">
            Required Skills
          </label>
          <ul className='grid grid-cols-2 md:grid-cols-3 gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200'>
            {skill.map((value, index) => (
              <>
                <li key={`${value.name}-${index}`} className="flex items-center space-x-2.5">
                  <input
                    id={`${value.name}-${index}`}
                    type="checkbox"
                    name={value.name}
                    checked={isSkillChecked(value.name)}
                    onChange={handleSkillChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" />
                  <label htmlFor={`${value.name}-${index}`} className="text-sm text-gray-700 cursor-pointer hover:text-blue-600 transition-colors">{value.name}</label>
                </li>
              </>
            ))}
          </ul>
          {initialError.details.postTechStack && <span className='text-xs text-red-500'>{initialError.details.postTechStack}</span>}
        </div>
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Submit Job
          </button>
        </div>
      </form>
    </div>

    <div className="max-w-2xl mx-auto mt-4 p-4 bg-gray-100 rounded-lg">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">Preview Data (Two-way Binding):</h4>
      <pre className="text-xs text-gray-600 whitespace-pre-wrap">
        {JSON.stringify(initialJob, null, 2)}
      </pre>
    </div>
  </>
}