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
    @click="handleOfferClick"
  ></OfferBlock>

  <SaleItems></SaleItems>

  <OfferBlock
    :imageSrc="OfferRegImage"
    imageAlt="Two geometric ceramic vasses with floral compositions"
    subtitle=""
    title="Bli kund idag"
    buttonText="REGISTRERA DIG"
    :reverse="true"
    @click="handleLoginClick"
  >
    <template #description>
      <ul class="list-none text-left px-4 md:px-8 text-gray-700 lg:text-2xl space-y-2">
        <li class="flex items-start">
          <span class="mr-2">✔</span>
          <span>Bonuspoäng</span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✔</span>
          <span>Få 10% rabatt på ett kommande köp</span>
        </li>
        <li class="flex items-start">
          <span class="mr-2">✔</span>
          <span>Exklusiva erbjudanden &amp; spännande nyheter</span>
        </li>
      </ul>
    </template>
  </OfferBlock>
</template>

<script setup>
  import HeroSection from '../components/HeroSection.vue'
  import ProductCategories from '../components/ProductCategories.vue'
  import SaleItems from '../components/SaleItems.vue'
  import OfferBlock from '../components/OfferBlock.vue'
  import OfferImage from '../assets/images/offer glasses.jpg'
  import OfferRegImage from '../assets/images/offer reg.jpg'

  const handleOfferClick = () => {
    console.log('Navigating to glass section...')
  }
  const handleLoginClick = () => {
    console.log('Navigating to registration / login page...')
  }

  defineOptions({
    name: 'HomeView'
  })
</script>
