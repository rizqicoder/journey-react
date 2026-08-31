import axios from 'axios';
import type { AxiosInstance } from 'axios';

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Ganti dengan URL API Anda
  timeout: 10000, // 10 detik
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;