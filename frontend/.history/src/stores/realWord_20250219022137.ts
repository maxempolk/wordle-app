import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const word = ref('0')

  function change(newWord: string) {
    word.value = newWord
  }

  return { count, doubleCount, increment }
})
