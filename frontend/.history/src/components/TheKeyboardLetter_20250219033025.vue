<script setup lang="ts">
import { type State } from '@/types/state'
import { computed } from 'vue'
defineProps<{
  char: string
  state: State | 'empty'
}>()

const stateToBackground = (state: State) => {
  if (state == 'placed') return 'bg-[#548D4F]'
  else if (state == 'in-word') return 'bg-[#B69F3B]'
  return 'bg-[#3A3A3C]'
  // else if (state == 'wrong') return 'bg-[#3A3A3C]'
}
</script>

<template>
  <div
    class="bg-[#818384] h-14 w-10 rounded-sm flex justify-center items-center uppercase text-white font-bold"
  >
    {{ char }}
  </div>
</template>
