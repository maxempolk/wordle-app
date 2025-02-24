import { defineStore } from 'pinia';
import { getWord } from '@/api/getWord';

export const useGameStateStore = defineStore('gameState', {
  state: (): {} => ({
    word: null,
  }),
  actions: {
    async fetchWord(): Promise<void> {
      this.word = await getWord();
    },
  },
});

export type RealWordStore = ReturnType<typeof useRealWordStore>;
