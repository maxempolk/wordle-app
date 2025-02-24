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
  <div class="fixed top-6 bg-white rounded-xl text-black">
    {{ modelValue }}
  </div>
</template>

<style scoped>
@keyframes driveAnimation {
  0% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateY(0);
  }
}

.driveAnimation {
  animation: 1.5s driveAnimation linear;
}
</style>
