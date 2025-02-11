<script setup>
  import { ref } from 'vue'
  import keramik from '../assets/images/keramik.png'
  import lampor from '../assets/images/lampor.png'
  import ljus from '../assets/images/ljus.png'
  import vaser from '../assets/images/vaser.png'
  import textil from '../assets/images/textil.png'

  const state = ref({
    categories: [
      { name: 'KERAMIK', image: keramik },
      { name: 'LAMPOR', image: lampor },
      { name: 'LJUS', image: ljus },
      { name: 'VASER', image: vaser },
      { name: 'TEXTIL', image: textil }
    ]
  })
</script>

<template>
  <div class="overflow-x-auto">
    <div class="grid grid-cols-5 gap-4 min-w-max px-8">
      <div
        v-for="category in state.categories"
        :key="category.name"
        class="flex flex-col items-center text-center cursor-pointer"
      >
        <img
          :src="category.image"
          :alt="category.name"
          class="sm:h-20 w-20 md:h-30 md:w-30 object-contain"
        />
        <span class="mt-2 text-xs md:text-sm font-medium">
          {{ category.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
</style>
