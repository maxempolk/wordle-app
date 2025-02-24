<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

const isAnimated = ref(false)
const isVanishing = ref(false)

const vanish = () => {
  if (isVanishing.value) return

  isVanishing.value = true

  setTimeout(() => {
    isVanishing.value = false
  }, 1000)
}

const animate = () => {
  if (isAnimated.value) return

  isAnimated.value = true

  setTimeout(() => {
    isAnimated.value = false
    vanish()
  }, 1500)
}

defineExpose({ animate })
</script>

<template>
  <div class="flex w-screen justify-center">
    <div
      class="fixed top-6 bg-white rounded-md text-black text-md py-2 px-4 select-none"
      :class="{ driveAnimation: isAnimated, hidden: !isAnimated, '' }"
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

@keyframes vanishAnimation{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.driveAnimation {
  animation: 0.5s driveAnimation ease-out;
}

.vanishAnimation {
  anima
}
</style>
