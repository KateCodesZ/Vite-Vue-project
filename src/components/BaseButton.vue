<template>
  <button
    type="button"
    class="inline-block rounded-sm bg-marianblue text-white px-8 py-3 text-lg font-medium transition hover:scale-110 hover:bg-mahogany hover:shadow-xl focus:ring-3 focus:outline-hidden cursor-pointer"
    @click="onClick"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
  defineProps({
    text: {
      type: String,
      required: false
    },
    onClick: {
      type: Function,
      default: () => {}
    }
  })
</script>
