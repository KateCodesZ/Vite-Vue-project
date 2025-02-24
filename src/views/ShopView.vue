<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="flex justify-between items-center mb-8">
      <h1
        class="text-3xl md:text-4xl lg:text-5xl font-montserrat-alt text-marianblue font-semibold"
      >
        Alla produkter
      </h1>
    </div>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Filters Sidebar -->
      <div class="w-full md:w-64 flex-shrink-0">
        <!-- Categories -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Kategorier</h2>
          <div class="space-y-2">
            <label v-for="category in categories" :key="category" class="flex items-center">
              <input v-model="selectedCategories" type="checkbox" :value="category" class="mr-2" />
              {{ category }}
            </label>
          </div>
        </div>

        <!-- Price Range -->
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-4">Pris</h2>
          <div class="flex items-center space-x-4">
            <input
              v-model="priceRange.min"
              type="number"
              placeholder="Min"
              class="w-24 p-2 border rounded"
            />
            <span>-</span>
            <input
              v-model="priceRange.max"
              type="number"
              placeholder="Max"
              class="w-24 p-2 border rounded"
            />
          </div>
        </div>
      </div>

      <!-- Products Grid -->
      <div class="flex-1">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in filteredProducts" :key="product.id" class="flex flex-col">
            <div class="relative w-full pb-[125%]">
              <img
                :src="product.image"
                :alt="product.title"
                class="absolute inset-0 w-full h-full object-cover rounded"
              />
              <div
                v-if="product.isSale"
                class="absolute top-2 left-2 bg-mahogany text-white text-sm px-2 py-1"
              >
                SALE
              </div>
              <div
                v-if="product.isNew"
                class="absolute top-2 left-2 bg-marianblue text-white text-sm px-2 py-1"
              >
                NEW
              </div>
            </div>
            <div class="mt-4 flex flex-col gap-2">
              <p class="text-base font-semibold text-gray-600 truncate">{{ product.title }}</p>
              <p class="text-base font-medium text-gray-600">{{ product.price }} KR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import { useProductsStore } from '../stores/products'

  const store = useProductsStore()
  const selectedCategories = ref([])
  const priceRange = ref({
    min: '',
    max: ''
  })

  // Get unique categories from products
  const categories = computed(() => {
    const cats = store.products.map((product) => product.category)
    return [...new Set(cats)]
  })

  // Filter products based on selected categories and price range
  const filteredProducts = computed(() => {
    return store.products.filter((product) => {
      const matchesCategory =
        selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category)

      const matchesPrice =
        (!priceRange.value.min || product.price >= priceRange.value.min) &&
        (!priceRange.value.max || product.price <= priceRange.value.max)

      return matchesCategory && matchesPrice
    })
  })

  onMounted(async () => {
    if (!store.products.length) {
      await store.fetchProducts()
    }
  })
</script>
