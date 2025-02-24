<script setup>
import { XMarkIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="flex w-screen h-screen fixed z-[999] justify-center items-center">
    <div class="relative rounded-md p-4 w-128 bg-[#3A3A3C] text-white">
      <h1 class="flex gap-10">
        <span>Слово от друга #123</span>
        <span>3/6</span>
      </h1>
      <div>
        <div></div>
      </div>

      <button class="absolute top-4 right-4 size-8 rounded-full flex justify-center items-center hover:bg-[#00000060] cursor-pointer duration-300">
        <XMarkIcon class="size-6"/>
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
