<script setup lang="ts">
const alph = 'abcdefghijklmnopqrstuvwxyz'
</script>

<template>
  <div class="flex gap-2">
    <div
      class="bg-[#818384] h-14 w-10 rounded-sm flex justify-center items-center uppercase text-white"
      v-for="char in alph"
      :key="char"
    >
      {{ char }}
    </div>
  </div>
</template>
