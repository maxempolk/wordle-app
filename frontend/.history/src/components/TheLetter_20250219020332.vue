<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
const props = defineProps<{
  modelValue?: string
}>()

const blockComp = useTemplateRef('block')

const scaleAnimation = () => {
  blockComp.value?.classList.add('scale-110')

  setTimeout(() => {
    blockComp.value?.classList.remove('scale-110')
  }, 150)
}

const rotateAnimation () => {
  blockComp.value?.classList.add( 'rotateAnimation' )

  setTimeout(() => {
    blockComp.value?.classList.remove('scale-110')
  }, 150)
}

watch(
  () => props.modelValue,
  () => {
    scaleAnimation()
  },
)

// defineExpose(scaleAnimation)
</script>

<template>
  <div
    class="w-16 h-16 border-2 border-gray-500 text-white flex justify-center items-center text-3xl uppercase duration-150"
    ref="block"
  >
    {{ modelValue }}
  </div>
</template>

<style scoped>
@keyframes rotateAnimation {
  0% {
    transform: scaleY(1);
  }
  50% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
</style>
