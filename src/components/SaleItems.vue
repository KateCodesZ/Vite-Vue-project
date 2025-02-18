<template>
  <div class="max-w-screen-xl mx-auto">
    <div class="flex justify-between items-center my-8 md:m-6 px-6 lg:px-12">
      <h2
        class="text-3xl md:text-4xl lg:text-5xl font-montserrat-alt text-marianblue font-semibold"
      >
        Sista chansen
      </h2>
      <a href="#" class="text-gray-600 font-medium underline">VISA ALLA</a>
    </div>
    <!-- Product Cards Container -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 px-4 mb-12 my-10">
      <div v-for="product in saleItems" :key="product.id" class="flex flex-col">
        <!-- Image container with 4:5 ratio -->
        <div class="relative w-full pb-[125%]">
          <img
            class="absolute inset-0 w-full h-full object-cover"
            :src="product.image"
            :alt="product.title"
          />
          <div class="absolute top-2 left-2 bg-mahogany text-white text-sm px-2 py-1">SALE</div>
        </div>
        <div class="mt-4 flex flex-col gap-2">
          <p class="text-base font-semibold text-gray-600 truncate">{{ product.title }}</p>
          <p class="text-base font-medium text-gray-600">{{ product.price }} KR</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { computed, onMounted } from 'vue'
  import { useProductsStore } from '../stores/products'

  const store = useProductsStore()

  onMounted(() => {
    if (!store.products.length) {
      store.fetchProducts()
    }
  })

  const saleItems = computed(() => store.products.filter((product) => product.isSale).slice(0, 4))
</script>
