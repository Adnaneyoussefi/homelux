<template>
  <div class="min-h-screen bg-primary-50 py-12">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
          My Wishlist
        </h1>
        <p class="text-primary-600">
          {{ wishlistStore.itemCount }} {{ wishlistStore.itemCount === 1 ? 'item' : 'items' }} saved
        </p>
      </div>

      <div v-if="wishlistStore.itemCount === 0" class="text-center py-20">
        <svg class="w-24 h-24 mx-auto text-primary-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <h2 class="text-2xl font-bold text-primary-900 mb-4">Your wishlist is empty</h2>
        <p class="text-primary-600 mb-6">Start adding products you love!</p>
        <NuxtLink to="/shop" class="btn-primary">
          Browse Products
        </NuxtLink>
      </div>

      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="item in wishlistStore.items"
          :key="item.id"
          class="card group"
        >
          <div class="relative overflow-hidden">
            <NuxtLink :to="`/product/${item.slug}`">
              <img
                :src="item.image"
                :alt="item.name"
                class="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </NuxtLink>

            <button
              @click="wishlistStore.removeItem(item.id)"
              class="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 text-red-500 transition-colors"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>

          <div class="p-5">
            <NuxtLink :to="`/product/${item.slug}`">
              <h3 class="font-display font-semibold text-lg text-primary-900 mb-2 hover:text-primary-700 transition-colors line-clamp-2">
                {{ item.name }}
              </h3>
            </NuxtLink>

            <div class="flex items-center gap-2 mb-3">
              <div class="flex">
                <svg
                  v-for="star in 5"
                  :key="star"
                  class="w-4 h-4"
                  :class="star <= Math.round(item.rating) ? 'text-yellow-400' : 'text-gray-300'"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>

            <div class="text-2xl font-bold text-primary-900 mb-4">
              ${{ item.price.toFixed(2) }}
            </div>

            <div class="flex gap-2">
              <NuxtLink
                :to="`/product/${item.slug}`"
                class="flex-1 btn-primary text-center"
              >
                View Product
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useWishlistStore } from '~/stores/wishlist';

export default {
  name: 'WishlistPage',

  computed: {
    wishlistStore() {
      return useWishlistStore();
    }
  }
};
</script>
