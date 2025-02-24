export function useAnimations(elementRef) {
  const shakeIt = () => {
    if (elementRef.value) {
      requestAnimationFrame(() => {
        setTimeout(() => elementRef.value.classList.remove('shake'), 500)
      })
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
