<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
import { useUserWordStore } from '@/stores/usrWord'
const alph1 = 'QWERTYUIOP'
const alph2 = 'ASDFGHJKL'
const alph3 = 'ZXCVBNM'

const userWordStore = useUserWordStore()
</script>

<template>
  <div class="flex gap-2 flex-col items-center">
    <div class="flex gap-2">
      <TheKeyboardLetter :model-value="char" v-for="char in alph1" :key="'letter-' + char" />
    </div>

    <div class="flex gap-2">
      <TheKeyboardLetter :model-value="char" v-for="char in alph2" :key="'letter-' + char" />
    </div>

    <div class="flex gap-2">
      <TheKeyboardLetter :model-value="'Enter'" />
      <TheKeyboardLetter
        v-for="char in alph3"
        :key="'letter-' + char"
        :model-value="char"
        @click="
          userWordStore.addLetter(char)
          console.log('click')
        "
      />
      <TheKeyboardLetter :model-value="'<=='" />
    </div>
  </div>
</template>
