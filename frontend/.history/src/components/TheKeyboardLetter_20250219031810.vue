<template>
  <div
    class="bg-[#818384] h-14 w-10 rounded-sm flex justify-center items-center uppercase text-white font-bold"
    v-for="char in alph"
    :key="char"
  >
    {{ char }}
  </div>
</template>
