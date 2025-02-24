import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: 'water',
  }),
  actions: {
    change(newWord: string) {
      this.word = newWord
    },
  },
})
