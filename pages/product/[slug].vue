<template>
  <div v-if="loading" class="min-h-screen flex items-center justify-center">
    <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900"></div>
  </div>

  <div v-else-if="product" class="min-h-screen bg-primary-50 py-12">
    <div class="container mx-auto px-4">
      <!-- Breadcrumb -->
      <nav class="mb-8 text-sm">
        <ol class="flex items-center gap-2 text-primary-600">
          <li><NuxtLink to="/" class="hover:text-primary-900">Home</NuxtLink></li>
          <li>/</li>
          <li><NuxtLink to="/shop" class="hover:text-primary-900">Shop</NuxtLink></li>
          <li>/</li>
          <li class="text-primary-900 font-medium">{{ product.name }}</li>
        </ol>
      </nav>

      <div class="grid lg:grid-cols-2 gap-12 mb-16">
        <!-- Product Images -->
        <div>
          <div class="bg-white rounded-2xl overflow-hidden shadow-xl mb-4">
            <img
              :src="selectedImage"
              :alt="product.name"
              class="w-full h-[500px] object-cover"
            />
          </div>
          <div class="grid grid-cols-4 gap-4">
            <button
              v-for="(image, index) in product.images"
              :key="index"
              @click="selectedImage = image"
              class="border-2 rounded-lg overflow-hidden transition-all"
              :class="selectedImage === image ? 'border-primary-800' : 'border-primary-200 hover:border-primary-400'"
            >
              <img :src="image" :alt="`${product.name} view ${index + 1}`" class="w-full h-20 object-cover" />
            </button>
          </div>
        </div>

        <!-- Product Info -->
        <div>
          <div class="mb-4">
            <span class="text-sm font-semibold text-accent-600 uppercase tracking-wide">
              {{ product.subcategory }}
            </span>
          </div>

          <h1 class="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            {{ product.name }}
          </h1>

          <!-- Rating -->
          <div class="flex items-center gap-3 mb-6">
            <div class="flex">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-5 h-5"
                :class="star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <span class="text-primary-700 font-medium">{{ product.rating }} ({{ product.reviewCount }} reviews)</span>
          </div>

          <!-- Price -->
          <div class="mb-6">
            <div class="flex items-baseline gap-3">
              <span class="text-5xl font-bold text-primary-900">${{ product.price.toFixed(2) }}</span>
              <span v-if="product.originalPrice" class="text-2xl text-primary-500 line-through">
                ${{ product.originalPrice.toFixed(2) }}
              </span>
              <span v-if="product.discount > 0" class="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                Save {{ product.discount }}%
              </span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-primary-700 text-lg mb-8 leading-relaxed">
            {{ product.description }}
          </p>

          <!-- Stock Status -->
          <div class="mb-6">
            <span
              v-if="product.inStock"
              class="inline-flex items-center text-green-600 font-semibold"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
              </svg>
              In Stock
            </span>
            <span v-else class="inline-flex items-center text-red-600 font-semibold">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
              </svg>
              Out of Stock
            </span>
          </div>

          <!-- Quantity -->
          <div class="mb-6">
            <label class="block text-sm font-semibold text-primary-900 mb-2">Quantity</label>
            <div class="flex items-center gap-3">
              <button
                @click="quantity > 1 && quantity--"
                class="w-12 h-12 bg-white border-2 border-primary-300 rounded-lg hover:bg-primary-100 transition-colors font-bold"
              >
                −
              </button>
              <input
                type="number"
                v-model.number="quantity"
                min="1"
                class="w-20 h-12 text-center border-2 border-primary-300 rounded-lg focus:border-primary-500 focus:outline-none font-bold"
              />
              <button
                @click="quantity++"
                class="w-12 h-12 bg-white border-2 border-primary-300 rounded-lg hover:bg-primary-100 transition-colors font-bold"
              >
                +
              </button>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex gap-4 mb-8">
            <button
              @click="addToCart"
              :disabled="!product.inStock"
              class="flex-1 btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg class="w-6 h-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Add to Cart
            </button>
            <button
              @click="toggleWishlist"
              class="btn-secondary px-6 py-4"
              :class="{ 'bg-red-50 border-red-500 text-red-500': isInWishlist }"
            >
              <svg
                class="w-6 h-6"
                :fill="isInWishlist ? 'currentColor' : 'none'"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>

          <!-- Features -->
          <div class="bg-white rounded-xl p-6 shadow-md mb-6">
            <h3 class="font-display font-bold text-xl mb-4">Key Features</h3>
            <ul class="space-y-2">
              <li v-for="(feature, index) in product.features" :key="index" class="flex items-start">
                <svg class="w-5 h-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                <span class="text-primary-700">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Specifications -->
          <div class="bg-white rounded-xl p-6 shadow-md">
            <h3 class="font-display font-bold text-xl mb-4">Specifications</h3>
            <dl class="space-y-2">
              <div v-for="(value, key) in product.specifications" :key="key" class="flex justify-between py-2 border-b border-primary-100">
                <dt class="font-semibold text-primary-900 capitalize">{{ key.replace(/([A-Z])/g, ' $1').trim() }}:</dt>
                <dd class="text-primary-700">{{ value }}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-2xl font-bold text-primary-900 mb-4">Product Not Found</h1>
      <NuxtLink to="/shop" class="btn-primary">
        Back to Shop
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '~/stores/cart';
import { useWishlistStore } from '~/stores/wishlist';

export default {
  name: 'ProductDetailPage',

  data() {
    return {
      product: null,
      loading: true,
      quantity: 1,
      selectedImage: null
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },
    wishlistStore() {
      return useWishlistStore();
    },
    isInWishlist() {
      return this.product && this.wishlistStore.isInWishlist(this.product.id);
    }
  },

  async mounted() {
    await this.fetchProduct();
  },

  methods: {
    async fetchProduct() {
      try {
        this.loading = true;
        const slug = this.$route.params.slug;
        this.product = await $fetch(`/api/products/${slug}`);
        this.selectedImage = this.product.images[0] || this.product.image;
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.loading = false;
      }
    },

    addToCart() {
      if (this.product && this.product.inStock) {
        this.cartStore.addItem(this.product, this.quantity);
        this.cartStore.openCart();
      }
    },

    toggleWishlist() {
      if (this.product) {
        this.wishlistStore.toggleItem(this.product);
      }
    }
  }
};
</script>
