<script setup lang="ts">
import { State } from '@/types/state'
import { computed } from 'vue'
defineProps<{
  char: string
  state: State | 'empty'
}>()

const stateToColor = (state: State) => {
  if (state == 'placed') return ['bg-[#548D4F]', 'border-[#548D4F]']
  else if (state == 'in-word') return ['bg-[#B69F3B]', 'border-[#B69F3B]']
  return ['bg-[#3A3A3C]', 'border-[#3A3A3C]']
  // else if (state == 'wrong') return 'bg-[#3A3A3C]'
}

const color = computed(() => {})
</script>

<template>
  <div
    class="bg-[#818384] h-14 w-10 rounded-sm flex justify-center items-center uppercase text-white font-bold"
  >
    {{ char }}
  </div>
</template>
