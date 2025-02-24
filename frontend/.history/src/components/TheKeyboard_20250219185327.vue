<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
import { useUserWordStore } from '@/stores/usrWord'
const alph1 = 'QWERTYUIOP'
const alph2 = 'ASDFGHJKL'
const alph3 = 'ZXCVBNM'

const userWordStore = useUserWordStore()

const keyPress = (char: string) => {
  userWordStore.addLetter(char)
  console.log('click')
}
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
        @click="console.log(132)"
      />
      <TheKeyboardLetter :model-value="'<=='" />
    </div>
  </div>
</template>
