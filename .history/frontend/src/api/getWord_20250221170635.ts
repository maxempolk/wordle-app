import { AxiosError } from 'axios';
import { api } from './index'

async function getWord(){
  const response = await api.get('word');
  try{
    return response
  }catch(error){
    if(error instanceof AxiosError) console.log("Internet error")
    return ''
  }
}
