<script>
  import MenuIcon from '../assets/icons/menu.svg?component'
  import HeartIcon from '../assets/icons/heart.svg?component'
  import UserIcon from '../assets/icons/user.svg?component'
  import CartIcon from '../assets/icons/cart.svg?component'
  import Logo from '../assets/icons/logo.svg?component'
  import Logo2 from '../assets/icons/logo2.svg?component'
  import SearchIcon from '../assets/icons/search.svg?component'

  export default {
    name: 'Navbar',
    components: {
      MenuIcon,
      HeartIcon,
      UserIcon,
      CartIcon,
      Logo,
      Logo2,
      SearchIcon
    }
  }
</script>

<template>
  <header>
    <!-- Mobile Navbar (visible on screens smaller than 1024px) -->
    <div class="flex justify-around px-4 py-3 lg:hidden">
      <!-- Menu -->
      <button type="button" aria-label="Öppna Meny" class="flex flex-col items-center">
        <MenuIcon class="w-6 h-6"></MenuIcon>
        <span class="text-xs mt-1">MENY</span>
      </button>
      <!-- Search -->
      <button type="button" aria-label="Sök" class="flex flex-col items-center">
        <SearchIcon class="w-6 h-6"></SearchIcon>
        <span class="text-xs mt-1">SÖK</span>
      </button>
      <!-- Logo (mobile) -->
      <div class="flex flex-col items-center -ml-[2px]">
        <Logo2></Logo2>
      </div>
      <!-- Favorites -->
      <button type="button" aria-label="Favoriter" class="flex flex-col items-center">
        <HeartIcon class="w-6 h-6"></HeartIcon>
        <span class="text-xs mt-1">FAVORITER</span>
      </button>
      <!-- Cart -->
      <button type="button" aria-label="Varukorg" class="flex flex-col items-center">
        <CartIcon class="w-6 h-6"></CartIcon>
        <span class="text-xs mt-1">VARUKORG</span>
      </button>
    </div>

    <!-- Desktop Navbar (visible on screens 1024px and above) -->
    <div class="hidden lg:flex items-center justify-between px-8 py-4">
      <!-- Left Side: Menu and Search -->
      <div class="flex items-center space-x-6">
        <button type="button" aria-label="Öppna Meny" class="flex items-center">
          <MenuIcon class="w-6 h-6 mr-2"></MenuIcon>
          <span>MENY</span>
        </button>
        <div class="relative">
          <input
            type="text"
            placeholder="Sök"
            class="pl-10 pr-4 py-1 w-64 border rounded-full text-sm focus:outline-none focus:ring"
          />
          <SearchIcon
            class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6"
          ></SearchIcon>
        </div>
      </div>
      <!-- Logo for Desktop -->
      <div>
        <Logo></Logo>
      </div>
      <!-- Right Side: Favorites, Login, Cart -->
      <div class="flex items-center space-x-8 text-gray-600">
        <button type="button" aria-label="Favoriter" class="flex items-center">
          <HeartIcon class="w-6 h-6 mr-2"></HeartIcon>
          <span>FAVORITER</span>
        </button>
        <button type="button" aria-label="Logga in" class="flex items-center">
          <UserIcon class="w-6 h-6 mr-2"></UserIcon>
          <span>LOGGA IN</span>
        </button>
        <button type="button" aria-label="Varukorg" class="flex items-center">
          <CartIcon class="w-6 h-6 mr-2"></CartIcon>
          <span>VARUKORG</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
