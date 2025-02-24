<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import theLetter from './components/TheLetter.vue'
import theKeyboard from '@/components/TheKeyboard.vue'
import theMessage from './components/TheMessage.vue'
import { useRealWordStore } from './stores/realWord'
import { useUsedLettersStore } from './stores/usedLetters'
import { useUserWordStore } from './stores/usrWord'
import { wordleAlgh } from './utils/wordle'

const realWordStore = useRealWordStore()
const usrWordStore = useUserWordStore()

const words = ref<string[]>([])
const usedLettersStore = useUsedLettersStore()

type letterType = InstanceType<typeof theLetter>
type messageType = InstanceType<typeof theMessage>
const letters = useTemplateRef<letterType[]>('letter')
const messageComp = useTemplateRef<messageType>('messageComp')

const messageValue = ref('')

const showError = (message: string) => {
  console.log('penis')
  messageComp?.value?.animateIt()
  messageValue.value = message
}

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
  if (usrWordStore.word.length != 5) {
    showError('Not enogth letter')
    shakeCurrentWord()
    return
  }

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
  if (usrWordStore.word.length == 0) {
    showError('Not a single letter')
    shakeCurrentWord()
  } else usrWordStore.popLetter()
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
  <theMessage :model-value="messageValue" ref="messageComp" />
  <div class="flex w-screen h-screen justify-between items-center flex-col py-5 sm:py-[5%]">
    <div class="grid gap-2 grid-cols-5 w-fit">
      <theLetter v-for="i in 30" :key="i" :model-value="rawData[i - 1]" ref="letter" />
    </div>
    <theKeyboard @enterWord="enterWord" @backspace="popLetter" />
  </div>
</template>

<style scoped></style>
