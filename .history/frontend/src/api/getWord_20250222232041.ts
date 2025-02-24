// import { AxiosError } from 'axios';
import { api } from './index'

export async function getWord(): Promise<string | null>{
  const response = await api.get('/word');
  try{
    return response.data.word
  }catch(error){
    // if(error instanceof AxiosError) console.log("Internet error")
    console.log( 123 )
    return null
  }
}
