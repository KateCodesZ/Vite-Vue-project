<template>
  <div class="py-12">
    <div class="max-w-screen-xl mx-auto px-4">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1
          class="text-3xl md:text-4xl lg:text-5xl font-montserrat-alt text-marianblue font-semibold"
        >
          Alla produkter
        </h1>
        <p class="text-base text-gray-600 mt-2">Hem > Shop</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <div class="w-full lg:w-64 flex-shrink-0">
          <!-- Categories -->
          <div class="mb-8">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-xl font-semibold text-gray-800">Kategorier</h2>
              <button class="text-sm text-gray-600 hover:text-marianblue" @click="clearFilters">
                Rensa filter
              </button>
            </div>
            <div class="space-y-2">
              <label v-for="category in categories" :key="category" class="flex items-center">
                <input
                  v-model="selectedCategories"
                  type="checkbox"
                  :value="category"
                  class="mr-2"
                />
                {{ category }}
              </label>
            </div>
          </div>

          <!-- Price Range -->
          <div class="mb-8">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Pris</h2>
            <div class="space-y-4">
              <div class="flex items-center gap-2">
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
        </div>

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="product in filteredProducts" :key="product.id" class="flex flex-col">
              <!-- Image container with 4:5 ratio -->
              <div class="relative w-full pb-[125%]">
                <img
                  class="absolute inset-0 w-full h-full object-cover"
                  :src="product.image"
                  :alt="product.title"
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
  </div>
</template>

<script setup>
  import { ref, computed, onMounted, watch } from 'vue'
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
    return [...new Set(cats)].sort()
  })

  // Filter products based on selected categories and price range
  const filteredProducts = computed(() => {
    return store.products.filter((product) => {
      const matchesCategory =
        selectedCategories.value.length === 0 || selectedCategories.value.includes(product.category)

      const matchesPrice =
        (!priceRange.value.min || product.price >= Number(priceRange.value.min)) &&
        (!priceRange.value.max || product.price <= Number(priceRange.value.max))

      return matchesCategory && matchesPrice
    })
  })

  // Watch for changes in filters
  watch(
    [selectedCategories, priceRange],
    () => {
      console.log('Filters updated')
    },
    { deep: true }
  )

  // Clear all filters
  const clearFilters = () => {
    selectedCategories.value = []
    priceRange.value = {
      min: '',
      max: ''
    }
  }

  // Fetch products on component mount
  onMounted(async () => {
    if (!store.products.length) {
      await store.fetchProducts()
    }
  })
</script>
