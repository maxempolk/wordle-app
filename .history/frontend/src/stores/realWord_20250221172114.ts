import { defineStore } from 'pinia';

interface RealWordState {
  word: string | null;
}

const getWord = (): Promise<string> => {
  return Promise.resolve("Hello, Pinia!");
};

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

// Экспортируем тип стора для использования в компонентах
export type RealWordStore = ReturnType<typeof useRealWordStore>;
