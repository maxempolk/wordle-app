import { api } from './index'

function getWord(){
  const response = await api.get('word');
}
