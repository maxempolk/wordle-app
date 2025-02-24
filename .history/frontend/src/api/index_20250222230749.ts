import axios from "axios";



export const api = axios.create(
  baseURL: 'asf',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
);
