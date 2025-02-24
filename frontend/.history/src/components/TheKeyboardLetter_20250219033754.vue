<script setup lang="ts">
import { type State } from '@/types/state'
const props = defineProps<{
  modelValue: string
  state: State | 'empty'
}>()

const stateToBackground = (state: State | 'empty') => {
  if (state == 'placed') return 'bg-[#548D4F]'
  else if (state == 'in-word') return 'bg-[#B69F3B]'
  else if (state == 'wrong') return 'bg-[#3A3A3C]'
  return 'bg-[#818384]'
}
</script>

<template>
  <div
    class="h-14 w-10 max-w-min rounded-sm flex justify-center items-center uppercase text-white font-bold"
    :class="stateToBackground(props.state)"
  >
    {{ modelValue }}
  </div>
</template>
