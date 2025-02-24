import { defineStore } from 'pinia'
import { getWord } from '@/api/getWord'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: null, // Начальное значение
  }),
  actions: {
    async fetchWord() {
      this.word = await getWord(); // Обновляем состояние асинхронно
    },
  },
})
