<script setup lang="ts">
import { useTemplateRef, watch } from 'vue'
import { State } from '@/types/state'

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

const stateToBackground = (state: State) => {
  if (state == 'placed') return 'bg-[#548D4F]'
  else if (state == 'in-word') return 'bg-[#B69F3B]'
  else if (state == 'wrong') return 'bg-[#3A3A3C]'
}

const completeAnimation = (state: string) => {
  blockComp.value?.classList.add('rotateAnimation')
  blockComp.value?.classList.add(stateToBackground(state))

  setTimeout(() => {
    blockComp.value?.classList.remove('rotateAnimation')
  }, 300)
}

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
    class="w-16 h-16 border-2 border-gray-500 text-white flex justify-center items-center text-3xl uppercase duration-150"
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
