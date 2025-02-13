<script setup>
  import { RouterLink } from 'vue-router'
  import MenuIcon from '../assets/icons/menu.svg?component'
  import HeartIcon from '../assets/icons/heart.svg?component'
  import UserIcon from '../assets/icons/user.svg?component'
  import CartIcon from '../assets/icons/cart.svg?component'
  import Logo from '../assets/icons/logo.svg?component'
  import Logo2 from '../assets/icons/logo2.svg?component'
  import SearchIcon from '../assets/icons/search.svg?component'
</script>

<template>
  <header
    class="max-w-screen-2xl mx-auto sticky top-0 bg-white border-b border-gray-300"
    role="banner"
  >
    <nav aria-label="Primary Navigation">
      <!-- Mobile Navbar (visible on screens smaller than 1024px) -->
      <div class="flex justify-between items-center px-3 py-2 lg:hidden">
        <!-- Left Group: Menu and Search -->
        <div class="flex items-center space-x-2">
          <RouterLink
            to="/menu"
            aria-label="Öppna Meny"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <MenuIcon class="w-6 h-6 fill-current stroke-current"></MenuIcon>
          </RouterLink>
          <RouterLink
            to="/search"
            aria-label="SÖK"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <SearchIcon class="w-6 h-6"></SearchIcon>
          </RouterLink>
        </div>
        <!-- Logo for mobile -->
        <div class="flex items-center">
          <RouterLink to="/" aria-label="Hem">
            <Logo2></Logo2>
          </RouterLink>
        </div>
        <!-- Right Group: Favorites, Login, Cart -->
        <div class="flex items-center space-x-2">
          <RouterLink
            to="/favorites"
            aria-label="Favoriter"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <HeartIcon class="w-6 h-6"></HeartIcon>
          </RouterLink>
          <RouterLink
            to="/login"
            aria-label="Logga in"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <UserIcon class="w-6 h-6"></UserIcon>
          </RouterLink>
          <RouterLink
            to="/cart"
            aria-label="Varukorg"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <CartIcon class="w-6 h-6"></CartIcon>
          </RouterLink>
        </div>
      </div>

      <!-- Desktop Navbar (visible on screens 1024px and above) -->
      <div class="hidden lg:flex items-center justify-between container mx-auto h-[65px]">
        <!-- Left Side: Menu and Search -->
        <div class="flex items-center space-x-6">
          <RouterLink
            to="/menu"
            aria-label="Öppna Meny"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <MenuIcon class="w-6 h-6 mr-2"></MenuIcon>
            <span>MENY</span>
          </RouterLink>
          <div class="relative">
            <input
              type="text"
              placeholder="SÖK"
              class="pl-10 pr-4 py-1 w-64 border rounded-full text-sm focus:outline-none focus:ring-[0.5px] focus:ring-[var(--color-mahogany)] focus:border-[var(--color-mahogany)] placeholder-gray-400 text-gray-600 transition-all duration-200"
            />
            <SearchIcon
              class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6"
            ></SearchIcon>
          </div>
        </div>
        <!-- Logo for Desktop -->
        <div>
          <RouterLink to="/" aria-label="Hem">
            <Logo></Logo>
          </RouterLink>
        </div>
        <!-- Right Side: Favorites, Login, Cart -->
        <div class="flex items-center space-x-6">
          <RouterLink
            to="/favorites"
            aria-label="Favoriter"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <HeartIcon class="w-6 h-6 mr-2"></HeartIcon>
            <span>FAVORITER</span>
          </RouterLink>
          <RouterLink
            to="/login"
            aria-label="Logga in"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <UserIcon class="w-6 h-6 mr-2"></UserIcon>
            <span>LOGGA IN</span>
          </RouterLink>
          <RouterLink
            to="/cart"
            aria-label="Varukorg"
            class="flex items-center"
            active-class="text-mahogany"
          >
            <CartIcon class="w-6 h-6 mr-2"></CartIcon>
            <span>VARUKORG</span>
          </RouterLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
