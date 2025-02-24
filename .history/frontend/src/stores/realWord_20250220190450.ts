import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: 'Agent',
  }),
  actions: {
    change(newWord: string) {
      this.word = newWord
    },
  },
})
