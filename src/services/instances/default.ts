import axios, { AxiosInstance } from 'axios';

export const appApi: AxiosInstance = axios.create({
  baseURL: `http://${import.meta.env.VITE_APP_BASE_URL}:${import.meta.env.VITE_APP_BASE_PORT}/api`,
  headers: {
    'Content-type': 'application/json',
  },
});
