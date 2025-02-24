<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
const alph = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']
</script>

<template>
  <div class="flex gap-2">
    <div class="flex">
      <TheKeyboardLetter />
    </div>
  </div>
</template>
