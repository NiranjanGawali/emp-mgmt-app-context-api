import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

AxiosInstance.interceptors.request.use((config) => {
  let token = JSON.parse(localStorage.getItem('token'));
  config.headers['token'] = token;
  return config;
});

export default AxiosInstance;
