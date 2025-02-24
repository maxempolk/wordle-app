<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { stateToColor } from '@/utils/stateToColor';

defineProps<{
  result: string[]
}>()

</script>

<template>
  <div class="flex w-screen h-screen fixed z-[999] justify-center items-center">
    <div class="relative rounded-md p-4 w-128 bg-[#3A3A3C] text-white">
      <h1 class="flex gap-10 text-xl">
        <span>Слово от друга #123</span>
        <span>3/6</span>
      </h1>

      <div class="flex items-center gap-5">
        <div class="grid grid-cols-5 w-24 gap-1 mt-2">
          <p class="flex bg-black size-4" v-for="i in 30" ></p>
        </div>
        <p class="text-4xl flex-[1]">Hello world</p>
      </div>

      <button class="absolute top-4 right-4 size-8 rounded-full flex justify-center items-center hover:bg-[#00000060] cursor-pointer duration-300">
        <XMarkIcon class="size-6"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
