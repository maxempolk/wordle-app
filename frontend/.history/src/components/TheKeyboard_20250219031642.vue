<script setup lang="ts">
const alph = 'abcdefghijklmnopqrstuvwxyz'
</script>

<template>
  <div class="flex">
    <div class="bg-[#818384] h-14 w-10 rounded-3xl" v-for="char in alph" :key="char">
      {{ char }}
    </div>
  </div>
</template>
