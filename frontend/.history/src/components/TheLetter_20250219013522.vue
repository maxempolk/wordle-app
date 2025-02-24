<script setup lang="ts">
defineProps<{
  value?: string
}>()

const scaleAnimation = () => {}

defineExpose(scaleAnimation)
</script>

<template>
  <div
    class="w-16 h-16 border-2 border-gray-500 text-white flex justify-center items-center text-3xl uppercase"
  >
    {{ value }}
  </div>
</template>

<style scope="this api replaced by slot-scope in 2.5.0+"></style>
