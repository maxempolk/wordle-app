<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import TheLetter from './components/TheLetter.vue'
import { useTemplateRef } from 'vue'

const words = ref<string[]>([])
const currentWord = ref<string>('')

type letterType = InstanceType<typeof TheLetter>
const letters = useTemplateRef<letterType[]>('letter')

const completeWord = () => {
  if (words.value.length >= 6 || currentWord.value === undefined) return
  words.value.push(currentWord.value)
  currentWord.value = ''
}

const slotsForCurrentWord = () => {
  const count = words.value.length
  return Array.from({ length: 5 }, (_, i) => count * 5 + i)
}

onMounted(() => {
  addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key == 'Enter' && currentWord.value.length == 5) {
      slotsForCurrentWord().forEach((el: number) => {
        if (letters.value !== null) letters.value[el].completeAnimation()
      })
      completeWord()
    } else if (e.key == 'Backspace') currentWord.value = currentWord.value.slice(0, -1)
    else if (e.key.length == 1 && currentWord.value.length < 5) {
      currentWord.value += e.key
    }
  })
})

const rawData = computed(() => {
  return words.value.reduce((word1, word2) => word1 + word2, '') + currentWord.value
})
</script>

<template>
  <div class="grid gap-2 grid-cols-5 w-fit">
    <TheLetter v-for="i in 30" :key="i" :model-value="rawData[i - 1]" ref="letter" />
  </div>
</template>

<style scoped></style>
