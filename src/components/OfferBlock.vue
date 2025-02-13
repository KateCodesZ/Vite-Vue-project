<template>
  <section class="bg-marianblue py-12">
    <div
      class="container mx-auto px-6 lg:px-8 xl:px-4 xl:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      :class="{ 'md:flex-row-reverse': reverse }"
    >
      <!-- Image Section -->
      <img :src="imageSrc" :alt="imageAlt" class="mx-auto block object-contain" />

      <!-- Text Section -->
      <div
        class="bg-floralwhite h-full p-6 xl:p-4 flex flex-col items-center justify-center text-center"
      >
        <h3 class="text-marianblue font-semibold text-xl lg:mt-4 lg:text-3xl">{{ subtitle }}</h3>
        <h2 class="text-mahogany font-bold text-4xl md:text-5xl lg:mt-6">{{ title }}</h2>
        <p class="text-gray-700 mt-4 lg:mt-6 lg:text-2xl">
          {{ description }}
        </p>
        <p v-if="note" class="text-sm text-gray-500 mt-4 lg:mt-6">
          {{ note }}
        </p>

        <!-- Button -->
        <BaseButton :text="buttonText" class="mt-6 lg:mt-8" @click="emitClick"></BaseButton>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { defineProps, defineEmits } from 'vue'
  import BaseButton from './BaseButton.vue'

  defineProps({
    imageSrc: String,
    imageAlt: String,
    subtitle: String,
    title: String,
    description: String,
    note: String,
    buttonText: String,
    reverse: Boolean
  })

  const emit = defineEmits(['click'])
  const emitClick = () => emit('click')
</script>
