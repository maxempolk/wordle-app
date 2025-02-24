// import { AxiosError } from 'axios';
import { api } from './index'

export async function getWord(): Promise<string | null> {
  try {
    const response = await axios.get<WordResponse>('/word');
    return response.data.word;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('API error:', error.message);
      // Можно добавить дополнительную логику в зависимости от статуса
      if (error.response?.status === 404) {
        console.error('Word not found');
      }
    } else {
      console.error('Unexpected error:', error);
    }
    return null;
  }
}
