<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  modelValue: string
}>()

const isAnimated = ref(false)

const animate = () => {
  if (isAnimated.value) return

  isAnimated.value = true

  setTimeout(() => {
    isAnimated.value = false
  }, 1500)
}

defineExpose({ animate })
</script>

<template>
  <div
    class="fixed top-6 bg-white rounded-md text-black text-md py-2 px-4 select-none m-auto"
    :class="{ driveAnimation: isAnimated }"
  >
    {{ modelValue }}
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

.driveAnimation {
  animation: 0.5s driveAnimation ease-out;
}
</style>
