<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

const isAnimated = ref(false)
const isVanishing = ref(false)

const vanishIt = () => {
  if (isVanishing.value) return

  isVanishing.value = true

  // setTimeout(() => {
  //   isVanishing.value = false
  // }, 1000)
}

const animateIt = () => {
  if (isAnimated.value) return

  isAnimated.value = true

  setTimeout(() => {
    isAnimated.value = false
    vanishIt()
  }, 1500)
}

defineExpose({ animateIt })
</script>

<template>
  <div class="flex w-screen justify-center">
    <div
      class="fixed top-6 bg-white rounded-md text-black text-md py-2 px-4 select-none"
      :class="{ drive: isAnimated, hidden: !isAnimated, vanish: isVanishing }"
    >
      {{ modelValue }}
    </div>
  </div>
</template>

<style scoped>
@keyframes driveAnimation {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes vanishAnimation {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.vanish {
  animation: vanishAnimation 1s linear;
}

.drive {
  animation: 0.5s driveAnimation ease-out;
}
</style>
