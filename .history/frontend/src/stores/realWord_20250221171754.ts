import { defineStore } from 'pinia'
import { getWord } from '@/api/getWord'

export const useRealWordStore = defineStore('realWord', {
  state: async () => ({
    word: await getWord(),
  }),
})
