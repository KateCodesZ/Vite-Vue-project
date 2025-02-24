<template>
  <footer class="bg-marianblue text-floralwhite">
    <div class="max-w-screen-xl mx-auto px-4 py-12 lg:px-20">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-b border-floralwhite/20 py-12"
      >
        <!-- Help Section -->
        <div>
          <h2 class="text-xl font-extrabold text-floralwhite mb-6">Hjälp</h2>
          <div class="flex flex-col space-y-4">
            <a href="#" class="text-floralwhite hover:text-white/80">Hitta butik</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Öppet köp</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Retur & reklamation</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Kundservice</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Personuppgiftspolicy</a>
          </div>
        </div>

        <!-- Sortiment Section -->
        <div>
          <h2 class="text-xl font-extrabold text-floralwhite mb-6">Sortiment</h2>
          <div class="flex flex-col space-y-4">
            <a href="#" class="text-floralwhite hover:text-white/80">Keramik</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Vaser</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Textil</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Ljus</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Lampor</a>
          </div>
        </div>

        <!-- Om Casa Mia Section -->
        <div>
          <h2 class="text-xl font-extrabold text-floralwhite mb-6">Om Casa Mia</h2>
          <div class="flex flex-col space-y-4">
            <a href="#" class="text-floralwhite hover:text-white/80">Press</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Jobba hos oss</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Våra butiker</a>
            <a href="#" class="text-floralwhite hover:text-white/80">Hållbarhet</a>
          </div>
        </div>

        <!-- Följ oss Section -->
        <div>
          <h2 class="text-xl font-extrabold text-floralwhite mb-6">Följ oss</h2>
          <!-- Social Media Icons -->
          <div class="flex space-x-4 mb-6">
            <a href="#" class="text-floralwhite hover:text-white/80">
              <img src="../assets/icons/Instagram.svg" alt="Instagram" class="w-6 h-6" />
            </a>
            <a href="#" class="text-floralwhite hover:text-white/80">
              <img src="../assets/icons/Facebook.svg" alt="Facebook" class="w-6 h-6" />
            </a>
            <a href="#" class="text-floralwhite hover:text-white/80">
              <img src="../assets/icons/Pinterest.svg" alt="Pinterest" class="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <!-- Logo and Copyright -->
      <div class="flex flex-col items-center justify-center pt-12">
        <img src="../assets/icons/Logo.svg" alt="Casa Mia store logo" class="h-12 invert" />
        <p class="text-sm text-floralwhite/80 mt-4">© 2025 All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Component'
  }
</script>
