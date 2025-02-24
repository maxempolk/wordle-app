<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
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
</script>

<template>
  <div class="fixed top-6">
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
  animation: 1s driveAnimation linear;
}
</style>
