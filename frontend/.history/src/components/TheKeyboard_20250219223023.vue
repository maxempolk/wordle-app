<script setup lang="ts">
import TheKeyboardLetter from './TheKeyboardLetter.vue'
import TheBackspaceKey from './TheBackspaceKey.vue'
import { useUserWordStore } from '@/stores/usrWord'

const alph1 = 'QWERTYUIOP'
const alph2 = 'ASDFGHJKL'
const alph3 = 'ZXCVBNM'

const emit = defineEmits(['enterWord'])

const userWordStore = useUserWordStore()

const keyPress = (char: string) => {
  userWordStore.addLetter(char)
  console.log('click')
}
</script>

<template>
  <div class="flex gap-1 sm:gap-2 flex-col w-full sm:w-128 px-2">
    <div class="flex gap-1 sm:gap-2">
      <TheKeyboardLetter
        :model-value="char"
        v-for="char in alph1"
        :key="'letter-' + char"
        @click="keyPress(char)"
      />
    </div>

    <div class="flex gap-1 sm:gap-2">
      <div class="flex-[0.5]"></div>
      <TheKeyboardLetter
        :model-value="char"
        v-for="char in alph2"
        :key="'letter-' + char"
        @click="keyPress(char)"
      />
      <div class="flex-[0.5]"></div>
    </div>

    <div class="flex gap-1 sm:gap-2">
      <TheKeyboardLetter
        :model-value="'Enter'"
        @click="emit('enterWord')"
        class="flex-[1.5] text-[10px]"
      />
      <TheKeyboardLetter
        v-for="char in alph3"
        :key="'letter-' + char"
        :model-value="char"
        @click="keyPress(char)"
      />
      <theBackspaceKey @click="userWordStore.popLetter()" class="flex-[1.5]" />
      <!-- <TheKeyboardLetter :model-value="'<=='" @click="userWordStore.popLetter()" class="px-2" /> -->
    </div>
  </div>
</template>

<style scoped></style>
