<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
const alph1 = 'QWERTYUIOP'
const alph2 = 'ASDFGHJKL'
const alph3 = 'ZXCVBNM'
</script>

<template>
  <div class="flex gap-2 flex-col items-center">
    <div class="flex gap-2">
      <TheKeyboardLetter :model-value="char" v-for="char in alph1" :key="'letter-' + char" />
    </div>
  </div>
</template>
