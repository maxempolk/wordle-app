import theLetter from "@/components/TheLetter.vue"
import type { Ref } from "vue";

type letterType = InstanceType<typeof theLetter>

export function useAnimations(letters: Ref<letterType[] | null>) {
  const getLetter = (slot: number) => letters.value?.[slot];

  const shakeCurrentWord = (slots: number[]) => {
    slots.forEach((slot) => {
      const el = getLetter(slot);
      if (el) el.shakeIt();
    });
  };

  const animateLetter = (index: number) => {
    const letter = getLetter(currentSlots[index])
    if (letter) {
      letter.completeAnimation(wordState[index])
    }
  }

  const completeWord = () => {
    currentSlots.forEach((_, index) => {
      setTimeout(() => requestAnimationFrame(() => animateLetter(index)), 300 * index)
    })
  }


  return { shakeCurrentWord };
}
