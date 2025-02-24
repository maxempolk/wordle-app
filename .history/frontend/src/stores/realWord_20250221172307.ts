import { defineStore } from 'pinia';

interface RealWordState {
  word: string | null;
}



export const useRealWordStore = defineStore('realWord', {
  state: (): RealWordState => ({
    word: null,
  }),
  actions: {
    async fetchWord(): Promise<void> {
      this.word = await getWord();
    },
  },
});

export type RealWordStore = ReturnType<typeof useRealWordStore>;
