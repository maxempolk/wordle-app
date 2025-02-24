// import { AxiosError } from 'axios';
import axios, { AxiosError } from 'axios';

// Определяем интерфейс для ожидаемого ответа
interface WordResponse {
  word: string;
}

export async function getWord(): Promise<string | null> {
  try {
    const response = await axios.get<WordResponse>('/word');
    return response.data.word;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API error:', error.message);
      if (error.response?.status === 404) {
        console.error('Word not found');
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}
