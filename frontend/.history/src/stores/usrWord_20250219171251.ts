import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: '',
  }),
  getters: {},
  actions: {
    popLetter: () => {
      this.state.word = this.word.slice(0, -1)
    },
  },
})
