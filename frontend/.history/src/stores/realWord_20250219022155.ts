import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const word = ref('0')

  function get() {
    return word.value
  }

  function change(newWord: string) {
    word.value = newWord
  }

  return { count, doubleCount, increment }
})
