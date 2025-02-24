import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', {
  state: () => ({
    used: [] as string[],
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
