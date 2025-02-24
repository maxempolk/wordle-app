<script setup lang="ts">
defineProps<{
  value?: string
}>()
</script>

<template>
  <div
    class="w-16 h-16 border-2 border-gray-500 text-white flex justify-center items-center text-3xl uppercase"
  >
    {{ value }}
  </div>
</template>
