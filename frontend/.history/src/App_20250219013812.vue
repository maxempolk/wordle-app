<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheLetter from './components/TheLetter.vue'

const words = ref<string[]>([])
const currentword = ref<string>('')

onMounted(() => {
  addEventListener('keydown', (e: KeyboardEvent) => {})
})
</script>

<template>
  <div class="grid gap-2 grid-cols-5 w-fit">
    <TheLetter v-for="i in 30" :key="i" />
  </div>
</template>

<style scoped></style>
