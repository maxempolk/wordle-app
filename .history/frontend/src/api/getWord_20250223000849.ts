// import { AxiosError } from 'axios';
import { api } from './index'
import { AxiosError } from 'axios';

interface WordResponse {
  word: string;
}

export async function getWord(): Promise<string | null> {
  try {
    console.log(  )
    const response = await api.get<WordResponse>('/word');
    console.log( response)
    return response.data.word;
  } catch (error) {
    console.log( 231 )
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
