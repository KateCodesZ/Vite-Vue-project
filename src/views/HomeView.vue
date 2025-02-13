<template>
  <div>
    <HeroSection></HeroSection>
    <ProductCategories></ProductCategories>
  </div>

  <OfferBlock
    :imageSrc="OfferImage"
    imageAlt="Martini cocktail glasses with blue stems"
    subtitle="ERBJUDANDE"
    title="Glas 50%*"
    description="Upptäck vårt breda utbud av glas för vardag, fest och mysiga familjemiddagar!!"
    note="*Gäller t.o.m.  22/12 och kan inte kombineras med andra erbjudanden."
    buttonText="HANDLA GLAS"
    @click="handleGlassClick"
  ></OfferBlock>
</template>

<script setup>
  import HeroSection from '../components/HeroSection.vue'
  import ProductCategories from '../components/ProductCategories.vue'
  import OfferBlock from '../components/OfferBlock.vue'
  import OfferImage from '../assets/images/glasses.jpg'

  const handleGlassClick = () => {
    console.log('Navigating to glass section...')
  }

  defineOptions({
    name: 'HomeView'
  })
</script>
