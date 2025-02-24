<script setup lang="ts">
const alph = 'abcdefghijklmnopqrstuvwxyz'
</script>

<template>
  <div class="flex">
    <div class="bg-[#818384]" v-for="char in alph" :key="char">
      {{ char }}
    </div>
  </div>
</template>
