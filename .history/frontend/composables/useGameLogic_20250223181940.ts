import { useUserWordStore } from '../stores/userWord';
import { useRealWordStore } from '../stores/realWord';
import { useUsedLettersStore } from '../stores/usedLetters';
import { ref } from 'vue';
import { isRealWord } from '../api/isRealWord';
import { wordleAlgh } from '../utils/wordle';

export function useGameLogic(words, messageValue, messageComp) {
  const usrWordStore = useUserWordStore();
  const realWordStore = useRealWordStore();
  const usedLettersStore = useUsedLettersStore();
  const isWin = ref(false);

  const showError = (message) => {
    if (messageComp.value?.isHidden) {
      messageComp.value.animateIt();
      messageValue.value = message;
    }
  };

  const completeWord = () => {
    words.value.push(usrWordStore.word);
    usrWordStore.clear();
  };

  const enterWord = async () => {
    const isReal = await isRealWord(usrWordStore.word);
    if (!isReal) {
      showError('Not in word list');
      // Вызов анимации через событие или напрямую
      return;
    }
    if (usrWordStore.word.length !== 5) {
      showError('Not enough letters');
      return;
    }

    const colors = wordleAlgh(usrWordStore.word, realWordStore.word || '');
    isWin.value = colors.every(item => item === 'placed');
    colors.forEach((state, index) => {
      usedLettersStore.addToBuffer(usrWordStore.word[index], state);
    });

    setTimeout(() => usedLettersStore.save(), 1500);
    completeWord();
  };

  return { enterWord, isWin };
}
