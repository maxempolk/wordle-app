import type TheLetter from "@/components/theLetter.vue"

export function useAnimations(elementRef: TheLetter) {
  const shakeIt = () => {
    if (elementRef.value) {
      requestAnimationFrame(() => elementRef.)
    }
  }

  const completeAnimation = (color) => {
    if (elementRef.value) {
      requestAnimationFrame(() => {
        elementRef.value.style.backgroundColor = color
      })
    }
  }

  return { shakeIt, completeAnimation }
}
