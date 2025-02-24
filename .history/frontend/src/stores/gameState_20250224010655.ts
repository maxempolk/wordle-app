// stores/gameState.ts
import { defineStore } from 'pinia';
import { getWord } from '@/api/getWord';
import { type GameState } from '@/types/gameState';

// Интерфейс для состояния хранилища
interface PiniaGameStateStore {
  gameState: GameState;
}

export const useGameStateStore = defineStore('gameState', {
  // Состояние
  state: (): PiniaGameStateStore => ({
    gameState: {
      word: null,
      score: 0,
      isLoading: false,
      error: null,
    },
  }),

  // Геттеры
  getters: {
    currentWord: (state): string | null => state.gameState.word,
    currentScore: (state): number => state.gameState.score || 0,
    isWordLoaded: (state): boolean => state.gameState.word !== null,
  },

  // Действия
  actions: {
    // Установка нового состояния
    setState(newState: Partial<GameState>): void {
      this.gameState = {
        ...this.gameState,
        ...newState,
      };
    },

    // Асинхронное получение слова
    async fetchWord(): Promise<void> {
      try {
        this.setState({ isLoading: true, error: null });
        const word = await getWord();
        this.setState({ word, isLoading: false });
      } catch (error) {
        this.setState({
          error: error instanceof Error ? error.message : 'Failed to fetch word',
          isLoading: false,
        });
      }
    },

    // Сброс состояния
    resetState(): void {
      this.setState({
        word: null,
        score: 0,
        isLoading: false,
        error: null,
      });
    },

    // Обновление счета
    updateScore(points: number): void {
      this.setState({
        score: (this.gameState.score || 0) + points,
      });
    },
  },
});
