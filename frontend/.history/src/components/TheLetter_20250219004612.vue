<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
  <div class="flex">
    {{ value }}
  </div>
</template>
