<script setup lang="ts">
import TheLetter from './components/TheLetter.vue'
</script>

<template>
  <div class="grid gap-2 grid-cols-5 w-64">
    <TheLetter value="e" v-for="i in 30" :key="i" />
  </div>
</template>

<style scoped></style>
