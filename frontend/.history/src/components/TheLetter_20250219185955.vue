<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { type State } from '@/types/state'

const props = defineProps<{
  modelValue?: string
}>()

const isRotated = ref(false)
const isScaled = ref(false)
const colors = ref<string[]>([])

const scaleAnimation = () => {
  isScaled.value = true

  setTimeout(() => {
    isScaled.value = false
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

  setTimeout(() => {
    colors.value = stateToColor(state)
  }, 150)
}

const borderDefaultColor = computed(() => {
  if (isRotated.value) return ''
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
    class="w-16 h-16 border-2 text-white flex justify-center items-center text-3xl uppercase duration-150 shakeAnimation"
    :class="[
      ...colors,
      borderDefaultColor,
      { rotateAnimation: isRotated },
      { 'scale-110': isScaled },
    ]"
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

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-20px);
  }
  20% {
    transform: translateX(15px);
  }
  30% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-2px);
  }
  60% {
    transform: translateX(1px);
  }
  70% {
    transform: translateX(0);
  }
}

.rotateAnimation {
  animation: rotateAnimationKeyFrames 0.3s linear;
}

.shakeAnimation {
  animation: shake 2s linear;
}
</style>
