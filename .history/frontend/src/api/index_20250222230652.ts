import axios from "axios";



export const api = axios.create(
  // baseURL: '/api',
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
);
