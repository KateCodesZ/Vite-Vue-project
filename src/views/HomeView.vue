<template>
  <div>
    <HeroSection></HeroSection>
    <ProductCategories></ProductCategories>
  </div>
</template>

<script setup>
  import HeroSection from '../components/HeroSection.vue'
  import ProductCategories from '../components/ProductCategories.vue'
  defineOptions({
    name: 'HomeView'
  })
</script>
