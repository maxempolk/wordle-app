<script setup lang="ts">
import { computed, onMounted, ref, useTemplateRef } from 'vue'
import theLetter from './components/TheLetter.vue'
import theKeyboard from '@/components/TheKeyboard.vue'
import theMessage from './components/TheMessage.vue'
import ResultModal from './components/ResultModal.vue'
import { useRealWordStore } from './stores/realWord'
import { useUsedLettersStore } from './stores/usedLetters'
import { useUserWordStore } from './stores/usrWord'
import { wordleAlgh } from './utils/wordle'
import { isRealWord } from './api/isRealWord'

const realWordStore = useRealWordStore()
const usrWordStore = useUserWordStore()

const words = ref<string[]>([])
const usedLettersStore = useUsedLettersStore()

type letterType = InstanceType<typeof theLetter>
type messageType = InstanceType<typeof theMessage>
const letters = useTemplateRef<letterType[]>('letter')
const messageComp = useTemplateRef<messageType>('messageComp')

const messageValue = ref('')
const isWin = ref(false)

const showError = (message: string) => {
  if (messageComp.value && !messageComp.value.isHidden) return
  messageComp.value?.animateIt()
  messageValue.value = message
}

const completeWord = () => {
  words.value.push(usrWordStore.word)
  usrWordStore.clear()
}

const slotsForCurrentWord = computed(() => {
  return Array.from({ length: 5 }, (_, i) => words.value.length * 5 + i);
});

const getLetter = (index: number) => letters.value?.[index];

const shakeCurrentWord = () => {
  slotsForCurrentWord.value.forEach((slot) => {
    const el = getLetter(slot)
    if (el) el.shakeIt()
  })
}

const enterWord = async () => {
  const isReal = await isRealWord(usrWordStore.word) || false

  if ( usrWordStore.word.length != 5 ) {
    showError('Not enough letter')
    shakeCurrentWord()
    return
  }

  if( !isReal ){
    showError('Not in word list')
    shakeCurrentWord()
    return
  }

  const colors = wordleAlgh(usrWordStore.word, realWordStore.word || '')

  isWin.value = colors.every(item => item === 'placed')

  colors.forEach((state, index) => {
    usedLettersStore.addToBuffer(usrWordStore.word[index], state)
  })

  setTimeout(() => {
    useUsedLettersStore().save()
  }, 300 * 5)

  slotsForCurrentWord.value.forEach((slot, index) => {
    setTimeout(() => {
      const el = getLetter(slot);
      if (el) el.completeAnimation(colors[slot % 5])
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

const rawData = computed(() => {
  return words.value.reduce((word1, word2) => word1 + word2, '') + usrWordStore.word
})

const handleKeydown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
      enterWord();
      break;
    case 'Backspace':
      popLetter();
      break;
    default:
      usrWordStore.addLetter(e.key);
  }
};

onMounted(() => {
  addEventListener('keydown', handleKeydown)
})

</script>

<template>
  <ResultModal :result="words" v-if="false"/>
  <theMessage :model-value="messageValue" ref="messageComp" />
  <div
    class="flex w-screen h-screen justify-between items-center flex-col pt-[15%] pb-[5%] sm:py-[5%]"
  >
    <div class="grid gap-2 grid-cols-5 w-fit">
      <theLetter v-for="i in 30" :key="i" :model-value="rawData[i - 1]" ref="letter" />
    </div>
    <theKeyboard @enterWord="enterWord" @backspace="popLetter" class="sm:mt-16" />
  </div>
</template>
