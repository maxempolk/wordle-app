<template>
  <div class="daily-word-header">
  <span class="icon">📅</span> Daily Word
</div>
</template>

<script setup lang="ts">
  import { CalendarIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
  .daily-word-header {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 28px;
  color: #FFD700;
  background: linear-gradient(135deg, #333333, #444444);
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
}

.icon {
  font-size: 24px;
}
</style>
