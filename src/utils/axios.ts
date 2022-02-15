import Axios from 'axios'
import { getToken } from './auth';

const axiosInstance = Axios.create({
  baseURL: process.env.REACT_APP_API_URL || process.env.API_URL || 'http://localhost:5000',
  timeout: 1000
});

axiosInstance.interceptors.request.use((config) => {
  const token = getToken()
  // eslint-disable-next-line no-param-reassign
  if (token) { config.headers.Authorization = `Bearer ${token}` }
  return config;
});

export const axios = axiosInstance
