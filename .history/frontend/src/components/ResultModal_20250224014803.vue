<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { stateToColor } from '@/utils/stateToColor';
import { useGameStateStore } from '@/stores/gameState';
import { computed } from 'vue';
import { useRealWordStore } from '@/stores/realWord';
import { wordleAlgh } from '@/utils/wordle';

const props = defineProps<{
  result: string[]
}>()

const gameStateStore = useGameStateStore();

const rawData = computed(() => {
  return props.result.reduce((word1, word2) => word1 + word2, '')
})

</script>

<template>
  <div class="flex w-screen h-screen fixed z-[999] justify-center items-center bg-[#0000004d]">
    <div class="relative rounded-md p-4 w-128 bg-[#3A3A3C] text-white">
      <h1 class="flex gap-10 text-xl">
        <span>Слово от друга #123</span>
        <span>{{result.length}}/6</span>
        <span v-if="gameStateStore.currentState === 'win'">Победа</span>
        <span v-else>Поражение</span>
      </h1>

      <div class="flex items-center gap-5 mt-6 h-32">
        <div class="flex w-24 gap-1 ml-6 flex-col">
          <div class="flex gap-1" v-for="word in result">
            <div class="size-4" :class="wordleAlgh(word, useRealWordStore().word as string)" v-for="char in word">{{ char }}</div>
          </div>
        </div>
        <p class="text-4xl text-center flex-[1]">{{useRealWordStore().word}}</p>
      </div>

      <button class="absolute top-4 right-4 size-8 rounded-full flex justify-center items-center bg-[#00000020] hover:bg-[#00000060] focus:bg-[#00000080] cursor-pointer duration-300">
        <XMarkIcon class="size-6"/>
      </button>
    </div>
  </div>
</template>
