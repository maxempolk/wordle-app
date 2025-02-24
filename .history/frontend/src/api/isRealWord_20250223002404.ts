// import { AxiosError } from 'axios';
import { api } from './index'
import { AxiosError } from 'axios';

interface isRealResponse {
  isReal: string;
}

export async function getWord(word: string): Promise<string | null> {
  try {
    const response = await api.get<WordResponse>('/isReal', {
      params: {
        word: word
      }
    });
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
