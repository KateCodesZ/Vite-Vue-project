<script setup>
  import heroImage1 from '../assets/images/hero desktop 1.jpg'
  import heroImage2 from '../assets/images/hero desktop 2.jpg'
  import heroMobile from '../assets/images/hero mobile.jpg'
  import BaseButton from './BaseButton.vue'

  const onHandleClick = () => {
    console.log('Navigating to shop...')
  }
</script>

<!-- Mobile Layout: Displays on screens smaller than 1024px -->
<template>
  <div class="lg:hidden">
    <img
      class="w-full md:max-w-[500px] md:mx-auto object-cover"
      :src="heroMobile"
      alt="Modern living room featuring a sofa with decorative throw pillows, a glass side table, and elegant glass candleholders for ambient lighting"
    />
    <section class="px-6 py-8 sm:max-w-[350px] md:max-w-[500px] mx-auto">
      <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">INREDNING</h1>
      <p class="text-[18px] font-semibold text-gray-600 dark:text-gray-400 uppercase">
        FÖR ATT SKAPA KOMFORT I DITT HEM
      </p>
      <p class="mt-3 text-gray-600 dark:text-gray-400">
        Små detaljer, stor skillnad – hitta din stil här. Hos Casa Mia hittar du noggrant utvalda
        produkter som gör ditt hem varmt och välkomnande.
      </p>
      <div class="flex justify-center">
        <BaseButton
          text="HANDLA NU"
          class="mt-6 w-[325px] sm:w-[325px] md:w-[450px]"
          @click="onHandleClick"
        ></BaseButton>
      </div>
    </section>
  </div>

  <!-- Desktop Layout: Displays on screens 1024px and larger -->
  <section class="hidden lg:block container px-6 py-12 mx-auto">
    <div class="lg:flex items-center gap-8 justify-center">
      <!-- Left Container : image -->
      <div class="flex items-center justify-end w-full mt-6 lg:mt-0 lg:w-1/2 lg:max-w-[448px]">
        <img
          class="w-full object-contain"
          :src="heroImage1"
          alt="Elegant table setting with formal dinnerware, featuring place settings with plates, cutlery, and glassware arranged for a dining occasion"
        />
      </div>
      <!-- Right Container: top & bottom -->
      <div class="w-full lg:w-1/2 lg:max-w-[448px] flex flex-col">
        <!-- Top part: image -->
        <div class="flex justify-top">
          <img
            class="w-[448px] h-[285px] object-cover"
            :src="heroImage2"
            alt="Modern living room featuring a sofa with decorative throw pillows, a glass side table, and elegant glass candleholders for ambient lighting"
          />
        </div>
        <!-- Bottom part: Text and button -->
        <div class="mt-6">
          <h1 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-6xl">
            INREDNING
          </h1>
          <p class="text-[18px] font-semibold text-gray-600 dark:text-gray-400 uppercase">
            FÖR ATT SKAPA KOMFORT I DITT HEM
          </p>
          <p class="mt-3 text-gray-600 dark:text-gray-400">
            Små detaljer, stor skillnad – hitta din stil här. Hos Casa Mia hittar du noggrant
            utvalda produkter som gör ditt hem varmt och välkomnande.
          </p>
          <BaseButton text="HANDLA NU" class="mt-6 w-[250px]" @click="onHandleClick"></BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
