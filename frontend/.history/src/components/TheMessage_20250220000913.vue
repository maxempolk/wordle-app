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
  }, 15000)
}
</script>

<template>
  <div>
    {{ modelValue }}
  </div>
</template>

<style scoped>
@keyframes {
  0% {
  }
  50% {
  }
  100% {
  }
}
</style>
