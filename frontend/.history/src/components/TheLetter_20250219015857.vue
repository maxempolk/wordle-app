<script setup lang="ts">
import { useTemplateRef } from 'vue'
defineProps<{
  modelValue?: string
}>()

const blockComp = useTemplateRef('block')

const scaleAnimation = () => {
  blockComp.value?.classList.add('scale-110')
}

// defineExpose(scaleAnimation)
</script>

<template>
  <div
    class="w-16 h-16 border-2 border-gray-500 text-white flex justify-center items-center text-3xl uppercase"
    ref="block"
  >
    {{ modelValue }}
  </div>
</template>

<style scoped></style>
