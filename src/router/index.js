import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ProductCartView from '../views/ProductCartView.vue'
import CheckoutView from '../views/CheckoutView.vue'
import LoginView from '../views/auth/LoginView.vue'
import UserFavoritesView from '../views/user/UserFavoritesView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/cart',
      name: 'cart',
      component: ProductCartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/favorites',
      name: 'favorites',
      component: UserFavoritesView
    }
  ]
})

export default router
