// import { AxiosError } from 'axios';
import { api } from './index'
import { AxiosError } from 'axios';

interface isRealResponse {
  isReal: boolean;
}

export async function getWord(word: string): Promise<boolean | null> {
try {
    const response = await api.get<isRealResponse>('/isReal', {
      params: {
        word: word
      }
    });
    return response.data.isReal;
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
