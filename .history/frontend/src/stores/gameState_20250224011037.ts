// stores/gameState.ts
import { defineStore } from 'pinia';
import { type GameState } from '@/types/state';
// 'in-game' | 'loss' | 'win'

interface gameStateState{
  gameState: GameState
}

// TODO: поменять названия переменных
// TODO: разобраться с pinia

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
