import TheLetter from "@/components/theLetter.vue"

type letterType = InstanceType<typeof TheLetter>

export function useAnimations(letters: Ref<LetterComponent[] | null>) {
  const getLetter = (slot: number) => letters.value?.[slot];

  const shakeCurrentWord = (slots: number[]) => {
    slots.forEach((slot) => {
      const el = getLetter(slot);
      if (el) el.shakeIt();
    });
  };

  return { shakeCurrentWord };
}
