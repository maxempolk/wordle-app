import { defineStore } from 'pinia'
import { getWord } from '@/api/getWord'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: null,
  }),
  actions: {
    async fetchWord() {
      this.word = await getWord(); // Обновляем состояние асинхронно
    },
  },
})
