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
    gameState: 'in-game',
  }),

  actions: {
    setGameState(newState: GameState): void {
      this.gameState = newState;
    },

    clearGameState(): void {
      this.gameState = 'in-game';
    },
  },

  getters: {
    currentState: (state): string => state.gameState,
  },
});
