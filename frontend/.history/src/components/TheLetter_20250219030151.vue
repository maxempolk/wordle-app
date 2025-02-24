<script setup lang="ts">
import { computed, ref, useTemplateRef, watch } from 'vue'
import { type State } from '@/types/state'

const props = defineProps<{
  modelValue?: string
}>()

const isRotated = ref(false)
const blockComp = useTemplateRef('block')

const scaleAnimation = () => {
  blockComp.value?.classList.add('scale-110')

  setTimeout(() => {
    blockComp.value?.classList.remove('scale-110')
  }, 150)
}

const stateToColor = (state: State) => {
  if (state == 'placed') return ['bg-[#548D4F]', 'border-[#548D4F]']
  else if (state == 'in-word') return ['bg-[#B69F3B]', 'border-[#B69F3B]']
  return ['bg-[#3A3A3C]', 'border-[#3A3A3C]']
  // else if (state == 'wrong') return 'bg-[#3A3A3C]'
}

const completeAnimation = (state: State) => {
  isRotated.value = true
  // blockComp.value?.classList.add('rotateAnimation')

  setTimeout(() => {
    blockComp.value?.classList.add(...stateToColor(state))
  }, 150)

  setTimeout(() => {
    // blockComp.value?.classList.remove('rotateAnimation')
    isRotated.value = false
  }, 300)
}

const borderDefaultColor = computed(() => {
  if (isRotated.value) return undefined
  if (props.modelValue == undefined) if (props.modelValue === undefined) return 'border-[#3A3A3C]'
  return 'border-[#565758]'
})

watch(
  () => props.modelValue,
  () => {
    scaleAnimation()
  },
)

defineExpose({ completeAnimation })
</script>

<template>
  <div
    class="w-16 h-16 border-2 text-white flex justify-center items-center text-3xl uppercase duration-150"
    :class="{ ...borderDefaultColor.value, rotateAnimation: isRotated }"
    ref="block"
  >
    {{ modelValue }}
  </div>
</template>

<style scoped>
@keyframes rotateAnimationKeyFrames {
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

.rotateAnimation {
  animation: rotateAnimationKeyFrames 0.3s linear;
}
</style>
