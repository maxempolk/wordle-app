import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', () => {
  const word = ref('0')

  function getWord() {
    return word.value
  }

  function change(newWord: string) {
    word.value = newWord
  }

  return { word, getWord, change }
})
