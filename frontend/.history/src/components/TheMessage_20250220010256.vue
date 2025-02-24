<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

const isAnimated = ref(false)
const isVanishing = ref(false)
const isHidden = ref(true)

const vanishIt = () => {
  isVanishing.value = true

  setTimeout(() => {
    isVanishing.value = false
    isHidden.value = true
  }, 1200)
}

const animateIt = () => {
  if (isAnimated.value) return

  isHidden.value = false
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
      :class="{ drive: isAnimated, vanish: isVanishing, hidden: isHidden }"
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
    display: block;
    opacity: 1;
  }
  99% {
    opacity: 0;
  }
  100% {
    display: none;
  }
}

.vanish {
  animation: 1s vanishAnimation linear;
}

.drive {
  animation: 0.5s driveAnimation ease-out;
}
</style>
