<script setup lang="ts">
import { State } from '@/types/state'
import { computed } from 'vue'
defineProps<{
  char: string
  state: State
}>()

const color = computed(() => {})
</script>

<template>
  <div
    class="bg-[#818384] h-14 w-10 rounded-sm flex justify-center items-center uppercase text-white font-bold"
  >
    {{ char }}
  </div>
</template>
