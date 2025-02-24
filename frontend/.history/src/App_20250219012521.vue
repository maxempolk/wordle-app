<script setup lang="ts">
import TheLetter from './components/TheLetter.vue'
</script>

<template>
  <div class="grid">
    <TheLetter value="e" v-for="i in 30" :key="i" />
  </div>
</template>

<style scoped></style>
