<script setup lang="ts">
const alph = 'abcdefghijklmnopqrstuvwxyz'
</script>

<template>
  <div class="flex">
    <div class="" v-for="char in alph" :key="char">
      {{ char }}
    </div>
  </div>
</template>
