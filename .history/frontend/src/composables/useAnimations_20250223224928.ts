import TheLetter from "@/components/theLetter.vue"

type letterType = InstanceType<typeof TheLetter>

export function useAnimations(elementRef: letterType) {
  const shakeIt = () => {
      requestAnimationFrame(() => elementRef.)
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
