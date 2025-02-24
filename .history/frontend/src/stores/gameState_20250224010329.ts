import { defineStore } from 'pinia';
import { getWord } from '@/api/getWord';

interface gameState{

}

export const useGameStateStore = defineStore('gameState', {
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
