import theLetter from "@/components/TheLetter.vue"
import type { Ref } from "vue";

type letterType = InstanceType<typeof theLetter>;

export function useAnimations(letters: letterType[]) {
  const getLetter = (slot: number) => letters[slot];

  const shakeCurrentWord = (slots: number[]) => {
    slots.forEach((slot) => {
      const el = getLetter(slot);
      if (el) el.shakeIt();
    });
  };

  // const animateLetter = (index: number) => {
  //   const letter = getLetter(currentSlots[index])
  //   if (letter) {
  //     letter.completeAnimation(wordState[index])
  //   }
  // }

  const completeWordAnimation = (slots: number[]) => {
    slots.forEach((index) => {
      setTimeout(() => requestAnimationFrame(() => letters[index] ), 300 * index)
    })
  }


  return { shakeCurrentWord };
}
