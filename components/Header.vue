<template>
  <header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
    <div class="container mx-auto px-4">
      <!-- Top bar -->
      <div class="border-b border-primary-100 py-2 text-sm">
        <div class="flex justify-between items-center">
          <p class="text-primary-700">Free shipping on orders over $100</p>
          <div class="flex gap-4">
            <a href="#" class="text-primary-700 hover:text-primary-900">Customer Service</a>
            <a href="#" class="text-primary-700 hover:text-primary-900">Track Order</a>
          </div>
        </div>
      </div>

      <!-- Main header -->
      <div class="py-4">
        <div class="flex justify-between items-center">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-2 group">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-800 to-accent-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span class="text-white font-display font-bold text-xl">HL</span>
            </div>
            <div>
              <h1 class="text-2xl font-display font-bold text-primary-900">HomeLux</h1>
              <p class="text-xs text-primary-600 -mt-1">Premium Living</p>
            </div>
          </NuxtLink>

          <!-- Search bar -->
          <div class="hidden md:block flex-1 max-w-xl mx-8">
            <div class="relative">
              <input
                type="text"
                v-model="searchQuery"
                @keyup.enter="handleSearch"
                placeholder="Search for products..."
                class="w-full px-4 py-3 pr-12 border-2 border-primary-200 rounded-full focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"
              />
              <button
                @click="handleSearch"
                class="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-800 text-white p-2 rounded-full hover:bg-primary-900 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex items-center gap-4">
            <NuxtLink
              to="/wishlist"
              class="relative p-2 hover:bg-primary-50 rounded-full transition-colors"
            >
              <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span
                v-if="wishlistStore.itemCount > 0"
                class="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
              >
                {{ wishlistStore.itemCount }}
              </span>
            </NuxtLink>

            <button
              @click="cartStore.toggleCart()"
              class="relative p-2 hover:bg-primary-50 rounded-full transition-colors"
            >
              <svg class="w-6 h-6 text-primary-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span
                v-if="cartStore.totalItems > 0"
                class="absolute -top-1 -right-1 bg-accent-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold"
              >
                {{ cartStore.totalItems }}
              </span>
            </button>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="border-t border-primary-100 py-3">
        <ul class="flex gap-8 justify-center">
          <li>
            <NuxtLink
              to="/"
              class="text-primary-800 hover:text-primary-900 font-medium transition-colors"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/shop/kitchen-appliances"
              class="text-primary-800 hover:text-primary-900 font-medium transition-colors"
            >
              Kitchen Appliances
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/shop/home-decor"
              class="text-primary-800 hover:text-primary-900 font-medium transition-colors"
            >
              Home Decor
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/shop"
              class="text-primary-800 hover:text-primary-900 font-medium transition-colors"
            >
              All Products
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

export default {
  name: 'Header',

  data() {
    return {
      searchQuery: ''
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },
    wishlistStore() {
      return useWishlistStore();
    }
  },

  methods: {
    handleSearch() {
      if (this.searchQuery.trim()) {
        this.$router.push({
          path: '/shop',
          query: { search: this.searchQuery }
        });
      }
    }
  }
};
</script>
