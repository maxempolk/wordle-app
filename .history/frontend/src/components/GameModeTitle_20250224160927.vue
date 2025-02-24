<template>
  <h1 class="text-5xl text-[#FFD700] flex items-center gap-4">
    <span>Daily word📅</span>
    <CalendarIcon class="size-10"/>
  </h1>
</template>

<script setup lang="ts">
  import { CalendarIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
  h1{
    font-family: 'Montserrat Bold';
  }
</style>
