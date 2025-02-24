import { defineStore } from 'pinia';

// Определяем тип для состояния
interface RealWordState {
  word: string | null; // Тип для word: строка или null
}

// Функция getWord с типом (пример)
const getWord = (): Promise<string> => {
  return Promise.resolve("Hello, Pinia!");
};

export const useRealWordStore = defineStore('realWord', {
  state: (): RealWordState => ({
    word: null, // Начальное значение
  }),
  actions: {
    async fetchWord(): Promise<void> {
      this.word = await getWord(); // Обновляем состояние асинхронно
    },
  },
});

// Экспортируем тип стора для использования в компонентах
export type RealWordStore = ReturnType<typeof useRealWordStore>;
