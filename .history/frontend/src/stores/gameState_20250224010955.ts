// stores/gameState.ts
import { defineStore } from 'pinia';
import { GameState } from '@/types/state';
// 'in-game' | 'loss' | 'win'

export const useGameStateStore = defineStore('gameState', {
  state: (): GameState => ({
    gameState: '' as string,
  }),

  actions: {
    setGameState(newState: string): void {
      this.gameState = newState;
    },

    clearGameState(): void {
      this.gameState = '';
    },
  },

  getters: {
    currentState: (state): string => state.gameState,
  },
});
