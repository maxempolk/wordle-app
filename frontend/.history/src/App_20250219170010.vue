<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TheLetter from './components/TheLetter.vue'
import { useTemplateRef } from 'vue'
import { wordleAlgh } from './utils/wordle'
import { useRealWordStore } from './stores/realWord'
import theKeyboard from '@/components/TheKeyboard.vue'
import { useUsedLettersStore } from './stores/usedLetters'

const store = useRealWordStore()

const words = ref<string[]>([])
const currentWord = ref<string>('')
const usedLettersStore = useUsedLettersStore()

type letterType = InstanceType<typeof TheLetter>
const letters = useTemplateRef<letterType[]>('letter')

const completeWord = () => {
  words.value.push(currentWord.value)
  currentWord.value = ''
}

const slotsForCurrentWord = () => {
  const count = words.value.length
  return Array.from({ length: 5 }, (_, i) => count * 5 + i)
}

const enterWord = () => {
  const colors = wordleAlgh(store.word, currentWord.value)

  colors.forEach((state, index) => {
    usedLettersStore.addToBuffer(currentWord.value[index], state)
  })

  setTimeout(() => {
    useUsedLettersStore().save()
  }, 1500)

  slotsForCurrentWord().forEach((el, index) => {
    setTimeout(() => {
      if (letters.value !== null) {
        letters.value[el].completeAnimation(colors[el % 5])
      }
    }, index * 300)
  })
  completeWord()
}

const popLetter = () => {
  currentWord.value = currentWord.value.slice(0, -1)
}

const addLetter = (letter: string) => {
  currentWord.value += e.key
}

onMounted(() => {
  addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key == 'Enter' && currentWord.value.length == 5) enterWord()
    else if (e.key == 'Backspace') popLetter()
    else addLetter(e.key)
  })
})

const rawData = computed(() => {
  return words.value.reduce((word1, word2) => word1 + word2, '') + currentWord.value
})
</script>

<template>
  <div class="flex w-screen h-screen justify-center items-center flex-col gap-50">
    <div class="grid gap-2 grid-cols-5 w-fit">
      <TheLetter v-for="i in 30" :key="i" :model-value="rawData[i - 1]" ref="letter" />
    </div>
    <theKeyboard />
  </div>
</template>

<style scoped></style>
