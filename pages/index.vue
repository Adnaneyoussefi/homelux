<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[600px] gradient-mesh overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-accent-600/60"></div>
      <div class="relative container mx-auto px-4 h-full flex items-center">
        <div class="max-w-2xl animate-fade-in">
          <h1 class="text-6xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Transform Your Home
            <span class="block text-accent-300">With Elegance</span>
          </h1>
          <p class="text-xl text-primary-100 mb-8">
            Discover premium kitchen appliances and artisanal home decor crafted for modern living
          </p>
          <div class="flex gap-4">
            <NuxtLink to="/shop" class="btn-primary bg-white text-primary-900 hover:bg-primary-50">
              Shop Collection
            </NuxtLink>
            <NuxtLink to="/shop/home-decor" class="btn-secondary border-white text-primary-900 hover:bg-white/10 hover:text-white">
              Explore Decor
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Categories -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title inline-block">Shop by Category</h2>
          <p class="text-primary-600 mt-4 max-w-2xl mx-auto">
            Explore our curated collections of premium products for every room
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/shop/${category.slug}`"
            class="group relative h-96 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              :src="category.image"
              :alt="category.name"
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-8">
              <h3 class="text-3xl font-display font-bold text-white mb-2">{{ category.name }}</h3>
              <p class="text-primary-100 mb-4">{{ category.description }}</p>
              <span class="inline-flex items-center text-white font-semibold group-hover:gap-3 transition-all">
                Explore Collection
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="section-title inline-block">Featured Products</h2>
          <p class="text-primary-600 mt-4 max-w-2xl mx-auto">
            Hand-picked favorites combining style and functionality
          </p>
        </div>

        <div v-if="loading" class="text-center py-12">
          <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900"></div>
        </div>

        <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
            class="animate-slide-up"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/shop" class="btn-primary">
            View All Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 gradient-mesh">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-xl mb-2">Free Shipping</h3>
            <p class="text-primary-600">On orders over $100</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-xl mb-2">Secure Payment</h3>
            <p class="text-primary-600">100% secure checkout</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-xl mb-2">Easy Returns</h3>
            <p class="text-primary-600">30-day return policy</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="font-display font-bold text-xl mb-2">24/7 Support</h3>
            <p class="text-primary-600">Dedicated customer service</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

  data() {
    return {
      categories: [],
      featuredProducts: [],
      loading: true
    };
  },

  async mounted() {
    await this.loadData();
  },

  methods: {
    async loadData() {
      try {
        this.loading = true;

        // Fetch categories
        const categoriesData = await $fetch('/api/categories');
        this.categories = categoriesData;

        // Fetch featured products
        const productsData = await $fetch('/api/products', {
          params: { featured: true, limit: 8 }
        });
        this.featuredProducts = productsData.products;
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
