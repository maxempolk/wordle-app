<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
const alph = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM']
</script>

<template>
  <div class="flex gap-2">
    <div class="flex" v-for="part in alph" :key="'row' + part">
      <TheKeyboardLetter :model-value="char" v-for="char in part" :key="'letter-' + char" />
    </div>
  </div>
</template>
