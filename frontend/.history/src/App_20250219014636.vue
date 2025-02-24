<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TheLetter from './components/TheLetter.vue'

const words = ref<string[]>([])
const currentWord = ref<string>('')

const completeWord = () => {
  if (words.value.length >= 6 || currentWord.value === undefined) return
  words.value.push(currentWord.value)
  currentWord.value = ''
}

onMounted(() => {
  addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key == 'Enter') completeWord()
    else if (e.key.length == 1) currentWord.value += e.key
  })
})

const slotsForCurrentWord = () => {
  const count = words.value.length
  for (let i = count * 5; i < (count + 1) * 5; i++) {}
  return
}
</script>

<template>
  <div class="grid gap-2 grid-cols-5 w-fit">
    <TheLetter v-for="i in 30" :key="i" />
  </div>
</template>

<style scoped></style>
