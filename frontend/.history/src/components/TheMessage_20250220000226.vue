<script setup>
const props = defineProps<{
  modelValue: str
}>()
</script>

<template>
  <div>
    {{ modelValue }}
  </div>
</template>
