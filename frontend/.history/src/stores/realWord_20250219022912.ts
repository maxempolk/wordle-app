import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    word: '0',
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
