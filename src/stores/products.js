import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  // State: all products loaded from JSON
  const products = ref([])

  // Function to fetch products from JSON file
  async function fetchProducts() {
    try {
      const response = await axios.get('data/products.json')
      products.value = response.data
    } catch (error) {
      console.error('Error loading products:', error)
    }
  }

  // Computed property: filter products where isNew is true
  const newItems = computed(() => products.value.filter((item) => item.isNew === true))

  // Computed property: filter products where isSale is true
  const saleItems = computed(() => products.value.filter((item) => item.isSale === true))

  // Function to toggle the 'favorite' property of a product by id
  function toggleFavorite(itemId) {
    const product = products.value.find((item) => item.id === itemId)
    if (product) {
      product.favorite = !product.favorite
    }
  }

  return {
    products,
    fetchProducts,
    newItems,
    saleItems,
    toggleFavorite
  }
})
