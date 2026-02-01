<template>
  <div class="card group">
    <div class="relative overflow-hidden">
      <NuxtLink :to="`/product/${product.slug}`">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </NuxtLink>

      <!-- Badges -->
      <div class="absolute top-3 left-3 flex flex-col gap-2">
        <span
          v-if="product.discount > 0"
          class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
        >
          -{{ product.discount }}%
        </span>
        <span
          v-if="product.featured"
          class="bg-accent-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
        >
          Featured
        </span>
      </div>

      <!-- Quick Actions -->
      <div class="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          @click="toggleWishlist"
          class="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
          :class="{ 'text-red-500': isInWishlist }"
        >
          <svg
            class="w-5 h-5"
            :fill="isInWishlist ? 'currentColor' : 'none'"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        <NuxtLink
          :to="`/product/${product.slug}`"
          class="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </NuxtLink>
      </div>

      <!-- Out of Stock Overlay -->
      <div
        v-if="!product.inStock"
        class="absolute inset-0 bg-black/50 flex items-center justify-center"
      >
        <span class="bg-white text-primary-900 px-4 py-2 rounded-lg font-bold">
          Out of Stock
        </span>
      </div>
    </div>

    <div class="p-5">
      <p class="text-sm text-primary-600 mb-1">{{ product.subcategory }}</p>
      
      <NuxtLink :to="`/product/${product.slug}`">
        <h3 class="font-display font-semibold text-lg text-primary-900 mb-2 hover:text-primary-700 transition-colors line-clamp-2">
          {{ product.name }}
        </h3>
      </NuxtLink>

      <!-- Rating -->
      <div class="flex items-center gap-2 mb-3">
        <div class="flex">
          <svg
            v-for="star in 5"
            :key="star"
            class="w-4 h-4"
            :class="star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
        <span class="text-sm text-primary-600">({{ product.reviewCount }})</span>
      </div>

      <!-- Price -->
      <div class="flex items-center gap-2 mb-4">
        <span class="text-2xl font-bold text-primary-900">${{ product.price.toFixed(2) }}</span>
        <span
          v-if="product.originalPrice"
          class="text-lg text-primary-500 line-through"
        >
          ${{ product.originalPrice.toFixed(2) }}
        </span>
      </div>

      <!-- Add to Cart Button -->
      <button
        @click="addToCart"
        :disabled="!product.inStock"
        class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg class="w-5 h-5 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {{ product.inStock ? 'Add to Cart' : 'Out of Stock' }}
      </button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

export default {
  name: 'ProductCard',

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  computed: {
    cartStore() {
      return useCartStore();
    },
    wishlistStore() {
      return useWishlistStore();
    },
    isInWishlist() {
      return this.wishlistStore.isInWishlist(this.product.id);
    }
  },

  methods: {
    addToCart() {
      if (this.product.inStock) {
        this.cartStore.addItem(this.product);
        this.cartStore.openCart();
      }
    },
    toggleWishlist() {
      this.wishlistStore.toggleItem(this.product);
    }
  }
};
</script>
