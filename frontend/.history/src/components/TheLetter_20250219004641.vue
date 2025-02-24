<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div class="w-16 h-16 border-2 border-gray-500">
    {{ value }}
  </div>
</template>
