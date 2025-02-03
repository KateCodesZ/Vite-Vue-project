<script setup>
</script>

<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/shop">Shop</router-link>
      <router-link to="/cart">Cart</router-link>
      <router-link to="/checkout">Checkout</router-link>
      <router-link to="/favorites">Favorites</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
  </header>

  <main>
    <router-view></router-view>
  </main>
</template>

<style scoped>

</style>
