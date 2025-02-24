<script setup lang="ts">
import { type State } from '@/types/state'
import { useUsedLettersStore } from '@/stores/usedLetters'
import { computed } from 'vue'

const usedLettersStore = useUsedLettersStore()

const props = defineProps<{
  modelValue: string
}>()

const stateToBackground = (state: State | 'empty') => {
  if (state == 'placed') return 'bg-[#548D4F]'
  else if (state == 'in-word') return 'bg-[#B69F3B]'
  else if (state == 'wrong') return 'bg-[#3A3A3C]'
  return 'bg-[#818384]'
}

const state = computed(() => {
  const obj = usedLettersStore.letters.find((item) => {
    return item.letter.toLowerCase() === props.modelValue.toLowerCase()
  })
  if (obj === undefined) return 'empty'
  return obj.state
})
</script>

<template>
  <div
    class="h-10 sm:h-14 sm:px-4 min-w-min rounded-sm flex justify-center items-center uppercase text-white font-bold cursor-pointer select-none"
    :class="stateToBackground(state)"
  >
    {{ modelValue }}
  </div>
</template>
