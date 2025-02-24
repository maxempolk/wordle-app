import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: 'penis',
  }),
  getters: {
    wordValue: (state) => state.word,
  },
  actions: {
    change(newWord: string) {
      this.word = newWord
    },
  },
})
