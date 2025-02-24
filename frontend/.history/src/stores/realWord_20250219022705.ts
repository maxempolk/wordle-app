import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', () => {
  const word_ = ref('0')

  const word => computed{() {
    return word_.value
  }}

  function change(newWord: string) {
    word_.value = newWord
  }

  return { word_, getWord, change }
})
