import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Базовый URL вашего FastAPI backend
  timeout: 5000, // Таймаут запроса (в миллисекундах)
  headers: {
    'Content-Type': 'application/json',
  },
});
