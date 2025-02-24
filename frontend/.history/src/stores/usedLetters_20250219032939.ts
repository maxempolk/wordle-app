import { defineStore } from 'pinia'
import { type KeyboardLetter } from '@/types/keyboardLetters'
import type { State } from '@/types/state'
import { stat } from 'fs'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    used: [] as KeyboardLetter[],
  }),
  getters: {
    letters: (state) => state.used,
  },
  actions: {
    add(letter: string, state: State) {
      this.used.push({ letter: letter, state: state })
    },
  },
})
