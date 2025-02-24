// stores/gameState.ts
import { defineStore } from 'pinia';
import { GameState } from '@/types/state';
// 'in-game' | 'loss' | 'win'

interface gameStateState{
  gameState: GameState
}

export const useGameStateStore = defineStore('gameState', {
  state: () => ({
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
