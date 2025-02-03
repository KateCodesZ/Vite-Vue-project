import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import ProductCart from '../views/ProductCart.vue'
import Checkout from '../views/Checkout.vue'
import Login from '../views/auth/Login.vue'
import Favorites from '../views/user/Favorites.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/cart',
      name: 'cart',
      component: ProductCart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites
    }
  ]
})

export default router
