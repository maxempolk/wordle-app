import { defineStore } from 'pinia'
import { type KeyboardLetter } from '@/types/keyboardLetters'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    used: [] as KeyboardLetter[],
  }),
  getters: {
    letters: (state) => state.used,
  },
  actions: {
    add(letter: string) {
      this.used.push(letter)
    },
  },
})
