<template>
  <div class="min-h-screen bg-primary-50 py-8">
    <div class="container mx-auto px-4">
      <div class="mb-8">
        <h1 class="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
          All Products
        </h1>
        <p class="text-primary-600">
          {{ totalProducts }} products available
        </p>
      </div>

      <div class="flex gap-8">
        <aside class="hidden lg:block w-64 flex-shrink-0">
          <div class="sticky top-24 space-y-6">
            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Categories</h3>
              <div class="space-y-2">
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="filters.category" value="" class="mr-2" />
                  <span>All Categories</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="filters.category" value="kitchen-appliances" class="mr-2" />
                  <span>Kitchen Appliances</span>
                </label>
                <label class="flex items-center cursor-pointer">
                  <input type="radio" v-model="filters.category" value="home-decor" class="mr-2" />
                  <span>Home Decor</span>
                </label>
              </div>
            </div>

            <div class="bg-white rounded-xl p-6 shadow-md">
              <h3 class="font-display font-bold text-lg mb-4">Price Range</h3>
              <div class="space-y-3">
                <div>
                  <label class="text-sm text-primary-600">Min Price</label>
                  <input type="number" v-model.number="filters.minPrice" placeholder="$0" class="input-field mt-1" />
                </div>
                <div>
                  <label class="text-sm text-primary-600">Max Price</label>
                  <input type="number" v-model.number="filters.maxPrice" placeholder="$1000" class="input-field mt-1" />
                </div>
              </div>
            </div>

            <button @click="clearFilters" class="w-full btn-secondary">
              Clear All Filters
            </button>
          </div>
        </aside>

        <main class="flex-1">
          <div class="flex justify-between items-center mb-6 bg-white rounded-xl p-4 shadow-md">
            <div class="flex items-center gap-4">
              <label class="text-sm font-medium text-primary-700">Sort by:</label>
              <select v-model="filters.sort" class="border-2 border-primary-200 rounded-lg px-3 py-2 focus:border-primary-500 focus:outline-none">
                <option value="">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          <div v-if="loading" class="text-center py-20">
            <div class="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-900"></div>
          </div>

          <div v-else-if="products.length > 0" class="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
          </div>

          <div v-else class="text-center py-20">
            <p class="text-xl text-primary-600">No products found</p>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopIndexPage',
  data() {
    return {
      products: [],
      totalProducts: 0,
      loading: true,
      filters: {
        category: '',
        minPrice: null,
        maxPrice: null,
        sort: ''
      }
    };
  },
  watch: {
    filters: {
      handler() {
        this.fetchProducts();
      },
      deep: true
    }
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        this.loading = true;
        const params = { limit: 100 };
        if (this.filters.category) params.category = this.filters.category;
        if (this.filters.minPrice) params.minPrice = this.filters.minPrice;
        if (this.filters.maxPrice) params.maxPrice = this.filters.maxPrice;
        if (this.filters.sort) params.sort = this.filters.sort;
        
        const data = await $fetch('/api/products', { params });
        this.products = data.products;
        this.totalProducts = data.total;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.loading = false;
      }
    },
    clearFilters() {
      this.filters = {
        category: '',
        minPrice: null,
        maxPrice: null,
        sort: ''
      };
    }
  }
};
</script>
