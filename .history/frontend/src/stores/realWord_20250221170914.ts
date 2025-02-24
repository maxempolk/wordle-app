import { defineStore } from 'pinia'
import {getWord} from '@/api/getWord'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: getWord(),
  }),

})
