// stores/gameState.ts
import { defineStore } from 'pinia';

interface gameStateType{
  gameState: 'in-game' | 'loss' | 'win'
}

export const useGameStateStore = defineStore('gameState', {
  state: (): gameStateType => ({
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
