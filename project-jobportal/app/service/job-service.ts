import type { TJob, TJobCreate } from "~/types/job.type";
import apiClient from './api';

export const jobService = {
  createJob: async (payload: TJobCreate): Promise<TJobCreate> => {
    const response = await apiClient.post<TJobCreate>('/alljob', payload);
    return response.data;
  },
  findAllJob: async (): Promise<TJob[]> => {
    const response = await apiClient.get<TJob[]>('/alljob');
    return response.data;
  },
  findOneJob: async (id: number): Promise<TJobCreate> => {
    const response = await apiClient.get<TJobCreate>(`/alljob/${id}`);
    return response.data;
  },
  updateJob: async (payload: TJobCreate): Promise<TJobCreate> => {
    console.log(payload);
    const response = await apiClient.put<TJobCreate>('/alljob', payload);
    return response.data;
  },
  deleteJob: async (id: number): Promise<TJobCreate> => {
    const response = await apiClient.delete<TJobCreate>(`/alljob/${id}`);
    return response.data;
  }
}