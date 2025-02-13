<template>
  <section class="bg-marianblue py-12">
    <!--Reverse grid order on md screens if reverse prop is true-->
    <div
      class="container mx-auto px-6 lg:px-8 xl:px-4 xl:max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      :class="{ 'md:flex-row-reverse': reverse }"
    >
      <!-- Text Section -->
      <!-- Change order based on reverse prop -->
      <div
        :class="reverse ? 'order-1' : 'order-2'"
        class="bg-floralwhite h-full p-6 xl:p-4 flex flex-col items-center justify-center text-center"
      >
        <h3 class="text-marianblue font-semibold text-xl lg:mt-4 lg:text-3xl">
          {{ subtitle }}
        </h3>
        <h2 class="text-mahogany font-montserrat-alt font-bold text-4xl md:text-5xl lg:mt-6">
          {{ title }}
        </h2>

        <div class="mt-4 lg:mt-6">
          <slot name="description">
            <p class="text-gray-700 lg:text-2xl">
              {{ description }}
            </p>
          </slot>
        </div>

        <p v-if="note" class="text-sm text-gray-500 mt-4 lg:mt-6">
          {{ note }}
        </p>

        <!-- Button -->
        <BaseButton :text="buttonText" class="mt-6 lg:mt-8" @click="emitClick"></BaseButton>
      </div>

      <!-- Image Section -->
      <img
        :src="imageSrc"
        :alt="imageAlt"
        :class="reverse ? 'order-2' : 'order-1'"
        class="mx-auto block object-contain"
      />
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
