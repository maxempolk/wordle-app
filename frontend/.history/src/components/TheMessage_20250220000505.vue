<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  modelValue: string
}>()

const isAnimated = ref(false)

const animate = () => {
  if (isAnimated.value) isAnimated.value = true

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
