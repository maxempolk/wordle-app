import { defineStore } from 'pinia';
import { getWord } from '@/api/getWord';

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
