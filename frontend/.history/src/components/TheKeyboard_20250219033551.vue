<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
const alph = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']
</script>

<template>
  <div class="flex gap-2 flex-col items-center">
    <div class="flex gap-2" v-for="(part, i) in alph" :key="'row-' + i">
      <TheKeyboardLetter :model-value="char" v-for="char in part" :key="'letter-' + char" />
    </div>
  </div>
</template>
