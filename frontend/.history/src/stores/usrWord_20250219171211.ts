import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: '',
  }),
  getters: {
    popLetter = () => {
      currentWord.value = currentWord.value.slice(0, -1)
    },
  },
  actions: {
    change(newWord: string) {
      this.word = newWord
    },
  },
})
