<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { stateToColor } from '@/utils/stateToColor';
import { useGameStateStore } from '@/stores/gameState';

defineProps<{
  result: string[]
}>()

const gameStateStore = useGameStateStore();

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
        <div class="grid grid-cols-5 w-24 gap-1 ml-6">
          <p class="flex bg-black size-4" v-for="i in 30" ></p>
        </div>
        <p class="text-4xl text-center flex-[1]">Пенис</p>
      </div>

      <button class="absolute top-4 right-4 size-8 rounded-full flex justify-center items-center bg-[#00000020] hover:bg-[#00000060] focus:bg-[#00000080] cursor-pointer duration-300">
        <XMarkIcon class="size-6"/>
      </button>
    </div>
  </div>
</template>

<style scoped>
</style>
