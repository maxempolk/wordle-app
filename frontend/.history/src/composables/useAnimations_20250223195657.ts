export function useAnimations(elementRef) {
  const shakeIt = () => {
    if (elementRef.value) {
      requestAnimationFrame(() => {})
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
