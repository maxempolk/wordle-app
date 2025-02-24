<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TheLetter from './components/TheLetter.vue'
import { useTemplateRef } from 'vue'
import { wordleAlgh } from './utils/wordle'
import { useRealWordStore } from './stores/realWord'
import theKeyboard from '@/components/TheKeyboard.vue'
import { useUsedLettersStore } from './stores/usedLetters'
import { useUserWordStore } from './stores/usrWord'

const realWordStore = useRealWordStore()
const usrWordStore = useUserWordStore()

const words = ref<string[]>([])
const usedLettersStore = useUsedLettersStore()

type letterType = InstanceType<typeof TheLetter>
const letters = useTemplateRef<letterType[]>('letter')

const completeWord = () => {
  words.value.push(usrWordStore.word)
  usrWordStore.clear()
}

const slotsForCurrentWord = () => {
  const count = words.value.length
  return Array.from({ length: 5 }, (_, i) => count * 5 + i)
}

const shakeCurrentWord = () => {
  slotsForCurrentWord().forEach((el) => {
    if (letters.value != undefined) letters.value[el].shakeIt()
  })
}

const enterWord = () => {
  if (usrWordStore.word.length != 5) return

  const colors = wordleAlgh(usrWordStore.word, realWordStore.word)

  colors.forEach((state, index) => {
    usedLettersStore.addToBuffer(usrWordStore.word[index], state)
  })

  setTimeout(() => {
    useUsedLettersStore().save()
  }, 300 * 5)

  slotsForCurrentWord().forEach((el, index) => {
    setTimeout(() => {
      if (letters.value !== null) {
        letters.value[el].completeAnimation(colors[el % 5])
      }
    }, 300 * index)
  })

  completeWord()
}

const popLetter = () => {
  if (usrWordStore.word.length == 0) shakeCurrentWord()
  else usrWordStore.popLetter()
}

onMounted(() => {
  addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      enterWord()
    } else if (e.key == 'Backspace') {
      popLetter()
    } else usrWordStore.addLetter(e.key)
  })
})

const rawData = computed(() => {
  return words.value.reduce((word1, word2) => word1 + word2, '') + usrWordStore.word
})
</script>

<template>
  <div class="flex w-screen h-screen justify-between items-center flex-col py-5 sm:py-32">
    <div class="grid gap-2 grid-cols-5 w-fit">
      <TheLetter v-for="i in 30" :key="i" :model-value="rawData[i - 1]" ref="letter" />
    </div>
    <theKeyboard @enterWord="enterWord" @backspace="popLetter" />
  </div>
</template>

<style scoped></style>
