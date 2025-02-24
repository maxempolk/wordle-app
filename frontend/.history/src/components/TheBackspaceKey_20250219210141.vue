<template>
  <div
    class="flex-1 h-12 sm:h-14 rounded-sm flex justify-center items-center uppercase text-white font-bold cursor-pointer select-none"
    :class="stateToBackground(state)"
  >
    {{ modelValue }}
  </div>
</template>
