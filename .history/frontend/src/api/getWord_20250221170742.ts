import { AxiosError } from 'axios';
import { api } from './index'

async function getWord(): Promise<string>{
  const response = await api.get('word');
  try{
    return response.data.word
  }catch(error){
    // if(error instanceof AxiosError) console.log("Internet error")
    return null
  }
}
