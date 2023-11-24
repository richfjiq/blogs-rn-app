import axios from 'axios';

export const blogsApi = axios.create({
  baseURL: 'https://blogs-api-f5in.onrender.com/api',
});
