import { isRealWord } from '@/api/isRealWord'
import type theMessage from '@/components/TheMessage.vue'
import type theLetter from '@/components/TheLetter.vue'
import { useRealWordStore } from '@/stores/realWord'
import { useUsedLettersStore } from '@/stores/usedLetters'
import { useUserWordStore } from '@/stores/usrWord'
import { wordleAlgh } from '@/utils/wordle'
import { ref, type Ref } from 'vue'
import { useAnimations } from './useAnimations';

type messageType = InstanceType<typeof theMessage>
type letterType = InstanceType<typeof theLetter>

export function useGameLogic(
  words: Ref<string[]>,
  messageValue: Ref<string>,
  messageComp: Ref<messageType | null>,
  letters: Ref<letterType[]>
) {
  const usrWordStore = useUserWordStore()
  const realWordStore = useRealWordStore()
  const usedLettersStore = useUsedLettersStore()
  const isWin = ref(false)

  const { shakeCurrentWord } = useAnimations(letters);

  const showError = (message: string) => {
    if (messageComp.value?.isHidden) {
      messageComp.value.animateIt()
      messageValue.value = message
    }
  }

  const completeWord = () => {
    words.value.push(usrWordStore.word)
    usrWordStore.clear()
  }

  const enterWord = async () => {
    const isReal = await isRealWord(usrWordStore.word)
    if (!isReal) {
      showError('Not in word list')
      // Вызов анимации через событие или напрямую
      return
    }
    if (usrWordStore.word.length !== 5) {
      showError('Not enough letters')
      return
    }

    const colors = wordleAlgh(usrWordStore.word, realWordStore.word || '')
    isWin.value = colors.every((item) => item === 'placed')
    colors.forEach((state, index) => {
      usedLettersStore.addToBuffer(usrWordStore.word[index], state)
    })

    setTimeout(() => usedLettersStore.save(), 1500)
    completeWord()
  }

  return { enterWord, isWin }
}
