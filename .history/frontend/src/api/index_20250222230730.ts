import axios from "axios";



export const api = axios.create(
  // baseURL: '/api',
  baseURL: import.meta.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
);
