import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: '',
  }),
  getters: {},
  actions: {
    popLetter() {
      this.word = this.word.slice(0, -1)
    },
    addLetter(letter: string) {
      if (isLetter(letter)) currentWord.value += letter
    },
  },
})
