import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useRealWordStore = defineStore('realWord', () => {
  const word_ = ref('0')

  c

  function change(newWord: string) {
    word_.value = newWord
  }

  return { word_, getWord, change }
})
