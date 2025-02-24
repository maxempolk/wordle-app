import theLetter from "@/components/TheLetter.vue"
import type { ComponentInstance, Ref } from "vue";

type letterType = InstanceType<typeof theLetter>;

export function useAnimations(letters: ComponentInstance<letterType[]>) {
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

  const completeWord = (slots: number[]) => {
    slots.forEach((index) => {
      setTimeout(() => requestAnimationFrame(() => letters.value?[index] ), 300 * index)
    })
  }


  return { shakeCurrentWord };
}
